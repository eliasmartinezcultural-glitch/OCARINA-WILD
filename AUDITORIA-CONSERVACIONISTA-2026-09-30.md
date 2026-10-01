# OCARINA WILD — AUDITORÍA CONSERVACIONISTA INTEGRAL

**Fecha:** 30/09/2026  
**Versión auditada:** estado publicado en `main` después del Estatuto v1.0  
**Objetivo:** detectar contradicciones con el Estatuto antes de ampliar el catálogo.

## Resultado ejecutivo

La auditoría encontró que la arquitectura general es compatible con una identidad conservacionista, pero el contenido actual tenía contradicciones de **clasificación, contexto y representación visual** que debían corregirse antes de seguir creciendo.

### Hallazgos críticos

1. **Registro de cisnes:** el documento oficial consultado registra **15 aves muertas** en San Patricio del Chañar dentro de una tabla de vigilancia sanitaria. El sitio las presentaba como “15 individuos” y como “registro georreferenciado”, sin aclarar la mortalidad. Se considera una falla crítica de contexto. citeturn4view0
2. **Aves de 2018:** Gendarmería informa 53 aves halladas en una chacra local y señala expresamente que se encontraban **en cautiverio**, con 27 jaulas. El sitio las trataba como “Registro local”, lo que podía interpretarse como presencia silvestre. Deben quedar como antecedente documental de fauna en cautiverio, con presencia silvestre pendiente. citeturn1search2
3. **Pejerrey/perca/trucha:** la fuente municipal los menciona dentro de la sección de pesca deportiva. El sitio no debe convertir esa mención en promoción de pesca ni en confirmación taxonómica más precisa de lo que permite la fuente. La redacción se corrige hacia “mención municipal / identificación pendiente”. citeturn1search0
4. **Imágenes externas:** las 11 imágenes no vacías del catálogo son referencias visuales externas. Varias están tomadas fuera de Chañar: por ejemplo, la calandria corresponde a Costanera Sur, Buenos Aires; el cisne usado como referencia corresponde a Vitacura, Chile; otras son imágenes históricas o de colecciones. Por eso ninguna debe presentarse visualmente como fotografía local. citeturn3search5turn3search0turn3search2turn3search3
5. **Créditos visuales:** “Wikimedia Commons” como texto genérico no alcanza como sistema de procedencia robusto. La ficha debe permitir consultar el archivo original y su licencia/autoría cuando exista.
6. **Portada:** la imagen hero era una fotografía externa de un cisne y no llevaba un crédito visible ni la etiqueta “foto de referencia”. Esto se corrige.

## Auditoría por capa

### Imagen por imagen

| Código | Recurso | Uso | Dictamen |
|---|---|---|---|
| F-001 | Mimus saturninus | Referencia externa | APTO con etiqueta; la foto no es local |
| F-002 | Colaptes melanochloros | Referencia externa | APTO con etiqueta; la foto no es local |
| F-003 | Tachycineta leucopyga | Referencia externa histórica | APTO con etiqueta; no es evidencia local |
| F-004 | Paroaria coronata | Referencia externa | APTO; el registro local es de cautiverio |
| F-005 | Carduelis carduelis | Referencia externa | APTO; especie exótica introducida en Argentina, presencia local silvestre no demostrada |
| F-006 | Turdus philomelos | Referencia externa | APTO solo como referencia; identificación/presencia local requiere revisión |
| F-007 | Saltator aurantiirostris | Referencia externa | APTO; no prueba presencia por sí misma |
| F-008 | Sturnella loyca | Referencia externa | APTO; no prueba presencia por sí misma |
| F-009 | Cygnus melancoryphus | Referencia externa | APTO si se etiqueta; el registro documental local corresponde a mortalidad sanitaria |
| F-010 | Odontesthes sp. | Sin imagen | APTO; preferible a una imagen engañosa |
| F-011 | Percichthys sp. | Referencia externa | APTO con etiqueta; identificación local específica pendiente |
| F-012 | Oncorhynchus mykiss | Referencia externa | APTO solo como referencia; el sitio municipal dice “trucha”, no una especie concreta |

Las páginas de Wikimedia consultadas confirman que las imágenes tienen procedencias diversas y que algunas tienen licencias específicas que requieren atribución. citeturn3search0turn3search1turn3search2turn3search3turn3search4turn3search5turn3search6turn3search7

### Texto y evidencia

