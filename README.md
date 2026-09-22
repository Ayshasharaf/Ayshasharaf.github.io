# Aysha Sharafudheen — portfolio

Static one-page site. Open `index.html` locally or serve the folder (no build step).

## Folder structure

```
index.html              Page markup and content
css/
  styles.css            Entry file — imports the rest (cascade order)
  tokens.css            Colors, type, spacing, radii
  base.css              Reset and skip link
  cursor.css            Custom pointer
  header.css            Header, type scale, buttons
  hero.css              Hero plaque and section wrapper
  projects.css          Project cards and case-study dialog
  skills.css            Skills sheet
  education.css         Education map and city cards
  honors-certs.css      Honors + certification stamps
  experience.css        Jobs timeline
  footer.css            Contact tiles
  responsive.css        960 / 720 breakpoints and reduced-motion
js/                     Classic scripts (not modules) so file:// still works
  projects-data.js      Copy and media for each project
  nav.js                Header, mobile menu, in-page scroll
  cursor.js             Custom cursor
  motion.js             Lenis + GSAP scroll animations
  project-dialog.js     Case-study modal + gallery
  main.js               Calls the init functions — keep this last
assets/
  projects/             Screenshots and videos used in the dialog
  _unused/              Files nothing references (kept, not deleted)
```

CDN: IBM Plex Mono, Inter, Syne (Google Fonts); Lenis; GSAP + ScrollTrigger.

## How to add content

### New section

1. Copy an existing `<section class="section" id="your-id">` block in `index.html`.
2. Add a matching `<a href="#your-id">` in the header nav.
3. Use the kicker pattern: `<p class="kicker"><span>NN / name</span> Label</p>`.
4. If it needs unique layout, add `css/your-section.css` and `@import` it in `css/styles.css` **before** `responsive.css`.

### New project

1. Add a `.project` (featured) or `.archive-card` (under the Archive `<details>`).
2. Set `data-project="your-key"` on the card.
3. Add the same key to `js/projects-data.js` (`kicker`, `title`, `tags`, `sections`, optional `images` / `videos`).
4. Put media in `assets/projects/`.

### New job / skill / honor / stamp

- Job: another `<article class="job">` in `#experience`.
- Skill: another `<article class="skill-row">` in `.skill-sheet`.
- Honor: another card in `.honor-reel`.
- Stamp: another `.stamp.stamp-tilt-N` in `.stamp-album` (add a tilt class in `honors-certs.css` if needed) and update `.stamp-count`.

## Theming

Edit `css/tokens.css`. Section files should keep using `var(--blue)`, `var(--ink)`, etc.

## Flagged unused assets

These are **not referenced** by HTML/CSS/JS. They sit in `assets/_unused/` so nothing was silently deleted:

- `aysha-photo.png` — possible leftover hero portrait (old JS targeted `.plaque-portrait`, which is not in the markup)
- `aysha-character.png` — same

Deleted with confidence (nothing referenced them): hashed `.jpg` dumps in the repo root, duplicate `enrollment.png` / `management*.png` next to `assets/projects/`, `ebook-2.mov`, and the two desktop screen recordings.
