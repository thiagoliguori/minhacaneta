// ============================================================
// Dados dos produtos - precos coletados em drogarias online
// em 02/07/2026. Faixas = menor preço com desconto → preço cheio.
// semanas = semanas de tratamento cobertas por 1 caneta/caixa.
// ============================================================

const DATA_ATUALIZACAO = "2 de julho de 2026";

const PRODUTOS = [
  {
    id: "ozempic",
    corAccent: "#4a6741",
    nome: "Ozempic",
    fabricante: "Novo Nordisk",
    substancia: "Semaglutida",
    via: "injetavel",
    viaLabel: "Injeção semanal",
    indicacoes: ["diabetes"],
    indicacaoLabel: "Diabetes tipo 2",
    cor: "#dde6d5",
    emoji: "💉",
    badges: ["Referência"],
    descricao: "O GLP-1 mais conhecido do mundo. Semaglutida injetável semanal da Novo Nordisk, aprovada para diabetes tipo 2. Com cadastro gratuito no Programa NovoDia, o preço cai para R$ 999 (e-commerce).",
    doses: [
      { dose: "0,25-0,5 mg (início)", apresentacao: "Caneta 1,5 mL + 6 agulhas (6 semanas)", semanas: 6, precoMin: 975, precoMax: 1314.38 },
      { dose: "1 mg (manutenção)", apresentacao: "Caneta 3 mL + 4 agulhas (4 doses)", semanas: 4, precoMin: 999, precoMax: 1314.38 }
    ],
    parceiros: [
      { nome: "Programa NovoDia", tipo: "programa", url: "https://www.programanovodia.com.br/cadastro.html", preco: 999, obs: "Cadastro gratuito com receita, desconto nas farmácias parceiras" },
      { nome: "Ultrafarma", tipo: "drogaria", url: "https://www.ultrafarma.com.br/ozempic-1mg-4-agulhas-novofine-4mm", preco: 1003.26, obs: "1 mg no PIX" },
      { nome: "Droga Raia", tipo: "drogaria", url: "https://www.drogaraia.com.br/ozempic-1mg-com-4-agulhas-de-novofine-4mm.html", preco: 999, obs: "1 mg com desconto de laboratório" },
      { nome: "Pague Menos", tipo: "drogaria", url: "https://www.paguemenos.com.br/ozempic-1mg-com-1-sistema-mais-4-agulhas-novo-fine-4mm/p", preco: 1279.99, obs: "1 mg" }
    ]
  },
  {
    id: "wegovy",
    corAccent: "#8a5a2f",
    nome: "Wegovy",
    fabricante: "Novo Nordisk",
    substancia: "Semaglutida",
    via: "injetavel",
    viaLabel: "Injeção semanal",
    indicacoes: ["obesidade"],
    indicacaoLabel: "Obesidade e sobrepeso",
    cor: "#e7d3bd",
    emoji: "💉",
    badges: ["Referência"],
    descricao: "Semaglutida em doses de até 2,4 mg, aprovada para obesidade e sobrepeso com comorbidades. Pelo Programa NovoDia, a dose inicial de 0,25 mg sai grátis na compra de qualquer apresentação (promoção vigente).",
    doses: [
      { dose: "0,25 mg (início)", apresentacao: "Caneta 1,5 mL + 4 agulhas (4 doses)", semanas: 4, precoMin: 899, precoMax: 1314.38 },
      { dose: "0,5 mg", apresentacao: "Caneta 1,5 mL + 4 agulhas (4 doses)", semanas: 4, precoMin: 975, precoMax: 1314.38 },
      { dose: "1 mg", apresentacao: "Caneta 3 mL + 4 agulhas (4 doses)", semanas: 4, precoMin: 998.97, precoMax: 1314.38 },
      { dose: "1,7 mg", apresentacao: "Caneta 3 mL + 4 agulhas (4 doses)", semanas: 4, precoMin: 1399, precoMax: 1968.82 },
      { dose: "2,4 mg (manutenção)", apresentacao: "Caneta 3 mL + 4 agulhas (4 doses)", semanas: 4, precoMin: 1749, precoMax: 2532.31 }
    ],
    parceiros: [
      { nome: "Programa NovoDia", tipo: "programa", url: "https://www.programanovodia.com.br/cadastro.html", preco: 1749, obs: "2,4 mg no e-commerce parceiro, com cadastro gratuito" },
      { nome: "Farmácia São João", tipo: "drogaria", url: "https://www.saojoaofarmacias.com.br/wegovy-2-4mg-3ml-novo-nordisk-10040802/p", preco: 1749.01, obs: "2,4 mg" },
      { nome: "Droga Raia", tipo: "drogaria", url: "https://www.drogaraia.com.br/wegovy-2-4mg-solucao-injetavel-3ml-4-agulhas-1007136.html", preco: 1749, obs: "2,4 mg com desconto de laboratório" },
      { nome: "Ultrafarma", tipo: "drogaria", url: "https://www.ultrafarma.com.br/wegovy-24mg-solucao-injetavel-4-agulhas-3ml-geladeira", preco: 1911.28, obs: "2,4 mg no PIX" }
    ]
  },
  {
    id: "mounjaro",
    corAccent: "#5b6b80",
    nome: "Mounjaro",
    fabricante: "Eli Lilly",
    substancia: "Tirzepatida",
    via: "injetavel",
    viaLabel: "Injeção semanal",
    indicacoes: ["diabetes", "obesidade"],
    indicacaoLabel: "Diabetes, obesidade e apneia do sono",
    cor: "#d9dfe8",
    emoji: "💉",
    badges: ["Agonista duplo"],
    descricao: "Tirzepatida, agonista duplo GIP/GLP-1 da Eli Lilly. Aprovado para diabetes tipo 2, obesidade/sobrepeso e apneia obstrutiva do sono. Com o programa Lilly Melhor Para Você, o tratamento inicial sai a partir de R$ 1.406,75/mês nas redes credenciadas.",
    doses: [
      { dose: "2,5 mg (início)", apresentacao: "Caixa 4 canetas 0,5 mL (4 doses)", semanas: 4, precoMin: 1406.75, precoMax: 1928.84 },
      { dose: "5 mg", apresentacao: "Caixa 4 canetas 0,5 mL (4 doses)", semanas: 4, precoMin: 1779.53, precoMax: 2411.28 },
      { dose: "7,5 mg", apresentacao: "Caixa 4 canetas 0,5 mL (4 doses)", semanas: 4, precoMin: 1900, precoMax: 2800 },
      { dose: "10 mg", apresentacao: "Caixa 4 canetas 0,5 mL (4 doses)", semanas: 4, precoMin: 2000, precoMax: 3250 },
      { dose: "12,5 mg", apresentacao: "Caixa 4 canetas 0,5 mL (4 doses)", semanas: 4, precoMin: 2200, precoMax: 3811.36 },
      { dose: "15 mg (dose máxima)", apresentacao: "Caixa 4 canetas 0,5 mL (4 doses)", semanas: 4, precoMin: 3500, precoMax: 3811.36 }
    ],
    parceiros: [
      { nome: "Programa Lilly Melhor Para Você", tipo: "programa", url: "https://www.lillymelhorparavoce.com.br", preco: 1406.75, obs: "Cadastro por CPF; desconto nas redes credenciadas (Raia, Drogasil, Pague Menos, DSP)" },
      { nome: "Farmácias São João", tipo: "drogaria", url: "https://www.saojoaofarmacias.com.br/mounjaro-tirzepatida-5mg-solucao-injetavel--0-5ml---4-canetas-aplicadoras-eli-lilly-10046653/p", preco: 1779.53, obs: "5 mg" },
      { nome: "Pague Menos", tipo: "drogaria", url: "https://www.paguemenos.com.br/mounjaro", preco: 1406.75, obs: "A partir de, com desconto de laboratório" },
      { nome: "Drogaria São Paulo", tipo: "drogaria", url: "https://www.drogariasaopaulo.com.br/mounjaro", preco: 1909.55, obs: "2,5 mg" }
    ]
  },
  {
    id: "rybelsus",
    corAccent: "#c98a4b",
    nome: "Rybelsus",
    fabricante: "Novo Nordisk",
    substancia: "Semaglutida",
    via: "oral",
    viaLabel: "Comprimido diário",
    indicacoes: ["diabetes"],
    indicacaoLabel: "Diabetes tipo 2",
    cor: "#f0e0cf",
    emoji: "💊",
    badges: ["Único oral"],
    descricao: "A única semaglutida em comprimido. Uso diário, em jejum, aprovada para diabetes tipo 2. Com o Programa NovoDia, a caixa de 7 ou 14 mg sai por R$ 839 no e-commerce das farmácias parceiras.",
    doses: [
      { dose: "3 mg (início)", apresentacao: "Caixa 30 comprimidos (30 dias)", semanas: 4.3, precoMin: 575, precoMax: 1316.38 },
      { dose: "7 mg", apresentacao: "Caixa 30 comprimidos (30 dias)", semanas: 4.3, precoMin: 839, precoMax: 1317.03 },
      { dose: "14 mg (manutenção)", apresentacao: "Caixa 30 comprimidos (30 dias)", semanas: 4.3, precoMin: 839, precoMax: 1317.03 }
    ],
    parceiros: [
      { nome: "Programa NovoDia", tipo: "programa", url: "https://www.programanovodia.com.br/produtos/rybelsus.html", preco: 839, obs: "7/14 mg no e-commerce parceiro; combo 2 caixas por R$ 1.150" },
      { nome: "Farmácias São João", tipo: "drogaria", url: "https://www.saojoaofarmacias.com.br/rybelsus-7mg-30-comprimidos-10030120/p", preco: 839, obs: "7 mg" },
      { nome: "Pague Menos", tipo: "drogaria", url: "https://www.paguemenos.com.br/rybelsus-7mg-com-30-comprimidos/p", preco: 1282.99, obs: "7 mg" },
      { nome: "Droga Raia", tipo: "drogaria", url: "https://www.drogaraia.com.br/rybelsus-7mg-com-30-comprimidos.html", preco: null, obs: "Consulte o preço na página" }
    ]
  },
  {
    id: "ozivy",
    corAccent: "#4a6741",
    nome: "Ozivy",
    fabricante: "EMS",
    substancia: "Semaglutida",
    via: "injetavel",
    viaLabel: "Injeção semanal",
    indicacoes: ["diabetes"],
    indicacaoLabel: "Diabetes tipo 2",
    cor: "#dde6d5",
    emoji: "💉",
    badges: ["Nacional"],
    descricao: "A primeira caneta de semaglutida fabricada no Brasil (EMS), aprovada para diabetes tipo 2. Pelo programa Vida + Leve, sai em média por R$ 287/mês nos 3 primeiros meses e R$ 498/caneta depois.",
    doses: [
      { dose: "1 mg (manutenção)", apresentacao: "Caneta 3 mL + 4 agulhas (4 doses)", semanas: 4, precoMin: 464.80, precoMax: 664.02 }
    ],
    parceiros: [
      { nome: "Programa Vida + Leve", tipo: "programa", url: "https://vidamaisleve.emssaude.com.br/", preco: 287, obs: "Média mensal nos 3 primeiros meses; R$ 498/caneta depois" },
      { nome: "Farmácias São João", tipo: "drogaria", url: "https://www.saojoaofarmacias.com.br/ozivy-1mg-solucao-injetavel-1-caneta-aplicadora-3ml-ems-10053130/p", preco: 464.80, obs: "1 mg" },
      { nome: "Drogal", tipo: "drogaria", url: "https://www.drogal.com.br/ozivy-1mg-solucao-injetavel-subcutanea-1-caneta-aplicadora-preenchida-3ml-4-agulhas-descartaveis/p", preco: 464.81, obs: "1 mg" },
      { nome: "Droga Raia", tipo: "drogaria", url: "https://www.drogaraia.com.br/ozivy-semaglutida-1mg-solucao-injetavel-3ml-1-caneta-aplicadora-com-4-agulhas-1485457.html", preco: null, obs: "Consulte o preço na página" }
    ]
  },
  {
    id: "poviztra",
    corAccent: "#8a5a2f",
    nome: "Poviztra",
    fabricante: "Eurofarma / Novo Nordisk",
    substancia: "Semaglutida",
    via: "injetavel",
    viaLabel: "Injeção semanal",
    indicacoes: ["obesidade"],
    indicacaoLabel: "Obesidade e sobrepeso",
    cor: "#e7d3bd",
    emoji: "💉",
    badges: ["Nacional"],
    descricao: "Semaglutida licenciada pela Novo Nordisk e produzida pela Eurofarma, aprovada para obesidade e sobrepeso com comorbidades. Pelo programa EuroCuida, a caneta de 0,5 mg sai por R$ 445.",
    doses: [
      { dose: "0,5 mg (início)", apresentacao: "Caneta 1,5 mL + 4 agulhas (4 doses)", semanas: 4, precoMin: 295, precoMax: 967.50 },
      { dose: "1 mg", apresentacao: "Caneta 3 mL + 4 agulhas (4 doses)", semanas: 4, precoMin: 803.89, precoMax: 1000.28 },
      { dose: "1,7 mg", apresentacao: "Caneta 3 mL + 4 agulhas (4 doses)", semanas: 4, precoMin: 1189, precoMax: 1347.91 },
      { dose: "2,4 mg (manutenção)", apresentacao: "Caneta 3 mL + 4 agulhas (4 doses)", semanas: 4, precoMin: 1310.99, precoMax: 1637.39 }
    ],
    parceiros: [
      { nome: "Programa EuroCuida", tipo: "programa", url: "https://eurocuida.eurofarma.com.br/", preco: 445, obs: "0,5 mg com cadastro gratuito; recompra em até 80 dias" },
      { nome: "Farmácias São João", tipo: "drogaria", url: "https://www.saojoaofarmacias.com.br/poviztra-semaglutida-05mg-15ml-eurofarma-10050642/p", preco: 295, obs: "0,5 mg em oferta" },
      { nome: "Farma Conde", tipo: "drogaria", url: "https://www.farmaconde.com.br/poviztra-eurofarma-novo-nordisk-0-5mg-semaglutida-1-34mg-ml---1-sistema-de-aplicacao---4-agulhas/p", preco: 919.80, obs: "0,5 mg" },
      { nome: "Droga Raia", tipo: "drogaria", url: "https://www.drogaraia.com.br/poviztra-2-40mg-solucao-injetavel-3ml-4-agulhas-1382241.html", preco: null, obs: "Consulte o preço na página" }
    ]
  },
  {
    id: "extensior",
    corAccent: "#5b6b80",
    nome: "Extensior",
    fabricante: "Eurofarma / Novo Nordisk",
    substancia: "Semaglutida",
    via: "injetavel",
    viaLabel: "Injeção semanal",
    indicacoes: ["diabetes"],
    indicacaoLabel: "Diabetes tipo 2",
    cor: "#d9dfe8",
    emoji: "💉",
    badges: ["Nacional"],
    descricao: "Semaglutida licenciada pela Novo Nordisk e produzida pela Eurofarma, aprovada para diabetes tipo 2. Pelo programa EuroCuida, a caneta de 1 mg caiu para R$ 309.",
    doses: [
      { dose: "0,25 + 0,5 mg (início)", apresentacao: "Sistema dose dupla 1,5 mL + 6 agulhas (~6 semanas)", semanas: 6, precoMin: 398.97, precoMax: 967.50 },
      { dose: "1 mg (manutenção)", apresentacao: "Caneta 3 mL + 4 agulhas (4 doses)", semanas: 4, precoMin: 490, precoMax: 1000.28 }
    ],
    parceiros: [
      { nome: "Programa EuroCuida", tipo: "programa", url: "https://eurocuida.eurofarma.com.br/", preco: 309, obs: "1 mg com cadastro gratuito; recompra em até 80 dias" },
      { nome: "Drogal", tipo: "drogaria", url: "https://www.drogal.com.br/extensior-1mg-solucao-injetavel-subcutanea-1-sistema-de-aplicacao-preenchido-3ml-4-agulhas-descartaveis/p", preco: 490, obs: "1 mg" },
      { nome: "Farmácias São João", tipo: "drogaria", url: "https://www.saojoaofarmacias.com.br/extensior-semaglutida-025mg-05mg-15ml-eurofarma-10050639/p", preco: 398.97, obs: "Dose dupla de início" },
      { nome: "Pague Menos", tipo: "drogaria", url: "https://www.paguemenos.com.br/extensior-1mg-solucao-injetavel-3ml/p", preco: 904.99, obs: "1 mg" }
    ]
  }
];
