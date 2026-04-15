/** Shared deck JavaScript — identical across all decks */
export const DECK_SCRIPTS = `
(function() {
  'use strict';
  document.body.classList.add('js-ready');

  /* ---- Reveal observer ---- */
  var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var delay = parseInt(entry.target.dataset.delay || '0', 10);
        setTimeout(function() { entry.target.classList.add('visible'); }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '50px' });

  document.querySelectorAll('[data-reveal]').forEach(function(el) { revealObserver.observe(el); });

  setTimeout(function() {
    var activeSlide = document.querySelector('.slide');
    if (activeSlide) {
      activeSlide.querySelectorAll('[data-reveal]').forEach(function(el) {
        var delay = parseInt(el.dataset.delay || '0', 10);
        setTimeout(function() { el.classList.add('visible'); }, delay);
      });
    }
  }, 100);

  function revealSlide(slide) {
    if (!slide) return;
    slide.querySelectorAll('[data-reveal]:not(.visible)').forEach(function(el) {
      var delay = parseInt(el.dataset.delay || '0', 10);
      setTimeout(function() { el.classList.add('visible'); }, delay);
    });
  }

  var slideRevealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) { if (entry.isIntersecting) { revealSlide(entry.target); } });
  }, { threshold: 0.01 });
  document.querySelectorAll('.slide').forEach(function(s) { slideRevealObserver.observe(s); });
  revealSlide(document.querySelector('.slide'));

  /* ---- Slide & dot navigation ---- */
  var slides = document.querySelectorAll('.slide');
  var dots = document.querySelectorAll('.dot-nav a');
  var dotNav = document.getElementById('dotNav');
  var currentSlide = 0;

  var slideObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        var idx = parseInt(entry.target.dataset.slideIndex);
        currentSlide = idx;
        updateDots(idx);
        updateDotTheme(entry.target.dataset.theme);
        var id = entry.target.id;
        if (id && location.hash !== '#' + id) { history.replaceState(null, '', '#' + id); }
      }
    });
  }, { threshold: 0.5 });
  slides.forEach(function(slide) { slideObserver.observe(slide); });

  function updateDots(activeIdx) { dots.forEach(function(dot, i) { dot.classList.toggle('active', i === activeIdx); }); }
  function updateDotTheme(theme) { if (dotNav) dotNav.classList.toggle('on-dark', theme === 'dark'); }

  dots.forEach(function(dot) {
    dot.addEventListener('click', function(e) {
      e.preventDefault();
      var idx = parseInt(dot.dataset.slide);
      slides[idx].scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---- Pricing accordion (legacy decks) ---- */
  window.togglePrice = function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('pc-open');
  };

  /* ---- Decision accordion + CTA reveal ---- */
  var openedSteps = 0;
  window.toggleStep = function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var wasOpen = el.classList.contains('open');
    el.classList.toggle('open');
    if (!wasOpen) {
      openedSteps++;
      if (openedSteps >= 2) {
        var cta = document.getElementById('ctaReveal');
        if (cta) cta.classList.add('cta-visible');
      }
    }
  };

  /* ---- Pricing tier reveal (new horizontal reveal) ---- */
  var tierPanels = document.querySelectorAll('.tier-panel');
  var tierBtn = document.getElementById('tierNextBtn');
  var tierSummary = document.getElementById('tierSummary');
  var tierIndex = 0;
  var tierLabels = ['See more options', 'More options', 'See all rates'];

  if (tierPanels.length > 0) {
    tierPanels[0].classList.add('tier-visible');
  }

  function revealNextTier() {
    tierIndex++;
    if (tierIndex < tierPanels.length) {
      tierPanels[tierIndex].classList.add('tier-visible');
    }
    if (tierBtn) {
      if (tierIndex < tierLabels.length) {
        tierBtn.innerHTML = tierLabels[tierIndex] + ' &rarr;';
      }
      if (tierIndex >= tierPanels.length) {
        tierBtn.style.display = 'none';
        if (tierSummary) tierSummary.classList.add('summary-visible');
      }
    }
  }

  function hideLastTier() {
    if (tierIndex <= 0) return;
    tierPanels[tierIndex].classList.remove('tier-visible');
    tierIndex--;
    if (tierBtn) {
      tierBtn.style.display = '';
      if (tierIndex < tierLabels.length) {
        tierBtn.innerHTML = tierLabels[tierIndex] + ' &rarr;';
      }
    }
    if (tierSummary) tierSummary.classList.remove('summary-visible');
  }

  if (tierBtn) {
    tierBtn.addEventListener('click', function(e) { e.preventDefault(); revealNextTier(); });
  }

  /* ---- Keyboard navigation ---- */
  document.addEventListener('keydown', function(e) {
    var currentSlideEl = slides[currentSlide];
    var hasTierReveal = currentSlideEl && currentSlideEl.dataset.hasTierReveal === 'true';
    var hiddenTiers = hasTierReveal ? currentSlideEl.querySelectorAll('.tier-panel:not(.tier-visible)') : [];
    var visibleTiers = hasTierReveal ? currentSlideEl.querySelectorAll('.tier-panel.tier-visible') : [];

    if (e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      var next = Math.min(currentSlide + 1, slides.length - 1);
      slides[next].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (hasTierReveal && hiddenTiers.length > 0) {
        revealNextTier();
      } else {
        var next = Math.min(currentSlide + 1, slides.length - 1);
        slides[next].scrollIntoView({ behavior: 'smooth' });
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      var prev = Math.max(currentSlide - 1, 0);
      slides[prev].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (hasTierReveal && visibleTiers.length > 1) {
        hideLastTier();
      } else {
        var prev = Math.max(currentSlide - 1, 0);
        slides[prev].scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  /* ---- Timeline animation ---- */
  var s2Timeline = document.getElementById('s2Timeline');
  if (s2Timeline) {
    var s2Observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) { if (entry.isIntersecting) { s2Timeline.classList.add('line-drawn'); } });
    }, { threshold: 0.3 });
    s2Observer.observe(s2Timeline);
  }

  /* ---- Chart animation ---- */
  var s4Chart = document.getElementById('s4Chart');
  if (s4Chart) {
    var s4Observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !s4Chart.dataset.animated) {
          s4Chart.dataset.animated = 'true';
          s4Chart.querySelectorAll('.s4-bar-fill').forEach(function(bar, i) {
            setTimeout(function() { bar.classList.add('animate'); }, i * 120);
          });
        }
      });
    }, { threshold: 0.25 });
    s4Observer.observe(s4Chart);
  }

  /* ---- Lottie support ---- */
  if (typeof lottie !== 'undefined') {
    document.querySelectorAll('.lottie-anim').forEach(function(el) {
      var src = el.dataset.src;
      if (src) {
        lottie.loadAnimation({ container: el, renderer: 'svg', loop: true, autoplay: true, path: src });
      }
    });
  }
})();
`;
