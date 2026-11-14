// Obsah kurzu. Každá lekce: id, title, theory (HTML), task (HTML), starter, solution, tests [{in, out}], must [regex], hint
// type:'quiz' -> question, options, answer (index), explain
const H = '#include <iostream>\nusing namespace std;\n\n';
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
  id:'w8', title:'Bonus: Moderní C++', icon:'👑', color:'#e599f7',
  desc:'string, vector a třídy – kvízy. Tyto věci si pak zkus v g++ na svém PC.',
  lessons:[
  { id:'w8l1', title:'std::string', type:'quiz',
    theory:`<p>V moderním C++ se texty ukládají do <code>std::string</code> z knihovny <code>&lt;string&gt;</code>. Na rozdíl od pole znaků se samo zvětšuje a umí spoustu věcí:</p>
<pre>#include &lt;string&gt;
string jmeno = "Tom";
jmeno += " Ulrich";
cout &lt;&lt; jmeno.length();   // 10
cout &lt;&lt; jmeno[0];         // T</pre>
<p><i>Pozn.: interpret v téhle stránce string neumí – tyhle příklady si spusť doma (viz bonus na mapě).</i></p>`,
    question:'Co vypíše tento kód?<pre>string s = "C++";\ns += "20";\ncout &lt;&lt; s.length();</pre>',
    options:['3','5','C++20','2'], answer:1,
    explain:'Řetězec se spojí na "C++20", který má 5 znaků.'},
  { id:'w8l2', title:'std::vector', type:'quiz',
    theory:`<p><code>vector</code> je „chytré pole“, které umí měnit velikost:</p>
<pre>#include &lt;vector&gt;
vector&lt;int&gt; v = {4, 2};
v.push_back(7);       // přidá na konec
cout &lt;&lt; v.size();     // 3
for (int x : v) cout &lt;&lt; x;   // 427</pre>`,
    question:'Jakou velikost má vector po tomto kódu?<pre>vector&lt;int&gt; v;\nv.push_back(1);\nv.push_back(2);\nv.pop_back();\nv.push_back(3);</pre>',
    options:['1','2','3','0'], answer:1,
    explain:'Přidáš 1 a 2 (velikost 2), pop_back odebere 2 (velikost 1), pak přidáš 3 → velikost 2.'},
  { id:'w8l3', title:'Třídy a objekty', type:'quiz',
    theory:`<p><b>Třída</b> spojuje data a funkce, které s nimi pracují. Objekt je konkrétní „kus“ třídy:</p>
<pre>class Robot {
public:
    string jmeno;
    int baterie = 100;
    void jed() { baterie -= 10; }
};

Robot q;
q.jmeno = "Quentin";
q.jed();
cout &lt;&lt; q.baterie;   // 90</pre>`,
    question:'Co znamená <code>public:</code> ve třídě?',
    options:['Že třídu může použít jen main','Že členy pod ním jsou přístupné zvenku třídy','Že proměnné jsou konstantní','Že se třída zkompiluje rychleji'], answer:1,
    explain:'public: zpřístupní členy i mimo třídu. Výchozí u class je private – zvenku nepřístupné.'},
  { id:'w8l4', title:'Reference', type:'quiz',
    theory:`<p><b>Reference</b> (<code>int&amp;</code>) je „přezdívka“ pro existující proměnnou. V C++ je to pohodlnější náhrada ukazatelů v parametrech:</p>
<pre>void zdvojnasob(int&amp; x) {
    x *= 2;
}
int a = 4;
zdvojnasob(a);   // a je 8</pre>`,
    question:'Co vypíše?<pre>void f(int x) { x = 99; }\nint main() {\n  int a = 1;\n  f(a);\n  cout &lt;&lt; a;\n}</pre>',
    options:['99','1','0','Chyba kompilace'], answer:1,
    explain:'Parametr x je kopie (není to reference int&), takže a zůstane 1.'},
  ]
}
];
if (typeof module !== 'undefined') module.exports = COURSE;
