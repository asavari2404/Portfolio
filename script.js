(function () {
  const data = window.PORTFOLIO_DATA || {};

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value) {
      el.textContent = value;
    }
  };

  const setHref = (id, value) => {
    const el = document.getElementById(id);
    if (el && value) {
      el.setAttribute("href", value);
    }
  };

  const renderFeatured = () => {
    const container = document.getElementById("featured-work");
    if (!container || !Array.isArray(data.featuredProjects)) return;
    container.innerHTML = data.featuredProjects
      .map(
        (item) => `
        <article class="work-card">
          <div class="work-preview">${item.name || "Project"}</div>
          <div class="work-meta">
            <h4>${item.subtitle || ""}</h4>
            <p>${item.description || ""}</p>
          </div>
        </article>`
      )
      .join("");
  };

  const renderWork = () => {
    const container = document.getElementById("work-gallery");
    if (!container || !Array.isArray(data.workProjects)) return;
    container.innerHTML = data.workProjects
      .map((project) => {
        const shots = Array.isArray(project.screenshots) ? project.screenshots : [];
        const shotMarkup = shots.length
          ? shots
              .map(
                (shot) => `
              <a class="shot" href="${shot.src}" data-lightbox="image" data-title="${shot.label || project.name}">
                <img src="${shot.src}" alt="${shot.label || project.name}" />
                <span>${shot.label || "Screenshot"}</span>
              </a>`
              )
              .join("")
          : `
              <div class="shot placeholder">Add screenshots in content.js</div>
              <div class="shot placeholder">Drop image files in /assets</div>
              <div class="shot placeholder">Update the src paths</div>`;

        const links = Array.isArray(project.links) ? project.links : [];
        const linkMarkup = [
          project.github
            ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>`
            : "",
          ...links.map(
            (link) =>
              `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`
          )
        ]
          .filter(Boolean)
          .join("");

        return `
        <article class="shot-set">
          <div class="shot-header">
            <div>
              <h3>${project.name || "Project"}</h3>
              <span>${project.subtitle || ""}</span>
            </div>
            <div class="project-links">${linkMarkup}</div>
          </div>
          <p class="project-desc">${project.description || ""}</p>
          <div class="shot-grid">${shotMarkup}</div>
        </article>`;
      })
      .join("");
  };

  const renderSlides = () => {
    const container = document.getElementById("slides-grid");
    if (!container || !Array.isArray(data.slideDecks)) return;
    container.innerHTML = data.slideDecks
      .map((deck) => {
        const tags = Array.isArray(deck.tags) ? deck.tags : [];
        const coverContent = deck.cover
          ? `<img src="${deck.cover}" alt="${deck.title}" />`
          : `<div class="slide-placeholder">Add a slide thumbnail</div>`;
        const coverLink = deck.cover
          ? `<a class="slide-cover" href="${deck.cover}" data-lightbox="image" data-title="${deck.title}">${coverContent}</a>`
          : `<div class="slide-cover">${coverContent}</div>`;
        const githubLink = deck.github
          ? `<a href="${deck.github}" target="_blank" rel="noreferrer">GitHub</a>`
          : "";
        return `
        <article class="slide-card">
          <div class="slide-preview">${coverLink}</div>
          <div>
            <h3>${deck.title || "Deck"}</h3>
            <p>${deck.description || ""}</p>
          </div>
          <div class="slide-tags">
            ${tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="slide-links">${githubLink}</div>
        </article>`;
      })
      .join("");
  };

  const renderGithub = () => {
    const container = document.getElementById("github-projects");
    if (!container || !Array.isArray(data.githubProjects)) return;
    container.innerHTML = data.githubProjects
      .map(
        (repo) => `
        <article class="github-card">
          <div>
            <h4>${repo.name || "Repository"}</h4>
            <p>${repo.description || ""}</p>
          </div>
          <div class="github-meta">
            <span>${repo.stack || ""}</span>
            ${repo.url ? `<a href="${repo.url}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
          </div>
        </article>`
      )
      .join("");
  };

  setText("site-name", data.name);
  setText("hero-title", data.heroTitle);
  setText("hero-role", data.role);
  setText("hero-body", data.heroBody);
  setText("contact-email", data.email);
  setHref("contact-email-link", data.email ? `mailto:${data.email}` : "");
  setHref("contact-linkedin-link", data.linkedin || "");

  renderFeatured();
  renderWork();
  renderSlides();
  renderGithub();

  const initLightbox = () => {
    const existing = document.getElementById("lightbox");
    if (existing) return;

    const overlay = document.createElement("div");
    overlay.id = "lightbox";
    overlay.className = "lightbox";
    overlay.innerHTML = `
      <div class="lightbox-backdrop" data-close="true"></div>
      <div class="lightbox-content" role="dialog" aria-modal="true">
        <button class="lightbox-close" type="button" aria-label="Close" data-close="true">×</button>
        <img class="lightbox-image" src="" alt="" />
        <div class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    const close = () => {
      overlay.classList.remove("open");
      document.body.classList.remove("no-scroll");
    };

    overlay.addEventListener("click", (event) => {
      if (event.target && event.target.getAttribute("data-close") === "true") {
        close();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        close();
      }
    });

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("a[data-lightbox]");
      if (!trigger) return;
      event.preventDefault();
      const img = overlay.querySelector(".lightbox-image");
      const caption = overlay.querySelector(".lightbox-caption");
      const src = trigger.getAttribute("href");
      const title = trigger.getAttribute("data-title") || "";
      img.src = src;
      img.alt = title;
      caption.textContent = title;
      overlay.classList.add("open");
      document.body.classList.add("no-scroll");
    });
  };

  initLightbox();
})();
