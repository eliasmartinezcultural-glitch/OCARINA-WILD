import {SPECIES,SOURCES,ZONES} from "./research-data.js";

const app=document.querySelector("#app");
const VISUALS={
  "dique-compensador":"https://commons.wikimedia.org/wiki/Special:Redirect/file/Dique_Compensador_Chañar,_Neuquen_-_panoramio_(2).jpg",
  "rio-neuquen":"https://commons.wikimedia.org/wiki/Special:Redirect/file/Neuquen_river_1.jpg",
  "chanar":"https://commons.wikimedia.org/wiki/Special:Redirect/file/Geoffroea_decorticans.JPG",
  "calandria-grande":"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mimus_saturninus_(6223460929).jpg",
  "carpintero-real":"https://commons.wikimedia.org/wiki/Special:Redirect/file/Colaptes_melanochloros_melanolaimus,_CABA.jpg",
  "golondrina-patagonica":"https://commons.wikimedia.org/wiki/Special:Redirect/file/Tachycineta_leucopyga_1894.jpg"
};
const PLACE_IMAGES={
  "Río Neuquén":VISUALS["rio-neuquen"],
  "Dique Compensador El Chañar":VISUALS["dique-compensador"],
  "Chacras y red de riego":VISUALS["chanar"],
  "Monte":VISUALS["chanar"]
};
const state={
  view:"home",
  door:null,
  query:"",
  filter:"todos",
  selected:null,
  favorites:new Set(read("ow-favorites",[])),
  observations:read("ow-observations",[])
};
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
function read(k,f){try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f))}catch{return f}}
function save(){localStorage.setItem("ow-favorites",JSON.stringify([...state.favorites]));localStorage.setItem("ow-observations",JSON.stringify(state.observations))}
function imgFor(x){
  if(!x)return "";
  if(x.image)return x.image;
  if(VISUALS[x.id])return VISUALS[x.id];
  if(x.type==="flora")return VISUALS.chanar;
  if(x.type==="fauna")return VISUALS["calandria-grande"];
  return PLACE_IMAGES[x.name]||VISUALS["dique-compensador"];
}
const cache=read("ow-image-cache",{});
const pending=new Set();
async function resolveImage(x){
  if(!x)return null;
  if(x.image)return x.image;
  if(cache[x.scientific])return cache[x.scientific];
  if(VISUALS[x.id])return VISUALS[x.id];
  if(pending.has(x.id))return null;
  pending.add(x.id);
  for(const term of [x.scientific,x.name].filter(Boolean)){
    try{
      const u="https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch="+encodeURIComponent(term)+"&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json&origin=*";
      const data=await fetch(u).then(r=>r.ok?r.json():null);
      const pages=Object.values(data?.query?.pages||{});
      const p=pages.find(p=>p.imageinfo?.[0]?.thumburl||p.imageinfo?.[0]?.url);
      const src=p?.imageinfo?.[0]?.thumburl||p?.imageinfo?.[0]?.url;
      if(src){cache[x.scientific]=src;localStorage.setItem("ow-image-cache",JSON.stringify(cache));return src}
    }catch{}
  }
  return null;
}
function hydrate(){
  app.querySelectorAll("img[data-species]").forEach(async im=>{
    const x=SPECIES.find(s=>s.id===im.dataset.species); if(!x)return;
    const src=await resolveImage(x);
    if(src)im.src=src;
  });
}
function statusLabel(s){
  return ({documentada:"DOCUMENTADA",local:"MENCIÓN LOCAL",prioridad:"PRIORIDAD LOCAL","area-estudio":"ÁREA DE ESTUDIO",regional:"REGIONAL",candidato:"CANDIDATO",territorio:"AMBIENTE",protegido:"PROTEGIDO",ecorregion:"MARCO ECOLÓGICO"})[s]||s;
}
function statusClass(s){return "st-"+String(s).replace(/[^a-z-]/g,"-")}
function sourceLinks(ids){
  return (ids||[]).map(id=>SOURCES[id]?'<a href="'+esc(SOURCES[id].url)+'" target="_blank" rel="noopener">'+esc(SOURCES[id].label)+' ↗</a>':"").join("");
}
function counts(){
  return {
    all:SPECIES.length,
    fauna:SPECIES.filter(x=>x.type==="fauna").length,
    flora:SPECIES.filter(x=>x.type==="flora").length,
    documentada:SPECIES.filter(x=>x.status==="documentada").length,
    local:SPECIES.filter(x=>x.status==="local").length,
    research:SPECIES.filter(x=>["area-estudio","regional","candidato"].includes(x.status)).length
  };
}
function nav(){
  return '<header class="topbar"><button class="brand" data-home><span>OCARINA</span><b>WILD</b></button><button class="notebook" data-journal>CUADERNO <i>'+state.observations.length+'</i></button></header>';
}
function home(){
  state.view="home"; state.door=null; state.selected=null; state.query=""; state.filter="todos"; history.replaceState(null,"",location.pathname+location.search);
  app.innerHTML=`
  <section class="home">
    <div class="home-photo"></div>
    <div class="home-shade"></div>
    ${nav()}
    <div class="home-center">
      <span class="micro">SAN PATRICIO DEL CHAÑAR · NEUQUÉN</span>
      <h1>OCARINA <i>WILD</i></h1>
      <p>El Chañar que vive.</p>
      <div class="doors">
        <button data-door="fauna"><b>01</b><strong>FAUNA</strong><small>animales · aves · agua · monte</small></button>
        <button data-door="flora"><b>02</b><strong>FLORA</strong><small>plantas · árboles · monte · ribera</small></button>
        <button data-door="territorio"><b>03</b><strong>TERRITORIO</strong><small>río · dique · chacras · monte</small></button>
        <button data-door="archivo"><b>04</b><strong>ARCHIVO</strong><small>evidencia · fuentes · historia · conservación</small></button>
      </div>
      <button class="surprise" data-surprise>✦ SORPRÉNDEME</button>
    </div>
    <div class="home-foot"><span>FUENTE ≠ FOTOGRAFÍA ≠ PRESENCIA LOCAL</span><span>OCARINA PRODUCCIONES</span></div>
  </section>`;
  bind();
}
function doorShell(title,kicker,lead,body){
  app.innerHTML='<section class="world">'+nav()+'<div class="world-head"><button class="back" data-home>← CENTRAL</button><span class="micro">'+kicker+'</span><h2>'+title+'</h2><p>'+lead+'</p></div>'+body+'</section>';
}
function controls(type){
  const items=SPECIES.filter(x=>x.type===type);
  const groups=[...new Set(items.map(x=>x.group).filter(Boolean))];
  const zones=[...new Set(items.map(x=>x.zone).filter(Boolean))].slice(0,10);
  return '<div class="explore-bar"><label>⌕<input id="q" value="'+esc(state.query)+'" placeholder="Buscar..."></label><div class="chips"><button class="'+(state.filter==="todos"?"on":"")+'" data-filter="todos">TODO</button>'+groups.map(g=>'<button class="'+(state.filter===g?"on":"")+'" data-filter="'+esc(g)+'">'+esc(g).toUpperCase()+'</button>').join("")+'</div><div class="chips secondary"><button class="'+(state.filter==="★"?"on":"")+'" data-filter="★">★ GUARDADOS</button>'+zones.map(z=>'<button class="'+(state.filter===z?"on":"")+'" data-filter="'+esc(z)+'">'+esc(z).toUpperCase()+'</button>').join("")+'</div></div>';
}
function cards(type){
  let arr=SPECIES.filter(x=>x.type===type);
  if(state.filter==="★")arr=arr.filter(x=>state.favorites.has(x.id));
  else if(state.filter!=="todos")arr=arr.filter(x=>x.group===state.filter||x.zone===state.filter);
  if(state.query){
    const q=state.query.toLowerCase();
    arr=arr.filter(x=>[x.name,x.scientific,x.summary,x.habitat,x.zone,x.status,x.certainty].join(" ").toLowerCase().includes(q));
  }
  return '<div class="atlas-grid">'+(arr.length?arr.map((x,i)=>card(x,i)).join(""):'<div class="empty"><b>No encontramos eso.</b><span>Probá otra palabra o abrí otra puerta.</span></div>')+'</div>';
}
function card(x,i){
  const src=imgFor(x);
  return '<article class="life-card" data-species="'+esc(x.id)+'"><div class="life-photo"><img loading="lazy" src="'+esc(src)+'" alt="'+esc(x.name)+'" data-species="'+esc(x.id)+'"><span>REPRESENTACIÓN · NO PRUEBA PRESENCIA</span><button class="star '+(state.favorites.has(x.id)?"on":"")+'" data-fav="'+esc(x.id)+'">'+(state.favorites.has(x.id)?"★":"☆")+'</button></div><div class="life-copy"><small>'+esc(x.zone||"Territorio")+'</small><h3>'+esc(x.name)+'</h3><em>'+esc(x.scientific||"")+'</em><p>'+esc(x.summary)+'</p><div><label class="status '+statusClass(x.status)+'">'+statusLabel(x.status)+'</label><b>ABRIR →</b></div></div></article>';
}
function catalog(type){
  state.view="catalog"; state.selected=null;
  const c=counts(), title=type==="fauna"?"FAUNA":"FLORA", lead=type==="fauna"?"Aves, peces, mamíferos y reptiles del archivo. La etiqueta te dice qué tan cerca está cada dato de Chañar.":"Árboles, arbustos y vegetación del paisaje productivo, ribereño y del Monte.";
  doorShell(title,"PUERTA "+(type==="fauna"?"01":"02"),lead,controls(type)+cards(type)+'<div class="after-note"><b>¿Querés ir más profundo?</b><button data-archive>ABRIR ARCHIVO</button></div>');
  bind(); hydrate();
}
function territory(){
  state.view="territory"; state.selected=null;
  const places=[
    ["Río Neuquén","agua · ribera · corredor",VISUALS["rio-neuquen"],"Corredor de agua, ribera y vida. El municipio lo presenta como espacio de pesca y actividades de naturaleza."],
    ["Dique Compensador El Chañar","agua · juncales · aves",VISUALS["dique-compensador"],"Área Natural Protegida Municipal desde octubre de 2006. El estudio UNCo/CONICET destaca su mosaico de ambientes."],
    ["Chacras y red de riego","cultivo · canales · arbolado",VISUALS["chanar"],"El paisaje productivo también es hábitat: cultivos, canales, árboles, bordes y espacios humanizados."],
    ["Monte","jarillas · suelo · refugios",VISUALS["chanar"],"El ambiente árido forma parte de la provincia fitogeográfica del Monte; no es un vacío, es estructura y estacionalidad."]
  ];
  const missions=[
    ["RÍO","agua · ribera · barrancas"],["DIQUE","juncales · aves · rapaces"],["CHACRAS","canales · árboles · flores"],["MONTE","jarillas · huellas · frutos"],["CIELO","vuelo · estación · movimiento"]
  ];
  doorShell("TERRITORIO","PUERTA 03","Antes de preguntar qué especie es, mirá dónde está.",'<div class="places">'+places.map((p,i)=>'<article class="place-card" data-place="'+i+'"><img src="'+esc(p[2])+'" alt="'+esc(p[0])+'"><div><small>0'+(i+1)+'</small><h3>'+esc(p[0])+'</h3><span>'+esc(p[1])+'</span><p>'+esc(p[3])+'</p><b>ENTRAR →</b></div></article>').join("")+'</div><div class="missions"><div class="section-intro"><span>PARA SALIR A MIRAR</span><h3>Misiones pequeñas.</h3><p>Una misión no te pide saber. Te pide prestar atención.</p></div><div class="mission-row">'+missions.map((m,i)=>'<button data-mission="'+esc(m[0])+'"><b>0'+(i+1)+'</b><strong>'+esc(m[0])+'</strong><small>'+esc(m[1])+'</small></button>').join("")+'</div></div>');
  bind();
}
function placeDetail(index){
  const p=[
    ["Río Neuquén","Agua, ribera, barrancas, islas y bordes vegetados.","El río estructura parte de la vida natural y productiva local.","muni"],
    ["Dique Compensador El Chañar","Aguas profundas y bajas, juncales, vegetación de ribera, monte y área rural.","Declarado Área Natural Protegida Municipal en octubre de 2006. El trabajo UNCo/CONICET lo identifica como sitio de especial interés para observación de aves.","muniNatural"],
    ["Chacras y red de riego","Cultivos, canales, arbolado y bordes humanizados.","El paisaje productivo funciona también como hábitat y corredor para especies que usan agua, árboles, flores y refugios.","muniNatural"],
    ["Monte","Arbustales xerófilos, suelo, refugios y fuerte estacionalidad.","El marco provincial identifica al Monte como una unidad fitogeográfica característica de Neuquén, con jarillas y otras comunidades adaptadas a la aridez.","monte"]
  ][index];
  app.innerHTML='<section class="detail-world">'+nav()+'<div class="detail-photo"><img src="'+esc(PLACE_IMAGES[p[0]]||VISUALS["dique-compensador"])+'" alt="'+esc(p[0])+'"><button class="back overlay" data-territory>← TERRITORIO</button></div><div class="detail-place-copy"><span class="micro">AMBIENTE</span><h2>'+esc(p[0])+'</h2><h3>'+esc(p[1])+'</h3><p>'+esc(p[2])+'</p><div class="source-line">'+sourceLinks([p[3]])+'</div><button class="primary" data-explore-place="'+esc(p[0])+'">VER QUÉ VIVE ACÁ →</button></div></section>';
  bind();
}
function detail(id){
  state.view="detail";
  const x=SPECIES.find(s=>s.id===id); if(!x)return;
  state.selected=id;
  const related=SPECIES.filter(s=>s.id!==id&&s.type===x.type&&(s.zone||"").split(" / ").some(z=>(x.zone||"").toLowerCase().includes(z.toLowerCase()))).slice(0,4);
  app.innerHTML='<section class="life-detail">'+nav()+'<div class="detail-visual"><img src="'+esc(imgFor(x))+'" alt="'+esc(x.name)+'" data-species="'+esc(x.id)+'"><span>REPRESENTACIÓN VISUAL · LA FOTO NO PRUEBA PRESENCIA LOCAL</span><button class="back overlay" data-back-door>← VOLVER</button></div><div class="detail-main"><div class="detail-title"><label class="status '+statusClass(x.status)+'">'+statusLabel(x.status)+'</label><h2>'+esc(x.name)+'</h2><em>'+esc(x.scientific||"")+'</em><p>'+esc(x.summary)+'</p><button class="save" data-fav="'+esc(x.id)+'">'+(state.favorites.has(x.id)?"★ GUARDADO":"☆ GUARDAR EN MI CUADERNO")+'</button></div><div class="facts"><article><small>DÓNDE</small><b>'+esc(x.zone||"—")+'</b></article><article><small>HÁBITAT</small><b>'+esc(x.habitat||"—")+'</b></article><article><small>CUÁNDO</small><b>'+esc(x.season||"—")+'</b></article><article><small>QUÉ TAN SEGURO</small><b>'+esc(x.certainty||"—")+'</b></article></div><section class="evidence"><span class="micro">EVIDENCIA</span><h3>Lo que realmente sabemos.</h3><p>'+esc(x.summary)+'</p><div class="source-box"><small>FUENTE(S)</small>'+sourceLinks(x.source)+'</div></section><section class="unknown"><span class="micro">PREGUNTA ABIERTA</span><h3>Lo que todavía falta.</h3><p>'+(x.status==="documentada"?"Seguir reuniendo observaciones locales, fechas, fotografías propias y comportamiento para ampliar el registro.":x.status==="local"?"Convertir la mención local en registro verificable de campo cuando sea posible.":x.status==="prioridad"?"Ampliar la evidencia local y documentar distribución, estacionalidad y relaciones ecológicas.":"Confirmar presencia puntual en San Patricio del Chañar antes de tratar esta ficha como registro local.")+'</p></section><section class="detail-actions"><button class="primary" data-journal>＋ REGISTRAR UNA OBSERVACIÓN</button><button class="secondary" data-back-door>← SEGUIR DESCUBRIENDO</button></section>'+(related.length?'<section class="related"><span class="micro">SEGUÍ MIRANDO</span><div>'+related.map(r=>'<button data-species="'+esc(r.id)+'"><img src="'+esc(imgFor(r))+'" alt=""><b>'+esc(r.name)+'</b></button>').join("")+'</div></section>':"")+'</div></section>';
  bind(); hydrate();
}
function journal(){
  state.view="journal";
  app.innerHTML='<section class="journal"><div class="journal-head">'+nav()+'<button class="back" data-back-door>← VOLVER</button><span class="micro">CUADERNO DE CAMPO</span><h2>Lo que viste.</h2><p>Primero queda en tu dispositivo. Nada se publica automáticamente.</p></div><div class="journal-content"><form id="obs"><label>QUÉ VISTE<input name="what" required placeholder="Ave, planta, huella, paisaje..."></label><label>DÓNDE<input name="where" required placeholder="Río, dique, chacra, monte..."></label><label>FECHA<input name="date" type="date" required></label><label>EVIDENCIA<select name="evidence"><option>observación visual</option><option>fotografía</option><option>video</option><option>huella / rastro</option><option>sonido</option></select></label><label>CANTIDAD<input name="quantity" type="number" min="1" value="1"></label><label>CONFIANZA<select name="confidence"><option>media</option><option>alta</option><option>baja</option></select></label><label class="wide">NOTAS<textarea name="notes" placeholder="Color, comportamiento, cantidad, contexto..."></textarea></label><label class="check"><input name="private" type="checkbox" checked> Mantener privada esta observación</label><button class="primary">GUARDAR</button></form><div class="records"><span class="micro">REGISTROS · '+state.observations.length+'</span>'+(state.observations.length?state.observations.slice().reverse().map(o=>'<article><b>'+esc(o.what)+'</b><span>'+esc(o.where)+' · '+esc(o.date)+'</span><p>'+esc(o.notes||"Sin notas")+'</p></article>').join(""):'<div class="empty"><b>Aún no hay registros.</b><span>Una mirada puede ser el comienzo.</span></div>')+'</div></div></section>';
  bind();
}
function archive(){
  state.view="archive"; state.door="archivo"; state.selected=null;
  const c=counts();
  const laws=[
    ["CDB","Convenio sobre la Diversidad Biológica","https://www.cbd.int/convention/articles/default.shtml?a=cbd-01&lg=0"],
    ["2030","Marco Kunming–Montreal","https://www.cbd.int/gbf/targets"],
    ["RAMSAR","Humedales","https://www.ramsar.org/es/acerca-de/nuestra-mision"],
    ["CMS","Especies migratorias","https://treaties.un.org/pages/showdetails.aspx?objid=08000002800bc2fb"],
    ["CITES","Comercio internacional de fauna y flora","https://cites.org/esp"],
    ["UICN","Lista Roja","https://nrl.iucnredlist.org/es/resources/categories-and-criteria"],
    ["UNESCO","Patrimonio natural","https://whc.unesco.org/en/conventiontext/"],
    ["LEY 25.675","Presupuestos mínimos ambientales","https://www.argentina.gob.ar/normativa/nacional/79980/texto"],
    ["LEY 22.421","Conservación de fauna","https://www.argentina.gob.ar/normativa/nacional/38116/actualizacion"],
    ["LEY 26.331","Bosques nativos","https://www.argentina.gob.ar/normativa/nacional/ley-26331-136125"]
  ];
  app.innerHTML='<section class="archive"><div class="archive-head">'+nav()+'<button class="back" data-home>← CENTRAL</button><span class="micro">PUERTA 04 · PROFUNDIDAD</span><h2>Todo lo que sostiene Wild.</h2><p>La portada es pequeña. El archivo no. Acá vive la investigación completa.</p></div><div class="status-strip"><article><b>'+c.all+'</b><span>LÍNEAS CARGADAS</span></article><article><b>'+c.documentada+'</b><span>DOCUMENTADAS</span></article><article><b>'+c.local+'</b><span>MENCIONES LOCALES</span></article><article><b>'+c.research+'</b><span>INVESTIGACIÓN</span></article></div><div class="archive-tabs"><button class="on" data-tab="evidence">EVIDENCIA</button><button data-tab="sources">FUENTES</button><button data-tab="history">HISTORIA</button><button data-tab="conservation">CONSERVACIÓN</button><button data-tab="method">MÉTODO</button></div><div id="archive-content"></div></section>';
  renderArchiveTab("evidence"); bind();
  function renderArchiveTab(tab){
    const el=document.querySelector("#archive-content"); if(!el)return;
    document.querySelectorAll(".archive-tabs button").forEach(b=>b.classList.toggle("on",b.dataset.tab===tab));
    if(tab==="evidence"){
      const by=["documentada","local","prioridad","area-estudio","regional","candidato"];
      el.innerHTML='<div class="archive-section"><span class="micro">MATRIZ</span><h3>La evidencia no se mezcla.</h3><p>Una fotografía sirve para reconocer. Una fuente sirve para rastrear. Un registro local sirve para afirmar presencia. Cada capa conserva su lugar.</p><div class="matrix-cards">'+by.map(s=>'<article class="'+statusClass(s)+'"><b>'+SPECIES.filter(x=>x.status===s).length+'</b><span>'+statusLabel(s)+'</span></article>').join("")+'</div><div class="archive-table">'+SPECIES.map(x=>'<button data-species="'+esc(x.id)+'"><span>'+esc(x.name)+'</span><small>'+esc(x.scientific||"")+'</small><label class="status '+statusClass(x.status)+'">'+statusLabel(x.status)+'</label></button>').join("")+'</div></div>';
    } else if(tab==="sources"){
      el.innerHTML='<div class="archive-section"><span class="micro">BIBLIOTECA</span><h3>De dónde sale la información.</h3><div class="source-list">'+Object.values(SOURCES).map(s=>'<a href="'+esc(s.url)+'" target="_blank" rel="noopener"><b>'+esc(s.label)+'</b><span>ABRIR ↗</span></a>').join("")+'</div></div>';
    } else if(tab==="history"){
      el.innerHTML='<div class="archive-section"><span class="micro">CRONOLOGÍA LOCAL</span><h3>El paisaje también tiene memoria.</h3><div class="timeline"><article><b>1881–1883</b><p>Referencias históricas al Fortín/Mangrullo Chañar y a las rastrilladas de la zona.</p></article><article><b>1913</b><p>La reconstrucción municipal registra la mensura de la colonia Tratayen y su desaparición tras una gran crecida.</p></article><article><b>1968–1971</b><p>Transformación productiva y obras de riego que preparan el valle agrícola.</p></article><article><b>21 MAY 1973</b><p>Fecha reconocida oficialmente como fundación de San Patricio del Chañar.</p></article><article><b>OCT 2006</b><p>El Dique Compensador es declarado Área Natural Protegida Municipal.</p></article></div></div>';
    } else if(tab==="conservation"){
      el.innerHTML='<div class="archive-section"><span class="micro">MARCO DE CONSERVACIÓN</span><h3>De Chañar al mundo.</h3><p>Estos marcos no convierten una especie en “protegida” automáticamente; funcionan como contexto documental para comprender conservación, biodiversidad, humedales, migración, comercio y riesgo.</p><div class="law-grid">'+laws.map(l=>'<a href="'+l[2]+'" target="_blank" rel="noopener"><b>'+l[0]+'</b><strong>'+l[1]+'</strong><span>ABRIR MARCO ↗</span></a>').join("")+'</div></div>';
    } else {
      el.innerHTML='<div class="archive-section"><span class="micro">PROTOCOLO OCARINA</span><h3>Fuente ≠ fotografía ≠ presencia local.</h3><div class="method-grid"><article><b>01 · DESCUBRIR</b><p>Encontrar una especie, ambiente, registro o pregunta.</p></article><article><b>02 · CONTRASTAR</b><p>Conservar una fuente identificable y trazable.</p></article><article><b>03 · SEPARAR</b><p>Distinguir local, documentada, área de estudio, regional y candidato.</p></article><article><b>04 · REGISTRAR</b><p>Fecha, observador, medio, contexto y confianza.</p></article><article><b>05 · REVISAR</b><p>Corregir cuando aparezca evidencia mejor.</p></article><article><b>06 · CUIDAR</b><p>No perseguir, capturar, manipular ni revelar ubicaciones sensibles.</p></article></div><div class="scope"><b>ALCANCE</b><p>San Patricio del Chañar y entorno ecológico inmediato. El área de estudio Añelo–Dique, el Monte regional y los candidatos permanecen en investigación hasta poder ubicarlos localmente.</p></div></div>';
    }
    bind();
  }
  app.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>renderArchiveTab(b.dataset.tab));
}
function surprise(){
  const pool=SPECIES.filter(x=>["documentada","local","prioridad"].includes(x.status));
  const x=pool[Math.floor(Math.random()*pool.length)];
  detail(x.id);
}
function mission(name){
  state.view="mission";
  const data={
    "RÍO":["RÍO","agua · ribera · barrancas","Durante 5 minutos mirá primero el movimiento del agua y después buscá vida en los bordes."],
    "DIQUE":["DIQUE","juncales · aves · rapaces","Quedate quieto 5 minutos. Contá movimientos, siluetas y sonidos sin acercarte a los animales."],
    "CHACRAS":["CHACRAS","canales · árboles · flores","Elegí un borde de chacra. Mirá qué plantas, insectos y aves aparecen alrededor."],
    "MONTE":["MONTE","jarillas · huellas · frutos","No busques animales. Buscá señales: huellas, cuevas, frutos, ramas, plumas."],
    "CIELO":["CIELO","vuelo · estación · movimiento","Durante 5 minutos mirá arriba. Registrá dirección, cantidad, horario y comportamiento."]
  }[name];
  app.innerHTML='<section class="mission"><div class="mission-top">'+nav()+'<button class="back" data-territory>← TERRITORIO</button><span class="micro">MISIÓN DE CAMPO</span><h2>'+data[0]+'</h2><p>'+data[1]+'</p></div><div class="mission-card"><span>5 MINUTOS</span><h3>'+data[2]+'</h3><ol><li>Elegí un lugar seguro.</li><li>Primero observá el ambiente.</li><li>Registrá sin perseguir ni manipular.</li><li>Si querés, abrí el cuaderno al terminar.</li></ol><button class="primary" data-journal>ABRIR CUADERNO →</button></div></section>';
  bind();
}
function openDoor(d){
  state.door=d; state.query=""; state.filter="todos";
  history.replaceState(null,"","#"+d);
  if(d==="fauna"||d==="flora")catalog(d);
  else if(d==="territorio")territory();
  else archive();
}
function backFromDetail(){
  if(state.door==="fauna"||state.door==="flora")catalog(state.door);
  else if(state.door==="territorio")territory();
  else archive();
}
function bind(){
  app.querySelectorAll("[data-home]").forEach(b=>b.onclick=home);
  app.querySelectorAll("[data-door]").forEach(b=>b.onclick=()=>openDoor(b.dataset.door));
  app.querySelectorAll("[data-archive]").forEach(b=>b.onclick=()=>openDoor("archivo"));
  app.querySelectorAll("[data-journal]").forEach(b=>b.onclick=journal);
  app.querySelectorAll("[data-surprise]").forEach(b=>b.onclick=surprise);
  app.querySelectorAll("[data-territory]").forEach(b=>b.onclick=territory);
  app.querySelectorAll("[data-back-door]").forEach(b=>b.onclick=backFromDetail);
  app.querySelectorAll("[data-place]").forEach(b=>b.onclick=()=>placeDetail(Number(b.dataset.place)));
  app.querySelectorAll("[data-mission]").forEach(b=>b.onclick=()=>mission(b.dataset.mission));
  app.querySelectorAll(".life-card[data-species], .related button[data-species], .archive-table button[data-species]").forEach(b=>b.onclick=e=>{
    if(e.target.closest("[data-fav]"))return;
    detail(e.currentTarget.dataset.species);
  });
  app.querySelectorAll("[data-fav]").forEach(b=>b.onclick=e=>{
    e.stopPropagation(); const id=b.dataset.fav;
    state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id); save();
    if(state.view==="home"){home();return}
    if(state.selected)detail(state.selected); else if(state.door)catalog(state.door);
  });
  app.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{state.filter=b.dataset.filter;catalog(state.door)});
  const q=app.querySelector("#q");
  q?.addEventListener("input",()=>{state.query=q.value;catalog(state.door);requestAnimationFrame(()=>{const el=app.querySelector("#q");el?.focus();el?.setSelectionRange(el.value.length,el.value.length)})});
  const form=app.querySelector("#obs");
  form?.addEventListener("submit",e=>{
    e.preventDefault(); const f=new FormData(form);
    state.observations.push({id:Date.now().toString(36),what:f.get("what"),where:f.get("where"),date:f.get("date"),evidence:f.get("evidence"),quantity:f.get("quantity"),confidence:f.get("confidence"),notes:f.get("notes"),private:true});
    save(); journal();
  });
  app.querySelectorAll("[data-explore-place]").forEach(b=>{
    b.onclick=()=>{const name=b.dataset.explorePlace; const x=SPECIES.find(s=>s.zone?.toLowerCase().includes(name.split(" ")[0].toLowerCase())); if(x)detail(x.id); else territory()}
  });
}
function start(){
  const h=location.hash.slice(1);
  if(h==="fauna"||h==="flora"||h==="territorio"||h==="archivo")openDoor(h);
  else home();
}
window.addEventListener("popstate",start);
window.addEventListener("hashchange",start);
start();
