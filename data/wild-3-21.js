export const WILD_321_VERSION="3.21-MATRIZ.1";

export const WILD_321_LAW={
 title:"LEY 3.21 · PROFUNDIDAD COMPACTA",
 visual:"40% VISUAL",
 text:"60% INFORMACIÓN",
 interaction:"100% INTERACCIÓN SIMPLE",
 statement:"Una superficie pública corta. Muchísima información disponible por capas. El usuario encuentra rápido lo específico y puede profundizar sin salir del proyecto.",
 rules:[
  "La matriz manda: cada contenido tiene una función única.",
  "No duplicar navegación, territorio, evidencia, fuentes ni metodología.",
  "La pantalla principal orienta; los paneles contienen profundidad.",
  "60% información / 40% visual es una guía editorial, no una medición rígida de píxeles.",
  "100% de las funciones principales se resuelven con acciones simples.",
  "La profundidad se abre bajo demanda y siempre conserva una ruta de regreso.",
  "La representación visual declara si es documental, referencia, ilustración, mapa o dato.",
  "La evidencia nunca se infiere desde la estética.",
  "Todo contenido importante debe tener relación con fuente, territorio o estado cuando corresponda."
 ]
};

export const wild321Matrix=[
 {id:"descubrir",label:"DESCUBRIR",purpose:"Encontrar rápidamente una vida, ambiente, registro o tema.",action:"BUSCAR / FILTRAR / ABRIR",owns:["catalogo","busqueda","resultados"]},
 {id:"territorio",label:"TERRITORIO",purpose:"Comprender los cuatro ambientes sin repetir fichas ni fuentes.",action:"ELEGIR AMBIENTE / EXPLORAR",owns:["rio","chacras","dique","monte"]},
 {id:"evidencia",label:"EVIDENCIA",purpose:"Entender qué está documentado, qué es referencia y qué falta comprobar.",action:"COMPROBAR / CONTEXTUALIZAR",owns:["documentado","referencia","pendiente"]},
 {id:"inmersion",label:"INMERSIÓN",purpose:"Seguir relaciones y leer en profundidad dentro del mismo proyecto.",action:"SEGUIR / CONECTAR / PROFUNDIZAR",owns:["ficha","fuentes","relaciones","metodologia"]}
];

export const wild321Territories=[
 {id:"rio",name:"RÍO NEUQUÉN",subtitle:"agua · ribera · movimiento",asset:"./media/territorio-rio.svg",text:"El río conecta agua, ribera, aves, peces, personas y memoria. Las referencias se mantienen separadas de los registros locales.",keywords:"agua aves peces ribera"},
 {id:"chacras",name:"CHACRAS",subtitle:"riego · arbolado · producción",asset:"./media/territorio-chacras.svg",text:"Las chacras reúnen producción, arbolado, canales, bordes y vida cotidiana. El territorio se estudia como sistema, no como postal.",keywords:"riego arboles canales aves"},
 {id:"dique",name:"DIQUE COMPENSADOR",subtitle:"agua · protección · aves",asset:"./media/territorio-dique.svg",text:"La Municipalidad informa que el Dique Compensador fue declarado Área Natural Protegida Municipal en 2006. La ficha conserva esa escala institucional.",keywords:"dique agua proteccion aves"},
 {id:"monte",name:"MONTE",subtitle:"viento · suelo · adaptación",asset:"./media/territorio-monte.svg",text:"Las referencias regionales ayudan a investigar el monte, pero no sustituyen evidencia local independiente.",keywords:"monte viento suelo vegetacion"}
];

export const wild321Evidence=[
 {id:"documentado",label:"DOCUMENTADO",text:"Existe una fuente local o un evento concreto que permite afirmar algo acotado. No significa que cada aspecto de una población esté demostrado."},
 {id:"referencia",label:"REFERENCIA",text:"Material regional o externo útil para orientar, comparar o identificar. No demuestra por sí mismo presencia local."},
 {id:"pendiente",label:"PENDIENTE",text:"Pregunta abierta que necesita revisión, identificación o evidencia adicional. El vacío se conserva como parte del archivo."}
];

export const wild321Sources=[
 {id:"municipal-quehacer",title:"Municipalidad de San Patricio del Chañar · ¿Qué hacer?",kind:"FUENTE LOCAL",scale:"CHAÑAR",date:"consulta 2026",credit:"Municipalidad de San Patricio del Chañar",summary:"La Municipalidad informa más de 25 especies de aves registradas en la zona y menciona calandria grande, carpintero real y golondrina patagónica. También presenta pejerrey, perca y trucha en el Río Neuquén."},
 {id:"municipal-nuestra",title:"Municipalidad de San Patricio del Chañar · Nuestra ciudad",kind:"FUENTE LOCAL",scale:"CHAÑAR",date:"consulta 2026",credit:"Municipalidad de San Patricio del Chañar",summary:"Documenta al Dique Compensador como Área Natural Protegida Municipal desde 2006 y destaca su flora y fauna autóctonas."},
 {id:"ambiente-alevinos",title:"Secretaría de Ambiente de Neuquén · Siembra educativa",kind:"FUENTE OFICIAL",scale:"CHAÑAR · RÍO",date:"24/10/2022",credit:"Secretaría de Ambiente y Recursos Naturales de Neuquén",summary:"Registra la liberación educativa de 1000 alevinos en el Río Neuquén. El proyecto conserva el hecho como evento y no lo convierte automáticamente en evidencia de población residente."},
 {id:"gbif-quality",title:"GBIF · requisitos de calidad de datos",kind:"ESTÁNDAR",scale:"GLOBAL",date:"referencia técnica",credit:"Global Biodiversity Information Facility",summary:"Sirve como referencia para estructurar ocurrencias, identificadores, nombres, fechas, ubicación y metadatos de calidad y procedencia."},
 {id:"wcag",title:"W3C · WCAG 2.2",kind:"ESTÁNDAR",scale:"GLOBAL",date:"referencia técnica",credit:"World Wide Web Consortium",summary:"Referencia de accesibilidad para contenido perceptible, operable, comprensible y robusto."}
];

export const wild321Rules=[
 ["01","UNA FUNCIÓN · UN LUGAR","Buscar no debe competir con fuentes. Territorio no debe repetir evidencia. La metodología no debe ocupar la portada."],
 ["02","UNA PÁGINA · MUCHAS PROFUNDIDADES","La superficie permanece corta. Los paneles contienen la extensión."],
 ["03","INFORMACIÓN ANTES QUE ADORNO","La imagen abre la puerta; el texto explica; la fuente sostiene."],
 ["04","TODO DENTRO","La comprensión principal ocurre dentro de OCARINA WILD."],
 ["05","VOLVER SIEMPRE","Toda profundidad conserva contexto, origen y una salida clara."],
 ["06","NO DUPLICAR","Un dato tiene un propietario editorial y puede ser reutilizado por relación."],
 ["07","NO CONFUNDIR","Evento ≠ población · referencia ≠ presencia · foto ≠ evidencia."],
 ["08","MULTIDISPOSITIVO","La misma matriz funciona con toque, teclado, mouse y pantallas pequeñas o grandes."]
];