const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511920923143";

const waLink = (text: string) =>
  `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

const diagnosticFromBRL = 2900;

const callMessage =
  "Oi, vim pelo site da KORA. Quero agendar 15 minutos para entender como minha empresa aparece nas respostas de IA.";

export const site = {
  name: "KORA",
  tagline: "GEO e Atendimento com IA para PMEs",
  description:
    "A KORA ajuda PMEs brasileiras a medir e fortalecer presença em ChatGPT, Claude, Gemini, Perplexity e Google com IA, unindo GEO, autoridade digital, bases de conhecimento e automação de atendimento.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://koraintelligence.com.br",
  locale: "pt-BR",
  defaultOgImage: "/og-default.png",

  contact: {
    email: "contato@kora.com.br",
    whatsappNumber,
    whatsappMessage:
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
      "Oi, vim pelo site da KORA e quero tirar uma dúvida sobre o Diagnóstico GEO",
    address: {
      city: "São Paulo",
      state: "SP",
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
