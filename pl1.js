import { records } from "./data/catalog.js";
import { initWild } from "./core/engine.js";
import { validateCatalog } from "./core/policy.js";
import { resources, pl1Rules, PL1_VERSION } from "./data/pl1-resources.js";

const q=(s,r=document)=>r.querySelector(s);
const esc=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function build(){
  if(q("#ow-pl1"))return;
  const audit=validateCatalog(records);
  const counts={total:records.length,fauna:records.filter(r=>r.type==="fauna").length,flora:records.filter(r=>r.type==="flora").length,documented:records.filter(r=>r.status==="documentado").length,pending:records.filter(r=>r.status==="pendiente").length};
  const rules=pl1Rules.map(r=>'<div class="ow-rule"><b>'+esc(r.code)+'</b><strong>'+esc(r.title)+'</strong><p>'+esc(r.text)+'</p></div>').join("");
  const refs=resources.map(r=>'<article class="ow-resource"><span class="group">'+esc(r.group)+'</span><div><strong>'+esc(r.title)+'</strong><p>'+esc(r.desc)+'</p></div><a href="'+esc(r.url)+'" target="_blank" rel="noopener noreferrer">'+esc(r.label)+' ↗</a></article>').join("");
  const section=document.createElement("section");
  section.id="ow-pl1"; section.className="ow-pl1"; section.setAttribute("aria-labelledby","ow-pl1-title");
  section.innerHTML='<div class="ow-pl1-head"><div><span class="ow-pl1-kicker">CAPA ADITIVA · '+esc(PL1_VERSION)+' · 30 SEPTIEMBRE 2026</span><h2 id="ow-pl1-title">El archivo entra en<br><em>modo investigación.</em></h2></div><p class="ow-pl1-intro">Esta capa no reemplaza la experiencia OCARINA WILD. Agrega metodología, fuentes, control de calidad y herramientas para que el proyecto pueda crecer sin perder trazabilidad.</p></div>'+
  '<div class="ow-pl1-status"><span class="ow-pl1-pill"><strong>'+counts.total+'</strong> FICHAS</span><span class="ow-pl1-pill"><strong>'+counts.fauna+'</strong> FAUNA</span><span class="ow-pl1-pill"><strong>'+counts.flora+'</strong> FLORA</span><span class="ow-pl1-pill"><strong>'+counts.documented+'</strong> DOCUMENTADAS</span><span class="ow-pl1-pill"><strong>'+counts.pending+'</strong> PENDIENTES</span><span class="ow-pl1-pill">AUDITORÍA: <strong>'+((audit&&audit.valid)?"OK":"REVISAR")+'</strong></span></div>'+
  '<div class="ow-pl1-grid"><div class="ow-pl1-panel"><h3>REGLAS DE OPERACIÓN PL1</h3>'+rules+'</div><div class="ow-pl1-panel"><h3>FUENTES Y ESTÁNDARES</h3>'+refs+'<div class="ow-tools"><button id="owExport" type="button">EXPORTAR CATÁLOGO JSON</button><button id="owCopy" type="button">COPIAR RESUMEN</button></div><div id="owAudit" class="ow-audit" aria-live="polite">Auditoría de catálogo: '+esc((audit&&audit.valid)?"sin bloqueos según la política interna actual.":(audit?.errors||[]).join(" · ")||"revisar")+'</div></div></div>'+
  '<p class="ow-mini">Arquitectura aditiva: datos separados de interfaz · estándares abiertos · almacenamiento local para observaciones · sin servidor propio · sin convertir automáticamente una observación comunitaria en evidencia confirmada.</p>';
  q("footer")?.before(section);
  q("#owExport")?.addEventListener("click",()=>{const blob=new Blob([JSON.stringify({version:PL1_VERSION,exportedAt:new Date().toISOString(),records},null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="ocarina-wild-catalogo-"+PL1_VERSION+".json";a.click();setTimeout(()=>URL.revokeObjectURL(url),500);});
  q("#owCopy")?.addEventListener("click",async()=>{const text="OCARINA WILD "+PL1_VERSION+" · "+counts.total+" fichas · "+counts.documented+" documentadas · "+counts.pending+" en investigación. Catálogo trazable, con observaciones separadas de evidencia confirmada.";try{await navigator.clipboard.writeText(text);q("#owAudit").textContent="Resumen copiado al portapapeles.";}catch(_){q("#owAudit").textContent=text;}});
}
try{initWild();}catch(error){console.error("[OCARINA WILD PL1] motor base",error);}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",build);else build();
