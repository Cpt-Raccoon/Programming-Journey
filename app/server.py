"""Programming Journey: malý server, který servíruje web a spouští kód.

Jen standardní knihovna Pythonu, žádné závislosti.
  GET  /                -> web (index.html ze složky STATIC_DIR)
  GET  /api/health      -> {"ok": true, "langs": [...]}
  POST /api/run         -> {"lang": "cpp"|"python", "code": "...", "input": "..."}
                           <- {"ok": bool, "out": "...", "err": "...", "phase": "compile"|"run"}
  GET  /api/progress    -> uložený postup (JSON), {} když zatím žádný není
  PUT  /api/progress    -> sloučí poslaný postup s uloženým a vrátí výsledek
                           (s hlavičkou X-Reset: 1 uložený postup nahradí)
"""
import json
import os
import resource
import shutil
import signal
import subprocess
import tempfile
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

PORT = int(os.environ.get("PORT", "8080"))
STATIC_DIR = os.environ.get("STATIC_DIR", os.path.join(os.path.dirname(__file__), "static"))
RUN_TIMEOUT = float(os.environ.get("RUN_TIMEOUT", "3"))
COMPILE_TIMEOUT = float(os.environ.get("COMPILE_TIMEOUT", "20"))
MAX_PARALLEL = int(os.environ.get("MAX_PARALLEL", "2"))
MAX_CODE = 100_000
MAX_OUT = 200_000
MEM_LIMIT = 256 * 1024 * 1024
# Uživatel, pod kterým běží odeslaný kód (v Dockeru "runner"); None = aktuální uživatel.
RUN_UID = int(os.environ["RUN_UID"]) if os.environ.get("RUN_UID") else None

DATA_DIR = os.environ.get("DATA_DIR", "")
PROGRESS_FILE = os.path.join(DATA_DIR, "progress.json") if DATA_DIR else ""
MAX_PROGRESS = 2 * 1024 * 1024

slots = threading.BoundedSemaphore(MAX_PARALLEL)
progress_lock = threading.Lock()


def load_progress():
    if not PROGRESS_FILE or not os.path.exists(PROGRESS_FILE):
        return {}
    with open(PROGRESS_FILE, encoding="utf-8") as f:
        return json.load(f)


def save_progress(state):
    tmp = PROGRESS_FILE + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False)
        f.flush()
        os.fsync(f.fileno())
    os.replace(tmp, PROGRESS_FILE)


def merge_progress(old, new):
    """Sloučí postup ze dvou zařízení tak, aby se nic hotového neztratilo.

    Hotové lekce, dny a nápovědy se sjednotí (u lekce platí dřívější čas splnění),
    kód se přepíše tím novějším po lekcích, ostatní nastavení vezme poslední zápis.
    """
    if not isinstance(old, dict):
        old = {}
    out = {**old, **new}
    done = dict(old.get("done") or {})
    for k, v in (new.get("done") or {}).items():
        done[k] = min(done[k], v) if k in done and isinstance(done[k], (int, float)) and isinstance(v, (int, float)) else v
    out["done"] = done
    out["days"] = sorted(set(old.get("days") or []) | set(new.get("days") or []))
    out["hints"] = {**(old.get("hints") or {}), **(new.get("hints") or {})}
    # kód po lekcích: vyhrává ten s novějším časem úpravy (codeTs)
    code, ts = dict(old.get("code") or {}), dict(old.get("codeTs") or {})
    nts = new.get("codeTs") or {}
    for k, v in (new.get("code") or {}).items():
        if k not in code or (nts.get(k) or 0) >= (ts.get(k) or 0):
            code[k] = v
            ts[k] = nts.get(k) or ts.get(k) or 0
    out["code"], out["codeTs"] = code, ts
    out["xp"] = max(int(old.get("xp") or 0), int(new.get("xp") or 0))
    return out


