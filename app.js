(() => {
  "use strict";

  const data = window.PROMPTS_DATA;

  const state = {
    prompts: (data && data.prompts) || [],
    categories: (data && data.categories) || [],
    activeCategory: "all",
    query: "",
    expanded: new Set(),
  };

  const categoryById = new Map(state.categories.map((c) => [c.id, c]));

  const els = {
    grid: document.getElementById("grid"),
    filters: document.getElementById("filters"),
    search: document.getElementById("search"),
    count: document.getElementById("count"),
    reset: document.getElementById("reset"),
    empty: document.getElementById("empty"),
    toast: document.getElementById("toast"),
    helpModal: document.getElementById("help"),
  };

  function init() {
    if (!state.prompts.length) {
      els.grid.innerHTML =
        `<p class="empty">Promptdata kunne ikke indlæses. Prøv at genindlæse siden.</p>`;
      return;
    }
    buildFilters();
    hydrateFromUrl();
    bindEvents();
    render();
  }

  /* ---------------- URL sync ---------------- */
  function hydrateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    const c = params.get("c");
    if (q) {
      state.query = q;
      els.search.value = q;
    }
    if (c && state.categories.some((x) => x.id === c)) {
      state.activeCategory = c;
    }
    updateChipStates();
  }

  function syncUrl() {
    const params = new URLSearchParams();
    if (state.query) params.set("q", state.query);
    if (state.activeCategory !== "all") params.set("c", state.activeCategory);
    const qs = params.toString();
    const url = qs ? `?${qs}` : window.location.pathname;
    window.history.replaceState(null, "", url);
  }

  /* ---------------- Filters ---------------- */
  function buildFilters() {
    const total = state.prompts.length;
    const catChips = [
      chip("all", "Alle", total, null),
      ...state.categories.map((c) => {
        const count = state.prompts.filter((p) => p.categoryId === c.id).length;
        return chip(c.id, c.name, count, c);
      }),
    ];
    els.filters.innerHTML = catChips.join("");
    els.filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      state.activeCategory = btn.dataset.value;
      updateChipStates();
      syncUrl();
      render();
    });
  }

  function chip(value, label, count, category) {
    const style = category
      ? ` style="--cat-color: ${category.color}"`
      : "";
    const iconHtml = category ? renderIcon(category.icon) : "";
    return (
      `<button class="chip${category ? " chip-cat" : ""}" type="button" ` +
      `data-value="${escapeAttr(value)}" aria-pressed="false"${style}>` +
      iconHtml +
      `<span>${escapeHtml(label)}</span>` +
      `<span class="chip-count">${count}</span>` +
      `</button>`
    );
  }

  function updateChipStates() {
    els.filters.querySelectorAll(".chip").forEach((btn) => {
      btn.setAttribute(
        "aria-pressed",
        btn.dataset.value === state.activeCategory ? "true" : "false"
      );
    });
  }

  /* ---------------- Events ---------------- */
  function bindEvents() {
    els.search.addEventListener("input", (e) => {
      state.query = e.target.value.trim();
      syncUrl();
      render();
    });

    els.reset.addEventListener("click", resetFilters);
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-reset]")) {
        e.preventDefault();
        resetFilters();
      }
      if (e.target.closest("[data-open-help]")) {
        e.preventDefault();
        openHelp();
      }
      if (e.target.closest("[data-close-help]")) {
        e.preventDefault();
        closeHelp();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!els.helpModal.hidden) {
          closeHelp();
        } else if (document.activeElement === els.search && state.query) {
          state.query = "";
          els.search.value = "";
          syncUrl();
          render();
        } else if (document.activeElement === els.search) {
          els.search.blur();
        }
      }
    });
  }

  function resetFilters() {
    state.query = "";
    state.activeCategory = "all";
    els.search.value = "";
    updateChipStates();
    syncUrl();
    render();
  }

  /* ---------------- Help modal ---------------- */
  let lastFocused = null;
  function openHelp() {
    lastFocused = document.activeElement;
    els.helpModal.hidden = false;
    document.body.classList.add("modal-open");
    const closeBtn = els.helpModal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  }
  function closeHelp() {
    els.helpModal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  /* ---------------- Rendering ---------------- */
  function filtered() {
    const q = state.query.toLowerCase();
    return state.prompts.filter((p) => {
      if (
        state.activeCategory !== "all" &&
        p.categoryId !== state.activeCategory
      )
        return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q)
      );
    });
  }

  function render() {
    const list = filtered();
    const total = state.prompts.length;

    if (list.length === total) {
      els.count.innerHTML = `Viser <strong>${total}</strong> prompts`;
    } else {
      els.count.innerHTML = `Viser <strong>${list.length}</strong> af ${total} prompts`;
    }

    const filtersActive =
      state.query !== "" || state.activeCategory !== "all";
    els.reset.hidden = !filtersActive;

    if (list.length === 0) {
      els.grid.innerHTML = "";
      els.empty.hidden = false;
      return;
    }
    els.empty.hidden = true;
    els.grid.innerHTML = list.map(renderCard).join("");
    attachCardHandlers();
  }

  function renderCard(p) {
    const isOpen = state.expanded.has(p.id);
    const q = state.query;
    const title = highlight(p.title, q);
    const body = highlight(p.body, q);
    const cat = escapeHtml(p.categoryName);
    const category = categoryById.get(p.categoryId);
    const color = category ? category.color : "#475569";
    const iconName = category ? category.icon : "sparkle";
    const chatgptUrl = `https://chatgpt.com/?q=${encodeURIComponent(p.body)}`;
    return (
      `<article class="card${isOpen ? " is-expanded" : ""}" data-id="${escapeAttr(p.id)}" style="--cat-color: ${color}">` +
      `<div class="card-head">` +
      `<span class="card-cat" title="${cat}">` +
      renderIcon(iconName) +
      `<span>${cat}</span>` +
      `</span>` +
      `</div>` +
      `<h3 class="card-title">${title}</h3>` +
      `<pre class="card-body">${body}</pre>` +
      `<div class="card-actions">` +
      `<button class="btn btn-primary" type="button" data-action="copy" aria-label="Kopiér prompt">` +
      iconCopy() +
      `<span>Kopiér</span>` +
      `</button>` +
      `<a class="btn btn-secondary" href="${escapeAttr(chatgptUrl)}" target="_blank" rel="noopener" aria-label="Åbn prompt i ChatGPT">` +
      iconExternal() +
      `<span>ChatGPT</span>` +
      `</a>` +
      `<button class="btn btn-expand" type="button" data-action="toggle" aria-expanded="${isOpen}">` +
      `${isOpen ? "Vis mindre" : "Vis prompt"}` +
      `</button>` +
      `</div>` +
      `</article>`
    );
  }

  function attachCardHandlers() {
    els.grid.querySelectorAll(".card").forEach((card) => {
      const id = card.dataset.id;
      card
        .querySelector('[data-action="copy"]')
        .addEventListener("click", () => copyPrompt(id, card));
      card
        .querySelector('[data-action="toggle"]')
        .addEventListener("click", () => togglePrompt(id, card));
    });
  }

  function togglePrompt(id, card) {
    const btn = card.querySelector('[data-action="toggle"]');
    if (state.expanded.has(id)) {
      state.expanded.delete(id);
      card.classList.remove("is-expanded");
      btn.textContent = "Vis prompt";
      btn.setAttribute("aria-expanded", "false");
    } else {
      state.expanded.add(id);
      card.classList.add("is-expanded");
      btn.textContent = "Vis mindre";
      btn.setAttribute("aria-expanded", "true");
    }
  }

  async function copyPrompt(id, card) {
    const prompt = state.prompts.find((p) => p.id === id);
    if (!prompt) return;
    const text = prompt.body;
    try {
      await navigator.clipboard.writeText(text);
      flashCopy(card);
      showToast(`Prompt kopieret – klar til at indsætte`);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        flashCopy(card);
        showToast(`Prompt kopieret – klar til at indsætte`);
      } catch {
        showToast("Kunne ikke kopiere – marker og kopiér manuelt");
      } finally {
        document.body.removeChild(ta);
      }
    }
  }

  function flashCopy(card) {
    const btn = card.querySelector('[data-action="copy"]');
    if (!btn || btn.dataset.busy === "1") return;
    btn.dataset.busy = "1";
    const original = btn.innerHTML;
    btn.classList.add("is-success");
    btn.innerHTML = iconCheck() + "<span>Kopieret</span>";
    setTimeout(() => {
      btn.classList.remove("is-success");
      btn.innerHTML = original;
      delete btn.dataset.busy;
    }, 1600);
  }

  /* ---------------- Toast ---------------- */
  let toastTimer = null;
  function showToast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      els.toast.classList.remove("is-visible");
    }, 2000);
  }

  /* ---------------- Utilities ---------------- */
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c])
    );
  }
  function escapeAttr(str) {
    return escapeHtml(str);
  }
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function highlight(text, query) {
    const safe = escapeHtml(text);
    if (!query) return safe;
    try {
      const re = new RegExp(escapeRegex(query), "gi");
      return safe.replace(re, (m) => `<mark>${m}</mark>`);
    } catch {
      return safe;
    }
  }

  /* ---------------- Icons ---------------- */
  function svg(paths, strokeWidth) {
    const sw = strokeWidth || 2;
    return (
      `<svg class="cat-icon" width="14" height="14" viewBox="0 0 24 24" ` +
      `fill="none" stroke="currentColor" stroke-width="${sw}" ` +
      `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">` +
      paths +
      `</svg>`
    );
  }

  const ICONS = {
    search:
      `<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`,
    notes:
      `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>` +
      `<polyline points="14 2 14 8 20 8"/>` +
      `<line x1="8" y1="13" x2="16" y2="13"/>` +
      `<line x1="8" y1="17" x2="13" y2="17"/>`,
    user:
      `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>` +
      `<circle cx="12" cy="7" r="4"/>`,
    briefcase:
      `<rect x="2" y="7" width="20" height="14" rx="2"/>` +
      `<path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>`,
    document:
      `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>` +
      `<polyline points="14 2 14 8 20 8"/>`,
    shield:
      `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
    wrench:
      `<path d="M14.7 6.3a4 4 0 0 0 5 5L22 14l-8 8-8-8 2.7-2.3a4 4 0 0 0 6-5z"/>`,
    chat:
      `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
    book:
      `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>` +
      `<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`,
    table:
      `<rect x="3" y="3" width="18" height="18" rx="2"/>` +
      `<line x1="3" y1="9" x2="21" y2="9"/>` +
      `<line x1="3" y1="15" x2="21" y2="15"/>` +
      `<line x1="9" y1="3" x2="9" y2="21"/>` +
      `<line x1="15" y1="3" x2="15" y2="21"/>`,
    team:
      `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>` +
      `<circle cx="9" cy="7" r="4"/>` +
      `<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>` +
      `<path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
    lock:
      `<rect x="3" y="11" width="18" height="11" rx="2"/>` +
      `<path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
    sparkle:
      `<path d="M12 3v4"/>` +
      `<path d="M12 17v4"/>` +
      `<path d="M3 12h4"/>` +
      `<path d="M17 12h4"/>` +
      `<path d="M5.6 5.6l2.8 2.8"/>` +
      `<path d="M15.6 15.6l2.8 2.8"/>` +
      `<path d="M5.6 18.4l2.8-2.8"/>` +
      `<path d="M15.6 8.4l2.8-2.8"/>`,
  };

  function renderIcon(name) {
    const paths = ICONS[name] || ICONS.sparkle;
    return svg(paths);
  }

  function iconCopy() {
    return (
      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" ` +
      `stroke="currentColor" stroke-width="2" stroke-linecap="round" ` +
      `stroke-linejoin="round" aria-hidden="true">` +
      `<rect x="9" y="9" width="13" height="13" rx="2"/>` +
      `<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>` +
      `</svg>`
    );
  }
  function iconCheck() {
    return (
      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" ` +
      `stroke="currentColor" stroke-width="2.5" stroke-linecap="round" ` +
      `stroke-linejoin="round" aria-hidden="true">` +
      `<polyline points="20 6 9 17 4 12"/>` +
      `</svg>`
    );
  }
  function iconExternal() {
    return (
      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" ` +
      `stroke="currentColor" stroke-width="2" stroke-linecap="round" ` +
      `stroke-linejoin="round" aria-hidden="true">` +
      `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>` +
      `<polyline points="15 3 21 3 21 9"/>` +
      `<line x1="10" y1="14" x2="21" y2="3"/>` +
      `</svg>`
    );
  }

  init();
})();
