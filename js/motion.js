/* Lenis smooth scroll + GSAP ScrollTrigger reveals.
 * Falls back to native scroll when motion is reduced or libraries fail to load.
 */

(() => {
const { bindAnchorScroll, reduceMotion, syncHeader } = window.Portfolio;
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;

const scrollState = { pageScroll: null };

function revealBatch(targets, options = {}) {
  const els = gsap.utils.toArray(targets);
  if (!els.length) return;
  gsap.set(els, { opacity: 0, y: options.y ?? 36 });
  ScrollTrigger.batch(els, {
    start: options.start ?? "top 88%",
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 0.9,
        stagger: options.stagger ?? 0.08,
        ease: "power3.out",
        overwrite: true,
        onComplete: () => gsap.set(batch, { clearProps: "transform" }),
      });
    },
  });
}

function showStaticFallbacks() {
  document.documentElement.classList.remove("has-motion");
  document.querySelectorAll(".rise-in").forEach((el) => el.classList.add("is-in"));
  document.querySelector(".edu-atlas")?.classList.add("is-in");
}

function initMotion() {
  if (reduceMotion) {
    showStaticFallbacks();
    bindAnchorScroll((target) => {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    });
    window.addEventListener("scroll", () => syncHeader(window.scrollY), { passive: true });
    window.addEventListener("resize", () => syncHeader(window.scrollY));
    syncHeader();
    return;
  }

  if (!(window.Lenis && gsap && ScrollTrigger)) {
    showStaticFallbacks();
    bindAnchorScroll((target) => target.scrollIntoView({ behavior: "smooth", block: "start" }));
    window.addEventListener("scroll", () => syncHeader(window.scrollY), { passive: true });
    syncHeader();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("has-motion");

  const lenis = new window.Lenis({
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  scrollState.pageScroll = lenis;

  lenis.on("scroll", (event) => {
    ScrollTrigger.update();
    syncHeader(event.scroll);
  });

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  bindAnchorScroll((target) => {
    lenis.scrollTo(target, { offset: target === document.body ? 0 : -72, duration: 1.2 });
  });

  window.addEventListener("resize", () => {
    syncHeader(lenis.scroll);
    ScrollTrigger.refresh();
  });
  syncHeader(0);

  const heroIntro = () => {
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .fromTo(".plaque-top", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
      .fromTo(".plaque-copy h1", { y: 46, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.12)
      .fromTo(
        ".plaque-copy p",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
        0.28
      )
      .fromTo(".hero-actions", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.52)
      .fromTo(".plaque-year", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.6);
  };

  if (document.fonts?.ready) document.fonts.ready.then(heroIntro);
  else heroIntro();

  gsap.to(".plaque-grid", {
    yPercent: 22,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.utils.toArray(".section-head").forEach((head) => {
    const bits = head.querySelectorAll(":scope > *");
    gsap.set(bits, { opacity: 0, y: 22 });
    ScrollTrigger.create({
      trigger: head,
      start: "top 86%",
      once: true,
      onEnter: () => {
        gsap.to(bits, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
        });
      },
    });
  });

  revealBatch(".project", { stagger: 0.07, y: 40 });
  revealBatch(".job", { stagger: 0.16, y: 32, start: "top 90%" });
  revealBatch(".skill-row", { stagger: 0.07, y: 26 });
  revealBatch(".edu-city", { stagger: 0.14, y: 36 });
  revealBatch(".honor-reel > article", { stagger: 0.1, y: 40 });
  revealBatch(".contact-tile", { stagger: 0.1, y: 28 });

  const stamps = gsap.utils.toArray(".stamp");
  if (stamps.length) {
    gsap.set(stamps, { opacity: 0, y: 42 });
    ScrollTrigger.create({
      trigger: ".stamp-album",
      start: "top 84%",
      once: true,
      onEnter: () => {
        gsap.to(stamps, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: {
            each: 0.1,
            onComplete() {
              const el = this.targets()[0];
              gsap.set(el, { clearProps: "transform" });
              el.classList.add("is-in");
            },
          },
        });
      },
    });
  }

  const atlas = document.querySelector(".edu-atlas");
  if (atlas) {
    ScrollTrigger.create({
      trigger: atlas,
      start: "top 78%",
      once: true,
      onEnter: () => atlas.classList.add("is-in"),
    });
  }

  const honorStat = document.querySelector(".honor-stat");
  if (honorStat) {
    const counter = { value: 0 };
    ScrollTrigger.create({
      trigger: honorStat,
      start: "top 82%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          value: 13,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            honorStat.innerHTML = `${Math.round(counter.value)}<span>%</span>`;
          },
        });
      },
    });
  }

  gsap.to(".experience-arcs", {
    y: 90,
    rotate: 12,
    ease: "none",
    scrollTrigger: {
      trigger: ".experience-panel",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".experience-glow", {
    y: 40,
    x: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".experience-panel",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  const footerTop = document.querySelector(".footer-top");
  if (footerTop) {
    gsap.set(footerTop.children, { opacity: 0, y: 24 });
    ScrollTrigger.create({
      trigger: footerTop,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(footerTop.children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        });
      },
    });
  }

  const archive = document.querySelector(".archive-fold");
  archive?.addEventListener("toggle", () => {
    if (!archive.open) return;
    const cards = archive.querySelectorAll(".archive-card");
    gsap.fromTo(
      cards,
      { y: 18, opacity: 0.4 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: "power2.out", clearProps: "transform" }
    );
  });
}

Object.assign(window.Portfolio, { scrollState, initMotion });
})();