- **F-001/F-002/F-003:** la Municipalidad informa más de 25 especies y destaca esas tres. Se pueden mantener como registros locales respaldados por esa fuente. citeturn1search0
- **F-004/F-005/F-006/F-007/F-008:** mantener el acontecimiento histórico, pero cambiar el estado de evidencia de presencia silvestre a **PENDIENTE** y mostrar el contexto de cautiverio. citeturn1search2
- **F-005:** además, el SIB de Parques Nacionales clasifica `Carduelis carduelis` como introducida en Argentina y especie exótica invasora categoría 2. No debe presentarse como fauna autóctona. citeturn5search0
- **F-009:** conservar como registro de vigilancia sanitaria/mortalidad, no como censo de población viva. citeturn4view0
- **F-010/F-011/F-012:** mantener como menciones municipales, pero sin presentar la pesca como actividad promovida por OCARINA WILD ni convertir “trucha” en una especie exacta. citeturn1search0
- **FL-001:** el Dique Compensador fue declarado Área Natural Protegida Municipal en octubre de 2006 para conservar y preservar el ecosistema. Correcto como línea de investigación. citeturn1search1
- **FL-002/FL-003:** deben permanecer como líneas pendientes, no como inventarios botánicos.

### Funciones

**Aprobadas:**
- búsqueda;
- filtros;
- ordenamiento;
- fichas;
- tabs de información;
- trazabilidad de fuentes;
- observaciones locales guardadas en el dispositivo;
- exportación voluntaria;
- foco de teclado/Escape;
- protección de ubicaciones mediante ausencia de coordenadas salvo el registro oficial existente.

**Corrección necesaria:**
- las tarjetas deben distinguir explícitamente **FOTO LOCAL** de **FOTO DE REFERENCIA**;
- la portada debe mostrar la condición de referencia y su procedencia;
- el formulario de observaciones debe mantener el estado “observación”, nunca “confirmado”;
- los futuros registros no deben aceptar imágenes como evidencia de presencia sin metadatos de procedencia.

## Criterio internacional de referencia

El Convenio sobre la Diversidad Biológica establece identificación, monitoreo y organización de datos sobre biodiversidad en el artículo 7, y protección de ecosistemas, hábitats y poblaciones viables en el artículo 8. citeturn0search1turn0search2

La auditoría adopta esos principios como referencia técnica, sin convertir el Estatuto interno de OCARINA WILD en una norma jurídica internacional.

## Estado final de auditoría

**NO SE AMPLÍA EL CATÁLOGO TODAVÍA.**

Primero se corrigen:
1. estados de evidencia;
2. contexto de mortalidad/cautiverio;
3. etiquetas de imágenes;
4. procedencia visual;
5. créditos/licencias;
6. redacción conservacionista;
7. documentación del Estatuto.

Después de estas correcciones, el proyecto queda preparado para una segunda fase: **relevamiento local real de fauna y flora**, priorizando fotografías propias, observaciones trazables y fuentes científicas/institucionales.


## Correcciones aplicadas después de la auditoría

- F-004 a F-008: pasaron de “Registro local” a **PENDIENTE · presencia silvestre**, conservando el antecedente histórico de cautiverio.
- F-005: se explicitó que `Carduelis carduelis` es el cardelino/jilguero europeo; el SIB de Parques Nacionales lo clasifica como introducido en Argentina. citeturn5search0
- F-009: pasó a **Registro sanitario · mortalidad**; la cantidad quedó como “15 aves muertas”; su ubicación exacta dejó de exponerse públicamente y quedó excluida de “Sorpréndeme”.
- F-010 a F-012: se corrigió el nivel a identificación/mención pendiente y se eliminó el lenguaje promocional de pesca.
- Todas las imágenes externas visibles quedaron rotuladas como **FOTO DE REFERENCIA**; las fichas ofrecen acceso al archivo de Wikimedia cuando corresponde.
- La portada incorpora procedencia visual explícita.
- Se agregó fallback para imágenes externas que fallen.
- El almacenamiento local de observaciones ahora maneja fallos de `localStorage` sin convertir una observación en confirmación.
- Se verificó sintácticamente `app.js` después de las modificaciones: **OK**.

## Criterio de cierre

La auditoría conservacionista de esta versión queda **cerrada para la etapa actual**. No se incorporará una nueva especie, fotografía o función de catálogo hasta pasar el mismo control de evidencia, procedencia, contexto, impacto y coherencia con el Estatuto. El CDB también subraya la importancia de la educación pública sobre biodiversidad y de minimizar impactos adversos; OCARINA WILD adopta esos principios como referencia de diseño y gobernanza interna. citeturn7search11turn7search0
