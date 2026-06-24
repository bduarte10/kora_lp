export const diagnostic = {
  title: "Diagnóstico GEO & Automação de Atendimento",
  description:
    "Uma auditoria técnico-comercial para medir como sua empresa aparece nas respostas de IA, quem ocupa espaço no lugar dela, quais sinais sustentam autoridade e quais automações podem transformar atendimento em vantagem operacional.",
  fitCriteria: [
    "PMEs brasileiras com operação ativa e 20 a 200 colaboradores",
    "Empresas com atendimento, vendas ou suporte recebendo demanda recorrente",
    "Times que querem sair de testes soltos de IA para implantação rastreável",
  ],
  deliverables: [
    "Baseline de presença em ChatGPT, Claude, Gemini, Perplexity e Google com IA",
    "Mapa de clusters de prompts que seu cliente ideal faria antes de contratar",
    "Comparação com concorrentes citados e lacunas de share of voice generativo",
    "Diagnóstico de entidade, schema, reputação, distribuição e conteúdo answer-first",
    "Leitura dos gargalos de atendimento comercial e suporte",
    "Oportunidades de automação priorizadas por impacto e esforço",
    "Plano de implantação 30/60/90 dias para GEO, base de conhecimento e agentes",
    "Recomendação de monitoramento contínuo quando houver fit para recorrência",
  ],
  note: "A KORA avalia cada aplicação antes de propor o diagnóstico. Se houver fit, retornamos com próximos passos e escopo inicial.",
} as const;

export const segmentOptions = [
  "Serviços B2B",
  "Saúde e clínicas",
  "Educação",
  "Indústria",
  "Varejo ou franquias",
  "Tecnologia",
  "Outro",
] as const;

export const companySizeOptions = [
  "Até 20 colaboradores",
  "20 a 50 colaboradores",
  "51 a 100 colaboradores",
  "101 a 200 colaboradores",
  "Mais de 200 colaboradores",
] as const;

export const priorityOptions = [
  "GEO e presença em IA",
  "Atendimento comercial",
  "Automação operacional",
  "Base de conhecimento",
  "Ainda não sei",
] as const;

export const urgencyOptions = [
  "Quero iniciar agora",
  "Quero decidir nos próximos 30 dias",
  "Estou pesquisando para o trimestre",
  "Ainda é exploratório",
] as const;

export const paidDiagnosticOptions = [
  "Sim, se houver fit",
  "Preciso entender o escopo primeiro",
  "Ainda não sei",
] as const;
