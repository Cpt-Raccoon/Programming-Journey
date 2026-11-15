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
{
  id:'py5', title:'Seznamy', icon:'📋', color:'#e599f7',
  desc:'list: indexy, append, procházení, sum/max/min, řazení.',
  lessons:[
  { id:'py5l1', title:'Seznam',
    theory:`<p>Seznam (<code>list</code>) drží víc hodnot za sebou. Píše se do hranatých závorek:</p>
<pre>zvirata = ["pes", "kočka", "myš"]
print(zvirata[0])    # pes  (indexy od 0)
print(zvirata[-1])   # myš  (záporný index počítá od konce)
print(len(zvirata))  # 3</pre>`,
    task:`Máš seznam <code>ovoce</code>. Vypiš pod sebe první prvek, poslední prvek (přes index <code>-1</code>) a počet prvků.`,
    starter:`ovoce = ["jablko", "hruška", "švestka", "meruňka"]\n`,
    solution:`ovoce = ["jablko", "hruška", "švestka", "meruňka"]\nprint(ovoce[0])\nprint(ovoce[-1])\nprint(len(ovoce))\n`,
    tests:[{in:'',out:'jablko\nmeruňka\n4'}],
    must:['\\[-1\\]','len\\('],
    hint:'ovoce[0], ovoce[-1] a len(ovoce).'},
  { id:'py5l2', title:'append',
    theory:`<p>Prázdný seznam je <code>[]</code>. Metoda <code>append</code> přidá prvek na konec:</p>
<pre>nakup = []
nakup.append("chleba")
nakup.append("mléko")
print(nakup)   # ['chleba', 'mléko']</pre>`,
    task:`Na prvním řádku vstupu je počet slov <code>n</code>, pak <code>n</code> slov (každé na řádku). Ulož je do seznamu přes <code>append</code> a seznam vypiš.`,
    starter:`n = int(input())\nslova = []\n\nprint(slova)\n`,
    stdin:'3\npes\nkočka\nmyš',
    solution:`n = int(input())\nslova = []\nfor i in range(n):\n    slova.append(input())\nprint(slova)\n`,
    tests:[{in:'3\npes\nkočka\nmyš',out:"['pes', 'kočka', 'myš']"},{in:'1\nahoj',out:"['ahoj']"},{in:'0',out:'[]'}],
    must:['append'],
    hint:'for i in range(n): slova.append(input())'},
  { id:'py5l3', title:'Procházení a split',
    theory:`<p><code>for</code> umí projít seznam prvek po prvku:</p>
<pre>for zvire in zvirata:
    print(zvire)</pre>
<p>Metoda <code>split()</code> rozseká text podle mezer na seznam:</p>
<pre>"1 2 3".split()   # ['1', '2', '3']  (pořád texty!)</pre>`,
    task:`Na vstupu je řádek čísel oddělených mezerou. Vypiš pod sebe každé číslo dvakrát větší.`,
    starter:`casti = input().split()\n`,
    stdin:'1 2 3',
    solution:`casti = input().split()\nfor x in casti:\n    print(int(x) * 2)\n`,
    tests:[{in:'1 2 3',out:'2\n4\n6'},{in:'10 -5',out:'20\n-10'}],
    must:['split\\(','for '],
    hint:'for x in casti: print(int(x) * 2). Nezapomeň převést text na číslo.'},
  { id:'py5l4', title:'sum, max, min',
    theory:`<p>Na seznamy čísel jsou hotové funkce:</p>
<pre>cisla = [3, 9, 1]
sum(cisla)   # 13
max(cisla)   # 9
min(cisla)   # 1</pre>
<p>Seznam čísel ze vstupu postavíš takhle:</p>
<pre>cisla = []
for x in input().split():
    cisla.append(int(x))</pre>`,
    task:`Načti řádek čísel a vypiš:<pre>Součet: 20
Maximum: 9
Minimum: 1
Průměr: 5.0</pre>Průměr zaokrouhli na 1 desetinné místo.`,
    starter:`cisla = []\nfor x in input().split():\n    cisla.append(int(x))\n`,
    stdin:'3 9 1 7',
    solution:`cisla = []\nfor x in input().split():\n    cisla.append(int(x))\nprint(f"Součet: {sum(cisla)}")\nprint(f"Maximum: {max(cisla)}")\nprint(f"Minimum: {min(cisla)}")\nprint(f"Průměr: {sum(cisla) / len(cisla):.1f}")\n`,
    tests:[{in:'3 9 1 7',out:'Součet: 20\nMaximum: 9\nMinimum: 1\nPrůměr: 5.0'},{in:'5',out:'Součet: 5\nMaximum: 5\nMinimum: 5\nPrůměr: 5.0'},{in:'1 2',out:'Součet: 3\nMaximum: 2\nMinimum: 1\nPrůměr: 1.5'}],
    must:['sum\\(','max\\(','min\\('],
    hint:'Průměr je sum(cisla) / len(cisla), ve f-stringu s :.1f.'},
  { id:'py5l5', title:'Řazení a výřezy',
    theory:`<p><code>sort()</code> seřadí seznam, s <code>reverse=True</code> sestupně:</p>
<pre>c = [5, 1, 9]
c.sort(reverse=True)   # [9, 5, 1]</pre>
<p><b>Výřez</b> vezme kus seznamu: <code>c[:2]</code> jsou první dva prvky. <code>print(*c)</code> vypíše prvky oddělené mezerou bez závorek.</p>`,
    task:`Načti řádek čísel a vypiš 3 největší, sestupně, na jednom řádku oddělené mezerou.`,
    starter:`cisla = []\nfor x in input().split():\n    cisla.append(int(x))\n`,
    stdin:'5 1 9 3 7',
    solution:`cisla = []\nfor x in input().split():\n    cisla.append(int(x))\ncisla.sort(reverse=True)\nprint(*cisla[:3])\n`,
    tests:[{in:'5 1 9 3 7',out:'9 7 5'},{in:'4 4 2 8',out:'8 4 4'},{in:'1 2 3',out:'3 2 1'}],
    must:['sort'],
    hint:'cisla.sort(reverse=True), pak print(*cisla[:3]).'},
  { id:'py5l6', title:'Filtrování',
    theory:`<p>Nový seznam jen s některými prvky postavíš cyklem a podmínkou:</p>
<pre>velka = []
for x in cisla:
    if x > 10:
        velka.append(x)</pre>
<p>Prázdný seznam se v podmínce chová jako <code>False</code>: <code>if velka:</code> znamená „když něco obsahuje“.</p>`,
    task:`Načti řádek čísel a vypiš jen sudá (mezerou, v původním pořadí). Když žádné není, vypiš <b>Žádná</b>.`,
    starter:`cisla = []\nfor x in input().split():\n    cisla.append(int(x))\n`,
    stdin:'1 2 3 4',
    solution:`cisla = []\nfor x in input().split():\n    cisla.append(int(x))\nsuda = []\nfor x in cisla:\n    if x % 2 == 0:\n        suda.append(x)\nif suda:\n    print(*suda)\nelse:\n    print("Žádná")\n`,
    tests:[{in:'1 2 3 4',out:'2 4'},{in:'1 3',out:'Žádná'},{in:'8 6 7',out:'8 6'}],
    must:['append'],
    hint:'Projdi cisla, sudá přidej do nového seznamu. Pak if suda: print(*suda) else: print("Žádná").'},
  ]
},
{
  id:'py6', title:'Texty', icon:'🔤', color:'#ff922b',
  desc:'Indexy, výřezy, metody textů, split a join.',
  lessons:[
  { id:'py6l1', title:'Znaky v textu',
    theory:`<p>Text se chová podobně jako seznam znaků:</p>
<pre>s = "Python"
s[0]      # 'P'
s[-1]     # 'n'
len(s)    # 6</pre>`,
    task:`Načti slovo a vypiš pod sebe jeho první znak, poslední znak a délku.`,
    starter:`s = input()\n`,
    stdin:'Python',
    solution:`s = input()\nprint(s[0])\nprint(s[-1])\nprint(len(s))\n`,
    tests:[{in:'Python',out:'P\nn\n6'},{in:'ahoj',out:'a\nj\n4'}],
    must:['len\\('],
    hint:'s[0], s[-1], len(s).'},
  { id:'py6l2', title:'Pozpátku a palindrom',
    theory:`<p>Výřez <code>[od:do:krok]</code> funguje i na text. Krok <code>-1</code> jde pozpátku:</p>
<pre>s = "Python"
s[1:4]    # 'yth'
s[::-1]   # 'nohtyP'</pre>
<p>Palindrom se čte stejně z obou stran, třeba „kajak“.</p>`,
    task:`Načti slovo. Vypiš ho pozpátku. Na další řádek vypiš <b>Palindrom</b> nebo <b>Není palindrom</b> (velikost písmen nerozhoduje).`,
    starter:`s = input()\n`,
    stdin:'Kajak',
    solution:`s = input()\nprint(s[::-1])\nif s.lower() == s.lower()[::-1]:\n    print("Palindrom")\nelse:\n    print("Není palindrom")\n`,
    tests:[{in:'Kajak',out:'kajaK\nPalindrom'},{in:'Python',out:'nohtyP\nNení palindrom'},{in:'a',out:'a\nPalindrom'}],
    must:['\\[::-1\\]'],
    hint:'Porovnej s.lower() s s.lower()[::-1].'},
  { id:'py6l3', title:'Metody textů',
    theory:`<p>Text má spoustu metod. Nic nemění, vždy vrátí nový text:</p>
<pre>s = "ahoj svete"
s.upper()             # 'AHOJ SVETE'
s.replace(" ", "_")   # 'ahoj_svete'
s.count("e")          # 2
"  x  ".strip()       # 'x'</pre>`,
    task:`Načti větu. Vypiš ji velkými písmeny, pak s mezerami nahrazenými podtržítkem a nakonec počet písmen <b>a</b>.`,
    starter:`veta = input()\n`,
    stdin:'ahoj jak se mas',
    solution:`veta = input()\nprint(veta.upper())\nprint(veta.replace(" ", "_"))\nprint(veta.count("a"))\n`,
    tests:[{in:'ahoj jak se mas',out:'AHOJ JAK SE MAS\nahoj_jak_se_mas\n3'},{in:'python',out:'PYTHON\npython\n0'}],
    must:['upper\\(','replace\\(','count\\('],
    hint:'Tři řádky print: veta.upper(), veta.replace(" ", "_"), veta.count("a").'},
  { id:'py6l4', title:'split a join',
    theory:`<p><code>split()</code> udělá z textu seznam slov. <code>join</code> je opak, slepí seznam do textu:</p>
<pre>slova = "a b c".split()      # ['a', 'b', 'c']
"-".join(slova)              # 'a-b-c'
slova[::-1]                  # ['c', 'b', 'a']</pre>`,
    task:`Načti větu. Vypiš počet slov a na další řádek slova v obráceném pořadí, oddělená mezerou.`,
    starter:`veta = input()\n`,
    stdin:'jedna dva tri',
    solution:`veta = input()\nslova = veta.split()\nprint(len(slova))\nprint(" ".join(slova[::-1]))\n`,
    tests:[{in:'jedna dva tri',out:'3\ntri dva jedna'},{in:'ahoj',out:'1\nahoj'}],
    must:['split\\(','join\\('],
    hint:'slova = veta.split(), pak " ".join(slova[::-1]).'},
  { id:'py6l5', title:'in a endswith',
    theory:`<p><code>in</code> zjistí, jestli text obsahuje jiný text. <code>startswith</code> a <code>endswith</code> kontrolují začátek a konec:</p>
<pre>"@" in "tom@seznam.cz"            # True
"tom@seznam.cz".endswith(".cz")   # True</pre>`,
    task:`Načti e-mail. Když obsahuje <b>@</b> a končí na <b>.cz</b>, vypiš <b>Platný český e-mail</b>, jinak <b>Neplatný</b>.`,
    starter:`email = input()\n`,
    stdin:'tom@seznam.cz',
    solution:`email = input()\nif "@" in email and email.endswith(".cz"):\n    print("Platný český e-mail")\nelse:\n    print("Neplatný")\n`,
    tests:[{in:'tom@seznam.cz',out:'Platný český e-mail'},{in:'tom.seznam.cz',out:'Neplatný'},{in:'tom@gmail.com',out:'Neplatný'}],
    must:['\\bin\\b','endswith\\('],
    hint:'if "@" in email and email.endswith(".cz"):'},
  { id:'py6l6', title:'Počítání znaků',
    theory:`<p>Cyklus <code>for</code> projde text znak po znaku:</p>
<pre>for znak in "ahoj":
    print(znak)</pre>
<p>S <code>in</code> zjistíš, jestli je znak v nějaké skupině: <code>if znak in "aeiou":</code></p>`,
    task:`Načti text a spočítej samohlásky (a e i o u y, i s čárkami: á é ě í ó ú ů ý). Velikost písmen nerozhoduje.`,
    starter:`text = input()\npocet = 0\n\nprint(pocet)\n`,
    stdin:'Ahoj světe',
    solution:`text = input()\npocet = 0\nfor znak in text.lower():\n    if znak in "aeiouyáéěíóúůý":\n        pocet += 1\nprint(pocet)\n`,
    tests:[{in:'Ahoj světe',out:'4'},{in:'Python',out:'2'},{in:'krk',out:'0'}],
    must:['for '],
    hint:'for znak in text.lower(): if znak in "aeiouyáéěíóúůý": pocet += 1'},
  ]
},
{
  id:'py7', title:'Funkce', icon:'🧩', color:'#20c997',
  desc:'def, return, výchozí parametry, rekurze.',
  lessons:[
  { id:'py7l1', title:'def',
    theory:`<p>Funkce je pojmenovaný kus kódu, který můžeš spustit kolikrát chceš:</p>
<pre>def pozdrav(jmeno):
    print(f"Ahoj, {jmeno}!")

pozdrav("Tom")
pozdrav("Eva")</pre>
<p>Funkci musíš definovat dřív, než ji zavoláš.</p>`,
    task:`Napiš funkci <code>pozdrav(jmeno)</code>, která vypíše <b>Ahoj, JMÉNO!</b>. Zavolej ji pro <b>Tom</b> a pak pro <b>Eva</b>.`,
    starter:`# def pozdrav(jmeno):\n\n`,
    solution:`def pozdrav(jmeno):\n    print(f"Ahoj, {jmeno}!")\n\npozdrav("Tom")\npozdrav("Eva")\n`,
    tests:[{in:'',out:'Ahoj, Tom!\nAhoj, Eva!'}],
    must:['def pozdrav\\(','pozdrav\\("Tom"\\)|pozdrav\\(\'Tom\'\\)'],
    hint:'Tělo funkce odsaď. Pak dva řádky pozdrav("Tom") a pozdrav("Eva").'},
  { id:'py7l2', title:'return',
    theory:`<p><code>return</code> vrátí výsledek tomu, kdo funkci zavolal. Funkce nic nevypisuje, jen počítá:</p>
<pre>def ctverec(x):
    return x * x

vysledek = ctverec(4)   # 16</pre>`,
    task:`Napiš funkci <code>obsah(a, b)</code>, která <b>vrátí</b> obsah obdélníku. Načti dvě čísla a vypiš výsledek funkce.`,
    starter:`def obsah(a, b):\n    pass\n\na = int(input())\nb = int(input())\n`,
    stdin:'3\n4',
    solution:`def obsah(a, b):\n    return a * b\n\na = int(input())\nb = int(input())\nprint(obsah(a, b))\n`,
    tests:[{in:'3\n4',out:'12'},{in:'10\n1',out:'10'}],
    must:['def obsah','return'],
    hint:'Místo pass napiš return a * b. Pak print(obsah(a, b)).'},
  { id:'py7l3', title:'Výchozí parametry',
    theory:`<p>Parametr může mít výchozí hodnotu. Když ho při volání vynecháš, použije se ona:</p>
<pre>def pozdrav(jmeno, pozdrav="Ahoj"):
    print(f"{pozdrav}, {jmeno}!")

pozdrav("Tom")            # Ahoj, Tom!
pozdrav("Tom", "Čau")     # Čau, Tom!</pre>`,
    task:`Napiš <code>mocnina(x, n=2)</code>, která vrátí <code>x</code> na <code>n</code>-tou. Načti <code>x</code>. Vypiš <code>mocnina(x)</code> a pod to <code>mocnina(x, 3)</code>.`,
    starter:`x = int(input())\n`,
    stdin:'3',
    solution:`def mocnina(x, n=2):\n    return x ** n\n\nx = int(input())\nprint(mocnina(x))\nprint(mocnina(x, 3))\n`,
    tests:[{in:'3',out:'9\n27'},{in:'2',out:'4\n8'}],
    must:['def mocnina\\(\\s*x\\s*,\\s*n\\s*=\\s*2\\s*\\)'],
    hint:'def mocnina(x, n=2): return x ** n'},
  { id:'py7l4', title:'Funkce, která odpovídá ano/ne',
    theory:`<p>Funkce může vracet <code>True</code> nebo <code>False</code>. Pak se dobře používá v <code>if</code>:</p>
<pre>def je_sude(n):
    return n % 2 == 0

if je_sude(4):
    print("sudé")</pre>
<p>Prvočíslo je větší než 1 a dělí se jen 1 a samo sebou.</p>`,
    task:`Napiš <code>je_prvocislo(n)</code>. Načti <code>n</code> a vypiš všechna prvočísla od 2 do <code>n</code> na jeden řádek, oddělená mezerou.`,
    starter:`def je_prvocislo(n):\n    pass\n\nn = int(input())\n`,
    stdin:'10',
    solution:`def je_prvocislo(n):\n    if n < 2:\n        return False\n    for d in range(2, n):\n        if n % d == 0:\n            return False\n    return True\n\nn = int(input())\nprvocisla = []\nfor i in range(2, n + 1):\n    if je_prvocislo(i):\n        prvocisla.append(i)\nprint(*prvocisla)\n`,
    tests:[{in:'10',out:'2 3 5 7'},{in:'2',out:'2'},{in:'20',out:'2 3 5 7 11 13 17 19'}],
    must:['def je_prvocislo','return','je_prvocislo\\(\\s*i'],
    hint:'Ve funkci zkus dělitele od 2 do n - 1. Když nějaký dělí beze zbytku, return False. Na konci return True.'},
  { id:'py7l5', title:'Víc výsledků naráz',
    theory:`<p>Funkce může vrátit víc hodnot oddělených čárkou. Přijdou jako <b>tuple</b> a rovnou je rozbalíš:</p>
<pre>def deleni(a, b):
    return a // b, a % b

podil, zbytek = deleni(17, 5)   # 3, 2</pre>`,
    task:`Napiš <code>min_max(cisla)</code>, která vrátí nejmenší a největší číslo. Načti řádek čísel a vypiš třeba <b>Min: 1, Max: 9</b>.`,
    starter:`def min_max(cisla):\n    pass\n\ncisla = []\nfor x in input().split():\n    cisla.append(int(x))\n`,
    stdin:'3 9 1 7',
    solution:`def min_max(cisla):\n    return min(cisla), max(cisla)\n\ncisla = []\nfor x in input().split():\n    cisla.append(int(x))\nmn, mx = min_max(cisla)\nprint(f"Min: {mn}, Max: {mx}")\n`,
    tests:[{in:'3 9 1 7',out:'Min: 1, Max: 9'},{in:'5',out:'Min: 5, Max: 5'}],
    must:['def min_max','return .*,'],
    hint:'return min(cisla), max(cisla). Pak mn, mx = min_max(cisla).'},
  { id:'py7l6', title:'Rekurze',
    theory:`<p>Rekurzivní funkce volá sama sebe. Potřebuje <b>základní případ</b>, kdy se zastaví:</p>
<pre>def odpocet(n):
    if n == 0:          # základní případ
        print("Start!")
        return
    print(n)
    odpocet(n - 1)</pre>
<p>Faktoriál: <code>5! = 5 × 4 × 3 × 2 × 1</code>, a <code>0! = 1</code>.</p>`,
    task:`Napiš rekurzivní <code>faktorial(n)</code>. Načti <code>n</code> a vypiš výsledek.`,
    starter:`def faktorial(n):\n    pass\n\nprint(faktorial(int(input())))\n`,
    stdin:'5',
    solution:`def faktorial(n):\n    if n == 0:\n        return 1\n    return n * faktorial(n - 1)\n\nprint(faktorial(int(input())))\n`,
    tests:[{in:'5',out:'120'},{in:'0',out:'1'},{in:'10',out:'3628800'}],
    must:['def faktorial','faktorial\\(\\s*n\\s*-\\s*1\\s*\\)'],
    hint:'Když n == 0, vrať 1. Jinak vrať n * faktorial(n - 1).'},
  ]
},
{
  id:'py8', title:'Slovníky a množiny', icon:'📚', color:'#748ffc',
  desc:'dict, počítání, set a tuple. Na konci projekt Sklad.',
  lessons:[
  { id:'py8l1', title:'Slovník',
    theory:`<p>Slovník (<code>dict</code>) přiřazuje hodnoty ke <b>klíčům</b>. Píše se do složených závorek:</p>
<pre>ceny = {"jablko": 12, "rohlík": 3}
ceny["jablko"]        # 12
"hruška" in ceny      # False</pre>
<p>Když klíč neexistuje, <code>ceny["hruška"]</code> skončí chybou <code>KeyError</code>. Proto se nejdřív ptej přes <code>in</code>.</p>`,
    task:`Máš slovník <code>telefony</code>. Načti jméno a vypiš jeho číslo. Když jméno ve slovníku není, vypiš <b>Neznámý kontakt</b>.`,
    starter:`telefony = {"Tom": "777 111 222", "Eva": "603 555 444", "Petr": "720 000 999"}\n`,
    stdin:'Eva',
    solution:`telefony = {"Tom": "777 111 222", "Eva": "603 555 444", "Petr": "720 000 999"}\njmeno = input()\nif jmeno in telefony:\n    print(telefony[jmeno])\nelse:\n    print("Neznámý kontakt")\n`,
    tests:[{in:'Eva',out:'603 555 444'},{in:'Tom',out:'777 111 222'},{in:'Jana',out:'Neznámý kontakt'}],
    must:['\\bin\\s+telefony'],
    hint:'if jmeno in telefony: print(telefony[jmeno]) else: ...'},
  { id:'py8l2', title:'Přidávání a procházení',
    theory:`<p>Nový klíč přidáš přiřazením. <code>items()</code> projde dvojice klíč a hodnota:</p>
<pre>body = {}
body["Tom"] = 10
for jmeno, b in body.items():
    print(jmeno, b)</pre>
<p><code>sorted(body)</code> dá klíče seřazené podle abecedy.</p>`,
    task:`Na vstupu je počet hráčů <code>n</code> a pak <code>n</code> řádků <code>jméno body</code>. Ulož je do slovníku a vypiš <b>jméno: body</b> seřazené podle jména.`,
    starter:`n = int(input())\nbody = {}\n`,
    stdin:'3\nTom 10\nAda 7\nEva 12',
    solution:`n = int(input())\nbody = {}\nfor i in range(n):\n    jmeno, b = input().split()\n    body[jmeno] = int(b)\nfor jmeno in sorted(body):\n    print(f"{jmeno}: {body[jmeno]}")\n`,
    tests:[{in:'3\nTom 10\nAda 7\nEva 12',out:'Ada: 7\nEva: 12\nTom: 10'},{in:'1\nZoe 0',out:'Zoe: 0'}],
    must:['sorted\\(','\\]\\s*=\\s*'],
    hint:'jmeno, b = input().split() rozdělí řádek na dvě části. Pak body[jmeno] = int(b).'},
  { id:'py8l3', title:'Počítání slov',
    theory:`<p><code>get(klíč, výchozí)</code> vrátí hodnotu, nebo výchozí, když klíč chybí. Ideální na počítání:</p>
<pre>pocty = {}
for slovo in ["a", "b", "a"]:
    pocty[slovo] = pocty.get(slovo, 0) + 1
# {'a': 2, 'b': 1}</pre>
<p>Slovník si pamatuje pořadí, v jakém jsi klíče přidal.</p>`,
    task:`Načti větu. Pro každé slovo vypiš <b>slovo: počet</b>, v pořadí, v jakém se slova poprvé objevila.`,
    starter:`veta = input()\npocty = {}\n`,
    stdin:'pes kočka pes myš pes',
    solution:`veta = input()\npocty = {}\nfor slovo in veta.split():\n    pocty[slovo] = pocty.get(slovo, 0) + 1\nfor slovo, pocet in pocty.items():\n    print(f"{slovo}: {pocet}")\n`,
    tests:[{in:'pes kočka pes myš pes',out:'pes: 3\nkočka: 1\nmyš: 1'},{in:'a a a',out:'a: 3'}],
    must:['get\\('],
    hint:'pocty[slovo] = pocty.get(slovo, 0) + 1, pak for slovo, pocet in pocty.items().'},
  { id:'py8l4', title:'Množiny',
    theory:`<p>Množina (<code>set</code>) drží každou hodnotu <b>jen jednou</b> a nemá pořadí:</p>
<pre>set(["a", "b", "a"])     # {'a', 'b'}
{1, 2, 3} & {2, 3, 4}    # {2, 3}  průnik
{1, 2} | {2, 5}          # {1, 2, 5}  sjednocení</pre>
<p>Na výpis ji seřaď: <code>sorted(mnozina)</code> vrátí seznam.</p>`,
    task:`Načti dva řádky slov. Vypiš slova, která jsou v obou řádcích, seřazená podle abecedy a oddělená mezerou. Když žádné není, vypiš <b>Nic společného</b>.`,
    starter:`a = input().split()\nb = input().split()\n`,
    stdin:'pes kočka myš\nmyš slon pes',
    solution:`a = input().split()\nb = input().split()\nspolecna = set(a) & set(b)\nif spolecna:\n    print(*sorted(spolecna))\nelse:\n    print("Nic společného")\n`,
    tests:[{in:'pes kočka myš\nmyš slon pes',out:'myš pes'},{in:'a b\nc d',out:'Nic společného'},{in:'x x y\nx',out:'x'}],
    must:['set\\('],
    hint:'set(a) & set(b), pak print(*sorted(...)).'},
  { id:'py8l5', title:'Tuple',
    theory:`<p><b>Tuple</b> je jako seznam, jen se nedá měnit. Píše se do kulatých závorek a hodí se na pevné dvojice, třeba souřadnice:</p>
<pre>bod = (3, 4)
x, y = bod            # rozbalení
body = [(0, 1), (2, 2)]</pre>`,
    task:`Načti počet bodů <code>n</code> a pak <code>n</code> řádků <code>x y</code>. Ulož body jako tuple do seznamu. Vypiš bod nejblíž počátku (nejmenší <code>x*x + y*y</code>) ve tvaru <b>Nejblíž: (1, 1)</b>.`,
    starter:`n = int(input())\nbody = []\n`,
    stdin:'3\n3 4\n1 1\n-2 0',
    solution:`n = int(input())\nbody = []\nfor i in range(n):\n    x, y = input().split()\n    body.append((int(x), int(y)))\nnejblizsi = body[0]\nfor bod in body:\n    x, y = bod\n    if x * x + y * y < nejblizsi[0] ** 2 + nejblizsi[1] ** 2:\n        nejblizsi = bod\nprint(f"Nejblíž: {nejblizsi}")\n`,
    tests:[{in:'3\n3 4\n1 1\n-2 0',out:'Nejblíž: (1, 1)'},{in:'1\n5 5',out:'Nejblíž: (5, 5)'},{in:'2\n0 -3\n2 2',out:'Nejblíž: (2, 2)'}],
    must:['append\\(\\s*\\('],
    hint:'body.append((int(x), int(y))) se dvěma závorkami. Pak hledej minimum cyklem jako u max/min.'},
  { id:'py8p1', title:'Sklad', project:true,
    theory:`<p>🏁 <b>Projekt.</b> Malý skladový program. Použiješ slovník, <code>split</code>, cykly a podmínky.</p>
<p>Příkazy:</p>
<ul><li><code>pridej věc počet</code>: přidá kusy</li>
<li><code>odeber věc počet</code>: odebere kusy. Když jich není dost, vypíše <b>Nedostatek: věc</b> a nic nezmění. Když jich zbude 0, věc ze skladu zmizí.</li>
<li><code>stav</code>: vypíše věci seřazené podle jména jako <b>věc: počet</b>, nebo <b>Sklad je prázdný</b>.</li></ul>`,
    task:`Na prvním řádku je počet příkazů, pak příkazy. Proveď je.`,
    starter:`n = int(input())\nsklad = {}\nfor i in range(n):\n    casti = input().split()\n`,
    stdin:'5\npridej jablko 3\npridej hruška 2\nodeber jablko 1\nodeber hruška 5\nstav',
    solution:`n = int(input())\nsklad = {}\nfor i in range(n):\n    casti = input().split()\n    prikaz = casti[0]\n    if prikaz == "pridej":\n        vec, pocet = casti[1], int(casti[2])\n        sklad[vec] = sklad.get(vec, 0) + pocet\n    elif prikaz == "odeber":\n        vec, pocet = casti[1], int(casti[2])\n        if sklad.get(vec, 0) < pocet:\n            print(f"Nedostatek: {vec}")\n        else:\n            sklad[vec] -= pocet\n            if sklad[vec] == 0:\n                del sklad[vec]\n    elif prikaz == "stav":\n        if not sklad:\n            print("Sklad je prázdný")\n        for vec in sorted(sklad):\n            print(f"{vec}: {sklad[vec]}")\n`,
    tests:[
      {in:'5\npridej jablko 3\npridej hruška 2\nodeber jablko 1\nodeber hruška 5\nstav',out:'Nedostatek: hruška\nhruška: 2\njablko: 2'},
      {in:'3\npridej mléko 1\nodeber mléko 1\nstav',out:'Sklad je prázdný'},
      {in:'4\nstav\npridej rohlík 5\npridej rohlík 5\nstav',out:'Sklad je prázdný\nrohlík: 10'},
      {in:'2\nodeber sýr 1\nstav',out:'Nedostatek: sýr\nSklad je prázdný'}],
    must:['get\\(|\\bin\\s+sklad','sorted\\('],
    hint:'Podle casti[0] rozhodni, co dělat. Na nulu zkontroluj po odebrání a smaž přes del sklad[vec].'},
  ]
},
{
  id:'py9', title:'Chyby a soubory', icon:'🛡️', color:'#f06595',
  desc:'try/except, raise, zápis a čtení souborů.',
  lessons:[
  { id:'py9l1', title:'try a except',
    theory:`<p>Když něco může selhat, dej to do <code>try</code>. Při chybě program nespadne, ale skočí do <code>except</code>:</p>
<pre>try:
    x = int(input())
    print("OK")
except ValueError:
    print("To není číslo")</pre>`,
    task:`Načti vstup. Když je to celé číslo, vypiš <b>Číslo: X</b>. Jinak vypiš <b>To není číslo</b>.`,
    starter:`x = int(input())\nprint(f"Číslo: {x}")\n`,
    stdin:'abc',
    solution:`try:\n    x = int(input())\n    print(f"Číslo: {x}")\nexcept ValueError:\n    print("To není číslo")\n`,
    tests:[{in:'42',out:'Číslo: 42'},{in:'abc',out:'To není číslo'},{in:'-7',out:'Číslo: -7'}],
    must:['try','except ValueError'],
    hint:'Oba řádky dej do try:, pod to except ValueError: print("To není číslo").'},
  { id:'py9l2', title:'Víc druhů chyb',
    theory:`<p>Za jeden <code>try</code> můžeš dát víc <code>except</code>, pro každý druh chyby jiný:</p>
<pre>try:
    ...
except ValueError:
    print("špatné číslo")
except ZeroDivisionError:
    print("dělení nulou")</pre>`,
    task:`Načti dvě čísla a vypiš jejich podíl na 2 desetinná místa. Při dělení nulou vypiš <b>Nulou dělit nejde</b>, při špatném vstupu <b>Zadej čísla</b>.`,
    starter:`a = int(input())\nb = int(input())\nprint(f"{a / b:.2f}")\n`,
    stdin:'7\n2',
    solution:`try:\n    a = int(input())\n    b = int(input())\n    print(f"{a / b:.2f}")\nexcept ZeroDivisionError:\n    print("Nulou dělit nejde")\nexcept ValueError:\n    print("Zadej čísla")\n`,
    tests:[{in:'7\n2',out:'3.50'},{in:'5\n0',out:'Nulou dělit nejde'},{in:'x\n2',out:'Zadej čísla'}],
    must:['ZeroDivisionError','ValueError'],
    hint:'Celý výpočet do try:, pod něj dva except.'},
  { id:'py9l3', title:'raise',
    theory:`<p>Chybu můžeš vyvolat i sám přes <code>raise</code>. Hodí se, když funkce dostane nesmysl:</p>
<pre>def nastav_vek(v):
    if v < 0:
        raise ValueError("Věk nesmí být záporný")
    return v</pre>
<p>Text chyby získáš přes <code>except ValueError as e:</code> a <code>print(e)</code>.</p>`,
    task:`Napiš <code>nastav_vek(v)</code>, která pro záporný věk vyvolá <code>ValueError("Věk nesmí být záporný")</code> a pro věk nad 150 <code>ValueError("To je moc")</code>. Načti věk a vypiš <b>Věk je X</b>, nebo text chyby.`,
    starter:`def nastav_vek(v):\n    return v\n\nv = int(input())\nprint(f"Věk je {nastav_vek(v)}")\n`,
    stdin:'-3',
    solution:`def nastav_vek(v):\n    if v < 0:\n        raise ValueError("Věk nesmí být záporný")\n    if v > 150:\n        raise ValueError("To je moc")\n    return v\n\nv = int(input())\ntry:\n    print(f"Věk je {nastav_vek(v)}")\nexcept ValueError as e:\n    print(e)\n`,
    tests:[{in:'30',out:'Věk je 30'},{in:'-3',out:'Věk nesmí být záporný'},{in:'200',out:'To je moc'}],
    must:['raise ValueError','except ValueError as'],
    hint:'Ve funkci dvě podmínky s raise. Volání obal do try a v except vypiš e.'},
  { id:'py9l4', title:'Zápis do souboru',
    theory:`<p>Soubor otevřeš přes <code>open</code>. Nejlíp s <code>with</code>, ten soubor sám zavře:</p>
<pre>with open("poznamky.txt", "w") as f:
    f.write("první řádek\\n")

with open("poznamky.txt") as f:
    for radek in f:
        print(radek.strip())</pre>
<p><code>"w"</code> znamená zápis (přepíše soubor), bez něj se čte. <code>strip()</code> odstraní konec řádku.</p>`,
    task:`Načti 3 řádky a zapiš je do souboru <code>poznamky.txt</code>. Pak soubor přečti a vypiš řádky očíslované, třeba <b>1: nakoupit</b>.`,
    starter:`radky = [input(), input(), input()]\n`,
    stdin:'nakoupit\nuklidit\nučit se Python',
    solution:`radky = [input(), input(), input()]\nwith open("poznamky.txt", "w") as f:\n    for r in radky:\n        f.write(r + "\\n")\n\ncislo = 1\nwith open("poznamky.txt") as f:\n    for radek in f:\n        print(f"{cislo}: {radek.strip()}")\n        cislo += 1\n`,
    tests:[{in:'nakoupit\nuklidit\nučit se Python',out:'1: nakoupit\n2: uklidit\n3: učit se Python'},{in:'a\nb\nc',out:'1: a\n2: b\n3: c'}],
    must:['with open','"w"|\'w\'','write\\('],
    hint:'Při zápisu přidej ke každému řádku "\\n". Při čtení počítej řádky proměnnou.'},
  { id:'py9l5', title:'Připisování',
    theory:`<p>Režim <code>"a"</code> (append) připisuje na konec a starý obsah nechá:</p>
<pre>with open("denik.txt", "a") as f:
    f.write("další den\\n")</pre>
<p><code>f.readlines()</code> načte všechny řádky do seznamu.</p>`,
    task:`Zapiš do <code>denik.txt</code> řádek <b>Den 1</b> (režim <code>"w"</code>). Pak načti počet <code>n</code> a <code>n</code> řádků a připiš je (režim <code>"a"</code>). Nakonec vypiš <b>Řádků: X</b> a celý obsah deníku.`,
    starter:`with open("denik.txt", "w") as f:\n    f.write("Den 1\\n")\n`,
    stdin:'2\nDen 2\nDen 3',
    solution:`with open("denik.txt", "w") as f:\n    f.write("Den 1\\n")\nn = int(input())\nwith open("denik.txt", "a") as f:\n    for i in range(n):\n        f.write(input() + "\\n")\nwith open("denik.txt") as f:\n    radky = f.readlines()\nprint(f"Řádků: {len(radky)}")\nfor r in radky:\n    print(r.strip())\n`,
    tests:[{in:'2\nDen 2\nDen 3',out:'Řádků: 3\nDen 1\nDen 2\nDen 3'},{in:'0',out:'Řádků: 1\nDen 1'}],
    must:['"a"|\'a\'','readlines\\('],
    hint:'Druhý open s "a", třetí bez režimu pro čtení. len(radky) je počet řádků.'},
  { id:'py9l6', title:'Soubor neexistuje',
    theory:`<p>Když soubor není, <code>open</code> skončí chybou <code>FileNotFoundError</code>. Chytíš ji jako každou jinou:</p>
<pre>try:
    with open("x.txt") as f:
        print(f.read())
except FileNotFoundError:
    print("Soubor nenalezen")</pre>
<p><code>f.read()</code> načte celý soubor jako jeden text.</p>`,
    task:`Program si vytvoří soubor <code>data.txt</code>. Pak načte jméno souboru ze vstupu. Vypiš jeho obsah, nebo <b>Soubor nenalezen</b>.`,
    starter:`with open("data.txt", "w") as f:\n    f.write("ahoj ze souboru")\n\njmeno = input()\n`,
    stdin:'data.txt',
    solution:`with open("data.txt", "w") as f:\n    f.write("ahoj ze souboru")\n\njmeno = input()\ntry:\n    with open(jmeno) as f:\n        print(f.read())\nexcept FileNotFoundError:\n    print("Soubor nenalezen")\n`,
    tests:[{in:'data.txt',out:'ahoj ze souboru'},{in:'neni.txt',out:'Soubor nenalezen'}],
    must:['FileNotFoundError'],
    hint:'open(jmeno) dej do try:, pod to except FileNotFoundError:.'},
  ]
},
{
  id:'py10', title:'Třídy a objekty', icon:'🏗️', color:'#38d9a9',
  desc:'class, __init__, metody, __str__, dědičnost. Na konci projekt Knihovna.',
  lessons:[
  { id:'py10l1', title:'class a __init__',
    theory:`<p>Třída je plán, podle kterého se vyrábí <b>objekty</b>. <code>__init__</code> se zavolá při vytvoření objektu a nastaví jeho data. <code>self</code> je ten konkrétní objekt:</p>
<pre>class Pes:
    def __init__(self, jmeno, vek):
        self.jmeno = jmeno
        self.vek = vek

rex = Pes("Rex", 3)
print(rex.jmeno)   # Rex</pre>`,
    task:`Napiš třídu <code>Kocka</code> s vlastnostmi <code>jmeno</code> a <code>vek</code>. Vytvoř Micku (3) a Toma (5) a vypiš:<pre>Micka, věk 3
Tom, věk 5</pre>`,
    starter:`# class Kocka:\n\n`,
    solution:`class Kocka:\n    def __init__(self, jmeno, vek):\n        self.jmeno = jmeno\n        self.vek = vek\n\nk1 = Kocka("Micka", 3)\nk2 = Kocka("Tom", 5)\nfor k in [k1, k2]:\n    print(f"{k.jmeno}, věk {k.vek}")\n`,
    tests:[{in:'',out:'Micka, věk 3\nTom, věk 5'}],
    must:['class Kocka','def __init__\\(\\s*self','Kocka\\('],
    hint:'V __init__ ulož self.jmeno = jmeno a self.vek = vek. Pak k1 = Kocka("Micka", 3).'},
  { id:'py10l2', title:'Metody',
    theory:`<p>Metoda je funkce uvnitř třídy. Vždy dostane <code>self</code>, takže vidí data objektu:</p>
<pre>class Pocitadlo:
    def __init__(self):
        self.hodnota = 0
    def pricti(self):
        self.hodnota += 1

p = Pocitadlo()
p.pricti()</pre>`,
    task:`Napiš třídu <code>Ucet</code> se zůstatkem 0 a metodami <code>vloz(castka)</code> a <code>vyber(castka)</code>. <code>vyber</code> vrátí <code>False</code> a nic nezmění, když peníze nestačí. Na vstupu je počet operací a pak řádky <code>vloz 100</code> nebo <code>vyber 50</code>. Při neúspěšném výběru vypiš <b>Nedostatek peněz</b>. Na konci <b>Zůstatek: X</b>.`,
    starter:`class Ucet:\n    def __init__(self):\n        self.zustatek = 0\n\nucet = Ucet()\nn = int(input())\n`,
    stdin:'3\nvloz 100\nvyber 30\nvyber 500',
    solution:`class Ucet:\n    def __init__(self):\n        self.zustatek = 0\n\n    def vloz(self, castka):\n        self.zustatek += castka\n\n    def vyber(self, castka):\n        if castka > self.zustatek:\n            return False\n        self.zustatek -= castka\n        return True\n\nucet = Ucet()\nn = int(input())\nfor i in range(n):\n    prikaz, castka = input().split()\n    if prikaz == "vloz":\n        ucet.vloz(int(castka))\n    elif not ucet.vyber(int(castka)):\n        print("Nedostatek peněz")\nprint(f"Zůstatek: {ucet.zustatek}")\n`,
    tests:[{in:'3\nvloz 100\nvyber 30\nvyber 500',out:'Nedostatek peněz\nZůstatek: 70'},{in:'1\nvyber 1',out:'Nedostatek peněz\nZůstatek: 0'},{in:'2\nvloz 5\nvyber 5',out:'Zůstatek: 0'}],
    must:['def vloz\\(\\s*self','def vyber\\(\\s*self','return False'],
    hint:'Ve vyber: když castka > self.zustatek, return False. Jinak odečti a return True.'},
  { id:'py10l3', title:'__str__',
    theory:`<p>Když objekt vypíšeš přes <code>print</code>, Python zavolá jeho metodu <code>__str__</code>. Ta vrátí text, jak má objekt vypadat:</p>
<pre>class Bod:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __str__(self):
        return f"({self.x}, {self.y})"</pre>`,
    task:`Napiš třídu <code>Bod</code> s <code>__str__</code> ve tvaru <b>(x, y)</b> a metodou <code>vzdalenost()</code>, která vrátí vzdálenost od počátku (<code>(x*x + y*y) ** 0.5</code>). Načti <code>x y</code>, vypiš bod a pod to vzdálenost na 2 desetinná místa.`,
    starter:`x, y = input().split()\n`,
    stdin:'3 4',
    solution:`class Bod:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):\n        return f"({self.x}, {self.y})"\n\n    def vzdalenost(self):\n        return (self.x * self.x + self.y * self.y) ** 0.5\n\nx, y = input().split()\nb = Bod(int(x), int(y))\nprint(b)\nprint(f"{b.vzdalenost():.2f}")\n`,
    tests:[{in:'3 4',out:'(3, 4)\n5.00'},{in:'1 1',out:'(1, 1)\n1.41'},{in:'0 -2',out:'(0, -2)\n2.00'}],
    must:['def __str__','print\\(\\s*b\\s*\\)|print\\(\\s*\\w+\\s*\\)'],
    hint:'__str__ vrací f"({self.x}, {self.y})". Pak stačí print(b).'},
  { id:'py10l4', title:'Dědičnost',
    theory:`<p>Třída může <b>dědit</b> z jiné. Dostane všechno, co má rodič, a může něco přepsat:</p>
<pre>class Zvire:
    def __init__(self, jmeno):
        self.jmeno = jmeno
    def zvuk(self):
        return "..."
    def predstav(self):
        return f"{self.jmeno} dělá {self.zvuk()}"

class Pes(Zvire):
    def zvuk(self):
        return "Haf"</pre>
<p><code>Pes("Rex").predstav()</code> vrátí <b>Rex dělá Haf</b>, i když <code>predstav</code> je napsané jen v rodiči.</p>`,
    task:`Doplň třídy <code>Pes</code> (Haf) a <code>Kocka</code> (Mňau), obě dědí ze <code>Zvire</code>. Na vstupu je počet zvířat a řádky <code>pes Rex</code> nebo <code>kocka Micka</code>. Pro každé vypiš <code>predstav()</code>.`,
    starter:`class Zvire:\n    def __init__(self, jmeno):\n        self.jmeno = jmeno\n\n    def zvuk(self):\n        return "..."\n\n    def predstav(self):\n        return f"{self.jmeno} dělá {self.zvuk()}"\n\nn = int(input())\n`,
    stdin:'2\npes Rex\nkocka Micka',
    solution:`class Zvire:\n    def __init__(self, jmeno):\n        self.jmeno = jmeno\n\n    def zvuk(self):\n        return "..."\n\n    def predstav(self):\n        return f"{self.jmeno} dělá {self.zvuk()}"\n\nclass Pes(Zvire):\n    def zvuk(self):\n        return "Haf"\n\nclass Kocka(Zvire):\n    def zvuk(self):\n        return "Mňau"\n\nn = int(input())\nfor i in range(n):\n    druh, jmeno = input().split()\n    if druh == "pes":\n        z = Pes(jmeno)\n    else:\n        z = Kocka(jmeno)\n    print(z.predstav())\n`,
    tests:[{in:'2\npes Rex\nkocka Micka',out:'Rex dělá Haf\nMicka dělá Mňau'},{in:'1\nkocka Tom',out:'Tom dělá Mňau'}],
    must:['class Pes\\(\\s*Zvire\\s*\\)','class Kocka\\(\\s*Zvire\\s*\\)'],
    hint:'class Pes(Zvire): a uvnitř jen metoda zvuk, která vrací "Haf".'},
  { id:'py10l5', title:'super()',
    theory:`<p>Když potomek potřebuje vlastní <code>__init__</code>, zavolá nejdřív ten rodičovský přes <code>super()</code>:</p>
<pre>class Osoba:
    def __init__(self, jmeno):
        self.jmeno = jmeno

class Student(Osoba):
    def __init__(self, jmeno, obor):
        super().__init__(jmeno)
        self.obor = obor</pre>`,
    task:`Doplň třídu <code>Student</code>, která dědí z <code>Osoba</code> a přidá <code>obor</code>. Načti jméno a obor a vypiš <b>Tom studuje informatiku</b>.`,
    starter:`class Osoba:\n    def __init__(self, jmeno):\n        self.jmeno = jmeno\n\njmeno = input()\nobor = input()\n`,
    stdin:'Tom\ninformatiku',
    solution:`class Osoba:\n    def __init__(self, jmeno):\n        self.jmeno = jmeno\n\nclass Student(Osoba):\n    def __init__(self, jmeno, obor):\n        super().__init__(jmeno)\n        self.obor = obor\n\njmeno = input()\nobor = input()\ns = Student(jmeno, obor)\nprint(f"{s.jmeno} studuje {s.obor}")\n`,
    tests:[{in:'Tom\ninformatiku',out:'Tom studuje informatiku'},{in:'Eva\nmedicínu',out:'Eva studuje medicínu'}],
    must:['class Student\\(\\s*Osoba\\s*\\)','super\\(\\)\\.__init__'],
    hint:'V __init__ Studenta napiš super().__init__(jmeno) a pak self.obor = obor.'},
  { id:'py10p1', title:'Knihovna', project:true,
    theory:`<p>🏁 <b>Projekt.</b> Dvě třídy, které spolupracují: <code>Kniha</code> (název, autor, jestli je půjčená) a <code>Knihovna</code> (seznam knih a metody).</p>
<p>Příkazy jsou oddělené středníkem, protože názvy knih mají mezery: <code>"pridej;Malý princ;Saint-Exupéry".split(";")</code>.</p>`,
    task:`Na vstupu je počet příkazů a pak příkazy:<ul>
<li><code>pridej;název;autor</code>: přidá knihu (nic nevypíše)</li>
<li><code>pujc;název</code>: <b>Půjčeno: název</b>, nebo <b>Už je půjčená: název</b>, nebo <b>Nemáme: název</b></li>
<li><code>vrat;název</code>: <b>Vráceno: název</b>, nebo <b>Nebyla půjčená: název</b> (i když ji nemáme)</li>
<li><code>seznam</code>: každou knihu v pořadí přidání jako <b>název (autor) - volná</b> nebo <b>- půjčená</b></li></ul>`,
    starter:`class Kniha:\n    pass\n\nclass Knihovna:\n    pass\n\nn = int(input())\n`,
    stdin:'5\npridej;Hobit;Tolkien\npridej;Malý princ;Saint-Exupéry\npujc;Hobit\npujc;Hobit\nseznam',
    solution:`class Kniha:\n    def __init__(self, nazev, autor):\n        self.nazev = nazev\n        self.autor = autor\n        self.pujcena = False\n\n    def __str__(self):\n        stav = "půjčená" if self.pujcena else "volná"\n        return f"{self.nazev} ({self.autor}) - {stav}"\n\nclass Knihovna:\n    def __init__(self):\n        self.knihy = []\n\n    def najdi(self, nazev):\n        for k in self.knihy:\n            if k.nazev == nazev:\n                return k\n        return None\n\n    def pridej(self, nazev, autor):\n        self.knihy.append(Kniha(nazev, autor))\n\n    def pujc(self, nazev):\n        k = self.najdi(nazev)\n        if k is None:\n            print(f"Nemáme: {nazev}")\n        elif k.pujcena:\n            print(f"Už je půjčená: {nazev}")\n        else:\n            k.pujcena = True\n            print(f"Půjčeno: {nazev}")\n\n    def vrat(self, nazev):\n        k = self.najdi(nazev)\n        if k is None or not k.pujcena:\n            print(f"Nebyla půjčená: {nazev}")\n        else:\n            k.pujcena = False\n            print(f"Vráceno: {nazev}")\n\n    def seznam(self):\n        for k in self.knihy:\n            print(k)\n\nknihovna = Knihovna()\nn = int(input())\nfor i in range(n):\n    casti = input().split(";")\n    if casti[0] == "pridej":\n        knihovna.pridej(casti[1], casti[2])\n    elif casti[0] == "pujc":\n        knihovna.pujc(casti[1])\n    elif casti[0] == "vrat":\n        knihovna.vrat(casti[1])\n    elif casti[0] == "seznam":\n        knihovna.seznam()\n`,
    tests:[
      {in:'5\npridej;Hobit;Tolkien\npridej;Malý princ;Saint-Exupéry\npujc;Hobit\npujc;Hobit\nseznam',out:'Půjčeno: Hobit\nUž je půjčená: Hobit\nHobit (Tolkien) - půjčená\nMalý princ (Saint-Exupéry) - volná'},
      {in:'4\npujc;Duna\npridej;Duna;Herbert\nvrat;Duna\npujc;Duna',out:'Nemáme: Duna\nNebyla půjčená: Duna\nPůjčeno: Duna'},
      {in:'5\npridej;R.U.R.;Čapek\npujc;R.U.R.\nvrat;R.U.R.\nvrat;R.U.R.\nseznam',out:'Půjčeno: R.U.R.\nVráceno: R.U.R.\nNebyla půjčená: R.U.R.\nR.U.R. (Čapek) - volná'}],
    must:['class Kniha','class Knihovna','def __init__'],
    hint:'Knihovna si drží seznam objektů Kniha. Pomocná metoda najdi(nazev) vrátí knihu nebo None.'},
  ]
},
{
  id:'py11', title:'Moduly a finále', icon:'🎓', color:'#fab005',
  desc:'import, list comprehension, lambda, enumerate a zip. Na konci velký projekt.',
  lessons:[
  { id:'py11l1', title:'import math',
    theory:`<p>Python má spoustu hotových <b>modulů</b>. Načteš je přes <code>import</code>:</p>
<pre>import math
math.pi          # 3.14159…
math.sqrt(16)    # 4.0
math.ceil(2.1)   # 3</pre>
<p>Modul <code>random</code> umí náhodu: <code>random.randint(1, 6)</code> hodí kostkou. Do testů se náhoda nehodí, proto ji tu jen zmiňujeme.</p>`,
    task:`Načti poloměr kruhu (desetinné číslo) a vypiš obvod a obsah na 2 desetinná místa:<pre>Obvod: 12.57
Obsah: 12.57</pre>`,
    starter:`r = float(input())\n`,
    stdin:'2',
    solution:`import math\n\nr = float(input())\nprint(f"Obvod: {2 * math.pi * r:.2f}")\nprint(f"Obsah: {math.pi * r ** 2:.2f}")\n`,
    tests:[{in:'2',out:'Obvod: 12.57\nObsah: 12.57'},{in:'1',out:'Obvod: 6.28\nObsah: 3.14'},{in:'0.5',out:'Obvod: 3.14\nObsah: 0.79'}],
    must:['import math','math\\.pi'],
    hint:'Obvod je 2 * math.pi * r, obsah math.pi * r ** 2.'},
  { id:'py11l2', title:'from … import',
    theory:`<p>Z modulu můžeš vzít jen jednu věc, pak nemusíš psát jméno modulu:</p>
<pre>from datetime import date
d = date.fromisoformat("2026-12-24")
(d - date.fromisoformat("2026-12-01")).days   # 23</pre>`,
    task:`Načti dvě data ve tvaru <code>RRRR-MM-DD</code> a vypiš, kolik dní je mezi nimi, třeba <b>Zbývá 39 dní</b>.`,
    starter:`a = input()\nb = input()\n`,
    stdin:'2026-11-15\n2026-12-24',
    solution:`from datetime import date\n\na = date.fromisoformat(input())\nb = date.fromisoformat(input())\nprint(f"Zbývá {(b - a).days} dní")\n`,
    tests:[{in:'2026-11-15\n2026-12-24',out:'Zbývá 39 dní'},{in:'2026-01-01\n2027-01-01',out:'Zbývá 365 dní'}],
    must:['from datetime import'],
    hint:'date.fromisoformat převede text na datum. Rozdíl dvou dat má vlastnost .days.'},
  { id:'py11l3', title:'List comprehension',
    theory:`<p>Krátký zápis, jak z jednoho seznamu udělat jiný:</p>
<pre>cisla = [1, 2, 3, 4]
[x * x for x in cisla]              # [1, 4, 9, 16]
[x for x in cisla if x % 2 == 0]    # [2, 4]
[int(x) for x in "1 2".split()]     # [1, 2]</pre>`,
    task:`Načti řádek čísel. Jedním zápisem <code>[... for ... in ...]</code> vytvoř seznam druhých mocnin sudých čísel a vypiš ho mezerou.`,
    starter:`cisla = [int(x) for x in input().split()]\n`,
    stdin:'1 2 3 4 5 6',
    solution:`cisla = [int(x) for x in input().split()]\nmocniny = [x * x for x in cisla if x % 2 == 0]\nprint(*mocniny)\n`,
    tests:[{in:'1 2 3 4 5 6',out:'4 16 36'},{in:'10 3',out:'100'}],
    must:['\\[\\s*x\\s*\\*\\s*x\\s+for .* if '],
    hint:'[x * x for x in cisla if x % 2 == 0]'},
  { id:'py11l4', title:'Řazení podle klíče',
    theory:`<p><code>sorted</code> umí řadit podle vlastního <b>klíče</b>. Klíč je funkce, často krátká <code>lambda</code>:</p>
<pre>hraci = [("Tom", 10), ("Eva", 12)]
sorted(hraci, key=lambda h: h[1])       # podle bodů
sorted(hraci, key=lambda h: -h[1])      # sestupně</pre>
<p>Klíč může být i dvojice: <code>(-h[1], h[0])</code> řadí podle bodů sestupně a při shodě podle jména.</p>`,
    task:`Načti počet hráčů a řádky <code>jméno body</code>. Vypiš žebříček podle bodů sestupně, při shodě podle jména: <b>1. Eva 12</b>.`,
    starter:`n = int(input())\nhraci = []\nfor i in range(n):\n    jmeno, body = input().split()\n    hraci.append((jmeno, int(body)))\n`,
    stdin:'3\nTom 10\nEva 12\nAda 10',
    solution:`n = int(input())\nhraci = []\nfor i in range(n):\n    jmeno, body = input().split()\n    hraci.append((jmeno, int(body)))\nporadi = sorted(hraci, key=lambda h: (-h[1], h[0]))\nfor i in range(len(poradi)):\n    print(f"{i + 1}. {poradi[i][0]} {poradi[i][1]}")\n`,
    tests:[{in:'3\nTom 10\nEva 12\nAda 10',out:'1. Eva 12\n2. Ada 10\n3. Tom 10'},{in:'1\nZoe 5',out:'1. Zoe 5'}],
    must:['lambda'],
    hint:'sorted(hraci, key=lambda h: (-h[1], h[0]))'},
  { id:'py11l5', title:'enumerate a zip',
    theory:`<p><code>enumerate</code> dá ke každému prvku i jeho pořadí. <code>zip</code> spáruje dva seznamy:</p>
<pre>for i, jmeno in enumerate(["Tom", "Eva"], 1):
    print(i, jmeno)          # 1 Tom, 2 Eva

for a, b in zip(["x", "y"], [1, 2]):
    print(a, b)              # x 1, y 2</pre>`,
    task:`Na prvním řádku jsou jména, na druhém body (ve stejném pořadí). Vypiš <b>1. Tom: 10</b> pro každého. Použij <code>enumerate</code> i <code>zip</code>.`,
    starter:`jmena = input().split()\nbody = input().split()\n`,
    stdin:'Tom Eva Ada\n10 12 7',
    solution:`jmena = input().split()\nbody = input().split()\nfor i, (jmeno, b) in enumerate(zip(jmena, body), 1):\n    print(f"{i}. {jmeno}: {b}")\n`,
    tests:[{in:'Tom Eva Ada\n10 12 7',out:'1. Tom: 10\n2. Eva: 12\n3. Ada: 7'},{in:'X\n0',out:'1. X: 0'}],
    must:['enumerate\\(','zip\\('],
    hint:'for i, (jmeno, b) in enumerate(zip(jmena, body), 1):'},
  { id:'py11p1', title:'Finále: Rozbor textu', project:true,
    theory:`<p>🏁 <b>Finále kurzu.</b> Napíšeš malý nástroj na rozbor textu. Použij funkce, slovník, cykly, <code>sorted</code> s klíčem a všechno, co umíš.</p>
<p>Slova ber malými písmeny a bez znaků <code>. , ! ?</code> na krajích: <code>slovo.strip(".,!?").lower()</code>.</p>`,
    task:`Na vstupu je počet řádků a pak řádky textu. Vypiš:<pre>Řádků: 3
Slov: 10
Nejčastější: pes (3)
Nejdelší: kočička</pre>Při shodě v počtu vyhraje slovo dřív v abecedě. Nejdelší je první nejdelší slovo v textu.`,
    starter:`n = int(input())\nradky = [input() for i in range(n)]\n`,
    stdin:'3\nPes štěká.\nKočička a pes!\nPes, myš, sýr a strom.',
    solution:`def slova_z(radky):\n    vysledek = []\n    for r in radky:\n        for s in r.split():\n            s = s.strip(".,!?").lower()\n            if s:\n                vysledek.append(s)\n    return vysledek\n\ndef nejcastejsi(slova):\n    pocty = {}\n    for s in slova:\n        pocty[s] = pocty.get(s, 0) + 1\n    return sorted(pocty.items(), key=lambda p: (-p[1], p[0]))[0]\n\nn = int(input())\nradky = [input() for i in range(n)]\nslova = slova_z(radky)\nprint(f"Řádků: {len(radky)}")\nprint(f"Slov: {len(slova)}")\nslovo, pocet = nejcastejsi(slova)\nprint(f"Nejčastější: {slovo} ({pocet})")\nnejdelsi = slova[0]\nfor s in slova:\n    if len(s) > len(nejdelsi):\n        nejdelsi = s\nprint(f"Nejdelší: {nejdelsi}")\n`,
    tests:[
      {in:'3\nPes štěká.\nKočička a pes!\nPes, myš, sýr a strom.',out:'Řádků: 3\nSlov: 10\nNejčastější: pes (3)\nNejdelší: kočička'},
      {in:'1\nb a b a c',out:'Řádků: 1\nSlov: 5\nNejčastější: a (2)\nNejdelší: b'},
      {in:'2\nAhoj světe!\nahoj Pythone, ahoj.',out:'Řádků: 2\nSlov: 5\nNejčastější: ahoj (3)\nNejdelší: pythone'}],
    must:['def ','get\\(|Counter','sorted\\(|max\\('],
    hint:'Rozděl to na funkce: jedna vytáhne slova, druhá spočítá nejčastější. Nejčastější: sorted(pocty.items(), key=lambda p: (-p[1], p[0]))[0].'},
  ]
}
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
py5: [
  {q:`Co vypíše <code>print(c[-1])</code> pro <code>c = [4, 8, 15]</code>?`, o:[`4`,`15`,`Chybu`], a:1, e:`Index <code>-1</code> je poslední prvek.`},
  {q:`Co udělá <code>c.append(5)</code>?`, o:[`Přidá 5 na konec`,`Přidá 5 na začátek`,`Vrátí nový seznam a c nezmění`], a:0, e:`<code>append</code> mění přímo seznam.`},
  {q:`Co vrátí <code>"1 2 3".split()</code>?`, o:[`[1, 2, 3]`,`['1', '2', '3']`,`'123'`], a:1, e:`<code>split</code> vrací seznam textů. Na čísla je převeď přes <code>int()</code>.`},
  {q:`Co je <code>c[:2]</code> pro <code>c = [9, 7, 5, 3]</code>?`, o:[`[9, 7]`,`[9, 7, 5]`,`[5, 3]`], a:0, e:`Výřez do indexu 2 bez něj: prvky 0 a 1.`},
],
py6: [
  {q:`Co je <code>"Python"[::-1]</code>?`, o:[`Python`,`nohtyP`,`P`], a:1, e:`Krok -1 projde text pozpátku.`},
  {q:`Co vrátí <code>"ahoj".upper()</code>, a změní se původní text?`, o:[`AHOJ, a původní se změní`,`AHOJ, původní zůstane`,`Ahoj`], a:1, e:`Texty se nedají měnit. Metody vrací nový text.`},
  {q:`Co vrátí <code>"-".join(["a", "b", "c"])</code>?`, o:[`a-b-c`,`-a-b-c-`,`['a-b-c']`], a:0, e:`<code>join</code> vloží oddělovač mezi prvky.`},
  {q:`Co vrátí <code>"lo" in "Hello"</code>?`, o:[`True`,`False`,`3`], a:0, e:`<code>in</code> hledá kus textu kdekoliv uvnitř.`},
],
py7: [
  {q:`Co vypíše tenhle kód?<pre>def f(x):
    print(x * 2)

y = f(3)
print(y)</pre>`, o:[`6 a pak 6`,`6 a pak None`,`Jen 6`], a:1, e:`Funkce bez <code>return</code> vrací <code>None</code>.`},
  {q:`Jak zavoláš <code>def mocnina(x, n=2)</code>, aby vrátila x na třetí?`, o:[`mocnina(x)`,`mocnina(x, 3)`,`mocnina(3, x)`], a:1, e:`Výchozí <code>n=2</code> přepíšeš druhým parametrem.`},
  {q:`Co bude v <code>a</code> a <code>b</code>?<pre>def f():
    return 1, 2

a, b = f()</pre>`, o:[`a = 1, b = 2`,`a = (1, 2), b = None`,`Chyba`], a:0, e:`Vrácený tuple se rozbalí do dvou proměnných.`},
  {q:`Co se stane s rekurzivní funkcí bez základního případu?`, o:[`Vrátí 0`,`Skončí chybou RecursionError`,`Nic`], a:1, e:`Volá se pořád dokola, dokud Python nezastaví.`},
],
py8: [
  {q:`Co vrátí <code>d.get("x", 0)</code>, když klíč <code>"x"</code> ve slovníku není?`, o:[`Chybu KeyError`,`0`,`None`], a:1, e:`Druhý parametr <code>get</code> je výchozí hodnota.`},
  {q:`Co vypíše <code>len(set([1, 1, 2, 2, 2]))</code>?`, o:[`5`,`2`,`3`], a:1, e:`Množina si každou hodnotu pamatuje jen jednou.`},
  {q:`Co dělá <code>for k, v in d.items():</code>?`, o:[`Projde jen klíče`,`Projde dvojice klíč a hodnota`,`Projde jen hodnoty`], a:1, e:`<code>items()</code> dává dvojice. Samotné <code>for k in d</code> dá jen klíče.`},
  {q:`Jaký je hlavní rozdíl mezi tuple a seznamem?`, o:[`Tuple se nedá měnit`,`Tuple umí jen čísla`,`Žádný`], a:0, e:`Tuple je pevný, hodí se na souřadnice a dvojice.`},
],
py9: [
  {q:`Co vypíše tenhle kód pro vstup <code>abc</code>?<pre>try:
    x = int(input())
    print("A")
except ValueError:
    print("B")</pre>`, o:[`A`,`B`,`A i B`], a:1, e:`<code>int("abc")</code> selže, takže <code>print("A")</code> se už nespustí.`},
  {q:`Co udělá <code>open("x.txt", "w")</code>, když soubor už existuje?`, o:[`Připíše na konec`,`Přepíše ho`,`Skončí chybou`], a:1, e:`Na připisování je režim <code>"a"</code>.`},
  {q:`Proč psát <code>with open(...) as f:</code>?`, o:[`Soubor se sám zavře`,`Je to rychlejší`,`Jinak nejde číst`], a:0, e:`Po konci bloku <code>with</code> se soubor zavře i při chybě.`},
  {q:`Co udělá <code>raise ValueError("Špatně")</code>?`, o:[`Vypíše Špatně a pokračuje`,`Vyvolá chybu, kterou může chytit except`,`Nic`], a:1, e:`Text chyby pak dostaneš přes <code>except ValueError as e</code>.`},
],
py10: [
  {q:`Kdy se zavolá <code>__init__</code>?`, o:[`Při vytvoření objektu`,`Při každém print`,`Na konci programu`], a:0, e:`Nastaví počáteční data objektu.`},
  {q:`Co je <code>self</code>?`, o:[`Název třídy`,`Ten konkrétní objekt, se kterým metoda pracuje`,`Klíčové slovo pro import`], a:1, e:`Přes <code>self.jmeno</code> metoda sahá na data svého objektu.`},
  {q:`Co zavolá <code>print(objekt)</code>?`, o:[`__init__`,`__str__`,`__print__`], a:1, e:`<code>__str__</code> vrací text, jak má objekt vypadat.`},
  {q:`Co znamená <code>class Pes(Zvire):</code>?`, o:[`Pes dědí ze Zvire`,`Zvire dědí z Pes`,`Pes obsahuje seznam zvířat`], a:0, e:`Pes dostane všechno ze Zvire a může něco přepsat.`},
],
py11: [
  {q:`Co vrátí <code>[x * 2 for x in [1, 2, 3]]</code>?`, o:[`[2, 4, 6]`,`[1, 2, 3, 1, 2, 3]`,`12`], a:0, e:`Pro každé <code>x</code> vezme <code>x * 2</code>.`},
  {q:`Jak seřadíš slova podle délky?`, o:[`sorted(slova, key=len)`,`sorted(slova, len)`,`slova.len()`], a:0, e:`Klíč může být libovolná funkce, i vestavěná <code>len</code>.`},
  {q:`Co dá <code>list(enumerate(["a", "b"], 1))</code>?`, o:[`[(0, 'a'), (1, 'b')]`,`[(1, 'a'), (2, 'b')]`,`['a', 'b']`], a:1, e:`Druhý parametr říká, od kolika se počítá.`},
  {q:`Jaký je rozdíl mezi <code>import math</code> a <code>from math import sqrt</code>?`, o:[`Žádný`,`U prvního píšeš math.sqrt, u druhého jen sqrt`,`Druhý načte celý modul dvakrát`], a:1, e:`<code>from</code> vezme jen jednu věc přímo do programu.`},
],
};
COURSE_PY.forEach(w => {
  const q = REVIEW_PY[w.id];
  if (q) w.lessons.push({id: w.id + 'q', type: 'quiz', title: 'Opakování', questions: q,
    theory: `<p>Pár rychlých otázek z tohoto světa. Vidíš vždy jen jednu.</p><p>Když netrefíš, nic se neděje, zkus jinou možnost. Po správné odpovědi uvidíš krátké vysvětlení.</p>`});
});
if (typeof module !== 'undefined') module.exports = COURSE_PY;
