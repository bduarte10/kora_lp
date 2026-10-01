export const diagnosticApplication = {
  route: "/diagnostico",
  title: "Prefere que a gente chame você?",
  description:
    "Deixe nome, clínica e bairro. A gente faz a pergunta que o seu paciente faria ao Google e à IA e chama você no WhatsApp com o que apareceu.",
  expectations: [
    {
      label: "Tempo",
      value: "Menos de 1 minuto",
      description: "Quatro campos. O resto a gente conversa.",
    },
    {
      label: "Antes de chamar",
      value: "A pergunta do seu bairro",
      description:
        "Rodamos no Google com IA e no ChatGPT e vemos quem aparece no lugar da clínica.",
    },
    {
      label: "Retorno",
      value: "Em até 1 dia útil",
      description: "Pelo WhatsApp que você informar, sem compromisso.",
    },
  ],
  footerNote:
    "Ao enviar, você concorda com nossa política de privacidade. Usamos seus dados para responder este contato e, se você quiser seguir, enviar uma proposta.",
} as const;
