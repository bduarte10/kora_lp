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
    duration: "Mês 1",
    description:
      "Registramos a linha de base com as perguntas que seus pacientes fazem, auditamos perfil, avaliações, site e diretórios, configuramos os acessos e fazemos as primeiras correções. O mês termina com o diagnóstico e o plano dos próximos.",
  },
  {
    step: "03",
    title: "Execução",
    duration: "Mês 2",
    description:
      "Perfil do Google revisado, rotina de avaliações combinada com a recepção e as primeiras páginas sobre procedimentos no ar, aprovadas pelo dentista. Começam os relatórios mensais.",
  },
  {
    step: "04",
    title: "Fechamento do piloto",
    duration: "Mês 3",
    description:
      "O trabalho continua e o relatório de fechamento compara tudo com a linha de base. Com ele, a clínica decide se segue. Se seguir, vira rotina mensal.",
  },
];
