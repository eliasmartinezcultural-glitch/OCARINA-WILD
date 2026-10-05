(() => {
const D=window.WILD_DATA;
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const RECORDS_KEY="ocarina_wild_records_v2";
const state={view:"home",kind:"fauna",group:"all",query:"",env:null,id:null,identifyStep:0,answers:{}};

const STATUS={
 confirmed:["🟢","Chañar confirmado","confirmed"],
 region:["🔵","Región","region"],
 possible:["🟡","Posible","possible"],
 unconfirmed:["🔴","No confirmado","unconfirmed"]
};
const esc=v=>String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const badge=s=>{const x=STATUS[s.localStatus]||STATUS.unconfirmed;return '<span class="status '+x[2]+'">'+x[0]+" "+x[1]+"</span>"};
const img=s=>s.image?'<img loading="lazy" src="'+esc(s.image)+'" alt="'+esc(s.commonName)+'">':'<span>'+esc(s.commonName)+'</span>';
const records=()=>{try{return JSON.parse(localStorage.getItem(RECORDS_KEY)||"[]")}catch{return[]}};
const saveRecords=r=>localStorage.setItem(RECORDS_KEY,JSON.stringify(r));
const REVIEW={pending:["⏳","Pendiente","pending"],review:["🔎","En revisión","review"],verified:["🟢","Confirmado","verified"],rejected:["⚠️","No confirmado","rejected"]};
const reviewBadge=s=>{const x=REVIEW[s]||REVIEW.pending;return "<span class=\"review-badge "+x[2]+"\">"+x[0]+" "+x[1]+"</span>"};
const recordId=()=>{const n=records().reduce((m,r)=>Math.max(m,Number(String(r.id||"").replace("WILD-",""))||0),0)+1;return "WILD-"+String(n).padStart(4,"0")};
const formatDate=d=>{if(!d)return "Sin fecha";const x=new Date(d+"T12:00:00");return isNaN(x)?"Sin fecha":x.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit",year:"numeric"})};

function card(s){
 return '<article class="species-card"><div class="species-image '+(s.image?"has-image":"")+'">'+img(s)+'</div><div class="species-card-body"><div class="card-top"><small>'+ (s.kind==="fauna"?"FAUNA":"FLORA")+"</small>"+badge(s)+'</div><h3>'+esc(s.commonName)+'</h3><p class="scientific"><em>'+esc(s.scientificName)+'</em></p><p>'+esc(s.description)+'</p><div class="card-actions"><button class="text-button" data-action="species" data-id="'+esc(s.id)+'">Conocer especie →</button><button class="text-button" data-action="start-record" data-species="'+esc(s.id)+'">Registrar avistamiento</button></div><div class="image-required">📷 '+(s.image?"Foto de referencia incluida":"Falta foto · no publicar como ficha")+'</div></div></article>';
}

function stats(){
 const all=D.species, confirmed=all.filter(s=>s.localStatus==="confirmed").length,region=all.filter(s=>s.localStatus==="region").length,possible=all.filter(s=>s.localStatus==="possible").length,withPhoto=all.filter(s=>s.image).length;
 const r=records();
 return '<section class="wild-pulse wrap"><div class="section-heading"><div><span class="eyebrow dark">PULSO DEL ATLAS</span><h2>Lo que ya sabemos.</h2></div><button class="text-button" data-action="evidence">Ver sistema de evidencia →</button></div><div class="pulse-grid"><article class="pulse-card"><b>'+all.length+'</b><span>especies cargadas</span></article><article class="pulse-card"><b>'+confirmed+'</b><span>con evidencia local</span></article><article class="pulse-card"><b>'+region+'</b><span>documentadas a escala regional</span></article><article class="pulse-card"><b>'+withPhoto+'</b><span>con foto de referencia</span></article><article class="pulse-card"><b>'+r.length+'</b><span>registros realizados en este dispositivo</span></article><article class="pulse-card"><b>'+possible+'</b><span>marcadas como posibles</span></article></div><div class="quick-rule"><strong>Regla editorial:</strong> una fotografía de referencia ayuda a reconocer una especie, pero nunca demuestra por sí sola que esa especie esté en Chañar.</div></section>';
}

function home(){
 const f=D.species.filter(s=>s.localStatus==="confirmed").slice(0,3);
 return '<section class="hero"><div class="hero-content"><span class="eyebrow">SAN PATRICIO DEL CHAÑAR · NEUQUÉN</span><h1>LA VIDA QUE<br><em>TENEMOS ALREDEDOR.</em></h1><p>Un atlas local para conocer, reconocer y comprender la fauna y la flora de nuestro lugar.</p><div class="hero-actions"><button class="primary" data-action="catalog" data-kind="fauna">🐦 Conocer animales</button><button class="secondary" data-action="catalog" data-kind="flora">🌿 Conocer plantas</button></div></div></section><section class="home-intro wrap"><div><span class="eyebrow dark">OCARINA WILD</span><h2>Ahora también podemos <em>dejar evidencia.</em></h2></div><p>Una observación no se convierte automáticamente en una confirmación. WILD registra qué viste, cuándo, en qué ambiente y qué evidencia aportaste.</p></section><section class="door-grid wrap"><button class="door fauna" data-action="catalog" data-kind="fauna"><span>🐦</span><strong>ANIMALES</strong><small>Aves, mamíferos, reptiles, anfibios, peces e invertebrados.</small></button><button class="door flora" data-action="catalog" data-kind="flora"><span>🌿</span><strong>PLANTAS</strong><small>Árboles, arbustos, hierbas, cactáceas y más.</small></button><button class="door territory" data-action="environments"><span>🏞️</span><strong>AMBIENTES</strong><small>Descubrí qué relación existe entre el lugar y las especies.</small></button><button class="door identify" data-action="identify"><span>🔎</span><strong>¿QUÉ VISTE?</strong><small>Observá, respondé y acercate a una posible identificación.</small></button><button class="door records" data-action="records"><span>📷</span><strong>REGISTROS WILD</strong><small>Guardá tus observaciones y construí evidencia ordenada.</small></button><button class="door evidence" data-action="evidence"><span>🔬</span><strong>EVIDENCIA</strong><small>Entendé qué significa confirmado, región, posible o no confirmado.</small></button></section><section class="feature wrap"><div class="section-heading"><div><span class="eyebrow dark">HOY CONOCEMOS</span><h2>Especies de nuestro alrededor.</h2></div><button class="text-button" data-action="catalog">Ver catálogo →</button></div><div class="species-grid">'+f.map(card).join("")+'</div></section>'+stats()+'<section class="learn-strip"><div class="wrap learn-grid"><div><span class="eyebrow">PARA TODOS</span><h2>Aprender no tiene edad.</h2><p>La misma información puede leerse de forma sencilla, ampliarse para estudiar y profundizar con datos científicos y fuentes.</p></div><button class="light-button" data-action="learn">Entrar a APRENDER →</button></div></section><section class="principle wrap"><span class="eyebrow dark">NUESTRO PRINCIPIO</span><h2>Conocer → Reconocer → Valorar → Cuidar</h2><p>Si una función no ayuda a conocer mejor la vida local, no pertenece a OCARINA WILD.</p><div class="principle-pills"><span>📷 FOTO EN CADA FICHA</span><span>📍 EVIDENCIA LOCAL DIFERENCIADA</span><span>🔬 NOMBRE CIENTÍFICO</span><span>🌿 CHÁÑAR PRIMERO</span></div></section>';
}

function head(k,t,p,back){return '<section class="page-head"><div class="wrap">'+(back?'<button class="back" data-action="'+back+'">← Volver</button>':"")+'<span class="eyebrow dark">'+esc(k)+'</span><h1>'+esc(t)+'</h1><p>'+esc(p)+'</p></div></section>';}

function catalog(){
 const list=D.species.filter(s=>s.kind===state.kind),gs=D.groups.filter(g=>g.type===state.kind),results=filtered(list);
 return head("CATÁLOGO LOCAL",state.kind==="flora"?"PLANTAS":"ANIMALES","Buscá por nombre común, nombre científico o grupo. Las fotos son de referencia salvo que una ficha indique un registro local.","home")+'<section class="catalog wrap"><div class="search-row"><input id="catalog-search" value="'+esc(state.query)+'" placeholder="Buscar especie, nombre científico o palabra..." aria-label="Buscar especie"><button class="primary" data-action="clear">Limpiar</button></div><div class="filter-row"><button class="filter '+(state.group==="all"?"active":"")+'" data-group="all">Todas</button>'+gs.map(g=>'<button class="filter '+(state.group===g.id?"active":"")+'" data-group="'+g.id+'">'+g.icon+" "+esc(g.label)+'</button>').join("")+'</div><div class="evidence-bar"><span class="evidence-chip">🟢 Chañar confirmado</span><span class="evidence-chip">🔵 Región</span><span class="evidence-chip">🟡 Posible</span><span class="evidence-chip">📷 Foto obligatoria</span></div><div id="results" class="species-grid">'+(results.length?results.map(card).join(""):'<div class="catalog-empty">No encontramos coincidencias. Probá con otro nombre o grupo.</div>')+"</div></section>";
}
function filtered(list){const q=state.query.trim().toLowerCase();return list.filter(s=>(state.group==="all"||s.group===state.group)&&[s.commonName,s.scientificName,s.description,s.group].join(" ").toLowerCase().includes(q));}

function environments(){return head("TERRITORIO","AMBIENTES","El lugar ayuda a entender la vida que encontramos en él.","home")+'<section class="env-list wrap">'+D.environments.map(e=>'<button class="env-card" data-action="env" data-env="'+e.id+'"><span>'+e.icon+'</span><div><strong>'+esc(e.label)+'</strong><p>'+esc(e.text)+'</p></div></button>').join("")+'</section><div class="note wrap"><strong>Dato local:</strong> el Dique Compensador El Chañar fue declarado Área Natural Protegida Municipal en octubre de 2006. <a href="https://sanpatricio.gob.ar/nuestra" target="_blank" rel="noopener">Fuente municipal →</a></div>';}
function environment(){const e=D.environments.find(x=>x.id===state.env),list=D.species.filter(s=>s.environments.includes(state.env));return head(e.icon+" AMBIENTE",e.label,e.text,"environments")+'<section class="section-block wrap"><div class="section-heading"><div><span class="eyebrow dark">ESPECIES RELACIONADAS</span><h2>¿Qué podemos encontrar?</h2></div></div><div class="species-grid">'+(list.length?list.map(card).join(""):'<div class="catalog-empty">Todavía no hay fichas relacionadas con este ambiente.</div>')+"</div></section>";}

function species(){
 const s=D.species.find(x=>x.id===state.id);if(!s)return head("ERROR","Especie no encontrada","La ficha solicitada no existe.","catalog");
 const status=STATUS[s.localStatus]||STATUS.unconfirmed,sourceType=s.sourceType==="official"?"Fuente oficial":s.sourceType==="regional"?"Fuente regional / ambiental":"Fuente científica / ambiental";
 const sources=(s.sources||[]).map(x=>'<li><a href="'+esc(x.url)+'" target="_blank" rel="noopener">'+esc(x.label)+" ↗</a></li>").join("");
 return '<section class="species-hero wrap"><button class="back" data-action="catalog" data-kind="'+esc(s.kind)+'">← Volver al catálogo</button><div class="species-hero-grid"><div><div class="species-main-image '+(s.image?"has-image":"")+'">'+img(s)+'</div>'+(s.image?'<div class="image-meta"><strong>📷 Foto de referencia</strong><span>'+esc(s.imageCredit||"Fuente de imagen indicada en la ficha.")+'</span><small>'+esc(s.imageNote||"La imagen no demuestra presencia local.")+'</small><a href="'+esc(s.imageSourceUrl||s.image)+'" target="_blank" rel="noopener">Ver fuente de la imagen ↗</a></div>':"")+'</div><div class="species-title"><span class="eyebrow dark">'+(s.kind==="fauna"?"FAUNA":"FLORA")+" · "+esc(s.group)+'</span><h1>'+esc(s.commonName)+'</h1><p class="scientific large"><em>'+esc(s.scientificName)+"</em></p>"+badge(s)+'<p class="lead">'+esc(s.description)+'</p><button class="primary species-record-btn" data-action="start-record" data-species="'+esc(s.id)+'">📷 Registrar una observación</button></div></div></section><section class="species-content wrap"><div class="level-grid"><article class="level-card"><span>01</span><h2>CONOCÉ</h2><h3>¿Cómo reconocerla?</h3><p>'+esc(s.identification)+'</p><h3>¿Dónde podemos encontrarla?</h3><p>'+esc(s.habitat)+'</p><h3>¿Qué hace?</h3><p>'+esc(s.behavior)+'</p></article><article class="level-card"><span>02</span><h2>APRENDÉ</h2><h3>Alimentación</h3><p>'+esc(s.diet)+'</p><h3>Reproducción</h3><p>'+esc(s.reproduction)+'</p><h3>Conservación</h3><p>'+esc(s.conservation)+'</p></article></div><article class="deep-card"><span class="eyebrow dark">03 · PROFUNDIZÁ</span><h2>¿Cómo lo sabemos?</h2><div class="local-evidence"><strong>'+status[0]+" "+status[1]+'</strong><span>'+esc(s.localNote)+'</span></div><div class="source-type"><strong>Tipo de evidencia:</strong> '+sourceType+'</div><h3>Fuentes utilizadas</h3><ul class="source-list">'+sources+'</ul><p class="credit">La fotografía de esta ficha es visualmente orientativa. Un registro fotográfico local requiere autor, fecha y contexto de observación.</p></article></section>';
}

function identify(){
 const qs=[
  ["kind","¿Animal o planta?",[["fauna","🐾 Animal"],["flora","🌿 Planta"]]],
  ["group","¿A qué grupo se parece? ",D.groups.filter(g=>g.type===state.answers.kind).map(g=>[g.id,g.icon+" "+g.label])],
  ["env","¿Dónde lo viste?",D.environments.map(e=>[e.id,e.icon+" "+e.label])]
 ];
 if(state.identifyStep>=qs.length){
  let c=D.species.filter(s=>(!state.answers.kind||s.kind===state.answers.kind)&&(!state.answers.group||s.group===state.answers.group)&&(!state.answers.env||s.environments.includes(state.answers.env)));
  if(!c.length)c=D.species.filter(s=>!state.answers.kind||s.kind===state.answers.kind);
  return head("OBSERVAR","¿QUÉ VISTE?","Esto orienta la observación. No reemplaza una identificación científica.","home")+'<section class="identify wrap"><div class="identify-result"><div class="result-banner"><span>🔎</span><div><strong>Orientación de campo</strong><p>Estas coincidencias sirven para aprender a mirar. Una confirmación necesita contrastar características y evidencia.</p></div></div><h2>Podría ser...</h2><div class="species-grid">'+c.slice(0,3).map(card).join("")+'</div><div class="result-actions"><button class="primary" data-action="start-record">📷 Registrar lo que vi</button><button class="secondary dark-button" data-action="identify">Intentar de nuevo</button></div></div></section>';
 }
 const q=qs[state.identifyStep],pct=(state.identifyStep/qs.length)*100;
 return head("OBSERVAR","¿QUÉ VISTE?","No hace falta saber el nombre para empezar. Observá y respondé.","home")+'<section class="identify wrap"><div class="question-card"><div class="identify-progress"><i style="width:'+pct+'%"></i></div><span class="step">0'+(state.identifyStep+1)+" / 03</span><h2>"+q[1]+'</h2><div class="option-grid">'+q[2].map(o=>'<button class="option" data-answer="'+o[0]+'">'+esc(o[1])+"</button>").join("")+"</div></div></section>";
}

function evidence(){
 const all=D.species,r=records(),counts={confirmed:0,region:0,possible:0,unconfirmed:0};all.forEach(s=>counts[s.localStatus]=(counts[s.localStatus]||0)+1);
 return head("EVIDENCIA","EL SISTEMA DE EVIDENCIA","OCARINA WILD separa lo que está respaldado localmente de lo que todavía necesita verificación.","home")+'<section class="evidence-page wrap"><div class="evidence-principles"><article><span>01</span><h2>Foto de referencia ≠ evidencia local</h2><p>La imagen de una ficha sirve para reconocer la especie. No demuestra que el ejemplar haya sido visto en San Patricio del Chañar.</p></article><article><span>02</span><h2>Observación ≠ confirmación</h2><p>Un registro comunitario queda pendiente hasta que pueda revisarse con características, contexto y fuentes.</p></article><article><span>03</span><h2>Chañar primero</h2><p>La evidencia de Neuquén o Patagonia puede orientar, pero no se transforma automáticamente en presencia confirmada dentro de Chañar.</p></article></div><div class="evidence-levels"><h2>Los cuatro estados</h2><div class="evidence-level-grid"><div class="evidence-level confirmed"><b>🟢 CHÁÑAR CONFIRMADO</b><p>Existe respaldo local suficiente para presentar la presencia como confirmada.</p></div><div class="evidence-level region"><b>🔵 REGIÓN</b><p>Hay documentación regional compatible, pero todavía no suficiente para afirmar Chañar.</p></div><div class="evidence-level possible"><b>🟡 POSIBLE</b><p>El ambiente podría ser compatible, pero la evidencia disponible es insuficiente.</p></div><div class="evidence-level unconfirmed"><b>🔴 NO CONFIRMADO</b><p>No debe presentarse como especie local hasta conseguir respaldo.</p></div></div></div><div class="evidence-ledger"><div><span class="eyebrow dark">PULSO</span><h2>'+all.length+' especies · '+r.length+' registros personales</h2><p>Los registros guardados en este dispositivo son privados hasta que exista una futura capa de publicación y revisión.</p></div><button class="primary" data-action="records">Ver mis registros →</button></div><div class="source-note"><strong>Base local.</strong> La provincia de Neuquén impulsa educación ambiental y cuidado de agua, flora y fauna en San Patricio del Chañar; además, existen antecedentes ambientales y registros locales que deben interpretarse según su escala. </div></section>';
}

function recordForm(prefill){
 const s=prefill?D.species.find(x=>x.id===prefill):null;
 const speciesOptions=D.species.map(x=>'<option value="'+esc(x.id)+'" '+(s&&x.id===s.id?"selected":"")+'>'+esc(x.commonName)+" — "+esc(x.scientificName)+"</option>").join("");
 return head("REGISTROS WILD","REGISTRÁ LO QUE ENCONTRASTE","Una observación ordenada puede convertirse mañana en evidencia local. Por ahora, el registro queda guardado solamente en este dispositivo.","home")+'<section class="record-page wrap"><form id="record-form" class="record-form"><div class="record-step"><span>01 · EVIDENCIA</span><h2>¿Qué viste?</h2><label class="upload-box"><input id="record-photo" type="file" accept="image/*"><strong>📷 Agregar fotografía</strong><small>La foto es opcional para guardar la observación, pero es la evidencia más útil para una futura revisión.</small><span id="photo-name">Todavía no elegiste una foto.</span></label><div id="photo-preview" class="photo-preview"></div></div><div class="record-step"><span>02 · IDENTIFICACIÓN</span><h2>¿Qué creés que era?</h2><select id="record-species"><option value="">No lo sé / dejar sin identificar</option>'+speciesOptions+'</select><p class="form-hint">Elegir una especie es una hipótesis del observador. No convierte el registro en confirmación.</p></div><div class="record-two"><div class="record-step"><span>03 · CUÁNDO</span><h2>Fecha</h2><input id="record-date" type="date" value="'+new Date().toISOString().slice(0,10)+'"></div><div class="record-step"><span>04 · DÓNDE</span><h2>Ambiente</h2><select id="record-env"><option value="">Elegir ambiente</option>'+D.environments.map(e=>'<option value="'+e.id+'">'+e.icon+" "+esc(e.label)+"</option>").join("")+'</select></div></div><div class="record-step"><span>05 · CONTEXTO</span><h2>Zona general y observador</h2><div class="record-two"><input id="record-zone" placeholder="Ej.: zona de chacras, cerca del río, barrio..."><input id="record-observer" placeholder="Tu nombre o iniciales"></div><textarea id="record-notes" rows="5" placeholder="¿Qué viste? Tamaño, colores, comportamiento, cantidad, qué estaba haciendo..."></textarea><p class="form-hint">No cargues coordenadas exactas de especies sensibles.</p></div><div class="record-submit"><div><strong>Estado inicial: ⏳ PENDIENTE</strong><small>El sistema conserva la observación como pendiente hasta una futura revisión.</small></div><button class="primary" type="submit">Guardar registro WILD</button></div></form></section>';
}

function reviewScore(r){return Object.values(r.review||{}).filter(Boolean).length;}
function reviewView(id){const r=records().find(x=>x.id===id);if(!r)return recordsView();const s=D.species.find(x=>x.id===r.speciesId);return head("CONTROL DE CALIDAD",r.id,"Una revisión ordenada permite separar observaciones completas de registros que todavía necesitan información.","records")+"<section class=\"review-page wrap\"><div class=\"review-header\"><div><span class=\"eyebrow dark\">ESTADO</span><h2>"+reviewBadge(r.status)+"</h2><p>"+esc(r.reviewNote||"Sin nota de revisión.")+"</p></div><div class=\"review-score\"><b>"+reviewScore(r)+" / 6</b><span>campos útiles presentes</span></div></div><div class=\"review-grid\"><article><h2>Ficha del registro</h2><p><strong>Especie propuesta:</strong> "+esc(s?s.commonName:(r.speciesName||"Sin identificar"))+"</p><p><strong>Fecha:</strong> "+esc(formatDate(r.date))+"</p><p><strong>Ambiente:</strong> "+esc(r.environmentLabel||"Sin indicar")+"</p><p><strong>Zona general:</strong> "+esc(r.zone||"Sin indicar")+"</p><p><strong>Observador:</strong> "+esc(r.observer||"Anónimo")+"</p><p><strong>Notas:</strong> "+esc(r.notes||"Sin notas")+"</p></article><article><h2>Checklist</h2><ul class=\"review-checks\"><li>"+(r.review&&r.review.photo?"✓":"○")+" Fotografía disponible</li><li>"+(r.review&&r.review.date?"✓":"○")+" Fecha indicada</li><li>"+(r.review&&r.review.environment?"✓":"○")+" Ambiente indicado</li><li>"+(r.review&&r.review.locationGeneral?"✓":"○")+" Zona general indicada</li><li>"+(r.review&&r.review.observer?"✓":"○")+" Observador identificado</li><li>"+(r.review&&r.review.description?"✓":"○")+" Descripción contextual</li></ul></article></div><div class=\"review-actions\"><button class=\"primary\" data-action=\"mark-review\" data-record=\""+esc(r.id)+"\" data-status=\"review\">🔎 Pasar a revisión</button><button class=\"filter\" data-action=\"mark-review\" data-record=\""+esc(r.id)+"\" data-status=\"verified\">🟢 Marcar confirmado</button><button class=\"filter\" data-action=\"mark-review\" data-record=\""+esc(r.id)+"\" data-status=\"rejected\">⚠️ No confirmado</button><button class=\"text-button\" data-action=\"records\">← Volver al archivo</button></div></section>";}

function recordsView(){
 const r=records().sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt)));
 return head("ARCHIVO LOCAL","MIS REGISTROS WILD",r.length?"Tus observaciones guardadas en este dispositivo.":"Todavía no tenés registros guardados en este dispositivo.","home")+'<section class="records-page wrap"><div class="record-toolbar"><button class="primary" data-action="start-record">📷 Nuevo registro</button><button class="filter" data-action="export-records">Exportar JSON</button><button class="filter" data-action="review-latest">🔎 Revisar último</button></div>'+(r.length?'<div class="record-list">'+r.map(recordCard).join("")+'</div>':'<div class="empty-records"><span>🌱</span><h2>El atlas necesita observadores.</h2><p>La próxima vez que encuentres algo, fotografialo, anotá el ambiente y dejá tu registro.</p><button class="primary" data-action="start-record">Crear mi primer registro</button></div>')+'</section>';
}

