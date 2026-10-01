// OCARINA WILD 3.17 · VISUAL INTERACTION LAW
// Additive only. This layer does not modify the frozen PL1 motor/catalog.
// Public UX: simple. Internal architecture: expandable.
// Interaction model: LOOK → TOUCH → DISCOVER → VERIFY.

const visualLaw={version:"3.17-VISUAL-LAW.1",modes:[
 {id:"explore",label:"EXPLORAR",title:"Entrá por curiosidad.",text:"Descubrí vidas sin necesitar saber su nombre.",action:"Explorar"},
 {id:"evidence",label:"EVIDENCIA",title:"Separá lo visto de lo comprobado.",text:"Cada señal tiene escala, fuente y estado.",action:"Ver evidencia"},
 {id:"territory",label:"TERRITORIO",title:"Pensá como un mapa vivo.",text:"Río, chacras, dique y monte se conectan.",action:"Ver territorio"},
 {id:"research",label:"INVESTIGAR",title:"Convertí una duda en registro.",text:"Lo que falta también forma parte del archivo.",action:"Abrir pendientes"}
]};
const esc=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function mountVisualLaw(){
 if(document.querySelector("#ow-visual-law"))return;
 const s=document.createElement("section");s.id="ow-visual-law";s.className="ow-visual-law";s.setAttribute("aria-labelledby","owl-title");
 s.innerHTML='<div class="owl-orbit" aria-hidden="true"><span></span><i></i><b></b></div><div class="owl-copy"><span class="owl-kicker">OCARINA WILD · '+esc(visualLaw.version)+'</span><h2 id="owl-title">Un mundo vivo<br><em>se explora, no se hojea.</em></h2><p>La nueva interfaz convierte el inventario en una experiencia: mirar, tocar, descubrir y recién después comprobar.</p></div><div class="owl-modes" role="tablist" aria-label="Modos de exploración">'+visualLaw.modes.map((m,i)=>'<button class="owl-mode '+(i===0?"active":"")+'" role="tab" aria-selected="'+(i===0?'true':'false')+'" data-mode="'+esc(m.id)+'"><span>0'+(i+1)+'</span><b>'+esc(m.label)+'</b><small>'+esc(m.text)+'</small></button>').join("")+'</div><div id="owl-stage" class="owl-stage"><div><span class="owl-stage-kicker">MODO ACTIVO</span><h3></h3><p></p><button id="owl-go" type="button"></button></div><div class="owl-signal"><span></span><b>ARCHIVO VIVO</b><small>3.17 · MULTIDISPOSITIVO</small></div></div>';
 const anchor=document.querySelector("#ow-inventory")||document.querySelector("footer");anchor?anchor.before(s):document.body.append(s);
 const stageTitle=s.querySelector("#owl-stage h3"),stageText=s.querySelector("#owl-stage p"),go=s.querySelector("#owl-go");
 const activate=id=>{const m=visualLaw.modes.find(x=>x.id===id)||visualLaw.modes[0];s.querySelectorAll(".owl-mode").forEach(b=>{const on=b.dataset.mode===m.id;b.classList.toggle("active",on);b.setAttribute("aria-selected",on?"true":"false")});stageTitle.textContent=m.title;stageText.textContent=m.text;go.textContent=m.action;go.onclick=()=>{const target=m.id==="research"?"#ow-inventory":m.id==="evidence"?"#ow-deep":m.id==="territory"?"#territorio":"#vidas";document.querySelector(target)?.scrollIntoView({behavior:"smooth",block:"start"})}};
 s.querySelectorAll(".owl-mode").forEach(b=>b.addEventListener("click",()=>activate(b.dataset.mode)));
 activate("explore");
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mountVisualLaw);else mountVisualLaw();
