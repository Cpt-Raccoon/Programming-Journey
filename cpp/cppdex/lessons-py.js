// Kurz Python. Stejný formát lekcí jako lessons.js (C++), kód běží na serveru (python3).
// Id lekcí začínají "py", aby se nepletly s C++.
const COURSE_PY = [
{
  id:'py1', title:'První kroky', icon:'🚀', color:'#ff6b6b',
  desc:'První program v Pythonu, print a oprava chyb.',
  lessons:[
  { id:'py1l1', title:'Ahoj, světe!',
    theory:`<p>Python je jazyk, který se čte skoro jako angličtina. Nemá středníky ani složené závorky.</p>
<p>Na výpis textu slouží funkce <code>print</code>. Text dáš do uvozovek a celé to do závorek:</p>
<pre>print("Ahoj!")</pre>
<p>Každý <code>print</code> vypíše jeden řádek.</p>`,
    task:`Vypiš přesně text <b>Ahoj, světe!</b>`,
    starter:`# Sem napiš svůj první program\n`,
    solution:`print("Ahoj, světe!")\n`,
    tests:[{in:'',out:'Ahoj, světe!'}],
    must:['print\\('],
    hint:'Napiš print("Ahoj, světe!"). Pozor na čárku a vykřičník.'},
  { id:'py1l2', title:'Víc řádků',
    theory:`<p>Každé volání <code>print</code> začne nový řádek. Program běží odshora dolů, řádek po řádku.</p>
<pre>print("první")
print("druhý")</pre>`,
    task:`Vypiš malý trojúhelník z hvězdiček:<pre>*
**
***</pre>`,
    starter:`print("*")\n`,
    solution:`print("*")\nprint("**")\nprint("***")\n`,
    tests:[{in:'',out:'*\n**\n***'}],
    must:['print\\('],
    hint:'Potřebuješ tři řádky s print. V každém je o jednu hvězdičku víc.'},
  { id:'py1l3', title:'Komentáře',
    theory:`<p>Všechno za znakem <code>#</code> Python ignoruje. Je to <b>komentář</b>, poznámka pro lidi.</p>
<pre># Tohle se nespustí
print("Tohle ano")  # poznámka za kódem</pre>
<p>Komentářem můžeš i dočasně „vypnout“ řádek kódu.</p>`,
    task:`Program vypisuje řádek navíc. Vypni prostřední <code>print</code> komentářem, aby výstup byl:<pre>Ahoj
Nazdar</pre>`,
    starter:`print("Ahoj")\nprint("SMAŽ MĚ")\nprint("Nazdar")\n`,
    solution:`print("Ahoj")\n# print("SMAŽ MĚ")\nprint("Nazdar")\n`,
    tests:[{in:'',out:'Ahoj\nNazdar'}],
    must:[],
    hint:'Dej znak # na začátek prostředního řádku.'},
  { id:'py1l4', title:'sep a end',
    theory:`<p><code>print</code> umí vypsat víc věcí naráz. Oddělí je mezerou:</p>
<pre>print("A", "B", "C")        # A B C
print("A", "B", sep="-")    # A-B</pre>
<p><code>sep</code> říká, čím se věci oddělí. <code>end</code> říká, co se dá na konec místo nového řádku:</p>
<pre>print("Načítám", end="...")
print("hotovo")             # Načítám...hotovo</pre>`,
    task:`Uprav program, aby vypsal:<pre>2026-11-15
Načítám...hotovo</pre>Použij <code>sep</code> i <code>end</code>.`,
    starter:`print(2026, 11, 15)\nprint("Načítám")\nprint("hotovo")\n`,
    solution:`print(2026, 11, 15, sep="-")\nprint("Načítám", end="...")\nprint("hotovo")\n`,
    tests:[{in:'',out:'2026-11-15\nNačítám...hotovo'}],
    must:['sep\\s*=','end\\s*='],
    hint:'První řádek: přidej sep="-". Druhý řádek: přidej end="...".'},
  { id:'py1l5', title:'Oprava chyb',
    theory:`<p>Chyby jsou normální. Python ti řekne <b>na kterém řádku</b> je problém a jaký.</p>
<ul><li><code>SyntaxError</code>: špatný zápis, třeba chybí uvozovka nebo závorka.</li>
<li><code>NameError</code>: neznámé jméno, třeba překlep <code>prnt</code>.</li></ul>
<p>Oprav vždy první chybu a spusť znovu.</p>`,
    task:`V programu jsou tři chyby. Oprav je, aby vypsal:<pre>Ahoj
Python
je super</pre>`,
    starter:`print("Ahoj)\nprint("Python"\nprnt("je super")\n`,
    solution:`print("Ahoj")\nprint("Python")\nprint("je super")\n`,
    tests:[{in:'',out:'Ahoj\nPython\nje super'}],
    must:[],
    hint:'Řádek 1: chybí uvozovka. Řádek 2: chybí závorka. Řádek 3: překlep v print.'},
  ]
},
{
  id:'py2', title:'Proměnné', icon:'📦', color:'#ffd43b',
  desc:'Čísla, texty, počítání, input a f-stringy.',
  lessons:[
  { id:'py2l1', title:'Proměnné',
    theory:`<p>Proměnná je pojmenovaná krabička na hodnotu. V Pythonu ji vytvoříš prostě přiřazením:</p>
<pre>jmeno = "Tom"
vek = 30
print(jmeno, vek)   # Tom 30</pre>
<p>Typ (text, číslo…) si Python pozná sám. Jména piš malými písmeny, bez diakritiky a mezer.</p>`,
    task:`Vytvoř proměnné <code>jazyk</code> s textem <b>Python</b> a <code>rok</code> s číslem <b>1991</b>. Pak vypiš:<pre>Python vznikl v roce 1991</pre>`,
    starter:`# vytvoř proměnné jazyk a rok\n\nprint()\n`,
    solution:`jazyk = "Python"\nrok = 1991\nprint(jazyk, "vznikl v roce", rok)\n`,
    tests:[{in:'',out:'Python vznikl v roce 1991'}],
    must:['jazyk\\s*=','rok\\s*=','print\\(\\s*jazyk'],
    hint:'print(jazyk, "vznikl v roce", rok). Čárky mezi částmi udělají mezery.'},
  { id:'py2l2', title:'Počítání',
    theory:`<p>Python umí počítat:</p>
<pre>17 + 5    # 22
17 / 5    # 3.4  (dělení vždy s desetinnou částí)
17 // 5   # 3    (celočíselné dělení)
17 % 5    # 2    (zbytek)
2 ** 3    # 8    (mocnina)</pre>`,
    task:`Máš <code>a = 17</code> a <code>b = 5</code>. Vypiš pod sebe: součet, rozdíl, součin, dělení, celočíselné dělení, zbytek a <code>a</code> na druhou.`,
    starter:`a = 17\nb = 5\nprint(a + b)\n`,
    solution:`a = 17\nb = 5\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)\nprint(a // b)\nprint(a % b)\nprint(a ** 2)\n`,
    tests:[{in:'',out:'22\n12\n85\n3.4\n3\n2\n289'}],
    must:['//','%','\\*\\*'],
    hint:'Sedm řádků print: +, -, *, /, //, %, **2.'},
  { id:'py2l3', title:'Vstup: input()',
    theory:`<p><code>input()</code> počká, až uživatel něco napíše, a vrátí to jako <b>text</b>:</p>
<pre>jmeno = input()
print("Ahoj, " + jmeno + "!")</pre>
<p>Texty spojíš znaménkem <code>+</code>. Tady v kurzu nech závorky u <code>input()</code> prázdné, ať výstup sedí s testy. Vstup napiš do pole VSTUP pod editorem.</p>`,
    task:`Načti jméno a pozdrav. Pro vstup <code>Tom</code> vypiš:<pre>Ahoj, Tom!</pre>`,
    starter:`jmeno = \nprint()\n`,
    stdin:'Tom',
    solution:`jmeno = input()\nprint("Ahoj, " + jmeno + "!")\n`,
    tests:[{in:'Tom',out:'Ahoj, Tom!'},{in:'Eva',out:'Ahoj, Eva!'}],
    must:['input\\('],
    hint:'jmeno = input(), pak print("Ahoj, " + jmeno + "!").'},
  { id:'py2l4', title:'Čísla ze vstupu',
    theory:`<p><code>input()</code> vrací vždy text. <code>"3" + "4"</code> je <code>"34"</code>, ne 7!</p>
<p>Na číslo ho převedeš funkcí <code>int()</code>:</p>
<pre>a = int(input())</pre>
<p>Každý <code>input()</code> přečte jeden řádek vstupu.</p>`,
    task:`Načti dvě celá čísla (každé na svém řádku). Vypiš jejich součet a na další řádek součin.`,
    starter:`a = input()\nb = input()\nprint(a + b)\n`,
    stdin:'3\n4',
    solution:`a = int(input())\nb = int(input())\nprint(a + b)\nprint(a * b)\n`,
    tests:[{in:'3\n4',out:'7\n12'},{in:'10\n-2',out:'8\n-20'}],
    must:['int\\(\\s*input'],
    hint:'Obal input() do int(): a = int(input()).'},
  { id:'py2l5', title:'f-stringy',
    theory:`<p>Nejpohodlnější způsob, jak vložit hodnoty do textu, je <b>f-string</b>. Před uvozovky dáš <code>f</code> a proměnné do složených závorek:</p>
<pre>vek = 30
print(f"Je mi {vek} let.")
print(f"Za rok {vek + 1}.")</pre>
<p>Do závorek můžeš psát i výpočty.</p>`,
    task:`Načti jméno a věk. Pro vstup <code>Tom</code> a <code>30</code> vypiš:<pre>Tom má 30 let. Za 10 let mu bude 40.</pre>`,
    starter:`jmeno = input()\nvek = int(input())\n`,
    stdin:'Tom\n30',
    solution:`jmeno = input()\nvek = int(input())\nprint(f"{jmeno} má {vek} let. Za 10 let mu bude {vek + 10}.")\n`,
    tests:[{in:'Tom\n30',out:'Tom má 30 let. Za 10 let mu bude 40.'},{in:'Eva\n8',out:'Eva má 8 let. Za 10 let mu bude 18.'}],
    must:['f"|f\''],
    hint:'print(f"{jmeno} má {vek} let. Za 10 let mu bude {vek + 10}.")'},
  { id:'py2l6', title:'Desetinná čísla',
    theory:`<p>Desetinné číslo je <code>float</code>. Z textu ho uděláš přes <code>float()</code>:</p>
<pre>cena = float(input())   # 12.5</pre>
<p>Ve f-stringu zaokrouhlíš na 2 místa takhle:</p>
<pre>print(f"{cena:.2f}")    # 12.50</pre>`,
    task:`Načti cenu za kus (desetinné číslo) a počet kusů (celé číslo). Vypiš celkovou cenu na 2 desetinná místa, třeba:<pre>Celkem: 37.50 Kč</pre>`,
    starter:`cena = input()\npocet = input()\n`,
    stdin:'12.5\n3',
    solution:`cena = float(input())\npocet = int(input())\nprint(f"Celkem: {cena * pocet:.2f} Kč")\n`,
    tests:[{in:'12.5\n3',out:'Celkem: 37.50 Kč'},{in:'0.99\n10',out:'Celkem: 9.90 Kč'}],
    must:['float\\('],
    hint:'cena = float(input()), pocet = int(input()), pak f"Celkem: {cena * pocet:.2f} Kč".'},
  ]
},
{
  id:'py3', title:'Rozhodování', icon:'🔀', color:'#51cf66',
  desc:'if, elif, else a spojování podmínek.',
  lessons:[
  { id:'py3l1', title:'if',
    theory:`<p><code>if</code> spustí blok kódu, jen když podmínka platí. Za podmínku patří <b>dvojtečka</b> a blok se <b>odsadí</b> 4 mezerami:</p>
<pre>if teplota > 25:
    print("Je horko")
print("Tohle se vypíše vždy")</pre>
<p>Porovnání: <code>&gt;</code> <code>&lt;</code> <code>&gt;=</code> <code>&lt;=</code> <code>==</code> (rovná se) <code>!=</code> (nerovná se).</p>`,
    task:`Načti teplotu (celé číslo). Když je větší než 25, vypiš <b>Je horko</b>. Na konci vždy vypiš <b>Konec</b>.`,
    starter:`teplota = int(input())\n\nprint("Konec")\n`,
    stdin:'30',
    solution:`teplota = int(input())\nif teplota > 25:\n    print("Je horko")\nprint("Konec")\n`,
    tests:[{in:'30',out:'Je horko\nKonec'},{in:'10',out:'Konec'},{in:'25',out:'Konec'}],
    must:['if '],
    hint:'if teplota > 25: a pod tím odsazený print("Je horko").'},
  { id:'py3l2', title:'else',
    theory:`<p><code>else</code> je „jinak“. Spustí se, když podmínka neplatí:</p>
<pre>if x > 0:
    print("kladné")
else:
    print("není kladné")</pre>
<p>Sudé číslo poznáš podle zbytku: <code>x % 2 == 0</code>.</p>`,
    task:`Načti celé číslo a vypiš <b>Sudé</b> nebo <b>Liché</b>.`,
    starter:`x = int(input())\n`,
    stdin:'4',
    solution:`x = int(input())\nif x % 2 == 0:\n    print("Sudé")\nelse:\n    print("Liché")\n`,
    tests:[{in:'4',out:'Sudé'},{in:'7',out:'Liché'},{in:'0',out:'Sudé'}],
    must:['else'],
    hint:'if x % 2 == 0: print("Sudé"), else: print("Liché").'},
  { id:'py3l3', title:'elif',
    theory:`<p>Když je možností víc, použij <code>elif</code> (zkratka „else if“). Python jde odshora a použije <b>první</b> větev, která platí:</p>
<pre>if body >= 90:
    print("A")
elif body >= 60:
    print("B")
else:
    print("C")</pre>`,
    task:`Načti počet bodů. Pro 90 a víc vypiš <b>Výborně</b>, pro 60 až 89 <b>Dobře</b>, jinak <b>Zkus to znovu</b>.`,
    starter:`body = int(input())\n`,
    stdin:'95',
    solution:`body = int(input())\nif body >= 90:\n    print("Výborně")\nelif body >= 60:\n    print("Dobře")\nelse:\n    print("Zkus to znovu")\n`,
    tests:[{in:'95',out:'Výborně'},{in:'60',out:'Dobře'},{in:'59',out:'Zkus to znovu'},{in:'90',out:'Výborně'}],
    must:['elif'],
    hint:'Začni od nejvyšší hranice: if body >= 90, elif body >= 60, else.'},
  { id:'py3l4', title:'and, or, not',
    theory:`<p>Podmínky se dají spojovat slovy:</p>
<ul><li><code>and</code>: musí platit obě</li><li><code>or</code>: stačí jedna</li><li><code>not</code>: obrátí pravdu</li></ul>
<pre>if vek >= 6 and vek < 18:
    print("dítě")</pre>
<p>Python umí i zkratku <code>6 &lt;= vek &lt; 18</code>.</p>`,
    task:`Vstupné podle věku: méně než 6 nebo 65 a víc je <b>Zdarma</b>, 6 až 17 je <b>Dětské</b>, jinak <b>Plné</b>.`,
    starter:`vek = int(input())\n`,
    stdin:'3',
    solution:`vek = int(input())\nif vek < 6 or vek >= 65:\n    print("Zdarma")\nelif vek < 18:\n    print("Dětské")\nelse:\n    print("Plné")\n`,
    tests:[{in:'3',out:'Zdarma'},{in:'70',out:'Zdarma'},{in:'6',out:'Dětské'},{in:'17',out:'Dětské'},{in:'18',out:'Plné'},{in:'64',out:'Plné'}],
    must:['\\bor\\b|\\band\\b'],
    hint:'První podmínka: vek < 6 or vek >= 65. Pak elif vek < 18.'},
  { id:'py3l5', title:'Porovnání textů',
    theory:`<p>Texty porovnáš stejně jako čísla, přes <code>==</code>. Pozor, velká a malá písmena se liší: <code>"Ano" == "ano"</code> je <code>False</code>.</p>
<p>Metoda <code>.lower()</code> převede text na malá písmena:</p>
<pre>odpoved = input().lower()</pre>`,
    task:`Načti odpověď. Když je to <b>ano</b> (jakkoliv velkými písmeny), vypiš <b>Super!</b>, jinak <b>Škoda.</b>`,
    starter:`odpoved = input()\nif odpoved == "ano":\n    print("Super!")\nelse:\n    print("Škoda.")\n`,
    stdin:'ANO',
    solution:`odpoved = input().lower()\nif odpoved == "ano":\n    print("Super!")\nelse:\n    print("Škoda.")\n`,
    tests:[{in:'ano',out:'Super!'},{in:'ANO',out:'Super!'},{in:'Ano',out:'Super!'},{in:'ne',out:'Škoda.'}],
    must:['lower\\(\\)'],
    hint:'Přidej .lower() za input().'},
  ]
},
{
  id:'py4', title:'Cykly', icon:'🔁', color:'#4dabf7',
  desc:'for, range, while, break a continue. Na konci projekt.',
  lessons:[
  { id:'py4l1', title:'for a range',
    theory:`<p><code>for</code> opakuje blok pro každou hodnotu. <code>range(od, do)</code> dává čísla od <code>od</code> až <b>před</b> <code>do</code>:</p>
<pre>for i in range(1, 4):
    print(i)      # 1, 2, 3</pre>
<p><code>range(3)</code> je zkratka pro <code>range(0, 3)</code>.</p>`,
    task:`Načti číslo <code>n</code> a vypiš pod sebe čísla od 1 do <code>n</code>.`,
    starter:`n = int(input())\n`,
    stdin:'3',
    solution:`n = int(input())\nfor i in range(1, n + 1):\n    print(i)\n`,
    tests:[{in:'3',out:'1\n2\n3'},{in:'1',out:'1'},{in:'5',out:'1\n2\n3\n4\n5'}],
    must:['for ','range\\('],
    hint:'range(1, n + 1), protože horní mez se nezapočítá.'},
  { id:'py4l2', title:'Odpočet',
    theory:`<p><code>range</code> má i třetí číslo: <b>krok</b>. Se záporným krokem jde pozpátku:</p>
<pre>for i in range(10, 0, -2):
    print(i)      # 10, 8, 6, 4, 2</pre>`,
    task:`Načti <code>n</code> a odpočítej od <code>n</code> do 0. Pak vypiš <b>Start!</b>`,
    starter:`n = int(input())\n\nprint("Start!")\n`,
    stdin:'3',
    solution:`n = int(input())\nfor i in range(n, -1, -1):\n    print(i)\nprint("Start!")\n`,
    tests:[{in:'3',out:'3\n2\n1\n0\nStart!'},{in:'0',out:'0\nStart!'}],
    must:['range\\(.*-\\s*1\\s*\\)'],
    hint:'range(n, -1, -1): začne na n, skončí na 0 (před -1), krok -1.'},
  { id:'py4l3', title:'Sčítání v cyklu',
    theory:`<p>Častý vzor: proměnná, do které v cyklu přičítáš.</p>
<pre>soucet = 0
for i in range(1, 4):
    soucet += i     # to samé jako soucet = soucet + i
print(soucet)       # 6</pre>`,
    task:`Načti <code>n</code> a vypiš součet čísel od 1 do <code>n</code>. Použij cyklus.`,
    starter:`n = int(input())\nsoucet = 0\n\nprint(soucet)\n`,
    stdin:'5',
    solution:`n = int(input())\nsoucet = 0\nfor i in range(1, n + 1):\n    soucet += i\nprint(soucet)\n`,
    tests:[{in:'5',out:'15'},{in:'100',out:'5050'},{in:'1',out:'1'}],
    must:['for ','\\+='],
    hint:'V cyklu for i in range(1, n + 1) piš soucet += i.'},
  { id:'py4l4', title:'while',
    theory:`<p><code>while</code> opakuje, <b>dokud</b> podmínka platí. Hodí se, když dopředu nevíš, kolikrát:</p>
<pre>x = int(input())
while x != 0:
    print(x)
    x = int(input())</pre>
<p>Pozor, ať se podmínka jednou změní, jinak cyklus nikdy neskončí.</p>`,
    task:`Načítej čísla (každé na řádku), dokud nepřijde <b>0</b>. Pak vypiš jejich součet.`,
    starter:`soucet = 0\nx = int(input())\n\nprint(soucet)\n`,
    stdin:'5\n3\n0',
    solution:`soucet = 0\nx = int(input())\nwhile x != 0:\n    soucet += x\n    x = int(input())\nprint(soucet)\n`,
    tests:[{in:'5\n3\n0',out:'8'},{in:'0',out:'0'},{in:'10\n-4\n1\n0',out:'7'}],
    must:['while'],
    hint:'while x != 0: přičti x a načti další x = int(input()).'},
  { id:'py4l5', title:'break a continue',
    theory:`<ul><li><code>break</code> cyklus hned ukončí.</li><li><code>continue</code> přeskočí zbytek kola a jde na další.</li></ul>
<pre>for i in range(1, 10):
    if i % 2 == 0:
        continue    # sudá přeskoč
    if i > 5:
        break       # konec
    print(i)        # 1, 3, 5</pre>`,
    task:`Načti <code>n</code>. Projdi čísla 1 až 20. Násobky 3 přeskoč (<code>continue</code>). Když je číslo větší než <code>n</code>, skonči (<code>break</code>). Ostatní vypiš pod sebe.`,
    starter:`n = int(input())\nfor i in range(1, 21):\n    print(i)\n`,
    stdin:'10',
    solution:`n = int(input())\nfor i in range(1, 21):\n    if i > n:\n        break\n    if i % 3 == 0:\n        continue\n    print(i)\n`,
    tests:[{in:'10',out:'1\n2\n4\n5\n7\n8\n10'},{in:'4',out:'1\n2\n4'},{in:'2',out:'1\n2'}],
    must:['break','continue'],
    hint:'V cyklu nejdřív if i > n: break, pak if i % 3 == 0: continue, pak print(i).'},
  { id:'py4l6', title:'Vnořené cykly',
    theory:`<p>Cyklus může být uvnitř jiného cyklu. Vnitřní proběhne celý pro každé kolo vnějšího:</p>
<pre>for r in range(1, 3):
    for s in range(1, 4):
        print(r * s, end=" ")
    print()        # nový řádek</pre>
<p>Výstup: <code>1 2 3</code> a pod tím <code>2 4 6</code>.</p>`,
    task:`Načti <code>n</code> a vypiš násobilku <code>n × n</code>. Čísla v řádku odděl mezerou. Pro <code>n = 3</code>:<pre>1 2 3
2 4 6
3 6 9</pre>`,
    starter:`n = int(input())\n`,
    stdin:'3',
    solution:`n = int(input())\nfor r in range(1, n + 1):\n    for s in range(1, n + 1):\n        print(r * s, end=" ")\n    print()\n`,
    tests:[{in:'3',out:'1 2 3\n2 4 6\n3 6 9'},{in:'1',out:'1'},{in:'4',out:'1 2 3 4\n2 4 6 8\n3 6 9 12\n4 8 12 16'}],
    must:['for [\\s\\S]*for '],
    hint:'Dva cykly for do n + 1. Uvnitř print(r * s, end=" "), za vnitřním cyklem print().'},
  { id:'py4p1', title:'Hádání čísla', project:true,
    theory:`<p>🏁 <b>Projekt.</b> Spojíš všechno ze světa: <code>while</code>, <code>if/elif/else</code> a počítání.</p>
<p>Na prvním řádku vstupu je tajné číslo. Na dalších řádcích jsou tipy hráče. Ve skutečné hře by tajné číslo vybral <code>random</code>, tady je ve vstupu, aby šly testy.</p>`,
    task:`Načti tajné číslo. Pak načítej tipy:<ul><li>tip menší než tajné: vypiš <b>Víc</b></li><li>tip větší: vypiš <b>Míň</b></li><li>trefa: vypiš <b>Uhodl jsi na N. pokus!</b> a skonči</li></ul>`,
    starter:`tajne = int(input())\npokusy = 0\n`,
    stdin:'42\n50\n30\n42',
    solution:`tajne = int(input())\npokusy = 0\nwhile True:\n    tip = int(input())\n    pokusy += 1\n    if tip < tajne:\n        print("Víc")\n    elif tip > tajne:\n        print("Míň")\n    else:\n        print(f"Uhodl jsi na {pokusy}. pokus!")\n        break\n`,
    tests:[{in:'42\n50\n30\n42',out:'Míň\nVíc\nUhodl jsi na 3. pokus!'},{in:'7\n7',out:'Uhodl jsi na 1. pokus!'},{in:'10\n1\n2\n3\n20\n10',out:'Víc\nVíc\nVíc\nMíň\nUhodl jsi na 5. pokus!'}],
    must:['while'],
    hint:'while True: načti tip, zvyš pokusy, porovnej. Při trefě vypiš zprávu a break.'},
  ]
},
];

