export const WILD_320_VERSION="3.20-TRONCAL.1";
export const WILD_320_LAW={
 title:"LEY MUNDIAL DE OCARINA WILD",
 statement:"Proyecto serio, basado en información oficial y real, con representación real, 40% visual, 60% texto y 100% interacción sencilla.",
 visual:"40% VISUAL", text:"60% TEXTO", interaction:"100% INTERACCIÓN",
 rules:["Información oficial y verificable cuando exista.","Representación real: una imagen documental nunca se presenta como local si no lo es.","40% visual / 60% texto como referencia de composición, no como medición rígida de píxeles.","100% de las funciones principales deben poder entenderse y usarse con acciones simples.","Multidispositivo desde el origen.","Mucho diseño y sistema de fondo; poca complejidad visible.","Color, imagen y territorio primero; metodología disponible a profundidad.","La belleza nunca puede reemplazar la evidencia."]
};
export const wild320Sources=[
{id:"local-municipal-quehacer",title:"Municipalidad de San Patricio del Chañar · ¿Qué hacer?",kind:"FUENTE LOCAL",scale:"CHAÑAR",date:"consulta 2026",credit:"Municipalidad de San Patricio del Chañar",summary:"La municipalidad informa más de 25 especies de aves registradas en la zona y menciona calandria grande, carpintero real y golondrina patagónica. También presenta al Río Neuquén como espacio de pesca de pejerreyes, percas y truchas.",status:"INTEGRADA"},
{id:"local-municipal-nuestra",title:"Municipalidad de San Patricio del Chañar · Nuestra ciudad",kind:"FUENTE LOCAL",scale:"CHAÑAR",date:"consulta 2026",credit:"Municipalidad de San Patricio del Chañar",summary:"Documenta el Dique Compensador como Área Natural Protegida Municipal desde octubre de 2006 y destaca su flora y fauna autóctonas, principalmente aves.",status:"INTEGRADA"},
{id:"ambiente-alevinos",title:"Secretaría de Ambiente y Recursos Naturales de Neuquén · Siembra educativa",kind:"FUENTE OFICIAL",scale:"CHAÑAR · RÍO",date:"24/10/2022",credit:"Secretaría de Ambiente y Recursos Naturales de Neuquén",summary:"Registra una liberación educativa de 1000 alevinos en el Río Neuquén. OCARINA WILD conserva el hecho como evento y no lo convierte automáticamente en evidencia de población residente.",status:"INTEGRADA"},
{id:"ambiente-educacion-2026",title:"Secretaría de Ambiente y Recursos Naturales · Promesa ambiental",kind:"FUENTE OFICIAL",scale:"CHAÑAR",date:"18/06/2026",credit:"Secretaría de Ambiente y Recursos Naturales de Neuquén",summary:"Documenta una actividad de educación ambiental con niñas, niños, docentes y familias de San Patricio del Chañar centrada en agua, flora, fauna y hábitos sustentables.",status:"INTEGRADA"},
{id:"gbif-quality",title:"GBIF · requisitos de calidad de datos",kind:"ESTÁNDAR INTERNACIONAL",scale:"GLOBAL",date:"referencia técnica",credit:"Global Biodiversity Information Facility (GBIF)",summary:"Orienta la estructura de registros de ocurrencia: identificador, nombre científico, fecha, ubicación, rango taxonómico y metadatos de calidad, licencia y procedencia.",status:"MARCO"},
{id:"wcag-22",title:"W3C · WCAG 2.2",kind:"ESTÁNDAR DE ACCESIBILIDAD",scale:"GLOBAL",date:"referencia técnica",credit:"World Wide Web Consortium (W3C)",summary:"Marco para construir una experiencia accesible mediante percepción, operabilidad, comprensión y robustez. Se adopta como criterio de interfaz de OCARINA WILD.",status:"MARCO"}];
export const wild320Principles=[
{n:"01",title:"INFORMACIÓN REAL",text:"El proyecto prioriza información oficial, fuentes identificables y datos verificables. Cuando no existe evidencia suficiente, se declara como pendiente."},
{n:"02",title:"REPRESENTACIÓN REAL",text:"Una fotografía, ilustración, mapa o recurso visual debe decir qué representa, de dónde proviene y qué no demuestra. Una imagen de referencia no se convierte en prueba local."},
{n:"03",title:"40% VISUAL · 60% TEXTO",text:"La experiencia combina impacto visual con contexto. El porcentaje funciona como norte editorial: nunca como una excusa para llenar la pantalla de texto ni para quitarle rigor al contenido."},
{n:"04",title:"100% INTERACCIÓN SIMPLE",text:"Todo lo importante debe poder descubrirse con acciones obvias: tocar, elegir, buscar, abrir, comparar, volver. La complejidad vive detrás."},
{n:"05",title:"MULTIDISPOSITIVO REAL",text:"Teléfono, tablet, notebook y pantalla grande reciben la misma experiencia, adaptada al espacio y al método de entrada."},
{n:"06",title:"DISEÑO AL FRENTE · SISTEMA ATRÁS",text:"Color, imagen, territorio, tipografía, ritmo y movimiento construyen una experiencia atractiva; datos, relaciones, validaciones y fuentes sostienen el rigor."},
{n:"07",title:"PROFUNDIDAD SIN SOBRECARGA",text:"La persona entra simple y puede profundizar mucho. La información se revela por capas en lugar de apilarse en una página interminable."},
{n:"08",title:"BELLEZA ≠ EVIDENCIA",text:"Un recurso visual puede emocionar, explicar o contextualizar. La evidencia se determina por su procedencia y calidad, no por lo convincente de la imagen."},
{n:"09",title:"CRÉDITO VISIBLE",text:"Autor, institución, procedencia, fecha, licencia o condición de uso acompañan al recurso cuando corresponde."},
{n:"10",title:"ACCESIBLE POR DISEÑO",text:"La interacción debe ser perceptible, operable, comprensible y robusta, en línea con la referencia WCAG 2.2."}
];
export const wild320Territories=[
{id:"rio",name:"RÍO NEUQUÉN",subtitle:"agua · ribera · movimiento",asset:"./media/territorio-rio.svg",text:"El río conecta agua, ribera, aves, peces, personas y memoria. No es una lista: es un sistema de relaciones."},
{id:"chacras",name:"CHACRAS",subtitle:"riego · arbolado · producción",asset:"./media/territorio-chacras.svg",text:"Las chacras mezclan producción, arbolado, canales, bordes y vida cotidiana. El archivo debe aprender a mirar esos bordes."},
{id:"dique",name:"DIQUE COMPENSADOR",subtitle:"agua · protección · aves",asset:"./media/territorio-dique.svg",text:"Ambiente reconocido por la Municipalidad como Área Natural Protegida Municipal desde 2006."},
{id:"monte",name:"MONTE",subtitle:"viento · suelo · adaptación",asset:"./media/territorio-monte.svg",text:"Las referencias regionales ayudan a investigar, pero nunca sustituyen una evidencia local independiente."}];
export const wild320Evidence=[
{id:"documentado",label:"DOCUMENTADO",short:"Hay una fuente local o evento concreto que permite afirmar algo acotado.",tone:"verified"},
{id:"referencia",label:"REFERENCIA",short:"Sirve para comparar, orientar o identificar; no demuestra presencia local.",tone:"reference"},
{id:"pendiente",label:"PENDIENTE",short:"Existe una pregunta abierta que todavía necesita revisión o evidencia.",tone:"pending"}];