export const diagnosticApplication = {
  route: "/diagnostico",
  title: "Aplique para o Diagnóstico GEO & Automação de Atendimento",
  description:
    "A KORA avalia o contexto antes de propor próximos passos. Responda o essencial para entendermos fit, urgência e onde IA pode gerar vantagem operacional.",
  expectations: [
    {
      label: "Tempo",
      value: "3 a 4 minutos",
      description: "Perguntas objetivas, sem proposta pronta antes de entender o cenário.",
    },
    {
      label: "Análise",
      value: "GEO + atendimento",
      description: "Presença em IA, autoridade digital, base de conhecimento e automações.",
    },
    {
      label: "Retorno",
      value: "Se houver fit",
      description: "Voltamos com próximos passos, escopo inicial e caminho de diagnóstico.",
    },
  ],
  steps: [
    {
      eyebrow: "Etapa 1",
      title: "Primeiro, o fit operacional.",
      description: "Isso ajuda a entender se o diagnóstico faz sentido para o momento da empresa.",
    },
    {
      eyebrow: "Etapa 2",
      title: "Agora, seus contatos.",
      description: "Usaremos esses dados apenas para retornar sobre a aplicação.",
    },
    {
      eyebrow: "Etapa 3",
      title: "Por fim, o contexto.",
      description:
        "Uma resposta curta já basta. O objetivo é qualificar a conversa, não criar tarefa.",
    },
  ],
  footerNote:
    "Ao enviar, você concorda com nossa política de privacidade. Nunca compartilharemos seus dados.",
} as const;
