# C++dex

## Co to je
C++dex je moje vlastní výuková stránka na C++ ve stylu Codédexu: lekce, XP, levely, odznaky a dny v řadě. Je česky a kód se píše a spouští přímo v prohlížeči.

- **Živá stránka (artifact):** https://claude.ai/artifact/3efpDPE7Rq8qWzSSjoYxuz
- **Slug artifactu:** `1574b780-6c78-4d06-9a29-27cf49fdf475` (verze `1794611803-5ca6`)
- Je to jeden soubor HTML (cca 460 kB), ve kterém je všechno: interpret, lekce i aplikace.

## Obsah kurzu (33 lekcí, 8 světů)
1. **První kroky:** cout, endl, počítání a komentáře, oprava chyb
2. **Proměnné:** int, / a %, double/char/bool, cin, const
3. **Rozhodování:** if/else, else if, && a ||, switch
4. **Cykly:** for, sčítání v cyklu, while, break/continue (FizzBuzz), vnořené cykly
5. **Funkce:** void, parametry a return, bool funkce (prvočísla), rekurze (Fibonacci)
6. **Pole:** základy, maximum a minimum, char pole (slovo pozpátku), 2D pole
7. **Ukazatele:** & a *, prohození přes ukazatele, ukazatelová aritmetika
8. **Bonus, moderní C++ (jen kvízy):** string, vector, třídy, reference

## Jak to funguje technicky
- **Interpret C++:** JSCPP 2.0.9 (npm), zabalený přes esbuild do `jscpp.min.js`. Node moduly `stream`, `util` a `fs` jsou nahrazené jednoduchými náhražkami ze složky `shims/`.
- **Spouštění kódu:** běží ve Web Workeru vytvořeném z blob URL. Časový limit je 3,5 s, pak se worker ukončí. JSCPP má navíc vlastní limit `maxTimeout` 2,8 s.
- **Kontrola řešení:** každá lekce má `tests` (vstup a očekávaný výstup), které se porovnávají bez koncových mezer. Pole `must` obsahuje regexy, které kontrolují, že kód používá procvičovanou věc (např. `for`).
- **Ukládání postupu:** localStorage pod klíčem `cppdex-v1`. V Profilu je záloha a obnova postupu přes kód v base64. Je tam i volný režim, který odemkne všechny lekce.
- **Navigace:** `#map`, `#sandbox`, `#profile`, `#lesson-<id>` (např. `#lesson-w3l2`).

### Co JSCPP umí a neumí
- ✅ iostream, cmath, cstring, cstdio, proměnné, if/switch, cykly, funkce, rekurze, pole, 2D pole, ukazatele, globální proměnné, const
- ❌ `<string>`, `<vector>`, struct/class, reference `int&`, `new`/`delete`. Přetěžování funkcí s int a double hlásí chybu „ambiguous“.

## Soubory
| Soubor | K čemu |
|---|---|
| `cppdex.html` | hotová stránka, dá se otevřít rovnou v prohlížeči |
| `template.html` | aplikace (HTML, CSS, JS) se zástupnými místy `/*__JSCPP__*/` a `/*__LESSONS__*/` |
| `lessons.js` | obsah kurzu (pole `COURSE`). Nové lekce se přidávají sem |
| `jscpp.min.js` | zabalený interpret C++ |
| `build.py` | `python3 build.py` sestaví z těch tří souborů `cppdex.html` |
| `check.js` | `node check.js` ověří, že všechna vzorová řešení projdou testy |
| `entry.js`, `shims/` | zdroje pro nové zabalení JSCPP přes esbuild |

### Formát lekce v `lessons.js`
```js
{ id:'w4l1', title:'...', theory:'<p>HTML</p>', task:'HTML zadání',
  starter:'kód na začátek', stdin:'výchozí vstup', solution:'vzorové řešení',
  tests:[{in:'5', out:'1\n2\n3\n4\n5'}], must:['for'], hint:'nápověda' }
// kvíz: { id, title, type:'quiz', theory, question, options:[...], answer:1, explain }
```

## Nápady, jak pokračovat
- Svět 9: algoritmy (třídění, binární vyhledávání)
- Malé projekty: kalkulačka, hádání čísla, piškvorky v konzoli
- Opakovací kvízy na konci každého světa
- Přechod na skutečný g++ na PC (VS Code + C/C++)
