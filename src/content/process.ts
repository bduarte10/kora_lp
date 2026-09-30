export type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Análise gratuita",
    duration: "15 minutos",
    description:
      "Fazemos com você as perguntas que o paciente faria no Google e no ChatGPT, com o nome do seu bairro, e mostramos o print de quem aparece. Não custa nada. Se não fizer sentido, a gente diz.",
  },
  {
    step: "02",
    title: "Diagnóstico e setup",
    duration: "Primeiro mês",
    description:
      "Rodamos as perguntas que seus pacientes fazem, auditamos perfil, avaliações, site e diretórios, e entregamos o diagnóstico com as ações priorizadas.",
  },
  {
    step: "03",
    title: "Primeiras entregas",
    duration: "Segundo mês",
    description:
      "Perfil do Google revisado, rotina de avaliações combinada com a recepção e as primeiras páginas sobre procedimentos no ar, aprovadas pelo dentista.",
  },
  {
    step: "04",
    title: "Rotina mensal",
    duration: "Contínuo",
    description:
      "Todo mês repetimos as mesmas perguntas, cuidamos do perfil e das avaliações e entregamos o relatório com as ações do mês seguinte.",
  },
];
