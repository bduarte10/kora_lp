export type ServicePillar = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const servicesIntro = {
  bridge:
    "A IA monta a resposta com o que encontra sobre a clínica: o perfil do Google, as avaliações, o site e outras fontes. A resposta pode variar e até errar. Com informação certa e igual em toda parte, fica mais fácil a clínica ser entendida e indicada. Por isso o trabalho começa ali.",
  success:
    "O objetivo é simples: quando alguém perguntar “implante em [seu bairro]”, a sua clínica tem tudo para estar na resposta, com avaliações recentes e uma página que tira a dúvida do paciente. Todo mês você vê três coisas, separadas: o que entregamos, onde a clínica apareceu e quantos cliques para ligar e pedidos de rota o perfil do Google registrou. Clique não é paciente: quantos viraram consulta, só a agenda da clínica mostra.",
};

export const services: ServicePillar[] = [
  {
    id: "presenca",
    kicker: "Ser encontrada",
    title: "Sua clínica na resposta do Google, do Maps e da IA",
    description:
      "O Google e o ChatGPT tendem a recomendar a clínica que conseguem entender e confirmar em várias fontes. Arrumamos essas fontes para a clínica ter mais chance de aparecer quando o paciente procura.",
    deliverables: [
      "Perfil do Google revisado e atualizado todo mês",
      "Nome, endereço e telefone iguais em diretórios e redes",
      "Dados estruturados no site da clínica",
      "Menções em fontes que a IA consulta",
    ],
  },
  {
    id: "escolha",
    kicker: "Ser escolhida",
    title: "A opção mais fácil de escolher quando o paciente compara",
    description:
      "Entre as clínicas citadas, o paciente escolhe a que tem avaliações recentes e responde as dúvidas dele. Cuidamos disso todo mês, dentro das regras do CFO.",
    deliverables: [
      "Rotina com a recepção para pedir avaliações",
      "Resposta às avaliações do Google",
      "Páginas que explicam procedimentos e o que define o custo",
      "Todo conteúdo aprovado pelo dentista responsável",
    ],
  },
  {
    id: "relatorio",
    kicker: "Acompanhar",
    title: "Um relatório por mês, em linguagem de clínica",
    description:
      "Todo mês rodamos as mesmas perguntas que um paciente faria e mostramos se a clínica apareceu, quem apareceu no lugar dela e o que o perfil do Google trouxe.",
    deliverables: [
      "Perguntas de pacientes testadas no Google e no ChatGPT",
      "Clínicas concorrentes que aparecem no seu lugar",
      "Cliques para ligar e pedidos de rota no perfil do Google",
      "E-mail semanal e relatório mensal com as próximas ações",
    ],
  },
];
