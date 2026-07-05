// ============================================================
// Camada de analytics do minhacaneta
// Envia eventos nomeados para o provedor que estiver carregado
// (Umami, Plausible ou Google Analytics). Cookieless, sem dados
// pessoais — só nomes de eventos e propriedades não sensíveis.
// Se nenhum provedor estiver configurado, os eventos são apenas
// ignorados silenciosamente (nada quebra).
// ============================================================
window.track = function (evento, props) {
  try {
    if (window.umami && typeof window.umami.track === "function") {
      window.umami.track(evento, props || {});
    }
    if (typeof window.plausible === "function") {
      window.plausible(evento, props ? { props: props } : undefined);
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", evento, props || {});
    }
  } catch (e) {
    /* nunca deixa analytics quebrar o site */
  }
};

// ---- eventos de elementos estáticos (já existem no HTML) ----
(function () {
  const liga = function (sel, evento, propsFn) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.addEventListener("click", function () {
        window.track(evento, propsFn ? propsFn(el) : undefined);
      });
    });
  };

  // CTAs principais
  liga(".header .btn", "cta_ver_precos", function () { return { origem: "header" }; });
  liga(".hero-actions a.btn-dark", "cta_comparar", function () { return { origem: "hero" }; });
  liga(".hero-actions a.btn-ghost", "cta_como_calculamos");
  liga(".nav a", "nav_click", function (el) { return { item: el.textContent.trim() }; });

  // FAQ — dispara quando o item é aberto
  document.querySelectorAll(".faq-item").forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        const q = item.querySelector("summary");
        window.track("abrir_faq", { pergunta: q ? q.textContent.trim().slice(0, 80) : "" });
      }
    });
  });
})();
