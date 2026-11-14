global.window=global; require('./jscpp.min.js'); const C=require('./lessons.js');
const norm=s=>s.replace(/\r/g,'').split('\n').map(l=>l.replace(/\s+$/,'')).join('\n').replace(/\n+$/,'');
function run(c,i){let o='';try{JSCPP.run(c,i||'',{stdio:{write:s=>o+=s},maxTimeout:3000});return o}catch(e){return 'ERR: '+String(e.message||e).slice(0,300)}}
let bad=0,n=0;
for(const w of C)for(const l of w.lessons){ if(l.type==='quiz'){n++;continue;} n++;
 for(const t of l.tests){const o=run(l.solution,t.in); if(norm(o)!==norm(t.out)){bad++;console.log('FAIL',l.id,JSON.stringify(t.in),JSON.stringify(o));}}
 for(const m of (l.must||[])) if(!new RegExp(m).test(l.solution)){bad++;console.log('MUST',l.id,m);}
 const so=run(l.starter,l.tests[0].in); if(norm(so)===norm(l.tests[0].out)) console.log('starter passes?',l.id);
}
console.log('lessons',n,'bad',bad);
