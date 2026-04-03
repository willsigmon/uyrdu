/** Shared deck JavaScript — identical across all decks */
export const DECK_SCRIPTS = `
(function() {
  'use strict';
  document.body.classList.add('js-ready');

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
  function updateDotTheme(theme) { dotNav.classList.toggle('on-dark', theme === 'dark'); }

  dots.forEach(function(dot) {
    dot.addEventListener('click', function(e) {
      e.preventDefault();
      var idx = parseInt(dot.dataset.slide);
      slides[idx].scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      var next = Math.min(currentSlide + 1, slides.length - 1);
      slides[next].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      var prev = Math.max(currentSlide - 1, 0);
      slides[prev].scrollIntoView({ behavior: 'smooth' });
    }
  });

  var s2Timeline = document.getElementById('s2Timeline');
  if (s2Timeline) {
    var s2Observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) { if (entry.isIntersecting) { s2Timeline.classList.add('line-drawn'); } });
    }, { threshold: 0.3 });
    s2Observer.observe(s2Timeline);
  }

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