def _limits_for(cpu, mem, fsize):
    def apply():
        """Omezení pro potomka (volá se před exec): limity a přepnutí na neprivilegovaného uživatele."""
        os.setsid()
        resource.setrlimit(resource.RLIMIT_CPU, (cpu, cpu))
        resource.setrlimit(resource.RLIMIT_AS, (mem, mem))
        resource.setrlimit(resource.RLIMIT_FSIZE, (fsize, fsize))
        if RUN_UID is not None:
            os.setgroups([])
            os.setgid(RUN_UID)
            os.setuid(RUN_UID)
            resource.setrlimit(resource.RLIMIT_NPROC, (64, 64))
    return apply


RUN_LIMITS = _limits_for(int(RUN_TIMEOUT) + 1, MEM_LIMIT, 1024 * 1024)
COMPILE_LIMITS = _limits_for(int(COMPILE_TIMEOUT) + 1, 1024 * 1024 * 1024, 64 * 1024 * 1024)


def _run(cmd, stdin, cwd, timeout, limits):
    # Výstup jde do souborů (ne do paměti serveru); jejich velikost hlídá RLIMIT_FSIZE.
    out_path, err_path = os.path.join(cwd, ".out"), os.path.join(cwd, ".err")
    with open(out_path, "wb") as fo, open(err_path, "wb") as fe:
        if RUN_UID is not None:
            os.chown(out_path, RUN_UID, RUN_UID)
            os.chown(err_path, RUN_UID, RUN_UID)
        p = subprocess.Popen(
            cmd,
            stdin=subprocess.PIPE,
            stdout=fo,
            stderr=fe,
            cwd=cwd,
            preexec_fn=limits,
            env={"PATH": "/usr/local/bin:/usr/bin:/bin", "HOME": cwd, "LANG": "C.UTF-8"},
        )
    timed_out = False
    try:
        p.communicate(stdin.encode(), timeout=timeout)
    except subprocess.TimeoutExpired:
        timed_out = True
    finally:
        # Program běží ve vlastní skupině procesů: ukončíme ji celou (i případné potomky).
        try:
            os.killpg(p.pid, signal.SIGKILL)
        except (ProcessLookupError, PermissionError):
            pass
        p.wait()

    def read(path):
        with open(path, "rb") as f:
            return f.read(MAX_OUT).decode(errors="replace")

    return p.returncode, read(out_path), read(err_path), timed_out


def run_code(lang, code, stdin):
    work = tempfile.mkdtemp(prefix="pj-")
    try:
        if RUN_UID is not None:
            os.chown(work, RUN_UID, RUN_UID)
        if lang == "cpp":
            src = os.path.join(work, "main.cpp")
            with open(src, "w", encoding="utf-8") as f:
                f.write(code)
            rc, _, err, to = _run(
                ["g++", "-std=c++17", "-O1", "-pipe", "-fdiagnostics-color=never", "main.cpp", "-o", "main"],
                "", work, COMPILE_TIMEOUT, COMPILE_LIMITS,
            )
            if to:
                return {"ok": False, "out": "", "err": "TIMEOUT", "phase": "compile"}
            if rc != 0:
                return {"ok": False, "out": "", "err": err.replace(work + "/", ""), "phase": "compile"}
            # Ať se binárka a výstupy z překladu nepletou s během programu
            for f in (".out", ".err"):
                os.unlink(os.path.join(work, f))
            cmd = ["./main"]
        elif lang == "python":
            with open(os.path.join(work, "main.py"), "w", encoding="utf-8") as f:
                f.write(code)
            cmd = ["python3", "-I", "main.py"]
        else:
            return {"ok": False, "out": "", "err": f"Neznámý jazyk: {lang}", "phase": "run"}

        rc, out, err, to = _run(cmd, stdin, work, RUN_TIMEOUT, RUN_LIMITS)
        if to:
            return {"ok": False, "out": out, "err": "TIMEOUT", "phase": "run"}
        if rc != 0:
            msg = err.strip() or f"Program skončil s kódem {rc}"
            if rc == -signal.SIGXFSZ:
                msg = "Program vypsal příliš mnoho textu (nekonečný cyklus?)"
            elif rc == -signal.SIGXCPU:
                return {"ok": False, "out": out, "err": "TIMEOUT", "phase": "run"}
            elif rc < 0:
                msg = f"Program spadl (signál {-rc}). " + err.strip()
            return {"ok": False, "out": out, "err": msg.replace(work + "/", ""), "phase": "run"}
        return {"ok": True, "out": out, "err": err, "phase": "run"}
    finally:
        shutil.rmtree(work, ignore_errors=True)


