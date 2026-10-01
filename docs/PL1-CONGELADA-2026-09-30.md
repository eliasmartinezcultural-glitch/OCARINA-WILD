# OCARINA WILD · PL1 congelada

Fecha: 2026-09-30  
Versión: PL1.0.0  
Repositorio: eliasmartinezcultural-glitch/OCARINA-WILD

## Qué queda congelado

La experiencia troncal existente se considera **base PL1**: identidad, hero, navegación, catálogo, filtros, ambientes, fichas, estatuto conservacionista, observación local y estructura visual. Esta capa no rediseña ni reemplaza esas piezas.

## Regla de evolución

A partir de esta versión, las ampliaciones se incorporan como capas aditivas. No se cambia silenciosamente la lógica troncal ni se mezclan datos nuevos con registros confirmados sin trazabilidad.

## Capa añadida

- `data/pl1-resources.js`: registro de estándares y recursos externos.
- `pl1.css`: sistema visual aislado para la capa PL1.
- `pl1.js`: activación del motor existente y capa de investigación, auditoría y exportación.
- Este documento fija la versión y evita que futuras ampliaciones borren decisiones ya consolidadas.

## Criterios técnicos

1. Datos separados de presentación.
2. Identificadores persistentes para registros.
3. Fuente y nivel de evidencia visibles.
4. Observaciones comunitarias separadas del catálogo confirmado.
5. Ubicaciones sensibles no expuestas automáticamente.
6. Exportación local para portabilidad.
7. Accesibilidad progresiva alineada con WCAG 2.2; la conformidad formal requiere una auditoría específica.
8. Medios externos con crédito/licencia cuando corresponda.
9. Sin backend obligatorio para la experiencia base.
10. Toda nueva capa debe poder retirarse sin destruir la base PL1.

## Próxima fase: PL2

PL2 puede profundizar, sin alterar PL1, en: inventario fotográfico local, mapa de ambientes sin coordenadas sensibles, cronología de observaciones, temporadas, sonidos, fichas botánicas, fuentes institucionales, taxonomía, licencia de medios, exportación Darwin Core y panel de curaduría.


<!-- PL1+DATA layer tracked separately; core remains frozen. -->


## Curaduría 3.17 · 2026-09-30

Esta versión establece **3.17** como versión curada, reparada y actualizada de trabajo. La congelación PL1 continúa siendo la referencia estructural; 3.17 agrega transversalmente fuentes, esquema de investigación y capa profunda sin reemplazar el núcleo.

### Reparaciones realizadas
- Se activó correctamente la capa pl1-deep.js desde index.html.
- La hoja pl1-deep.css se carga de forma aislada desde su propio módulo.
- Se alineó el identificador visible de versión con **3.17**.
- Se mantuvo separado el motor existente del sistema de investigación.
- Se amplió el registro de fuentes nacionales, regionales e internacionales.

### Regla 3.17
**Toda mejora futura debe poder demostrar qué agrega, qué fuente utiliza y qué parte de la base congelada no modifica.**
