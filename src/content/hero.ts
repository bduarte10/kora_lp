import { site } from "./site";

export const hero = {
  eyebrow: "Para clínicas odontológicas",
  headlineLines: ["Quando o paciente pergunta", "à IA, sua clínica aparece?"],
  description:
    "A KORA cuida, todo mês, para que a sua clínica esteja na resposta do Google e do ChatGPT. E mostra, com print e data, o que mudou.",
  primaryCta: "Ver onde minha clínica aparece",
  secondaryCta: { label: "Ver o que entra", href: "#mensalidade" },
  note: `Grátis: em 15 minutos pelo WhatsApp, mostramos o print do que o paciente vê no seu bairro. Mensalidade a partir de ${site.pricing.monthlyFrom}.`,
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
      "Exemplo ilustrativo. Na análise gratuita, fazemos essa pergunta com o nome do seu bairro.",
  },
} as const;