class Handler(SimpleHTTPRequestHandler):
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map,
                      ".webmanifest": "application/manifest+json", ".svg": "image/svg+xml"}

    def __init__(self, *a, **kw):
        super().__init__(*a, directory=STATIC_DIR, **kw)

    def log_message(self, fmt, *args):
        pass

    def list_directory(self, path):
        # Výpis složek nikomu neukazujeme.
        self.send_error(404, "Not found")
        return None

    def _json(self, code, obj):
        body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path == "/api/health":
            return self._json(200, {"ok": True, "langs": ["cpp", "python"], "progress": bool(PROGRESS_FILE)})
        if self.path == "/api/progress":
            if not PROGRESS_FILE:
                return self._json(404, {"ok": False, "err": "Ukládání na server není zapnuté"})
            with progress_lock:
                return self._json(200, load_progress())
        return super().do_GET()

    def do_PUT(self):
        if self.path != "/api/progress" or not PROGRESS_FILE:
            return self._json(404, {"ok": False, "err": "not found"})
        try:
            n = int(self.headers.get("Content-Length", "0"))
            if n > MAX_PROGRESS:
                return self._json(413, {"ok": False, "err": "Postup je moc velký"})
            new = json.loads(self.rfile.read(n) or b"{}")
            if not isinstance(new, dict):
                raise ValueError
        except Exception:
            return self._json(400, {"ok": False, "err": "Špatný požadavek"})
        with progress_lock:
            merged = new if self.headers.get("X-Reset") == "1" else merge_progress(load_progress(), new)
            save_progress(merged)
        return self._json(200, merged)

    def do_POST(self):
        if self.path != "/api/run":
            return self._json(404, {"ok": False, "err": "not found"})
        try:
            n = int(self.headers.get("Content-Length", "0"))
            if n > MAX_CODE * 2:
                return self._json(413, {"ok": False, "err": "Kód je moc dlouhý"})
            d = json.loads(self.rfile.read(n) or b"{}")
            code, stdin, lang = str(d.get("code", "")), str(d.get("input", "")), str(d.get("lang", "cpp"))
        except Exception:
            return self._json(400, {"ok": False, "err": "Špatný požadavek"})
        if len(code) > MAX_CODE:
            return self._json(413, {"ok": False, "err": "Kód je moc dlouhý"})
        if not slots.acquire(timeout=15):
            return self._json(503, {"ok": False, "err": "Server je zaneprázdněný, zkus to znovu"})
        try:
            return self._json(200, run_code(lang, code, stdin))
        finally:
            slots.release()


if __name__ == "__main__":
    if DATA_DIR:
        try:
            os.makedirs(DATA_DIR, exist_ok=True)
            os.chmod(DATA_DIR, 0o700)  # spouštěný kód (uživatel runner) sem nevidí
            probe = os.path.join(DATA_DIR, ".probe")
            open(probe, "w").close()
            os.unlink(probe)
            print(f"Postup se ukládá do {PROGRESS_FILE}", flush=True)
        except OSError as e:
            print(f"Do {DATA_DIR} nejde zapisovat ({e}), postup zůstane jen v prohlížeči.", flush=True)
            PROGRESS_FILE = ""
    print(f"Programming Journey běží na portu {PORT}", flush=True)
    ThreadingHTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
