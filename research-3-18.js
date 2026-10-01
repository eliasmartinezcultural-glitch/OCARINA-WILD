import { records } from "./data/catalog.js";
import { inventoryRecords, inventorySources, regionalReferencePool, inventoryRules } from "./data/inventory-3-17.js";
import { deepSources, recordSchema, evidenceLevels, deepRules } from "./data/pl1-deep.js";
import { resources, pl1Rules } from "./data/pl1-resources.js";

const VERSION="3.18-CLEAN.1";
const esc=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const css=()=>{if(document.querySelector('link[data-ow-clean]'))return;const l=document.createElement("link");l.rel="stylesheet";l.href="./research-3-18.css";l.dataset.owClean="";document.head.appendChild(l)};

function init(){
 if(document.querySelector("#ow-318"))return;
 css();
 const documented=inventoryRecords.filter(x=>x.status==="DOCUMENTADO").length;
 const pending=inventoryRecords.filter(x=>x.status==="PENDIENTE").length;
 const section=document.createElement("section");
 section.id="ow-318"; section.className="ow318"; section.setAttribute("aria-labelledby","ow318-title");
 section.innerHTML='<div class="ow318-bar"><div><span class="ow318-kicker">OCARINA WILD · '+VERSION+'</span><h2 id="ow318-title">El sistema es profundo.<br><em>La vista no.</em></h2><p>Una sola puerta para investigar. El visitante explora; el archivo trabaja por debajo.</p></div><button id="ow318-open" class="ow318-open" type="button">ABRIR CENTRO ↗</button></div>';
 const anchor=document.querySelector("#observe")?.closest(".closing")||document.querySelector("footer");
 anchor?anchor.before(section):document.body.append(section);

 const dialog=document.createElement("dialog"); dialog.id="ow318-dialog"; dialog.className="ow318-dialog"; dialog.setAttribute("aria-labelledby","ow318-dialog-title");
 dialog.innerHTML='<div class="ow318-dialog-head"><div><span class="ow318-kicker">CENTRO DE ARCHIVO · '+VERSION+'</span><h2 id="ow318-dialog-title">Investigar sin perderse.</h2></div><button id="ow318-close" class="ow318-close" type="button" aria-label="Cerrar">×</button></div>'+
 '<div class="ow318-summary"><span><b>'+records.length+'</b> fichas base</span><span><b>'+documented+'</b> documentadas</span><span><b>'+pending+'</b> pendientes</span><span><b>'+regionalReferencePool.length+'</b> referencias</span><span><b>'+deepSources.length+'</b> fuentes técnicas</span></div>'+
 '<div class="ow318-tabs" role="tablist" aria-label="Capas del archivo"><button type="button" role="tab" aria-selected="true" data-pane="estado">ESTADO</button><button type="button" role="tab" aria-selected="false" data-pane="fuentes">FUENTES</button><button type="button" role="tab" aria-selected="false" data-pane="reglas">REGLAS</button><button type="button" role="tab" aria-selected="false" data-pane="datos">DATOS</button></div>'+
 '<div class="ow318-pane" data-pane-view="estado"><div class="ow318-state"><strong>CADENA ACTIVA</strong><span>FUENTE → RECURSO → EVIDENCIA → REGISTRO → REVISIÓN</span></div><p>Lo local manda. Una referencia regional no se convierte en presencia. Un evento no se convierte en población. Una observación no se convierte automáticamente en confirmación.</p><div class="ow318-mini-grid"><div><b>LOCAL</b><span>La evidencia se busca primero en Chañar.</span></div><div><b>REFERENCIA</b><span>Sirve para comparar e investigar.</span></div><div><b>PENDIENTE</b><span>Lo que falta también queda registrado.</span></div></div></div>'+
 '<div class="ow318-pane" data-pane-view="fuentes" hidden><div class="ow318-search"><input id="ow318-search" type="search" placeholder="Buscar fuente o tema…" aria-label="Buscar en fuentes"><span id="ow318-source-count"></span></div><div id="ow318-source-list"></div></div>'+
 '<div class="ow318-pane" data-pane-view="reglas" hidden><div class="ow318-rules">'+[...inventoryRules,...deepRules,...pl1Rules.map(x=>x.code+" · "+x.title+" — "+x.text)].slice(0,14).map(x=>"<p>"+esc(x)+"</p>").join("")+'</div></div>'+
 '<div class="ow318-pane" data-pane-view="datos" hidden><div class="ow318-data"><div><b>REGISTRO</b><span>'+Object.keys(recordSchema).length+' campos estructurados</span></div><div><b>EVIDENCIA</b><span>'+evidenceLevels.length+' niveles internos</span></div><div><b>RECURSOS</b><span>'+resources.length+' referencias metodológicas</span></div><div><b>CATÁLOGO</b><span>auditable y versionado</span></div></div><p class="ow318-note">La complejidad técnica permanece detrás de la interfaz pública para evitar una experiencia larga, repetitiva o abrumadora.</p></div>';
 document.body.append(dialog);

 const open=()=>{dialog.showModal();document.querySelector("#ow318-dialog .ow318-tabs button")?.focus()};
 document.querySelector("#ow318-open").addEventListener("click",open);
 document.querySelector("#ow318-close").addEventListener("click",()=>dialog.close());
 dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
 const tabs=[...dialog.querySelectorAll(".ow318-tabs button")],panes=[...dialog.querySelectorAll(".ow318-pane")];
 const select=id=>{tabs.forEach(t=>t.setAttribute("aria-selected",t.dataset.pane===id?"true":"false"));panes.forEach(p=>p.hidden=p.dataset.paneView!==id)};
 tabs.forEach(t=>t.addEventListener("click",()=>select(t.dataset.pane)));

 const allSources=[
  ...inventorySources.map(x=>({title:x.title,scale:x.scale,note:x.note,url:x.url})),
  ...deepSources.map(x=>({title:x.title,scale:x.scale,note:x.use,url:x.url})),
  ...resources.map(x=>({title:x.title,scale:x.group,note:x.desc,url:x.url}))
 ];
 const renderSources=()=>{
  const q=(dialog.querySelector("#ow318-search").value||"").trim().toLowerCase();
  const items=allSources.filter(x=>[x.title,x.scale,x.note].join(" ").toLowerCase().includes(q)).slice(0,24);
  dialog.querySelector("#ow318-source-count").textContent=items.length+" visibles";
  dialog.querySelector("#ow318-source-list").innerHTML=items.map(x=>'<article class="ow318-source"><div><b>'+esc(x.title)+'</b><span>'+esc(x.scale)+'</span></div><p>'+esc(x.note)+'</p><a href="'+esc(x.url)+'" target="_blank" rel="noopener noreferrer">ABRIR FUENTE ↗</a></article>').join("")||'<p class="ow318-note">No hay coincidencias.</p>';
 };
 dialog.querySelector("#ow318-search").addEventListener("input",renderSources); renderSources();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
