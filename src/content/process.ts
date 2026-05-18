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
    title: "Discovery",
    duration: "1 semana",
    description:
      "Conversamos com fundadores e líderes para entender modelo de negócio, métricas críticas e onde o tempo da equipe está indo.",
    outputs: ["Mapa de stakeholders", "Hipóteses iniciais", "Métricas de baseline"],
  },
  {
    step: "02",
    title: "Mapeamento",
    duration: "1–2 semanas",
    description:
      "Acompanhamos processos chave, levantamos sistemas, dados e dores. Priorizamos oportunidades por impacto x esforço.",
    outputs: ["Mapa de processos", "Inventário de dados", "Roadmap priorizado"],
  },
  {
    step: "03",
    title: "Implantação",
    duration: "4–8 semanas",
    description:
      "Construímos as automações e agentes priorizados em sprints curtos, sempre com o time validando o que vai pra produção.",
    outputs: ["Automações em produção", "Agentes operando", "Documentação viva"],
  },
  {
    step: "04",
    title: "Operação",
    duration: "Contínuo",
    description:
      "Acompanhamento mensal, ajustes finos, novas iniciativas. A IA evolui junto com sua empresa, não engessa.",
    outputs: ["Iteração mensal", "Métricas de impacto", "Novas oportunidades"],
  },
];
