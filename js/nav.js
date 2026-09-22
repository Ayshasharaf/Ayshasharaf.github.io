/* Header scroll state, mobile menu, and in-page anchor scrolling. */
(() => {
const Portfolio = (window.Portfolio = window.Portfolio || {});
const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav");
const heroVisual = document.querySelector(".hero-visual");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function heroCutoff() {
  return Math.max((heroVisual?.offsetHeight ?? 480) - (header?.offsetHeight ?? 72), 24);
}

const navLinks = [...(nav?.querySelectorAll('a[href^="#"]') ?? [])];
const navTargets = navLinks
  .map((link) => {
    const id = link.getAttribute("href");
    const el = id ? document.querySelector(id) : null;
    return el ? { link, el } : null;
  })
  .filter(Boolean);

function syncNav() {
  if (!navTargets.length) return;
  const marker = (header?.offsetHeight ?? 72) + 28;
  let current = navTargets[0];

  for (const item of navTargets) {
    if (item.el.getBoundingClientRect().top <= marker) current = item;
  }

  const atBottom =
    window.innerHeight + Math.ceil(window.scrollY) >= document.documentElement.scrollHeight - 8;
  if (atBottom) current = navTargets[navTargets.length - 1];

  navTargets.forEach(({ link }) => {
    const on = link === current.link;
    link.classList.toggle("is-active", on);
    if (on) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

/** Flip the header to the light "scrolled" style once the hero is past. */
function syncHeader(scrollY = window.scrollY) {
  if (!header) return;
  header.classList.toggle("scrolled", scrollY > heroCutoff());
  syncNav();
}

function bindAnchorScroll(scroller) {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = id === "#top" ? document.body : document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      scroller(target);
    });
  });
}

function initNav() {
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });
}

Object.assign(Portfolio, { reduceMotion, syncHeader, bindAnchorScroll, initNav });
})();
