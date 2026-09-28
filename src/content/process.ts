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
      "Rodamos as perguntas que seus pacientes fazem, auditamos perfil, avaliações, site e diretórios, e entregamos o diagnóstico com as ações priorizadas.",
    outputs: ["Linha de base registrada", "Diagnóstico entregue", "Ações priorizadas"],
  },
  {
    step: "03",
    title: "Primeiras entregas",
    duration: "Segundo mês",
    description:
      "Perfil do Google revisado, rotina de avaliações combinada com a recepção e as primeiras páginas sobre procedimentos no ar, aprovadas pelo dentista.",
    outputs: ["Perfil revisado", "Rotina de avaliações", "Páginas publicadas"],
  },
  {
    step: "04",
    title: "Rotina mensal",
    duration: "Contínuo",
    description:
      "Todo mês repetimos as mesmas perguntas, cuidamos do perfil e das avaliações e entregamos o relatório com as ações do mês seguinte.",
    outputs: ["Relatório mensal", "Perfil em dia", "Novas avaliações e conteúdo"],
  },
];
