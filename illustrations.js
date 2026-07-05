// ============================================================
// Ilustrações SVG estilo editorial (Hims-like) — canetas e
// comprimidos desenhados, sem uso de imagens de embalagens
// (RDC 96/2008 restringe fotos de medicamentos tarja vermelha)
// ============================================================

function svgPen(accent, opts = {}) {
  const rot = opts.rot ?? -8;
  const label = opts.label ?? "";
  return `
  <svg class="illus illus-pen" viewBox="0 0 120 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g transform="rotate(${rot} 60 130)">
      <ellipse cx="60" cy="242" rx="30" ry="7" fill="rgba(32,28,23,0.10)"/>
      <!-- clipe da tampa -->
      <rect x="70" y="16" width="7" height="30" rx="3.5" fill="${accent}" opacity="0.85"/>
      <!-- tampa -->
      <rect x="42" y="10" width="36" height="58" rx="16" fill="${accent}"/>
      <!-- corpo -->
      <rect x="42" y="70" width="36" height="132" rx="15" fill="#fffdf9" stroke="rgba(32,28,23,0.14)" stroke-width="1.5"/>
      <!-- faixa de rótulo -->
      <rect x="43" y="92" width="34" height="34" fill="${accent}" opacity="0.22"/>
      <rect x="50" y="102" width="20" height="3.5" rx="1.75" fill="rgba(32,28,23,0.35)"/>
      <rect x="50" y="110" width="14" height="3.5" rx="1.75" fill="rgba(32,28,23,0.22)"/>
      <!-- janela de dose -->
      <rect x="51" y="142" width="18" height="26" rx="4" fill="#f2ece2" stroke="rgba(32,28,23,0.18)" stroke-width="1.2"/>
      <line x1="55" y1="150" x2="65" y2="150" stroke="rgba(32,28,23,0.30)" stroke-width="1.4"/>
      <line x1="55" y1="156" x2="63" y2="156" stroke="rgba(32,28,23,0.20)" stroke-width="1.4"/>
      <line x1="55" y1="162" x2="65" y2="162" stroke="rgba(32,28,23,0.30)" stroke-width="1.4"/>
      <!-- seletor -->
      <rect x="49" y="202" width="22" height="12" rx="5" fill="${accent}" opacity="0.9"/>
      <rect x="56" y="214" width="8" height="18" rx="4" fill="rgba(32,28,23,0.30)"/>
      ${label ? `<text x="60" y="188" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="rgba(32,28,23,0.45)">${label}</text>` : ""}
    </g>
  </svg>`;
}

function svgPill(accent) {
  return `
  <svg class="illus illus-pill" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="80" cy="138" rx="44" ry="8" fill="rgba(32,28,23,0.10)"/>
    <!-- comprimido grande -->
    <circle cx="66" cy="76" r="36" fill="#fffdf9" stroke="rgba(32,28,23,0.15)" stroke-width="1.5"/>
    <line x1="40" y1="76" x2="92" y2="76" stroke="rgba(32,28,23,0.18)" stroke-width="2" stroke-linecap="round"/>
    <path d="M 66 48 A 28 28 0 0 1 94 76" fill="none" stroke="rgba(32,28,23,0.08)" stroke-width="6" stroke-linecap="round"/>
    <!-- comprimido menor -->
    <circle cx="110" cy="102" r="24" fill="${accent}" opacity="0.85"/>
    <path d="M 110 84 A 18 18 0 0 1 128 102" fill="none" stroke="rgba(255,253,249,0.5)" stroke-width="4" stroke-linecap="round"/>
  </svg>`;
}

// Foto da caneta/comprimido (PNG transparente, estilo Hims flutuando).
function svgProduto(p, opts = {}) {
  return `<img class="pen-img" src="img/pens/${p.id}.png" alt="${p.nome}">`;
}

