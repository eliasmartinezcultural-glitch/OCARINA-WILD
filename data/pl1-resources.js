export const PL1_VERSION="PL1.0.0";

export const resources=[
{id:"darwin-core",group:"DATOS",title:"Darwin Core",desc:"Estándar para estructurar e intercambiar datos de biodiversidad.",url:"https://dwc.tdwg.org/es/",label:"TDWG · estándar"},
{id:"gbif-standards",group:"DATOS",title:"GBIF · estándares",desc:"Marco de estándares y calidad para publicar registros de ocurrencia.",url:"https://www.gbif.org/es/standards",label:"GBIF · datos de biodiversidad"},
{id:"gbif-quality",group:"DATOS",title:"GBIF · calidad de ocurrencias",desc:"Campos y recomendaciones para que un registro sea reutilizable y trazable.",url:"https://www.gbif.org/data-quality-requirements-occurrences",label:"GBIF · calidad"},
{id:"inat-observation",group:"OBSERVACIÓN",title:"iNaturalist · observaciones",desc:"Modelo de observación con organismo, fecha, lugar y evidencia multimedia.",url:"https://help.inaturalist.org/es/support/solutions/articles/151000192921-c%C3%B3mo-hacer-una-observaci%C3%B3n",label:"iNaturalist · guía"},
{id:"inat-quality",group:"OBSERVACIÓN",title:"iNaturalist · calidad de datos",desc:"Referencia para separar observaciones verificables, Needs ID y Research Grade.",url:"https://help.inaturalist.org/es/support/solutions/articles/151000169936--qu%C3%A9-es-la-valoraci%C3%B3n-de-calidad-de-los-datos-y-c%C3%B3mo-califican-las-observaciones-para-convertirse-en-",label:"iNaturalist · DQA"},
{id:"iucn",group:"CONSERVACIÓN",title:"UICN · categorías y criterios",desc:"Marco internacional para interpretar categorías de riesgo de extinción.",url:"https://nrl.iucnredlist.org/es/resources/categories-and-criteria",label:"IUCN Red List"},
{id:"gbif-sensitive",group:"CONSERVACIÓN",title:"GBIF · datos sensibles",desc:"Buenas prácticas para generalizar ubicaciones de especies sensibles sin eliminar el valor científico.",url:"https://www.gbif.org/document/80512/guide-to-best-practices-for-generalising-sensitive-species-occurrence-data",label:"GBIF · protección"},
{id:"wcag",group:"WEB",title:"WCAG 2.2",desc:"Estándar internacional de accesibilidad web: perceptible, operable, comprensible y robusto.",url:"https://www.w3.org/WAI/standards-guidelines/wcag/",label:"W3C · accesibilidad"},
{id:"creativecommons",group:"MEDIA",title:"Creative Commons",desc:"Sistema de licencias para documentar condiciones de reutilización de fotografías y otros contenidos.",url:"https://creativecommons.org/cc-licenses/",label:"Creative Commons"}
];

export const pl1Rules=[
{code:"EVIDENCIA",title:"Evidencia antes que estética",text:"Una imagen de referencia no confirma presencia local. La ficha debe distinguir fuente, evidencia y nivel de certeza."},
{code:"TRAZABILIDAD",title:"Cada dato debe poder volver a su origen",text:"Los registros mantienen ID, fuente, fecha y, cuando corresponde, información espacial y licencia."},
{code:"PRIVACIDAD",title:"Observación privada por defecto",text:"Los aportes comunitarios se guardan localmente. Las coordenadas sensibles no se publican automáticamente."},
{code:"NO-DAÑO",title:"La información no debe facilitar daño",text:"Nidos, refugios o especies sensibles pueden requerir generalización espacial y editorial."},
{code:"ACCESIBILIDAD",title:"Diseño para más personas",text:"Teclado, foco visible, jerarquía semántica, contraste, reducción de movimiento y lectura clara son parte del producto."},
{code:"VERSIONADO",title:"Nada importante queda sin versión",text:"Catálogo, esquema, reglas y capas se identifican con versión y fecha para evitar cambios silenciosos."}
];
