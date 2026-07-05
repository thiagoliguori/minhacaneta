// ============================================================
// compareGLP-1 - renderizacao, filtros, modal e seletor de dose
// ============================================================

const grid = document.getElementById("product-grid");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

let filtroIndicacao = "todos";
let filtroVia = "todas";
let ordenacao = "preco";

// ---------- helpers ----------
const fmt = (v) =>
  v == null ? null : v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

// custo mensal estimado de uma dose = preço / semanas * 4,33
function custoMensal(d) {
  if (d.precoMin == null) return null;
  return (d.precoMin / d.semanas) * 4.33;
}

function menorCustoMensal(p) {
  const custos = p.doses.map(custoMensal).filter((c) => c != null);
  return custos.length ? Math.min(...custos) : null;
}

// ---------- cards ----------
function renderGrid() {
  let lista = PRODUTOS.filter((p) => {
    const okInd = filtroIndicacao === "todos" || p.indicacoes.includes(filtroIndicacao);
    const okVia = filtroVia === "todas" || p.via === filtroVia;
    return okInd && okVia;
  });

  lista.sort((a, b) => {
    if (ordenacao === "nome") return a.nome.localeCompare(b.nome);
    const ca = menorCustoMensal(a), cb = menorCustoMensal(b);
    if (ca == null && cb == null) return 0;
    if (ca == null) return 1;
    if (cb == null) return -1;
    return ca - cb;
  });

  grid.innerHTML = lista
    .map((p, i) => {
      const custo = menorCustoMensal(p);
      const preco = custo
        ? `<span class="from">custo mensal a partir de</span><div><span class="value">${fmt(custo)}</span> <span class="per">/mês</span></div>`
        : `<span class="from">custo mensal</span><div><span class="value">em breve</span></div>`;
      return `
      <article class="card" style="--i:${i}" data-id="${p.id}" tabindex="0" role="button" aria-label="Ver detalhes de ${p.nome}">
        <div class="card-visual" style="background:${p.cor}">
          ${svgProduto(p)}
          <div class="card-badges">${p.badges.map((b) => `<span class="badge${b === "Nacional" ? " badge-green" : ""}">${b}</span>`).join("")}</div>
        </div>
        <div class="card-content">
          <span class="card-kicker">${p.substancia} · ${p.viaLabel}</span>
          <h3>${p.nome}</h3>
          <span class="card-maker">${p.fabricante} · ${p.indicacaoLabel}</span>
          <div class="card-price">${preco}</div>
          <span class="card-cta">Ver preços e onde comprar →</span>
        </div>
      </article>`;
    })
    .join("");

  grid.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(card.dataset.id); }
    });
  });
}

