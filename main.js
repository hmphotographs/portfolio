/* ══════════════════════════════════════════════
   HUSSAIN MAHMUD PHOTOGRAPHY — main.js
══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Active nav link ─────────────────────── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (
      (href === 'index.html' && (page === '' || page === 'index.html')) ||
      href === page
    ) {
      link.classList.add('active');
    }
  });

  /* ── Custom Cursor ───────────────────────── */
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
    let dotX = 0, dotY = 0, ringX = 0, ringY = 0;
    let mx = 0, my = 0;

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    document.addEventListener('mouseover', e => {
      const el = e.target.closest('a, button, [role="button"], input, textarea, select, label');
      if (el) {
        ring.classList.add('hovering');
      } else {
        ring.classList.remove('hovering');
      }
    });

    document.addEventListener('mousedown', () => dot.classList.add('clicking'));
    document.addEventListener('mouseup',   () => dot.classList.remove('clicking'));
    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });

    function animateCursor() {
      dotX  += (mx - dotX) * 0.9;
      dotY  += (my - dotY) * 0.9;
      ringX += (mx - ringX) * 0.12;
      ringY += (my - ringY) * 0.12;

      dot.style.left  = dotX  + 'px';
      dot.style.top   = dotY  + 'px';
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';

      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  }

  /* ── Scroll Progress Bar ─────────────────── */
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress  = docHeight > 0 ? scrollTop / docHeight : 0;
      progressBar.style.transform = `scaleX(${progress})`;
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ── Navbar Scroll Effect ────────────────── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    function updateNavbar() {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  }

  /* ── Mobile Menu ─────────────────────────── */
  const toggleBtn    = document.getElementById('menuToggle');
  const mobileMenu   = document.getElementById('mobileMenu');
  const menuIconOpen = document.getElementById('iconOpen');
  const menuIconClose= document.getElementById('iconClose');

  if (toggleBtn && mobileMenu) {
    let menuOpen = false;
    toggleBtn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('open', menuOpen);
      document.body.style.overflow = menuOpen ? 'hidden' : '';
      if (menuIconOpen)  menuIconOpen.style.display  = menuOpen ? 'none' : 'block';
      if (menuIconClose) menuIconClose.style.display = menuOpen ? 'block' : 'none';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menuOpen = false;
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        if (menuIconOpen)  menuIconOpen.style.display  = 'block';
        if (menuIconClose) menuIconClose.style.display = 'none';
      });
    });
  }

  /* ── Scroll Reveal ───────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '-40px 0px' });

    reveals.forEach(el => revealObserver.observe(el));
  }

  /* ── Animated Counters ───────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const duration = 1800;
          let start = null;

          function step(timestamp) {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(ease * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  /* ── Hero Parallax ───────────────────────── */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    function parallax() {
      const scrollY = window.scrollY;
      const hero    = heroBg.closest('.hero');
      if (!hero) return;
      const heroH   = hero.offsetHeight;
      if (scrollY < heroH) {
        const t = scrollY / heroH;
        heroBg.style.transform = `translateY(${t * 30}%)`;
        const content = hero.querySelector('.hero-content');
        if (content) content.style.opacity = 1 - t * 1.2;
      }
    }
    window.addEventListener('scroll', parallax, { passive: true });
  }

  /* ── About Hero Parallax ─────────────────── */
  const aboutHeroBg = document.querySelector('.about-hero-bg');
  if (aboutHeroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const hero    = aboutHeroBg.closest('.about-hero');
      if (!hero || scrollY > hero.offsetHeight) return;
      aboutHeroBg.style.transform = `translateY(${(scrollY / hero.offsetHeight) * 20}%)`;
    }, { passive: true });
  }

  /* ── Portfolio Filter ────────────────────── */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const gridItems   = document.querySelectorAll('.grid-item');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;

        gridItems.forEach(item => {
          const itemCat = item.dataset.cat;
          if (cat === 'All' || itemCat === cat) {
            item.classList.remove('hidden');
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
              item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            }, 10);
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ── Lightbox ────────────────────────────── */
  const lightbox     = document.getElementById('lightbox');
  const lbImg        = document.getElementById('lbImg');
  const lbTitle      = document.getElementById('lbTitle');
  const lbCat        = document.getElementById('lbCat');
  const lbClose      = document.getElementById('lbClose');

  function openLightbox(src, title, cat) {
    lbImg.src   = src;
    lbTitle.textContent = title;
    lbCat.textContent   = cat;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 300);
  }

  if (lightbox) {
    gridItems.forEach(item => {
      item.addEventListener('click', () => {
        const src   = item.querySelector('img').src;
        const title = item.dataset.title || '';
        const cat   = item.dataset.cat   || '';
        openLightbox(src, title, cat);
      });
    });

    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  /* ── Contact Form ────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;

      const name    = contactForm.querySelector('#name');
      const email   = contactForm.querySelector('#email');
      const subject = contactForm.querySelector('#subject');
      const message = contactForm.querySelector('#message');

      const nameErr    = contactForm.querySelector('#nameErr');
      const emailErr   = contactForm.querySelector('#emailErr');
      const subjectErr = contactForm.querySelector('#subjectErr');
      const msgErr     = contactForm.querySelector('#msgErr');

      [nameErr, emailErr, subjectErr, msgErr].forEach(e => e && e.classList.remove('show'));

      if (!name.value || name.value.trim().length < 2) {
        nameErr && nameErr.classList.add('show'); valid = false;
      }
      if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailErr && emailErr.classList.add('show'); valid = false;
      }
      if (!subject.value || subject.value.trim().length < 5) {
        subjectErr && subjectErr.classList.add('show'); valid = false;
      }
      if (!message.value || message.value.trim().length < 10) {
        msgErr && msgErr.classList.add('show'); valid = false;
      }

      if (valid) {
        const sub = encodeURIComponent(`[Portfolio] ${subject.value}`);
        const bod = encodeURIComponent(
          `Hello Hussain,\n\nName: ${name.value}\nEmail: ${email.value}\n\n${message.value}`
        );
        window.open(`mailto:jnm309249@gmail.com?subject=${sub}&body=${bod}`);
        contactForm.reset();
      }
    });
  }

  /* ── Footer year ─────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
