import { whatsappLinkWith } from "@/content/site";

export type BillingPeriod = "monthly" | "annual";

export type Plan = {
  id: string;
  name: string;
  forWho: string;
  setup: string;
  monthly: string;
  annual: string;
  annualNote: string;
  valueAnchor: string;
  valueAnchorAnnual: string;
  features: string[];
  highlighted: boolean;
  ctaLabel: string;
};

export const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    forWho: "Landing page de uma página, focada em conversão.",
    setup: "R$297",
    monthly: "R$127",
    annual: "R$106",
    annualNote: "2 meses grátis",
    valueAnchor: "≈ R$4 por dia",
    valueAnchorAnnual: "≈ R$3,50 por dia",
    features: [
      "1 página de alta conversão",
      "Domínio + hospedagem + SSL inclusos",
      "Formulário e integração com WhatsApp",
      "Otimizada para celular, Google e IA",
    ],
    highlighted: false,
    ctaLabel: "Começar agora",
  },
  {
    id: "profissional",
    name: "Profissional",
    forWho: "Site institucional de 4 a 8 páginas para sua empresa.",
    setup: "R$597",
    monthly: "R$297",
    annual: "R$247",
    annualNote: "2 meses grátis",
    valueAnchor: "≈ R$10 por dia",
    valueAnchorAnnual: "≈ R$8 por dia",
    features: [
      "Tudo do Essencial +",
      "4 a 8 páginas (institucional completo)",
      "Blog ou área de conteúdo opcional",
      "SEO técnico + GEO (otimização para IA)",
    ],
    highlighted: true,
    ctaLabel: "Quero esse plano",
  },
  {
    id: "performance",
    name: "Performance",
    forWho: "Site institucional com automação básica integrada.",
    setup: "R$997",
    monthly: "R$497",
    annual: "R$414",
    annualNote: "2 meses grátis",
    valueAnchor: "≈ R$17 por dia",
    valueAnchorAnnual: "≈ R$14 por dia",
    features: [
      "Tudo do plano Profissional +",
      "Automação de leads e notificações",
      "Integração com CRM / planilha / e-mail",
      "Painel simples de acompanhamento",
    ],
    highlighted: false,
    ctaLabel: "Quero esse plano",
  },
];

export const planById = (id?: string | null) => plans.find((p) => p.id === id);

export const planPrice = (plan: Plan, period: BillingPeriod = "monthly") =>
  period === "annual" ? plan.annual : plan.monthly;

export const planWhatsappLink = (plan: Plan, period: BillingPeriod = "monthly") =>
  whatsappLinkWith(
    `Oi! Tenho interesse no plano ${plan.name} (${planPrice(plan, period)}/mês${
      period === "annual" ? ", plano anual" : ""
    }). Pode me explicar como funciona?`,
  );

export const pricingLead = "Otimizado para SEO e GEO.";
export const pricingLeadDetail =
  "Seu site achado no Google e citado por IAs como ChatGPT, Perplexity e Gemini.";

export const pricingTrust = [
  "Sem fidelidade",
  "Cancele quando quiser",
  "Suporte humano de verdade",
  "Alterações ilimitadas",
];

export const pricingNote =
  "Todos os planos incluem domínio, hospedagem, SSL, suporte e alterações ilimitadas (uma na fila por vez). Setup é uma taxa única na criação; a mensalidade cobre tudo a partir daí.";
