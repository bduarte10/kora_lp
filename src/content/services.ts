export type ServicePillar = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const services: ServicePillar[] = [
  {
    id: "presenca",
    kicker: "Ser encontrada",
    title: "Sua clínica na resposta do Google, do Maps e da IA",
    description:
      "O Google e o ChatGPT recomendam a clínica que conseguem entender e confirmar em várias fontes. Arrumamos essas fontes e publicamos as respostas que o paciente procura antes de ligar.",
    deliverables: [
      "Perfil do Google revisado e atualizado todo mês",
      "Rotina para pedir e responder avaliações",
      "Páginas que explicam procedimentos e o que define o custo",
      "Dados da clínica consistentes em diretórios e redes",
    ],
  },
  {
    id: "agente",
    kicker: "Responder na hora",
    title: "Agente de IA no WhatsApp, sem tirar a recepção do controle",
    description:
      "O agente responde dúvidas sobre procedimentos, horários e convênios a partir de uma base revisada pela clínica e oferece horário de avaliação. Caso clínico, urgência e negociação vão para a recepção, com o histórico da conversa.",
    deliverables: [
      "Base de respostas aprovada pelo dentista responsável",
      "Atendimento fora do horário e no fim de semana",
      "Passagem para humano em casos sensíveis",
      "Sem diagnóstico e sem promessa de resultado, dentro das regras do CFO",
    ],
  },
  {
    id: "relatorio",
    kicker: "Acompanhar",
    title: "Um relatório por mês, em linguagem de clínica",
    description:
      "Todo mês rodamos as mesmas perguntas que um paciente faria e mostramos se a clínica apareceu, quem apareceu no lugar dela e quantas conversas o agente atendeu.",
    deliverables: [
      "Perguntas de pacientes testadas no Google e no ChatGPT",
      "Clínicas concorrentes que aparecem no seu lugar",
      "Conversas atendidas e passadas para a recepção",
      "Próximas ações do mês",
    ],
  },
];