const REVIEW_PY = {
py1: [
  {q:`Co vypíše tenhle kód?<pre>print("A", "B", sep="-")</pre>`, o:[`A B`,`A-B`,`AB-`], a:1, e:`<code>sep</code> nahradí mezeru mezi hodnotami.`},
  {q:`Čím začíná komentář v Pythonu?`, o:[`//`,`--`,`#`], a:2, e:`Všechno za <code>#</code> do konce řádku se ignoruje.`},
  {q:`Co vypíše tenhle kód?<pre>print("Ahoj", end="")
print("!")</pre>`, o:[`Ahoj!`,`Ahoj a pod tím !`,`Ahoj !`], a:0, e:`<code>end=""</code> zruší přechod na nový řádek.`},
  {q:`Napíšeš <code>prnt("Ahoj")</code>. Jakou chybu dostaneš?`, o:[`SyntaxError`,`NameError`,`Žádnou`], a:1, e:`Python nezná jméno <code>prnt</code>.`},
],
py2: [
  {q:`Kolik je <code>7 // 2</code>?`, o:[`3.5`,`3`,`4`], a:1, e:`<code>//</code> je celočíselné dělení.`},
  {q:`Kolik je <code>7 / 2</code>?`, o:[`3`,`3.5`,`4`], a:1, e:`Obyčejné dělení v Pythonu vrací vždy desetinné číslo.`},
  {q:`Co vypíše tenhle kód pro vstup 3 a 4?<pre>a = input()
b = input()
print(a + b)</pre>`, o:[`7`,`34`,`Chybu`], a:1, e:`<code>input()</code> vrací text a texty se spojí. Převeď je přes <code>int()</code>.`},
  {q:`Co vypíše <code>print(f"{2 + 3} kusy")</code>?`, o:[`{2 + 3} kusy`,`5 kusy`,`2 + 3 kusy`], a:1, e:`Ve f-stringu se obsah složených závorek vyhodnotí.`},
  {q:`Kolik je <code>2 ** 3</code>?`, o:[`6`,`8`,`9`], a:1, e:`<code>**</code> je mocnina: 2 × 2 × 2.`},
],
py3: [
  {q:`Co chybí?<pre>if x > 5
    print("velké")</pre>`, o:[`Dvojtečka za podmínkou`,`Závorky kolem podmínky`,`Nic`], a:0, e:`Za <code>if</code>, <code>elif</code>, <code>else</code>, <code>for</code>, <code>while</code> a <code>def</code> patří dvojtečka.`},
  {q:`Co vypíše tenhle kód pro <code>x = 70</code>?<pre>if x >= 50:
    print("A")
elif x >= 60:
    print("B")</pre>`, o:[`A`,`B`,`A i B`], a:0, e:`Použije se první větev, která platí. Ostatní se přeskočí.`},
  {q:`Platí <code>"Ano" == "ano"</code>?`, o:[`Ano`,`Ne`], a:1, e:`Velká a malá písmena se liší. Pomůže <code>.lower()</code>.`},
  {q:`Co znamená <code>!=</code>?`, o:[`nerovná se`,`přiřazení`,`rovná se`], a:0, e:`<code>==</code> je rovná se, <code>!=</code> nerovná se.`},
],
py4: [
  {q:`Co vypíše <code>for i in range(3): print(i)</code>?`, o:[`1 2 3`,`0 1 2`,`0 1 2 3`], a:1, e:`<code>range(3)</code> začíná nulou a 3 už nezahrne.`},
  {q:`Jaká čísla dá <code>range(10, 0, -3)</code>?`, o:[`10 7 4 1`,`10 7 4 1 0`,`9 6 3`], a:0, e:`Krok -3 jde dolů, 0 už se nezahrne.`},
  {q:`Co udělá <code>continue</code>?`, o:[`Ukončí cyklus`,`Přeskočí zbytek kola a jde na další`,`Zopakuje stejné kolo`], a:1, e:`<code>break</code> ukončí, <code>continue</code> jen přeskočí.`},
  {q:`Kdy skončí <code>while True:</code>?`, o:[`Nikdy, pokud uvnitř není break`,`Po jednom kole`,`Hned`], a:0, e:`Podmínka <code>True</code> platí vždy, takže ven se dostaneš přes <code>break</code>.`},
],
};
COURSE_PY.forEach(w => {
  const q = REVIEW_PY[w.id];
  if (q) w.lessons.push({id: w.id + 'q', type: 'quiz', title: 'Opakování', questions: q,
    theory: `<p>Pár rychlých otázek z tohoto světa. Vidíš vždy jen jednu.</p><p>Když netrefíš, nic se neděje, zkus jinou možnost. Po správné odpovědi uvidíš krátké vysvětlení.</p>`});
});
if (typeof module !== 'undefined') module.exports = COURSE_PY;
