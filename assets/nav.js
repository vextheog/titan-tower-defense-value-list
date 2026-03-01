(async function () {
  const host = document.getElementById('site-nav');
  if (!host) return;

  // подгружаем HTML навигации
  const res = await fetch('./assets/nav.html', { cache: 'no-cache' });
  host.innerHTML = await res.text();

  // подсветка активной страницы
  const path = (location.pathname || '').toLowerCase();
  let current = 'index';
  if (path.endsWith('/value-list.html')) current = 'value';
  else if (path.endsWith('/feedback.html')) current = 'feedback';

  host.querySelectorAll('.site-switch-btn').forEach(a => {
    const isActive = a.dataset.page === current;
    a.classList.toggle('active', isActive);
    a.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
})();
