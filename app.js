(() => {
const D=window.WILD_DATA;
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const state={view:"home",kind:"fauna",group:"all",query:"",env:null,id:null,identifyStep:0,answers:{}};

const STATUS={
 confirmed:["🟢","Chañar confirmado","confirmed"],
 region:["🔵","Región","region"],
 possible:["🟡","Posible","possible"],
 unconfirmed:["🔴","No confirmado","unconfirmed"]
};
const esc=v=>String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const badge=s=>{const x=STATUS[s.localStatus]||STATUS.unconfirmed;return '<span class="status '+x[2]+'">'+x[0]+' '+x[1]+'</span>'};
const img=s=>s.image
 ? '<img loading="lazy" src="'+esc(s.image)+'" alt="'+esc(s.commonName)+'">'
 : '<span>'+esc(s.commonName)+'</span>';

function card(s){
 return '<article class="species-card">'+
  '<div class="species-image '+(s.image?"has-image":"")+'">'+img(s)+'</div>'+
  '<div class="species-card-body">'+
   '<div class="card-top"><small>'+ (s.kind==="fauna"?"FAUNA":"FLORA")+'</small>'+badge(s)+'</div>'+
   '<h3>'+esc(s.commonName)+'</h3><p class="scientific"><em>'+esc(s.scientificName)+'</em></p>'+
   '<p>'+esc(s.description)+'</p>'+
   '<div class="card-actions"><button class="text-button" data-action="species" data-id="'+esc(s.id)+'">Conocer especie →</button></div>'+
   '<div class="image-required">📷 '+(s.image?"Foto de referencia incluida":"Falta foto · no publicar como ficha")+'</div>'+
  '</div></article>';
}

function stats(){
 const all=D.species, confirmed=all.filter(s=>s.localStatus==="confirmed").length;
 const region=all.filter(s=>s.localStatus==="region").length;
 const fauna=all.filter(s=>s.kind==="fauna").length, flora=all.filter(s=>s.kind==="flora").length;
 return '<section class="wild-pulse wrap"><div class="section-heading"><div><span class="eyebrow dark">PULSO DEL ATLAS</span><h2>Lo que ya sabemos.</h2></div></div>'+
 '<div class="pulse-grid">'+
 '<article class="pulse-card"><b>'+all.length+'</b><span>especies cargadas</span></article>'+
 '<article class="pulse-card"><b>'+confirmed+'</b><span>con evidencia local</span></article>'+
 '<article class="pulse-card"><b>'+fauna+'</b><span>animales</span></article>'+
 '<article class="pulse-card"><b>'+flora+'</b><span>plantas</span></article>'+
 '</div><div class="quick-rule"><strong>Regla editorial:</strong> una especie puede aparecer en el atlas por evidencia regional, pero no se presenta como confirmada en Chañar sin respaldo local.</div></section>';
}

function home(){
 const f=D.species.filter(s=>s.localStatus==="confirmed").slice(0,3);
 return '<section class="hero"><div class="hero-content"><span class="eyebrow">SAN PATRICIO DEL CHAÑAR · NEUQUÉN</span>'+
 '<h1>LA VIDA QUE<br><em>TENEMOS ALREDEDOR.</em></h1>'+
 '<p>Un atlas local para conocer, reconocer y comprender la fauna y la flora de nuestro lugar.</p>'+
 '<div class="hero-actions"><button class="primary" data-action="catalog" data-kind="fauna">🐦 Conocer animales</button><button class="secondary" data-action="catalog" data-kind="flora">🌿 Conocer plantas</button></div></div></section>'+
 '<section class="home-intro wrap"><div><span class="eyebrow dark">OCARINA WILD</span><h2>Empezamos por lo que<br><em>vive acá.</em></h2></div>'+
 '<p>La evidencia manda. Cada ficha diferencia lo confirmado localmente de lo que conocemos a escala regional y todavía necesita verificación.</p></section>'+
 '<section class="door-grid wrap">'+
 '<button class="door fauna" data-action="catalog" data-kind="fauna"><span>🐦</span><strong>ANIMALES</strong><small>Aves, mamíferos, reptiles, anfibios, peces e invertebrados.</small></button>'+
 '<button class="door flora" data-action="catalog" data-kind="flora"><span>🌿</span><strong>PLANTAS</strong><small>Árboles, arbustos, hierbas, cactáceas y más.</small></button>'+
 '<button class="door territory" data-action="environments"><span>🏞️</span><strong>AMBIENTES</strong><small>Descubrí qué relación existe entre el lugar y las especies.</small></button>'+
 '<button class="door identify" data-action="identify"><span>🔎</span><strong>¿QUÉ VISTE?</strong><small>Observá, respondé y acercate a una posible identificación.</small></button>'+
 '</section>'+
 '<section class="feature wrap"><div class="section-heading"><div><span class="eyebrow dark">HOY CONOCEMOS</span><h2>Especies de nuestro alrededor.</h2></div><button class="text-button" data-action="catalog">Ver catálogo →</button></div>'+
 '<div class="species-grid">'+f.map(card).join("")+'</div></section>'+
 stats()+
 '<section class="learn-strip"><div class="wrap learn-grid"><div><span class="eyebrow">PARA TODOS</span><h2>Aprender no tiene edad.</h2><p>La misma información puede leerse de forma sencilla, ampliarse para estudiar y profundizar con datos científicos y fuentes.</p></div><button class="light-button" data-action="learn">Entrar a APRENDER →</button></div></section>'+
 '<section class="principle wrap"><span class="eyebrow dark">NUESTRO PRINCIPIO</span><h2>Conocer → Reconocer → Valorar → Cuidar</h2><p>Si una función no ayuda a conocer mejor la vida local, no pertenece a OCARINA WILD.</p><div class="principle-pills"><span>📷 FOTO EN CADA FICHA</span><span>📍 EVIDENCIA LOCAL DIFERENCIADA</span><span>🔬 NOMBRE CIENTÍFICO</span><span>🌿 CHÁÑAR PRIMERO</span></div></section>';
}

function head(k,t,p,back){
 return '<section class="page-head"><div class="wrap">'+(back?'<button class="back" data-action="'+back+'">← Volver</button>':"")+
 '<span class="eyebrow dark">'+esc(k)+'</span><h1>'+esc(t)+'</h1><p>'+esc(p)+'</p></div></section>';
}

function catalog(){
 const list=D.species.filter(s=>s.kind===state.kind);
 const gs=D.groups.filter(g=>g.type===state.kind);
 const results=filtered(list);
 return head("CATÁLOGO LOCAL",state.kind==="flora"?"PLANTAS":"ANIMALES","Buscá por nombre común, nombre científico o grupo. Las fotos son de referencia salvo que una ficha indique un registro local.","home")+
 '<section class="catalog wrap"><div class="search-row"><input id="catalog-search" value="'+esc(state.query)+'" placeholder="Buscar especie, nombre científico o palabra..." aria-label="Buscar especie"><button class="primary" data-action="clear">Limpiar</button></div>'+
 '<div class="filter-row"><button class="filter '+(state.group==="all"?"active":"")+'" data-group="all">Todas</button>'+gs.map(g=>'<button class="filter '+(state.group===g.id?"active":"")+'" data-group="'+g.id+'">'+g.icon+' '+esc(g.label)+'</button>').join("")+'</div>'+
 '<div class="evidence-bar"><span class="evidence-chip">🟢 Chañar confirmado</span><span class="evidence-chip">🔵 Región</span><span class="evidence-chip">🟡 Posible</span><span class="evidence-chip">📷 Foto obligatoria</span></div>'+
 '<div id="results" class="species-grid">'+(results.length?results.map(card).join(""):'<div class="catalog-empty">No encontramos coincidencias. Probá con otro nombre o grupo.</div>')+'</div></section>';
}

function filtered(list){
 const q=state.query.trim().toLowerCase();
 return list.filter(s=>(state.group==="all"||s.group===state.group)&&[s.commonName,s.scientificName,s.description,s.group].join(" ").toLowerCase().includes(q));
}

function environments(){
 return head("TERRITORIO","AMBIENTES","El lugar ayuda a entender la vida que encontramos en él.","home")+
 '<section class="env-list wrap">'+D.environments.map(e=>'<button class="env-card" data-action="env" data-env="'+e.id+'"><span>'+e.icon+'</span><div><strong>'+esc(e.label)+'</strong><p>'+esc(e.text)+'</p></div></button>').join("")+'</section>'+
 '<div class="note wrap"><strong>Dato local:</strong> el Dique Compensador El Chañar fue declarado Área Natural Protegida Municipal en octubre de 2006. <a href="https://sanpatricio.gob.ar/nuestra" target="_blank" rel="noopener">Fuente municipal →</a></div>';
}

function environment(){
 const e=D.environments.find(x=>x.id===state.env), list=D.species.filter(s=>s.environments.includes(state.env));
 return head(e.icon+" AMBIENTE",e.label,e.text,"environments")+
 '<section class="section-block wrap"><div class="section-heading"><div><span class="eyebrow dark">ESPECIES RELACIONADAS</span><h2>¿Qué podemos encontrar?</h2></div></div>'+
 '<div class="species-grid">'+(list.length?list.map(card).join(""):'<div class="catalog-empty">Todavía no hay fichas relacionadas con este ambiente.</div>')+'</div></section>';
}

function species(){
 const s=D.species.find(x=>x.id===state.id);
 if(!s)return head("ERROR","Especie no encontrada","La ficha solicitada no existe.","catalog");
 const status=STATUS[s.localStatus]||STATUS.unconfirmed;
 const sourceType=s.sourceType==="official"?"Fuente oficial":"Fuente científica / ambiental";
 const sources=(s.sources||[]).map(x=>'<li><a href="'+esc(x.url)+'" target="_blank" rel="noopener">'+esc(x.label)+' ↗</a></li>').join("");
 return '<section class="species-hero wrap"><button class="back" data-action="catalog" data-kind="'+esc(s.kind)+'">← Volver al catálogo</button><div class="species-hero-grid">'+
 '<div><div class="species-main-image '+(s.image?"has-image":"")+'">'+img(s)+'</div>'+
 (s.image?'<div class="image-meta"><strong>📷 Foto de referencia</strong><span>'+esc(s.imageCredit||"Fuente de imagen indicada en la ficha.")+'</span><small>'+esc(s.imageNote||"La imagen no demuestra presencia local.")+'</small><a href="'+esc(s.imageSourceUrl||s.image)+'" target="_blank" rel="noopener">Ver fuente de la imagen ↗</a></div>':'')+
 '</div><div class="species-title"><span class="eyebrow dark">'+(s.kind==="fauna"?"FAUNA":"FLORA")+' · '+esc(s.group)+'</span><h1>'+esc(s.commonName)+'</h1><p class="scientific large"><em>'+esc(s.scientificName)+'</em></p>'+badge(s)+'<p class="lead">'+esc(s.description)+'</p></div></div></section>'+
 '<section class="species-content wrap"><div class="level-grid">'+
 '<article class="level-card"><span>01</span><h2>CONOCÉ</h2><h3>¿Cómo reconocerla?</h3><p>'+esc(s.identification)+'</p><h3>¿Dónde podemos encontrarla?</h3><p>'+esc(s.habitat)+'</p><h3>¿Qué hace?</h3><p>'+esc(s.behavior)+'</p></article>'+
 '<article class="level-card"><span>02</span><h2>APRENDÉ</h2><h3>Alimentación</h3><p>'+esc(s.diet)+'</p><h3>Reproducción</h3><p>'+esc(s.reproduction)+'</p><h3>Conservación</h3><p>'+esc(s.conservation)+'</p></article></div>'+
 '<article class="deep-card"><span class="eyebrow dark">03 · PROFUNDIZÁ</span><h2>¿Cómo lo sabemos?</h2>'+
 '<div class="local-evidence"><strong>'+status[0]+' '+status[1]+'</strong><span>'+esc(s.localNote)+'</span></div>'+
 '<div class="source-type"><strong>Tipo de evidencia:</strong> '+sourceType+'</div>'+
 '<h3>Fuentes utilizadas</h3><ul class="source-list">'+sources+'</ul>'+
 '<p class="credit">La fotografía de esta ficha es visualmente orientativa. Un registro fotográfico local requiere autor, fecha y contexto de observación.</p>'+
 '</article></section>';
}

function identify(){
 const qs=[
  ["kind","¿Animal o planta?",[["fauna","🐾 Animal"],["flora","🌿 Planta"]]],
  ["group","¿A qué grupo se parece?",D.groups.filter(g=>g.type===state.answers.kind).map(g=>[g.id,g.icon+" "+g.label])],
  ["env","¿Dónde lo viste?",D.environments.map(e=>[e.id,e.icon+" "+e.label])]
 ];
 if(state.identifyStep>=qs.length){
  let c=D.species.filter(s=>(!state.answers.kind||s.kind===state.answers.kind)&&(!state.answers.group||s.group===state.answers.group)&&(!state.answers.env||s.environments.includes(state.answers.env)));
  if(!c.length)c=D.species.filter(s=>!state.answers.kind||s.kind===state.answers.kind);
  return head("OBSERVAR","¿QUÉ VISTE?","Esto orienta la observación. No reemplaza una identificación científica.","home")+
  '<section class="identify wrap"><div class="identify-result"><h2>Podría ser...</h2><p>Estas coincidencias sirven para aprender a mirar. Para confirmar una especie hace falta contrastar características y evidencia.</p><div class="species-grid">'+c.slice(0,3).map(card).join("")+'</div><button class="primary" data-action="identify">Intentar de nuevo</button></div></section>';
 }
 const q=qs[state.identifyStep];
 const pct=((state.identifyStep)/qs.length)*100;
 return head("OBSERVAR","¿QUÉ VISTE?","No hace falta saber el nombre para empezar. Observá y respondé.","home")+
 '<section class="identify wrap"><div class="question-card"><div class="identify-progress"><i style="width:'+pct+'%"></i></div><span class="step">0'+(state.identifyStep+1)+' / 03</span><h2>'+q[1]+'</h2><div class="option-grid">'+q[2].map(o=>'<button class="option" data-answer="'+o[0]+'">'+esc(o[1])+'</button>').join("")+'</div></div></section>';
}

function learn(){
 return head("EDUCACIÓN","APRENDER","Conceptos cortos para entender mejor la naturaleza de nuestro lugar.","home")+
 '<section class="concepts wrap"><div class="concept-grid">'+D.concepts.map(c=>'<article><h2>'+esc(c[0])+'</h2><p>'+esc(c[1])+'</p></article>').join("")+'</div>'+
 '<div class="student-block"><span class="eyebrow dark">PARA ESTUDIANTES</span><h2>Pequeñas investigaciones</h2><ol>'+D.activities.map(a=>'<li>'+esc(a)+'</li>').join("")+'</ol></div></section>';
}

function render(){
 let h=state.view==="home"?home():state.view==="catalog"?catalog():state.view==="environments"?environments():state.view==="environment"?environment():state.view==="species"?species():state.view==="identify"?identify():learn();
 $("#app").innerHTML=h;window.scrollTo(0,0);bind();
}

function bind(){
 $$("[data-action]").forEach(b=>b.onclick=()=>{
  const a=b.dataset.action;
  if(a==="home"){state.view="home";render()}
  if(a==="catalog"){state.view="catalog";state.kind=b.dataset.kind||state.kind;state.group="all";state.query="";render()}
  if(a==="environments"){state.view="environments";render()}
  if(a==="env"){state.view="environment";state.env=b.dataset.env;render()}
  if(a==="species"){state.view="species";state.id=b.dataset.id;render()}
  if(a==="identify"){state.view="identify";state.identifyStep=0;state.answers={};render()}
  if(a==="learn"){state.view="learn";render()}
  if(a==="clear"){state.query="";render()}
 });
 $$("[data-group]").forEach(b=>b.onclick=()=>{state.group=b.dataset.group;render()});
 const inp=$("#catalog-search");
 if(inp)inp.oninput=()=>{state.query=inp.value;const list=D.species.filter(s=>s.kind===state.kind);$("#results").innerHTML=filtered(list).map(card).join("")||'<div class="catalog-empty">No encontramos coincidencias. Probá con otro nombre o grupo.</div>';bind()};
 $$("[data-answer]").forEach(b=>b.onclick=()=>{const step=state.identifyStep;const key=step===0?"kind":step===1?"group":"env";state.answers[key]=b.dataset.answer;state.identifyStep++;render()});
}

document.addEventListener("DOMContentLoaded",()=>{
 const g=$("#global-search");
 g.oninput=()=>{if(g.value.trim().length>1){state.view="catalog";state.kind="fauna";state.group="all";state.query=g.value;render()}};
 $("#year").textContent=new Date().getFullYear();render();
});
})();