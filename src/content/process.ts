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
    title: "Conversa",
    duration: "15 minutos",
    description:
      "Olhamos juntos o que o Google e a IA respondem hoje quando um paciente procura o que a sua clínica faz. Se não fizer sentido, a gente diz.",
    outputs: ["Onde a clínica aparece hoje", "Quem aparece no lugar", "Proposta com setup e prazo"],
  },
  {
    step: "02",
    title: "Diagnóstico e setup",
    duration: "Primeiro mês",
    description:
      "Rodamos as perguntas que seus pacientes fazem, auditamos perfil, avaliações e site, e montamos com o dentista responsável a base de respostas do agente.",
    outputs: [
      "Linha de base registrada",
      "Perfil do Google revisado",
      "Base de respostas aprovada",
    ],
  },
  {
    step: "03",
    title: "Agente no ar",
    duration: "Segundo mês",
    description:
      "O agente começa a atender no WhatsApp com regras de passagem para a recepção, e as primeiras páginas sobre procedimentos vão ao ar.",
    outputs: ["Agente atendendo", "Recepção treinada", "Páginas publicadas"],
  },
  {
    step: "04",
    title: "Rotina mensal",
    duration: "Contínuo",
    description:
      "Todo mês repetimos as mesmas perguntas, ajustamos o agente com base nas conversas reais e entregamos o relatório com as ações do mês seguinte.",
    outputs: ["Relatório mensal", "Agente ajustado", "Novas avaliações e conteúdo"],
  },
];
