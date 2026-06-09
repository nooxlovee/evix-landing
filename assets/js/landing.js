(function () {
  'use strict';

  // ============ Header on scroll ============
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 12) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ============ Mobile menu toggle ============
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    // Tag the existing burger SVG and inject a close (X) icon for menu-open state
    const openIcon = menuToggle.querySelector('svg');
    if (openIcon && !openIcon.classList.contains('menu-icon-open')) {
      openIcon.classList.add('menu-icon-open');
    }
    if (!menuToggle.querySelector('.menu-icon-close')) {
      const NS = 'http://www.w3.org/2000/svg';
      const closeIcon = document.createElementNS(NS, 'svg');
      closeIcon.setAttribute('class', 'menu-icon-close w-5 h-5');
      closeIcon.setAttribute('viewBox', '0 0 24 24');
      closeIcon.setAttribute('fill', 'none');
      closeIcon.setAttribute('stroke', 'currentColor');
      closeIcon.setAttribute('stroke-width', '2');
      closeIcon.setAttribute('stroke-linecap', 'round');
      closeIcon.setAttribute('stroke-linejoin', 'round');
      closeIcon.innerHTML = '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>';
      menuToggle.appendChild(closeIcon);
    }
    menuToggle.setAttribute('aria-expanded', 'false');

    const setMenuState = (open) => {
      document.body.classList.toggle('is-menu-open', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Меню');
    };

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      setMenuState(!document.body.classList.contains('is-menu-open'));
    });

    // Close on link click inside the nav
    document.querySelectorAll('.site-nav a').forEach((a) => {
      a.addEventListener('click', () => setMenuState(false));
    });

    // Toggle nested dropdown («О продукте», «Поддержка») on tap in mobile menu
    document.querySelectorAll('.site-nav .nav-group > button').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        if (!document.body.classList.contains('is-menu-open')) return;
        e.preventDefault();
        e.stopPropagation();
        const group = btn.closest('.nav-group');
        if (group) group.classList.toggle('is-open');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('is-menu-open')) {
        setMenuState(false);
      }
    });

    // Close on outside click / tap (when menu is open)
    document.addEventListener('click', (e) => {
      if (!document.body.classList.contains('is-menu-open')) return;
      if (e.target.closest('.site-nav') || e.target.closest('#menuToggle')) return;
      setMenuState(false);
    });

    // Reset state on resize above lg
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && document.body.classList.contains('is-menu-open')) {
        setMenuState(false);
      }
    });
  }

  // ============ Dropdown «О продукте» — click toggle ============
  const dropTriggers = document.querySelectorAll('.site-nav__trigger');
  dropTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const group = btn.closest('.site-nav__group');
      if (!group) return;
      const wasOpen = group.classList.contains('is-open');
      document.querySelectorAll('.site-nav__group.is-open').forEach((g) => g.classList.remove('is-open'));
      if (!wasOpen) group.classList.add('is-open');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-nav__group')) {
      document.querySelectorAll('.site-nav__group.is-open').forEach((g) => g.classList.remove('is-open'));
    }
  });

  // ============ Scroll-reveal ============
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.08 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  // ============ Counters (animate numbers when visible) ============
  const counters = document.querySelectorAll('[data-counter]');
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-counter'), 10) || 0;
    const duration = 1400;
    const start = performance.now();
    const initial = 0;
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(initial + (target - initial) * eased);
      el.textContent = value.toLocaleString('ru-RU');
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => cio.observe(el));
  } else {
    counters.forEach((el) => animateCounter(el));
  }

  // ============ Animated bars in stats ============
  const bars = document.querySelectorAll('[data-bar]');
  if ('IntersectionObserver' in window) {
    const bio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pct = parseInt(entry.target.getAttribute('data-bar'), 10) || 0;
            entry.target.style.height = pct + '%';
            bio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    bars.forEach((el) => {
      el.style.height = '0%';
      bio.observe(el);
    });
  } else {
    bars.forEach((el) => {
      const pct = parseInt(el.getAttribute('data-bar'), 10) || 0;
      el.style.height = pct + '%';
    });
  }

  // ============ Smooth scroll for anchors ============
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ============ Contact form ============
  const form = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');
  if (form && success) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      let valid = true;
      [name, email].forEach((input) => {
        if (!input.value.trim()) {
          input.style.borderColor = 'var(--danger)';
          valid = false;
        } else {
          input.style.borderColor = '';
        }
      });
      if (!valid) return;
      form.hidden = true;
      success.hidden = false;
    });
    form.querySelectorAll('input, textarea').forEach((el) => {
      el.addEventListener('input', () => {
        el.style.borderColor = '';
      });
    });
  }
})();
