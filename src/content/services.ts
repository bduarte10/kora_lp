export type ServicePillar = {
  id: string;
  index: string;
  kicker: string;
  title: string;
  description: string;
  deliverables: string[];
  imageSeed: string;
};

export const services: ServicePillar[] = [
  {
    id: "diagnostico",
    index: "I",
    kicker: "Diagnóstico",
    title: "Onde sua empresa pode ganhar com IA",
    description:
      "Mapeamos onde IA e automação geram retorno real no seu negócio. Sem buzzword, sem promessa vazia: oportunidades priorizadas por impacto e esforço.",
    deliverables: [
      "Mapa de processos e gargalos",
      "Inventário de dados disponíveis",
      "Roadmap de oportunidades priorizadas",
      "Estimativa de ROI por iniciativa",
    ],
    imageSeed: "atlas-quiet",
  },
  {
    id: "automacao",
    index: "II",
    kicker: "Automação",
    title: "Workflows que rodam sozinhos",
    description:
      "Integramos as ferramentas que sua empresa já usa (planilhas, CRM, ERP, WhatsApp, e-mail) e construímos automações que eliminam tarefas repetitivas.",
    deliverables: [
      "Integrações entre sistemas via n8n / Make / código",
      "Automação de propostas, pedidos e cobranças",
      "Notificações inteligentes (Slack, WhatsApp, e-mail)",
      "Painéis de operação em tempo real",
    ],
    imageSeed: "linear-rivers",
  },
  {
    id: "ia-aplicada",
    index: "III",
    kicker: "IA Aplicada",
    title: "Agentes e copilots sob medida",
    description:
      "Construímos agentes de IA conectados aos seus dados: atendimento que vende, copilot que escreve propostas, analista que lê seus relatórios.",
    deliverables: [
      "Agentes de atendimento (WhatsApp, site, e-mail)",
      "Copilots internos para vendas e ops",
      "Sumarização e análise de documentos",
      "RAG sobre base de conhecimento da empresa",
    ],
    imageSeed: "neural-amber",
  },
  {
    id: "treinamento",
    index: "IV",
    kicker: "Operação contínua",
    title: "Sua equipe no comando",
    description:
      "Implantar é só o começo. Treinamos seu time para evoluir as automações e os agentes, e seguimos por perto enquanto a rotina nova se firma.",
    deliverables: [
      "Capacitação prática do time",
      "Manuais e playbooks operacionais",
      "Acompanhamento mensal pós-implantação",
      "Evolução contínua de prompts e fluxos",
    ],
    imageSeed: "studio-desk",
  },
];
