const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=80`;

export const heroPhotos = {
  laughing: { src: unsplash("photo-1617812191081-2a24e3f30e45"), alt: "Mulher rindo ao ar livre" },
  warmSmile: {
    src: unsplash("photo-1489278353717-f64c6ee8a4d2"),
    alt: "Mulher sorrindo, luz natural quente",
  },
  portrait: {
    src: unsplash("photo-1562337404-3044c84ac061"),
    alt: "Retrato em preto e branco de mulher sorrindo",
  },
  clinic: {
    src: unsplash("photo-1704455306251-b4634215d98f"),
    alt: "Consultório odontológico claro e organizado",
  },
} as const;

/** Título partido em duas partes, para as variações que destacam a pergunta. */
export const headlineSplit = {
  lead: "Quando o paciente pergunta à IA,",
  question: "sua clínica aparece?",
} as const;

/** `nav`: cor do texto do menu enquanto ele está sobre o hero. */
export const heroVariants = [
  {
    id: "1a",
    reference: "Claro com fotografia",
    idea: "Foto à direita com a resposta sobreposta",
    nav: "ink",
  },
  { id: "1b", reference: "Claro com fotografia", idea: "Centralizado com foto larga", nav: "ink" },
  {
    id: "1c",
    reference: "Claro com fotografia",
    idea: "Foto em arco com cartões flutuantes",
    nav: "ink",
  },
  {
    id: "2a",
    reference: "Escuro tecnológico",
    idea: "Título central e painel do produto",
    nav: "cream",
  },
  {
    id: "2b",
    reference: "Escuro tecnológico",
    idea: "Split com janela do Google em modo IA",
    nav: "cream",
  },
  {
    id: "2c",
    reference: "Escuro tecnológico",
    idea: "Barra de busca como protagonista",
    nav: "cream",
  },
  { id: "3a", reference: "Editorial de bem-estar", idea: "Metade foto, metade texto", nav: "ink" },
  { id: "3b", reference: "Editorial de bem-estar", idea: "Foto inteira com painel", nav: "cream" },
  { id: "3c", reference: "Editorial de bem-estar", idea: "Três colunas de revista", nav: "ink" },
  {
    id: "4a",
    reference: "Ousado e colorido",
    idea: "Bloco coral e retrato com etiquetas",
    nav: "ink",
  },
  {
    id: "4b",
    reference: "Ousado e colorido",
    idea: "Tipografia gigante em verde-limão",
    nav: "ink",
  },
  {
    id: "4c",
    reference: "Ousado e colorido",
    idea: "Escuro com a pergunta em conversa",
    nav: "cream",
  },
] as const;

export type HeroVariantId = (typeof heroVariants)[number]["id"];

export const heroVariantNav = (pathname: string) =>
  heroVariants.find((v) => pathname === `/${v.id}`)?.nav;
