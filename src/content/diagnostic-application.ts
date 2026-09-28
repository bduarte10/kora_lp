export const diagnosticApplication = {
  route: "/diagnostico",
  title: "Aplique para a mensalidade da sua clínica",
  description:
    "Responda o essencial sobre a clínica, o atendimento no WhatsApp e a urgência. Com isso a KORA volta com setup, prazo e preço fechados, sem proposta genérica.",
  expectations: [
    {
      label: "Tempo",
      value: "3 a 4 minutos",
      description: "Perguntas objetivas, sem proposta pronta antes de entender o cenário.",
    },
    {
      label: "Análise",
      value: "Onde a clínica aparece",
      description:
        "Google, Maps e IA, clínicas citadas no seu lugar e como o WhatsApp é atendido hoje.",
    },
    {
      label: "Retorno",
      value: "Em até 1 dia útil",
      description: "Voltamos com setup, prazo e preço fechados, ou dizemos que não é o momento.",
    },
  ],
  steps: [
    {
      eyebrow: "Etapa 1",
      title: "Primeiro, a clínica.",
      description: "Isso ajuda a entender se a mensalidade faz sentido para o momento da clínica.",
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
