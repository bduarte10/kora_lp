export type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  description: string;
  outputs: string[];
};

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Aplicação",
    duration: "10 minutos",
    description:
      "Você envia contexto sobre empresa, atendimento, presença digital e urgência. A KORA avalia se existe fit para o diagnóstico pago.",
    outputs: ["Contexto inicial", "Critérios de fit", "Próximo passo claro"],
  },
  {
    step: "02",
    title: "Diagnóstico",
    duration: "1–2 semanas",
    description:
      "Mapeamos presença em IA, autoridade digital, perguntas do cliente, gargalos de atendimento e oportunidades de automação.",
    outputs: ["Auditoria GEO", "Mapa de perguntas", "Gargalos priorizados"],
  },
  {
    step: "03",
    title: "Arquitetura",
    duration: "Projeto fechado",
    description:
      "Desenhamos a arquitetura de presença, conteúdo, base de conhecimento, agentes e automações que sustentam a nova operação.",
    outputs: ["Roadmap de implantação", "Escopo técnico", "Prioridade por impacto"],
  },
  {
    step: "04",
    title: "Implantação",
    duration: "Contínuo",
    description:
      "Implementamos, medimos, treinamos o time e ajustamos os fluxos para que GEO e atendimento com IA virem rotina, não demo.",
    outputs: ["Ativos publicados", "Equipe treinada", "Otimização contínua"],
  },
];
