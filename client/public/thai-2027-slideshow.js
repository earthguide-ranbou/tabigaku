// Keep the original photograph as a no-JavaScript / slow-connection fallback.
(() => {
  const hero = document.querySelector('.hero');
  const scenes = [...document.querySelectorAll('#hero-scenes .hero-scene')];
  if (!hero || scenes.length < 2) return;

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const loaded = new Map();
  const INTERVAL = 6000;
  let current = 0, timer, fading, busy = false, visible = true;
  let pageActive = true;
  const canPlay = () => !motion.matches && !document.hidden && visible && pageActive;

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
    if (canPlay() && !busy) timer = setTimeout(advance, INTERVAL);
  }

  async function advance() {
    if (busy) return;
    clearTimeout(timer);
    busy = true;
    // A missing photograph must never replace the currently visible one.
    for (let offset = 1; offset < scenes.length; offset++) {
      const next = (current + offset) % scenes.length;
      if (!await loadScene(next)) continue;
      if (!canPlay()) break;
      clearTimeout(fading);
      scenes.forEach(scene => scene.classList.remove('is-leaving'));
      const previous = scenes[current];
      previous.classList.add('is-leaving');
      previous.classList.remove('is-current');
      previous.setAttribute('aria-hidden', 'true');
      scenes[next].classList.add('is-current');
      scenes[next].setAttribute('aria-hidden', 'false');
      current = next;
      fading = setTimeout(() => previous.classList.remove('is-leaving'), motion.matches ? 0 : 2500);
      if (!motion.matches) loadScene((current + 1) % scenes.length);
      break;
    }
    busy = false;
    schedule();
  }

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
  if (!motion.matches) loadScene(1);
  schedule();
})();
