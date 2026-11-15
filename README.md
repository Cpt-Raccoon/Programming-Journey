# Programming Journey

Moje cesta programováním. Kurzy C++ a Python, později přibudou další.

## Struktura

| Složka | Co v ní je |
|---|---|
| `cpp/cppdex/` | C++dex, moje výuková stránka na C++ ve stylu Codédexu (lekce, XP, levely). Podrobnosti jsou v [README](cpp/cppdex/README.md). |
| `app/` | Server pro TrueNAS, který web servíruje a spouští kód přes skutečný g++ a Python. Instalace je v [app/README.md](app/README.md). |
| `Dockerfile` | Sestavení obrazu `ghcr.io/cpt-raccoon/programming-journey` (dělá GitHub Actions). |

Další složky (`cpp/exercises/`, `cpp/projects/`, později `python/` a další jazyky) přibudou podle osnovy.

## Osnova C++

### Hotovo

Světy 1 až 7 běží i v samostatném souboru (JSCPP v prohlížeči). Světy 8 až 17 potřebují server se skutečným g++.

1. **První kroky:** cout, endl, komentáře, oprava chyb
2. **Proměnné:** int, / a %, double, char, bool, cin, const
3. **Rozhodování:** if/else, else if, && a ||, switch
4. **Cykly:** for, while, break/continue, vnořené cykly, 🏁 projekt Hádání čísla
5. **Funkce:** parametry, return, bool funkce, rekurze
6. **Pole:** 1D pole, maximum a minimum, char pole, 2D pole
7. **Ukazatele:** & a *, prohození, ukazatelová aritmetika
8. **Texty – string:** spojování, getline, délka a znaky, find a substr, palindrom
9. **Seznamy – vector:** push_back, procházení, filtrování, sort, vector&lt;string&gt;
10. **Vlastní typy:** struct, vector struktur, enum class
11. **Reference:** kopie vs. reference, prohození, const&
12. **Třídy a objekty:** metody, konstruktor, private, objekty ve vectoru, 🏁 projekt Zvířecí útulek
13. **Dynamická paměť:** new a delete, dynamické pole, unique_ptr
14. **Soubory:** ofstream a ifstream, čísla ze souboru, připisování (deník)
15. **Dědičnost:** rodič a potomek, virtual a override, polymorfismus
16. **STL:** map (počítání slov), set, sort s lambdou
17. **Výjimky, šablony a finále:** try/catch, throw, šablona funkce, 🏁 projekt Piškvorky

Každý svět končí krátkým opakovacím kvízem (jedna otázka naráz). Kvíz neblokuje další lekce.

### Dál (návrh)

- Pak kurzy Git a GitHub, GenAI, Machine Learning, UI/UX

Zdroje: osnova kurzu C++ na Codédexu a kniha *Mistrovství v C++* (Stephen Prata).

## Jak sestavit C++dex

```
cd cpp/cppdex
python3 build.py   # sestaví cppdex.html
node check.js      # ověří řešení světů 1–7 v JSCPP
node check-server.js http://localhost:8080   # ověří všechna řešení proti g++ na serveru
```

## Osnova Python

Kurz běží jen na serveru (skutečný Python 3). Lekce jsou v `cpp/cppdex/lessons-py.js`.

### Hotovo

1. **První kroky:** print, sep a end, komentáře, oprava chyb
2. **Proměnné:** počítání, input, int a float, f-stringy
3. **Rozhodování:** if, else, elif, and/or, porovnání textů
4. **Cykly:** for a range, odpočet, while, break/continue, vnořené cykly, 🏁 projekt Hádání čísla
5. **Seznamy:** indexy, append, split, sum/max/min, řazení a výřezy, filtrování
6. **Texty:** znaky, pozpátku a palindrom, metody, split a join, in a endswith
7. **Funkce:** def, return, výchozí parametry, True/False, víc výsledků, rekurze
8. **Slovníky a množiny:** dict, items a sorted, počítání slov, set, tuple, 🏁 projekt Sklad
9. **Chyby a soubory:** try/except, víc výjimek, raise, zápis, připisování, chybějící soubor
10. **Třídy a objekty:** class a __init__, metody, __str__, dědičnost, super(), 🏁 projekt Knihovna
11. **Moduly a finále:** import math, from datetime, list comprehension, lambda, enumerate a zip, 🏁 finále Rozbor textu

### Dál (návrh)

Bonusové lekce podle kódu projektu Quentin, až bude hotový.
