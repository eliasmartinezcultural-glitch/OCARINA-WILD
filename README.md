# OCARINA WILD

**Fauna, flora y naturaleza de San Patricio del Chañar, Neuquén.**

OCARINA WILD no es una enciclopedia general ni una base de datos fría. Es una **puerta visual hacia el mundo natural local**: cada animal o planta funciona como una pequeña experiencia que permite mirar, reconocer, comprender, ubicar y seguir investigando.

## Misión

Hacer visible, comprensible y disfrutable la naturaleza de San Patricio del Chañar, construyendo un archivo local que pueda ser usado por vecinos, familias, escuelas y personas que quieran conocer el territorio.

## Valores

1. **Chañar primero.** Un dato regional no se convierte automáticamente en evidencia local.
2. **Evidencia antes que relleno.** Si no sabemos algo, lo decimos.
3. **La vida es protagonista.** La interfaz muestra primero; la profundidad aparece después.
4. **Ciencia y memoria no se mezclan.** Documento, observación, memoria e investigación pendiente tienen estados distintos.
5. **Accesibilidad.** Debe poder entenderse y usarse desde un teléfono, una computadora escolar o una pantalla grande.
6. **Proveniencia.** Cada afirmación importante debe poder rastrearse a una fuente o quedar marcada como pendiente.
7. **Respeto por el territorio.** Evitamos exponer ubicaciones sensibles de fauna cuando hacerlo pudiera perjudicarla.
8. **Incremental.** El proyecto puede crecer sin romper la experiencia principal.

## Producto

La experiencia pública tiene solamente cuatro pasos:

**MIRAR → ELEGIR UNA VIDA → ENTENDERLA → VOLVER AL TERRITORIO**

Las fichas concentran la profundidad: reconocimiento, nombre científico, ambiente, alimentación, comportamiento, presencia local, preguntas de investigación y procedencia.

## Estados de evidencia

- **Registro local:** una fuente vincula el dato con San Patricio del Chañar.
- **Observación local:** registro producido en territorio que todavía requiere corroboración.
- **Memoria:** relato local separado de evidencia científica.
- **Investigación pendiente:** hipótesis o línea de trabajo que no se publica como hecho confirmado.

## Arquitectura técnica

Proyecto estático compatible con GitHub Pages: HTML + CSS + JavaScript, sin backend obligatorio. GitHub Pages publica directamente los archivos del repositorio y permite sitios de proyecto asociados a un repositorio. citeturn0search0turn0search2

Principios técnicos:

- núcleo sin frameworks;
- una experiencia principal con fichas profundas;
- estado de interfaz pequeño y explícito;
- funciones de responsabilidad única;
- eventos registrados una sola vez;
- tolerancia a la ausencia de localStorage;
- fallback si una imagen externa falla;
- soporte para movimiento reducido;
- foco de teclado y Escape en el diálogo;
- controles semánticos;
- carga diferida de imágenes secundarias;
- contenido preparado para crecer sin rehacer la interfaz.

## Datos y fuentes iniciales

- Municipalidad de San Patricio del Chañar — actividades, avistaje, Río Neuquén y Dique Compensador.
- Argentina.gob.ar / Gendarmería — procedimiento de aves silvestres de 2018 en una chacra local.
- Argentina.gob.ar / Comisión Asesora de Fauna Silvestre — registro de 15 cisnes de cuello negro en 2023.
- Ambiente Neuquén — actividad educativa de alevinos en el Río Neuquén.
- Bibliografía sobre comunidades de malezas de Neuquén como pista de investigación, no como inventario automático de Chañar.

## Política de imágenes

Una imagen externa de referencia **no es una fotografía local**. La interfaz la etiqueta como tal. La evolución recomendada es incorporar progresivamente fotografías propias/locales con autoría, fecha, lugar y licencia documentados.

## Próxima evolución

1. Reemplazar progresivamente referencias externas por archivo fotográfico local autorizado.
2. Completar fichas botánicas con inventarios específicos de Chañar.
3. Añadir sonidos locales reales con autoría y fecha.
4. Incorporar mapa local solamente cuando exista evidencia espacial suficiente.
5. Construir revisión editorial antes de publicar observaciones como registros.
6. Mantener la portada corta: la profundidad debe vivir dentro de cada ficha.

## Regla de oro

> **Complejidad para el sistema. Simplicidad para la persona.**

OCARINA WILD debe sentirse como entrar a un paisaje, no como abrir una planilla.
