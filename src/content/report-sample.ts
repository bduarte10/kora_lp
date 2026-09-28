export const reportSample = {
  kicker: "Relatório mensal · exemplo",
  clinic: "Sua clínica, Moema",
  columns: { question: "Pergunta do paciente", where: "Onde perguntamos", result: "Resultado" },
  rows: [
    {
      question: "implante dentário em Moema",
      where: "Google com IA",
      cited: true,
      result: "Citada · 2º",
    },
    {
      question: "dentista aberto sábado perto de mim",
      where: "ChatGPT",
      cited: true,
      result: "Citada · 1º",
    },
    {
      question: "o que muda o preço do implante",
      where: "Google com IA",
      cited: false,
      result: "Não citada",
    },
    {
      question: "clínica de implante que aceita convênio",
      where: "Gemini",
      cited: false,
      result: "Não citada",
    },
  ],
  footnote: "Cada linha vem com o print da resposta e a data em que a pergunta foi feita.",
} as const;
