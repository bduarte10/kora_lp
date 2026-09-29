export type ServicePillar = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const servicesIntro = {
  bridge:
    "A IA não inventa: ela repete o que o Google, as avaliações e o site dizem da clínica. Por isso o trabalho começa ali.",
  success:
    "O objetivo é simples: quando alguém perguntar “implante em [seu bairro]”, o nome da sua clínica está na resposta, com avaliações recentes e uma página que tira a dúvida do paciente. E você vê, todo mês, quantas ligações e rotas isso trouxe.",
};

export const services: ServicePillar[] = [
  {
    id: "presenca",
    kicker: "Ser encontrada",
    title: "Sua clínica na resposta do Google, do Maps e da IA",
    description:
      "O Google e o ChatGPT recomendam a clínica que conseguem entender e confirmar em várias fontes. Arrumamos essas fontes para que a clínica apareça quando o paciente procura.",
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
      "Entre três clínicas citadas, o paciente escolhe a que tem avaliações recentes e responde as dúvidas dele. Cuidamos disso todo mês, dentro das regras do CFO.",
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
      "Ligações e rotas vindas do perfil do Google",
      "Próximas ações do mês",
    ],
  },
];