function recordCard(r){
 const s=D.species.find(x=>x.id===r.speciesId),name=s?s.commonName:(r.speciesName||"Sin identificar");
 return '<article class="record-card">'+(r.image?'<img src="'+esc(r.image)+'" alt="Registro '+esc(r.id)+'">':'<div class="record-no-photo">📷</div>')+'<div class="record-card-body"><div class="record-card-top"><span>'+esc(r.id)+'</span><b>⏳ PENDIENTE</b></div><h2>'+esc(name)+'</h2><p><strong>'+esc(formatDate(r.date))+'</strong> · '+esc(r.environmentLabel||"Ambiente sin indicar")+'</p><p>'+esc(r.zone||"Zona general no indicada")+'</p>'+(r.notes?'<p class="record-notes">'+esc(r.notes)+'</p>':"")+'<div class="record-meta"><span>Observador: '+esc(r.observer||"Anónimo")+'</span><button class="text-button" data-action="delete-record" data-record="'+esc(r.id)+'">Eliminar</button></div></div></article>';
}

function learn(){return head("EDUCACIÓN","APRENDER","Conceptos cortos para entender mejor la naturaleza de nuestro lugar.","home")+'<section class="concepts wrap"><div class="concept-grid">'+D.concepts.map(c=>'<article><h2>'+esc(c[0])+'</h2><p>'+esc(c[1])+'</p></article>').join("")+'</div><div class="student-block"><span class="eyebrow dark">PARA ESTUDIANTES</span><h2>Pequeñas investigaciones</h2><ol>'+D.activities.map(a=>"<li>"+esc(a)+"</li>").join("")+"</ol></div></section>";}

