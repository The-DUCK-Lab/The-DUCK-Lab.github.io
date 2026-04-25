(function () {
  'use strict';

  function init(showcase) {
    var thumbs = Array.prototype.slice.call(showcase.querySelectorAll('.team-thumb'));
    var panels = Array.prototype.slice.call(showcase.querySelectorAll('.team-panel'));
    if (thumbs.length === 0 || panels.length === 0) return;

    function activate(slug, opts) {
      opts = opts || {};
      if (!slug || showcase.dataset.active === slug) return;

      thumbs.forEach(function (t) {
        var on = t.dataset.target === slug;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.setAttribute('tabindex', on ? '0' : '-1');
      });

      panels.forEach(function (p) {
        var on = p.dataset.member === slug;
        p.classList.toggle('is-active', on);
        if (on) {
          p.removeAttribute('aria-hidden');
        } else {
          p.setAttribute('aria-hidden', 'true');
        }
      });

      showcase.dataset.active = slug;

      if (opts.focus) {
        var next = thumbs.find(function (t) { return t.dataset.target === slug; });
        if (next) next.focus();
      }
    }

    thumbs.forEach(function (t) {
      t.addEventListener('click', function () {
        activate(t.dataset.target);
      });
    });

    function currentIndex() {
      for (var i = 0; i < thumbs.length; i++) {
        if (thumbs[i].classList.contains('is-active')) return i;
      }
      return 0;
    }

    var prevBtn = showcase.querySelector('.team-arrow-prev');
    var nextBtn = showcase.querySelector('.team-arrow-next');
    var last = thumbs.length - 1;

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        var idx = currentIndex();
        activate(thumbs[idx === 0 ? last : idx - 1].dataset.target);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        var idx = currentIndex();
        activate(thumbs[idx === last ? 0 : idx + 1].dataset.target);
      });
    }

    showcase.addEventListener('keydown', function (e) {
      if (!e.target.classList || !e.target.classList.contains('team-thumb')) return;
      var keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
      if (keys.indexOf(e.key) === -1) return;

      var currentIdx = thumbs.indexOf(e.target);
      if (currentIdx === -1) currentIdx = 0;
      var nextIdx = currentIdx;
      var last = thumbs.length - 1;

      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        nextIdx = currentIdx === 0 ? last : currentIdx - 1;
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextIdx = currentIdx === last ? 0 : currentIdx + 1;
      } else if (e.key === 'Home') {
        nextIdx = 0;
      } else if (e.key === 'End') {
        nextIdx = last;
      }

      e.preventDefault();
      activate(thumbs[nextIdx].dataset.target, { focus: true });
    });
  }

  function ready() {
    document.querySelectorAll('.team-showcase').forEach(init);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
})();
