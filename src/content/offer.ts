import { site } from "./site";

export const offer = {
  title: "Mensalidade KORA para clínicas odontológicas",
  description:
    "Um só contrato cuida de a clínica ser encontrada no Google, no Maps e na IA, e de ser a opção mais fácil de escolher quando o paciente compara. O primeiro mês começa com o diagnóstico de onde a clínica aparece hoje.",
  price: `A partir de ${site.pricing.monthlyFrom} por mês. Contrato mínimo de 6 meses. Se o relatório do 3º mês não mostrar evolução, o mês seguinte é por nossa conta e o trabalho continua. O setup é informado na conversa, antes de qualquer contrato.`,
  card: {
    kicker: "Preço",
    priceLabel: "a partir de",
    firstMonth: "O primeiro mês começa com o diagnóstico de onde a clínica aparece hoje.",
    terms:
      "Contrato mínimo de 6 meses. Se o relatório do 3º mês não mostrar evolução, o mês seguinte é por nossa conta e o trabalho continua. O setup é informado na conversa, antes de qualquer contrato.",
    value: {
      text: "Um implante unitário custa ao paciente de R$ 2.100 a R$ 8.000 no Brasil. Um paciente a mais por mês já paga a mensalidade.",
      source: { label: "DentMap, 2026", href: "https://dentmap.com.br/precos/implante-dentario" },
    },
    applyLink: "Prefere que a gente chame você? Deixe seu contato",
  },
} as const;