// ---------- animação de número (count-up/down) ----------
function animateValue(el, from, to, dur = 450) {
  if (from === to || from == null) { el.textContent = fmt(to); return; }
  const t0 = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic
  function frame(now) {
    const t = Math.min(1, (now - t0) / dur);
    el.textContent = fmt(from + (to - from) * ease(t));
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  // garante o valor final mesmo se rAF for suprimido (aba em segundo plano)
  setTimeout(() => { el.textContent = fmt(to); }, dur + 80);
}

// ---------- modal + seletor de dose ----------
let doseAtualValor = null;

function renderDose(p, idx, animate = true) {
  const d = p.doses[idx];
  const custo = custoMensal(d);

  const label = document.getElementById("dose-label");
  const apres = document.getElementById("dose-apres");
  const preco = document.getElementById("dose-preco");
  const caixa = document.getElementById("dose-caixa");
  const range = document.getElementById("dose-range");

  label.textContent = d.dose;
  apres.textContent = d.apresentacao;
  caixa.textContent =
    d.precoMin != null
      ? `Preço da caixa/caneta: ${fmt(d.precoMin)}${d.precoMax && d.precoMax !== d.precoMin ? " a " + fmt(d.precoMax) : ""}`
      : "Preço em levantamento";

  // preenchimento do trilho
  const pct = p.doses.length > 1 ? (idx / (p.doses.length - 1)) * 100 : 0;
  range.style.setProperty("--fill", pct + "%");

  // ticks ativos
  document.querySelectorAll(".dose-tick").forEach((t, i) => {
    t.classList.toggle("active", i === idx);
    t.classList.toggle("passed", i < idx);
  });

  // pulso + contagem animada
  if (animate) {
    preco.parentElement.classList.remove("pulse");
    void preco.parentElement.offsetWidth; // reinicia a animação
    preco.parentElement.classList.add("pulse");
    animateValue(preco, doseAtualValor, custo);
  } else {
    preco.textContent = custo != null ? fmt(custo) : "-";
  }
  doseAtualValor = custo;
}

function openModal(id) {
  const p = PRODUTOS.find((x) => x.id === id);
  if (!p) return;
  if (window.track) window.track("abrir_produto", { produto: p.nome });

  const parceiros = p.parceiros
    .map(
      (pt) => `
      <a class="partner" href="${pt.url}" target="_blank" rel="noopener sponsored">
        <div class="partner-info">
          <strong>${pt.nome}</strong>
          <span>${pt.obs || (pt.tipo === "programa" ? "Programa oficial do fabricante" : "Drogaria online")}</span>
          ${pt.tipo === "programa" ? '<span class="partner-tag-programa">Programa oficial</span>' : ""}
        </div>
        <div class="partner-price">
          ${pt.preco != null ? `<strong>${fmt(pt.preco)}</strong><span>menor preço</span>` : ""}
        </div>
        <span class="partner-go">Comprar →</span>
      </a>`
    )
    .join("");

  const ticks = p.doses
    .map((d, i) => `<span class="dose-tick" data-idx="${i}"><i></i><em>${d.dose.split(" ")[0]}</em></span>`)
    .join("");

  modalBody.innerHTML = `
    <div class="modal-visual" style="background:${p.cor}">${svgProduto(p, { rot: -14 })}</div>
    <span class="card-kicker">${p.substancia} · ${p.viaLabel}</span>
    <h2 id="modal-title">${p.nome}</h2>
    <p class="modal-maker">${p.fabricante}</p>
    <div class="modal-tags">
      <span class="tag">${p.indicacaoLabel}</span>
      <span class="tag">${p.viaLabel}</span>
      ${p.badges.map((b) => `<span class="tag">${b}</span>`).join("")}
    </div>
    <p class="modal-desc">${p.descricao}</p>

    <h3 class="modal-section-title">Escolha a dose e veja o custo</h3>
    <div class="dose-selector">
      <div class="dose-readout">
        <div class="dose-info">
          <strong id="dose-label"></strong>
          <span id="dose-apres"></span>
        </div>
        <div class="dose-mensal">
          <span class="from">custo mensal estimado</span>
          <div class="dose-valor"><strong id="dose-preco"></strong><span>/mês</span></div>
        </div>
      </div>
      <input type="range" id="dose-range" min="0" max="${p.doses.length - 1}" step="1" value="0" aria-label="Selecionar dose">
      <div class="dose-ticks">${ticks}</div>
      <p class="dose-caixa" id="dose-caixa"></p>
    </div>

    <div class="rx-box">
      <span class="rx-icon">🩺</span>
      <p><strong>Receita obrigatória.</strong> Para comprar qualquer GLP-1 é necessário passar em consulta médica e apresentar receita válida, que será verificada e retida pela farmácia. A dose é sempre definida pelo seu médico. O seletor acima serve apenas para simular custos.</p>
    </div>

    <h3 class="modal-section-title">Onde comprar</h3>
    <div class="partner-list">${parceiros}</div>

    <p class="modal-disclaimer">Preços de referência coletados nas drogarias parceiras em ${DATA_ATUALIZACAO}; podem variar por região e estoque. Este site é um comparador independente e não vende medicamentos.</p>
  `;

  // liga o seletor de dose
  doseAtualValor = null;
  const range = document.getElementById("dose-range");
  renderDose(p, 0, false);
  range.addEventListener("input", () => renderDose(p, parseInt(range.value, 10)));
  range.addEventListener("change", () => {
    if (window.track) window.track("usar_seletor_dose", { produto: p.nome, dose: p.doses[parseInt(range.value, 10)]?.dose });
  });
  document.querySelectorAll(".dose-tick").forEach((t) => {
    t.addEventListener("click", () => {
      range.value = t.dataset.idx;
      renderDose(p, parseInt(t.dataset.idx, 10));
    });
  });

  // clique em "Comprar" (parceiro) — o evento mais importante: saída para a drogaria/programa
  modalBody.querySelectorAll(".partner").forEach((el, i) => {
    el.addEventListener("click", () => {
      if (window.track) window.track("clique_comprar", { produto: p.nome, parceiro: p.parceiros[i]?.nome, tipo: p.parceiros[i]?.tipo });
    });
  });

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

// ---------- filtros ----------
document.querySelectorAll("#filter-indicacao .chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#filter-indicacao .chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    filtroIndicacao = chip.dataset.filter;
    if (window.track) window.track("filtro_indicacao", { valor: filtroIndicacao });
    renderGrid();
  });
});
document.querySelectorAll("#filter-via .chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#filter-via .chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    filtroVia = chip.dataset.via;
    if (window.track) window.track("filtro_via", { valor: filtroVia });
    renderGrid();
  });
});
document.getElementById("sort").addEventListener("change", (e) => {
  ordenacao = e.target.value;
  if (window.track) window.track("ordenar", { valor: ordenacao });
  renderGrid();
});

