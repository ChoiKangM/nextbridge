/* ── Constants ─────────────────────────────────── */
const SITE_URL = 'https://choikangm.github.io/nextbridge/';

/* ── Sticky Header ─────────────────────────────── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Mobile Menu ───────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

// Close menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* ── Accordion ─────────────────────────────────── */
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('open'));

    // Open clicked (if it was closed)
    if (!isOpen) item.classList.add('open');
  });
});

// Open first by default
const firstItem = document.querySelector('.accordion-item');
if (firstItem) firstItem.classList.add('open');

/* ── Animated Counters ─────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-counter'), 10);
  const duration = 1500;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(interval);
    } else {
      el.textContent = Math.floor(current).toLocaleString();
    }
  }, duration / steps);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));

/* ── Scroll Fade-In ────────────────────────────── */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings slightly
      const siblings = entry.target.parentElement.querySelectorAll('.fade-up:not(.visible)');
      let delay = 0;
      siblings.forEach(sib => {
        if (sib === entry.target || entry.target.contains(sib)) {
          sib.style.animationDelay = delay + 'ms';
          sib.classList.add('visible');
          delay += 80;
        }
      });
      entry.target.style.animationDelay = (i * 60) + 'ms';
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

/* ── QR Code ───────────────────────────────────── */
const qrCanvas = document.getElementById('qr-canvas');
if (qrCanvas && typeof QRCode !== 'undefined') {
  QRCode.toCanvas(qrCanvas, SITE_URL, {
    width: 140,
    margin: 1,
    color: { dark: '#1E293B', light: '#FFFFFF' }
  }, err => {
    if (err) console.warn('QR Code 생성 실패:', err);
  });
}
