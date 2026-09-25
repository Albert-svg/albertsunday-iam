// Flip cards
document.querySelectorAll('.card').forEach((card) => {
  const front = card.querySelector('.card-front');
  const back = card.querySelector('.card-back');
  const ret = card.querySelector('.card-return');
  if (!front || !back) return;

  const setFlipped = (flipped) => {
    card.classList.toggle('is-flipped', flipped);
    front.setAttribute('aria-expanded', String(flipped));
    back.setAttribute('aria-hidden', String(!flipped));
    back.inert = !flipped;
    front.inert = flipped;
    // Move focus only if the visitor is navigating inside the card (keyboard)
    if (card.contains(document.activeElement)) {
      (flipped ? ret : front).focus({ preventScroll: true });
    }
  };

  front.addEventListener('click', () => {
    setFlipped(true);
    ret.focus({ preventScroll: true });
  });
  // Flip back when the mouse moves away (touch devices use the Flip back button)
  card.addEventListener('mouseleave', () => {
    if (card.classList.contains('is-flipped')) setFlipped(false);
  });
  ret.addEventListener('click', () => setFlipped(false));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && card.classList.contains('is-flipped')) setFlipped(false);
  });
});

// Theme toggle (remembers the visitor's choice)
const root = document.documentElement;
try {
  const saved = localStorage.getItem('theme');
  if (saved) root.dataset.theme = saved;
} catch (e) { /* storage unavailable */ }

document.querySelector('.theme-toggle').addEventListener('click', () => {
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const current = root.dataset.theme || (systemDark ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
