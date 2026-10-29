// Tracking global do Valeu.
// REGRA: toda página do site deve carregar este arquivo para garantir GA4 e click_playstore.
(function initValeuAnalytics() {
  const GA_ID = 'G-WFS6CHS0P5';

  function ensureGtag() {
    window.dataLayer = window.dataLayer || [];

    if (typeof window.gtag !== 'function') {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    }

    const selector = 'script[src*="googletagmanager.com/gtag/js?id=' + GA_ID + '"]';
    const hasGtagScript = Boolean(document.querySelector(selector));

    if (!hasGtagScript) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
      document.head.appendChild(script);

      window.gtag('js', new Date());
      window.gtag('config', GA_ID);
    }
  }

  function getCtaLocation(link) {
    if (link.dataset.gaLocation) return link.dataset.gaLocation;

    const section = link.closest('section');
    if (section && section.id) return section.id;

    if (link.closest('.site-header')) return 'header';
    if (link.closest('.site-footer')) return 'footer';
    if (section) return section.className || 'section';

    return 'unknown';
  }

  ensureGtag();

  // Captura antes dos handlers antigos de algumas páginas para evitar evento duplicado.
  document.addEventListener('click', function (event) {
    const target = event.target instanceof Element ? event.target : null;
    const link = target ? target.closest('a[href*="play.google.com"]') : null;
    if (!link) return;

    event.stopPropagation();
    ensureGtag();

    window.gtag('event', 'click_playstore', {
      link_url: link.href,
      cta_location: getCtaLocation(link),
      page_path: window.location.pathname,
      page_title: document.title
    });
  }, true);
})();

const standardStyles = document.createElement('link');
standardStyles.rel = 'stylesheet';
standardStyles.href = '/assets/lp-standard.css';
document.head.appendChild(standardStyles);

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

const featureRoutes = {
  '/#orcamentos': '/orcamentos/',
  '/#agenda': '/agenda/',
  '/#vendas': '/vendas/',
  '/#estoque': '/estoque/'
};

document.querySelectorAll('.main-nav a, .site-footer a').forEach((link) => {
  const href = link.getAttribute('href');
  if (featureRoutes[href]) link.setAttribute('href', featureRoutes[href]);
});

const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.main-nav a[href^="/"], .site-footer a[href^="/"]').forEach((link) => {
  const url = new URL(link.href, window.location.origin);
  const linkPath = url.pathname.replace(/\/$/, '') || '/';
  if (!url.hash && linkPath === currentPath) {
    link.setAttribute('aria-current', 'page');
  }
});
