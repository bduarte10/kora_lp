import { site } from "./site";

export const hero = {
  headlineLines: ["Quando o paciente pergunta", "à IA, sua clínica aparece?"],
  description:
    "Antes de ligar, o paciente pergunta ao Google e ao ChatGPT onde fazer implante e quanto custa. A KORA cuida, todo mês, para que sua clínica esteja nessa resposta, e coloca um agente de IA no WhatsApp para atender quem chega, inclusive fora do horário da recepção.",
  includesTitle: "O que entra na mensalidade",
  includes: [
    { id: "diagnostico", label: "Diagnóstico de presença no Google, no Maps e em IA" },
    { id: "perfil", label: "Perfil do Google e avaliações em dia" },
    { id: "respostas", label: "Páginas que explicam procedimentos e o que define o custo" },
    { id: "agente", label: "Agente de IA no WhatsApp, com passagem para a recepção" },
    { id: "relatorio", label: "Relatório mensal de onde a clínica aparece" },
  ],
  pillars: [
    "Agente de IA no WhatsApp",
    "Google e Maps",
    "ChatGPT e Gemini",
    "Avaliações",
    "Relatório mensal",
  ],
  reassurance: [
    `A partir de ${site.pricing.monthlyFrom}/mês`,
    "15 minutos sem compromisso",
    "Só clínicas odontológicas",
  ],
} as const;
