/* ============================================================
   Shane Ting Website — Main JS
   ============================================================ */

// ── Scrolled nav shadow ──────────────────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ── Mobile burger menu ───────────────────────────────────────
const burger = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__mobile');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Active nav link ──────────────────────────────────────────
(function markActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === 'index.html' && href === './') || href === path.replace('.html','')) {
      a.classList.add('active');
    }
  });
})();

// ── Portfolio filters ────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
if (filterBtns.length && galleryItems.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      galleryItems.forEach(item => {
        const show = cat === 'all' || item.dataset.category === cat;
        item.style.display = show ? '' : 'none';
      });
    });
  });
}

// ── Contact form ─────────────────────────────────────────────
const form = document.querySelector('.contact-form');
const formSuccess = document.querySelector('.form-success');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Simple client-side validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = '#e53e3e';
        field.addEventListener('input', () => { field.style.borderColor = ''; }, { once: true });
      }
    });
    if (!valid) return;

    // Submit button feedback
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    // Simulate send (replace with your actual form endpoint, e.g. Formspree)
    setTimeout(() => {
      form.style.display = 'none';
      if (formSuccess) formSuccess.classList.add('visible');
    }, 1200);
  });
}

// ── Scroll-reveal ─────────────────────────────────────────────
if ('IntersectionObserver' in window) {
  const revealEls = document.querySelectorAll(
    '.topic-card, .gallery-item, .expertise-card, .timeline-item, .stat__number'
  );
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.5s ease forwards';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.animationDelay = `${(i % 4) * 0.08}s`;
    io.observe(el);
  });
}

// inject keyframe once
const style = document.createElement('style');
style.textContent = `@keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }`;
document.head.appendChild(style);
