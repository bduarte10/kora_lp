export const site = {
  name: "KORA",
  tagline: "Sites, automação e IA para PMEs brasileiras",
  description:
    "Sites profissionais por assinatura — criação, hospedagem, domínio e suporte inclusos. E automação e IA sob medida para empresas brasileiras que querem crescer.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kora.com.br",
  locale: "pt-BR",
  defaultOgImage: "/og-default.png",

  contact: {
    email: "contato@kora.com.br",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511920923143",
    whatsappMessage:
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
      "Oi, vim pelo site da KORA e quero saber mais sobre os planos",
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
    primary: "Criar meu site",
    secondary: "Falar no WhatsApp",
    nav: "Ver planos",
  },

  nav: [
    { href: "#solucoes", label: "Soluções" },
    { href: "#planos", label: "Planos" },
    { href: "#processo", label: "Como funciona" },
    { href: "#ia", label: "Automação & IA" },
    { href: "#faq", label: "FAQ" },
  ],
} as const;

export const whatsappLinkWith = (text: string) => {
  const n = site.contact.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${n}?text=${encodeURIComponent(text)}`;
};

export const whatsappLink = () => whatsappLinkWith(site.contact.whatsappMessage);
