// PL1+ · capa profunda de investigación y trazabilidad.
// No modifica records existentes: agrega fuentes, esquema y reglas de interoperabilidad.

export const PL1_DEEP_VERSION="PL1+DATA.1.0.0";

export const deepSources=[
{id:"biodiversidad-ar",group:"ARGENTINA · DATOS",title:"Portal de Datos de Biodiversidad de Argentina",url:"https://biodiversidad.ar/",role:"Consulta de datos primarios, imágenes, georreferencias y bibliografía.",scale:"Argentina",use:"descubrimiento + contraste + citación"},
{id:"radycb",group:"ARGENTINA · DATOS",title:"Red Argentina de Datos y Colecciones Biológicas",url:"https://biodiversidad.ar/acerca-de/",role:"Gobernanza y publicación de datos primarios; referencia para FAIR, Darwin Core y atribución.",scale:"Argentina",use:"metadatos + interoperabilidad"},
{id:"flora-argentina",group:"FLORA",title:"Flora Argentina",url:"https://floraargentina.edu.ar/",role:"Referencia taxonómica y botánica para flora vascular argentina.",scale:"Argentina",use:"taxonomía + identificación"},
{id:"app-flora",group:"FLORA · SOFTWARE",title:"App Flor@rgentina",url:"https://app.floraargentina.edu.ar/",role:"Herramientas abiertas de identificación, búsqueda botánica, distribución y bibliografía.",scale:"Argentina",use:"identificación asistida + contraste"},
{id:"flora-conosur",group:"FLORA",title:"Catálogo de Plantas Vasculares del Cono Sur",url:"https://app.floraargentina.edu.ar/BDFA2025New/ConsultaBDFA2025.html",role:"Consulta por familia, género, especie, sinónimos, colecciones y bibliografía.",scale:"Cono Sur",use:"taxonomía + sinónimos"},
{id:"iboda",group:"FLORA · CIENCIA",title:"IBODA · Instituto de Botánica Darwinion",url:"https://iboda.conicet.gov.ar/proyectos-institucionales/",role:"Proyecto de Flora Vascular y Documenta Florae Australis.",scale:"Argentina",use:"bibliografía + taxonomía + distribución"},
{id:"iadiza-collections",group:"COLECCIONES",title:"IADIZA · Colecciones biológicas",url:"https://iadiza.conicet.gov.ar/colecciones-biologicas/",role:"Colecciones de entomología, herbario, mastozoología, ornitología, herpetología, ictiología y bioacústica.",scale:"Argentina · tierras secas",use:"referencia de colecciones + comparación regional"},
{id:"conicet-biodiversity",group:"ARGENTINA · DATOS",title:"CONICET · Portal de Datos de Biodiversidad de Argentina",url:"https://www.conicet.gov.ar/nuevo-portal-de-datos-de-biodiversidad-de-argentina/",role:"Descripción institucional del portal nacional y de sus fuentes de datos.",scale:"Argentina",use:"contexto institucional + trazabilidad"},
{id:"inta-monitoring",group:"AGROECOSISTEMAS",title:"INTA · monitoreo de biodiversidad",url:"https://www.argentina.gob.ar/inta/tecnologias/definicion-de-areas-de-conservacion-diseno-de-predios-y-monitoreo-de-biodiversidad",role:"Metodologías para determinar especies y monitorear biodiversidad en agroecosistemas.",scale:"Argentina",use:"diseño de relevamientos"},
{id:"kba-aves",group:"CONSERVACIÓN",title:"KBA y AICA de Argentina · Aves Argentinas",url:"https://kba.avesargentinas.org.ar/",role:"Áreas clave para biodiversidad y áreas importantes para conservación de aves.",scale:"Argentina",use:"contexto territorial + conservación"},
{id:"kba-download",group:"CONSERVACIÓN · DATOS",title:"KBA/AICA · descarga y uso de datos",url:"https://kba.avesargentinas.org.ar/recursos/descarga-y-uso-de-datos/",role:"Condiciones de uso, citas y referencias de la base KBA/AICA.",scale:"Argentina",use:"citación + conservación"},
{id:"birdlife-datazone",group:"AVES · CONSERVACIÓN",title:"BirdLife DataZone",url:"https://datazone.birdlife.org/",role:"Referencia internacional de conservación y áreas importantes para aves.",scale:"Global",use:"contraste regional/internacional"},
{id:"biodiversity-citizen",group:"CIENCIA CIUDADANA",title:"Biodiversidad.ar · eBird y ArgentiNat",url:"https://biodiversidad.ar/noticias/2024/datos-de-ciencia-ciudadana/",role:"Explica cómo datos de ciencia ciudadana llegan al portal nacional.",scale:"Argentina",use:"metodología + procedencia"},
{id:"cbd",group:"MARCO INTERNACIONAL",title:"Convention on Biological Diversity",url:"https://www.cbd.int/",role:"Marco internacional de conservación, uso sostenible y gobernanza de biodiversidad.",scale:"Global",use:"principios + contexto"},
{id:"cbd-argentina",group:"MARCO INTERNACIONAL",title:"CBD · perfil de Argentina",url:"https://www.cbd.int/countries/profile?country=ar",role:"Perfil nacional dentro del Convenio sobre Diversidad Biológica.",scale:"Argentina · internacional",use:"contexto normativo"},
{id:"nagoya",group:"MARCO INTERNACIONAL",title:"Nagoya Protocol · Access and Benefit-sharing",url:"https://www.cbd.int/abs/",role:"Referencia para acceso a recursos genéticos y participación justa en beneficios.",scale:"Global",use:"gobernanza de recursos biológicos"},
{id:"care",group:"GOBERNANZA DE DATOS",title:"CARE Principles for Indigenous Data Governance",url:"https://www.gida-global.org/careprinciples",role:"Principios orientados a beneficio colectivo, autoridad, responsabilidad y ética en datos indígenas.",scale:"Global",use:"datos comunitarios + conocimiento indígena"},
{id:"gbif-rased",group:"GOBERNANZA DE DATOS",title:"GBIF · Restricted Access Species Data",url:"https://www.gbif.org/project/CESP2026-013/managing-restricted-access-species-data-in-gbif",role:"Trabajo internacional sobre datos de acceso restringido, especies sensibles y comunidades.",scale:"Global",use:"protección + acceso controlado"},
{id:"gbif-strategy",group:"GOBERNANZA",title:"GBIF · Strategic Framework",url:"https://www.gbif.org/strategic-plan",role:"Marco sobre confianza, transparencia, integridad, atribución y salvaguardas.",scale:"Global",use:"gobernanza del proyecto"},
{id:"gbif-quality-principles",group:"CALIDAD",title:"GBIF · Principles of Data Quality",url:"https://www.gbif.org/document/80509/principles-of-data-quality",role:"Marco para evaluar calidad y documentación de datos de biodiversidad.",scale:"Global",use:"control de calidad"},
{id:"inat-licenses",group:"DERECHOS · MEDIA",title:"iNaturalist · licencias",url:"https://help.inaturalist.org/en/support/solutions/articles/151000175695",role:"Explica licencias de observaciones, imágenes y sonidos.",scale:"Global",use:"derechos + atribución"},
{id:"inat-developers",group:"SOFTWARE",title:"iNaturalist · Developers",url:"https://www.inaturalist.org/pages/developers",role:"Documentación y límites de uso de la API; recomienda datasets para grandes volúmenes.",scale:"Global",use:"integración técnica"},
{id:"wcag-22",group:"ACCESIBILIDAD",title:"W3C · WCAG 2.2",url:"https://www.w3.org/WAI/standards-guidelines/wcag/",role:"Estándar internacional de accesibilidad web.",scale:"Global",use:"diseño + QA"},
{id:"wcag-glance",group:"ACCESIBILIDAD",title:"W3C · WCAG 2 de un vistazo",url:"https://www.w3.org/WAI/standards-guidelines/wcag/glance/es",role:"Resumen operativo de principios y criterios de accesibilidad.",scale:"Global",use:"implementación + QA"},
{id:"w3-design",group:"WEB · DISEÑO",title:"W3C · Web Platform Design Principles",url:"https://www.w3.org/TR/design-principles/",role:"Principios para diseñar APIs y plataforma web priorizando necesidades de usuarios.",scale:"Global",use:"arquitectura + UX"},
{id:"commons-argentina",group:"DERECHOS · MEDIA",title:"Wikimedia Commons · copyright Argentina",url:"https://commons.wikimedia.org/wiki/Commons:Copyright_rules_by_territory/Argentina",role:"Referencia sobre copyright y condiciones aplicables a obras argentinas en Commons.",scale:"Argentina · global",use:"verificación de derechos"},
{id:"bhl",group:"BIBLIOGRAFÍA",title:"Biodiversity Heritage Library",url:"https://www.biodiversitylibrary.org/",role:"Biblioteca digital especializada en literatura histórica y científica de biodiversidad.",scale:"Global",use:"bibliografía + historia natural"},
{id:"osm-copyright",group:"CARTOGRAFÍA",title:"OpenStreetMap · copyright",url:"https://www.openstreetmap.org/copyright",role:"Atribución y condiciones de uso de cartografía abierta.",scale:"Global",use:"mapas + atribución"}
];

