/* Site entry. Load after the other js/*.js files (see index.html). */
(() => {
  const { initNav, initCursor, initMotion, initProjectCases } = window.Portfolio;
  initNav();
  initCursor();
  initMotion();
  initProjectCases();
})();
