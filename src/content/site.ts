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
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511920923143",
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

  ctas: {
    primary: "Solicitar diagnóstico GEO",
    secondary: "Falar no WhatsApp",
    nav: "Aplicar para diagnóstico",
    primaryHref: "/diagnostico",
    navHref: "/diagnostico",
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

export const whatsappLinkWith = (text: string) => {
  const n = site.contact.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${n}?text=${encodeURIComponent(text)}`;
};

export const whatsappLink = () => whatsappLinkWith(site.contact.whatsappMessage);
