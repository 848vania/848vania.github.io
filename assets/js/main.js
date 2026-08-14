(function () {
  'use strict';

  // ── Hamburger menu ───────────────────────────────────────────
  var hamburger = document.querySelector('.nav-hamburger');
  var navLinks  = document.querySelector('.nav-links');
  var body      = document.body;

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = body.classList.toggle('nav-open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        body.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside nav
    document.addEventListener('click', function (e) {
      if (
        body.classList.contains('nav-open') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        body.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && body.classList.contains('nav-open')) {
        body.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
      }
    });
  }

  // ── Active nav link on scroll (IntersectionObserver) ─────────
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a[href*="#"]');

  if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
    var activeId = '';

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          activeId = entry.target.id;
          navAnchors.forEach(function (a) {
            var href = a.getAttribute('href');
            if (href && href.includes('#' + activeId)) {
              a.classList.add('nav-active');
            } else {
              a.classList.remove('nav-active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(function (s) { observer.observe(s); });
  }
})();