// Composição do hero: três canetas + comprimido
function svgHero() {
  return `
  <svg class="illus illus-hero" viewBox="0 0 420 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="210" cy="330" rx="150" ry="14" fill="rgba(32,28,23,0.08)"/>
    <!-- caneta 1 (verde) -->
    <g transform="rotate(-10 120 200) translate(48 60)">
      <rect x="42" y="10" width="36" height="58" rx="16" fill="#4a6741"/>
      <rect x="70" y="16" width="7" height="30" rx="3.5" fill="#4a6741" opacity="0.85"/>
      <rect x="42" y="70" width="36" height="152" rx="15" fill="#fffdf9" stroke="rgba(32,28,23,0.14)" stroke-width="1.5"/>
      <rect x="43" y="92" width="34" height="36" fill="#4a6741" opacity="0.20"/>
      <rect x="51" y="150" width="18" height="26" rx="4" fill="#f2ece2" stroke="rgba(32,28,23,0.18)" stroke-width="1.2"/>
      <line x1="55" y1="158" x2="65" y2="158" stroke="rgba(32,28,23,0.30)" stroke-width="1.4"/>
      <line x1="55" y1="166" x2="65" y2="166" stroke="rgba(32,28,23,0.30)" stroke-width="1.4"/>
      <rect x="49" y="222" width="22" height="12" rx="5" fill="#4a6741" opacity="0.9"/>
    </g>
    <!-- caneta 2 (caramelo, maior, central) -->
    <g transform="rotate(6 220 180) translate(160 20)">
      <rect x="42" y="10" width="40" height="64" rx="18" fill="#8a5a2f"/>
      <rect x="73" y="18" width="7" height="32" rx="3.5" fill="#8a5a2f" opacity="0.85"/>
      <rect x="42" y="76" width="40" height="178" rx="17" fill="#fffdf9" stroke="rgba(32,28,23,0.14)" stroke-width="1.5"/>
      <rect x="43" y="102" width="38" height="40" fill="#8a5a2f" opacity="0.20"/>
      <rect x="52" y="108" width="22" height="4" rx="2" fill="rgba(32,28,23,0.35)"/>
      <rect x="52" y="117" width="16" height="4" rx="2" fill="rgba(32,28,23,0.22)"/>
      <rect x="53" y="168" width="20" height="30" rx="4" fill="#f2ece2" stroke="rgba(32,28,23,0.18)" stroke-width="1.2"/>
      <line x1="58" y1="177" x2="68" y2="177" stroke="rgba(32,28,23,0.30)" stroke-width="1.5"/>
      <line x1="58" y1="184" x2="66" y2="184" stroke="rgba(32,28,23,0.20)" stroke-width="1.5"/>
      <line x1="58" y1="191" x2="68" y2="191" stroke="rgba(32,28,23,0.30)" stroke-width="1.5"/>
      <rect x="51" y="256" width="24" height="13" rx="5" fill="#8a5a2f" opacity="0.9"/>
    </g>
    <!-- caneta 3 (azul acinzentado) -->
    <g transform="rotate(16 320 220) translate(268 84)">
      <rect x="42" y="10" width="32" height="50" rx="14" fill="#5b6b80"/>
      <rect x="42" y="62" width="32" height="120" rx="13" fill="#fffdf9" stroke="rgba(32,28,23,0.14)" stroke-width="1.5"/>
      <rect x="43" y="80" width="30" height="30" fill="#5b6b80" opacity="0.20"/>
      <rect x="49" y="126" width="16" height="22" rx="4" fill="#f2ece2" stroke="rgba(32,28,23,0.18)" stroke-width="1.2"/>
      <rect x="47" y="184" width="20" height="11" rx="5" fill="#5b6b80" opacity="0.9"/>
    </g>
    <!-- comprimidos -->
    <circle cx="96" cy="296" r="26" fill="#fffdf9" stroke="rgba(32,28,23,0.15)" stroke-width="1.5"/>
    <line x1="78" y1="296" x2="114" y2="296" stroke="rgba(32,28,23,0.18)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="134" cy="312" r="17" fill="#c98a4b" opacity="0.85"/>
  </svg>`;
}
