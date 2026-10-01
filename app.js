/* OCARINA WILD · Motor de interpretación natural v2
   Principio: CENTRAL simple / EXPEDIENTES profundos / EVIDENCIA separada.
*/
const panel=document.querySelector("#panel");
const content=document.querySelector("#content");
const closeBtn=document.querySelector("#close");

const DATA={
 fauna:{
  kicker:"01 · FAUNA",title:"Los habitantes<br><i>del Chañar.</i>",
  lead:"Una biblioteca visual para reconocer animales y construir, con el tiempo, un registro local verificable.",
  hero:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mimus_saturninus_(6223460929).jpg",
  facts:[["04","ambientes"],["04","fichas base"],["∞","registros por sumar"]],
  zones:["Todos","Ribera","Chacras","Dique","Monte"],
  cards:[
   {id:"calandria-grande",name:"Calandria grande",scientific:"Mimus saturninus",kind:"ave",zone:"Chacras",status:"referencia",evidence:"Documentación visual de referencia",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mimus_saturninus_(6223460929).jpg",desc:"Ave de ambientes abiertos y arbolados.",detail:"La imagen sirve para reconocer rasgos. Falta incorporar un registro local propio con fecha, autor y fuente específica.",habitat:"Ambientes abiertos, arbolados y áreas humanizadas.",season:"Por documentar localmente.",sound:"Audio de campo pendiente.",observations:"Todavía no hay observación propia incorporada.",source:"Wikimedia Commons · imagen de referencia.",author:"Autor de la fotografía: consultar crédito de la fuente.",gallery:[]},
   {id:"carpintero-real",name:"Carpintero real",scientific:"Colaptes melanochloros",kind:"ave",zone:"Monte",status:"referencia",evidence:"Documentación visual de referencia",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Colaptes_melanochloros_melanolaimus,_CABA.jpg",desc:"Referencia visual para reconocer plumaje y postura.",detail:"La imagen permite estudiar rasgos visuales; no constituye por sí sola un registro local.",habitat:"Ambientes arbolados y sectores con disponibilidad de árboles.",season:"Por documentar localmente.",sound:"Audio de campo pendiente.",observations:"Registro local pendiente.",source:"Wikimedia Commons · imagen de referencia.",author:"Autor de la fotografía: consultar crédito de la fuente.",gallery:[]},
   {id:"golondrina-patagonica",name:"Golondrina patagónica",scientific:"Tachycineta leucopyga",kind:"ave",zone:"Ribera",status:"referencia",evidence:"Documentación visual de referencia",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Tachycineta_leucopyga_1894.jpg",desc:"Ave asociada a espacios abiertos y cuerpos de agua.",detail:"Registro local pendiente de documentar con evidencia propia.",habitat:"Espacios abiertos y sectores próximos al agua.",season:"Por documentar localmente.",sound:"Audio de campo pendiente.",observations:"Registro local pendiente.",source:"Wikimedia Commons · imagen de referencia.",author:"Autor de la fotografía: consultar crédito de la fuente.",gallery:[]},
   {id:"pejerrey",name:"Pejerrey",scientific:"Odontesthes sp.",kind:"pez",zone:"Dique",status:"pendiente",evidence:"Sin identificación suficiente",desc:"Ficha local pendiente: especie, ambiente y evidencia.",detail:"No se afirma especie concreta hasta contar con identificación suficiente.",habitat:"Ambiente acuático: identificación local pendiente.",season:"Por documentar.",sound:"No corresponde / pendiente.",observations:"Sin observación incorporada.",source:"Pendiente de fuente y registro local.",author:"Pendiente.",gallery:[]}
  ],
  note:"Una fotografía enseña. Un registro demuestra. OCARINA WILD mantiene ambas cosas separadas."
 },
 flora:{
  kicker:"02 · FLORA",title:"El paisaje también<br><i>crece.</i>",
  lead:"Una biblioteca vegetal construida por capas: reconocimiento visual, identificación, ambiente y evidencia local.",
  hero:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Populus_nigra_001.jpg",
  facts:[["04","ambientes"],["04","líneas de inventario"],["100%","pendientes visibles"]],
  zones:["Todos","Ribera","Chacras","Canales","Monte"],
  cards:[
   {id:"arboles-ribera",name:"Árboles de ribera",kind:"vegetación",zone:"Ribera",status:"referencia",evidence:"Documentación visual de referencia",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Populus_nigra_001.jpg",desc:"Reconocimiento visual, estación y relación con el agua.",detail:"La especie y su presencia local deben verificarse antes de convertirse en ficha definitiva.",habitat:"Sectores próximos al agua y áreas arboladas.",season:"Por documentar localmente.",sound:"Paisaje sonoro pendiente.",observations:"Registro local pendiente.",source:"Wikimedia Commons · imagen de referencia.",author:"Autor de la fotografía: consultar crédito de la fuente.",gallery:[]},
   {id:"vegetacion-chacras",name:"Vegetación de chacras",kind:"vegetación",zone:"Chacras",status:"pendiente",evidence:"Inventario local pendiente",desc:"Especies cultivadas y espontáneas: separar, no mezclar.",detail:"Inventario local pendiente.",habitat:"Chacras y espacios productivos.",season:"Por documentar.",sound:"Paisaje sonoro pendiente.",observations:"Pendiente.",source:"Pendiente.",author:"Pendiente.",gallery:[]},
   {id:"flora-canales",name:"Flora de canales",kind:"vegetación",zone:"Canales",status:"pendiente",evidence:"Inventario local pendiente",desc:"Un paisaje cotidiano que merece ser documentado.",detail:"Inventario local pendiente.",habitat:"Canales y bordes de riego.",season:"Por documentar.",sound:"Paisaje sonoro pendiente.",observations:"Pendiente.",source:"Pendiente.",author:"Pendiente.",gallery:[]},
   {id:"vegetacion-monte",name:"Vegetación del monte",kind:"vegetación",zone:"Monte",status:"pendiente",evidence:"Inventario local pendiente",desc:"Adaptación al viento, suelo y disponibilidad de agua.",detail:"Inventario local pendiente.",habitat:"Monte y ambientes secos.",season:"Por documentar.",sound:"Paisaje sonoro pendiente.",observations:"Pendiente.",source:"Pendiente.",author:"Pendiente.",gallery:[]}
  ],
  note:"Regla de inventario: nombre común + científico cuando esté confirmado + fotografía + lugar general + fecha + fuente."
 },
 territorio:{
  kicker:"03 · TERRITORIO",title:"Un paisaje no es<br><i>una postal.</i>",
  lead:"Agua, producción, monte, viento y obra humana forman un territorio conectado. Primero aprendemos a leerlo; después ubicamos registros.",
  hero:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Neuquen_Rio_Neuquen.jpg",
  facts:[["01","río como columna"],["04","ambientes guía"],["360°","formas de mirar"]],
  zones:["Todos","Agua","Producción","Monte","Cielo"],
  cards:[
   {id:"rio",name:"RÍO",kind:"ambiente",zone:"Agua",status:"marco",evidence:"Marco territorial",desc:"Agua · ribera · movimiento",detail:"El agua como estructura del paisaje y de la vida local.",habitat:"Corredor fluvial y ribera.",season:"Todo el año; variaciones por documentar.",sound:"Paisaje sonoro pendiente.",observations:"Pendiente de registro de campo.",source:"Marco interpretativo; fuentes específicas a incorporar.",author:"Ocarina Wild.",gallery:[]},
   {id:"chacras",name:"CHACRAS",kind:"ambiente",zone:"Producción",status:"marco",evidence:"Marco territorial",desc:"Riego · arbolado · producción",detail:"La trama productiva como parte visible del territorio.",habitat:"Áreas productivas y su red de riego.",season:"Ciclo anual por documentar.",sound:"Paisaje sonoro pendiente.",observations:"Pendiente de registro de campo.",source:"Marco interpretativo; fuentes específicas a incorporar.",author:"Ocarina Wild.",gallery:[]},
   {id:"dique",name:"DIQUE",kind:"ambiente",zone:"Agua",status:"marco",evidence:"Marco territorial",desc:"Agua · infraestructura · aves",detail:"Un paisaje donde naturaleza y obra humana conviven.",habitat:"Ambiente acuático e infraestructura asociada.",season:"Por documentar.",sound:"Paisaje sonoro pendiente.",observations:"Pendiente.",source:"Marco interpretativo; fuentes específicas a incorporar.",author:"Ocarina Wild.",gallery:[]},
   {id:"monte",name:"MONTE",kind:"ambiente",zone:"Monte",status:"marco",evidence:"Marco territorial",desc:"Viento · suelo · adaptación",detail:"El ambiente seco como protagonista, no como fondo.",habitat:"Monte y ambientes secos.",season:"Por documentar.",sound:"Paisaje sonoro pendiente.",observations:"Pendiente.",source:"Marco interpretativo; fuentes específicas a incorporar.",author:"Ocarina Wild.",gallery:[]}
  ],
  note:"No empezamos por un mapa lleno de puntos. La cartografía aparecerá cuando los registros tengan contexto suficiente."
 },
 archivo:{
  kicker:"04 · ARCHIVO",title:"Mirar también es<br><i>documentar.</i>",
  lead:"El archivo sostiene todo lo demás. Acá se ve cómo una fotografía, una observación o un dato se transforma en una pieza trazable.",
  hero:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Patagonia_landscape.jpg",
  facts:[["01","fuente"],["02","registro"],["03","contexto"]],
  zones:["Todos","Fuentes","Registros","Método","Créditos"],
  cards:[
   {id:"fuente",name:"FUENTE",kind:"método",zone:"Fuentes",status:"regla",evidence:"Regla metodológica",desc:"De dónde sale",detail:"Libro, organismo, especialista, archivo, observación o publicación identificable.",habitat:"Aplicable a cualquier expediente.",season:"No aplica.",sound:"No aplica.",observations:"Toda afirmación debe poder rastrearse.",source:"Método Ocarina Wild.",author:"Ocarina Wild.",gallery:[]},
   {id:"registro",name:"REGISTRO",kind:"método",zone:"Registros",status:"regla",evidence:"Regla metodológica",desc:"Qué ocurrió",detail:"Fecha, autor, imagen, audio, especie o elemento y lugar general.",habitat:"Aplicable a registros de campo.",season:"Se registra cuando corresponda.",sound:"Puede incluir audio.",observations:"El registro separa lo observado de lo interpretado.",source:"Método Ocarina Wild.",author:"Ocarina Wild.",gallery:[]},
   {id:"contexto",name:"CONTEXTO",kind:"método",zone:"Método",status:"regla",evidence:"Regla metodológica",desc:"Qué significa",detail:"Hábitat, relación territorial, temporada y límites de lo que sabemos.",habitat:"Define el marco de lectura.",season:"Debe explicitarse cuando sea relevante.",sound:"Puede complementar la interpretación.",observations:"Siempre distinguir dato, observación e interpretación.",source:"Método Ocarina Wild.",author:"Ocarina Wild.",gallery:[]},
   {id:"creditos",name:"CRÉDITOS",kind:"método",zone:"Créditos",status:"regla",evidence:"Regla metodológica",desc:"Quién lo hizo",detail:"La procedencia de cada imagen, dato y aporte queda reconocida.",habitat:"Aplicable a cada pieza.",season:"No aplica.",sound:"Incluye autoría de audio.",observations:"Los créditos forman parte del expediente.",source:"Método Ocarina Wild.",author:"Ocarina Wild.",gallery:[]}
  ],
  note:"Fuente ≠ fotografía ≠ presencia. Una imagen de internet puede enseñar a reconocer una especie; no demuestra por sí sola presencia local."
 }
};

const state={type:null,filter:"Todos",query:"",favorites:new Set(loadFavorites())};
function loadFavorites(){try{const x=JSON.parse(localStorage.getItem("ow-favorites")||"[]");return Array.isArray(x)?x:[]}catch{return[]}}
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const img=(url,alt="")=>url?'<img src="'+esc(url)+'" alt="'+esc(alt)+'" loading="lazy">':'<div class="image-empty"><span>IMAGEN POR INCORPORAR</span></div>';
const saveFav=()=>localStorage.setItem("ow-favorites",JSON.stringify([...state.favorites]));
function visibleCards(d){return d.cards.filter(c=>(state.filter==="Todos"||state.filter==="★"||c.zone===state.filter)&&(state.filter!=="★"||state.favorites.has(c.id))&&(state.query===""||[c.name,c.scientific,c.kind,c.zone,c.desc,c.evidence].join(" ").toLowerCase().includes(state.query.toLowerCase())))}
function card(c,index){
 const fav=state.favorites.has(c.id);
 return '<article class="wild-card" data-card="'+esc(c.id)+'">'+(c.image?img(c.image,c.name):'<div class="card-art"><span>OCARINA WILD</span></div>')+
 '<div class="card-body"><div class="card-top"><small>0'+(index+1)+' · '+esc(c.kind)+'</small><button class="fav '+(fav?"on":"")+'" data-fav="'+esc(c.id)+'" aria-label="'+(fav?"Quitar de favoritos":"Guardar")+'">'+(fav?"★":"☆")+'</button></div><h3>'+esc(c.name)+'</h3><p>'+esc(c.scientific||c.desc)+'</p><em>'+esc(c.desc)+'</em><span class="status '+esc(c.status)+'">'+esc(c.status)+'</span></div></article>';
}
function render(){
 const d=DATA[state.type];if(!d)return;
 const cards=visibleCards(d);
 const zones=d.zones.map((z,i)=>'<button class="zone '+(state.filter===z?"active":"")+'" data-zone="'+esc(z)+'"><span>0'+(i+1)+'</span><strong>'+esc(z)+'</strong><i>'+((state.filter===z)?"viendo":"explorar")+'</i></button>').join("");
 const list=cards.length?cards.map(card).join(""):'<div class="empty-state"><strong>'+ (state.filter==="★"?"Todavía no guardaste fichas.":"No encontramos ese registro.")+'</strong><span>'+ (state.filter==="★"?"Guardá una ficha con ☆ para construir tu propia ruta.":"Probá otra palabra o abrí “Todos”.")+'</span></div>';
 content.innerHTML='<section class="deep-panel"><div class="deep-hero">'+img(d.hero,d.title.replace(/<[^>]+>/g," "))+'<div class="hero-shade"></div><div class="hero-copy"><span>'+d.kicker+'</span><h2>'+d.title+'</h2><p>'+d.lead+'</p></div></div><div class="deep-body"><div class="panel-tools"><button class="back-home" data-home>← CENTRAL</button><label class="search"><span>⌕</span><input id="search" value="'+esc(state.query)+'" placeholder="Buscar dentro de esta puerta…" autocomplete="off"></label><button class="fav-filter '+(state.filter==="★"?"on":"")+'" data-favorites>★ '+state.favorites.size+'</button></div><div class="fact-row">'+d.facts.map(x=>'<div class="fact"><b>'+esc(x[0])+'</b><span>'+esc(x[1])+'</span></div>').join("")+'</div><div class="explore-head"><div><span class="eyebrow">EXPLORAR</span><h3>Elegí una entrada.</h3></div><span class="micro">El sistema filtra sin cambiar de página.</span></div><div class="zone-grid">'+zones+'</div><div class="explore-head library-head"><div><span class="eyebrow">BIBLIOTECA VISUAL · '+cards.length+'</span><h3>Mirar antes de leer.</h3></div><span class="micro">Tocá una ficha para entrar en profundidad.</span></div><div class="wild-grid">'+list+'</div><div class="method"><span class="eyebrow">MÉTODO OCARINA WILD</span><p>'+esc(d.note)+'</p></div></div></section>';
 bindPanel();
}
function open(type){
 if(!DATA[type])return;
 state.type=type;state.filter="Todos";state.query="";
 history.replaceState(null,"","#"+type);panel.showModal();render();
}
function field(label,value,icon=""){
 return '<div class="exp-field"><div class="field-head"><span>'+esc(icon)+'</span><b>'+esc(label)+'</b></div><p>'+esc(value||"Pendiente de incorporar.")+'</p></div>';
}
function gallery(c){
 const images=[...(c.image?[c.image]:[]),...(Array.isArray(c.gallery)?c.gallery:[])];
 if(!images.length)return '<div class="gallery-empty">GALERÍA PENDIENTE DE INCORPORAR</div>';
 return images.map((u,i)=>'<figure>'+img(u,c.name+" · "+(i+1))+'</figure>').join("");
}
function detail(id){
 const d=DATA[state.type],c=d.cards.find(x=>x.id===id);if(!c)return;
 const fav=state.favorites.has(c.id);
 content.innerHTML='<section class="detail-panel">'+
 '<div class="detail-image">'+(c.image?img(c.image,c.name):'<div class="card-art"><span>IMAGEN POR INCORPORAR</span></div>')+'<div class="detail-image-caption">IMAGEN PRINCIPAL · '+esc(c.status)+'</div></div>'+
 '<div class="detail-copy"><button class="mini-back" data-back>← VOLVER A LA BIBLIOTECA</button><span class="eyebrow">'+esc(d.kicker)+' · EXPEDIENTE VIVO</span><h2>'+esc(c.name)+'</h2><p class="scientific">'+esc(c.scientific||c.kind)+'</p><p class="detail-lead">'+esc(c.desc)+'</p><div class="evidence-badge"><span>NIVEL DE EVIDENCIA</span><strong>'+esc(c.evidence||c.status)+'</strong></div><button class="save-detail '+(fav?"on":"")+'" data-fav="'+esc(c.id)+'">'+(fav?"★ GUARDADO":"☆ GUARDAR PARA VOLVER")+'</button></div>'+
 '<div class="exp-content">'+
 '<section class="exp-intro"><span class="eyebrow">01 · IDENTIDAD</span><h3>Leer el registro, no solo la imagen.</h3><p>'+esc(c.detail)+'</p></section>'+
 '<section class="exp-section"><div class="section-title"><span>02</span><h3>TERRITORIO</h3></div><div class="field-grid">'+field("AMBIENTE",c.habitat,"⌂")+field("ZONA",c.zone,"⌖")+field("MAPA","Disponible cuando exista ubicación contextual suficiente.","+")+'</div></section>'+
 '<section class="exp-section"><div class="section-title"><span>03</span><h3>TIEMPO</h3></div><div class="field-grid">'+field("TEMPORADA",c.season,"◷")+field("FECHA DEL REGISTRO","Pendiente de registro local.","◷")+'</div></section>'+
 '<section class="exp-section"><div class="section-title"><span>04</span><h3>ESCUCHA</h3></div><div class="sound-box"><span>▶</span><div><b>SONIDO DE CAMPO</b><p>'+esc(c.sound)+'</p></div></div></section>'+
 '<section class="exp-section"><div class="section-title"><span>05</span><h3>GALERÍA</h3></div><div class="gallery">'+gallery(c)+'</div></section>'+
 '<section class="exp-section"><div class="section-title"><span>06</span><h3>OBSERVACIONES</h3></div><div class="observation">'+field("CUADERNO DE CAMPO",c.observations,"✎")+'</div></section>'+
 '<section class="exp-section"><div class="section-title"><span>07</span><h3>EVIDENCIA</h3></div><div class="evidence-grid">'+field("FUENTE",c.source,"◉")+field("AUTOR / CRÉDITO",c.author,"©")+field("ESTADO",c.status,"!")+'</div></section>'+
 '<div class="exp-rule"><b>LEY OCARINA WILD</b><p>Fuente ≠ fotografía ≠ presencia local. Todo expediente muestra qué sabemos, qué vemos y qué todavía falta comprobar.</p></div>'+
 '</div></section>';
 bindPanel();
}
function bindPanel(){
 content.querySelectorAll("[data-zone]").forEach(b=>b.onclick=()=>{state.filter=b.dataset.zone;render()});
 content.querySelectorAll("[data-card]").forEach(c=>c.onclick=e=>{if(e.target.closest("[data-fav]"))return;detail(c.dataset.card)});
 content.querySelectorAll("[data-fav]").forEach(b=>b.onclick=e=>{e.stopPropagation();const id=b.dataset.fav;state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);saveFav();detail(id)});
 content.querySelectorAll("[data-home]").forEach(b=>b.onclick=close);
 content.querySelectorAll("[data-back]").forEach(b=>b.onclick=render);
 const search=document.querySelector("#search");if(search){search.oninput=()=>{state.query=search.value;render();requestAnimationFrame(()=>{const s=document.querySelector("#search");s?.focus();s?.setSelectionRange(state.query.length,state.query.length)})}}
 const fav=document.querySelector("[data-favorites]");if(fav)fav.onclick=()=>{state.filter=state.filter==="★"?"Todos":"★";render()};
}
function close(){panel.close();history.replaceState(null,"",location.pathname+location.search)}
document.querySelectorAll("[data-open]").forEach(b=>b.addEventListener("click",()=>open(b.dataset.open)));
closeBtn.addEventListener("click",close);
panel.addEventListener("click",e=>{if(e.target===panel)close()});
panel.addEventListener("cancel",close);
window.addEventListener("keydown",e=>{if(e.key==="Escape"&&panel.open)close();if(e.key==="/"&&panel.open&&!e.target.matches("input")){e.preventDefault();document.querySelector("#search")?.focus()}});
window.addEventListener("hashchange",()=>{const type=location.hash.slice(1);if(DATA[type]){state.type=type;panel.showModal();render()}else if(panel.open)close()});
const initial=location.hash.slice(1);if(DATA[initial])open(initial);
