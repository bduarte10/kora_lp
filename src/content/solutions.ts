export type Solution = {
  id: string;
  index: string;
  kicker: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export const solutions: Solution[] = [
  {
    id: "geo",
    index: "01",
    kicker: "GEO",
    title: "Presença para respostas de IA",
    description:
      "Estruturamos conteúdo, entidade, autoridade e sinais de confiança para sua empresa ser compreendida por ChatGPT, Claude, Gemini, Perplexity e Google com IA.",
    ctaLabel: "Solicitar diagnóstico",
    ctaHref: "#diagnostico",
  },
  {
    id: "atendimento",
    index: "02",
    kicker: "Atendimento",
    title: "Respostas rápidas, consistentes e rastreáveis",
    description:
      "Criamos bases de conhecimento, agentes e fluxos para reduzir repetição no WhatsApp, e-mail e CRM sem perder controle humano.",
    ctaLabel: "Aplicar para diagnóstico",
    ctaHref: "#diagnostico",
  },
  {
    id: "operacao",
    index: "03",
    kicker: "Operação",
    title: "Automação onde existe gargalo real",
    description:
      "Conectamos dados, ferramentas e rituais comerciais para transformar visibilidade em atendimento, proposta, follow-up e decisão.",
    ctaLabel: "Ver método",
    ctaHref: "#processo",
  },
];