export const recordSchema={
  occurrenceID:"ID persistente de la observación/registro",
  taxonID:"ID persistente del taxón cuando exista",
  basisOfRecord:"Observation | HumanObservation | MaterialSample | PreservedSpecimen | MachineObservation",
  scientificName:"Nombre científico, separado del nombre común",
  vernacularName:"Nombre vernáculo, con idioma cuando corresponda",
  taxonRank:"Rango taxonómico",
  kingdom:"Reino",
  family:"Familia",
  genus:"Género",
  acceptedNameUsage:"Nombre taxonómico aceptado tras contraste",
  eventDate:"Fecha ISO 8601",
  eventTime:"Hora si está disponible",
  countryCode:"Código ISO 3166-1 alpha-2",
  stateProvince:"Provincia",
  locality:"Localidad descrita sin exponer información sensible",
  locationID:"Identificador de sitio/ambiente",
  decimalLatitude:"Latitud sólo cuando publicar sea seguro",
  decimalLongitude:"Longitud sólo cuando publicar sea seguro",
  geodeticDatum:"Datum, preferentemente WGS84 cuando corresponda",
  coordinateUncertaintyInMeters:"Incertidumbre espacial",
  dataGeneralizations:"Generalización aplicada a ubicación u otros datos",
  informationWithheld:"Información deliberadamente retenida",
  environment:"Ambiente OCARINA WILD",
  occurrenceStatus:"present | absent | unknown",
  evidenceLevel:"local-primary | local-secondary | regional-reference | international-reference | pending",
  sourceRef:"ID del registro en el ledger de fuentes",
  sourceURL:"URL primaria",
  sourceRetrievedAt:"Fecha de consulta",
  observer:"Persona/autoria, sólo si corresponde y existe permiso",
  mediaRef:"ID de medio asociado",
  mediaAuthor:"Autoría del medio",
  mediaLicense:"Licencia exacta",
  mediaURL:"URL estable del medio",
  citation:"Cita humana reutilizable",
  reviewStatus:"unreviewed | reviewed | curator-approved | rejected"
};

