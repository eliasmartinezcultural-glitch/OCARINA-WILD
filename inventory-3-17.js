import {inventorySources,inventoryRecords,regionalReferencePool,inventoryRules,INVENTORY_VERSION} from "./data/inventory-3-17.js";
if(!document.querySelector('link[data-ow-inventory]')){const l=document.createElement("link");l.rel="stylesheet";l.href="./inventory-3-17.css";l.dataset.owInventory="";document.head.appendChild(l);}
const esc=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function initInventory(){
 if(document.querySelector("#ow-inventory"))return;
 const s=document.createElement("section");s.id="ow-inventory";s.className="ow-inventory";s.setAttribute("aria-labelledby","owi-title");
 const local=inventoryRecords.filter(x=>x.scale.startsWith("CHAÑAR"));
 const documented=local.filter(x=>x.status==="DOCUMENTADO").length;
 const pending=local.filter(x=>x.status==="PENDIENTE").length;
 s.innerHTML='<div class="owi-head"><div><span class="owi-kicker">FASE SIGUIENTE · '+esc(INVENTORY_VERSION)+'</span><h2 id="owi-title">Inventario real.<br><em>Sin inventar presencia.</em></h2></div><p>Primera cantera curada de registros para San Patricio del Chañar. Separa evidencia local, eventos, referencias regionales y preguntas todavía abiertas.</p></div>'+
 '<div class="owi-stats"><div><b>'+local.length+'</b><span>REGISTROS CHAÑAR</span></div><div><b>'+documented+'</b><span>DOCUMENTADOS</span></div><div><b>'+pending+'</b><span>PENDIENTES</span></div><div><b>'+regionalReferencePool.length+'</b><span>REFERENCIAS REGIONALES</span></div></div>'+
 '<div class="owi-alert"><strong>Regla central:</strong> que una especie viva en Neuquén, Patagonia o Argentina no significa que esté documentada en Chañar. Primero se busca la evidencia local.</div>'+
 '<div class="owi-toolbar"><input id="owi-q" type="search" placeholder="Buscar especie, nombre científico, ambiente..." aria-label="Buscar inventario"><select id="owi-status" aria-label="Filtrar estado"><option value="">TODOS</option><option value="DOCUMENTADO">DOCUMENTADO</option><option value="PENDIENTE">PENDIENTE</option><option value="REFERENCIA">REFERENCIA</option></select><select id="owi-scale" aria-label="Filtrar escala"><option value="">TODAS LAS ESCALAS</option><option value="CHAÑAR">CHAÑAR</option><option value="NEUQUÉN">NEUQUÉN / REGIONAL</option></select></div>'+
 '<div id="owi-grid" class="owi-grid"></div>'+
 '<details class="owi-details"><summary>Fuentes que sostienen esta primera cantera</summary><div id="owi-sources"></div></details>'+
 '<details class="owi-details"><summary>Reglas de curaduría del inventario</summary><ul>'+inventoryRules.map(r=>"<li>"+esc(r)+"</li>").join("")+'</ul></details>';
 const footer=document.querySelector("footer");footer?footer.before(s):document.body.append(s);
 const render=()=>{
  const q=(document.querySelector("#owi-q")?.value||"").toLowerCase().trim(),st=document.querySelector("#owi-status")?.value||"",sc=document.querySelector("#owi-scale")?.value||"";
  const all=[...inventoryRecords,...regionalReferencePool];
  const items=all.filter(x=>(!st||x.status===st)&&(!sc||(sc==="CHAÑAR"?x.scale.startsWith("CHAÑAR"):x.scale.startsWith("NEUQUÉN")))&&(!q?[true]:[x.vernacularName,x.scientificName,x.environment,x.reason,x.scale].join(" ").toLowerCase().includes(q)));
  document.querySelector("#owi-grid").innerHTML=items.map(x=>'<article class="owi-card '+x.status.toLowerCase()+'"><div class="owi-card-top"><span class="owi-badge">'+esc(x.status)+'</span><span>'+esc(x.scale)+'</span></div><h3>'+esc(x.vernacularName)+'</h3><i>'+esc(x.scientificName)+'</i><p>'+esc(x.reason)+'</p><div class="owi-meta"><span>'+esc(x.environment||"—")+'</span><span>'+esc(x.evidence||"—")+'</span></div></article>').join("")||'<p class="owi-empty">No hay registros que coincidan.</p>';
 };
 render();
 ["owi-q","owi-status","owi-scale"].forEach(id=>document.querySelector("#"+id)?.addEventListener("input",render));
 document.querySelector("#owi-sources").innerHTML=inventorySources.map(x=>'<article class="owi-source"><div><strong>'+esc(x.title)+'</strong><span>'+esc(x.kind)+' · '+esc(x.scale)+'</span></div><p>'+esc(x.note)+'</p><a href="'+esc(x.url)+'" target="_blank" rel="noopener noreferrer">ABRIR FUENTE ↗</a></article>').join("");
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initInventory);else initInventory();