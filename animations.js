// ============================================================
// SUZANNE GAY MUSIC — animations.js
// Libraries: GSAP 3.12 + ScrollTrigger (CDN, loaded in index.html)
// Wrapped in IIFE to prevent variable collisions with inline scripts
// ============================================================

(function () {

  gsap.registerPlugin(ScrollTrigger);

  // ── Helper: clear inline transform after a tween so CSS :hover works ──
  function clearTransform(targets) {
    gsap.set(targets, { clearProps: 'transform' });
  }

  // ── 1. Hero entrance — staggered fade-up on load ──────────────
  const heroEls = ['.hero-eyebrow', '.hero-content h1', '.hero-sub', '.hero-ctas .btn'];
  gsap.from(heroEls, {
    opacity: 0,
    y: 22,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out',
    onComplete() { clearTransform(heroEls); },
  });

  // ── 2. Scroll reveal — individual elements ─────────────────────
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 0.85,
      ease: 'power2.out',
      onComplete: () => clearTransform(el),
    });
  });

  // ── 3. Scroll reveal — staggered children ─────────────────────
  gsap.utils.toArray('.reveal-stagger').forEach(container => {
    const children = Array.from(container.children);
    gsap.from(children, {
      scrollTrigger: {
        trigger: container,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 32,
      stagger: 0.13,
      duration: 0.75,
      ease: 'power2.out',
      onComplete: () => clearTransform(children),
    });
  });

  // ── 4. Gold rule draw — scaleX from left ─────────────────────
  gsap.utils.toArray('.gold-rule').forEach(rule => {
    gsap.from(rule, {
      scrollTrigger: {
        trigger: rule,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      scaleX: 0,
      duration: 0.75,
      ease: 'power2.inOut',
    });
  });

  // ── 5. ScrollSpy — highlight active nav link ──────────────────
  const sections = document.querySelectorAll('section[id]');
  const spyLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActiveLink(id) {
    spyLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  }

  sections.forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 55%',
      end: 'bottom 55%',
      onEnter:     () => setActiveLink(section.id),
      onEnterBack: () => setActiveLink(section.id),
    });
  });

  // ── 6. Parallax on hero background ───────────────────────────
  gsap.to('.hero-bg', {
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
    y: '18%',
    ease: 'none',
  });

}());
