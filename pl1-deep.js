import { deepSources,recordSchema,evidenceLevels,deepRules,PL1_DEEP_VERSION } from "./data/pl1-deep.js";
if(!document.querySelector('link[data-ow-deep]')){const link=document.createElement("link");link.rel="stylesheet";link.href="./pl1-deep.css";link.dataset.owDeep="";document.head.appendChild(link);}
const DQ=(s,r=document)=>r.querySelector(s);
const DE=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function buildDeep(){
 if(DQ("#ow-deep")) return;
 const section=document.createElement("section"); section.id="ow-deep"; section.className="ow-deep";
 section.setAttribute("aria-labelledby","ow-deep-title");
 section.innerHTML='<div class="ow-deep-head"><div><span class="ow-deep-kicker">CAPA ADITIVA · '+DE(PL1_DEEP_VERSION)+'</span><h2 id="ow-deep-title">Más fuentes.<br><em>Más trazabilidad.</em></h2></div><p class="ow-deep-intro">La base queda intacta. Esta capa incorpora un sistema de investigación para separar taxonomía, evidencia local, referencias regionales, multimedia, derechos y datos sensibles.</p></div>'+
 '<div class="ow-deep-stats"><span class="ow-deep-stat">'+deepSources.length+' FUENTES NUEVAS</span><span class="ow-deep-stat">'+Object.keys(recordSchema).length+' CAMPOS DE REGISTRO</span><span class="ow-deep-stat">'+evidenceLevels.length+' NIVELES DE EVIDENCIA</span></div>'+
 '<div class="ow-deep-tools"><input id="owDeepSearch" type="search" placeholder="Buscar fuente, tema o escala…" aria-label="Buscar fuentes"><select id="owDeepGroup" aria-label="Filtrar fuentes por grupo"><option value="">TODAS LAS ÁREAS</option>'+[...new Set(deepSources.map(x=>x.group))].sort().map(x=>'<option value="'+DE(x)+'">'+DE(x)+'</option>').join("")+'</select><button id="owDeepCopy" type="button">COPIAR MAPA DE FUENTES</button></div>'+
 '<div class="ow-deep-grid"><div class="ow-deep-panel"><h3>REGISTRO DE FUENTES</h3><div id="owDeepSources" class="ow-source-list"></div></div><div class="ow-deep-panel"><h3>ESQUEMA DE REGISTRO</h3><p class="ow-deep-note">Basado en la lógica de Darwin Core y ampliado con campos de OCARINA WILD para escala, evidencia, media, revisión y protección.</p><div class="ow-schema">'+Object.entries(recordSchema).map(([k,v])=>'<div class="ow-field"><code>'+DE(k)+'</code><span>'+DE(v)+'</span></div>').join("")+'</div></div></div>'+
 '<div class="ow-deep-rules">'+deepRules.map(x=>'<article class="ow-deep-rule"><b>'+DE(x.code)+'</b><strong>'+DE(x.title)+'</strong><p>'+DE(x.text)+'</p></article>').join("")+'</div>'+
 '<p class="ow-deep-note"><strong>Niveles:</strong> '+evidenceLevels.map(x=>DE(x.label)).join(" · ")+'. Una referencia regional o internacional sirve para reconocer, comparar o contextualizar; no se convierte automáticamente en presencia local.</p>';
 const footer=DQ("footer"); if(footer) footer.before(section); else document.body.append(section);
 const render=()=>{
   const q=(DQ("#owDeepSearch")?.value||"").trim().toLowerCase(),g=DQ("#owDeepGroup")?.value||"";
   const items=deepSources.filter(x=>(!g||x.group===g)&&(!q||[x.title,x.role,x.scale,x.use,x.group].join(" ").toLowerCase().includes(q)));
   DQ("#owDeepSources").innerHTML=items.length?items.map(x=>'<article class="ow-source"><div class="ow-source-top"><strong>'+DE(x.title)+'</strong><a href="'+DE(x.url)+'" target="_blank" rel="noopener noreferrer">ABRIR ↗</a></div><p>'+DE(x.role)+'</p><div class="ow-source-meta"><span>'+DE(x.group)+'</span><span>'+DE(x.scale)+'</span><span>'+DE(x.use)+'</span></div></article>').join(""):'<p class="ow-deep-note">No hay coincidencias.</p>';
 };
 DQ("#owDeepSearch")?.addEventListener("input",render); DQ("#owDeepGroup")?.addEventListener("change",render); render();
 DQ("#owDeepCopy")?.addEventListener("click",async()=>{const t=deepSources.map(x=>x.title+" — "+x.url+" — "+x.scale+" — "+x.use).join("\n");try{await navigator.clipboard.writeText(t);DQ("#owDeepCopy").textContent="MAPA COPIADO";setTimeout(()=>DQ("#owDeepCopy").textContent="COPIAR MAPA DE FUENTES",1600)}catch(_){window.prompt("Copiá el mapa de fuentes:",t)}});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",buildDeep);else buildDeep();