// Ověří vzorová řešení proti serveru se skutečným g++.
// Použití: node check-server.js [http://localhost:8080]
const C=require('./lessons.js');
const base=(process.argv[2]||'http://localhost:8080').replace(/\/$/,'');
const norm=s=>s.replace(/\r/g,'').split('\n').map(l=>l.replace(/\s+$/,'')).join('\n').replace(/\n+$/,'');
(async()=>{let bad=0,n=0;
for(const w of C)for(const l of w.lessons){if(l.type==='quiz')continue;n++;
 for(const t of l.tests){const r=await fetch(base+'/api/run',{method:'POST',body:JSON.stringify({lang:'cpp',code:l.solution,input:t.in})}).then(r=>r.json());
  if(!r.ok||norm(r.out)!==norm(t.out)){bad++;console.log('FAIL',l.id,JSON.stringify(t.in),JSON.stringify(r.out),r.err||'');}}}
console.log('lessons',n,'bad',bad);process.exit(bad?1:0);})();
