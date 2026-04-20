(() => {
  "use strict";

  const data = window.PROMPTS_DATA;

  const state = {
    prompts: (data && data.prompts) || [],
    categories: (data && data.categories) || [],
    industries: (data && data.industries) || [],
    activeCategory: "all",
    activeIndustry: "all",
    query: "",
    expanded: new Set(),
  };

  const els = {
    grid: document.getElementById("grid"),
    filters: document.getElementById("filters"),
    industries: document.getElementById("industries"),
    industryGroup: document.getElementById("industry-group"),
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
    const b = params.get("b");
    if (q) {
      state.query = q;
      els.search.value = q;
    }
    if (c && state.categories.some((x) => x.id === c)) {
      state.activeCategory = c;
    }
    if (b && state.industries.some((x) => x.id === b)) {
      state.activeIndustry = b;
    }
    updateChipStates();
  }

  function syncUrl() {
    const params = new URLSearchParams();
    if (state.query) params.set("q", state.query);
    if (state.activeCategory !== "all") params.set("c", state.activeCategory);
    if (state.activeIndustry !== "all") params.set("b", state.activeIndustry);
    const qs = params.toString();
    const url = qs ? `?${qs}` : window.location.pathname;
    window.history.replaceState(null, "", url);
  }

  /* ---------------- Filters ---------------- */
  function buildFilters() {
    // Category chips
    const total = state.prompts.length;
    const catChips = [
      chip("all", "Alle", total, "cat"),
      ...state.categories.map((c) => {
        const count = state.prompts.filter((p) => p.categoryId === c.id).length;
        return chip(c.id, `${c.id}. ${c.name}`, count, "cat");
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

    // Industry chips
    if (state.industries.length) {
      const indTotal = state.prompts.filter((p) => p.industryId).length;
      const indChips = [
        chip("all", "Alle brancher", indTotal, "ind"),
        ...state.industries.map((i) => {
          const count = state.prompts.filter((p) => p.industryId === i.id).length;
          return chip(i.id, i.name, count, "ind");
        }),
      ];
      els.industries.innerHTML = indChips.join("");
      els.industries.addEventListener("click", (e) => {
        const btn = e.target.closest(".chip");
        if (!btn) return;
        state.activeIndustry = btn.dataset.value;
        updateChipStates();
        syncUrl();
        render();
      });
      els.industryGroup.hidden = false;
    }
  }

  function chip(value, label, count, kind) {
    return (
      `<button class="chip" type="button" data-value="${escapeAttr(value)}" ` +
      `data-kind="${kind}" aria-pressed="false">` +
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
    if (els.industries) {
      els.industries.querySelectorAll(".chip").forEach((btn) => {
        btn.setAttribute(
          "aria-pressed",
          btn.dataset.value === state.activeIndustry ? "true" : "false"
        );
      });
    }
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
    state.activeIndustry = "all";
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
    // Focus the close button so Esc / Enter works immediately.
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
      if (
        state.activeIndustry !== "all" &&
        p.industryId !== state.activeIndustry
      )
        return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        (p.industryName && p.industryName.toLowerCase().includes(q))
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
      state.query !== "" ||
      state.activeCategory !== "all" ||
      state.activeIndustry !== "all";
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
    const ind = p.industryName ? escapeHtml(p.industryName) : null;
    const indBadge = ind
      ? `<span class="card-ind" title="Branche: ${ind}">${ind}</span>`
      : "";
    return (
      `<article class="card${isOpen ? " is-expanded" : ""}" data-id="${escapeAttr(p.id)}">` +
      `<div class="card-head">` +
      `<span class="card-cat" title="${cat}">${cat}</span>` +
      indBadge +
      `</div>` +
      `<h3 class="card-title">${title}</h3>` +
      `<pre class="card-body">${body}</pre>` +
      `<div class="card-actions">` +
      `<button class="btn btn-primary" type="button" data-action="copy" aria-label="Kopiér prompt">` +
      iconCopy() +
      `<span>Kopiér</span>` +
      `</button>` +
      `<button class="btn btn-secondary" type="button" data-action="chatgpt" aria-label="Åbn prompt i ChatGPT">` +
      iconExternal() +
      `<span>Åbn i ChatGPT</span>` +
      `</button>` +
      `<button class="btn btn-expand" type="button" data-action="toggle" aria-expanded="${isOpen}">` +
      `${isOpen ? "Vis mindre" : "Vis hele"}` +
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
        .querySelector('[data-action="chatgpt"]')
        .addEventListener("click", () => openInChatGPT(id));
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
      btn.textContent = "Vis hele";
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

  function openInChatGPT(id) {
    const prompt = state.prompts.find((p) => p.id === id);
    if (!prompt) return;
    const url = `https://chatgpt.com/?q=${encodeURIComponent(prompt.body)}`;
    window.open(url, "_blank", "noopener");
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
