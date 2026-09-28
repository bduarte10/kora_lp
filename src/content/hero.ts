import { site } from "./site";

export const hero = {
  eyebrow: "Para clínicas odontológicas",
  headlineLines: ["Quando o paciente pergunta", "à IA, sua clínica aparece?"],
  description:
    "Antes de ligar, o paciente pergunta ao Google e ao ChatGPT onde fazer implante. A KORA cuida, todo mês, para que sua clínica esteja nessa resposta, e mostra com print e data o que mudou.",
  primaryCta: "Ver onde minha clínica aparece",
  secondaryCta: { label: "Ver o que entra", href: "#mensalidade" },
  note: `Conversa de 15 minutos pelo WhatsApp · Mensalidade a partir de ${site.pricing.monthlyFrom}`,
  answer: {
    query: "onde fazer implante em Moema?",
    label: "Resposta de IA",
    intro:
      "Estas clínicas em Moema são bem avaliadas para implante e explicam no site como funciona o tratamento:",
    cited: [
      { id: "a", name: "Clínica A", reason: "Avaliações recentes · página sobre implante" },
      { id: "b", name: "Clínica B", reason: "Perfil do Google completo · responde avaliações" },
      { id: "c", name: "Clínica C", reason: "Explica o que define o custo do implante" },
    ],
    missing: { name: "Sua clínica", reason: "Não citada nesta resposta" },
    caption:
      "Exemplo ilustrativo. Na conversa de 15 minutos, fazemos essa pergunta com o nome do seu bairro.",
  },
} as const;
