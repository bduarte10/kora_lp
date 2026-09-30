import { formatBRL, site } from "./site";

const guarantee =
  "Contrato mínimo de 6 meses. Se o relatório do 3º mês não mostrar evolução, o mês seguinte é por nossa conta e o trabalho continua. O setup é informado na conversa, antes de qualquer contrato.";

export const planPrices = {
  essencial: site.pricing.monthlyFrom,
  completo: formatBRL(3000),
  rede: formatBRL(4500),
  extraUnit: formatBRL(1500),
};

export type Plan = {
  id: string;
  name: string;
  priceBRL: number;
  price: string;
  pricePrefix?: string;
  summary: string;
  recommended?: boolean;
};

export const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    priceBRL: site.pricing.monthlyFromBRL,
    price: planPrices.essencial,
    summary: "1 unidade, até 2 procedimentos e 1 bairro. Uma página por mês e o relatório mensal.",
  },
  {
    id: "completo",
    name: "Completo",
    priceBRL: 3000,
    price: planPrices.completo,
    summary:
      "Até 4 procedimentos e 3 bairros, duas páginas por mês, e-mail semanal e acompanhamento dos concorrentes.",
    recommended: true,
  },
  {
    id: "rede",
    name: "Rede",
    priceBRL: 4500,
    price: planPrices.rede,
    pricePrefix: "a partir de",
    summary: `O Completo mais ${planPrices.extraUnit} por unidade a mais, com um site e um relatório para a rede.`,
  },
];

export const offer = {
  title: "Mensalidade KORA para clínicas odontológicas",
  description:
    "Um só contrato cuida de a clínica ser encontrada no Google, no Maps e na IA, e de ser a opção mais fácil de escolher quando o paciente compara. O primeiro mês começa com o diagnóstico de onde a clínica aparece hoje.",
  price: `Planos a partir de ${site.pricing.monthlyFrom} por mês. ${guarantee}`,
  card: {
    kicker: "Planos",
    recommendedLabel: "Recomendado",
    terms: `Em todos os planos, o primeiro mês é o diagnóstico de onde a clínica aparece hoje. ${guarantee}`,
    value: {
      text: "Um implante unitário custa ao paciente de R$ 2.100 a R$ 8.000 no Brasil. Um paciente a mais por mês já paga a mensalidade.",
      source: { label: "DentMap, 2026", href: "https://dentmap.com.br/precos/implante-dentario" },
    },
    applyLink: "Prefere que a gente chame você? Deixe seu contato",
  },
} as const;
