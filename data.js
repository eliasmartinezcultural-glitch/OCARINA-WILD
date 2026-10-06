window.WILD_DATA = {
  "meta": {
    "title": "OCARINA WILD · FOTOGRAFÍAS PRIMERO",
    "subtitle": "Atlas visual de vida",
    "place": "San Patricio del Chañar · Neuquén",
    "version": "WILD PHOTO-FIRST 2.0 · CURATION ENGINE",
    "rule": "Ninguna especie entra al atlas si antes no existe una fotografía real de un ejemplar o planta viva.",
    "visualPolicy": "Cero caza · cero muerte · cero animales como comida · cero captura · cero explotación.",
    "worldLaw": "PHOTO FIRST — FOTO REAL ANTES QUE DATO, CATEGORÍA, TAXONOMÍA, TERRITORIO O EXPERIENCIA.",
    "entryGate": [
      "foto_real",
      "vida_visible",
      "fuente_fotografica",
      "auditoria_visual"
    ],
    "dataPriority": [
      "fotografia",
      "auditoria_visual",
      "identificacion",
      "categoria",
      "taxonomia",
      "territorio",
      "ecologia",
      "observacion",
      "educacion"
    ],
    "statusModel": [
      "foto_aprobada",
      "identificacion_confirmada",
      "referencia_regional",
      "registro_local"
    ],
    "expansionRule": "No se agregan especies por completar números. Se agregan únicamente cuando superan la puerta fotográfica.",
    "curatorialGate": {
      "required": [
        "photo",
        "lifeVisible",
        "photoSource",
        "visualAudit"
      ],
      "blockedVisuals": [
        "caza",
        "muerte",
        "animal como comida",
        "captura",
        "explotacion",
        "sufrimiento"
      ],
      "licensePolicy": "La presencia de una fuente no equivale a una licencia de reutilización. La licencia de cada fotografía debe verificarse antes de empaquetarla localmente o redistribuirla."
    },
    "referenceModel": "La fotografía puede ser una referencia visual regional. Nunca se presenta como registro local salvo que exista evidencia fotográfica local."
  },
  "species": [
    {
      "id": "abeja-melifera",
      "name": "Abeja melífera",
      "scientific": "Apis mellifera",
      "group": "invertebrados",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Apis_mellifera_Western_honey_bee.jpg&width=1200&v=20261005-3",
      "photoSource": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Apis_mellifera_Western_honey_bee.jpg?v=20261005",
      "credit": "Imagen de referencia · Wikimedia Commons",
      "note": "La presencia y función fueron estudiadas en chacras de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "invertebrados",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "contexto local documentado",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "vegetación",
        "suelo y flores",
        "ambientes rurales"
      ],
      "observe": "Mirar con calma sobre flores, hojas y suelo. Evitar tocar, capturar o alterar refugios.",
      "experience": {
        "firstClue": "Forma, patas y relación con plantas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "abejorro-negro",
      "name": "Abejorro negro",
      "scientific": "Bombus atratus",
      "group": "invertebrados",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Bombus_atratus_BYN.jpg&width=1200&v=20261005-4",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Bombus_atratus_BYN.jpg",
      "credit": "Wikimedia Commons · Bombus atratus",
      "note": "Fotografía real de un ejemplar vivo; referencia regional. No constituye un registro fotográfico local.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "invertebrados",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "vegetación",
        "suelo y flores",
        "ambientes rurales"
      ],
      "observe": "Mirar con calma sobre flores, hojas y suelo. Evitar tocar, capturar o alterar refugios.",
      "experience": {
        "firstClue": "Forma, patas y relación con plantas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "aguila-pescadora",
      "name": "Águila pescadora",
      "scientific": "Pandion haliaetus",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Pandion_haliaetus.jpg&width=1200&v=20261005-3",
      "photoSource": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Pandion_haliaetus.jpg?v=20261005",
      "credit": "Imagen de referencia · Wikimedia Commons",
      "note": "No es la fotografía del registro local; existe evidencia fotográfica y fílmica publicada para El Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "contexto local documentado",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "alamo-cortina",
      "name": "Álamo",
      "scientific": "Populus sp.",
      "group": "arboles",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Populus_nigra_Italica.jpg&width=1200&v=20261005-3",
      "photoSource": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Populus_nigra_Italica.jpg?v=20261005",
      "credit": "Imagen de referencia · Wikimedia Commons",
      "note": "La publicación local menciona hileras de álamos en el sector estudiado; la especie exacta no siempre se determina.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arboles",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "género",
        "status": "identificación específica pendiente",
        "evidence": "la ficha conserva deliberadamente la incertidumbre específica"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "chacras",
        "bordes de agua",
        "ambientes urbanos y rurales"
      ],
      "observe": "Comparar corteza, hojas, porte y entorno. Observar sin arrancar hojas, flores ni frutos.",
      "experience": {
        "firstClue": "Porte, corteza y hojas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "atajacaminos-tijera",
      "name": "Atajacaminos tijera",
      "scientific": "Hydropsalis torquata furcifera",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/0/07/Hydropsalis_torquata_in_Uruguay.jpg",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Hydropsalis_torquata.jpg",
      "credit": "Wikimedia Commons · Hydropsalis torquata",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "calandria-grande",
      "name": "Calandria grande",
      "scientific": "Mimus saturninus",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mimus%20saturninus%20(AU)-face%2001.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Mimus_saturninus_(AU)-face_01.jpg",
      "credit": "Wikimedia Commons · Mimus saturninus",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "carpintero-real",
      "name": "Carpintero real",
      "scientific": "Colaptes melanochloros",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Colaptes%20melanochloros-Carpintero%20Real%2C%20otra%20imagen.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Colaptes_melanochloros-Carpintero_Real,_otra_imagen.jpg",
      "credit": "Wikimedia Commons · Colaptes melanochloros",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "golondrina-patagonica",
      "name": "Golondrina patagónica",
      "scientific": "Pygochelidon cyanoleuca",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Pygochelidon%20cyanoleuca%20176376357.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Pygochelidon_cyanoleuca_176376357.jpg",
      "credit": "Wikimedia Commons · Pygochelidon cyanoleuca",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "jarilla-crespa",
      "name": "Jarilla crespa",
      "scientific": "Larrea nitida",
      "group": "arbustos",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Larrea%20nitida.JPG&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Larrea_nitida.JPG",
      "credit": "Wikimedia Commons · Larrea nitida",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arbustos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "estepa",
        "matorral",
        "suelo árido y bordes rurales"
      ],
      "observe": "Comparar porte, ramas, hojas y flores desde el ambiente natural. No extraer ejemplares.",
      "experience": {
        "firstClue": "Porte y estructura de ramas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "manca-caballo",
      "name": "Manca caballo",
      "scientific": "Prosopidastrum angusticarpum",
      "group": "arbustos",
      "kind": "flora",
      "photo": "https://www.ecoregistros.org/site/images/dataimages/2021/12/19/475721/IMG_1745.JPG",
      "photoSource": "https://www.ecoregistros.org/site/imagen.php?id=475721",
      "credit": "EcoRegistros · Hernán Tolosa",
      "note": "Fotografía real de un ejemplar vivo en Parque Nacional Lihué Calel, La Pampa. Referencia regional.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arbustos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "estepa",
        "matorral",
        "suelo árido y bordes rurales"
      ],
      "observe": "Comparar porte, ramas, hojas y flores desde el ambiente natural. No extraer ejemplares.",
      "experience": {
        "firstClue": "Porte y estructura de ramas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "manzano-cultivado",
      "name": "Manzano",
      "scientific": "Malus domestica",
      "group": "arboles",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Malus_domestica.jpg&width=1200&v=20261005-3",
      "photoSource": "https://upload.wikimedia.org/wikipedia/commons/a/af/Malus_domestica.jpg?v=20261005",
      "credit": "Imagen de referencia · Wikimedia Commons",
      "note": "La investigación sobre Atajacaminos identifica un área de producción de manzana junto al Dique.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arboles",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "contexto local documentado",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "chacras",
        "bordes de agua",
        "ambientes urbanos y rurales"
      ],
      "observe": "Comparar corteza, hojas, porte y entorno. Observar sin arrancar hojas, flores ni frutos.",
      "experience": {
        "firstClue": "Porte, corteza y hojas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "pejerrey",
      "name": "Pejerrey",
      "scientific": "Odontesthes sp. · identificación específica pendiente",
      "group": "peces",
      "kind": "fauna",
      "photo": "https://www.pescaargentina.com.ar/imagenes/noticias_web/sgf_1561-998038.jpg",
      "photoSource": "https://www.pescaargentina.com.ar/noticia/una-senal-que-ilusiona-registran-un-pejerrey-en-mar-chiquita-1561",
      "credit": "Pesca Argentina · registro visual en Mar Chiquita",
      "note": "Fotografía real de un pejerrey vivo nadando libremente en el agua. Referencia regional; no implica presencia local.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "peces",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "género",
        "status": "identificación específica pendiente",
        "evidence": "la ficha conserva deliberadamente la incertidumbre específica"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "ambientes acuáticos",
        "costas y fondos de agua"
      ],
      "observe": "Observar el agua y el comportamiento sin capturar ni manipular. Registrar ambiente, profundidad aparente y movimiento.",
      "experience": {
        "firstClue": "Movimiento en el agua",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "peral-cultivado",
      "name": "Peral",
      "scientific": "Pyrus communis",
      "group": "arboles",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Pyrus_communis.jpg&width=1200&v=20261005-3",
      "photoSource": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Pyrus_communis.jpg?v=20261005",
      "credit": "Imagen de referencia · Wikimedia Commons",
      "note": "La investigación local trabajó con variedades de pera en chacras de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arboles",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "contexto local documentado",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "chacras",
        "bordes de agua",
        "ambientes urbanos y rurales"
      ],
      "observe": "Comparar corteza, hojas, porte y entorno. Observar sin arrancar hojas, flores ni frutos.",
      "experience": {
        "firstClue": "Porte, corteza y hojas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "perca",
      "name": "Perca",
      "scientific": "Percichthys sp. · identificación específica pendiente",
      "group": "peces",
      "kind": "fauna",
      "photo": "https://www.proyectoarrecife.com.ar/sites/default/files/2021-01/perca%20astutti%20recort.png",
      "photoSource": "https://www.proyectoarrecife.com.ar/es/pez/perca",
      "credit": "Proyecto Arrecife · Perca",
      "note": "Fotografía real de Percichthys trucha vivo y nadando en su ambiente acuático. Referencia regional; no implica presencia local.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "peces",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "género",
        "status": "identificación específica pendiente",
        "evidence": "la ficha conserva deliberadamente la incertidumbre específica"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "ambientes acuáticos",
        "costas y fondos de agua"
      ],
      "observe": "Observar el agua y el comportamiento sin capturar ni manipular. Registrar ambiente, profundidad aparente y movimiento.",
      "experience": {
        "firstClue": "Movimiento en el agua",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "tamarindo",
      "name": "Tamarindo",
      "scientific": "Tamarix ramosissima",
      "group": "arbustos",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Tamarix_ramosissima_by_Prahlad_balaji_2.jpg&width=1200&v=20261005-4",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Tamarix_ramosissima_by_Prahlad_balaji_2.jpg",
      "credit": "Wikimedia Commons · Tamarix ramosissima",
      "note": "Fotografía real de Tamarix ramosissima vivo; referencia botánica regional/internacional.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arbustos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "estepa",
        "matorral",
        "suelo árido y bordes rurales"
      ],
      "observe": "Comparar porte, ramas, hojas y flores desde el ambiente natural. No extraer ejemplares.",
      "experience": {
        "firstClue": "Porte y estructura de ramas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "alpataco",
      "name": "Alpataco",
      "scientific": "Neltuma alpataco",
      "group": "arbustos",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Prosopis%20alpataco%2001.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Prosopis_alpataco_01.jpg",
      "credit": "Wikimedia Commons · Prosopis alpataco",
      "note": "Imagen referencial de Patagonia argentina; no demuestra presencia local en Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arbustos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "estepa",
        "matorral",
        "suelo árido y bordes rurales"
      ],
      "observe": "Comparar porte, ramas, hojas y flores desde el ambiente natural. No extraer ejemplares.",
      "experience": {
        "firstClue": "Porte y estructura de ramas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "carancho",
      "name": "Carancho",
      "scientific": "Caracara plancus",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/CaracaraPlancus.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:CaracaraPlancus.jpg",
      "credit": "Wikimedia Commons · Caracara plancus",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "churrinche",
      "name": "Churrinche",
      "scientific": "Pyrocephalus rubinus",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Scarlet%20flycatcher%20(Pyrocephalus%20rubinus)%20immature%20male%20Vicente%20Lopez.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Pyrocephalus_rubinus.jpg",
      "credit": "Wikimedia Commons · Pyrocephalus rubinus",
      "note": "Imagen referencial; no constituye un registro fotográfico local.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "coiron",
      "name": "Coirón",
      "scientific": "Pappostipa speciosa",
      "group": "gramineas",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Stipa%20speciosa%20(34698876741).jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Pappostipa_speciosa.jpg",
      "credit": "Wikimedia Commons · Pappostipa speciosa",
      "note": "Imagen referencial; no constituye un registro fotográfico local.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "gramineas",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "estepa",
        "pastizal",
        "suelo abierto"
      ],
      "observe": "Observar forma de mata, hojas, espigas y relación con el suelo. No arrancar.",
      "experience": {
        "firstClue": "Forma de la mata y espigas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "garcita-blanca",
      "name": "Garcita blanca",
      "scientific": "Egretta thula",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Egretta%20thula.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Egretta_thula.jpg",
      "credit": "Wikimedia Commons · Egretta thula",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "hornero",
      "name": "Hornero",
      "scientific": "Furnarius rufus",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Furnarius%20rufus%20(6221851328).jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Furnarius_rufus_(6221851328).jpg",
      "credit": "Wikimedia Commons · Furnarius rufus",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "jarilla-hembra",
      "name": "Jarilla hembra",
      "scientific": "Larrea divaricata",
      "group": "arbustos",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Larrea%20divaricata.JPG&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Larrea_divaricata_o_jarilla_hembra.JPG",
      "credit": "SoleFabrizio · Wikimedia Commons · CC BY-SA 3.0",
      "note": "Imagen referencial, fotografiada en Neuquén; no constituye un registro de Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arbustos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "estepa",
        "matorral",
        "suelo árido y bordes rurales"
      ],
      "observe": "Comparar porte, ramas, hojas y flores desde el ambiente natural. No extraer ejemplares.",
      "experience": {
        "firstClue": "Porte y estructura de ramas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "jarilla-macho",
      "name": "Jarilla macho",
      "scientific": "Larrea cuneifolia",
      "group": "arbustos",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Larrea%20cuneifolia.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Larrea_cuneifolia.jpg",
      "credit": "Wikimedia Commons · Larrea cuneifolia",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arbustos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "estepa",
        "matorral",
        "suelo árido y bordes rurales"
      ],
      "observe": "Comparar porte, ramas, hojas y flores desde el ambiente natural. No extraer ejemplares.",
      "experience": {
        "firstClue": "Porte y estructura de ramas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "liebre-europea",
      "name": "Liebre europea",
      "scientific": "Lepus europaeus",
      "group": "mamiferos",
      "kind": "fauna",
      "photo": "https://www.ecoregistros.org/site/images/dataimages/2023/09/21/548777/ecorr-liebre.jpg",
      "photoSource": "https://www.ecoregistros.org/site/imagen.php?id=548777",
      "credit": "EcoRegistros · Javier Villamil",
      "note": "Fotografía real de una liebre viva en Junín, Buenos Aires, Argentina. Referencia nacional.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "mamiferos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "ambientes abiertos",
        "bordes de agua",
        "matorral y áreas rurales"
      ],
      "observe": "Observar a distancia; buscar huellas, movimiento, refugio y comportamiento natural. No perseguir ni alimentar.",
      "experience": {
        "firstClue": "Movimiento y relación con el ambiente",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "loica",
      "name": "Loica",
      "scientific": "Sturnella loyca",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Loica%20-%20Sturnella%20loyca.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Loica_-_Sturnella_loyca.jpg",
      "credit": "Wikimedia Commons · Loica",
      "note": "Imagen referencial; no constituye un registro fotográfico local.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "mixto",
      "name": "Mixto",
      "scientific": "Sicalis flaveola",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Doradito%20macho%201.png&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Sicalis_flaveola.jpg",
      "credit": "Wikimedia Commons · Sicalis flaveola",
      "note": "Imagen referencial; no constituye un registro fotográfico local.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "molle",
      "name": "Molle",
      "scientific": "Schinus johnstonii",
      "group": "arbustos",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Schinus%20johnstonii%20(8685027624).jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Schinus_johnstonii_(8685027624).jpg",
      "credit": "Dick Culbert · Wikimedia Commons · CC BY 2.0",
      "note": "Imagen referencial; no constituye un registro fotográfico local.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arbustos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "estepa",
        "matorral",
        "suelo árido y bordes rurales"
      ],
      "observe": "Comparar porte, ramas, hojas y flores desde el ambiente natural. No extraer ejemplares.",
      "experience": {
        "firstClue": "Porte y estructura de ramas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "paloma-picazuró",
      "name": "Paloma picazuró",
      "scientific": "Patagioenas picazuro",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Patagioenas%20picazuro.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Patagioenas_picazuro.jpg",
      "credit": "Wikimedia Commons · Patagioenas picazuro",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "pato-barcino",
      "name": "Pato barcino",
      "scientific": "Anas flavirostris",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Anas%20flavirostris%20-%20Pineyro,%20Buenos%20Aires,%20Argentina-8.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Anas_flavirostris.jpg",
      "credit": "Wikimedia Commons · Anas flavirostris",
      "note": "Imagen referencial; no constituye un registro fotográfico local.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "pato-maicero",
      "name": "Pato maicero",
      "scientific": "Anas georgica",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Pato%20maicero%20Anas%20georgica.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Anas_georgica.jpg",
      "credit": "Wikimedia Commons · Anas georgica",
      "note": "Imagen referencial; no constituye un registro fotográfico local.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "solupe",
      "name": "Solupe",
      "scientific": "Ephedra ochreata",
      "group": "arbustos",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Solupe%20(Ephedra%20ochreata).jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Solupe_(Ephedra_ochreata).jpg",
      "credit": "Wikimedia Commons · Ephedra ochreata",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arbustos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "estepa",
        "matorral",
        "suelo árido y bordes rurales"
      ],
      "observe": "Comparar porte, ramas, hojas y flores desde el ambiente natural. No extraer ejemplares.",
      "experience": {
        "firstClue": "Porte y estructura de ramas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "tero",
      "name": "Tero",
      "scientific": "Vanellus chilensis",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Vanellus-chilensis-1.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Vanellus-chilensis-1.jpg",
      "credit": "Wikimedia Commons · Vanellus chilensis",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "tomillo",
      "name": "Tomillo",
      "scientific": "Acantholippia seriphioides",
      "group": "arbustos",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Acantholippia%20seriphioides.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Acantholippia_seriphioides.jpg",
      "credit": "Wikimedia Commons · Acantholippia seriphioides",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arbustos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "estepa",
        "matorral",
        "suelo árido y bordes rurales"
      ],
      "observe": "Comparar porte, ramas, hojas y flores desde el ambiente natural. No extraer ejemplares.",
      "experience": {
        "firstClue": "Porte y estructura de ramas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "zampa",
      "name": "Zampa",
      "scientific": "Atriplex lampa",
      "group": "arbustos",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Atriplex%20lampa%20(8670678624).jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Atriplex_lampa_(8670678624).jpg",
      "credit": "Wikimedia Commons · Atriplex lampa",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arbustos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "estepa",
        "matorral",
        "suelo árido y bordes rurales"
      ],
      "observe": "Comparar porte, ramas, hojas y flores desde el ambiente natural. No extraer ejemplares.",
      "experience": {
        "firstClue": "Porte y estructura de ramas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "zorro-colorado",
      "name": "Zorro colorado",
      "scientific": "Lycalopex culpaeus",
      "group": "mamiferos",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Lycalopex%20culpaeus%20(8393345426).jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Lycalopex_culpaeus_(8393345426).jpg",
      "credit": "Wikimedia Commons · Lycalopex culpaeus",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "mamiferos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "ambientes abiertos",
        "bordes de agua",
        "matorral y áreas rurales"
      ],
      "observe": "Observar a distancia; buscar huellas, movimiento, refugio y comportamiento natural. No perseguir ni alimentar.",
      "experience": {
        "firstClue": "Movimiento y relación con el ambiente",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "zorzal-patagonico",
      "name": "Zorzal patagónico",
      "scientific": "Turdus falcklandii",
      "group": "aves",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Austral%20Thrush%20(Turdus%20falcklandii)%20(5536622502).jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Austral_Thrush_(Turdus_falcklandii)_(5536622502).jpg",
      "credit": "Wikimedia Commons · Turdus falcklandii",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "aves",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "bordes de agua",
        "chacras y arboledas",
        "matorral y ambientes abiertos"
      ],
      "observe": "Observar a distancia; mirar silueta, pico, postura, vuelo y relación con el ambiente. No perseguir ni atraer.",
      "experience": {
        "firstClue": "Silueta y comportamiento",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "coipo",
      "name": "Coipo",
      "scientific": "Myocastor coypus",
      "group": "mamiferos",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Myocastor%20coypus%20(41945394962).jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Myocastor_coypus_(41945394962).jpg",
      "credit": "Wikimedia Commons · Myocastor coypus",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "mamiferos",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "ambientes abiertos",
        "bordes de agua",
        "matorral y áreas rurales"
      ],
      "observe": "Observar a distancia; buscar huellas, movimiento, refugio y comportamiento natural. No perseguir ni alimentar.",
      "experience": {
        "firstClue": "Movimiento y relación con el ambiente",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "chañar",
      "name": "Chañar",
      "scientific": "Geoffroea decorticans",
      "group": "arboles",
      "kind": "flora",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Geoffroea%20decorticans%201a.jpg&width=1200",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Geoffroea_decorticans_1a.jpg",
      "credit": "Wikimedia Commons · Geoffroea decorticans",
      "note": "Fotografía referencial de la especie; no constituye un registro fotográfico local de San Patricio del Chañar.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "arboles",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "chacras",
        "bordes de agua",
        "ambientes urbanos y rurales"
      ],
      "observe": "Comparar corteza, hojas, porte y entorno. Observar sin arrancar hojas, flores ni frutos.",
      "experience": {
        "firstClue": "Porte, corteza y hojas",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    },
    {
      "id": "trucha-arcoiris",
      "name": "Trucha arcoíris",
      "scientific": "Oncorhynchus mykiss",
      "group": "peces",
      "kind": "fauna",
      "photo": "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Oncorhynchus_mykiss.jpg&width=1200&v=20261005-3",
      "photoSource": "https://commons.wikimedia.org/wiki/File:Oncorhynchus_mykiss.jpg",
      "credit": "Wikimedia Commons · Oncorhynchus mykiss",
      "note": "Imagen referencial; no constituye un registro fotográfico local.",
      "audit": "verified-live",
      "auditDate": "2026-10-05",
      "category": "peces",
      "photoRule": "required-real-live",
      "identification": {
        "rank": "especie",
        "status": "nombre científico consignado",
        "evidence": "nombre científico explícito en la ficha"
      },
      "territory": {
        "photoStatus": "referencia visual regional",
        "localContext": "sin registro local en esta fotografía",
        "localPhoto": false
      },
      "evidence": {
        "photo": true,
        "lifeVisible": true,
        "source": true,
        "visualAudit": true,
        "licenseStatus": "verificación pendiente"
      },
      "habitat": [
        "ambientes acuáticos",
        "costas y fondos de agua"
      ],
      "observe": "Observar el agua y el comportamiento sin capturar ni manipular. Registrar ambiente, profundidad aparente y movimiento.",
      "experience": {
        "firstClue": "Movimiento en el agua",
        "learningGoal": "Reconocer antes de interpretar: mirar, comparar y registrar."
      }
    }
  ]
};