export const evidenceLevels=[
 {id:"local-primary",label:"EVIDENCIA LOCAL PRIMARIA",meaning:"Observación, documento o registro producido directamente en San Patricio del Chañar."},
 {id:"local-secondary",label:"FUENTE LOCAL SECUNDARIA",meaning:"Fuente institucional/local que documenta el taxón o fenómeno en el territorio."},
 {id:"regional-reference",label:"REFERENCIA REGIONAL",meaning:"Neuquén, Patagonia o Cono Sur; sirve para comparación, no confirma presencia local por sí sola."},
 {id:"international-reference",label:"REFERENCIA INTERNACIONAL",meaning:"Fuente global para taxonomía, conservación, metodología o multimedia."},
 {id:"pending",label:"PENDIENTE",meaning:"Existe una pista o antecedente, pero falta evidencia suficiente para afirmarlo como registro local."}
];

export const deepRules=[
 {code:"CHAIN",title:"Cadena de evidencia",text:"Fuente → recurso → evidencia → registro → revisión. Ningún enlace intermedio se salta."},
 {code:"SCALE",title:"Escala explícita",text:"Cada dato declara si pertenece a Chañar, Neuquén, Patagonia, Argentina o una referencia global."},
 {code:"MEDIA",title:"Media con identidad",text:"Autor, URL, licencia y condiciones se guardan como metadatos del medio; nunca sólo como una imagen encontrada."},
 {code:"TAXONOMY",title:"Taxonomía separada",text:"Nombre común, nombre científico, sinónimos y nombre aceptado no se mezclan en un único campo."},
 {code:"SENSITIVE",title:"Datos sensibles",text:"La publicación puede generalizar, retener o eliminar coordenadas cuando exista riesgo para especies, sitios o comunidades."},
 {code:"CARE",title:"FAIR + CARE",text:"La interoperabilidad no elimina derechos e intereses comunitarios; los datos indígenas o de conocimiento tradicional requieren gobernanza apropiada."},
 {code:"NO-AUTO-CONFIRM",title:"Nada se confirma solo",text:"Una coincidencia de API, una fotografía regional o una sugerencia automática nunca convierte por sí sola una ficha en registro local confirmado."},
 {code:"AUDIT",title:"Auditoría antes de publicar",text:"Toda nueva ficha pasa por validación de ID, taxonomía, fecha, escala, fuente, media y licencia antes de entrar al catálogo confirmado."}
];
