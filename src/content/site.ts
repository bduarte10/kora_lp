export const site = {
  name: "KORA",
  tagline: "Bússola de IA para PMEs",
  description:
    "Diagnóstico, automação e implantação de IA sob medida para empresas brasileiras que querem transformar processos em resultado.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kora.com.br",
  locale: "pt-BR",
  defaultOgImage: "/og-default.png",

  contact: {
    email: "contato@kora.com.br",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999",
    whatsappMessage:
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
      "Oi, vim pelo site da KORA e quero solicitar um diagnóstico",
    address: {
      city: "São Paulo",
      state: "SP",
      country: "BR",
    },
  },

  social: {
    linkedin: "https://www.linkedin.com/company/kora-ai",
    instagram: "https://www.instagram.com/kora.ia",
  },

  ctas: {
    primary: "Solicitar diagnóstico gratuito",
    secondary: "Falar no WhatsApp",
    nav: "Solicitar diagnóstico",
  },

  nav: [
    { href: "#problema", label: "O problema" },
    { href: "#servicos", label: "Serviços" },
    { href: "#processo", label: "Processo" },
    { href: "#cases", label: "Metodologia" },
    { href: "#faq", label: "FAQ" },
  ],
} as const;

export const whatsappLink = () => {
  const n = site.contact.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${n}?text=${site.contact.whatsappMessage}`;
};
