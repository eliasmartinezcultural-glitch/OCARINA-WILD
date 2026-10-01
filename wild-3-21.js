import { records } from "./data/catalog.js";
import { wild320Sources, wild320Principles, WILD_320_VERSION } from "./data/wild-3-20.js";
const esc=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function init(){
  const media=document.querySelector("#hubMedia");
  if(media){
    const picks=records.filter(r=>r.image).slice(0,4);
    media.innerHTML=picks.map((r,i)=>'<div class="hub-photo"><img src="'+esc(r.image)+'" alt="Foto de referencia: '+esc(r.name)+'" loading="'+(i?"lazy":"eager")+'"><span>REFERENCIA · '+esc(r.name)+'</span></div>').join("");
    media.querySelectorAll("img").forEach(img=>img.addEventListener("error",()=>{img.parentElement.style.display="none"},{once:true}));
  }
  document.querySelectorAll("[data-door]").forEach(btn=>btn.addEventListener("click",()=>{
    const kind=btn.dataset.door;
    if(kind==="archivo"){openArchive();return}
    if(kind==="territorio"){document.querySelector("#territorio")?.scrollIntoView({behavior:"smooth"});return}
    const chip=document.querySelector('[data-kind="'+kind+'"]');
    if(chip){chip.click();document.querySelector("#vidas")?.scrollIntoView({behavior:"smooth"});}
  }));
  document.querySelector("#openAtlas")?.addEventListener("click",openArchive);
  document.querySelector("#closeAtlas")?.addEventListener("click",()=>document.querySelector("#atlasDialog")?.close());
}
function openArchive(){
 const d=document.querySelector("#atlasDialog"); if(!d)return;
 const content=document.querySelector("#atlasContent");
 content.innerHTML='<div class="atlas-dialog-inner"><span class="eyebrow">OCARINA WILD · 3.21 · ARCHIVO PROFUNDO</span><h2 id="atlasDialogTitle">La parte compleja<br><em>queda debajo.</em></h2><p>El visitante ve un atlas simple. Debajo existe una cadena de fuentes, evidencia, taxonomía, derechos, revisión y protección de datos. Esta capa permite profundizar sin convertir la portada en una planilla.</p><div class="archive-tabs" role="tablist"><button class="active" data-pane="mapa">MAPA</button><button data-pane="fuentes">FUENTES</button><button data-pane="reglas">REGLAS</button></div><div class="archive-pane" data-view="mapa"><div class="archive-grid"><article class="archive-card"><b>CADENA</b><strong>FUENTE → RECURSO → EVIDENCIA → REGISTRO → REVISIÓN</strong><p>Ningún enlace se salta. Una fotografía regional no se transforma en presencia local.</p></article><article class="archive-card"><b>ESCALA</b><strong>CHAÑAR · NEUQUÉN · PATAGONIA · GLOBAL</strong><p>Cada dato conserva la escala a la que realmente pertenece.</p></article><article class="archive-card"><b>MEDIA</b><strong>AUTOR · URL · LICENCIA · PROCEDENCIA</strong><p>La imagen acompaña al registro pero no reemplaza la evidencia.</p></article><article class="archive-card"><b>SENSIBILIDAD</b><strong>PROTEGER ANTES QUE EXPONER</strong><p>Las ubicaciones delicadas pueden generalizarse u ocultarse.</p></article></div></div><div class="archive-pane" data-view="fuentes" hidden>'+wild320Sources.map(s=>'<div class="archive-source"><span><b>'+esc(s.kind)+'</b><br>'+esc(s.title)+'</span><a href="'+esc(s.id==="local-municipal-quehacer"?"https://www.sanpatriciodenchañar.gob.ar/":s.id==="gbif-quality"?"https://www.gbif.org/":"https://www.w3.org/WAI/standards-guidelines/wcag/")+'" target="_blank" rel="noopener noreferrer">REFERENCIA ↗</a></div>').join("")+'</div><div class="archive-pane" data-view="reglas" hidden>'+wild320Principles.slice(0,8).map(p=>'<article class="archive-card"><b>'+esc(p.n)+'</b><strong>'+esc(p.title)+'</strong><p>'+esc(p.text)+'</p></article>').join("")+'</div></div>';
 content.querySelectorAll("[data-pane]").forEach(b=>b.addEventListener("click",()=>{content.querySelectorAll("[data-pane]").forEach(x=>x.classList.toggle("active",x===b));content.querySelectorAll("[data-view]").forEach(x=>x.hidden=x.dataset.view!==b.dataset.pane)}));
 d.showModal();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();