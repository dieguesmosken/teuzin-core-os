(function(){
  var L=document.documentElement.lang==='en'?'en':'pt';
  var T={pt:{pre:'Pré-release · não testada',ok:'Testada',none:'Nenhuma release publicada ainda.',files:'Arquivos',date:'Data',rel:'Release',st:'Estado',ok_b:'Último build: sucesso',bad_b:'Último build: falhou',nob:'Sem informação de build ainda.',when:'em',err:'Não foi possível carregar os dados agora.',mb:' MB'},
         en:{pre:'Pre-release · untested',ok:'Tested',none:'No release published yet.',files:'Files',date:'Date',rel:'Release',st:'Status',ok_b:'Latest build: success',bad_b:'Latest build: failed',nob:'No build information yet.',when:'on',err:'Could not load the data right now.',mb:' MB'}}[L];
  var base=document.body.getAttribute('data-base')||'';
  function fmt(d){try{return new Date(d).toLocaleDateString(L==='en'?'en-GB':'pt-BR')}catch(e){return d}}
  function sz(b){return b>=1048576?Math.round(b/1048576*10)/10+' MB':Math.max(1,Math.round(b/1024))+' KB'}
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
  fetch(base+'data/releases.json').then(function(r){return r.json()}).then(function(rs){
    var box=document.getElementById('releases');box.textContent='';
    if(!rs.length){box.appendChild(el('p','muted',T.none));return}
    var tb=el('table','rel'),h=el('tr');[T.rel,T.st,T.date,T.files].forEach(function(x){h.appendChild(el('th',null,x))});tb.appendChild(h);
    rs.forEach(function(r){var tr=el('tr'),td=el('td'),a=el('a',null,r.name||r.tag);a.href=r.html_url;td.appendChild(a);td.appendChild(el('div','muted',r.tag));tr.appendChild(td);
      var s=el('td');s.appendChild(el('span','badge '+(r.prerelease?'b-pre':'b-ok'),r.prerelease?T.pre:T.ok));tr.appendChild(s);
      tr.appendChild(el('td',null,fmt(r.published_at)));
      var f=el('td','files');(r.assets||[]).forEach(function(x){var l=el('a',null,x.name+' ('+sz(x.size)+')');l.href=x.url;f.appendChild(l)});tr.appendChild(f);tb.appendChild(tr)});
    box.appendChild(tb)}).catch(function(){var b=document.getElementById('releases');if(b)b.textContent=T.err});
  fetch(base+'data/status.json').then(function(r){return r.json()}).then(function(s){
    var b=document.getElementById('build');b.textContent='';
    if(!s||!s.conclusion){b.appendChild(el('span','muted',T.nob));return}
    var ok=s.conclusion==='success';b.appendChild(el('span','badge '+(ok?'b-ok':'b-bad'),ok?T.ok_b:T.bad_b));
    var a=el('a',null,' #'+s.run_number+' '+T.when+' '+fmt(s.updated_at));a.href=s.html_url;b.appendChild(a);
    if(s.latest_release){b.appendChild(el('div','muted','Release: '+s.latest_release))}
  }).catch(function(){var b=document.getElementById('build');if(b)b.textContent=T.err});
})();
