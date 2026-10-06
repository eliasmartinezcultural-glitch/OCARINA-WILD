(()=>{
"use strict";
const DATA=window.WILD_DATA||{groups:[],species:[]};
const $=s=>document.querySelector(s);
const grid=$("#grid"), filters=$("#filters"), search=$("#search"), stats=$("#stats"), modal=$("#modal"), sheet=$("#sheet"), featured=$("#featured");
let group="all", query="";
const forbidden=/(caza|cazado|cazador|hunting|hunter|trofeo|trophy|carcass|dead|muerto|cadaver|cadáver|skinned|desollad|taxiderm|meat|carne|food|comida|dish|plato|served|servido|captur|trapped|trampa|poaching|furtiv|slaughter|matadero|faena)/i;
function safeText(v){return String(v??"").replace(/[<>]/g,"")}
function imgOk(s){const u=(s.image||"")+" "+(s.imageSourceUrl||"");return s.imageAuditStatus==="verified-live"&&!!s.image&&!forbidden.test(u)}
function icon(s){const g=(DATA.groups||[]).find(x=>x.id===s.group);return g?.icon||"🌱"}
function renderFilters(){
 filters.innerHTML='<button class="filter active" data-g="all">🌎 Todo</button>';
 (DATA.groups||[]).forEach(g=>{filters.insertAdjacentHTML("beforeend",'<button class="filter" data-g="'+safeText(g.id)+'">'+safeText(g.icon||"🌱")+" "+safeText(g.label)+"</button>")});
 filters.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{group=b.dataset.g;filters.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()});
}
function getList(){return (DATA.species||[]).filter(s=>{const hay=[s.commonName,s.scientificName,s.description,s.habitat,s.localNote,(s.environments||[]).join(" ")].join(" ").toLowerCase();return (group==="all"||s.group===group)&&(!query||hay.includes(query))})}
function renderFeatured(){
 const list=(DATA.species||[]).filter(s=>s.imageAuditStatus==="verified-live"&&imgOk(s)).slice(0,3);
 if(!featured)return;
 featured.innerHTML=list.map((s,i)=>'<article class="feature '+(i===0?'big':'')+'" data-feature="'+i+'"><div class="fimg"><img src="'+safeText(s.image)+'" alt="'+safeText(s.commonName)+' vivo" onerror="this.style.display=\'none\'"></div><div class="shade"></div><div class="featureText"><small>🌱 FOTOGRAFÍA VERIFICADA</small><h3>'+safeText(s.commonName)+'</h3><em>'+safeText(s.scientificName)+'</em></div></article>').join("");
 featured.querySelectorAll(".feature").forEach((el,i)=>el.onclick=()=>openDetail(list[i]));
}
function render(){
 const list=getList(); const verified=(DATA.species||[]).filter(s=>s.imageAuditStatus==="verified-live").length; stats.textContent=list.length+" especies · "+verified+" fotos auditadas · "+(DATA.meta?.place||"San Patricio del Chañar");
 if(!list.length){grid.innerHTML='<div class="empty">No encontramos esa especie. Probá con otra palabra.</div>';return}
 grid.innerHTML=list.map((s,i)=>'<article class="card" data-i="'+i+'"><div class="photo">'+(imgOk(s)?'<img loading="lazy" src="'+safeText(s.image)+'" alt="'+safeText(s.commonName||"Especie")+' viva" onerror="this.style.display=\'none\';this.nextElementSibling.hidden=false"><div class="fallback" hidden>'+icon(s)+'</div>':'<div class="fallback">'+icon(s)+'</div>')+'<span class="tag">'+(s.imageAuditStatus==="quarantine"?"⛔ FOTO EN CUARENTENA":s.imageAuditStatus==="pending-visual"?"🔎 FOTO EN REVISIÓN":"🌱 VIDA")+'</span></div><div class="cardbody"><h2>'+safeText(s.commonName)+'</h2><div class="scientific">'+safeText(s.scientificName)+'</div><p class="note">'+safeText((s.description||"").slice(0,150))+'</p></div></article>').join("");
 grid.querySelectorAll(".card").forEach((c,i)=>c.onclick=()=>openDetail(list[i]));
}
function openDetail(s){
 const sources=(s.sources||[]).map(x=>'<a href="'+safeText(x.url)+'" target="_blank" rel="noopener">'+safeText(x.label||"Fuente")+' ↗</a>').join("");
 sheet.innerHTML='<div class="photo">'+(imgOk(s)?'<img src="'+safeText(s.image)+'" alt="'+safeText(s.commonName)+'" onerror="this.style.display=\'none\';this.nextElementSibling.hidden=false"><div class="fallback" hidden>'+icon(s)+'</div>':'<div class="fallback">'+icon(s)+'</div>')+'<button class="close" aria-label="Cerrar">×</button></div><div class="detail"><h2>'+safeText(s.commonName)+'</h2><div class="scientific">'+safeText(s.scientificName)+'</div><section><b>¿Qué vemos?</b><p>'+safeText(s.identification||s.description||"")+'</p></section><section><b>Hábitat</b><p>'+safeText(s.habitat||"")+'</p></section><section><b>Cómo vive</b><p>'+safeText(s.behavior||"")+'</p></section><section><b>Relación con Chañar</b><p>'+safeText(s.localNote||s.imageNote||"")+'</p></section><section><b>Estado de la fotografía</b><p>'+safeText(s.imageAuditStatus==="verified-live"?"Fotografía revisada: ejemplar/planta vivo, sin captura, caza, muerte ni uso como alimento visible.":s.imageAuditStatus==="quarantine"?(s.imageAuditReason||"Fotografía retirada preventivamente."):"Fotografía todavía no aprobada para publicación. La ficha puede consultarse, pero la imagen queda oculta hasta completar la auditoría visual.")+'</p></section><section class="sources"><b>Fuentes</b>'+sources+'</section></div>';
 modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";sheet.querySelector(".close").onclick=closeModal;
}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
modal.onclick=e=>{if(e.target===modal)closeModal()};document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
search.oninput=()=>{query=search.value.trim().toLowerCase();render()};
renderFilters();renderFeatured();render();
})();