function render(){
 let h=state.view==="home"?home():state.view==="catalog"?catalog():state.view==="environments"?environments():state.view==="environment"?environment():state.view==="species"?species():state.view==="identify"?identify():state.view==="evidence"?evidence():state.view==="record"?recordForm(state.prefill):state.view==="records"?recordsView():state.view==="review"?reviewView(state.recordId):learn();
 $("#app").innerHTML=h;window.scrollTo(0,0);bind();
 if(state.view==="record")bindRecord();
}

function bindRecord(){
 const input=$("#record-photo"),preview=$("#photo-preview"),name=$("#photo-name");
 if(input)input.onchange=()=>{const f=input.files[0];if(!f)return;name.textContent=f.name;const reader=new FileReader();reader.onload=()=>{preview.innerHTML='<img src="'+esc(reader.result)+'" alt="Vista previa de la fotografía">';preview.dataset.image=reader.result};reader.readAsDataURL(f)};
 const form=$("#record-form");
 if(form)form.onsubmit=async e=>{
  e.preventDefault();
  const speciesId=$("#record-species").value,s=D.species.find(x=>x.id===speciesId),envId=$("#record-env").value,eid=D.environments.find(x=>x.id===envId);
  const r={id:recordId(),createdAt:new Date().toISOString(),date:$("#record-date").value,speciesId:speciesId||null,speciesName:s?s.commonName:"",environment:envId||null,environmentLabel:eid?eid.label:"Ambiente sin indicar",zone:$("#record-zone").value.trim(),observer:$("#record-observer").value.trim(),notes:$("#record-notes").value.trim(),image:preview?.dataset.image||"",status:"pending",review:{photo:!!(preview&&preview.dataset.image),date:!!$("#record-date").value,environment:!!envId,locationGeneral:!!$("#record-zone").value.trim(),observer:!!$("#record-observer").value.trim(),description:!!$("#record-notes").value.trim()},reviewNote:"Registro recibido. Falta revisión."};
  const arr=records();arr.push(r);saveRecords(arr);state.view="records";state.prefill=null;render();
 };
}

