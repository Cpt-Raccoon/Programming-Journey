# Programming Journey

Moje cesta programováním. Začínám s C++, později přibudou další jazyky.

## Struktura

| Složka | Co v ní je |
|---|---|
| `cpp/cppdex/` | C++dex, moje výuková stránka na C++ ve stylu Codédexu (lekce, XP, levely). Podrobnosti jsou v [README](cpp/cppdex/README.md). |

Další složky (`cpp/exercises/`, `cpp/projects/`, později `python/` a další jazyky) přibudou podle osnovy.

## Osnova C++

### Hotovo v C++dexu (běží v prohlížeči)

1. **První kroky:** cout, endl, komentáře, oprava chyb
2. **Proměnné:** int, / a %, double, char, bool, cin, const
3. **Rozhodování:** if/else, else if, && a ||, switch
4. **Cykly:** for, while, break/continue, vnořené cykly
5. **Funkce:** parametry, return, bool funkce, rekurze
6. **Pole:** 1D pole, maximum a minimum, char pole, 2D pole
7. **Ukazatele:** & a *, prohození, ukazatelová aritmetika
8. **Bonus moderní C++:** zatím jen kvízy (string, vector, třídy, reference)

### Dál (návrh, ještě k diskusi)

Zdroje: osnova kurzu C++ na Codédexu a kniha *Mistrovství v C++* (Stephen Prata).

## Jak sestavit C++dex

```
cd cpp/cppdex
python3 build.py   # sestaví cppdex.html
node check.js      # ověří, že všechna vzorová řešení projdou testy
```
