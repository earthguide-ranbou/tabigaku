// Keep the original photograph as a no-JavaScript / slow-connection fallback.
(() => {
  const hero = document.querySelector('.hero');
  const scenes = [...document.querySelectorAll('#hero-scenes .hero-scene')];
  const controls = document.querySelector('.hero-controls');
  if (!hero || !controls || scenes.length < 2) return;

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const toggle = controls.querySelector('[data-hero-motion]');
  const count = controls.querySelector('[data-hero-count]');
  const loaded = new Map();
  const INTERVAL = 8000;
  let current = 0, timer, fading, busy = false, paused = false, visible = true;
  let pageActive = true;
  const canPlay = () => !paused && !motion.matches && !document.hidden && visible && pageActive;

  function loadScene(index) {
    if (!loaded.has(index)) {
      const images = [...scenes[index].querySelectorAll('img')];
      const ready = images.map(img => new Promise(resolve => {
        let settled = false;
        const timeout = setTimeout(() => finish(false), 15000);
        const finish = ok => {
          if (settled) return;
          settled = true;
          clearTimeout(timeout);
          resolve(ok);
        };
        img.addEventListener('load', () => finish(img.naturalWidth > 0), { once: true });
        img.addEventListener('error', () => finish(false), { once: true });
        if (img.dataset.src) {
          img.src = img.dataset.src;
          delete img.dataset.src;
        }
        if (img.complete) finish(img.naturalWidth > 0);
      }));
      loaded.set(index, Promise.all(ready).then(results => results.every(Boolean)));
    }
    return loaded.get(index);
  }

  function schedule() {
    clearTimeout(timer);
    hero.classList.toggle('is-paused', !canPlay());
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.setAttribute('aria-label', paused ? '写真の自動切り替えを再生' : '写真の自動切り替えを一時停止');
    if (canPlay() && !busy) timer = setTimeout(() => advance(1, true), INTERVAL);
  }

  async function advance(direction, automatic = false) {
    if (busy) return;
    clearTimeout(timer);
    busy = true;
    // A missing photograph must never replace the currently visible one.
    for (let offset = 1; offset < scenes.length; offset++) {
      const next = (current + direction * offset + scenes.length) % scenes.length;
      if (!await loadScene(next)) continue;
      if (automatic && !canPlay()) break;
      clearTimeout(fading);
      scenes.forEach(scene => scene.classList.remove('is-leaving'));
      const previous = scenes[current];
      previous.classList.add('is-leaving');
      previous.classList.remove('is-current');
      previous.setAttribute('aria-hidden', 'true');
      scenes[next].classList.add('is-current');
      scenes[next].setAttribute('aria-hidden', 'false');
      current = next;
      count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(scenes.length).padStart(2, '0')}`;
      fading = setTimeout(() => previous.classList.remove('is-leaving'), motion.matches ? 0 : 2500);
      if (!motion.matches) loadScene((current + 1) % scenes.length);
      break;
    }
    busy = false;
    schedule();
  }

  controls.querySelector('[data-hero-prev]').addEventListener('click', () => advance(-1));
  controls.querySelector('[data-hero-next]').addEventListener('click', () => advance(1));
  toggle.addEventListener('click', () => { paused = !paused; schedule(); });
  motion.addEventListener('change', schedule);
  document.addEventListener('visibilitychange', schedule);
  window.addEventListener('pagehide', () => { pageActive = false; schedule(); });
  window.addEventListener('pageshow', () => { pageActive = true; schedule(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      schedule();
    }, { threshold: 0 }).observe(hero);
  }
  controls.hidden = false;
  if (!motion.matches) loadScene(1);
  schedule();
})();
