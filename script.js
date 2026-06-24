/* Film perforations */
['fTop','fBot'].forEach(id => {
  const el = document.getElementById(id);
  for (let i = 0; i < 70; i++) {
    const d = document.createElement('div');
    d.className = 'perf';
    el.appendChild(d);
  }
});

/* Dark / Light toggle */
let dark = false;
function toggleTheme() {
  dark = !dark;
  document.body.setAttribute('data-theme', dark ? 'dark' : '');
  document.getElementById('themeBtn').textContent = dark ? '☀️ โหมดสว่าง' : '🌙 โหมดมืด';
}

/* Scroll-reveal */
const cards = document.querySelectorAll('.card');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const siblings = [...e.target.parentElement.querySelectorAll('.card:not(.visible)')];
      siblings.forEach((s, j) => setTimeout(() => s.classList.add('visible'), j * 100));
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin:'0px 0px -40px 0px' });
cards.forEach(c => io.observe(c));