function exportRecords(){
 const blob=new Blob([JSON.stringify(records(),null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="ocarina-wild-registros.json";a.click();URL.revokeObjectURL(url);
}
function deleteRecord(id){saveRecords(records().filter(r=>r.id!==id));render();}

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
  if(a==="evidence"){state.view="evidence";render()}
  if(a==="start-record"){state.view="record";state.prefill=b.dataset.species||null;render()}
  if(a==="records"){state.view="records";render()}
  if(a==="export-records"){exportRecords()}
  if(a==="delete-record"){if(confirm("¿Eliminar este registro local?"))deleteRecord(b.dataset.record)}
  if(a==="review-latest"){const rr=records().sort((x,y)=>String(y.createdAt).localeCompare(String(x.createdAt)));if(rr[0]){state.view="review";state.recordId=rr[0].id;render()}}
  if(a==="mark-review"){const rr=records(),x=rr.find(r=>r.id===b.dataset.record);if(x){x.status=b.dataset.status;x.reviewNote=b.dataset.status==="verified"?"Marcado como confirmado en este dispositivo.":b.dataset.status==="rejected"?"Registro no confirmado; requiere nueva evidencia.":"Registro separado para revisión.";saveRecords(rr);state.view="review";state.recordId=x.id;render()}}
  if(a==="clear"){state.query="";render()}
 });
 $$("[data-group]").forEach(b=>b.onclick=()=>{state.group=b.dataset.group;render()});
 const inp=$("#catalog-search");
 if(inp)inp.oninput=()=>{state.query=inp.value;const list=D.species.filter(s=>s.kind===state.kind);$("#results").innerHTML=filtered(list).map(card).join("")||'<div class="catalog-empty">No encontramos coincidencias. Probá con otro nombre o grupo.</div>';bind()};
 $$("[data-answer]").forEach(b=>b.onclick=()=>{const step=state.identifyStep,key=step===0?"kind":step===1?"group":"env";state.answers[key]=b.dataset.answer;state.identifyStep++;render()});
}

document.addEventListener("DOMContentLoaded",()=>{
 const g=$("#global-search");
 if(g)g.oninput=()=>{if(g.value.trim().length>1){state.view="catalog";state.kind="fauna";state.group="all";state.query=g.value;render()}};
 $("#year").textContent=new Date().getFullYear();render();
});
})();