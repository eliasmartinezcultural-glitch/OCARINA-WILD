#!/usr/bin/env node
import fs from "node:fs";
import vm from "node:vm";
const errors=[], warnings=[];
const raw=fs.readFileSync("data.js","utf8");
const sandbox={window:{}};
vm.runInNewContext(raw,sandbox);
const D=sandbox.window.WILD_DATA;
if(!D) errors.push("data.js no expone window.WILD_DATA");
const species=D?.species||[];
const ids=new Set();
const envIds=new Set((D?.environments||[]).map(x=>x.id));
const required=["id","commonName","scientificName","kind","group","localStatus","environments","image","imageSourceUrl","description","identification","habitat","behavior","diet","reproduction","conservation","localNote","sources"];
for(const s of species){
  if(ids.has(s.id)) errors.push(`ID duplicado: ${s.id}`);
  ids.add(s.id);
  for(const k of required) if(s[k]===undefined||s[k]===null||s[k]==="") errors.push(`${s.commonName||s.id}: falta ${k}`);
  for(const e of (s.environments||[])) if(!envIds.has(e)) errors.push(`${s.commonName}: ambiente inexistente ${e}`);
  if(!Array.isArray(s.sources)||!s.sources.length) errors.push(`${s.commonName}: sin fuentes`);
  for(const src of (s.sources||[])) if(!/^https?:\\/\\//.test(src.url||"")) errors.push(`${s.commonName}: fuente sin URL válida`);
  if(!/^https?:\\/\\//.test(s.image||"")) errors.push(`${s.commonName}: imagen ausente o URL inválida`);
  if((s.scientificName||"").includes("pendiente") && /\\/(Odontesthes|Percichthys|Populus)_/i.test(s.image||""))
    warnings.push(`${s.commonName}: taxonomía pendiente pero foto apunta a una especie concreta; revisar.`);
  const genus=(s.scientificName||"").split(/[ .·]/)[0].toLowerCase().replace(/[^a-z]/g,"");
  const file=decodeURIComponent(s.image||"").split("/").pop().toLowerCase().replace(/[^a-z]/g,"");
  if(genus && file && !file.includes(genus) && !/commons/.test(file))
    warnings.push(`${s.commonName}: URL de imagen no contiene el género esperado (${genus}); revisar foto.`);
}
const groups=new Set((D?.groups||[]).map(x=>x.id));
for(const s of species) if(!groups.has(s.group)) errors.push(`${s.commonName}: grupo inexistente ${s.group}`);
console.log("\nOCARINA WILD · AUDITORÍA AUTOMÁTICA");
console.log("===================================");
console.log(`Especies: ${species.length}`);
console.log(`Fotos: ${species.filter(x=>x.image).length}/${species.length}`);
console.log(`Fuentes: ${species.reduce((n,x)=>n+(x.sources?.length||0),0)}`);
console.log(`Errores estructurales: ${errors.length}`);
console.log(`Alertas para revisión: ${warnings.length}`);
for(const e of errors) console.log("ERROR  "+e);
for(const w of warnings) console.log("WARN   "+w);
if(errors.length) process.exit(1);