// ---------- hero ----------
function renderHero() {
  const sema = PRODUTOS.filter((p) => p.substancia === "Semaglutida").map(menorCustoMensal).filter(Boolean);
  const tirze = PRODUTOS.filter((p) => p.substancia === "Tirzepatida").map(menorCustoMensal).filter(Boolean);
  document.getElementById("hero-price-sema").textContent = sema.length ? fmt(Math.min(...sema)) : "R$ -";
  document.getElementById("hero-price-tirze").textContent = tirze.length ? fmt(Math.min(...tirze)) : "R$ -";
  document.getElementById("data-atualizacao").textContent = DATA_ATUALIZACAO;

  // faixa de credibilidade (dados reais)
  const nProgramas = new Set(
    PRODUTOS.flatMap((p) => p.parceiros.filter((pt) => pt.tipo === "programa").map((pt) => pt.nome))
  ).size;
  const elMed = document.getElementById("stat-medicamentos");
  const elProg = document.getElementById("stat-programas");
  if (elMed) elMed.textContent = PRODUTOS.length;
  if (elProg) elProg.textContent = nProgramas;
}

// ---------- movimento: revelar seções ao rolar ----------
function setupReveal() {
  const targets = [
    ...document.querySelectorAll(
      ".trust-stat, .section-head, .step, .lifestyle-card, .rx-banner, .faq-item, .grid-disclaimer"
    ),
  ];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealNow = (el, i = 0) => {
    el.style.setProperty("--reveal-delay", (i % 4) * 80 + "ms");
    el.classList.add("in");
  };

  targets.forEach((el) => el.classList.add("reveal"));

  // sem observer ou com movimento reduzido: mostra tudo já
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        // escalona irmãos próximos (ex.: os 3 steps, os 3 cards de estilo de vida)
        const sibs = el.parentElement
          ? [...el.parentElement.children].filter((c) => c.classList.contains("reveal"))
          : [el];
        revealNow(el, Math.max(0, sibs.indexOf(el)));
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  targets.forEach((el) => io.observe(el));

  // revela imediatamente o que já está visível no carregamento
  const vh = window.innerHeight;
  targets.forEach((el, i) => {
    if (el.getBoundingClientRect().top < vh * 0.9) revealNow(el, i);
  });

  // failsafe: garante visibilidade mesmo se o observer não disparar
  setTimeout(() => targets.forEach((el) => el.classList.add("in")), 1600);
}

renderHero();
renderGrid();
setupReveal();
