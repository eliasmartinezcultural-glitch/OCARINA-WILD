const ALLOWED_STATUS=new Set(["documentado","pendiente","observado","referencia"]);
const FORBIDDEN_IMAGE_PATTERNS=[/cocina/i,/plato/i,/faenad/i,/trofeo/i,/captur/i,/caza/i,/carne/i];
export function validateRecord(record){
 const errors=[];
 if(!record?.id)errors.push("Registro sin ID");
 if(!record?.name)errors.push(record?.id+": sin nombre");
 if(!record?.status||!ALLOWED_STATUS.has(record.status))errors.push(record?.id+": estado de evidencia inválido");
 if(record.image&&FORBIDDEN_IMAGE_PATTERNS.some(rx=>rx.test(record.image)))errors.push(record.id+": imagen potencialmente incompatible con el Estatuto");
 if(record.image&&!record.imageCredit)errors.push(record.id+": imagen sin procedencia declarada");
 if(record.status==="documentado"&&!record.sourceRef)errors.push(record.id+": documentado sin fuente");
 if(record.hideLocation&&record.randomEligible!==false)errors.push(record.id+": revisar exposición aleatoria de ubicación sensible");
 return errors;
}
export function validateCatalog(records=[]){
 const errors=records.flatMap(validateRecord),ids=new Set();
 records.forEach(r=>{if(ids.has(r.id))errors.push(r.id+": ID duplicado");ids.add(r.id);});
 return {valid:errors.length===0,errors,total:records.length};
}
export function canPublish(record){return validateRecord(record).length===0;}
export const CONSERVATION_POLICY_VERSION="1.0.0";
