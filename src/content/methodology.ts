export const methodology = {
  eyebrow: "Como medimos",
  title: "Um relatório com dado, não uma opinião sobre o seu Instagram.",
  description:
    "Toda clínica começa com uma linha de base: as mesmas perguntas que um paciente faria, feitas no Google e no ChatGPT, com data e print. É contra essa linha que cada mês é comparado.",
  frameworkName: "Método KORA",
  framework: [
    {
      id: "perguntas",
      title: "Perguntas do paciente",
      description:
        "Lista das perguntas que um paciente faz antes de escolher uma clínica: procedimento, preço, bairro, convênio, urgência.",
    },
    {
      id: "leitura",
      title: "Leitura das respostas",
      description:
        "Fazemos essas perguntas no Google com IA, no ChatGPT e no Gemini e registramos quem é citado, em que ordem e com qual descrição.",
    },
    {
      id: "concorrentes",
      title: "Clínicas no seu lugar",
      description:
        "Quando a sua clínica não aparece, anotamos quem aparece e o que essas clínicas têm que a sua ainda não mostra.",
    },
    {
      id: "fontes",
      title: "Fontes que sustentam a resposta",
      description:
        "Perfil do Google, avaliações, site, diretórios e menções: as fontes que a IA usa para confirmar que a clínica existe e é confiável.",
    },
    {
      id: "acoes",
      title: "Ações do mês",
      description:
        "O que muda no perfil, no conteúdo e no agente, em ordem de impacto. É isso que o relatório seguinte confere.",
    },
  ],
  metricsTitle: "O que o relatório mostra",
  metricsIntro:
    "Medimos sempre o mesmo conjunto de perguntas para que a comparação entre meses seja justa. Não prometemos citação garantida; mostramos a evolução.",
  metrics: [
    {
      label: "Aparições",
      description: "Em quantas perguntas a clínica aparece na resposta.",
    },
    {
      label: "Recomendação",
      description: "Quantas vezes a clínica é indicada, não só citada de passagem.",
    },
    {
      label: "Concorrentes",
      description: "Quais clínicas aparecem quando a sua não aparece.",
    },
    {
      label: "Descrição",
      description: "Se a IA descreve certo o que a clínica faz, onde fica e para quem.",
    },
    {
      label: "Conversas",
      description: "Quantos pacientes o agente atendeu e quantos foram para a recepção.",
    },
    {
      label: "Avaliações",
      description: "Novas avaliações no Google e respostas dadas a elas.",
    },
  ],
  scope: {
    title: "Não é só post em rede social",
    description:
      "Presença em IA não se resolve com conteúdo solto. O trabalho cruza perfil do Google, avaliações, site, dados estruturados, diretórios e o que se fala da clínica fora dela.",
    items: [
      "Perfil do Google e avaliações",
      "Nome, endereço e telefone iguais em toda parte",
      "Páginas que explicam procedimentos e o que define o custo",
      "Dados estruturados no site",
      "Menções em fontes que a IA consulta",
    ],
  },
  monitoring: {
    title: "O primeiro mês cria a linha de base",
    description:
      "O diagnóstico do primeiro mês registra onde a clínica está. A partir daí, cada relatório mostra o que mudou e o que vem a seguir.",
  },
  evidence: {
    title: "Prova com data, sem teatro",
    description:
      "Cada resultado vem com a pergunta feita, a data, o print da resposta e as ações feitas no mês. Cases com nome de clínica só com autorização dela.",
  },
  caveat:
    "Respostas de IA mudam com o modelo, a data, a localização e a pessoa que pergunta. O trabalho aumenta as chances de a clínica ser entendida e recomendada; ninguém controla a resposta final.",
} as const;
