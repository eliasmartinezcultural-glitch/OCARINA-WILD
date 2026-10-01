/* OCARINA WILD · Motor de exploración v1
   Principio: sistema profundo / interfaz simple.
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
   {id:"calandria-grande",name:"Calandria grande",scientific:"Mimus saturninus",kind:"ave",zone:"Chacras",status:"referencia",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mimus_saturninus_(6223460929).jpg",desc:"Ave de ambientes abiertos y arbolados.",detail:"Ficha local pendiente de completar con observación, fecha, autor y fuente específica."},
   {id:"carpintero-real",name:"Carpintero real",scientific:"Colaptes melanochloros",kind:"ave",zone:"Monte",status:"referencia",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Colaptes_melanochloros_melanolaimus,_CABA.jpg",desc:"Referencia visual para reconocer plumaje y postura.",detail:"La imagen permite estudiar rasgos visuales; no constituye por sí sola un registro local."},
   {id:"golondrina-patagonica",name:"Golondrina patagónica",scientific:"Tachycineta leucopyga",kind:"ave",zone:"Ribera",status:"referencia",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Tachycineta_leucopyga_1894.jpg",desc:"Ave asociada a espacios abiertos y cuerpos de agua.",detail:"Registro local pendiente de documentar con evidencia propia."},
   {id:"pejerrey",name:"Pejerrey",scientific:"Odontesthes sp.",kind:"pez",zone:"Dique",status:"pendiente",desc:"Ficha local pendiente: especie, ambiente y evidencia.",detail:"No se afirma especie concreta hasta contar con identificación suficiente."}
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
   {id:"arboles-ribera",name:"Árboles de ribera",kind:"vegetación",zone:"Ribera",status:"referencia",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Populus_nigra_001.jpg",desc:"Reconocimiento visual, estación y relación con el agua.",detail:"La especie y su presencia local deben verificarse antes de convertirse en ficha definitiva."},
   {id:"vegetacion-chacras",name:"Vegetación de chacras",kind:"vegetación",zone:"Chacras",status:"pendiente",desc:"Especies cultivadas y espontáneas: separar, no mezclar.",detail:"Inventario local pendiente."},
   {id:"flora-canales",name:"Flora de canales",kind:"vegetación",zone:"Canales",status:"pendiente",desc:"Un paisaje cotidiano que merece ser documentado.",detail:"Inventario local pendiente."},
   {id:"vegetacion-monte",name:"Vegetación del monte",kind:"vegetación",zone:"Monte",status:"pendiente",desc:"Adaptación al viento, suelo y disponibilidad de agua.",detail:"Inventario local pendiente."}
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
   {id:"rio",name:"RÍO",kind:"ambiente",zone:"Agua",status:"marco",desc:"Agua · ribera · movimiento",detail:"El agua como estructura del paisaje y de la vida local."},
   {id:"chacras",name:"CHACRAS",kind:"ambiente",zone:"Producción",status:"marco",desc:"Riego · arbolado · producción",detail:"La trama productiva como parte visible del territorio."},
   {id:"dique",name:"DIQUE",kind:"ambiente",zone:"Agua",status:"marco",desc:"Agua · infraestructura · aves",detail:"Un paisaje donde naturaleza y obra humana conviven."},
   {id:"monte",name:"MONTE",kind:"ambiente",zone:"Monte",status:"marco",desc:"Viento · suelo · adaptación",detail:"El ambiente seco como protagonista, no como fondo."}
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
   {id:"fuente",name:"FUENTE",kind:"método",zone:"Fuentes",status:"regla",desc:"De dónde sale",detail:"Libro, organismo, especialista, archivo, observación o publicación identificable."},
   {id:"registro",name:"REGISTRO",kind:"método",zone:"Registros",status:"regla",desc:"Qué ocurrió",detail:"Fecha, autor, imagen, audio, especie o elemento y lugar general."},
   {id:"contexto",name:"CONTEXTO",kind:"método",zone:"Método",status:"regla",desc:"Qué significa",detail:"Hábitat, relación territorial, temporada y límites de lo que sabemos."},
   {id:"creditos",name:"CRÉDITOS",kind:"método",zone:"Créditos",status:"regla",desc:"Quién lo hizo",detail:"La procedencia de cada imagen, dato y aporte queda reconocida."}
  ],
  note:"Fuente ≠ fotografía ≠ presencia. Una imagen de internet puede enseñar a reconocer una especie; no demuestra por sí sola presencia local."
 }
};

const state={type:null,filter:"Todos",query:"",favorites:new Set(JSON.parse(localStorage.getItem("ow-favorites")||"[]"))};

const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const img=(url,alt="")=>url?'<img src="'+esc(url)+'" alt="'+esc(alt)+'" loading="lazy">':'<div class="image-empty"><span>IMAGEN POR INCORPORAR</span></div>';
const saveFav=()=>localStorage.setItem("ow-favorites",JSON.stringify([...state.favorites]));

function visibleCards(d){
 return d.cards.filter(c=>(state.filter==="Todos"||state.filter==="★"||c.zone===state.filter)&&(state.filter!=="★"||state.favorites.has(c.id))&&(state.query===""||[c.name,c.scientific,c.kind,c.zone,c.desc].join(" ").toLowerCase().includes(state.query.toLowerCase())));
}

function card(c,index){
 const fav=state.favorites.has(c.id);
 return '<article class="wild-card" data-card="'+esc(c.id)+'">'+(c.image?img(c.image,c.name):'<div class="card-art"><span>OCARINA WILD</span></div>')+
 '<div class="card-body"><div class="card-top"><small>0'+(index+1)+' · '+esc(c.kind)+'</small><button class="fav '+(fav?"on":"")+'" data-fav="'+esc(c.id)+'" aria-label="'+(fav?"Quitar de favoritos":"Guardar")+'">'+(fav?"★":"☆")+'</button></div><h3>'+esc(c.name)+'</h3><p>'+esc(c.scientific||c.desc)+'</p><em>'+esc(c.desc)+'</em><span class="status '+esc(c.status)+'">'+esc(c.status)+'</span></div></article>';
}

function render(){
 const d=DATA[state.type]; if(!d)return;
 const cards=visibleCards(d);
 const zones=d.zones.map((z,i)=>'<button class="zone '+(state.filter===z?"active":"")+'" data-zone="'+esc(z)+'"><span>0'+(i+1)+'</span><strong>'+esc(z)+'</strong><i>'+((state.filter===z)?"viendo":"explorar")+'</i></button>').join("");
 const list=cards.length?cards.map(card).join(""):'<div class="empty-state"><strong>No encontramos ese registro.</strong><span>Probá otra palabra o abrí “Todos”.</span></div>';
 content.innerHTML='<section class="deep-panel"><div class="deep-hero">'+img(d.hero,d.title.replace(/<[^>]+>/g," "))+'<div class="hero-shade"></div><div class="hero-copy"><span>'+d.kicker+'</span><h2>'+d.title+'</h2><p>'+d.lead+'</p></div></div><div class="deep-body"><div class="panel-tools"><button class="back-home" data-home>← CENTRAL</button><label class="search"><span>⌕</span><input id="search" value="'+esc(state.query)+'" placeholder="Buscar dentro de esta puerta…" autocomplete="off"></label><button class="fav-filter '+(state.filter==="★"?"on":"")+'" data-favorites>★ '+state.favorites.size+'</button></div><div class="fact-row">'+d.facts.map(x=>'<div class="fact"><b>'+esc(x[0])+'</b><span>'+esc(x[1])+'</span></div>').join("")+'</div><div class="explore-head"><div><span class="eyebrow">EXPLORAR</span><h3>Elegí una entrada.</h3></div><span class="micro">El sistema filtra sin cambiar de página.</span></div><div class="zone-grid">'+zones+'</div><div class="explore-head library-head"><div><span class="eyebrow">BIBLIOTECA VISUAL · '+cards.length+'</span><h3>Mirar antes de leer.</h3></div><span class="micro">Tocá una ficha para entrar en profundidad.</span></div><div class="wild-grid">'+list+'</div><div class="method"><span class="eyebrow">MÉTODO OCARINA WILD</span><p>'+esc(d.note)+'</p></div></div></section>';
 bindPanel();
}

function open(type){
 if(!DATA[type])return;
 state.type=type;state.filter="Todos";state.query="";
 history.replaceState(null,"","#"+type);
 panel.showModal();render();
}

function detail(id){
 const d=DATA[state.type],c=d.cards.find(x=>x.id===id);if(!c)return;
 const fav=state.favorites.has(c.id);
 content.innerHTML='<section class="detail-panel">'+
 '<div class="detail-image">'+(c.image?img(c.image,c.name):'<div class="card-art"><span>IMAGEN POR INCORPORAR</span></div>')+'</div>'+
 '<div class="detail-copy"><button class="mini-back" data-back>← VOLVER A LA BIBLIOTECA</button><span class="eyebrow">'+esc(d.kicker)+' · '+esc(c.status)+'</span><h2>'+esc(c.name)+'</h2><p class="scientific">'+esc(c.scientific||c.kind)+'</p><p class="detail-lead">'+esc(c.desc)+'</p><div class="detail-block"><span>LO QUE SABEMOS</span><p>'+esc(c.detail)+'</p></div><div class="detail-block"><span>AMBIENTE</span><p>'+esc(c.zone)+'</p></div><button class="save-detail '+(fav?"on":"")+'" data-fav="'+esc(c.id)+'">'+(fav?"★ GUARDADO":"☆ GUARDAR PARA VOLVER")+'</button></div></section>';
 bindPanel();
}

function bindPanel(){
 content.querySelectorAll("[data-zone]").forEach(b=>b.onclick=()=>{state.filter=b.dataset.zone;render()});
 content.querySelectorAll("[data-card]").forEach(c=>c.onclick=e=>{if(e.target.closest("[data-fav]"))return;detail(c.dataset.card)});
 content.querySelectorAll("[data-fav]").forEach(b=>b.onclick=e=>{e.stopPropagation();const id=b.dataset.fav;state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);saveFav();render()});
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
