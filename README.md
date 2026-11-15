# Programming Journey

Moje cesta programováním. Začínám s C++, později přibudou další jazyky.

## Struktura

| Složka | Co v ní je |
|---|---|
| `cpp/cppdex/` | C++dex, moje výuková stránka na C++ ve stylu Codédexu (lekce, XP, levely). Podrobnosti jsou v [README](cpp/cppdex/README.md). |
| `app/` | Server pro TrueNAS, který web servíruje a spouští kód přes skutečný g++ a Python. Instalace je v [app/README.md](app/README.md). |
| `Dockerfile` | Sestavení obrazu `ghcr.io/cpt-raccoon/programming-journey` (dělá GitHub Actions). |

Další složky (`cpp/exercises/`, `cpp/projects/`, později `python/` a další jazyky) přibudou podle osnovy.

## Osnova C++

### Hotovo

Světy 1 až 7 běží i v samostatném souboru (JSCPP v prohlížeči). Světy 8 až 12 potřebují server se skutečným g++.

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

### Dál (návrh)

- Dynamická paměť (new/delete, chytré ukazatele), soubory (fstream), dědičnost a virtuální metody, šablony a STL (map, set), výjimky
- Opakovací kvíz na konci každého světa, závěrečný projekt (např. konzolové piškvorky)
- Pak kurzy Python, Git a GitHub, GenAI, Machine Learning, UI/UX

Zdroje: osnova kurzu C++ na Codédexu a kniha *Mistrovství v C++* (Stephen Prata).

## Jak sestavit C++dex

```
cd cpp/cppdex
python3 build.py   # sestaví cppdex.html
node check.js      # ověří řešení světů 1–7 v JSCPP
node check-server.js http://localhost:8080   # ověří všechna řešení proti g++ na serveru
```
