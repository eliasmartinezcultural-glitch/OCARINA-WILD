import { records, extraKnowledge, SOURCES } from "../data/catalog.js";
import { state } from "./state.js";
import { validateCatalog } from "./policy.js";

const audit=validateCatalog(records);
if(!audit.valid)console.error("[OCARINA WILD] Catalog blocked by conservation policy:",audit.errors);

const ENV_KEYS={
  rio:["río","ribereño","agua","acuático"],
  chacras:["chacra","cultivo","canales","urbano","arbolado"],
  dique:["dique","humedal"],
  monte:["monte","natural","vegetación"]
};
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));

function escapeHTML(value){return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function getRecord(id){return records.find(r=>r.id===id)||null;}
function sourceFor(record){return SOURCES[record?.sourceRef]||null;}
function imageSourcePage(record){
  if(!record?.image||!record.image.includes("commons.wikimedia.org/wiki/Special:Redirect/file/"))return "";
  const filename=record.image.split("/file/")[1];
  return "https://commons.wikimedia.org/wiki/File:"+filename;
}
function imageMarkup(record){
  if(!record?.image)return '<div class="dialog-image species-photo-empty" role="img" aria-label="Fotografía local pendiente"><span>IMAGEN LOCAL PENDIENTE</span></div>';
  const source=imageSourcePage(record);
  return '<div class="dialog-image"><img src="'+escapeHTML(record.image)+'" alt="Foto de referencia de '+escapeHTML(record.name)+'" decoding="async"><span class="tag">FOTO DE REFERENCIA · '+escapeHTML(record.imageCredit||"Fuente visual externa")+'</span>'+(source?'<a class="image-source-link" target="_blank" rel="noopener noreferrer" href="'+escapeHTML(source)+'">VER ARCHIVO Y LICENCIA ↗</a>':"")+'</div>';
}
function typeLabel(record){return record.type==="flora"?"FLORA":record.group==="ave"?"AVE":record.group==="pez"?"PEZ":"FAUNA";}
function matchesEnv(record){
  if(state.env==="all")return true;
  const text=(record.environment+" "+record.note).toLowerCase();
  return ENV_KEYS[state.env].some(k=>text.includes(k));
}
function score(record){
  if(!state.query)return 0;
  const q=state.query.toLowerCase();
  const text=(record.name+" "+record.latin+" "+record.environment+" "+record.note+" "+typeLabel(record)).toLowerCase();
  let s=0;
  if(record.name.toLowerCase().includes(q))s+=10;
  if(record.latin.toLowerCase().includes(q))s+=8;
  if(text.includes(q))s+=3;
  return s;
}
function visibleRecords(){
  let arr=records.filter(r=>(state.filter==="all"||r.type===state.filter)&&matchesEnv(r));
  if(state.query)arr=arr.filter(r=>score(r)>0);
  if(state.sort==="name")arr.sort((a,b)=>a.name.localeCompare(b.name,"es"));
  else if(state.sort==="evidence")arr.sort((a,b)=>(a.status==="documentado"?0:1)-(b.status==="documentado"?0:1));
  else if(state.query)arr.sort((a,b)=>score(b)-score(a));
  return arr;
}
function cardMarkup(record){
  const k=extraKnowledge[record.id]||{};
  return '<button class="species-card" type="button" data-open="'+escapeHTML(record.id)+'">'+
    (record.image?'<div class="species-photo"><img src="'+escapeHTML(record.image)+'" alt="" loading="lazy" decoding="async"><span>'+escapeHTML(record.statusLabel||"REGISTRO")+' · FOTO DE REFERENCIA</span></div>':'<div class="species-photo species-photo-empty"><span>IMAGEN LOCAL PENDIENTE</span></div>')+
    '<div class="species-card-body"><span class="type">'+escapeHTML(typeLabel(record))+' · '+escapeHTML(record.id)+'</span><h3>'+escapeHTML(record.name)+'</h3><em>'+escapeHTML(record.latin)+'</em><p class="teaser">'+escapeHTML(k.local||record.note)+'</p></div></button>';
}
function bindImageFallbacks(root=document){
  root.querySelectorAll("img").forEach(img=>img.addEventListener("error",()=>{
    img.style.display="none";
    const parent=img.parentElement;
    if(!parent)return;
    parent.classList.add("species-photo-empty");
    if(!parent.querySelector(".image-fallback-label")){const label=document.createElement("span");label.className="image-fallback-label";label.textContent="IMAGEN DE REFERENCIA NO DISPONIBLE";parent.appendChild(label);}
  },{once:true}));
}
function renderGrid(){
  const visible=visibleRecords();
  $("#speciesGrid").innerHTML=visible.length?visible.map(cardMarkup).join(""):'<div class="empty-state"><strong>No encontramos esa vida.</strong><p>Probá con otro nombre, ambiente o categoría. Si realmente la viste en Chañar, podés dejar el registro.</p></div>';
  $("#speciesStatus").textContent=visible.length+" fichas visibles · "+records.length+" registros en el catálogo";
  $("#speciesGrid [data-open]").forEach(b=>b.addEventListener("click",()=>openRecord(b.dataset.open)));
  bindImageFallbacks($("#speciesGrid"));
}
function updateFilters(){
  $$(".filter-chip").forEach(b=>{const active=b.dataset.kind===state.filter;b.classList.toggle("active",active);b.setAttribute("aria-pressed",active?"true":"false");});
  $$(".env-chip").forEach(b=>{const active=b.dataset.env===state.env;b.classList.toggle("active",active);b.setAttribute("aria-pressed",active?"true":"false");});
}
function renderStats(){
  const fauna=records.filter(r=>r.type==="fauna").length, flora=records.filter(r=>r.type==="flora").length;
  const documented=records.filter(r=>r.status==="documentado").length, pending=records.length-documented;
  $("#statTotal").textContent=records.length; $("#statFauna").textContent=fauna; $("#statFlora").textContent=flora;
  $("#statDocumented").textContent=documented; $("#statPending").textContent=pending;
}
function panelMarkup(id,title,body,active=false){return '<section class="fact-panel'+(active?" active":"")+'" data-panel="'+id+'"'+(active?"":" hidden")+"><h3>"+title+"</h3>"+body+"</section>";}
function fact(label,value){return '<div class="fact"><b>'+label+'</b><span>'+escapeHTML(value||"Investigación pendiente.")+'</span></div>';}

function openRecord(id){
  const record=getRecord(id); if(!record)return;
  state.lastFocus=document.activeElement;
  const k=extraKnowledge[id]||{}, source=sourceFor(record);
  const sourceHtml=source?'<a href="'+escapeHTML(source.url)+'" target="_blank" rel="noopener noreferrer">'+escapeHTML(source.label)+'</a>':"Procedencia detallada pendiente.";
  let location="";
  if(record.lat&&record.lng&&!record.hideLocation)location='<a class="map-link" target="_blank" rel="noopener noreferrer" href="https://www.openstreetmap.org/?mlat='+record.lat+'&mlon='+record.lng+'#map=14/'+record.lat+'/'+record.lng+'">VER UBICACIÓN PUBLICADA ↗</a>';
  $("#dialogContent").innerHTML='<div class="dialog-wrap">'+imageMarkup(record)+
    '<div class="dialog-copy"><span class="eyebrow">'+escapeHTML(record.statusLabel)+' · '+escapeHTML(record.id)+'</span>'+
    '<h2 id="dialogTitle">'+escapeHTML(record.name)+'</h2><div class="latin">'+escapeHTML(record.latin)+'</div>'+
    '<p class="intro-note">'+escapeHTML(record.note)+'</p>'+
    '<div class="fact-nav" role="tablist" aria-label="Información de la especie">'+
    '<button class="active" type="button" role="tab" aria-selected="true" data-tab="mira">MIRÁ</button>'+
    '<button type="button" role="tab" aria-selected="false" data-tab="vive">CÓMO VIVE</button>'+
    '<button type="button" role="tab" aria-selected="false" data-tab="chañar">EN CHAÑAR</button>'+
    '<button type="button" role="tab" aria-selected="false" data-tab="archivo">ARCHIVO</button></div>'+
    panelMarkup("mira","¿Qué estás viendo?",'<p>'+escapeHTML(k.recognition||"La descripción visual todavía necesita una ficha específica.")+'</p>'+
      '<div class="fact-grid">'+fact("TIPO",typeLabel(record))+fact("AMBIENTE",record.environment)+fact("ESTADO DE EVIDENCIA",record.statusLabel)+fact("IDENTIFICACIÓN",record.latin)+'</div>',true)+
    panelMarkup("vive","Cómo vive",'<div class="fact-grid">'+fact("ALIMENTACIÓN",k.diet)+fact("COMPORTAMIENTO",k.behavior)+'</div><p class="research-question"><b>PREGUNTA ABIERTA</b><br>'+escapeHTML(k.question||"¿Qué falta conocer sobre esta vida?")+'</p>')+
    panelMarkup("chañar","Qué sabemos aquí",'<p>'+escapeHTML(k.local||record.note)+'</p>'+location+'<div class="source-note"><b>FUENTE DEL REGISTRO</b><br>'+sourceHtml+'</div>')+
    panelMarkup("archivo","Archivo y trazabilidad",'<div class="fact-grid">'+fact("CÓDIGO",record.id)+fact("FECHA",record.date||"No consignada")+fact("CANTIDAD",record.count||"No consignada")+fact("PROCEDENCIA",source?source.label:"Pendiente")+'</div><div class="source-note">Las fotografías funcionan como referencia visual y no prueban por sí mismas la presencia local. El nivel de evidencia pertenece al registro escrito indicado arriba.</div>')+
    '</div></div>';
  bindImageFallbacks($("#dialogContent"));
  const dialog=$("#speciesDialog"); dialog.showModal(); document.body.classList.add("no-scroll");
  $$("#dialogContent [data-tab]").forEach(tab=>tab.addEventListener("click",()=>{
    $$("#dialogContent [data-tab]").forEach(t=>{const a=t===tab;t.classList.toggle("active",a);t.setAttribute("aria-selected",a?"true":"false");});
    $$("#dialogContent [data-panel]").forEach(p=>{const a=p.dataset.panel===tab.dataset.tab;p.classList.toggle("active",a);p.hidden=!a;});
  }));
}
function closeDialog(){
  const d=$("#speciesDialog"); if(d.open)d.close();
  document.body.classList.remove("no-scroll");
  if(state.lastFocus&&typeof state.lastFocus.focus==="function")state.lastFocus.focus();
}
function randomRecord(){
  const arr=visibleRecords().filter(r=>r.randomEligible!==false); if(!arr.length)return;
  const r=arr[Math.floor(Math.random()*arr.length)]; openRecord(r.id);
}
function openObservation(){
  state.lastFocus=document.activeElement;
  $("#dialogContent").innerHTML='<div class="dialog-copy observation-copy"><span class="eyebrow">CHAÑAR VIVO · REGISTRO COMUNITARIO</span><h2 id="dialogTitle">Viste algo.<br><em>Dejalo acá.</em></h2><p class="intro-note">Este formulario guarda una observación en este dispositivo. No convierte automáticamente una observación en una especie confirmada.</p><form class="observation-form" id="obsForm"><label for="obsName">¿QUÉ VISTE?</label><input id="obsName" name="name" required placeholder="Ej.: un ave negra junto al río"><label for="obsPlace">¿DÓNDE?</label><input id="obsPlace" name="place" placeholder="Ej.: orilla del Neuquén, chacra, dique"><label for="obsDate">¿CUÁNDO?</label><input id="obsDate" name="date" type="date"><label for="obsNote">¿QUÉ OBSERVASTE?</label><textarea id="obsNote" name="note" rows="5" placeholder="Color, tamaño, cantidad, comportamiento, foto disponible..."></textarea><div class="obs-buttons"><button type="submit">GUARDAR EN ESTE DISPOSITIVO</button><button type="button" id="obsExport">EXPORTAR REGISTROS</button></div><p class="observation-help">Privacidad: no se envía nada a un servidor. Para compartir un registro, exportalo y decidí vos dónde entregarlo.</p></form><div id="obsSaved" class="saved-note" aria-live="polite"></div></div>';
  const d=$("#speciesDialog"); d.showModal(); document.body.classList.add("no-scroll");
  $("#obsForm").addEventListener("submit",e=>{e.preventDefault();const fd=new FormData(e.currentTarget);let arr=[];try{arr=JSON.parse(localStorage.getItem("ow-observations")||"[]");if(!Array.isArray(arr))arr=[];}catch(_){arr=[];}arr.push({id:"OBS-"+Date.now(),name:fd.get("name"),place:fd.get("place"),date:fd.get("date"),note:fd.get("note"),created:new Date().toISOString()});try{localStorage.setItem("ow-observations",JSON.stringify(arr));$("#obsSaved").textContent="Registro guardado localmente. Ya forma parte de tu archivo de observaciones, no del catálogo confirmado.";}catch(_){$("#obsSaved").textContent="No se pudo guardar en este dispositivo. El registro no fue enviado a ningún servidor.";}e.currentTarget.reset();});
  $("#obsExport").addEventListener("click",()=>{let data="[]";try{data=localStorage.getItem("ow-observations")||"[]";}catch(_){};const blob=new Blob([data],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="ocarina-wild-observaciones.json";a.click();URL.revokeObjectURL(url);});
}
function init(){
  renderGrid(); renderStats(); updateFilters();
  $$(".filter-chip").forEach(b=>b.addEventListener("click",()=>{state.filter=b.dataset.kind;updateFilters();renderGrid();}));
  $$(".env-chip").forEach(b=>b.addEventListener("click",()=>{state.env=b.dataset.env;updateFilters();renderGrid();}));
  $("#speciesSearch").addEventListener("input",e=>{state.query=e.target.value.trim();renderGrid();});
  $("#sortSpecies").addEventListener("change",e=>{state.sort=e.target.value;renderGrid();});
  $("#surprise")?.addEventListener("click",randomRecord);
  $("#observe").addEventListener("click",openObservation);
  $("#closeDialog").addEventListener("click",closeDialog);
  $("#speciesDialog").addEventListener("click",e=>{if(e.target.id==="speciesDialog")closeDialog();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#speciesDialog").open)closeDialog();});
  $$(".jump-env,.territory-door").forEach(b=>b.addEventListener("click",()=>{state.env=b.dataset.env;updateFilters();renderGrid();document.querySelector("#vidas").scrollIntoView({behavior:"smooth"});}));
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();

export function initWild(){init();}
