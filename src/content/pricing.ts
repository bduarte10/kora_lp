export type Plan = {
  id: string;
  name: string;
  forWho: string;
  setup: string;
  monthly: string;
  features: string[];
  highlighted: boolean;
  ctaLabel: string;
  ctaHref: string;
};

export const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    forWho: "Landing page de uma página, focada em conversão.",
    setup: "R$297",
    monthly: "R$127",
    features: [
      "1 página de alta conversão",
      "Domínio + hospedagem + SSL inclusos",
      "Formulário e integração com WhatsApp",
      "Otimizada para celular e Google",
    ],
    highlighted: false,
    ctaLabel: "Começar agora",
    ctaHref: "#cta",
  },
  {
    id: "profissional",
    name: "Profissional",
    forWho: "Site institucional de 4 a 8 páginas para sua empresa.",
    setup: "R$597",
    monthly: "R$297",
    features: [
      "4 a 8 páginas (institucional completo)",
      "Domínio + hospedagem + SSL inclusos",
      "Blog ou área de conteúdo opcional",
      "SEO técnico e performance",
    ],
    highlighted: true,
    ctaLabel: "Quero esse plano",
    ctaHref: "#cta",
  },
  {
    id: "performance",
    name: "Performance",
    forWho: "Site institucional com automação básica integrada.",
    setup: "R$997",
    monthly: "R$497",
    features: [
      "Tudo do plano Profissional",
      "Automação de leads e notificações",
      "Integração com CRM / planilha / e-mail",
      "Painel simples de acompanhamento",
    ],
    highlighted: false,
    ctaLabel: "Quero esse plano",
    ctaHref: "#cta",
  },
];

export const pricingNote =
  "Todos os planos incluem domínio, hospedagem, SSL, suporte e alterações ilimitadas (uma na fila por vez). Setup é uma taxa única na criação; a mensalidade cobre tudo a partir daí.";
