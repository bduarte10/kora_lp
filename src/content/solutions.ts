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
    id: "sites",
    index: "01",
    kicker: "Sites",
    title: "Site profissional por assinatura",
    description:
      "Criação custom, hospedagem, domínio e suporte numa mensalidade simples. Seu negócio no ar em dias, sem custo escondido e sem dor de cabeça.",
    ctaLabel: "Ver planos",
    ctaHref: "#planos",
  },
  {
    id: "automacao",
    index: "02",
    kicker: "Automação",
    title: "Processos que trabalham por você",
    description:
      "Integramos as ferramentas que você já usa e eliminamos tarefas repetitivas: propostas, follow-ups, relatórios e notificações rodando sozinhos.",
    ctaLabel: "Falar com especialista",
    ctaHref: "#cta",
  },
  {
    id: "ia-aplicada",
    index: "03",
    kicker: "IA Aplicada",
    title: "Inteligência no core do negócio",
    description:
      "Agentes e copilots conectados aos seus dados: atendimento que resolve, copilot que escreve proposta, analista que lê seus relatórios.",
    ctaLabel: "Falar com especialista",
    ctaHref: "#cta",
  },
];
