// Ventana "Detalles" de cada proyecto.
// Lee los datos de PROYECTOS (js/datos.js) y arma el contenido de la ventana.

const NOTA_JAVA =
  '⚙ Aplicación de escritorio Java. Para ejecutarla necesitás clonar el repo y tener Java instalado. ' +
  'No corre en el navegador — pero podés ver todo el código fuente en GitHub.';

function etiquetas(p) {
  let html = '<div class="modal-tech">';
  html += p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('');
  if (p.java) html += '<span class="java-badge" style="margin-left:2px">⚙ Desktop App</span>';
  if (p.collab) html += `<span class="collab-badge" style="margin-left:2px">★ Collab con ${p.collabWith}</span>`;
  return html + '</div>';
}

function personajes(p) {
  if (!p.chars) return '';
  const items = p.chars.map((c) => `<div class="modal-char">${c}</div>`).join('');
  return `<div class="modal-sect">Personajes jugables</div><div class="modal-chars">${items}</div>`;
}

function funcionalidades(p) {
  const items = p.features
    .map((f) => `<div class="modal-feat"><div class="modal-fdot"></div><span>${f}</span></div>`)
    .join('');
  return `<div class="modal-sect">Funcionalidades destacadas</div><div>${items}</div>`;
}

function botones(p) {
  const app = p.live
    ? `<a class="proj-btn primary" href="${p.live}" target="_blank" rel="noopener noreferrer">Ver app ↗</a> `
    : '';
  const repo = `<a class="proj-btn${p.live ? '' : ' primary'}" href="${p.repo}" target="_blank" rel="noopener noreferrer">Ver en GitHub ↗</a>`;
  return `<div class="modal-actions">${app}${repo}</div>`;
}

function openModal(id) {
  const p = PROYECTOS[id];
  if (!p) return;

  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-body').innerHTML =
    etiquetas(p) +
    (p.java ? `<div class="modal-java-note">${NOTA_JAVA}</div>` : '') +
    `<p class="modal-desc">${p.desc}</p>` +
    personajes(p) +
    funcionalidades(p) +
    botones(p);
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

// Un solo listener para todos los clicks de la página
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-accion="imprimir"]')) return window.print();
  if (e.target.closest('[data-accion="cerrar"]') || e.target.id === 'modal') return closeModal();
  if (e.target.closest('a')) return; // los links abren su página sin abrir la ventana

  const tarjeta = e.target.closest('[data-proyecto]');
  if (tarjeta) openModal(tarjeta.dataset.proyecto);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
