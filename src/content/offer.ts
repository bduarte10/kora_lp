import { site } from "./site";

export const offer = {
  title: "Mensalidade KORA para clínicas odontológicas",
  description:
    "Um só contrato cuida de a clínica ser encontrada no Google, no Maps e na IA, e de ser a opção mais fácil de escolher quando o paciente compara. O primeiro mês começa com o diagnóstico de onde a clínica aparece hoje.",
  deliverables: [
    "Diagnóstico de presença no Google, no Maps e em IA no primeiro mês",
    "Perfil do Google, avaliações e páginas de procedimento cuidados todo mês",
    "Relatório mensal de onde a clínica aparece e quem aparece no lugar",
  ],
  price: `A partir de ${site.pricing.monthlyFrom} por mês. Setup e prazo mínimo são combinados na conversa, antes de qualquer contrato.`,
  note: "Se preferir entender o método antes de preencher qualquer formulário, agende 15 minutos.",
  card: {
    kicker: "Próximo passo",
    title: "Comece por uma conversa de 15 minutos.",
    description:
      "Fazemos juntos as perguntas que seu paciente faria ao Google e ao ChatGPT e vemos quem aparece hoje. Se fizer sentido, a proposta vem depois.",
    applyLink: "Prefere o formulário? Aplicar para a mensalidade",
  },
} as const;
