import { formatBRL, site } from "./site";

export const pricing = {
  monthly: site.pricing.monthlyFrom,
  extraUnit: formatBRL(1500),
  setup: formatBRL(2000),
};

const guarantee = `Contrato mínimo de 6 meses. Se o relatório do 3º mês não mostrar evolução, o mês seguinte é por nossa conta e o trabalho continua. Setup de ${pricing.setup}, pago uma vez, na assinatura.`;

export const offer = {
  title: "Mensalidade KORA para clínicas odontológicas",
  description:
    "Um só contrato cuida de a clínica ser encontrada no Google, no Maps e na IA, e de ser a opção mais fácil de escolher quando o paciente compara. O primeiro mês começa com o diagnóstico de onde a clínica aparece hoje.",
  price: `${pricing.monthly} por mês por clínica, com tudo incluído. Cada unidade a mais: ${pricing.extraUnit} por mês. ${guarantee}`,
  card: {
    kicker: "Preço",
    priceLabel: "por clínica, com tudo incluído",
    extraUnit: `Cada unidade a mais: ${pricing.extraUnit} por mês.`,
    firstMonth: "O primeiro mês começa com o diagnóstico de onde a clínica aparece hoje.",
    terms: guarantee,
    value: {
      text: "Um implante unitário custa ao paciente de R$ 2.100 a R$ 8.000 no Brasil. Um paciente a mais por mês já paga a mensalidade.",
      source: { label: "DentMap, 2026", href: "https://dentmap.com.br/precos/implante-dentario" },
    },
    applyLink: "Prefere que a gente chame você? Deixe seu contato",
  },
} as const;
