// Select all the inner wrappers
const contents = document.querySelectorAll('.page-content');
let ticking = false;

// Listen for scroll events
window.addEventListener('scroll', onScroll);

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(updateEffects);
    ticking = true;
  }
}

function updateEffects() {
  ticking = false;
  const vh = window.innerHeight;

  contents.forEach(content => {
    const rect = content.parentElement.getBoundingClientRect();

    // 1) Compute how far the section has scrolled off the top (0→1)
    let exitProgress = (-rect.top) / rect.height;
    exitProgress = Math.min(Math.max(exitProgress, 0), 1);

    // 2) Depth & scale (applied over the full scroll-off)
    const z = -300 * exitProgress;         // pushes back up to -300px
    const s = 1 - 0.25 * exitProgress;     // scales down to 0.75

    // 3) Opacity: only starts fading once >70% scrolled off
    let o = 1;
    if (exitProgress > 0.7) {
      o = 1 - (exitProgress - 0.7) / 0.3;   // maps 0.7→1 to 1→0
      o = Math.min(Math.max(o, 0), 1);
    }

    // 4) Apply transforms and opacity
    content.style.transform = `translateZ(${z}px) scale(${s})`;
    content.style.opacity   = o;
  });
}

// MENU OVERLAY TOGGLE
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose   = document.getElementById('menuClose');

menuToggle.addEventListener('click', () => {
  menuOverlay.classList.add('open');
});
menuClose.addEventListener('click', () => {
  menuOverlay.classList.remove('open');
});