# OCARINA WILD · V8

**El Chañar que vive.**

OCARINA WILD es una experiencia visual de descubrimiento natural situada en **San Patricio del Chañar, Neuquén**. La portada es deliberadamente corta: cuatro puertas llevan a toda la profundidad.

## Concepto

**CENTRAL → PUERTA → FICHA → EVIDENCIA → SIGUIENTE DESCUBRIMIENTO**

La regla de diseño es:

> **Mucho sistema detrás. Muy poco ruido delante.**

La persona no entra a leer una enciclopedia. Entra a mirar, elegir una puerta, abrir una ficha y seguir descubriendo.

## Las cuatro puertas

### 01 · FAUNA
Fichas visuales de aves, peces, mamíferos y reptiles.

### 02 · FLORA
Fichas visuales de árboles, arbustos y vegetación ribereña/productiva.

### 03 · TERRITORIO
Cuatro ambientes principales:
- Río Neuquén
- Dique Compensador El Chañar
- Chacras y red de riego
- Monte

Además incluye pequeñas misiones de observación:
Río · Dique · Chacras · Monte · Cielo.

### 04 · ARCHIVO
La profundidad documental:
- matriz de evidencia;
- fuentes;
- historia local;
- conservación;
- metodología;
- alcance;
- cuaderno de campo.

## Motor de descubrimiento

Cada ficha sigue el mismo recorrido:

1. **MIRAR** — fotografía/representación visual.
2. **NOMBRAR** — nombre común + científico.
3. **UBICAR** — ambiente y zona.
4. **ENTENDER** — resumen, hábitat y temporada.
5. **CONTRASTAR** — certeza y fuente.
6. **GUARDAR** — favorito o registro propio.
7. **SEGUIR** — fichas relacionadas o sorpresa.

No hay una página gigantesca con toda la información visible. La profundidad aparece sólo cuando la persona la pide.

## Regla científica/editorial

**FUENTE ≠ FOTOGRAFÍA ≠ PRESENCIA LOCAL**

Una fotografía de Wikimedia puede servir para reconocer una especie. No demuestra que esa fotografía haya sido tomada en Chañar.

Los estados se mantienen separados:

- **Documentada:** fuente con vínculo local suficientemente específico.
- **Mención local:** referencia institucional/local que todavía requiere registro propio o mayor precisión.
- **Prioridad local:** elemento especialmente relevante para investigar/documentar.
- **Área de estudio:** aparece en el estudio Añelo–Dique/área amplia; no equivale automáticamente a presencia puntual en Chañar.
- **Regional:** pertenece al contexto biogeográfico regional; presencia local pendiente.
- **Candidato:** línea de investigación, no registro confirmado.

## Información natural incorporada

La base conserva la investigación acumulada, incluyendo:

- aves;
- peces;
- mamíferos;
- reptiles;
- árboles;
- arbustos;
- vegetación de ribera;
- especies del Monte;
- Río Neuquén;
- Dique Compensador El Chañar;
- chacras y red de riego;
- Monte.

Entre los registros locales/documentales incorporados se encuentran:
- **Cisne cuello negro** — registro publicado en la orilla del Dique Compensador El Chañar, 14/02/2016.
- **Sobrepuesto común** — registro publicado en el Dique, 14/02/2016.
- **Golondrina barranquera** — registro publicado en el Dique, 14/02/2016.
- **Atajacaminos ñañarca** — cita SIB de 2017 en el sector final de la presa lateral.
- **Águila pescadora** — registro científico en Dique El Chañar.
- **Atajacaminos tijera** — registros y reproducción documentados en Dique El Chañar.
- **Chañar (Geoffroea decorticans)** — especie nativa y emblemática, prioritaria para el archivo.

También se conserva la capa de especies del estudio **PDTS CIN-CONICET/UNCo**, cuya información reúne distintos sitios y épocas del área de estudio. Por eso esas líneas no se convierten automáticamente en presencia local.

La **trucha arco iris** permanece correctamente como **regional** hasta contar con evidencia puntual suficiente.

## Territorio

El archivo reconoce el paisaje como parte de la investigación:

- **Río Neuquén:** corredor de agua, ribera y vida.
- **Dique Compensador El Chañar:** declarado Área Natural Protegida Municipal en octubre de 2006; el estudio UNCo/CONICET destaca su combinación de agua profunda y baja, juncales, vegetación de ribera, monte y área rural.
- **Chacras + riego:** cultivos, canales, arbolado y bordes productivos.
- **Monte:** arbustales xerófilos, suelo, refugios y estacionalidad.

## Historia incorporada

La cronología documental conserva:

- **1881–1883:** referencias históricas al Fortín/Mangrullo Chañar y rastrilladas.
- **1913:** mensura de la colonia Tratayen y reconstrucción de su desaparición tras una gran crecida.
- **1968–1971:** transformación productiva y obras de riego.
- **21 de mayo de 1973:** fecha reconocida oficialmente como fundación de San Patricio del Chañar.
- **2006:** declaración del Dique Compensador como Área Natural Protegida Municipal.

## Marco de conservación

El archivo contextualiza:

- Convenio sobre la Diversidad Biológica (CBD);
- Marco Mundial de Biodiversidad Kunming–Montreal 2030;
- Convención Ramsar;
- Convención de Bonn/CMS;
- CITES;
- Lista Roja de la UICN;
- Convención de Patrimonio Mundial de UNESCO;
- Ley argentina 25.675 de Ambiente;
- Ley 22.421 de Fauna;
- Ley 26.331 de Bosques Nativos.

Estos marcos son contexto documental y no convierten por sí solos una ficha en evidencia local.

## Cuaderno

Las observaciones se guardan localmente en el dispositivo:

- qué viste;
- dónde;
- fecha;
- evidencia;
- cantidad;
- confianza;
- notas.

No existe publicación automática ni backend.

## Principio de conservación

No perseguir, capturar ni manipular fauna. No revelar ubicaciones sensibles sin contexto. Las observaciones propias se mantienen privadas por defecto.

## Arquitectura técnica V8

La interfaz fue reducida a un único motor:

- `index.html` — shell mínimo;
- `app.js` — motor de estado, navegación, fichas, archivo, cuaderno y descubrimiento;
- `styles.css` — único sistema visual;
- `research-data.js` — fuente de datos, especies, ambientes y fuentes.

Las capas visuales antiguas se mantienen en el repositorio como historial, pero **ya no participan en la interfaz V8**.

## Evolución

El siguiente crecimiento debe sumar **evidencia local real**, no simplemente nombres:

fotografías propias · audio · fechas · estaciones · observaciones · identificación revisada · relaciones ecológicas · cartografía gradual · colaboración local.

**OCARINA WILD no pretende aparentar una enciclopedia terminada. Construye, con tiempo y evidencia, una biblioteca natural viva de San Patricio del Chañar.**

Ocarina Producciones · San Patricio del Chañar · Neuquén · Argentina
