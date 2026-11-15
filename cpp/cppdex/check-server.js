// Ověří vzorová řešení všech lekcí (C++ i Python) proti serveru se skutečným g++ a Pythonem.
// Kontroluje testy, povinné konstrukce (must) a že výchozí kód sám neprojde.
// Použití: node check-server.js [http://localhost:8080]
const KURZY=[['cpp',require('./lessons.js')],['python',require('./lessons-py.js')]];
const base=(process.argv[2]||'http://localhost:8080').replace(/\/$/,'');
const norm=s=>s.replace(/\r/g,'').split('\n').map(l=>l.replace(/\s+$/,'')).join('\n').replace(/\n+$/,'');
let lang='cpp';
const run=(code,input)=>fetch(base+'/api/run',{method:'POST',body:JSON.stringify({lang,code,input})}).then(r=>r.json());
(async()=>{let bad=0,n=0;const ids=new Set();
for(const [lg,C] of KURZY){lang=lg;for(const w of C)for(const l of w.lessons){
 if(ids.has(l.id)){bad++;console.log('DUPLICITNÍ ID',l.id);}ids.add(l.id);
 if(l.type==='quiz')continue;n++;
 for(const t of l.tests){const r=await run(l.solution,t.in);
  if(!r.ok||norm(r.out)!==norm(t.out)){bad++;console.log('FAIL',l.id,JSON.stringify(t.in),JSON.stringify(r.out),r.err||'');}}
 for(const m of (l.must||[])) if(!new RegExp(m).test(lang==='python'?l.solution.replace(/#.*$/gm,''):l.solution)){bad++;console.log('MUST',l.id,m);}
 let starterAll=true;
 for(const t of l.tests){const r=await run(l.starter,t.in);if(!r.ok||norm(r.out)!==norm(t.out)){starterAll=false;break;}}
 if(starterAll){bad++;console.log('VÝCHOZÍ KÓD UŽ PROJDE',l.id);}
}}
console.log('lessons',n,'bad',bad);process.exit(bad?1:0);})();
