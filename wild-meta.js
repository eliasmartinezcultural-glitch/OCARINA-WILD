(()=>{const D=window.WILD_DATA;if(!D||!Array.isArray(D.species))return;
const habitat={aves:["bordes de agua","chacras y arboledas","ambientes abiertos"],mamiferos:["ambientes abiertos","bordes de agua","matorral y áreas rurales"],peces:["ambientes acuáticos","costas y fondos de agua"],invertebrados:["vegetación","suelo y flores","ambientes rurales"],arboles:["chacras","bordes de agua","ambientes urbanos y rurales"],arbustos:["estepa","matorral","suelo árido y bordes rurales"],gramineas:["estepa","pastizal","suelo abierto"]};
const observe={aves:"Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",mamiferos:"Observar a distancia; buscar huellas, movimiento, refugio y comportamiento natural. No perseguir ni alimentar.",peces:"Observar el agua y el comportamiento sin capturar ni manipular. Registrar ambiente y movimiento.",invertebrados:"Mirar con calma sobre flores, hojas y suelo. Evitar tocar, capturar o alterar refugios.",arboles:"Comparar corteza, hojas, porte y entorno. Observar sin arrancar hojas, flores ni frutos.",arbustos:"Comparar porte, ramas, hojas y flores desde el ambiente natural. No extraer ejemplares.",gramineas:"Observar forma de mata, hojas, espigas y relación con el suelo. No arrancar."};
const clue={aves:"Silueta y comportamiento",mamiferos:"Movimiento y relación con el ambiente",peces:"Movimiento en el agua",invertebrados:"Forma y relación con plantas",arboles:"Porte, corteza y hojas",arbustos:"Porte y estructura de ramas",gramineas:"Forma de la mata y espigas"};
for(const s of D.species){
 const exact=!/(\bsp\.|identificación específica pendiente)/i.test(s.scientific||"");
 const n=(s.note||"").toLowerCase();
 const contextual=/san patricio del chañar|el chañar|chacras de san patricio del chañar/.test(n)&&!/no constituye|no implica|no demuestra/.test(n);
 s.identification={rank:exact?"especie":"género",status:exact?"nombre científico consignado":"identificación específica pendiente"};
 s.territory={photoStatus:"referencia visual regional",localContext:contextual?"contexto local documentado":"sin registro local en esta fotografía",localPhoto:false};
 s.evidence={photo:true,lifeVisible:true,source:Boolean(s.photoSource),visualAudit:s.audit==="verified-live",licenseStatus:"verificación pendiente"};
 s.habitat=habitat[s.group]||["ambiente natural","áreas rurales"];
 s.observe=observe[s.group]||"Observar sin molestar, sin capturar ni alterar el ambiente.";
 s.experience={firstClue:clue[s.group]||"Relación con el ambiente",learningGoal:"Reconocer antes de interpretar: mirar, comparar y registrar."};
}
D.meta=D.meta||{};D.meta.version="WILD PHOTO-FIRST 2.0 · CURATION ENGINE";D.meta.worldLaw="PHOTO FIRST — FOTO REAL ANTES QUE DATO, CATEGORÍA, TAXONOMÍA, TERRITORIO O EXPERIENCIA.";D.meta.dataPriority=["fotografia","auditoria_visual","identificacion","categoria","taxonomia","territorio","ecologia","observacion","educacion"];D.meta.referenceModel="La fotografía puede ser una referencia visual regional. Nunca se presenta como registro local salvo que exista evidencia fotográfica local.";
})();