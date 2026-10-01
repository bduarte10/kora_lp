import { methodology } from "./methodology";
import { site } from "./site";

const [questions, cited] = methodology.research.stats;

export const hero = {
  eyebrow: "Para clínicas odontológicas",
  headlineLines: [
    "O paciente pergunta à\u00a0IA.",
    "Ela cita algumas clínicas.",
    "A sua é uma delas?",
  ],
  description:
    "A KORA cuida, todo mês, das informações que o Google e o ChatGPT usam para indicar uma clínica. E mostra, com print e data, o que mudou.",
  primaryCta: "Ver onde minha clínica aparece",
  note: "Grátis, em 15 min pelo WhatsApp",
  price: `A partir de ${site.pricing.monthlyFrom}/mês`,
  proof: {
    value: `${cited.value} de ${questions.value}`,
    label:
      "respostas reais do Google com IA citaram clínicas pelo nome. Amostra da KORA em São Paulo, set/2026.",
  },
  photo: { src: "/images/hero-paciente.jpg", alt: "Mulher sorrindo enquanto olha o celular" },
  answer: {
    query: "implante em Moema",
    label: "Visão geral criada por IA",
    intro:
      "Para implante em Moema, estas clínicas são bem avaliadas e explicam o tratamento no site:",
    cited: [
      { id: "a", name: "Clínica A", detail: "4,9 · Av. Ibirapuera" },
      { id: "b", name: "Clínica B", detail: "4,8 · Moema" },
      { id: "c", name: "Clínica C", detail: "4,8 · Vila Nova Conceição" },
    ],
    missing: "Sua clínica não aparece aqui",
    caption: "Exemplo ilustrativo. Na análise gratuita, fazemos essa pergunta com o seu bairro.",
  },
} as const;
