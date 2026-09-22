/* Project dialog: fill case-study content, gallery slider, and pause smooth-scroll while open. */

(() => {
const { PROJECTS, scrollState } = window.Portfolio;

function initProjectCases() {
  const dialog = document.querySelector("#project-dialog");
  const titleEl = document.querySelector("#project-dialog-title");
  const kickerEl = document.querySelector("#project-dialog-kicker");
  const tagsEl = document.querySelector("#project-dialog-tags");
  const galleryEl = document.querySelector("#project-dialog-gallery");
  const bodyEl = document.querySelector("#project-dialog-body");
  const closeBtn = dialog?.querySelector(".project-dialog-close");
  const cursor = document.querySelector(".site-cursor");
  const cursorHome = cursor?.parentElement;
  if (!dialog || !titleEl || !kickerEl || !tagsEl || !galleryEl || !bodyEl) return;

  const fill = (project) => {
    kickerEl.innerHTML = `<span>Case</span> ${project.kicker}`;
    titleEl.textContent = project.title;
    tagsEl.replaceChildren(
      ...project.tags.map((tag) => {
        const li = document.createElement("li");
        li.textContent = tag;
        return li;
      })
    );

    const images = project.images ?? [];
    const videos = project.videos ?? [];
    galleryEl.hidden = images.length + videos.length === 0;
    galleryEl.classList.remove("is-slider", "is-videos");
    galleryEl.classList.toggle("is-videos", videos.length > 0);
    galleryEl.dataset.count = String(images.length + videos.length);
    galleryEl.replaceChildren(
      ...images.map((image) => {
        const frame = document.createElement("div");
        frame.className = "media";
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.loading = "lazy";
        frame.append(img);
        return frame;
      }),
      ...videos.map((clip) => {
        const frame = document.createElement("div");
        frame.className = "media";
        const video = document.createElement("video");
        video.src = clip.src;
        video.controls = true;
        video.playsInline = true;
        video.preload = "metadata";
        video.setAttribute("aria-label", clip.label);
        frame.append(video);
        return frame;
      })
    );

    if (images.length > 1 && !videos.length) {
      const slides = [...galleryEl.children];
      const viewport = document.createElement("div");
      viewport.className = "gallery-viewport";
      const track = document.createElement("div");
      track.className = "gallery-track";
      slides.forEach((slide) => track.append(slide));
      viewport.append(track);

      const prev = document.createElement("button");
      prev.type = "button";
      prev.className = "gallery-nav prev";
      prev.setAttribute("aria-label", "Previous image");
      prev.textContent = "‹";

      const next = document.createElement("button");
      next.type = "button";
      next.className = "gallery-nav next";
      next.setAttribute("aria-label", "Next image");
      next.textContent = "›";

      const dots = document.createElement("div");
      dots.className = "gallery-dots";
      const buttons = slides.map((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", `Show image ${index + 1}`);
        dots.append(dot);
        return dot;
      });

      galleryEl.classList.add("is-slider");
      galleryEl.replaceChildren(prev, viewport, next, dots);

      let index = 0;
      const go = (nextIndex) => {
        index = (nextIndex + slides.length) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
        buttons.forEach((dot, i) => dot.classList.toggle("is-on", i === index));
      };

      prev.addEventListener("click", (event) => {
        event.stopPropagation();
        go(index - 1);
      });
      next.addEventListener("click", (event) => {
        event.stopPropagation();
        go(index + 1);
      });
      buttons.forEach((dot, i) => {
        dot.addEventListener("click", (event) => {
          event.stopPropagation();
          go(i);
        });
      });
      go(0);
    }

    bodyEl.replaceChildren(
      ...project.sections.map((section) => {
        const block = document.createElement("section");
        const heading = document.createElement("h3");
        heading.textContent = section.heading;
        block.append(heading);
        if (section.text) {
          const p = document.createElement("p");
          p.textContent = section.text;
          block.append(p);
        }
        if (section.items) {
          const list = document.createElement("ul");
          section.items.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            list.append(li);
          });
          block.append(list);
        }
        return block;
      })
    );
  };

  const sheet = dialog.querySelector(".project-sheet");
  sheet?.addEventListener(
    "wheel",
    (event) => {
      event.stopPropagation();
    },
    { passive: true }
  );
  sheet?.addEventListener(
    "touchmove",
    (event) => {
      event.stopPropagation();
    },
    { passive: true }
  );

  const openProject = (id) => {
    const project = PROJECTS[id];
    if (!project) return;
    fill(project);
    dialog.showModal();
    if (cursor) dialog.append(cursor);
    scrollState.pageScroll?.stop();
    closeBtn?.focus();
  };

  const closeProject = () => {
    if (dialog.open) dialog.close();
  };

  dialog.addEventListener("close", () => {
    galleryEl.querySelectorAll("video").forEach((clip) => {
      clip.pause();
    });
    if (cursor && cursorHome) cursorHome.append(cursor);
    scrollState.pageScroll?.start();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeProject();
  });

  closeBtn?.addEventListener("click", closeProject);

  document.querySelectorAll("[data-project]").forEach((card) => {
    const id = card.getAttribute("data-project");
    const activate = () => openProject(id);
    card.addEventListener("click", activate);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });
}

window.Portfolio.initProjectCases = initProjectCases;
})();
