// Obsah kurzu. Každá lekce: id, title, theory (HTML), task (HTML), starter, solution, tests [{in, out}], must [regex], hint
// type:'quiz' -> questions [{q, o, a, e}] (opakovací kvízy jsou dole v REVIEW)
const H = '#include <iostream>\nusing namespace std;\n\n';
const HS = '#include <iostream>\n#include <string>\nusing namespace std;\n\n';
const HV = '#include <iostream>\n#include <vector>\nusing namespace std;\n\n';
const HSV = '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n';
// gxx:true u světa = lekce potřebují skutečný g++ na serveru (string, vector, třídy…)
const COURSE = [
{
  id:'w1', title:'První kroky', icon:'🚀', color:'#ff6b6b',
  desc:'Tvůj první program, výpis na obrazovku a chyby.',
  lessons:[
  { id:'w1l1', title:'Ahoj, světe!',
    theory:`<p>Každý program v C++ začíná funkcí <code>main()</code>. Počítač ji spustí jako první.</p>
<p>Řádek <code>#include &lt;iostream&gt;</code> přidá knihovnu pro vstup a výstup. <code>using namespace std;</code> znamená, že nemusíš psát <code>std::</code> před každý příkaz.</p>
<p>Na obrazovku píšeš pomocí <code>cout</code> a operátoru <code>&lt;&lt;</code>. Text patří do uvozovek a každý příkaz končí středníkem <code>;</code>.</p>
<pre>cout &lt;&lt; "Nazdar!";</pre>`,
    task:'Vypiš přesně text <b>Ahoj, světe!</b>',
    starter: H+'int main() {\n    // napiš sem svůj kód\n    \n    return 0;\n}\n',
    solution: H+'int main() {\n    cout << "Ahoj, světe!";\n    return 0;\n}\n',
    tests:[{in:'',out:'Ahoj, světe!'}], must:['cout'],
    hint:'Napiš cout << "Ahoj, světe!"; a nezapomeň na středník.'},
  { id:'w1l2', title:'Nové řádky',
    theory:`<p>Když chceš skočit na nový řádek, použij <code>endl</code> nebo znak <code>"\\n"</code>.</p>
<pre>cout &lt;&lt; "Prvni" &lt;&lt; endl;
cout &lt;&lt; "Druhy\\n";</pre>
<p>Operátory <code>&lt;&lt;</code> můžeš řetězit za sebou jako vagonky vlaku.</p>`,
    task:'Vypiš tři řádky:<br><b>Jmenuji se Tom</b><br><b>Učím se C++</b><br><b>Jde mi to!</b>',
    starter: H+'int main() {\n    \n    return 0;\n}\n',
    solution: H+'int main() {\n    cout << "Jmenuji se Tom" << endl;\n    cout << "Učím se C++" << endl;\n    cout << "Jde mi to!" << endl;\n    return 0;\n}\n',
    tests:[{in:'',out:'Jmenuji se Tom\nUčím se C++\nJde mi to!'}],
    hint:'Za každý řádek dej << endl;'},
  { id:'w1l3', title:'Počítání a komentáře',
    theory:`<p>C++ umí počítat přímo v <code>cout</code>. Čísla se do uvozovek nepíšou:</p>
<pre>cout &lt;&lt; 2 + 3;     // vypíše 5
cout &lt;&lt; "2 + 3";   // vypíše text 2 + 3</pre>
<p>Text za <code>//</code> je <b>komentář</b> – počítač ho ignoruje. Víceřádkový komentář je mezi <code>/*</code> a <code>*/</code>.</p>`,
    task:'Vypiš na jeden řádek výsledek <b>12 * 7</b> a na druhý řádek výsledek <b>100 - 58</b>. Čísla nech spočítat počítač.',
    starter: H+'int main() {\n    // spočítej 12 * 7\n    \n    // spočítej 100 - 58\n    \n    return 0;\n}\n',
    solution: H+'int main() {\n    cout << 12 * 7 << endl;\n    cout << 100 - 58 << endl;\n    return 0;\n}\n',
    tests:[{in:'',out:'84\n42'}], must:['\\*','-'],
    hint:'cout << 12 * 7 << endl;'},
  { id:'w1l4', title:'Lovec chyb 🐞',
    theory:`<p>Programátoři většinu času opravují chyby. Nejčastější chyby začátečníků:</p>
<ul><li>chybějící středník <code>;</code></li><li>chybějící uvozovka</li><li><code>&gt;&gt;</code> místo <code>&lt;&lt;</code> u cout</li></ul>
<p>Když program nejde spustit, přečti si chybovou hlášku – často ukazuje číslo řádku.</p>`,
    task:'Program níže má <b>3 chyby</b>. Oprav je, aby vypsal <b>Bug ulovenej!</b>',
    starter: H+'int main() {\n    cout >> "Bug ulovenej!\n    return 0\n}\n',
    solution: H+'int main() {\n    cout << "Bug ulovenej!";\n    return 0;\n}\n',
    tests:[{in:'',out:'Bug ulovenej!'}],
    hint:'Šipky u cout mají směřovat doleva <<, text musí mít uzavírací uvozovku a za příkazy patří středník.'},
  ]
},
{
  id:'w2', title:'Proměnné', icon:'📦', color:'#ffa94d',
  desc:'Krabičky na data: čísla, znaky a vstup od uživatele.',
  lessons:[
  { id:'w2l1', title:'Celá čísla – int',
    theory:`<p><b>Proměnná</b> je pojmenovaná krabička v paměti. V C++ musíš říct, jaký typ dat v ní bude.</p>
<pre>int vek = 30;        // celé číslo
vek = vek + 1;       // teď je 31
cout &lt;&lt; vek;</pre>
<p>Název proměnné nesmí začínat číslem a nesmí obsahovat mezery ani diakritiku.</p>`,
    task:'Vytvoř proměnné <code>a = 15</code> a <code>b = 4</code>. Vypiš na samostatné řádky jejich <b>součet</b>, <b>rozdíl</b> a <b>součin</b>.',
    starter: H+'int main() {\n    \n    return 0;\n}\n',
    solution: H+'int main() {\n    int a = 15;\n    int b = 4;\n    cout << a + b << endl;\n    cout << a - b << endl;\n    cout << a * b << endl;\n    return 0;\n}\n',
    tests:[{in:'',out:'19\n11\n60'}], must:['int\\s+a','int\\s+b'],
    hint:'int a = 15; int b = 4; a pak cout << a + b << endl; atd.'},
  { id:'w2l2', title:'Dělení a zbytek',
    theory:`<p>Pozor! Když dělíš dvě celá čísla, výsledek je <b>celé číslo</b> (desetinná část se usekne):</p>
<pre>cout &lt;&lt; 17 / 5;    // 3
cout &lt;&lt; 17 % 5;    // 2  (zbytek po dělení)
cout &lt;&lt; 17.0 / 5;  // 3.4</pre>
<p>Pro desetinná čísla použij typ <code>double</code>.</p>`,
    task:'Máš <code>int minuty = 135;</code>. Vypiš, kolik je to celých hodin a kolik zbývá minut ve tvaru <b>2 h 15 min</b>.',
    starter: H+'int main() {\n    int minuty = 135;\n    \n    return 0;\n}\n',
    solution: H+'int main() {\n    int minuty = 135;\n    cout << minuty / 60 << " h " << minuty % 60 << " min";\n    return 0;\n}\n',
    tests:[{in:'',out:'2 h 15 min'}], must:['/\\s*60','%\\s*60'],
    hint:'Hodiny jsou minuty / 60, zbytek je minuty % 60.'},
  { id:'w2l3', title:'double, char, bool',
    theory:`<p>Další základní typy:</p>
<pre>double cena = 19.90;   // desetinné číslo
char znamka = 'A';     // jeden znak – jednoduché uvozovky!
bool hotovo = true;    // pravda / nepravda (true/false)</pre>
<p><code>bool</code> se při výpisu ukáže jako <code>1</code> (true) nebo <code>0</code> (false).</p>`,
    task:'Kilo jablek stojí <code>double cena = 32.5;</code>. Spočítej a vypiš cenu za <b>4 kila</b> ve tvaru <b>Cena: 130</b>.',
    starter: H+'int main() {\n    double cena = 32.5;\n    \n    return 0;\n}\n',
    solution: H+'int main() {\n    double cena = 32.5;\n    double celkem = cena * 4;\n    cout << "Cena: " << celkem;\n    return 0;\n}\n',
    tests:[{in:'',out:'Cena: 130'}], must:['double'],
    hint:'cout << "Cena: " << cena * 4;'},
  { id:'w2l4', title:'Vstup – cin',
    theory:`<p><code>cin</code> čte data od uživatele. Šipky míří opačně než u cout:</p>
<pre>int x;
cin &gt;&gt; x;            // načte číslo
cin &gt;&gt; a &gt;&gt; b;       // načte dvě čísla</pre>
<p>Vstup zadáš v políčku <b>Vstup (stdin)</b> pod editorem. Kontrola tvého řešení zkusí i jiná čísla, takže výsledek musí počítat program!</p>`,
    task:'Načti dvě celá čísla a vypiš jejich součet ve tvaru <b>Soucet je X</b>.',
    starter: H+'int main() {\n    int a, b;\n    \n    return 0;\n}\n',
    stdin:'3 4',
    solution: H+'int main() {\n    int a, b;\n    cin >> a >> b;\n    cout << "Soucet je " << a + b;\n    return 0;\n}\n',
    tests:[{in:'3 4',out:'Soucet je 7'},{in:'100 -1',out:'Soucet je 99'},{in:'0 0',out:'Soucet je 0'}], must:['cin'],
    hint:'cin >> a >> b; a pak cout << "Soucet je " << a + b;'},
  { id:'w2l5', title:'Konstanty',
    theory:`<p>Hodnotu, která se nikdy nemá změnit, označ slovem <code>const</code>:</p>
<pre>const double PI = 3.14159;
PI = 3;   // CHYBA – konstantu nejde změnit</pre>
<p>Konstanty se často píšou VELKÝMI písmeny.</p>`,
    task:'Vytvoř <code>const double PI = 3.14;</code>, načti poloměr kruhu <code>r</code> (celé číslo) a vypiš jeho obsah (<code>PI * r * r</code>).',
    starter: H+'int main() {\n    \n    return 0;\n}\n',
    stdin:'10',
    solution: H+'int main() {\n    const double PI = 3.14;\n    int r;\n    cin >> r;\n    cout << PI * r * r;\n    return 0;\n}\n',
    tests:[{in:'10',out:'314'},{in:'2',out:'12.56'},{in:'1',out:'3.14'}], must:['const'],
    hint:'const double PI = 3.14; int r; cin >> r; cout << PI * r * r;'},
  ]
},
{
  id:'w3', title:'Rozhodování', icon:'🔀', color:'#ffd43b',
  desc:'Program si vybírá cestu: if, else a switch.',
  lessons:[
  { id:'w3l1', title:'if a else',
    theory:`<p>Podmínka <code>if</code> spustí kód jen tehdy, když platí:</p>
<pre>if (teplota &gt; 25) {
    cout &lt;&lt; "Horko!";
} else {
    cout &lt;&lt; "Pohoda.";
}</pre>
<p>Porovnání: <code>==</code> (rovná se), <code>!=</code> (nerovná se), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Pozor: <code>=</code> přiřazuje, <code>==</code> porovnává!</p>`,
    task:'Načti celé číslo. Je-li sudé, vypiš <b>sude</b>, jinak <b>liche</b>.',
    starter: H+'int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n',
    stdin:'7',
    solution: H+'int main() {\n    int n;\n    cin >> n;\n    if (n % 2 == 0) {\n        cout << "sude";\n    } else {\n        cout << "liche";\n    }\n    return 0;\n}\n',
    tests:[{in:'7',out:'liche'},{in:'10',out:'sude'},{in:'0',out:'sude'},{in:'-3',out:'liche'}], must:['if'],
    hint:'Sudé číslo má zbytek po dělení dvěma nula: n % 2 == 0'},
  { id:'w3l2', title:'else if – víc možností',
    theory:`<p>Když máš víc než dvě cesty, řetěz podmínky přes <code>else if</code>. Kontrolují se shora dolů a provede se první, která platí.</p>
<pre>if (body &gt;= 90) cout &lt;&lt; "A";
else if (body &gt;= 75) cout &lt;&lt; "B";
else cout &lt;&lt; "C";</pre>`,
    task:'Načti počet bodů (0–100) a vypiš známku: <b>1</b> pro 90+, <b>2</b> pro 75–89, <b>3</b> pro 50–74, <b>4</b> pro 30–49, jinak <b>5</b>.',
    starter: H+'int main() {\n    int body;\n    cin >> body;\n    \n    return 0;\n}\n',
    stdin:'82',
    solution: H+'int main() {\n    int body;\n    cin >> body;\n    if (body >= 90) cout << 1;\n    else if (body >= 75) cout << 2;\n    else if (body >= 50) cout << 3;\n    else if (body >= 30) cout << 4;\n    else cout << 5;\n    return 0;\n}\n',
    tests:[{in:'82',out:'2'},{in:'90',out:'1'},{in:'100',out:'1'},{in:'74',out:'3'},{in:'30',out:'4'},{in:'29',out:'5'},{in:'50',out:'3'}], must:['else\\s+if'],
    hint:'Začni od nejvyšší hranice: if (body >= 90) ... else if (body >= 75) ...'},
  { id:'w3l3', title:'A zároveň, nebo',
    theory:`<p>Podmínky můžeš spojovat logickými operátory:</p>
<ul><li><code>&amp;&amp;</code> – a zároveň (obě musí platit)</li><li><code>||</code> – nebo (stačí jedna)</li><li><code>!</code> – negace (opak)</li></ul>
<pre>if (vek &gt;= 18 &amp;&amp; maRidicak) cout &lt;&lt; "Muze ridit";</pre>`,
    task:'Načti rok. Vypiš <b>prestupny</b>, pokud je dělitelný 4 a zároveň není dělitelný 100, <i>nebo</i> je dělitelný 400. Jinak vypiš <b>neprestupny</b>.',
    starter: H+'int main() {\n    int rok;\n    cin >> rok;\n    \n    return 0;\n}\n',
    stdin:'2024',
    solution: H+'int main() {\n    int rok;\n    cin >> rok;\n    if ((rok % 4 == 0 && rok % 100 != 0) || rok % 400 == 0) cout << "prestupny";\n    else cout << "neprestupny";\n    return 0;\n}\n',
    tests:[{in:'2024',out:'prestupny'},{in:'1900',out:'neprestupny'},{in:'2000',out:'prestupny'},{in:'2026',out:'neprestupny'}], must:['&&','\\|\\|'],
    hint:'(rok % 4 == 0 && rok % 100 != 0) || rok % 400 == 0'},
  { id:'w3l4', title:'switch',
    theory:`<p><code>switch</code> se hodí, když porovnáváš jednu proměnnou s mnoha konkrétními hodnotami:</p>
<pre>switch (volba) {
    case 1: cout &lt;&lt; "Start"; break;
    case 2: cout &lt;&lt; "Stop"; break;
    default: cout &lt;&lt; "Nevim";
}</pre>
<p>Nezapomeň na <code>break</code> – jinak program „propadne“ do dalšího case.</p>`,
    task:'Načti číslo dne 1–7 a vypiš zkratku: <b>Po Ut St Ct Pa So Ne</b>. Pro jiné číslo vypiš <b>chyba</b>.',
    starter: H+'int main() {\n    int d;\n    cin >> d;\n    \n    return 0;\n}\n',
    stdin:'3',
    solution: H+'int main() {\n    int d;\n    cin >> d;\n    switch (d) {\n        case 1: cout << "Po"; break;\n        case 2: cout << "Ut"; break;\n        case 3: cout << "St"; break;\n        case 4: cout << "Ct"; break;\n        case 5: cout << "Pa"; break;\n        case 6: cout << "So"; break;\n        case 7: cout << "Ne"; break;\n        default: cout << "chyba";\n    }\n    return 0;\n}\n',
    tests:[{in:'3',out:'St'},{in:'1',out:'Po'},{in:'7',out:'Ne'},{in:'9',out:'chyba'},{in:'5',out:'Pa'}], must:['switch','case'],
    hint:'case 1: cout << "Po"; break; … a na konci default: cout << "chyba";'},
  ]
},
{
  id:'w4', title:'Cykly', icon:'🔁', color:'#69db7c',
  desc:'Opakuj kód tolikrát, kolikrát potřebuješ.',
  lessons:[
  { id:'w4l1', title:'Cyklus for',
    theory:`<p><code>for</code> opakuje kód předem daný počet krát. Má tři části: start; podmínka; krok.</p>
<pre>for (int i = 1; i &lt;= 5; i++) {
    cout &lt;&lt; i &lt;&lt; " ";
}
// 1 2 3 4 5</pre>
<p><code>i++</code> znamená „zvětši i o 1“.</p>`,
    task:'Načti <code>n</code> a vypiš čísla od 1 do n, každé na samostatný řádek.',
    starter: H+'int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n',
    stdin:'5',
    solution: H+'int main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        cout << i << endl;\n    }\n    return 0;\n}\n',
    tests:[{in:'5',out:'1\n2\n3\n4\n5'},{in:'1',out:'1'},{in:'8',out:'1\n2\n3\n4\n5\n6\n7\n8'}], must:['for'],
    hint:'for (int i = 1; i <= n; i++) cout << i << endl;'},
  { id:'w4l2', title:'Sčítání v cyklu',
    theory:`<p>Častý vzor: proměnná, do které v cyklu přičítáš.</p>
<pre>int soucet = 0;
for (int i = 1; i &lt;= 10; i++) {
    soucet += i;    // to samé jako soucet = soucet + i
}</pre>
<p>Existují i <code>-=</code>, <code>*=</code>, <code>/=</code>.</p>`,
    task:'Načti <code>n</code> a vypiš <b>faktoriál</b> n (1 · 2 · 3 · … · n). Faktoriál 0 je 1.',
    starter: H+'int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n',
    stdin:'5',
    solution: H+'int main() {\n    int n;\n    cin >> n;\n    int f = 1;\n    for (int i = 2; i <= n; i++) f *= i;\n    cout << f;\n    return 0;\n}\n',
    tests:[{in:'5',out:'120'},{in:'0',out:'1'},{in:'1',out:'1'},{in:'10',out:'3628800'}], must:['for|while'],
    hint:'Začni s int f = 1; a v cyklu dělej f *= i;'},
  { id:'w4l3', title:'Cyklus while',
    theory:`<p><code>while</code> opakuje, dokud platí podmínka. Hodí se, když předem nevíš, kolikrát.</p>
<pre>int x = 100;
while (x &gt; 1) {
    x = x / 2;
}</pre>
<p>Pozor na <b>nekonečný cyklus</b> – podmínka se musí jednou stát nepravdivou. (Tady tě zachrání časový limit 3 s.)</p>`,
    task:'Načti kladné celé číslo a vypiš jeho <b>ciferný součet</b> (např. 1234 → 10).',
    starter: H+'int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n',
    stdin:'1234',
    solution: H+'int main() {\n    int n;\n    cin >> n;\n    int s = 0;\n    while (n > 0) {\n        s += n % 10;\n        n /= 10;\n    }\n    cout << s;\n    return 0;\n}\n',
    tests:[{in:'1234',out:'10'},{in:'9',out:'9'},{in:'99999',out:'45'},{in:'1000',out:'1'}], must:['while'],
    hint:'Poslední cifra je n % 10. Pak ji „usekni“ pomocí n /= 10.'},
  { id:'w4l4', title:'break a continue',
    theory:`<p><code>break</code> okamžitě ukončí cyklus. <code>continue</code> přeskočí zbytek aktuálního kola a jde na další.</p>
<pre>for (int i = 1; i &lt;= 10; i++) {
    if (i % 2 == 0) continue;  // sudá přeskoč
    if (i &gt; 7) break;          // konec
    cout &lt;&lt; i;                 // 1357
}</pre>`,
    task:'<b>FizzBuzz!</b> Načti n. Pro čísla 1 až n vypiš na řádky: <b>FizzBuzz</b> pro násobky 15, <b>Fizz</b> pro násobky 3, <b>Buzz</b> pro násobky 5, jinak číslo.',
    starter: H+'int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n',
    stdin:'15',
    solution: H+'int main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        if (i % 15 == 0) cout << "FizzBuzz" << endl;\n        else if (i % 3 == 0) cout << "Fizz" << endl;\n        else if (i % 5 == 0) cout << "Buzz" << endl;\n        else cout << i << endl;\n    }\n    return 0;\n}\n',
    tests:[{in:'15',out:'1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz'},{in:'5',out:'1\n2\nFizz\n4\nBuzz'}],
    hint:'Kontroluj nejdřív násobky 15, teprve pak 3 a 5.'},
  { id:'w4l5', title:'Vnořené cykly',
    theory:`<p>Cyklus může být uvnitř cyklu. Vnější cyklus třeba řídí řádky, vnitřní sloupce:</p>
<pre>for (int r = 0; r &lt; 2; r++) {
    for (int s = 0; s &lt; 3; s++) cout &lt;&lt; "#";
    cout &lt;&lt; endl;
}
// ###
// ###</pre>`,
    task:'Načti n a nakresli trojúhelník z hvězdiček. Pro n = 4:<pre>*\n**\n***\n****</pre>',
    starter: H+'int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n',
    stdin:'4',
    solution: H+'int main() {\n    int n;\n    cin >> n;\n    for (int r = 1; r <= n; r++) {\n        for (int s = 0; s < r; s++) cout << "*";\n        cout << endl;\n    }\n    return 0;\n}\n',
    tests:[{in:'4',out:'*\n**\n***\n****'},{in:'1',out:'*'},{in:'6',out:'*\n**\n***\n****\n*****\n******'}], must:['for[\\s\\S]*for'],
    hint:'V řádku r vypiš r hvězdiček: vnitřní cyklus jde od 0 do r.'},
  { id:'w4p1', title:'🏁 Projekt: Hádání čísla', project:true,
    theory:`<p>Teď spojíš všechno, co umíš: <b>proměnné</b>, <b>cin</b>, <b>if</b> a <b>cyklus</b>.</p>
<p>Počítač si „myslí“ číslo <b>37</b>. Hráč hádá a program mu po každém tipu poradí.</p>
<p>Hodí se cyklus, který běží, dokud hráč netrefí:</p>
<pre>int tip = 0;
while (tip != 37) {
    cin &gt;&gt; tip;
    // porovnej a poraď
}</pre>`,
    task:`Načítej tipy, dokud hráč neuhodne 37. Po každém tipu vypiš na samostatný řádek:
<ul><li><b>Víc</b>, když je tip menší než 37</li><li><b>Míň</b>, když je větší</li><li><b>Trefa! Pokusů: N</b>, když uhodne (N = počet tipů)</li></ul>Pro vstup <code>50 20 37</code> je výstup:<pre>Míň\nVíc\nTrefa! Pokusů: 3</pre>`,
    starter: H+'int main() {\n    int tajne = 37;\n    int tip = 0;\n    int pokusy = 0;\n    \n    return 0;\n}\n',
    stdin:'50 20 37',
    solution: H+'int main() {\n    int tajne = 37;\n    int tip = 0;\n    int pokusy = 0;\n    while (tip != tajne) {\n        cin >> tip;\n        pokusy++;\n        if (tip < tajne) cout << "Víc" << endl;\n        else if (tip > tajne) cout << "Míň" << endl;\n        else cout << "Trefa! Pokusů: " << pokusy << endl;\n    }\n    return 0;\n}\n',
    tests:[{in:'50 20 37',out:'Míň\nVíc\nTrefa! Pokusů: 3'},{in:'37',out:'Trefa! Pokusů: 1'},{in:'1 99 30 40 36 38 37',out:'Víc\nMíň\nVíc\nMíň\nVíc\nMíň\nTrefa! Pokusů: 7'}],
    must:['while|for'],
    hint:'V cyklu: načti tip, přičti pokus, pak if / else if / else. Cyklus skončí sám, až bude tip == 37.'},
  ]
},
{
  id:'w5', title:'Funkce', icon:'🧩', color:'#4dabf7',
  desc:'Rozděl program na znovupoužitelné kousky.',
  lessons:[
  { id:'w5l1', title:'Tvoje první funkce',
    theory:`<p>Funkce je pojmenovaný kus kódu, který můžeš zavolat kolikrát chceš. Musí být definovaná <b>nad</b> místem, kde ji voláš.</p>
<pre>void pozdrav() {
    cout &lt;&lt; "Ahoj!" &lt;&lt; endl;
}

int main() {
    pozdrav();
    pozdrav();
}</pre>
<p><code>void</code> znamená, že funkce nic nevrací.</p>`,
    task:'Napiš funkci <code>void cara()</code>, která vypíše <b>----------</b> (10 pomlček) a nový řádek. V main ji zavolej, pak vypiš <b>MENU</b> a zavolej ji znovu.',
    starter: H+'// sem napiš funkci cara\n\nint main() {\n    \n    return 0;\n}\n',
    solution: H+'void cara() {\n    cout << "----------" << endl;\n}\n\nint main() {\n    cara();\n    cout << "MENU" << endl;\n    cara();\n    return 0;\n}\n',
    tests:[{in:'',out:'----------\nMENU\n----------'}], must:['void\\s+cara\\s*\\(','cara\\s*\\(\\s*\\)\\s*;[\\s\\S]*cara\\s*\\(\\s*\\)\\s*;'],
    hint:'void cara() { cout << "----------" << endl; }'},
  { id:'w5l2', title:'Parametry a return',
    theory:`<p>Funkce může dostat <b>parametry</b> a <b>vrátit</b> výsledek přes <code>return</code>:</p>
<pre>int na2(int x) {
    return x * x;
}

cout &lt;&lt; na2(7);   // 49</pre>
<p>Typ před názvem (<code>int</code>) říká, co funkce vrací.</p>`,
    task:'Napiš funkci <code>int vetsi(int a, int b)</code>, která vrátí větší z čísel. V main načti dvě čísla a vypiš výsledek funkce.',
    starter: H+'\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    \n    return 0;\n}\n',
    stdin:'4 9',
    solution: H+'int vetsi(int a, int b) {\n    if (a > b) return a;\n    return b;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << vetsi(a, b);\n    return 0;\n}\n',
    tests:[{in:'4 9',out:'9'},{in:'10 2',out:'10'},{in:'-5 -8',out:'-5'},{in:'3 3',out:'3'}], must:['int\\s+vetsi\\s*\\(','return'],
    hint:'Uvnitř: if (a > b) return a; return b;'},
  { id:'w5l3', title:'Funkce vracející bool',
    theory:`<p>Funkce typu <code>bool</code> odpovídá na otázku ano/ne. Díky ní je kód čitelný:</p>
<pre>bool jeSude(int n) {
    return n % 2 == 0;
}
if (jeSude(4)) cout &lt;&lt; "ano";</pre>`,
    task:'Napiš <code>bool jePrvocislo(int n)</code>. Pak načti n a vypiš všechna prvočísla od 2 do n oddělená mezerou.',
    starter: H+'\n\nint main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n',
    stdin:'20',
    solution: H+'bool jePrvocislo(int n) {\n    if (n < 2) return false;\n    for (int d = 2; d * d <= n; d++) {\n        if (n % d == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 2; i <= n; i++) {\n        if (jePrvocislo(i)) cout << i << " ";\n    }\n    return 0;\n}\n',
    tests:[{in:'20',out:'2 3 5 7 11 13 17 19'},{in:'2',out:'2'},{in:'30',out:'2 3 5 7 11 13 17 19 23 29'}], must:['bool\\s+jePrvocislo'],
    hint:'Prvočíslo nemá žádného dělitele od 2 do odmocniny z n. Zkoušej d od 2, dokud d * d <= n.'},
  { id:'w5l4', title:'Rekurze',
    theory:`<p><b>Rekurze</b> = funkce, která volá sama sebe. Potřebuje <b>ukončovací podmínku</b>, jinak by se volala donekonečna.</p>
<pre>int odpocet(int n) {
    if (n == 0) return 0;  // konec
    cout &lt;&lt; n &lt;&lt; " ";
    return odpocet(n - 1);
}</pre>`,
    task:'Napiš rekurzivní funkci <code>int fib(int n)</code> pro Fibonacciho čísla (fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2)). Načti n a vypiš fib(n).',
    starter: H+'\n\nint main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n',
    stdin:'10',
    solution: H+'int fib(int n) {\n    if (n < 2) return n;\n    return fib(n - 1) + fib(n - 2);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << fib(n);\n    return 0;\n}\n',
    tests:[{in:'10',out:'55'},{in:'0',out:'0'},{in:'1',out:'1'},{in:'15',out:'610'}], must:['fib\\s*\\([^)]*\\)\\s*\\+\\s*fib'],
    hint:'if (n < 2) return n; return fib(n-1) + fib(n-2);'},
  ]
},
{
  id:'w6', title:'Pole', icon:'🗃️', color:'#9775fa',
  desc:'Spousta hodnot pod jedním jménem.',
  lessons:[
  { id:'w6l1', title:'Základy polí',
    theory:`<p><b>Pole</b> je řada proměnných stejného typu. Prvky se číslují od <b>nuly</b>!</p>
<pre>int cisla[5] = {3, 8, 1, 9, 4};
cout &lt;&lt; cisla[0];   // 3
cout &lt;&lt; cisla[4];   // 4 (poslední)
cisla[2] = 7;</pre>
<p>Pole se nejčastěji prochází cyklem <code>for</code>.</p>`,
    task:'Načti 5 celých čísel do pole a vypiš je v <b>opačném pořadí</b> oddělená mezerou.',
    starter: H+'int main() {\n    int p[5];\n    \n    return 0;\n}\n',
    stdin:'1 2 3 4 5',
    solution: H+'int main() {\n    int p[5];\n    for (int i = 0; i < 5; i++) cin >> p[i];\n    for (int i = 4; i >= 0; i--) cout << p[i] << " ";\n    return 0;\n}\n',
    tests:[{in:'1 2 3 4 5',out:'5 4 3 2 1'},{in:'9 0 7 -1 3',out:'3 -1 7 0 9'}], must:['\\[\\s*i\\s*\\]'],
    hint:'První cyklus načítá cin >> p[i], druhý jde od i = 4 dolů: i--.'},
  { id:'w6l2', title:'Maximum a průměr',
    theory:`<p>Hledání největšího prvku: začni s prvním prvkem a porovnávej s ostatními.</p>
<pre>int max = p[0];
for (int i = 1; i &lt; n; i++)
    if (p[i] &gt; max) max = p[i];</pre>`,
    task:'Na vstupu je nejdřív počet <code>n</code> (max 100), pak n čísel. Vypiš na první řádek <b>maximum</b>, na druhý <b>minimum</b>.',
    starter: H+'int main() {\n    int n;\n    int p[100];\n    cin >> n;\n    \n    return 0;\n}\n',
    stdin:'6\n4 9 -2 7 0 3',
    solution: H+'int main() {\n    int n;\n    int p[100];\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> p[i];\n    int mx = p[0], mn = p[0];\n    for (int i = 1; i < n; i++) {\n        if (p[i] > mx) mx = p[i];\n        if (p[i] < mn) mn = p[i];\n    }\n    cout << mx << endl << mn << endl;\n    return 0;\n}\n',
    tests:[{in:'6\n4 9 -2 7 0 3',out:'9\n-2'},{in:'1\n5',out:'5\n5'},{in:'4\n-1 -9 -3 -4',out:'-1\n-9'}],
    hint:'Načti všechna čísla, pak začni s mx = p[0] a mn = p[0].'},
  { id:'w6l3', title:'Texty jako pole znaků',
    theory:`<p>Klasický text v C je pole znaků <code>char</code>, které končí neviditelným znakem <code>'\\0'</code>.</p>
<pre>char jmeno[20];
cin &gt;&gt; jmeno;          // načte jedno slovo
cout &lt;&lt; jmeno[0];      // první písmeno</pre>
<p>Délku textu zjistíš tak, že počítáš znaky až do <code>'\\0'</code>. (V moderním C++ se používá <code>std::string</code> – ten přijde v bonusovém světě.)</p>`,
    task:'Načti jedno slovo (max 50 znaků) a vypiš ho <b>pozpátku</b>.',
    starter: H+'int main() {\n    char s[51];\n    cin >> s;\n    \n    return 0;\n}\n',
    stdin:'programovani',
    solution: H+'int main() {\n    char s[51];\n    cin >> s;\n    int delka = 0;\n    while (s[delka] != \'\\0\') delka++;\n    for (int i = delka - 1; i >= 0; i--) cout << s[i];\n    return 0;\n}\n',
    tests:[{in:'programovani',out:'inavomargorp'},{in:'a',out:'a'},{in:'kajak',out:'kajak'},{in:'Tom',out:'moT'}],
    hint:'Nejdřív spočítej délku: while (s[delka] != \'\\0\') delka++; pak vypisuj od konce.'},
  { id:'w6l4', title:'Dvourozměrné pole',
    theory:`<p>Pole může mít řádky a sloupce – jako tabulka nebo šachovnice:</p>
<pre>int m[2][3] = {{1, 2, 3},
               {4, 5, 6}};
cout &lt;&lt; m[1][2];   // 6 (řádek 1, sloupec 2)</pre>`,
    task:'Vypiš <b>malou násobilku</b> 5×5: řádek r obsahuje r·1 až r·5 oddělené mezerou. Výsledky nejdřív ulož do pole <code>int t[5][5]</code>, pak ho vypiš.',
    starter: H+'int main() {\n    int t[5][5];\n    \n    return 0;\n}\n',
    solution: H+'int main() {\n    int t[5][5];\n    for (int r = 0; r < 5; r++)\n        for (int s = 0; s < 5; s++)\n            t[r][s] = (r + 1) * (s + 1);\n    for (int r = 0; r < 5; r++) {\n        for (int s = 0; s < 5; s++) cout << t[r][s] << " ";\n        cout << endl;\n    }\n    return 0;\n}\n',
    tests:[{in:'',out:'1 2 3 4 5\n2 4 6 8 10\n3 6 9 12 15\n4 8 12 16 20\n5 10 15 20 25'}], must:['t\\s*\\[\\s*\\w+\\s*\\]\\s*\\[\\s*\\w+\\s*\\]\\s*='],
    hint:'Indexy jdou od 0, takže hodnota je (r + 1) * (s + 1).'},
  ]
},
{
  id:'w7', title:'Ukazatele', icon:'🎯', color:'#f783ac',
  desc:'Srdce C++: adresy v paměti.',
  lessons:[
  { id:'w7l1', title:'Adresa a ukazatel',
    theory:`<p>Každá proměnná leží v paměti na nějaké <b>adrese</b>. Získáš ji operátorem <code>&amp;</code>.</p>
<p><b>Ukazatel</b> je proměnná, která adresu uchovává. Přes <code>*</code> se dostaneš k hodnotě, na kterou ukazuje:</p>
<pre>int x = 5;
int* p = &amp;x;   // p ukazuje na x
*p = 10;       // změní x!
cout &lt;&lt; x;     // 10</pre>`,
    task:'Máš <code>int skore = 50;</code>. Vytvoř ukazatel <code>p</code> na skore, <b>přes ukazatel</b> přičti 25 a pak vypiš <code>skore</code>.',
    starter: H+'int main() {\n    int skore = 50;\n    \n    cout << skore;\n    return 0;\n}\n',
    solution: H+'int main() {\n    int skore = 50;\n    int* p = &skore;\n    *p = *p + 25;\n    cout << skore;\n    return 0;\n}\n',
    tests:[{in:'',out:'75'}], must:['int\\s*\\*\\s*p\\s*=\\s*&\\s*skore','\\*\\s*p\\s*(\\+=|=)'],
    hint:'int* p = &skore; *p += 25;'},
  { id:'w7l2', title:'Prohození přes ukazatele',
    theory:`<p>Parametry funkce se běžně <b>kopírují</b> – funkce tak nemůže změnit původní proměnnou. Když ale pošleš <b>adresu</b>, může:</p>
<pre>void nuluj(int* a) {
    *a = 0;
}
int x = 9;
nuluj(&amp;x);   // x je teď 0</pre>`,
    task:'Napiš <code>void prohod(int* a, int* b)</code>, která prohodí hodnoty dvou proměnných. Načti dvě čísla, zavolej <code>prohod(&amp;x, &amp;y)</code> a vypiš <b>x y</b>.',
    starter: H+'\n\nint main() {\n    int x, y;\n    cin >> x >> y;\n    \n    cout << x << " " << y;\n    return 0;\n}\n',
    stdin:'3 8',
    solution: H+'void prohod(int* a, int* b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\n\nint main() {\n    int x, y;\n    cin >> x >> y;\n    prohod(&x, &y);\n    cout << x << " " << y;\n    return 0;\n}\n',
    tests:[{in:'3 8',out:'8 3'},{in:'-1 0',out:'0 -1'},{in:'5 5',out:'5 5'}], must:['void\\s+prohod\\s*\\(\\s*int\\s*\\*','prohod\\s*\\(\\s*&'],
    hint:'Potřebuješ pomocnou proměnnou: int t = *a; *a = *b; *b = t;'},
  { id:'w7l3', title:'Ukazatele a pole',
    theory:`<p>Název pole se chová jako ukazatel na jeho první prvek. Přičtením čísla se posuneš dál:</p>
<pre>int p[3] = {10, 20, 30};
int* u = p;
cout &lt;&lt; *u;        // 10
cout &lt;&lt; *(u + 2);  // 30
u++;               // teď ukazuje na 20</pre>`,
    task:'Na vstupu je 5 čísel. Ulož je do pole a spočítej jejich <b>součet</b> – ale v cyklu přistupuj k prvkům jen přes ukazatel (<code>*u</code> a <code>u++</code>), ne přes <code>p[i]</code>.',
    starter: H+'int main() {\n    int p[5];\n    for (int i = 0; i < 5; i++) cin >> p[i];\n    int* u = p;\n    int soucet = 0;\n    \n    cout << soucet;\n    return 0;\n}\n',
    stdin:'1 2 3 4 5',
    solution: H+'int main() {\n    int p[5];\n    for (int i = 0; i < 5; i++) cin >> p[i];\n    int* u = p;\n    int soucet = 0;\n    for (int k = 0; k < 5; k++) {\n        soucet += *u;\n        u++;\n    }\n    cout << soucet;\n    return 0;\n}\n',
    tests:[{in:'1 2 3 4 5',out:'15'},{in:'10 -10 7 0 3',out:'10'}], must:['\\*\\s*u','u\\s*\\+\\+|\\+\\+\\s*u|u\\s*\\+='],
    hint:'V cyklu: soucet += *u; u++;'},
  ]
},
{
  id:'w8', title:'Texty – string', icon:'🔤', color:'#e599f7', gxx:true,
  desc:'Práce s textem: spojování, délka, hledání a celé řádky.',
  lessons:[
  { id:'w8l1', title:'Proměnná string',
    theory:`<p>Pro text máme typ <code>string</code>. Potřebuje <code>#include &lt;string&gt;</code>.</p>
<pre>string jmeno = "Tom";
cout &lt;&lt; "Ahoj " &lt;&lt; jmeno;</pre>
<p>Texty jde <b>spojovat</b> pomocí <code>+</code>:</p>
<pre>string cele = jmeno + "!";   // "Tom!"</pre>`,
    task:'Načti jedno slovo (jméno) a vypiš <b>Ahoj, JMÉNO!</b><br>Pro vstup <code>Quentin</code>: <code>Ahoj, Quentin!</code>',
    starter: HS+'int main() {\n    string jmeno;\n    cin >> jmeno;\n    \n    return 0;\n}\n',
    stdin:'Quentin',
    solution: HS+'int main() {\n    string jmeno;\n    cin >> jmeno;\n    cout << "Ahoj, " + jmeno + "!";\n    return 0;\n}\n',
    tests:[{in:'Quentin',out:'Ahoj, Quentin!'},{in:'Tom',out:'Ahoj, Tom!'}], must:['string'],
    hint:'cout << "Ahoj, " << jmeno << "!"; nebo spoj texty přes +.'},
  { id:'w8l2', title:'Celý řádek – getline',
    theory:`<p><code>cin &gt;&gt;</code> čte jen <b>jedno slovo</b>. Skončí na první mezeře.</p>
<p>Na celý řádek i s mezerami použij <code>getline</code>:</p>
<pre>string veta;
getline(cin, veta);</pre>`,
    task:'Načti celý řádek a vypiš ho dvakrát, každý na nový řádek.<br>Pro vstup <code>Ahoj světe</code>:<pre>Ahoj světe\nAhoj světe</pre>',
    starter: HS+'int main() {\n    string veta;\n    \n    return 0;\n}\n',
    stdin:'Ahoj světe',
    solution: HS+'int main() {\n    string veta;\n    getline(cin, veta);\n    cout << veta << endl << veta << endl;\n    return 0;\n}\n',
    tests:[{in:'Ahoj světe',out:'Ahoj světe\nAhoj světe'},{in:'C++ je fajn a rychlé',out:'C++ je fajn a rychlé\nC++ je fajn a rychlé'}], must:['getline'],
    hint:'getline(cin, veta); a pak dvakrát cout.'},
  { id:'w8l3', title:'Délka a písmena',
    theory:`<p><code>s.length()</code> vrátí počet znaků.</p>
<p>Jednotlivé znaky čteš jako u pole: <code>s[0]</code> je první znak.</p>
<pre>string s = "kocka";
for (int i = 0; i &lt; s.length(); i++) {
    cout &lt;&lt; s[i] &lt;&lt; " ";
}
// k o c k a</pre>
<p>Ještě jednodušší je cyklus přes všechny znaky: <code>for (char c : s)</code>.</p>`,
    task:'Načti slovo (bez diakritiky) a vypiš, kolik obsahuje písmen <b>a</b>.<br>Pro <code>banana</code> je výstup <code>3</code>.',
    starter: HS+'int main() {\n    string s;\n    cin >> s;\n    \n    return 0;\n}\n',
    stdin:'banana',
    solution: HS+'int main() {\n    string s;\n    cin >> s;\n    int pocet = 0;\n    for (char c : s) {\n        if (c == \'a\') pocet++;\n    }\n    cout << pocet;\n    return 0;\n}\n',
    tests:[{in:'banana',out:'3'},{in:'kocka',out:'1'},{in:'xyz',out:'0'}], must:['for'],
    hint:'Projdi znaky cyklem a pro každý if (c == \'a\') zvyš počítadlo. Znak se píše v apostrofech.'},
  { id:'w8l4', title:'Hledání – find a substr',
    theory:`<p><code>s.find("x")</code> vrátí pozici, kde text začíná. Když ho nenajde, vrátí <code>string::npos</code>.</p>
<p><code>s.substr(od, kolik)</code> vrátí kousek textu.</p>
<pre>string mail = "tom@nas.cz";
int z = mail.find("@");          // 3
cout &lt;&lt; mail.substr(0, z);       // tom
cout &lt;&lt; mail.substr(z + 1);      // nas.cz</pre>`,
    task:'Načti e-mail a vypiš na první řádek jméno (část před <b>@</b>) a na druhý doménu (část za <b>@</b>).<br>Pro <code>tom@nas.cz</code>:<pre>tom\nnas.cz</pre>',
    starter: HS+'int main() {\n    string mail;\n    cin >> mail;\n    \n    return 0;\n}\n',
    stdin:'tom@nas.cz',
    solution: HS+'int main() {\n    string mail;\n    cin >> mail;\n    int z = mail.find("@");\n    cout << mail.substr(0, z) << endl;\n    cout << mail.substr(z + 1) << endl;\n    return 0;\n}\n',
    tests:[{in:'tom@nas.cz',out:'tom\nnas.cz'},{in:'quentin.bot@example.com',out:'quentin.bot\nexample.com'}], must:['find','substr'],
    hint:'Nejdřív int z = mail.find("@"); pak substr(0, z) a substr(z + 1).'},
  { id:'w8l5', title:'Palindrom',
    theory:`<p>Text můžeš procházet <b>odzadu</b>. Poslední znak je na pozici <code>s.length() - 1</code>.</p>
<pre>string otoc = "";
for (int i = s.length() - 1; i &gt;= 0; i--) {
    otoc += s[i];
}</pre>
<p>Dva stringy porovnáš normálně přes <code>==</code>.</p>`,
    task:'Načti slovo. Když se čte stejně zepředu i zezadu (palindrom), vypiš <b>ANO</b>, jinak <b>NE</b>.<br><code>kajak</code> → <code>ANO</code>, <code>lodka</code> → <code>NE</code>',
    starter: HS+'int main() {\n    string s;\n    cin >> s;\n    \n    return 0;\n}\n',
    stdin:'kajak',
    solution: HS+'int main() {\n    string s;\n    cin >> s;\n    string otoc = "";\n    for (int i = s.length() - 1; i >= 0; i--) {\n        otoc += s[i];\n    }\n    if (otoc == s) cout << "ANO";\n    else cout << "NE";\n    return 0;\n}\n',
    tests:[{in:'kajak',out:'ANO'},{in:'lodka',out:'NE'},{in:'a',out:'ANO'},{in:'abba',out:'ANO'}], must:['for'],
    hint:'Postav otočený string cyklem odzadu a porovnej ho s původním přes ==.'},
  ]
},
{
  id:'w9', title:'Seznamy – vector', icon:'📚', color:'#20c997', gxx:true,
  desc:'Pole, které umí růst: přidávání, procházení a třídění.',
  lessons:[
  { id:'w9l1', title:'Tvůj první vector',
    theory:`<p><code>vector</code> je seznam, který umí <b>měnit velikost</b>. Potřebuje <code>#include &lt;vector&gt;</code>.</p>
<pre>vector&lt;int&gt; cisla;        // prázdný seznam čísel
cisla.push_back(5);      // přidá na konec
cisla.push_back(8);
cout &lt;&lt; cisla.size();    // 2
cout &lt;&lt; cisla[0];        // 5</pre>`,
    task:'Načti 3 čísla, ulož je do vectoru a vypiš jeho velikost a pak <b>poslední</b> prvek, každé na nový řádek.<br>Pro <code>4 7 9</code>:<pre>3\n9</pre>',
    starter: HV+'int main() {\n    vector<int> cisla;\n    \n    return 0;\n}\n',
    stdin:'4 7 9',
    solution: HV+'int main() {\n    vector<int> cisla;\n    for (int i = 0; i < 3; i++) {\n        int x;\n        cin >> x;\n        cisla.push_back(x);\n    }\n    cout << cisla.size() << endl;\n    cout << cisla[cisla.size() - 1] << endl;\n    return 0;\n}\n',
    tests:[{in:'4 7 9',out:'3\n9'},{in:'1 2 100',out:'3\n100'}], must:['push_back'],
    hint:'V cyklu 3× načti číslo a push_back. Poslední prvek je cisla[cisla.size() - 1] nebo cisla.back().'},
  { id:'w9l2', title:'Procházení a součet',
    theory:`<p>Vector projdeš nejsnáz takhle:</p>
<pre>for (int x : cisla) {
    cout &lt;&lt; x &lt;&lt; " ";
}</pre>
<p>Čti to jako „pro každé x v seznamu čísla“.</p>`,
    task:'Na prvním řádku je počet čísel <b>n</b>, pak n čísel. Ulož je do vectoru a vypiš jejich <b>součet</b>.<br>Pro <code>4</code> a <code>1 2 3 4</code> je výstup <code>10</code>.',
    starter: HV+'int main() {\n    int n;\n    cin >> n;\n    vector<int> cisla;\n    \n    return 0;\n}\n',
    stdin:'4\n1 2 3 4',
    solution: HV+'int main() {\n    int n;\n    cin >> n;\n    vector<int> cisla;\n    for (int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        cisla.push_back(x);\n    }\n    int soucet = 0;\n    for (int x : cisla) soucet += x;\n    cout << soucet;\n    return 0;\n}\n',
    tests:[{in:'4\n1 2 3 4',out:'10'},{in:'1\n42',out:'42'},{in:'5\n-1 -2 10 0 3',out:'10'}], must:['vector','for\\s*\\(\\s*\\w+\\s+\\w+\\s*:'],
    hint:'Nejdřív načti čísla do vectoru, pak druhým cyklem for (int x : cisla) sčítej.'},
  { id:'w9l3', title:'Sudé a liché',
    theory:`<p>Při procházení můžeš prvky <b>filtrovat</b> přes <code>if</code>.</p>
<p>Sudé číslo poznáš podle <code>x % 2 == 0</code>.</p>`,
    task:'Načti n a n čísel. Vypiš na první řádek <b>součet sudých</b> a na druhý <b>součin lichých</b> (když žádné liché není, součin je 1).<br>Pro <code>5</code> a <code>1 2 3 4 5</code>:<pre>6\n15</pre>',
    starter: HV+'int main() {\n    int n;\n    cin >> n;\n    vector<int> cisla;\n    \n    return 0;\n}\n',
    stdin:'5\n1 2 3 4 5',
    solution: HV+'int main() {\n    int n;\n    cin >> n;\n    vector<int> cisla;\n    for (int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        cisla.push_back(x);\n    }\n    int sude = 0;\n    long long liche = 1;\n    for (int x : cisla) {\n        if (x % 2 == 0) sude += x;\n        else liche *= x;\n    }\n    cout << sude << endl << liche << endl;\n    return 0;\n}\n',
    tests:[{in:'5\n1 2 3 4 5',out:'6\n15'},{in:'3\n2 4 6',out:'12\n1'},{in:'2\n7 9',out:'0\n63'}], must:['vector'],
    hint:'Dvě proměnné: sude = 0 a liche = 1. V cyklu if (x % 2 == 0) přičti, jinak vynásob.'},
  { id:'w9l4', title:'Třídění – sort',
    theory:`<p>Knihovna <code>&lt;algorithm&gt;</code> umí vector seřadit jedním řádkem:</p>
<pre>sort(cisla.begin(), cisla.end());   // od nejmenšího</pre>
<p><code>begin()</code> a <code>end()</code> říkají „od začátku do konce“.</p>`,
    task:'Načti n a n čísel, seřaď je od nejmenšího a vypiš je oddělené mezerou.<br>Pro <code>4</code> a <code>9 1 5 3</code>: <code>1 3 5 9</code>',
    starter: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> cisla(n);\n    for (int i = 0; i < n; i++) cin >> cisla[i];\n    \n    return 0;\n}\n',
    stdin:'4\n9 1 5 3',
    solution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> cisla(n);\n    for (int i = 0; i < n; i++) cin >> cisla[i];\n    sort(cisla.begin(), cisla.end());\n    for (int i = 0; i < n; i++) {\n        if (i > 0) cout << " ";\n        cout << cisla[i];\n    }\n    return 0;\n}\n',
    tests:[{in:'4\n9 1 5 3',out:'1 3 5 9'},{in:'1\n7',out:'7'},{in:'5\n3 3 -1 0 2',out:'-1 0 2 3 3'}], must:['sort'],
    hint:'sort(cisla.begin(), cisla.end()); a pak vypiš. vector<int> cisla(n) rovnou vytvoří n míst.'},
  { id:'w9l5', title:'Nákupní seznam',
    theory:`<p>Vector může držet i texty: <code>vector&lt;string&gt;</code>.</p>
<p>Číslovaný výpis uděláš klasickým cyklem s indexem:</p>
<pre>for (int i = 0; i &lt; seznam.size(); i++) {
    cout &lt;&lt; i + 1 &lt;&lt; ". " &lt;&lt; seznam[i] &lt;&lt; endl;
}</pre>`,
    task:'Načítej slova, dokud nepřijde slovo <b>konec</b>. Pak vypiš očíslovaný seznam.<br>Pro <code>chleba mleko syr konec</code>:<pre>1. chleba\n2. mleko\n3. syr</pre>',
    starter: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<string> seznam;\n    string slovo;\n    \n    return 0;\n}\n',
    stdin:'chleba mleko syr konec',
    solution: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<string> seznam;\n    string slovo;\n    while (cin >> slovo && slovo != "konec") {\n        seznam.push_back(slovo);\n    }\n    for (int i = 0; i < seznam.size(); i++) {\n        cout << i + 1 << ". " << seznam[i] << endl;\n    }\n    return 0;\n}\n',
    tests:[{in:'chleba mleko syr konec',out:'1. chleba\n2. mleko\n3. syr'},{in:'konec',out:''},{in:'jablko konec hruska',out:'1. jablko'}], must:['vector<\\s*string\\s*>','push_back'],
    hint:'while (cin >> slovo && slovo != "konec") { seznam.push_back(slovo); }'},
  ]
},
{
  id:'w10', title:'Vlastní typy – struct', icon:'🧱', color:'#fd7e14', gxx:true,
  desc:'Spoj víc údajů do jednoho celku.',
  lessons:[
  { id:'w10l1', title:'Co je struct',
    theory:`<p><code>struct</code> spojí víc proměnných do jednoho <b>vlastního typu</b>.</p>
<pre>struct Hrac {
    string jmeno;
    int body;
};

Hrac h;
h.jmeno = "Tom";
h.body = 10;
cout &lt;&lt; h.jmeno;</pre>
<p>Ke členům se dostaneš přes <b>tečku</b>. Za <code>}</code> struktury patří středník.</p>`,
    task:'Struktura <b>Hrac</b> je připravená. Načti jméno a body, ulož je do hráče a vypiš <b>JMÉNO má BODY bodů</b>.<br>Pro <code>Tom 42</code>: <code>Tom má 42 bodů</code>',
    starter: HS+'struct Hrac {\n    string jmeno;\n    int body;\n};\n\nint main() {\n    Hrac h;\n    \n    return 0;\n}\n',
    stdin:'Tom 42',
    solution: HS+'struct Hrac {\n    string jmeno;\n    int body;\n};\n\nint main() {\n    Hrac h;\n    cin >> h.jmeno >> h.body;\n    cout << h.jmeno << " má " << h.body << " bodů";\n    return 0;\n}\n',
    tests:[{in:'Tom 42',out:'Tom má 42 bodů'},{in:'Quentin 7',out:'Quentin má 7 bodů'}], must:['h\\.jmeno','h\\.body'],
    hint:'cin >> h.jmeno >> h.body; a pak cout s tečkami.'},
  { id:'w10l2', title:'Seznam struktur',
    theory:`<p>Struktury můžeš dát do vectoru:</p>
<pre>vector&lt;Hrac&gt; hraci;
hraci.push_back({"Tom", 10});
for (Hrac h : hraci) cout &lt;&lt; h.jmeno;</pre>
<p>Složené závorky <code>{"Tom", 10}</code> vyplní členy popořadě.</p>`,
    task:'Načti n a pak n hráčů (jméno a body). Vypiš jméno hráče s <b>nejvíc body</b>.<br>Pro <code>3</code> a <code>Ana 5 Tom 9 Eva 7</code>: <code>Tom</code>',
    starter: HSV+'struct Hrac {\n    string jmeno;\n    int body;\n};\n\nint main() {\n    int n;\n    cin >> n;\n    vector<Hrac> hraci;\n    \n    return 0;\n}\n',
    stdin:'3\nAna 5 Tom 9 Eva 7',
    solution: HSV+'struct Hrac {\n    string jmeno;\n    int body;\n};\n\nint main() {\n    int n;\n    cin >> n;\n    vector<Hrac> hraci;\n    for (int i = 0; i < n; i++) {\n        Hrac h;\n        cin >> h.jmeno >> h.body;\n        hraci.push_back(h);\n    }\n    Hrac nej = hraci[0];\n    for (Hrac h : hraci) {\n        if (h.body > nej.body) nej = h;\n    }\n    cout << nej.jmeno;\n    return 0;\n}\n',
    tests:[{in:'3\nAna 5 Tom 9 Eva 7',out:'Tom'},{in:'1\nSolo 0',out:'Solo'},{in:'4\nA 1 B 2 C 30 D 4',out:'C'}], must:['vector<\\s*Hrac\\s*>'],
    hint:'Ulož si prvního hráče jako nejlepšího a v cyklu ho vyměň, když najdeš někoho s víc body.'},
  { id:'w10l3', title:'enum – pojmenované možnosti',
    theory:`<p><code>enum class</code> je seznam pojmenovaných možností. Místo čísel 0, 1, 2 píšeš srozumitelná jména:</p>
<pre>enum class Smer { Sever, Jih, Vychod, Zapad };
Smer s = Smer::Jih;
if (s == Smer::Jih) cout &lt;&lt; "dolu";</pre>`,
    task:'Načti písmeno <b>S</b>, <b>J</b>, <b>V</b> nebo <b>Z</b>, převeď ho na <code>Smer</code> a vypiš slovo <b>nahoru</b>, <b>dolu</b>, <b>doprava</b> nebo <b>doleva</b>. Použij enum.',
    starter: H+'enum class Smer { Sever, Jih, Vychod, Zapad };\n\nint main() {\n    char c;\n    cin >> c;\n    Smer s;\n    \n    return 0;\n}\n',
    stdin:'J',
    solution: H+'enum class Smer { Sever, Jih, Vychod, Zapad };\n\nint main() {\n    char c;\n    cin >> c;\n    Smer s;\n    if (c == \'S\') s = Smer::Sever;\n    else if (c == \'J\') s = Smer::Jih;\n    else if (c == \'V\') s = Smer::Vychod;\n    else s = Smer::Zapad;\n\n    if (s == Smer::Sever) cout << "nahoru";\n    else if (s == Smer::Jih) cout << "dolu";\n    else if (s == Smer::Vychod) cout << "doprava";\n    else cout << "doleva";\n    return 0;\n}\n',
    tests:[{in:'J',out:'dolu'},{in:'S',out:'nahoru'},{in:'V',out:'doprava'},{in:'Z',out:'doleva'}], must:['Smer::'],
    hint:'Dva kroky: nejdřív if podle písmene nastav s = Smer::..., pak druhý if podle s vypiš slovo.'},
  ]
},
{
  id:'w11', title:'Reference', icon:'🔗', color:'#74c0fc', gxx:true,
  desc:'Přezdívky pro proměnné a funkce, které mění své parametry.',
  lessons:[
  { id:'w11l1', title:'Kopie vs. reference',
    theory:`<p>Normálně funkce dostane <b>kopii</b> čísla. Když ji změní, originál se nezmění.</p>
<p>S <code>&amp;</code> dostane funkce <b>referenci</b>, tedy přímo originál:</p>
<pre>void pridej(int&amp; x) {
    x = x + 1;
}
int a = 5;
pridej(a);   // a je teď 6</pre>`,
    task:'Dopiš funkci <b>zdvojnasob</b> tak, aby přes referenci zdvojnásobila číslo. Main načte číslo, zavolá ji a vypíše výsledek.<br>Pro <code>21</code>: <code>42</code>',
    starter: H+'void zdvojnasob(int x) {\n    x = x * 2;\n}\n\nint main() {\n    int a;\n    cin >> a;\n    zdvojnasob(a);\n    cout << a;\n    return 0;\n}\n',
    stdin:'21',
    solution: H+'void zdvojnasob(int& x) {\n    x = x * 2;\n}\n\nint main() {\n    int a;\n    cin >> a;\n    zdvojnasob(a);\n    cout << a;\n    return 0;\n}\n',
    tests:[{in:'21',out:'42'},{in:'0',out:'0'},{in:'-4',out:'-8'}], must:['int\\s*&'],
    hint:'Stačí přidat jeden znak: int& x místo int x.'},
  { id:'w11l2', title:'Prohození přes reference',
    theory:`<p>Pamatuješ prohození přes ukazatele? S referencemi je to čitelnější:</p>
<pre>void prohod(int&amp; a, int&amp; b) {
    int t = a;
    a = b;
    b = t;
}</pre>`,
    task:'Napiš funkci <b>prohod</b> s referencemi. Main načte dvě čísla, prohodí je a vypíše je oddělená mezerou.<br>Pro <code>3 8</code>: <code>8 3</code>',
    starter: H+'// sem napiš funkci prohod\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    prohod(a, b);\n    cout << a << " " << b;\n    return 0;\n}\n',
    stdin:'3 8',
    solution: H+'void prohod(int& a, int& b) {\n    int t = a;\n    a = b;\n    b = t;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    prohod(a, b);\n    cout << a << " " << b;\n    return 0;\n}\n',
    tests:[{in:'3 8',out:'8 3'},{in:'5 5',out:'5 5'},{in:'-1 10',out:'10 -1'}], must:['&'],
    hint:'Potřebuješ pomocnou proměnnou t: t = a; a = b; b = t;'},
  { id:'w11l3', title:'const& – rychle a bezpečně',
    theory:`<p>Kopírovat velký vector nebo string do funkce je pomalé. Reference kopii ušetří.</p>
<p>Když ho funkce nemá měnit, přidej <code>const</code>:</p>
<pre>int soucet(const vector&lt;int&gt;&amp; v) {
    int s = 0;
    for (int x : v) s += x;
    return s;
}</pre>
<p><code>const&amp;</code> znamená: „nekopíruj, jen se podívej, a neměň“.</p>`,
    task:'Napiš funkci <b>prumer</b>, která dostane <code>const vector&lt;int&gt;&amp;</code> a vrátí průměr jako <code>double</code>. Main načte n a n čísel a vypíše průměr.<br>Pro <code>4</code> a <code>1 2 3 4</code>: <code>2.5</code>',
    starter: HV+'// sem napiš funkci prumer\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> v(n);\n    for (int i = 0; i < n; i++) cin >> v[i];\n    cout << prumer(v);\n    return 0;\n}\n',
    stdin:'4\n1 2 3 4',
    solution: HV+'double prumer(const vector<int>& v) {\n    double s = 0;\n    for (int x : v) s += x;\n    return s / v.size();\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> v(n);\n    for (int i = 0; i < n; i++) cin >> v[i];\n    cout << prumer(v);\n    return 0;\n}\n',
    tests:[{in:'4\n1 2 3 4',out:'2.5'},{in:'3\n3 3 3',out:'3'},{in:'2\n1 2',out:'1.5'}], must:['const\\s+vector<\\s*int\\s*>\\s*&'],
    hint:'Sčítej do double s, pak return s / v.size();'},
  ]
},
{
  id:'w12', title:'Třídy a objekty', icon:'🏗️', color:'#ff8787', gxx:true,
  desc:'Vlastní objekty s daty i chováním. Základ objektového programování.',
  lessons:[
  { id:'w12l1', title:'První třída',
    theory:`<p><b>Třída</b> je plán. <b>Objekt</b> je konkrétní věc podle plánu.</p>
<p>Třída má <b>data</b> (proměnné) i <b>chování</b> (funkce, říká se jim metody):</p>
<pre>class Pes {
public:
    string jmeno;
    void stekej() {
        cout &lt;&lt; jmeno &lt;&lt; ": Haf!" &lt;&lt; endl;
    }
};

Pes p;
p.jmeno = "Rex";
p.stekej();   // Rex: Haf!</pre>`,
    task:'Doplň do třídy <b>Pes</b> metodu <code>stekej()</code>, která vypíše <b>JMÉNO: Haf!</b>. Main načte jméno a zavolá ji.',
    starter: HS+'class Pes {\npublic:\n    string jmeno;\n    // sem přidej metodu stekej\n};\n\nint main() {\n    Pes p;\n    cin >> p.jmeno;\n    p.stekej();\n    return 0;\n}\n',
    stdin:'Rex',
    solution: HS+'class Pes {\npublic:\n    string jmeno;\n    void stekej() {\n        cout << jmeno << ": Haf!" << endl;\n    }\n};\n\nint main() {\n    Pes p;\n    cin >> p.jmeno;\n    p.stekej();\n    return 0;\n}\n',
    tests:[{in:'Rex',out:'Rex: Haf!'},{in:'Alik',out:'Alik: Haf!'}], must:['class'],
    hint:'Uvnitř třídy: void stekej() { cout << jmeno << ": Haf!" << endl; }'},
  { id:'w12l2', title:'Konstruktor',
    theory:`<p><b>Konstruktor</b> je speciální metoda, která se zavolá při vytvoření objektu. Jmenuje se stejně jako třída a nemá návratový typ:</p>
<pre>class Auto {
public:
    string znacka;
    int rok;
    Auto(string z, int r) {
        znacka = z;
        rok = r;
    }
};

Auto a("Skoda", 1998);</pre>`,
    task:'Doplň konstruktor třídy <b>Auto</b> (značka, rok) a metodu <code>vypis()</code>, která vypíše <b>ZNAČKA (ROK)</b>.<br>Pro <code>Skoda 1998</code>: <code>Skoda (1998)</code>',
    starter: HS+'class Auto {\npublic:\n    string znacka;\n    int rok;\n    // sem konstruktor a metodu vypis\n};\n\nint main() {\n    string z;\n    int r;\n    cin >> z >> r;\n    Auto a(z, r);\n    a.vypis();\n    return 0;\n}\n',
    stdin:'Skoda 1998',
    solution: HS+'class Auto {\npublic:\n    string znacka;\n    int rok;\n    Auto(string z, int r) {\n        znacka = z;\n        rok = r;\n    }\n    void vypis() {\n        cout << znacka << " (" << rok << ")";\n    }\n};\n\nint main() {\n    string z;\n    int r;\n    cin >> z >> r;\n    Auto a(z, r);\n    a.vypis();\n    return 0;\n}\n',
    tests:[{in:'Skoda 1998',out:'Skoda (1998)'},{in:'Tatra 1934',out:'Tatra (1934)'}], must:['Auto\\s*\\('],
    hint:'Auto(string z, int r) { znacka = z; rok = r; } a pak void vypis() { ... }'},
  { id:'w12l3', title:'private – chráněná data',
    theory:`<p>Data pod <code>private:</code> nejdou změnit zvenku. Dá se k nim jen přes metody třídy.</p>
<p>Díky tomu třída hlídá, aby data dávala smysl:</p>
<pre>class Ucet {
private:
    int zustatek = 0;
public:
    void vloz(int c) {
        if (c &gt; 0) zustatek += c;
    }
    int stav() { return zustatek; }
};</pre>
<p><code>u.zustatek = -500;</code> by teď skončilo chybou překladu. To je dobře.</p>`,
    task:'Dopiš metodu <code>vyber(int c)</code>: vybere peníze jen když je <code>c &gt; 0</code> a na účtu je dost. Jinak vypíše <b>Nelze</b>.<br>Main provede příkazy ze vstupu a nakonec vypíše stav.',
    starter: HS+'class Ucet {\nprivate:\n    int zustatek = 0;\npublic:\n    void vloz(int c) {\n        if (c > 0) zustatek += c;\n    }\n    // sem metodu vyber\n    int stav() { return zustatek; }\n};\n\nint main() {\n    Ucet u;\n    string prikaz;\n    int c;\n    while (cin >> prikaz >> c) {\n        if (prikaz == "vloz") u.vloz(c);\n        else u.vyber(c);\n    }\n    cout << u.stav();\n    return 0;\n}\n',
    stdin:'vloz 100 vyber 30 vyber 500',
    solution: HS+'class Ucet {\nprivate:\n    int zustatek = 0;\npublic:\n    void vloz(int c) {\n        if (c > 0) zustatek += c;\n    }\n    void vyber(int c) {\n        if (c > 0 && c <= zustatek) zustatek -= c;\n        else cout << "Nelze" << endl;\n    }\n    int stav() { return zustatek; }\n};\n\nint main() {\n    Ucet u;\n    string prikaz;\n    int c;\n    while (cin >> prikaz >> c) {\n        if (prikaz == "vloz") u.vloz(c);\n        else u.vyber(c);\n    }\n    cout << u.stav();\n    return 0;\n}\n',
    tests:[{in:'vloz 100 vyber 30 vyber 500',out:'Nelze\n70'},{in:'vyber 1',out:'Nelze\n0'},{in:'vloz 50 vyber 50',out:'0'},{in:'vloz 10 vyber -5',out:'Nelze\n10'}], must:['private'],
    hint:'void vyber(int c) { if (c > 0 && c <= zustatek) zustatek -= c; else cout << "Nelze" << endl; }'},
  { id:'w12l4', title:'Objekty ve vectoru',
    theory:`<p>Objekty můžeš mít v seznamu a volat na nich metody v cyklu:</p>
<pre>vector&lt;Pes&gt; smecka;
for (Pes&amp; p : smecka) p.stekej();</pre>
<p><code>Pes&amp;</code> v cyklu znamená, že pracuješ přímo s objekty v seznamu, ne s kopiemi.</p>`,
    task:'Třída <b>Lektvar</b> má sílu. Metoda <code>vylepsi()</code> přidá 10. Načti n sil, vytvoř lektvary, každý <b>vylepši</b> a vypiš jejich síly oddělené mezerou.<br>Pro <code>3</code> a <code>5 0 20</code>: <code>15 10 30</code>',
    starter: HV+'class Lektvar {\npublic:\n    int sila;\n    Lektvar(int s) { sila = s; }\n    void vylepsi() { sila += 10; }\n};\n\nint main() {\n    int n;\n    cin >> n;\n    vector<Lektvar> lektvary;\n    \n    return 0;\n}\n',
    stdin:'3\n5 0 20',
    solution: HV+'class Lektvar {\npublic:\n    int sila;\n    Lektvar(int s) { sila = s; }\n    void vylepsi() { sila += 10; }\n};\n\nint main() {\n    int n;\n    cin >> n;\n    vector<Lektvar> lektvary;\n    for (int i = 0; i < n; i++) {\n        int s;\n        cin >> s;\n        lektvary.push_back(Lektvar(s));\n    }\n    for (Lektvar& l : lektvary) l.vylepsi();\n    for (int i = 0; i < n; i++) {\n        if (i > 0) cout << " ";\n        cout << lektvary[i].sila;\n    }\n    return 0;\n}\n',
    tests:[{in:'3\n5 0 20',out:'15 10 30'},{in:'1\n-10',out:'0'}], must:['vylepsi\\s*\\(\\s*\\)'],
    hint:'Pozor na & v cyklu: for (Lektvar& l : lektvary) l.vylepsi(); Bez & by se vylepšily jen kopie.'},
  { id:'w12p1', title:'🏁 Projekt: Zvířecí útulek', project:true,
    theory:`<p>Velký projekt na závěr: spojíš <b>třídu</b>, <b>vector</b>, <b>string</b> a <b>cyklus s příkazy</b>.</p>
<p>Útulek přijímá zvířata a lidé si je adoptují. Program čte příkazy, dokud nepřijde <code>konec</code>.</p>`,
    task:`Příkazy na vstupu:<ul>
<li><code>prijmi JMENO DRUH</code>: přidá zvíře, vypíše <b>Přijat: JMENO (DRUH)</b></li>
<li><code>adoptuj JMENO</code>: odebere zvíře a vypíše <b>Adoptován: JMENO</b>, nebo <b>Nenalezeno: JMENO</b></li>
<li><code>seznam</code>: vypíše počet zvířat a pak každé na řádek jako <b>- JMENO (DRUH)</b></li>
<li><code>konec</code>: konec programu</li></ul>`,
    starter: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nclass Zvire {\npublic:\n    string jmeno;\n    string druh;\n    Zvire(string j, string d) { jmeno = j; druh = d; }\n};\n\nint main() {\n    vector<Zvire> utulek;\n    string prikaz;\n    while (cin >> prikaz && prikaz != "konec") {\n        // tvůj kód\n    }\n    return 0;\n}\n',
    stdin:'prijmi Rex pes\nprijmi Micka kocka\nseznam\nadoptuj Rex\nadoptuj Bobik\nseznam\nkonec',
    solution: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nclass Zvire {\npublic:\n    string jmeno;\n    string druh;\n    Zvire(string j, string d) { jmeno = j; druh = d; }\n};\n\nint main() {\n    vector<Zvire> utulek;\n    string prikaz;\n    while (cin >> prikaz && prikaz != "konec") {\n        if (prikaz == "prijmi") {\n            string j, d;\n            cin >> j >> d;\n            utulek.push_back(Zvire(j, d));\n            cout << "Přijat: " << j << " (" << d << ")" << endl;\n        } else if (prikaz == "adoptuj") {\n            string j;\n            cin >> j;\n            bool nalezeno = false;\n            for (int i = 0; i < utulek.size(); i++) {\n                if (utulek[i].jmeno == j) {\n                    utulek.erase(utulek.begin() + i);\n                    nalezeno = true;\n                    break;\n                }\n            }\n            if (nalezeno) cout << "Adoptován: " << j << endl;\n            else cout << "Nenalezeno: " << j << endl;\n        } else if (prikaz == "seznam") {\n            cout << utulek.size() << endl;\n            for (Zvire& z : utulek) cout << "- " << z.jmeno << " (" << z.druh << ")" << endl;\n        }\n    }\n    return 0;\n}\n',
    tests:[{in:'prijmi Rex pes\nprijmi Micka kocka\nseznam\nadoptuj Rex\nadoptuj Bobik\nseznam\nkonec',out:'Přijat: Rex (pes)\nPřijat: Micka (kocka)\n2\n- Rex (pes)\n- Micka (kocka)\nAdoptován: Rex\nNenalezeno: Bobik\n1\n- Micka (kocka)'},
           {in:'seznam\nkonec',out:'0'},{in:'prijmi A x\nprijmi B y\nprijmi C z\nadoptuj B\nseznam\nkonec\nseznam',out:'Přijat: A (x)\nPřijat: B (y)\nPřijat: C (z)\nAdoptován: B\n2\n- A (x)\n- C (z)'}],
    must:['class','vector'],
    hint:'Odebrání z vectoru: utulek.erase(utulek.begin() + i); Najdi index i cyklem podle jména.'},
  ]
},
{
  id:'w13', title:'Dynamická paměť', icon:'🧠', color:'#b197fc', gxx:true,
  desc:'Paměť, o kterou si řekneš za běhu: new, delete a chytré ukazatele.',
  lessons:[
  { id:'w13l1', title:'new a delete',
    theory:`<p>Normální proměnná zmizí na konci bloku. Paměť z <code>new</code> žije, dokud ji sám neuvolníš přes <code>delete</code>.</p>
<pre>int* p = new int(5);   // nové číslo v paměti
cout &lt;&lt; *p;            // 5
delete p;              // vrátit paměť</pre>
<p>Zapomenutý <code>delete</code> = <b>únik paměti</b>. Program si bere paměť a nevrací ji.</p>`,
    task:'Vytvoř přes <code>new</code> číslo, načti do něj hodnotu ze vstupu, vypiš její druhou mocninu a paměť uvolni přes <code>delete</code>.<br>Pro <code>7</code>: <code>49</code>',
    starter: H+'int main() {\n    \n    return 0;\n}\n',
    stdin:'7',
    solution: H+'int main() {\n    int* p = new int;\n    cin >> *p;\n    cout << (*p) * (*p);\n    delete p;\n    return 0;\n}\n',
    tests:[{in:'7',out:'49'},{in:'-3',out:'9'},{in:'0',out:'0'}], must:['new','delete'],
    hint:'int* p = new int; cin >> *p; pak cout << *p * *p; a nakonec delete p;'},
  { id:'w13l2', title:'Dynamické pole',
    theory:`<p>Pole s velikostí, kterou zjistíš až za běhu:</p>
<pre>int n;
cin &gt;&gt; n;
int* pole = new int[n];
// ... používáš pole[0] až pole[n-1]
delete[] pole;         // u pole delete s [ ]</pre>
<p>V praxi na tohle máš <code>vector</code>, ale je dobré vědět, co dělá uvnitř.</p>`,
    task:'Načti n, vytvoř dynamické pole n čísel, načti je a vypiš je <b>pozpátku</b> oddělené mezerou. Nezapomeň na <code>delete[]</code>.<br>Pro <code>3</code> a <code>1 2 3</code>: <code>3 2 1</code>',
    starter: H+'int main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n',
    stdin:'3\n1 2 3',
    solution: H+'int main() {\n    int n;\n    cin >> n;\n    int* pole = new int[n];\n    for (int i = 0; i < n; i++) cin >> pole[i];\n    for (int i = n - 1; i >= 0; i--) {\n        cout << pole[i];\n        if (i > 0) cout << " ";\n    }\n    delete[] pole;\n    return 0;\n}\n',
    tests:[{in:'3\n1 2 3',out:'3 2 1'},{in:'1\n9',out:'9'},{in:'5\n5 4 3 2 1',out:'1 2 3 4 5'}], must:['new\\s+int\\s*\\[','delete\\s*\\[\\s*\\]'],
    hint:'int* pole = new int[n]; ... a na konci delete[] pole;'},
  { id:'w13l3', title:'Chytrý ukazatel – unique_ptr',
    theory:`<p>Moderní C++ ti <code>delete</code> pohlídá samo. <code>unique_ptr</code> uvolní paměť, když zanikne (z <code>&lt;memory&gt;</code>):</p>
<pre>#include &lt;memory&gt;
unique_ptr&lt;int&gt; p = make_unique&lt;int&gt;(5);
cout &lt;&lt; *p;
// žádný delete, uklidí se samo</pre>
<p>Pravidlo pro praxi: místo <code>new</code> a <code>delete</code> používej <code>make_unique</code>.</p>`,
    task:'Struktura <b>Bod</b> má x a y. Vytvoř ho přes <code>make_unique</code>, načti x a y, posuň bod o +1 v obou osách a vypiš <b>(x, y)</b>.<br>Pro <code>2 5</code>: <code>(3, 6)</code>',
    starter: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nstruct Bod {\n    int x;\n    int y;\n};\n\nint main() {\n    \n    return 0;\n}\n',
    stdin:'2 5',
    solution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nstruct Bod {\n    int x;\n    int y;\n};\n\nint main() {\n    unique_ptr<Bod> b = make_unique<Bod>();\n    cin >> b->x >> b->y;\n    b->x++;\n    b->y++;\n    cout << "(" << b->x << ", " << b->y << ")";\n    return 0;\n}\n',
    tests:[{in:'2 5',out:'(3, 6)'},{in:'-1 -1',out:'(0, 0)'}], must:['make_unique'],
    hint:'Přes ukazatel se ke členům dostaneš šipkou: b->x. Vytvoření: auto b = make_unique<Bod>();'},
  ]
},
{
  id:'w14', title:'Soubory', icon:'💾', color:'#ffa8a8', gxx:true,
  desc:'Ukládání a čtení dat ze souborů.',
  lessons:[
  { id:'w14l1', title:'Zápis do souboru',
    theory:`<p>Soubor otevřeš pro zápis přes <code>ofstream</code> (z <code>&lt;fstream&gt;</code>). Píšeš do něj stejně jako do <code>cout</code>:</p>
<pre>#include &lt;fstream&gt;
ofstream f("poznamky.txt");
f &lt;&lt; "Ahoj souboru!" &lt;&lt; endl;
f.close();</pre>
<p>Čtení funguje přes <code>ifstream</code> a <code>&gt;&gt;</code> nebo <code>getline</code>, stejně jako u <code>cin</code>.</p>`,
    task:'Načti slovo ze vstupu a zapiš ho 3× do souboru <b>slovo.txt</b> (každé na řádek). Pak soubor otevři pro čtení a vypiš jeho obsah na obrazovku.',
    starter: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n    \n    return 0;\n}\n',
    stdin:'pizza',
    solution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n    ofstream out("slovo.txt");\n    for (int i = 0; i < 3; i++) out << s << endl;\n    out.close();\n\n    ifstream in("slovo.txt");\n    string radek;\n    while (getline(in, radek)) cout << radek << endl;\n    return 0;\n}\n',
    tests:[{in:'pizza',out:'pizza\npizza\npizza'},{in:'C++',out:'C++\nC++\nC++'}], must:['ofstream','ifstream'],
    hint:'Po zápisu zavolej out.close(), jinak se data nemusí stihnout zapsat. Čtení: while (getline(in, radek)) cout << radek << endl;'},
  { id:'w14l2', title:'Čísla v souboru',
    theory:`<p>Ze souboru čteš čísla jako z <code>cin</code>. Cyklus <code>while (in &gt;&gt; x)</code> skončí sám na konci souboru:</p>
<pre>ifstream in("cisla.txt");
int x, soucet = 0;
while (in &gt;&gt; x) soucet += x;</pre>`,
    task:'Načti ze vstupu n a n čísel a ulož je do souboru <b>cisla.txt</b>. Pak soubor přečti a vypiš <b>počet</b> čísel a jejich <b>součet</b> na dva řádky.<br>Pro <code>3</code> a <code>4 5 6</code>:<pre>3\n15</pre>',
    starter: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}\n',
    stdin:'3\n4 5 6',
    solution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    ofstream out("cisla.txt");\n    for (int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        out << x << " ";\n    }\n    out.close();\n\n    ifstream in("cisla.txt");\n    int x, pocet = 0, soucet = 0;\n    while (in >> x) {\n        pocet++;\n        soucet += x;\n    }\n    cout << pocet << endl << soucet << endl;\n    return 0;\n}\n',
    tests:[{in:'3\n4 5 6',out:'3\n15'},{in:'0',out:'0\n0'},{in:'4\n-1 1 -1 10',out:'4\n9'}], must:['ofstream','ifstream'],
    hint:'Nejdřív všechno zapiš a zavři soubor, teprve pak ho otevři přes ifstream a čti while (in >> x).'},
  { id:'w14l3', title:'Deník – připsání na konec',
    theory:`<p>Když otevřeš <code>ofstream</code> normálně, soubor se <b>přepíše</b>. Pro připsání na konec použij <code>ios::app</code>:</p>
<pre>ofstream f("denik.txt", ios::app);
f &lt;&lt; "nový záznam" &lt;&lt; endl;</pre>`,
    task:'Načítej řádky ze vstupu. Každý řádek otevři soubor <b>denik.txt</b> s <code>ios::app</code>, připiš <b>N: řádek</b> (N je pořadí) a zavři ho. Nakonec soubor přečti a vypiš celý.',
    starter: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string radek;\n    int n = 0;\n    \n    return 0;\n}\n',
    stdin:'Ranni beh\nUcil jsem se C++\nPizza',
    solution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string radek;\n    int n = 0;\n    while (getline(cin, radek)) {\n        n++;\n        ofstream f("denik.txt", ios::app);\n        f << n << ": " << radek << endl;\n    }\n    ifstream in("denik.txt");\n    while (getline(in, radek)) cout << radek << endl;\n    return 0;\n}\n',
    tests:[{in:'Ranni beh\nUcil jsem se C++\nPizza',out:'1: Ranni beh\n2: Ucil jsem se C++\n3: Pizza'},{in:'Jen jeden',out:'1: Jen jeden'}], must:['ios::app'],
    hint:'Uvnitř while (getline(cin, radek)) vytvoř ofstream f("denik.txt", ios::app); Soubor se zavře sám na konci bloku.'},
  ]
},
{
  id:'w15', title:'Dědičnost', icon:'🧬', color:'#63e6be', gxx:true,
  desc:'Třídy, které stavějí na jiných třídách, a polymorfismus.',
  lessons:[
  { id:'w15l1', title:'Rodič a potomek',
    theory:`<p>Třída může <b>zdědit</b> data i metody z jiné třídy:</p>
<pre>class Zvire {
public:
    string jmeno;
    void spi() { cout &lt;&lt; jmeno &lt;&lt; " spí" &lt;&lt; endl; }
};

class Kocka : public Zvire {
public:
    void mnoukej() { cout &lt;&lt; jmeno &lt;&lt; ": Mňau" &lt;&lt; endl; }
};</pre>
<p><code>Kocka</code> má <code>jmeno</code> i <code>spi()</code> po rodiči a přidává vlastní <code>mnoukej()</code>.</p>`,
    task:'Vytvoř třídu <b>Kocka</b>, která dědí ze <b>Zvire</b> a přidá metodu <code>mnoukej()</code>. Main načte jméno a zavolá <code>mnoukej()</code> a pak <code>spi()</code>.',
    starter: HS+'class Zvire {\npublic:\n    string jmeno;\n    void spi() { cout << jmeno << " spí" << endl; }\n};\n\n// sem třídu Kocka\n\nint main() {\n    Kocka k;\n    cin >> k.jmeno;\n    k.mnoukej();\n    k.spi();\n    return 0;\n}\n',
    stdin:'Micka',
    solution: HS+'class Zvire {\npublic:\n    string jmeno;\n    void spi() { cout << jmeno << " spí" << endl; }\n};\n\nclass Kocka : public Zvire {\npublic:\n    void mnoukej() { cout << jmeno << ": Mňau" << endl; }\n};\n\nint main() {\n    Kocka k;\n    cin >> k.jmeno;\n    k.mnoukej();\n    k.spi();\n    return 0;\n}\n',
    tests:[{in:'Micka',out:'Micka: Mňau\nMicka spí'},{in:'Tom',out:'Tom: Mňau\nTom spí'}], must:[':\\s*public\\s+Zvire'],
    hint:'class Kocka : public Zvire { public: void mnoukej() { ... } };'},
  { id:'w15l2', title:'virtual a override',
    theory:`<p>Když má každý potomek dělat stejnou věc <b>jinak</b>, rodič označí metodu jako <code>virtual</code> a potomci ji přepíšou s <code>override</code>:</p>
<pre>class Tvar {
public:
    virtual double obsah() { return 0; }
};
class Ctverec : public Tvar {
public:
    double a;
    double obsah() override { return a * a; }
};</pre>`,
    task:'Doplň třídu <b>Kruh</b> (poloměr r, obsah = 3.14 · r · r) a <b>Obdelnik</b> (a, b). Main je načte a vypíše jejich obsahy přes funkci, která bere <code>Tvar&amp;</code>.<br>Pro <code>2</code> a <code>3 4</code>:<pre>12.56\n12</pre>',
    starter: H+'class Tvar {\npublic:\n    virtual double obsah() { return 0; }\n};\n\n// sem Kruh a Obdelnik\n\nvoid vypis(Tvar& t) {\n    cout << t.obsah() << endl;\n}\n\nint main() {\n    Kruh k;\n    Obdelnik o;\n    cin >> k.r >> o.a >> o.b;\n    vypis(k);\n    vypis(o);\n    return 0;\n}\n',
    stdin:'2\n3 4',
    solution: H+'class Tvar {\npublic:\n    virtual double obsah() { return 0; }\n};\n\nclass Kruh : public Tvar {\npublic:\n    double r;\n    double obsah() override { return 3.14 * r * r; }\n};\n\nclass Obdelnik : public Tvar {\npublic:\n    double a, b;\n    double obsah() override { return a * b; }\n};\n\nvoid vypis(Tvar& t) {\n    cout << t.obsah() << endl;\n}\n\nint main() {\n    Kruh k;\n    Obdelnik o;\n    cin >> k.r >> o.a >> o.b;\n    vypis(k);\n    vypis(o);\n    return 0;\n}\n',
    tests:[{in:'2\n3 4',out:'12.56\n12'},{in:'1\n2 2.5',out:'3.14\n5'}], must:['override'],
    hint:'class Kruh : public Tvar { public: double r; double obsah() override { return 3.14 * r * r; } };'},
  { id:'w15l3', title:'Polymorfismus v seznamu',
    theory:`<p>Do jednoho seznamu můžeš dát různé potomky, když je držíš přes ukazatel na rodiče:</p>
<pre>vector&lt;unique_ptr&lt;Zvire&gt;&gt; farma;
farma.push_back(make_unique&lt;Pes&gt;());
farma.push_back(make_unique&lt;Krava&gt;());
for (auto&amp; z : farma) z-&gt;zvuk();   // každé svůj zvuk</pre>
<p>Rodič s virtuálními metodami má mít <code>virtual ~Zvire() = default;</code>, aby se potomci správně uklidili.</p>`,
    task:'Načítej slova <b>pes</b>, <b>krava</b>, <b>kachna</b>, dokud nepřijde <b>konec</b>. Každé ulož jako správného potomka do <code>vector&lt;unique_ptr&lt;Zvire&gt;&gt;</code>. Pak všechny nech vydat zvuk: <b>Haf</b>, <b>Bů</b>, <b>Kvák</b>.',
    starter: '#include <iostream>\n#include <memory>\n#include <string>\n#include <vector>\nusing namespace std;\n\nclass Zvire {\npublic:\n    virtual ~Zvire() = default;\n    virtual void zvuk() = 0;   // = 0: každý potomek ji musí mít\n};\n\n// sem Pes, Krava, Kachna\n\nint main() {\n    vector<unique_ptr<Zvire>> farma;\n    string s;\n    \n    return 0;\n}\n',
    stdin:'pes kachna krava pes konec',
    solution: '#include <iostream>\n#include <memory>\n#include <string>\n#include <vector>\nusing namespace std;\n\nclass Zvire {\npublic:\n    virtual ~Zvire() = default;\n    virtual void zvuk() = 0;\n};\n\nclass Pes : public Zvire {\npublic:\n    void zvuk() override { cout << "Haf" << endl; }\n};\nclass Krava : public Zvire {\npublic:\n    void zvuk() override { cout << "Bů" << endl; }\n};\nclass Kachna : public Zvire {\npublic:\n    void zvuk() override { cout << "Kvák" << endl; }\n};\n\nint main() {\n    vector<unique_ptr<Zvire>> farma;\n    string s;\n    while (cin >> s && s != "konec") {\n        if (s == "pes") farma.push_back(make_unique<Pes>());\n        else if (s == "krava") farma.push_back(make_unique<Krava>());\n        else if (s == "kachna") farma.push_back(make_unique<Kachna>());\n    }\n    for (auto& z : farma) z->zvuk();\n    return 0;\n}\n',
    tests:[{in:'pes kachna krava pes konec',out:'Haf\nKvák\nBů\nHaf'},{in:'konec',out:''},{in:'krava konec',out:'Bů'}], must:['unique_ptr','override'],
    hint:'Tři malé třídy, každá s void zvuk() override. V cyklu podle slova push_back(make_unique<Pes>()) atd.'},
  ]
},
{
  id:'w16', title:'Knihovna STL', icon:'🧰', color:'#ffe066', gxx:true,
  desc:'Hotové nástroje: map, set a třídění podle vlastního pravidla.',
  lessons:[
  { id:'w16l1', title:'map – slovník',
    theory:`<p><code>map</code> ukládá dvojice <b>klíč → hodnota</b> a drží je seřazené podle klíče (z <code>&lt;map&gt;</code>):</p>
<pre>map&lt;string, int&gt; vek;
vek["Tom"] = 30;
vek["Eva"] = 25;
for (auto&amp; [jmeno, v] : vek)
    cout &lt;&lt; jmeno &lt;&lt; " " &lt;&lt; v &lt;&lt; endl;</pre>
<p>Když klíč neexistuje, <code>vek["X"]</code> ho vytvoří s hodnotou 0. Na počítání ideální.</p>`,
    task:'Načítej slova až do konce vstupu a spočítej, kolikrát se které vyskytuje. Vypiš je abecedně jako <b>slovo: počet</b>.<br>Pro <code>pes kocka pes</code>:<pre>kocka: 1\npes: 2</pre>',
    starter: '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, int> pocty;\n    string s;\n    \n    return 0;\n}\n',
    stdin:'pes kocka pes',
    solution: '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, int> pocty;\n    string s;\n    while (cin >> s) pocty[s]++;\n    for (auto& [slovo, n] : pocty) cout << slovo << ": " << n << endl;\n    return 0;\n}\n',
    tests:[{in:'pes kocka pes',out:'kocka: 1\npes: 2'},{in:'a b c a b a',out:'a: 3\nb: 2\nc: 1'}], must:['map<'],
    hint:'while (cin >> s) pocty[s]++; a pak for (auto& [slovo, n] : pocty).'},
  { id:'w16l2', title:'set – bez opakování',
    theory:`<p><code>set</code> je množina: každá hodnota je v ní <b>jen jednou</b> a je seřazená (z <code>&lt;set&gt;</code>).</p>
<pre>set&lt;int&gt; s = {3, 1, 3, 2};
cout &lt;&lt; s.size();          // 3
if (s.count(2)) cout &lt;&lt; "je tam";</pre>`,
    task:'Načti n a n čísel. Vypiš na první řádek, kolik je <b>různých</b> čísel, a na druhý je vypiš seřazená a bez opakování.<br>Pro <code>6</code> a <code>5 1 5 3 1 5</code>:<pre>3\n1 3 5</pre>',
    starter: '#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    set<int> s;\n    \n    return 0;\n}\n',
    stdin:'6\n5 1 5 3 1 5',
    solution: '#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    set<int> s;\n    for (int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        s.insert(x);\n    }\n    cout << s.size() << endl;\n    bool prvni = true;\n    for (int x : s) {\n        if (!prvni) cout << " ";\n        cout << x;\n        prvni = false;\n    }\n    return 0;\n}\n',
    tests:[{in:'6\n5 1 5 3 1 5',out:'3\n1 3 5'},{in:'1\n7',out:'1\n7'},{in:'4\n2 2 2 2',out:'1\n2'}], must:['set<','insert'],
    hint:'s.insert(x) pro každé číslo, pak s.size() a cyklus for (int x : s).'},
  { id:'w16l3', title:'Třídění podle pravidla – lambda',
    theory:`<p><code>sort</code> umí třídit podle tvého pravidla. Pravidlo zapíšeš jako <b>lambdu</b>, malou funkci přímo na místě:</p>
<pre>sort(v.begin(), v.end(), [](int a, int b) {
    return a &gt; b;      // větší dřív = sestupně
});</pre>
<p>Lambda vrací <code>true</code>, když má <code>a</code> být před <code>b</code>.</p>`,
    task:'Načti n hráčů (jméno a body). Seřaď je podle bodů <b>sestupně</b>, při shodě bodů abecedně podle jména. Vypiš je jako <b>pořadí. jméno body</b>.<br>Pro <code>3</code> a <code>Eva 5 Tom 9 Ana 5</code>:<pre>1. Tom 9\n2. Ana 5\n3. Eva 5</pre>',
    starter: '#include <iostream>\n#include <string>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nstruct Hrac {\n    string jmeno;\n    int body;\n};\n\nint main() {\n    int n;\n    cin >> n;\n    vector<Hrac> h(n);\n    for (auto& x : h) cin >> x.jmeno >> x.body;\n    \n    return 0;\n}\n',
    stdin:'3\nEva 5 Tom 9 Ana 5',
    solution: '#include <iostream>\n#include <string>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nstruct Hrac {\n    string jmeno;\n    int body;\n};\n\nint main() {\n    int n;\n    cin >> n;\n    vector<Hrac> h(n);\n    for (auto& x : h) cin >> x.jmeno >> x.body;\n    sort(h.begin(), h.end(), [](const Hrac& a, const Hrac& b) {\n        if (a.body != b.body) return a.body > b.body;\n        return a.jmeno < b.jmeno;\n    });\n    for (int i = 0; i < n; i++) cout << i + 1 << ". " << h[i].jmeno << " " << h[i].body << endl;\n    return 0;\n}\n',
    tests:[{in:'3\nEva 5 Tom 9 Ana 5',out:'1. Tom 9\n2. Ana 5\n3. Eva 5'},{in:'2\nB 1 A 1',out:'1. A 1\n2. B 1'}], must:['sort','\\[\\s*\\]\\s*\\('],
    hint:'V lambdě: if (a.body != b.body) return a.body > b.body; jinak return a.jmeno < b.jmeno;'},
  ]
},
{
  id:'w17', title:'Výjimky, šablony a finále', icon:'🏆', color:'#ffd43b', gxx:true,
  desc:'Ošetření chyb, obecný kód a závěrečný projekt kurzu.',
  lessons:[
  { id:'w17l1', title:'try a catch',
    theory:`<p>Když se něco pokazí, funkce může <b>vyhodit výjimku</b>. Ty ji <b>chytíš</b> přes <code>try</code> a <code>catch</code> a program nespadne:</p>
<pre>try {
    int x = stoi("abc");   // text na číslo, tady selže
} catch (const exception&amp; e) {
    cout &lt;&lt; "Chyba!" &lt;&lt; endl;
}</pre>
<p><code>stoi</code> převádí string na int.</p>`,
    task:'Načítej slova až do konce vstupu. Každé zkus převést přes <code>stoi</code> a přičíst k součtu. Když to nejde, vypiš <b>Nečíslo: SLOVO</b>. Nakonec vypiš <b>Součet: N</b>.',
    starter: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    int soucet = 0;\n    \n    return 0;\n}\n',
    stdin:'10 pes 5 -3',
    solution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    int soucet = 0;\n    while (cin >> s) {\n        try {\n            soucet += stoi(s);\n        } catch (const exception& e) {\n            cout << "Nečíslo: " << s << endl;\n        }\n    }\n    cout << "Součet: " << soucet << endl;\n    return 0;\n}\n',
    tests:[{in:'10 pes 5 -3',out:'Nečíslo: pes\nSoučet: 12'},{in:'abc',out:'Nečíslo: abc\nSoučet: 0'},{in:'1 2 3',out:'Součet: 6'}], must:['try','catch','stoi'],
    hint:'Uvnitř cyklu: try { soucet += stoi(s); } catch (const exception& e) { cout << ... }'},
  { id:'w17l2', title:'Vlastní výjimka – throw',
    theory:`<p>Výjimku můžeš vyhodit i sám přes <code>throw</code>:</p>
<pre>double vydel(double a, double b) {
    if (b == 0) throw runtime_error("Dělení nulou");
    return a / b;
}</pre>
<p>V <code>catch</code> zjistíš zprávu přes <code>e.what()</code>. Potřebuješ <code>&lt;stdexcept&gt;</code>.</p>`,
    task:'Dopiš funkci <b>vydel</b>, která při dělení nulou vyhodí <code>runtime_error("Dělení nulou")</code>. Main načítá dvojice čísel a vypisuje výsledek nebo <b>Chyba: ZPRÁVA</b>.',
    starter: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\ndouble vydel(double a, double b) {\n    // sem tvůj kód\n}\n\nint main() {\n    double a, b;\n    while (cin >> a >> b) {\n        try {\n            cout << vydel(a, b) << endl;\n        } catch (const exception& e) {\n            cout << "Chyba: " << e.what() << endl;\n        }\n    }\n    return 0;\n}\n',
    stdin:'10 4\n1 0\n9 3',
    solution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\ndouble vydel(double a, double b) {\n    if (b == 0) throw runtime_error("Dělení nulou");\n    return a / b;\n}\n\nint main() {\n    double a, b;\n    while (cin >> a >> b) {\n        try {\n            cout << vydel(a, b) << endl;\n        } catch (const exception& e) {\n            cout << "Chyba: " << e.what() << endl;\n        }\n    }\n    return 0;\n}\n',
    tests:[{in:'10 4\n1 0\n9 3',out:'2.5\nChyba: Dělení nulou\n3'},{in:'0 0',out:'Chyba: Dělení nulou'}], must:['throw'],
    hint:'if (b == 0) throw runtime_error("Dělení nulou"); return a / b;'},
  { id:'w17l3', title:'Šablony – jeden kód pro všechny typy',
    theory:`<p><b>Šablona</b> je funkce, která funguje pro libovolný typ. Typ se doplní sám podle toho, s čím ji zavoláš:</p>
<pre>template &lt;typename T&gt;
T vetsi(T a, T b) {
    return a &gt; b ? a : b;
}
vetsi(3, 7);          // int
vetsi(2.5, 1.5);      // double
vetsi(string("a"), string("b"));</pre>
<p>Takhle fungují i <code>vector&lt;T&gt;</code>, <code>map</code> a <code>sort</code> v knihovně.</p>`,
    task:'Napiš šablonu <b>nejvetsi</b>, která dostane <code>const vector&lt;T&gt;&amp;</code> a vrátí největší prvek. Main ji zavolá na čísla i na slova.<br>Pro <code>3 9 2</code> a <code>pes auto zebra</code>:<pre>9\nzebra</pre>',
    starter: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// sem šablonu nejvetsi\n\nint main() {\n    vector<int> c(3);\n    vector<string> s(3);\n    for (auto& x : c) cin >> x;\n    for (auto& x : s) cin >> x;\n    cout << nejvetsi(c) << endl << nejvetsi(s) << endl;\n    return 0;\n}\n',
    stdin:'3 9 2\npes auto zebra',
    solution: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\ntemplate <typename T>\nT nejvetsi(const vector<T>& v) {\n    T m = v[0];\n    for (const T& x : v) if (x > m) m = x;\n    return m;\n}\n\nint main() {\n    vector<int> c(3);\n    vector<string> s(3);\n    for (auto& x : c) cin >> x;\n    for (auto& x : s) cin >> x;\n    cout << nejvetsi(c) << endl << nejvetsi(s) << endl;\n    return 0;\n}\n',
    tests:[{in:'3 9 2\npes auto zebra',out:'9\nzebra'},{in:'-5 -1 -9\nb a c',out:'-1\nc'}], must:['template'],
    hint:'template <typename T> T nejvetsi(const vector<T>& v) { T m = v[0]; for (...) if (x > m) m = x; return m; }'},
  { id:'w17p1', title:'🏁 Finále: Piškvorky', project:true,
    theory:`<p>Závěrečný projekt kurzu! Naprogramuj piškvorky 3×3 pro dva hráče.</p>
<p>Rozděl si to na malé kroky, nemusíš všechno naráz:</p>
<ol><li>Pole 3×3 znaků, prázdné políčko je <code>.</code></li><li>Funkce, která pole vypíše</li><li>Funkce, která zjistí, jestli hráč vyhrál (3 řádky, 3 sloupce, 2 úhlopříčky)</li><li>Hlavní cyklus: tahy střídavě X a O</li></ol>`,
    task:`Na vstupu jsou tahy <code>řádek sloupec</code> (1 až 3). Začíná <b>X</b>, hráči se střídají.<ul>
<li>Když je políčko obsazené, vypiš <b>Obsazeno</b> a na tahu zůstává stejný hráč.</li>
<li>Když někdo vyhraje, další tahy už neber.</li></ul>
Na konci vypiš pole (3 řádky) a pak jedno z: <b>Vyhrál X</b>, <b>Vyhrál O</b>, <b>Remíza</b> (plné pole), <b>Hra pokračuje</b>.`,
    starter: '#include <iostream>\nusing namespace std;\n\nchar pole[3][3];\n\nvoid vypis() {\n    // vypiš 3 řádky pole\n}\n\nbool vyhral(char h) {\n    // zkontroluj řádky, sloupce a úhlopříčky\n    return false;\n}\n\nint main() {\n    for (int r = 0; r < 3; r++)\n        for (int s = 0; s < 3; s++) pole[r][s] = \'.\';\n    \n    return 0;\n}\n',
    stdin:'1 1\n2 2\n1 2\n3 3\n1 3',
    solution: '#include <iostream>\nusing namespace std;\n\nchar pole[3][3];\n\nvoid vypis() {\n    for (int r = 0; r < 3; r++) {\n        for (int s = 0; s < 3; s++) cout << pole[r][s];\n        cout << endl;\n    }\n}\n\nbool vyhral(char h) {\n    for (int i = 0; i < 3; i++) {\n        if (pole[i][0] == h && pole[i][1] == h && pole[i][2] == h) return true;\n        if (pole[0][i] == h && pole[1][i] == h && pole[2][i] == h) return true;\n    }\n    if (pole[0][0] == h && pole[1][1] == h && pole[2][2] == h) return true;\n    if (pole[0][2] == h && pole[1][1] == h && pole[2][0] == h) return true;\n    return false;\n}\n\nint main() {\n    for (int r = 0; r < 3; r++)\n        for (int s = 0; s < 3; s++) pole[r][s] = \'.\';\n    char hrac = \'X\';\n    char vitez = 0;\n    int tahu = 0;\n    int r, s;\n    while (!vitez && cin >> r >> s) {\n        if (pole[r - 1][s - 1] != \'.\') {\n            cout << "Obsazeno" << endl;\n            continue;\n        }\n        pole[r - 1][s - 1] = hrac;\n        tahu++;\n        if (vyhral(hrac)) vitez = hrac;\n        hrac = (hrac == \'X\') ? \'O\' : \'X\';\n    }\n    vypis();\n    if (vitez) cout << "Vyhrál " << vitez << endl;\n    else if (tahu == 9) cout << "Remíza" << endl;\n    else cout << "Hra pokračuje" << endl;\n    return 0;\n}\n',
    tests:[{in:'1 1\n2 2\n1 2\n3 3\n1 3',out:'XXX\n.O.\n..O\nVyhrál X'},
           {in:'1 1\n1 1\n2 1\n1 2\n3 1\n2 2\n3 2\n3 3',out:'Obsazeno\nXX.\nOX.\nOOX\nVyhrál X'},
           {in:'1 3\n1 1\n2 2\n3 1\n2 1\n2 3\n1 2\n3 2\n3 3',out:'OXX\nXXO\nOOX\nRemíza'},
           {in:'2 2',out:'...\n.X.\n...\nHra pokračuje'},
           {in:'1 1\n2 1\n1 2\n2 2\n3 3\n2 3\n1 3',out:'XX.\nOOO\n..X\nVyhrál O'}],
    must:['vyhral','\\[3\\]\\s*\\[3\\]'],
    hint:'Hlavní cyklus: while (!vitez && cin >> r >> s). Indexy pole jsou o 1 menší (r - 1, s - 1). Hráče prohodíš přes hrac = (hrac == \'X\') ? \'O\' : \'X\';'},
  ]
}
];
// Opakovací kvíz na konci každého světa: jedna otázka naráz.
// q = otázka (HTML), o = možnosti (text), a = index správné, e = vysvětlení (HTML)
const REVIEW = {
w1: [
  {q:`Co vypíše tenhle řádek?<pre>cout << "Ahoj" << endl << "svete";</pre>`, o:[`Ahoj svete (na jednom řádku)`,`Ahoj, pod tím svete`,`Chybu při překladu`], a:1, e:`<code>endl</code> ukončí řádek, takže <code>svete</code> je o řádek níž.`},
  {q:`Čím začíná jednořádkový komentář?`, o:[`#`,`--`,`//`], a:2, e:`Všechno za <code>//</code> až do konce řádku překladač ignoruje.`},
  {q:`Co chybí na konci řádku <code>cout << "Ahoj" << endl</code>?`, o:[`Středník ;`,`Závorka )`,`Nic, je to v pořádku`], a:0, e:`Každý příkaz v C++ končí středníkem.`},
  {q:`Kde začíná běh programu?`, o:[`Na prvním řádku souboru`,`Ve funkci main`,`U #include`], a:1, e:`Program vždy startuje ve funkci <code>int main()</code>.`},
],
w2: [
  {q:`Kolik je <code>7 / 2</code>, když jsou obě čísla <code>int</code>?`, o:[`3.5`,`4`,`3`], a:2, e:`Dělení dvou celých čísel zahodí desetinnou část.`},
  {q:`Kolik je <code>17 % 5</code>?`, o:[`2`,`3`,`3.4`], a:0, e:`<code>%</code> je zbytek po dělení: 17 = 3 × 5 + <b>2</b>.`},
  {q:`Jaký typ použiješ na jeden znak, třeba <code>'A'</code>?`, o:[`bool`,`char`,`double`], a:1, e:`<code>char</code> drží jeden znak v jednoduchých uvozovkách.`},
  {q:`Co se stane?<pre>const int MAX = 10;\nMAX = 20;</pre>`, o:[`MAX bude 20`,`MAX zůstane 10 a program poběží`,`Chyba při překladu`], a:2, e:`<code>const</code> hodnotu zamkne, změnu překladač nedovolí.`},
  {q:`Co udělá <code>cin >> vek;</code>?`, o:[`Načte hodnotu z klávesnice do proměnné vek`,`Vypíše vek`,`Smaže vek`], a:0, e:`<code>cin</code> čte vstup, <code>cout</code> vypisuje.`},
],
w3: [
  {q:`Platí podmínka <code>x > 5 && x < 10</code> pro <code>x = 10</code>?`, o:[`Ano`,`Ne`], a:1, e:`<code>10 < 10</code> neplatí, a u <code>&&</code> musí platit obě části.`},
  {q:`Co vypíše tenhle kód pro <code>x = 3</code>?<pre>if (x > 5) cout << "A";\nelse if (x > 2) cout << "B";\nelse cout << "C";</pre>`, o:[`A`,`C`,`B`], a:2, e:`První podmínka neplatí, druhá ano, takže <b>B</b>. Zbytek se už nekontroluje.`},
  {q:`Co se stane ve <code>switch</code>, když u <code>case</code> zapomeneš <code>break</code>?`, o:[`Program spadne`,`Pokračuje i do dalšího case`,`Nic, break je nepovinný a nic nemění`], a:1, e:`Bez <code>break</code> program „propadne“ do dalšího <code>case</code>.`},
  {q:`Jaký je rozdíl mezi <code>x == 5</code> a <code>x = 5</code>?`, o:[`== porovnává, = přiřazuje`,`Žádný`,`= porovnává, == přiřazuje`], a:0, e:`V podmínce skoro vždy chceš <code>==</code>.`},
],
w4: [
  {q:`Co vypíše tenhle kód?<pre>for (int i = 0; i < 3; i++) cout << i;</pre>`, o:[`123`,`012`,`0123`], a:1, e:`Začíná na 0 a skončí, když <code>i</code> dosáhne 3.`},
  {q:`Co udělá <code>break</code> uvnitř cyklu?`, o:[`Přeskočí jedno kolo`,`Spustí cyklus znovu od začátku`,`Ukončí celý cyklus`], a:2, e:`<code>break</code> z cyklu hned vyskočí.`},
  {q:`Co udělá <code>continue</code>?`, o:[`Přeskočí zbytek kola a jde na další kolo`,`Ukončí cyklus`,`Ukončí program`], a:0, e:`Na rozdíl od <code>break</code> cyklus pokračuje dál.`},
  {q:`Kolik hvězdiček se vypíše?<pre>for (int i = 0; i < 3; i++)\n  for (int j = 0; j < 4; j++)\n    cout << "*";</pre>`, o:[`7`,`12`,`4`], a:1, e:`Vnitřní cyklus proběhne 4× pro každé ze 3 kol vnějšího: 3 × 4 = 12.`},
  {q:`Kolikrát proběhne <code>while (x < 0)</code>, když je na začátku <code>x = 5</code>?`, o:[`Jednou`,`Nekonečněkrát`,`Ani jednou`], a:2, e:`<code>while</code> kontroluje podmínku předem, a ta hned neplatí.`},
],
w5: [
  {q:`Co vrátí <code>f(4)</code>?<pre>int f(int a) { return a * 2; }</pre>`, o:[`8`,`4`,`2`], a:0, e:`Funkce vrátí dvojnásobek parametru.`},
  {q:`Co znamená <code>void</code> u funkce?`, o:[`Funkce nic nedělá`,`Funkce nevrací žádnou hodnotu`,`Funkce nemá parametry`], a:1, e:`<code>void</code> funkce něco udělá (třeba vypíše), ale nic nevrací.`},
  {q:`Jakou hodnotu má <code>a</code> na konci?<pre>void zmen(int x) { x = 10; }\nint a = 1;\nzmen(a);</pre>`, o:[`10`,`11`,`1`], a:2, e:`Parametr dostal kopii, takže původní <code>a</code> se nezmění.`},
  {q:`Co musí mít každá rekurzivní funkce?`, o:[`Aspoň dva parametry`,`Základní případ, kdy se přestane volat`,`Cyklus for`], a:1, e:`Bez základního případu by se volala donekonečna.`},
],
w6: [
  {q:`Jaký je poslední platný index pole <code>int a[5]</code>?`, o:[`5`,`4`,`6`], a:1, e:`Indexy jdou od 0, takže 0 až 4.`},
  {q:`Kolik je <code>a[1]</code>?<pre>int a[3] = {4, 7, 1};</pre>`, o:[`4`,`1`,`7`], a:2, e:`<code>a[0]</code> je 4, <code>a[1]</code> je 7.`},
  {q:`Kolik prvků má <code>int m[2][3]</code>?`, o:[`6`,`5`,`23`], a:0, e:`2 řádky × 3 sloupce = 6.`},
  {q:`Co se stane, když u pole o velikosti 5 přečteš <code>a[5]</code>?`, o:[`Dostaneš 0`,`Čteš mimo pole, výsledek není definovaný`,`Pole se samo zvětší`], a:1, e:`C++ meze nehlídá. Takovou chybu musíš hlídat sám.`},
],
w7: [
  {q:`Co vrátí <code>&x</code>?`, o:[`Hodnotu x`,`Adresu x v paměti`,`x krát 2`], a:1, e:`<code>&</code> před proměnnou dává její adresu.`},
  {q:`Kolik je na konci <code>x</code>?<pre>int x = 5;\nint* p = &x;\n*p = 8;</pre>`, o:[`8`,`5`,`13`], a:0, e:`<code>*p</code> je to samé místo v paměti jako <code>x</code>.`},
  {q:`Kam ukazuje <code>p + 1</code>, když je <code>p</code> typu <code>int*</code>?`, o:[`O jeden bajt dál`,`Na stejné místo`,`Na další int v paměti`], a:2, e:`Ukazatelová aritmetika počítá v celých prvcích, ne v bajtech.`},
  {q:`Proč funkce <code>prohod</code> bere ukazatele?`, o:[`Aby mohla změnit původní proměnné`,`Protože je to rychlejší na psaní`,`Ukazatele jsou povinné u každé funkce`], a:0, e:`Přes adresu funkce zapisuje přímo do původních proměnných.`},
],
w8: [
  {q:`Kolik je <code>s.length()</code> pro <code>string s = "Ahoj";</code>?`, o:[`5`,`4`,`3`], a:1, e:`Ahoj má 4 znaky.`},
  {q:`Jaký je rozdíl mezi <code>cin >> s</code> a <code>getline(cin, s)</code>?`, o:[`Žádný`,`cin >> s čte celý řádek`,`getline načte celý řádek i s mezerami`], a:2, e:`<code>cin >> s</code> skončí u první mezery.`},
  {q:`Co vrátí <code>s.find("x")</code>, když tam x není?`, o:[`string::npos`,`0`,`-0`], a:0, e:`Proto se píše <code>if (s.find("x") != string::npos)</code>.`},
  {q:`Co je <code>s.substr(1, 3)</code> pro <code>s = "Program"</code>?`, o:[`Pro`,`rog`,`rogr`], a:1, e:`Od indexu 1 vezme 3 znaky: r, o, g.`},
],
w9: [
  {q:`Co udělá <code>v.push_back(5)</code>?`, o:[`Přidá 5 na začátek`,`Přepíše první prvek`,`Přidá 5 na konec`], a:2, e:`Vector se sám zvětší o jeden prvek.`},
  {q:`Jak vypadá <code>v</code> po seřazení?<pre>vector<int> v = {3, 1, 2};\nsort(v.begin(), v.end());</pre>`, o:[`1 2 3`,`3 2 1`,`3 1 2`], a:0, e:`<code>sort</code> řadí vzestupně.`},
  {q:`Kolik je <code>v.size()</code> po třech <code>push_back</code> do prázdného vectoru?`, o:[`2`,`3`,`4`], a:1, e:`Každý <code>push_back</code> přidá jeden prvek.`},
  {q:`Co dělá <code>for (int x : v)</code>?`, o:[`Projde jen první prvek`,`Projde indexy 0 až x`,`Projde všechny prvky vectoru`], a:2, e:`Rozsahový for vezme postupně každý prvek.`},
],
w10: [
  {q:`Jak se dostaneš k <code>x</code> u proměnné <code>Bod b</code>?<pre>struct Bod { int x, y; };</pre>`, o:[`b.x`,`b->x`,`Bod.x`], a:0, e:`U proměnné se používá tečka.`},
  {q:`Jak zapíšeš hodnotu z <code>enum class Barva { Cervena, Zelena };</code>?`, o:[`Zelena`,`Barva::Zelena`,`Barva.Zelena`], a:1, e:`<code>enum class</code> vyžaduje jméno typu a <code>::</code>.`},
  {q:`K čemu je <code>struct</code>?`, o:[`Ke zrychlení programu`,`K opakování kódu`,`Ke spojení souvisejících dat do jednoho typu`], a:2, e:`Například jméno, věk a druh zvířete v jednom typu.`},
  {q:`Co je <code>body[0].y</code>?<pre>vector<Bod> body;\nbody.push_back({1, 2});</pre>`, o:[`2`,`1`,`0`], a:0, e:`<code>{1, 2}</code> nastaví x = 1, y = 2.`},
],
w11: [
  {q:`Kolik je na konci <code>a</code>?<pre>void f(int& x) { x++; }\nint a = 1;\nf(a);</pre>`, o:[`1`,`2`,`0`], a:1, e:`<code>int&</code> je reference, takže funkce mění původní <code>a</code>.`},
  {q:`Proč psát parametr jako <code>const string& s</code>?`, o:[`Aby se text nekopíroval a funkce ho nemohla změnit`,`Aby šel text změnit`,`Je to povinné u stringů`], a:0, e:`Ušetří se kopie a <code>const</code> hlídá, že ho nezměníš.`},
  {q:`Kolik je na konci <code>a</code>?<pre>int a = 1;\nint& r = a;\nr = 7;</pre>`, o:[`1`,`8`,`7`], a:2, e:`Reference je jen jiné jméno pro stejnou proměnnou.`},
  {q:`Který cyklus opravdu zdvojnásobí prvky ve vectoru?`, o:[`for (auto x : v) x *= 2;`,`for (auto& x : v) x *= 2;`,`Oba stejně`], a:1, e:`Bez <code>&</code> měníš jen kopii prvku.`},
],
w12: [
  {q:`Kdo může přímo použít <code>private</code> proměnnou třídy?`, o:[`Kdokoliv`,`Jen funkce main`,`Jen metody té třídy`], a:2, e:`Zvenku se k ní dostaneš jen přes veřejné metody.`},
  {q:`Kdy se zavolá konstruktor?`, o:[`Při vytvoření objektu`,`Při každém volání metody`,`Na konci programu`], a:0, e:`Konstruktor má stejné jméno jako třída a nastaví počáteční hodnoty.`},
  {q:`Jaký je výchozí přístup u <code>class</code> a u <code>struct</code>?`, o:[`Oba public`,`class private, struct public`,`class public, struct private`], a:1, e:`Jinak se <code>class</code> a <code>struct</code> skoro neliší.`},
  {q:`Jak zavoláš metodu <code>stekej</code> objektu <code>pes</code>?`, o:[`stekej(pes);`,`pes::stekej();`,`pes.stekej();`], a:2, e:`Objekt, tečka, metoda a závorky.`},
],
w13: [
  {q:`Jak uvolníš paměť z <code>new int[5]</code>?`, o:[`delete[] p;`,`delete p;`,`Nijak, uvolní se sama`], a:0, e:`K <code>new[]</code> patří <code>delete[]</code>.`},
  {q:`Co je únik paměti (memory leak)?`, o:[`Když program čte mimo pole`,`Paměť z new, kterou nikdo neuvolní`,`Když dojde místo na disku`], a:1, e:`Program si pořád bere paměť a nevrací ji.`},
  {q:`Proč použít <code>unique_ptr</code>?`, o:[`Je rychlejší než int`,`Umí ukazovat na víc věcí naráz`,`Paměť uvolní sám, když zanikne`], a:2, e:`Nemusíš psát <code>delete</code> a nezapomeneš na něj.`},
  {q:`Jak nejlépe vytvoříš <code>unique_ptr&lt;int&gt;</code> s hodnotou 5?`, o:[`make_unique<int>(5)`,`new unique_ptr(5)`,`unique_ptr<int> p = 5;`], a:0, e:`<code>make_unique</code> je doporučený způsob.`},
],
w14: [
  {q:`K čemu je <code>ofstream</code>?`, o:[`Ke čtení ze souboru`,`K zápisu do souboru`,`K mazání souboru`], a:1, e:`<b>o</b> = output (výstup), <b>i</b> = input (vstup).`},
  {q:`Co udělá <code>ofstream f("denik.txt", ios::app);</code>?`, o:[`Soubor smaže`,`Soubor přepíše`,`Bude připisovat na konec souboru`], a:2, e:`Bez <code>ios::app</code> by se starý obsah přepsal.`},
  {q:`Jak dlouho běží <code>while (f >> x)</code>?`, o:[`Dokud se daří načíst další hodnotu`,`Přesně 10×`,`Navždy`], a:0, e:`Na konci souboru čtení selže a cyklus skončí.`},
  {q:`Jak poznáš, že <code>ifstream f("x.txt")</code> soubor neotevřel?`, o:[`Program spadne`,`if (!f)`,`f.size() == 0`], a:1, e:`Stream v chybovém stavu se chová jako <code>false</code>.`},
],
w15: [
  {q:`Co znamená <code>class Pes : public Zvire</code>?`, o:[`Zvire dědí z Pes`,`Pes a Zvire jsou totéž`,`Pes dědí ze Zvire`], a:2, e:`Pes dostane všechno veřejné, co má Zvire, a může přidat své.`},
  {q:`K čemu je <code>virtual</code> u metody?`, o:[`Aby se přes ukazatel na rodiče zavolala metoda potomka`,`Aby byla metoda rychlejší`,`Aby šla zavolat bez objektu`], a:0, e:`Tomu se říká polymorfismus.`},
  {q:`Co hlídá <code>override</code>?`, o:[`Že metoda je private`,`Že opravdu přepisuješ virtuální metodu rodiče`,`Že metoda nic nevrací`], a:1, e:`Když se spleteš v názvu nebo parametrech, překladač to ohlásí.`},
  {q:`Proč má mít rodič <code>virtual</code> destruktor?`, o:[`Aby se objekt nedal smazat`,`Je to jen zvyk, nic to nemění`,`Aby se při mazání přes ukazatel na rodiče zavolal i destruktor potomka`], a:2, e:`Jinak by část objektu nemusela uklidit.`},
],
w16: [
  {q:`Kolik je <code>m["pes"]</code>?<pre>map<string, int> m;\nm["pes"]++;</pre>`, o:[`1`,`0`,`Chyba, klíč neexistuje`], a:0, e:`Chybějící klíč se vytvoří s hodnotou 0 a pak se zvýší na 1.`},
  {q:`Co platí pro <code>set</code>?`, o:[`Pamatuje si pořadí vkládání`,`Každá hodnota je tam jen jednou a je seřazená`,`Může mít stejnou hodnotu víckrát`], a:1, e:`Hodí se třeba na seznam unikátních slov.`},
  {q:`Jak tenhle kód seřadí čísla?<pre>sort(v.begin(), v.end(),\n  [](int a, int b) { return a > b; });</pre>`, o:[`Vzestupně`,`Vůbec`,`Sestupně`], a:2, e:`Lambda říká, že <code>a</code> má být před <code>b</code>, když je větší.`},
  {q:`V jakém pořadí projde <code>for (auto& [k, v] : m)</code> mapu?`, o:[`Podle klíčů seřazeně`,`Náhodně`,`V pořadí vkládání`], a:0, e:`<code>map</code> drží klíče seřazené.`},
],
w17: [
  {q:`Co udělá <code>stoi("abc")</code>?`, o:[`Vrátí 0`,`Vyhodí výjimku`,`Vrátí -1`], a:1, e:`<code>invalid_argument</code> chytíš přes <code>try</code> a <code>catch</code>.`},
  {q:`Chytí <code>catch (const exception& e)</code> výjimku <code>runtime_error</code>?`, o:[`Ne`,`Jen v main`,`Ano, runtime_error dědí z exception`], a:2, e:`Chytání přes rodiče funguje díky dědičnosti.`},
  {q:`Co vrátí <code>e.what()</code>?`, o:[`Text chyby`,`Číslo řádku`,`Typ výjimky jako číslo`], a:0, e:`Je to zpráva, kterou jsi předal při <code>throw</code>.`},
  {q:`K čemu je <code>template&lt;typename T&gt;</code>?`, o:[`Ke zrychlení programu`,`Aby jedna funkce fungovala pro různé typy`,`K vytvoření třídy`], a:1, e:`Třeba <code>nejvetsi</code> pak funguje pro int, double i string.`},
],
};
COURSE.forEach(w => {
  const q = REVIEW[w.id];
  if (q) w.lessons.push({id: w.id + 'q', type: 'quiz', title: 'Opakování', questions: q,
    theory: `<p>Pár rychlých otázek z tohoto světa. Vidíš vždy jen jednu.</p><p>Když netrefíš, nic se neděje, zkus jinou možnost. Po správné odpovědi uvidíš krátké vysvětlení.</p>`});
});
if (typeof module !== 'undefined') module.exports = COURSE;
