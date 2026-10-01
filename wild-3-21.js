import { records } from "./data/catalog.js";
import { inventoryRecords, regionalReferencePool } from "./data/inventory-3-17.js";
import { wild321Matrix, wild321Territories, wild321Evidence, wild321Sources, wild321Rules, WILD_321_VERSION, WILD_321_LAW } from "./data/wild-3-21.js";

const esc = v => String(v ?? "").replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));
const norm = v => String(v ?? "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const nameOf = r => r.vernacularName || r.commonName || r.name || r.scientificName || "Registro";
const sciOf = r => r.scientificName || r.scientific || "Identificación pendiente";
const statusOf = r => String(r.evidenceLevel || r.status || r.reviewStatus || "PENDIENTE").toUpperCase();

function init(){
  if(document.querySelector("#wild321")) return;

  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "./wild-3-21.css";
  document.head.append(css);

  const root = document.createElement("section");
  root.id = "wild321";
  root.className = "wild321";

  root.innerHTML = `
    <header class="w321-top">
      <a class="w321-brand" href="#wild321"><strong>OW</strong><span>OCARINA WILD</span></a>
      <span class="w321-version">${WILD_321_VERSION}</span>
      <button class="w321-top-action" type="button" data-open="matrix">MATRIZ ↗</button>
    </header>

    <div class="w321-hero">
      <div class="w321-copy">
        <span class="w321-kicker">SAN PATRICIO DEL CHAÑAR · CHAÑAR VIVO</span>
        <h2>Un mundo vivo.<br><i>Una página.</i></h2>
        <p>Encontrá algo concreto en segundos o quedate a investigar. La profundidad aparece cuando la pedís.</p>
        <div class="w321-law">
          <b>60%<small>INFORMACIÓN</small></b>
          <b>40%<small>VISUAL</small></b>
          <b>100%<small>INTERACCIÓN</small></b>
        </div>
      </div>
      <div class="w321-visual" role="img" aria-label="Escena visual del territorio">
        <div class="w321-sun"></div><div class="w321-ridge"></div><div class="w321-water"></div>
        <span>RÍO · CHACRAS · DIQUE · MONTE</span>
      </div>
    </div>

    <section class="w321-gallery" id="galeria">
      <div class="w321-gallery-intro">
        <span>OCARINA WILD · GALERÍA DE FAUNA</span>
        <h3>Mirar primero.<br><i>Entender después.</i></h3>
        <p>Retratos y escenas de fauna para entrar al archivo por los ojos. Las imágenes de referencia están identificadas: no se presentan como fotografías tomadas en Chañar.</p>
      </div>
      <div class="w321-photo-wall">
        ${records.filter(r=>r.type==="fauna" && r.image).slice(0,8).map((r,i)=>`
          <button class="w321-animal-photo photo-${i+1}" type="button" data-record-index="${records.indexOf(r)}">
            <img src="${r.image}" alt="${esc(r.name)}" loading="${i<3?"eager":"lazy"}">
            <span class="w321-photo-shade"></span>
            <div class="w321-photo-caption"><small>FOTO DE REFERENCIA · WIKIMEDIA COMMONS</small><b>${esc(r.name)}</b><em>${esc(r.latin)}</em></div>
          </button>`).join("")}
      </div>
      <div class="w321-gallery-note">
        <b>UNA REGLA VISUAL</b>
        <span>La fotografía atrae. El pie de foto contextualiza. La evidencia decide.</span>
        <button type="button" data-open="sources">VER CRÉDITOS Y FUENTES ↗</button>
      </div>
    </section>

    <div class="w321-find" id="descubrir">
      <label>
        <span>¿QUÉ QUERÉS ENCONTRAR?</span>
        <input id="w321-search" type="search" placeholder="animal, planta, río, dique, registro..." autocomplete="off">
      </label>
      <div class="w321-search-meta">
        <span id="w321-search-count">Explorá por nombre, ambiente o tema.</span>
        <button type="button" data-open="help">NO SÉ QUÉ ES</button>
      </div>
      <div id="w321-results" class="w321-results" aria-live="polite"></div>
    </div>

    <nav class="w321-matrix" aria-label="Puertas principales">
      ${wild321Matrix.map((m,i) => `
        <button class="w321-door door-${i+1}" type="button" data-door="${m.id}">
          <span>0${i+1}</span><b>${esc(m.label)}</b><small>${esc(m.purpose)}</small><i>${esc(m.action)} ↗</i>
        </button>`).join("")}
    </nav>

    <div class="w321-quick">
      <div><span>CATÁLOGO</span><strong>${records.length}</strong><small>fichas base</small></div>
      <div><span>INVESTIGACIÓN</span><strong>${inventoryRecords.length}</strong><small>registros</small></div>
      <div><span>REFERENCIAS</span><strong>${regionalReferencePool.length}</strong><small>regionales</small></div>
      <div><span>FUENTES</span><strong>${wild321Sources.length}</strong><small>integradas</small></div>
    </div>

    <section class="w321-strip">
      <div class="w321-strip-head">
        <span>TERRITORIO</span><button type="button" data-open="territory">VER LOS 4 AMBIENTES ↗</button>
      </div>
      <div class="w321-territories">
        ${wild321Territories.map(t => `
          <button type="button" data-territory="${t.id}">
            <img src="${t.asset}" alt="" loading="lazy"><span>${esc(t.name)}</span><small>${esc(t.subtitle)}</small>
          </button>`).join("")}
      </div>
    </section>

    <section class="w321-strip w321-evidence-strip">
      <div class="w321-strip-head">
        <span>EVIDENCIA</span><button type="button" data-open="evidence">ENTENDER LA DIFERENCIA ↗</button>
      </div>
      <div class="w321-evidence-line">
        ${wild321Evidence.map(e => `
          <button type="button" data-evidence="${e.id}">
            <b>${esc(e.label)}</b><span>${esc(e.text)}</span>
          </button>`).join("")}
      </div>
    </section>

    <footer class="w321-footer">
      <span>OCARINA WILD · SAN PATRICIO DEL CHAÑAR</span>
      <b>Mucho sistema.<br><i>Pocas cosas que hacer.</i></b>
      <small>La información se abre por capas. La página no necesita crecer para que el conocimiento crezca.</small>
    </footer>
  `;

  document.querySelector("footer")?.before(root) || document.body.append(root);

  const dialog = document.createElement("dialog");
  dialog.className = "w321-dialog";
  dialog.innerHTML = `<button class="w321-close" type="button" aria-label="Cerrar">×</button><div class="w321-dialog-content"></div>`;
  root.append(dialog);
  const body = dialog.querySelector(".w321-dialog-content");
  dialog.querySelector(".w321-close").addEventListener("click", () => dialog.close());

  const open = (title, kicker, html) => {
    body.innerHTML = `<span class="w321-dialog-kicker">${esc(kicker)}</span><h3>${esc(title)}</h3>${html}`;
    dialog.showModal();
  };

  const openMatrix = () => open("La matriz que evita la superposición","ARQUITECTURA 3.21",`
    <p>${esc(WILD_321_LAW.statement)}</p>
    <div class="w321-law-stack">${wild321Matrix.map(m => `
      <article><b>${esc(m.label)}</b><span>${esc(m.purpose)}</span><small>${esc(m.action)}</small></article>`).join("")}</div>
    <h4>REGLAS DE REPARACIÓN</h4>
    <div class="w321-rule-list">${wild321Rules.map(r => `
      <article><b>${r[0]}</b><div><strong>${esc(r[1])}</strong><span>${esc(r[2])}</span></div></article>`).join("")}</div>
  `);

  const openTerritory = () => open("Territorio","4 AMBIENTES · UNA SOLA MATRIZ",`
    <div class="w321-deep-territory">${wild321Territories.map(t => `
      <button type="button" data-deep-territory="${t.id}">
        <img src="${t.asset}" alt=""><div><b>${esc(t.name)}</b><small>${esc(t.subtitle)}</small><span>${esc(t.text)}</span></div>
      </button>`).join("")}</div>
  `);

  const openEvidence = () => open("Cómo leer la evidencia","EVIDENCIA · REGLA CENTRAL",`
    <div class="w321-evidence-deep">${wild321Evidence.map(e => `
      <article><b>${esc(e.label)}</b><p>${esc(e.text)}</p></article>`).join("")}</div>
    <p class="w321-warning"><b>No confundir:</b> evento ≠ población · referencia ≠ presencia · foto ≠ evidencia · distribución ≠ registro local.</p>
  `);

  const openSources = () => open("Fuentes dentro de OCARINA WILD","FUENTES · CONTEXTO",`
    <p>Las fuentes no funcionan como una webgrafía decorativa. Su función, escala y aporte se explican dentro del proyecto.</p>
    <div class="w321-source-list">${wild321Sources.map(s => `
      <article><span>${esc(s.kind)} · ${esc(s.scale)}</span><b>${esc(s.title)}</b><p>${esc(s.summary)}</p><small>${esc(s.credit)} · ${esc(s.date)}</small></article>`).join("")}</div>
  `);

  const openHelp = () => {
    open("No sé qué es","ENTRADA SIMPLE",`
      <p>No necesitás conocer el nombre. Empezá por lo que recordás.</p>
      <div class="w321-help-grid">${["AVE","PLANTA","MAMÍFERO","INSECTO","HUELLA","HOJA / FLOR","SONIDO","NO SÉ"].map(x => `
        <button type="button" data-help-choice="${x}">${x} ↗</button>`).join("")}</div>
      <p class="w321-dialog-note">Esta puerta orienta la exploración. No convierte una descripción incompleta en una identificación científica confirmada.</p>
    `);
    body.querySelectorAll("[data-help-choice]").forEach(b => b.addEventListener("click", () => {
      const q = b.dataset.helpChoice;
      dialog.close();
      root.querySelector("#w321-search").value = q;
      showResults(q);
      root.querySelector("#descubrir").scrollIntoView({behavior:"smooth",block:"start"});
    }));
  };

  const openImmersion = () => {
    open("Sala de inmersión","PROFUNDIZAR SIN CAMBIAR DE SITIO",`
    <p>Acá empieza la lectura larga. Desde una ficha se puede seguir hacia territorio, evidencia, fuentes y metodología sin abandonar la experiencia.</p>
    <div class="w321-immersion-grid">
      <button type="button" data-open="sources">FUENTES</button>
      <button type="button" data-open="evidence">EVIDENCIA</button>
      <button type="button" data-open="matrix">METODOLOGÍA</button>
      <button type="button" data-open="territory">TERRITORIO</button>
    </div>
    <div class="w321-reading"><b>LEY 3.21</b><span>${esc(WILD_321_LAW.statement)}</span><p>${WILD_321_LAW.rules.map(esc).join(" · ")}</p></div>
  `);
    body.querySelectorAll("[data-open]").forEach(b => b.addEventListener("click", () => route(b.dataset.open)));
  };

  const openRecord = r => open(nameOf(r), "FICHA · " + statusOf(r), `
    <div class="w321-record-lead"><strong>${esc(sciOf(r))}</strong><span>${esc(r.environment || r.habitat || "Territorio por precisar")}</span></div>
    <p>Esta ficha presenta únicamente lo que el registro permite sostener. La clasificación de evidencia no se eleva por apariencia, distribución o una imagen de referencia.</p>
    <div class="w321-detail-grid">
      <div><small>ESTADO</small><b>${esc(statusOf(r))}</b></div>
      <div><small>TIPO</small><b>${esc(r.kind || r.type || "registro")}</b></div>
      <div><small>AMBIENTE</small><b>${esc(r.environment || r.env || "No especificado")}</b></div>
      <div><small>FECHA</small><b>${esc(r.eventDate || r.date || "No especificada")}</b></div>
    </div>
    <div class="w321-deep-note"><b>PARA PROFUNDIZAR</b><span>La ficha puede crecer con fuente, media, taxonomía, ubicación segura, revisión y relaciones sin alterar la superficie principal.</span></div>
  `);

  const showResults = query => {
    const q = norm(query.trim());
    const box = root.querySelector("#w321-results");
    if(!q){
      box.innerHTML = "";
      root.querySelector("#w321-search-count").textContent = "Explorá por nombre, ambiente o tema.";
      return;
    }
    const hits = records.filter(r => norm([
      nameOf(r), sciOf(r), r.environment, r.env, r.habitat, r.description, r.text
    ].join(" ")).includes(q)).slice(0,8);

    root.querySelector("#w321-search-count").textContent = hits.length + " resultado" + (hits.length === 1 ? "" : "s");
    box.innerHTML = hits.length ? hits.map((r,i) => `
      <button class="w321-result" type="button" data-record-index="${records.indexOf(r)}">
        <span>0${i+1}</span><div><b>${esc(nameOf(r))}</b><small>${esc(sciOf(r))}</small></div><em>${esc(statusOf(r))} ↗</em>
      </button>`).join("") : `
      <div class="w321-empty"><b>No encontramos una coincidencia directa.</b><span>Probá con ambiente, nombre científico, tipo de vida o “No sé qué es”.</span></div>`;

    box.querySelectorAll("[data-record-index]").forEach(b => b.addEventListener("click", () => openRecord(records[Number(b.dataset.recordIndex)])));
  };

  const route = name => {
    if(name === "matrix") openMatrix();
    if(name === "territory") openTerritory();
    if(name === "evidence") openEvidence();
    if(name === "sources") openSources();
    if(name === "help") openHelp();
    if(name === "immersion") openImmersion();
  };

  root.querySelector("#w321-search").addEventListener("input", e => showResults(e.target.value));
  root.querySelectorAll("[data-open]").forEach(b => b.addEventListener("click", () => route(b.dataset.open)));

  root.querySelectorAll("[data-door]").forEach(b => b.addEventListener("click", () => {
    if(b.dataset.door === "descubrir"){
      root.querySelector("#w321-search").focus();
      root.querySelector("#descubrir").scrollIntoView({behavior:"smooth",block:"start"});
    } else if(b.dataset.door === "territorio") openTerritory();
    else if(b.dataset.door === "evidencia") openEvidence();
    else openImmersion();
  }));

  root.querySelectorAll("[data-territory]").forEach(b => b.addEventListener("click", () => {
    const t = wild321Territories.find(x => x.id === b.dataset.territory);
    open(t.name,"TERRITORIO · FICHA",`
      <img class="w321-dialog-image" src="${t.asset}" alt="">
      <p>${esc(t.text)}</p>
      <div class="w321-deep-note"><b>${esc(t.subtitle)}</b><span>Este ambiente es una puerta de relación. Las especies y fuentes aparecen cuando existen registros conectados.</span></div>
    `);
  }));

  root.querySelectorAll("[data-record-index]").forEach(b => b.addEventListener("click", () => {
    const index = Number(b.dataset.recordIndex);
    const r = records[index];
    if(r) openRecord(r);
  }));

  root.querySelectorAll("[data-evidence]").forEach(b => b.addEventListener("click", () => {
    open(b.querySelector("b").textContent,"EVIDENCIA · CAPA",`
      <p>${esc(b.querySelector("span").textContent)}</p>
      <p class="w321-warning">La clasificación se mantiene acotada a la evidencia disponible.</p>
    `);
  }));

  dialog.addEventListener("click", e => {
    const b = e.target.closest("[data-deep-territory]");
    if(!b) return;
    const t = wild321Territories.find(x => x.id === b.dataset.deepTerritory);
    open(t.name,"TERRITORIO · FICHA PROFUNDA",`
      <img class="w321-dialog-image" src="${t.asset}" alt="">
      <p>${esc(t.text)}</p>
      <div class="w321-deep-note"><b>RELACIONES</b><span>Ambiente → registros → evidencia → fuentes. Las relaciones se abren cuando existen; no se inventan para completar una tarjeta.</span></div>
    `);
  });
}

if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();