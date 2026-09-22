/* Custom cursor: follow pointer, magnetize toward clickable targets. */
(() => {
const { reduceMotion } = window.Portfolio;
const gsap = window.gsap;

function initCursor() {
  const cursor = document.querySelector(".site-cursor");
  const arrow = cursor?.querySelector(".cursor-arrow");
  if (!cursor || !arrow || !window.matchMedia("(pointer: fine)").matches) return;
  document.documentElement.classList.add("has-cursor");

  const hoverSel =
    "a, button, summary, .nav-toggle, .more-head, .stamp, .contact-tile, .project, .archive-card[data-project], video, .gallery-nav, input, textarea, label";
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let last = { x: pos.x, y: pos.y, t: performance.now() };

  if (gsap) {
    gsap.set(arrow, { x: pos.x, y: pos.y, rotation: 0, transformOrigin: "12% 10%" });
  }

  const arrowX = gsap?.quickTo ? gsap.quickTo(arrow, "x", { duration: 0.12, ease: "power3.out" }) : null;
  const arrowY = gsap?.quickTo ? gsap.quickTo(arrow, "y", { duration: 0.12, ease: "power3.out" }) : null;
  const arrowRot = gsap?.quickTo ? gsap.quickTo(arrow, "rotation", { duration: 0.4, ease: "power3.out" }) : null;

  const magnetize = (x, y, target) => {
    if (!target) return { x, y };
    const box = target.getBoundingClientRect();
    const cx = box.left + box.width / 2;
    const cy = box.top + box.height / 2;
    const dx = cx - x;
    const dy = cy - y;
    const pull = Math.min(14, Math.hypot(dx, dy) * 0.18);
    const dist = Math.hypot(dx, dy) || 1;
    return { x: x + (dx / dist) * pull, y: y + (dy / dist) * pull };
  };

  const move = (x, y, rot = 0) => {
    pos.x = x;
    pos.y = y;
    cursor.classList.add("is-on");
    if (arrowX && arrowY && !reduceMotion) {
      arrowX(x);
      arrowY(y);
      arrowRot?.(rot);
    } else {
      arrow.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  document.addEventListener(
    "pointermove",
    (event) => {
      const now = performance.now();
      const dt = Math.max(now - last.t, 8);
      const vx = (event.clientX - last.x) / dt;
      const vy = (event.clientY - last.y) / dt;
      last = { x: event.clientX, y: event.clientY, t: now };

      const hit = document.elementFromPoint(event.clientX, event.clientY);
      const target = hit?.closest(hoverSel);
      const hover = Boolean(target);
      cursor.classList.toggle("is-hover", hover && !cursor.classList.contains("is-grab"));

      const next = magnetize(event.clientX, event.clientY, hover ? target : null);
      const rot = reduceMotion ? 0 : Math.max(-18, Math.min(18, vx * 90 + vy * 20));
      move(next.x, next.y, rot);
    },
    { passive: true, capture: true }
  );

  document.addEventListener("pointerdown", (event) => {
    const hit = document.elementFromPoint(event.clientX, event.clientY);
    if (hit?.closest(hoverSel)) cursor.classList.add("is-grab");
  });
  document.addEventListener("pointerup", () => cursor.classList.remove("is-grab"));
  document.addEventListener("pointercancel", () => cursor.classList.remove("is-grab"));
  document.documentElement.addEventListener("mouseleave", () => cursor.classList.remove("is-on"));
}

window.Portfolio.initCursor = initCursor;
})();
