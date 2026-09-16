const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('mainNav');
const dropdowns = [...document.querySelectorAll('.nav-dropdown')];

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
      dropdowns.forEach((item) => item.removeAttribute('open'));
    });
  });
}

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('toggle', () => {
    if (!dropdown.open) return;
    dropdowns.forEach((item) => {
      if (item !== dropdown) item.removeAttribute('open');
    });
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-dropdown')) {
    dropdowns.forEach((item) => item.removeAttribute('open'));
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    dropdowns.forEach((item) => item.removeAttribute('open'));
    if (nav && toggle) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    }
  }
});

const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.main-nav a[href^="/"], .site-footer a[href^="/"]').forEach((link) => {
  const url = new URL(link.href, window.location.origin);
  const linkPath = url.pathname.replace(/\/$/, '') || '/';
  if (!url.hash && linkPath === currentPath) {
    link.setAttribute('aria-current', 'page');
  }
});
