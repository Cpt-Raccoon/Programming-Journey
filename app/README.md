# Programming Journey na TrueNASu

Aplikace je jeden Docker kontejner. Obsahuje web (C++dex) a malý server, který překládá a spouští kód skutečným `g++` (C++17) a `python3`.

- Obraz: `ghcr.io/cpt-raccoon/programming-journey:latest`. Sestaví ho GitHub Actions při každém pushi do `main` a předtím otestuje všechny lekce.
- Port: `8380`. Adresa doma bude `http://192.168.1.64:8380`, přes Tailscale `http://<tailscale-jméno-nasu>:8380`.
- Kód se spouští pod neprivilegovaným uživatelem s limitem 3 s, 256 MB paměti a 1 MB výstupu. Kontejner má jen pro čtení souborový systém a minimum oprávnění.

> Kontejner má síť, takže spuštěný kód se může připojit do domácí sítě. Proto ho nevystavuj do internetu a zvenku používej jen Tailscale.

## První instalace

1. **Zveřejni obraz (jen jednou).** Po prvním sestavení najdeš balíček na GitHubu v profilu pod *Packages → programming-journey*. Otevři *Package settings → Change visibility → Public*. Jinak by si ho TrueNAS nemohl stáhnout bez přihlášení.
2. V TrueNASu otevři **Apps → Discover Apps → ⋮ (vpravo nahoře) → Install via YAML**.
3. Jako název zadej `programming-journey` a vlož obsah souboru [`compose.yaml`](compose.yaml).
4. Ulož. Za chvíli aplikace naběhne na `http://192.168.1.64:8380`.

## Zapnout a vypnout

V **Apps** u aplikace `programming-journey` klikni na **Stop**, když se neučíš, a na **Start**, když chceš pokračovat. Adresa zůstává stejná. Po restartu NASu se aplikace sama nespustí (`restart: "no"`), takže nic neběží zbytečně.

## Aktualizace

Po změně v repu GitHub sestaví nový obraz. V TrueNASu pak aplikaci zastav a znovu spusť (`pull_policy: always` stáhne nejnovější verzi), případně použij **Update** u aplikace.

## Postup učení

Postup (XP, hotové lekce a rozepsaný kód) se ukládá na NAS do svazku `journey-data`, takže je stejný na PC, iPadu i mobilu. Když se učíš na dvou zařízeních, server postup sloučí: hotové lekce se sečtou a u kódu vyhraje novější úprava. Zároveň zůstává kopie v prohlížeči, takže když je server zrovna vypnutý, nic se neztratí a pošle se při příštím spuštění.

Stav ukládání vidíš pod ⚙️ vpravo nahoře.

### Aktualizace na verzi s ukládáním na NAS

V TrueNASu otevři **Apps → programming-journey → Edit** a nahraď YAML obsahem nového [`compose.yaml`](compose.yaml) (přibyla sekce `volumes`). Ulož. Postup z prohlížeče se při prvním otevření sám nahraje na NAS.

## Lokální vývoj

```
python3 build.py                                   # ve složce cpp/cppdex
mkdir -p /tmp/pj && cp ../../cpp/cppdex/cppdex.html /tmp/pj/index.html
STATIC_DIR=/tmp/pj python3 server.py               # ve složce app, běží na :8080
node ../cpp/cppdex/check-server.js http://localhost:8080
```
