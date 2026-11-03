// Animaciones de las vistas previas que necesitan JavaScript.
// El resto de las animaciones son CSS puro (css/previews.css).

// Multiverse Dominion: las barras de vida cambian cada 1.8 s
function animarBarrasDeVida() {
  const p1 = document.getElementById('hp1');
  const p2 = document.getElementById('hp2');
  if (!p1 || !p2) return;

  const vidaAlAzar = () => 40 + Math.floor(Math.random() * 50) + '%';
  setInterval(() => {
    p1.style.width = vidaAlAzar();
    p2.style.width = vidaAlAzar();
  }, 1800);
}

// Arkanoid: arma 3 filas de 7 ladrillos y los va rompiendo de a uno
function animarArkanoid() {
  const contenedor = document.getElementById('arkBricks');
  if (!contenedor) return;

  const colores = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7'];
  for (let i = 0; i < 21; i++) {
    const ladrillo = document.createElement('div');
    ladrillo.className = 'ark-brick';
    ladrillo.style.background = colores[Math.floor(i / 7) % colores.length];
    ladrillo.style.opacity = Math.random() > 0.15 ? '0.85' : '0';
    contenedor.appendChild(ladrillo);
  }

  setInterval(() => {
    const ladrillos = contenedor.children;
    const elegido = ladrillos[Math.floor(Math.random() * ladrillos.length)];
    if (parseFloat(elegido.style.opacity) > 0) elegido.style.opacity = '0';
  }, 900);
}

animarBarrasDeVida();
animarArkanoid();
