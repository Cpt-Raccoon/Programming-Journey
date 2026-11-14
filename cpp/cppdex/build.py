# Sestaví cppdex.html z template.html + jscpp.min.js + lessons.js
t=open('template.html',encoding='utf-8').read()
t=t.replace('/*__JSCPP__*/',open('jscpp.min.js',encoding='utf-8').read(),1)
t=t.replace('/*__LESSONS__*/',open('lessons.js',encoding='utf-8').read(),1)
open('cppdex.html','w',encoding='utf-8').write(t)
print('cppdex.html hotovo,',len(t),'znaků')
