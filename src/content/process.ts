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
      "Rodamos clusters de prompts, medimos baseline em IA, comparamos concorrentes citados e auditamos entidade, schema, reputação e conteúdo.",
    outputs: ["Baseline GEO", "Share of voice", "Entity & Trust Audit"],
  },
  {
    step: "03",
    title: "Arquitetura",
    duration: "Projeto fechado",
    description:
      "Desenhamos o roadmap 30/60/90 dias para presença, conteúdo answer-first, distribuição, base de conhecimento, agentes e automações.",
    outputs: ["Roadmap 30/60/90", "Escopo técnico", "Prioridade por impacto"],
  },
  {
    step: "04",
    title: "Implantação",
    duration: "Contínuo",
    description:
      "Implementamos, medimos evolução em prompts estratégicos, treinamos o time e ajustamos os fluxos para que GEO e atendimento com IA virem rotina, não demo.",
    outputs: ["Ativos publicados", "Equipe treinada", "Monitoramento contínuo"],
  },
];
