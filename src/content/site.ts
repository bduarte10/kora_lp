const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511920923143";

const waLink = (text: string) =>
  `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

const diagnosticFromBRL = 4900;

const callMessage =
  "Oi, vim pelo site da KORA. Quero agendar 15 minutos para entender como minha empresa aparece nas respostas de IA.";

export const site = {
  name: "Kora GEO",
  alternateNames: ["Kora Intelligence Brasil", "KORA", "Kora"],
  legalName: "Bruno Bilego Duarte Consultoria em Tecnologia da Informação LTDA",
  cnpj: "54.381.960/0001-78",
  foundingDate: "2024-03-19",
  tagline: "GEO e Atendimento com IA para PMEs",
  description:
    "A KORA ajuda PMEs brasileiras a medir e fortalecer presença em ChatGPT, Claude, Gemini, Perplexity e Google com IA, unindo GEO, autoridade digital, bases de conhecimento e automação de atendimento.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://koraintelligence.com.br",
  locale: "pt-BR",
  defaultOgImage: "/og-default.png",

  contact: {
    whatsappNumber,
    whatsappMessage:
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
      "Oi, vim pelo site da KORA e quero tirar uma dúvida sobre o Diagnóstico GEO",
    address: {
      street: "Av. Paulista, 1106, sala 01, andar 16",
      district: "Bela Vista",
      city: "São Paulo",
      state: "SP",
      postalCode: "01310-914",
      country: "BR",
    },
  },

  social: {
    linkedin: "https://www.linkedin.com/company/kora-intelligence",
    instagram: "https://www.instagram.com/kora.solucoes",
  },

  pricing: {
    diagnosticFromBRL,
    diagnosticFrom: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(diagnosticFromBRL),
  },

  ctas: {
    call: "Agendar 15 minutos",
    callHref: waLink(callMessage),
    apply: "Aplicar para diagnóstico",
    applyHref: "/diagnostico",
  },

  nav: [
    { href: "#solucoes", label: "Soluções" },
    { href: "#diagnostico", label: "Diagnóstico" },
    { href: "#metodologia", label: "Metodologia" },
    { href: "#processo", label: "Como funciona" },
    { href: "#geo", label: "GEO & IA" },
    { href: "#faq", label: "FAQ" },
  ],
} as const;

export const whatsappLinkWith = waLink;

export const whatsappLink = () => waLink(site.contact.whatsappMessage);
