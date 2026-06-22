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
    id: "geo",
    index: "I",
    kicker: "GEO",
    title: "Sua empresa legível para mecanismos generativos",
    description:
      "Organizamos a presença digital para que mecanismos de IA entendam quem você é, o que faz, onde atua e por que pode ser uma resposta confiável.",
    deliverables: [
      "Mapa de perguntas e intenções do cliente ideal",
      "Auditoria de entidade, autoridade e conteúdo",
      "Estrutura de respostas answer-first",
      "Recomendações para ChatGPT, Claude, Gemini, Perplexity e Google com IA",
    ],
    imageSeed: "atlas-quiet",
  },
  {
    id: "atendimento",
    index: "II",
    kicker: "Atendimento",
    title: "Atendimento com IA sem virar caixa-preta",
    description:
      "Transformamos conhecimento comercial e operacional em base consultável, agente assistido e fluxos que mantêm o time no controle.",
    deliverables: [
      "Base de conhecimento para atendimento",
      "Agentes para WhatsApp, site e e-mail",
      "Regras de passagem para atendimento humano",
      "Logs e revisão de respostas críticas",
    ],
    imageSeed: "linear-rivers",
  },
  {
    id: "automacao",
    index: "III",
    kicker: "Automação",
    title: "Fluxos que reduzem atrito comercial",
    description:
      "Conectamos CRM, planilhas, formulários, e-mail e canais de atendimento para tirar trabalho manual dos pontos que travam venda.",
    deliverables: [
      "Follow-ups e qualificação de leads",
      "Propostas e resumos comerciais assistidos",
      "Alertas para gargalos e oportunidades",
      "Dashboards simples para acompanhamento",
    ],
    imageSeed: "neural-amber",
  },
  {
    id: "copilots",
    index: "IV",
    kicker: "Copilots",
    title: "IA aplicada ao conhecimento interno",
    description:
      "Criamos copilots internos para vendas, suporte e operação consultarem documentos, padrões, playbooks e histórico com segurança.",
    deliverables: [
      "RAG sobre documentos e processos",
      "Templates de prompts versionados",
      "Treinamento do time usuário",
      "Evolução contínua com métricas de uso",
    ],
    imageSeed: "studio-desk",
  },
];
