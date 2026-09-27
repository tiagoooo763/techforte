// ==========================================================================
// TECH FORTE JANAÚBA - SCRIPTS PRINCIPAIS E INTERATIVIDADE
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  renderCategories();
  renderPhones("all");
  renderElectronics();
  renderPerfumes();
  renderAccessories();
  renderTechnicalServices();
  renderLaserServices();
  renderDifferentials();
  renderReviews();
  renderInstagram();
  initFilterTabs();
  initMobileDrawer();
  initDynamicWhatsAppLinks();
});

// 1. Header scroll effect
function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// 2. Renderizar Categorias Principais
function renderCategories() {
  const container = document.getElementById("categories-container");
  if (!container || !STORE_DATA.categories) return;

  container.innerHTML = STORE_DATA.categories
    .map(
      (cat) => `
      <div class="category-card">
        <div class="category-image-wrap">
          <img src="${cat.image}" alt="${cat.title}" loading="lazy" />
          <span class="category-badge">${cat.badge}</span>
        </div>
        <div class="category-body">
          <h3 class="category-title">${cat.title}</h3>
          <p class="category-desc">${cat.description}</p>
          <a href="${cat.anchor}" class="btn btn-outline btn-sm">
            Ver categoria
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    `
    )
    .join("");
}

// 3. Renderizar Vitrine de Celulares com Filtro
function renderPhones(filter = "all") {
  const container = document.getElementById("phones-container");
  if (!container || !STORE_DATA.phones) return;

  const filteredPhones =
    filter === "all"
      ? STORE_DATA.phones
      : STORE_DATA.phones.filter((phone) => phone.category === filter);

  container.innerHTML = filteredPhones
    .map((phone) => {
      const waMsg = `Olá! Gostaria de saber mais sobre o ${phone.name} anunciado no site da TECH FORTE.`;
      const waLink = STORE_CONFIG.getWhatsAppLink(waMsg);

      const specsHtml = phone.specs
        ? phone.specs
            .map((spec) => `<span class="spec-chip">${spec}</span>`)
            .join("")
        : "";

      return `
        <div class="product-card" data-category="${phone.category}">
          <div class="product-image-wrap">
            <span class="product-tag">${phone.tag}</span>
            <img src="${phone.image}" alt="${phone.name}" loading="lazy" />
          </div>
          <div class="product-body">
            <span class="product-category-label">${phone.categoryLabel}</span>
            <h3 class="product-title">${phone.name}</h3>
            <p class="product-desc">${phone.description}</p>
            <div class="product-specs-list">
              ${specsHtml}
            </div>
            <div class="product-footer">
              <div class="product-price-box">
                <span class="product-price-label">Valores e estoque:</span>
                <span class="product-price-value">${phone.priceLabel}</span>
              </div>
              <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                Tenho interesse
              </a>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

// 4. Inicializar Filtros de Celulares
function initFilterTabs() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderPhones(category);
    });
  });
}

// 5. Renderizar Eletrônicos
function renderElectronics() {
  const container = document.getElementById("electronics-container");
  if (!container || !STORE_DATA.electronics) return;

  container.innerHTML = STORE_DATA.electronics
    .map((item) => {
      const waMsg = `Olá! Vim pelo site da TECH FORTE e gostaria de saber sobre ${item.name}.`;
      const waLink = STORE_CONFIG.getWhatsAppLink(waMsg);

      return `
      <div class="electronics-card">
        <div class="image-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="card-body">
          <span class="product-category-label">${item.category}</span>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="product-footer">
            <span class="product-price-value" style="font-size: 0.8125rem; color: var(--color-text-muted);">${item.priceLabel}</span>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              Quero saber mais
            </a>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

// 6. Renderizar Perfumes Árabes
function renderPerfumes() {
  const container = document.getElementById("perfumes-container");
  if (!container || !STORE_DATA.perfumes) return;

  container.innerHTML = STORE_DATA.perfumes
    .map((perfume) => {
      const waMsg = `Olá! Gostaria de conhecer os perfumes árabes da categoria ${perfume.categoryLabel} disponíveis na TECH FORTE.`;
      const waLink = STORE_CONFIG.getWhatsAppLink(waMsg);

      return `
      <div class="perfume-card">
        <div class="perfume-image-wrap">
          <span class="perfume-tag">${perfume.tag}</span>
          <img src="${perfume.image}" alt="${perfume.name}" loading="lazy" />
        </div>
        <div class="perfume-body">
          <span class="perfume-category">${perfume.categoryLabel}</span>
          <h3 class="perfume-title">${perfume.name}</h3>
          <p class="perfume-desc">${perfume.description}</p>
          <div class="product-footer" style="border-top-color: rgba(255,255,255,0.1);">
            <span style="font-size: 0.8125rem; color: #94a3b8;">${perfume.priceLabel}</span>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
              Conhecer perfumes
            </a>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

// 7. Renderizar Acessórios
function renderAccessories() {
  const container = document.getElementById("accessories-container");
  if (!container || !STORE_DATA.accessories) return;

  container.innerHTML = STORE_DATA.accessories
    .map((acc) => {
      const waMsg = `Olá! Vim pelo site da TECH FORTE e gostaria de ver opções de ${acc.name}.`;
      const waLink = STORE_CONFIG.getWhatsAppLink(waMsg);

      return `
      <div class="accessory-card">
        <div class="accessory-image-wrap">
          <img src="${acc.image}" alt="${acc.name}" loading="lazy" />
        </div>
        <div class="accessory-body">
          <h3 class="accessory-title">${acc.name}</h3>
          <p class="accessory-desc">${acc.description}</p>
          <div style="margin-top: 14px;">
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="width: 100%; justify-content: center;">
              Consultar modelos
            </a>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

// 8. Renderizar Assistência Técnica
function renderTechnicalServices() {
  const container = document.getElementById("services-container");
  if (!container || !STORE_DATA.technicalServices) return;

  container.innerHTML = STORE_DATA.technicalServices
    .map((srv) => {
      return `
      <div class="service-card">
        <div class="service-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
        <h3 class="service-title">${srv.title}</h3>
        <p class="service-desc">${srv.desc}</p>
      </div>
    `;
    })
    .join("");
}

// 9. Renderizar Personalização e Gravação a Laser
function renderLaserServices() {
  const container = document.getElementById("laser-features-container");
  if (!container || !STORE_DATA.personalizationServices) return;

  container.innerHTML = STORE_DATA.personalizationServices
    .map((item) => {
      return `
      <div class="laser-item">
        <div class="laser-check">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <div>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    `;
    })
    .join("");
}

// 10. Renderizar Diferenciais
function renderDifferentials() {
  const container = document.getElementById("differentials-container");
  if (!container || !STORE_DATA.differentials) return;

  const icons = {
    users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    layers: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    tool: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    award: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    "map-pin": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
  };

  container.innerHTML = STORE_DATA.differentials
    .map((diff) => {
      return `
      <div class="differential-card">
        <div class="diff-icon">
          ${icons[diff.icon] || icons.users}
        </div>
        <h4>${diff.title}</h4>
        <p>${diff.desc}</p>
      </div>
    `;
    })
    .join("");
}

// 11. Renderizar Avaliações Google
function renderReviews() {
  const container = document.getElementById("reviews-container");
  if (!container || !STORE_DATA.reviews) return;

  container.innerHTML = STORE_DATA.reviews
    .map((rev) => {
      return `
      <div class="review-card">
        <div>
          <div class="review-stars">★★★★★</div>
          <p class="review-text">"${rev.text}"</p>
        </div>
        <div class="review-author">
          <div class="author-avatar">★</div>
          <div class="author-info">
            <h5>${rev.author}</h5>
            <span>${rev.source}</span>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

// 12. Renderizar Instagram Gallery
function renderInstagram() {
  const container = document.getElementById("instagram-container");
  if (!container || !STORE_DATA.instagramPosts) return;

  container.innerHTML = STORE_DATA.instagramPosts
    .map((post) => {
      return `
      <a href="${STORE_CONFIG.instagramUrl}" target="_blank" rel="noopener noreferrer" class="instagram-card">
        <img src="${post.image}" alt="Instagram Post Tech Forte" loading="lazy" />
        <div class="instagram-overlay">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <p>${post.caption}</p>
        </div>
      </a>
    `;
    })
    .join("");
}

// 13. Menu Mobile Drawer
function initMobileDrawer() {
  const openBtn = document.getElementById("mobile-menu-open");
  const closeBtn = document.getElementById("mobile-menu-close");
  const drawer = document.getElementById("mobile-nav-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });
}

// 14. Inicializar Links Dinâmicos de WhatsApp e Redes
function initDynamicWhatsAppLinks() {
  // Atualiza links com data-wa-msg
  document.querySelectorAll("[data-wa-type]").forEach((elem) => {
    const type = elem.getAttribute("data-wa-type");
    let msg = "Olá! Vim pelo site da TECH FORTE.";

    if (type === "hero") {
      msg = "Olá! Vim pelo site da TECH FORTE e gostaria de conhecer os produtos e opções disponíveis.";
    } else if (type === "assistencia") {
      msg = "Olá! Gostaria de solicitar um orçamento para o reparo do meu celular.";
    } else if (type === "personalizacao") {
      msg = "Olá! Gostaria de saber mais sobre os serviços de personalização e gravação a laser.";
    } else if (type === "perfumes") {
      msg = "Olá! Gostaria de conhecer os perfumes árabes disponíveis na TECH FORTE.";
    } else if (type === "contato") {
      msg = "Olá! Gostaria de falar com o atendimento da TECH FORTE JANAÚBA.";
    }

    elem.setAttribute("href", STORE_CONFIG.getWhatsAppLink(msg));
  });

  // Atualiza link flutuante do WhatsApp
  const floatingWa = document.getElementById("floating-whatsapp-btn");
  if (floatingWa) {
    floatingWa.setAttribute(
      "href",
      STORE_CONFIG.getWhatsAppLink("Olá! Vim pelo site da TECH FORTE e gostaria de atendimento.")
    );
  }
}
