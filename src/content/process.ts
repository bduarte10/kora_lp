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
    title: "Briefing",
    duration: "1–2 dias",
    description:
      "Conversa rápida para entender seu negócio, objetivo do site e referências. Você manda textos e fotos, ou a gente te orienta o que enviar.",
    outputs: ["Objetivo definido", "Conteúdo coletado", "Referências de estilo"],
  },
  {
    step: "02",
    title: "Criação",
    duration: "Poucos dias",
    description:
      "Desenhamos e desenvolvemos seu site sob medida, rápido, com tecnologia moderna. Você acompanha e aprova antes de publicar.",
    outputs: ["Design sob medida", "Site responsivo", "Revisão com você"],
  },
  {
    step: "03",
    title: "No ar",
    duration: "Em dias",
    description:
      "Publicamos com domínio, hospedagem e SSL inclusos. Sem você ter que contratar ou configurar nada por fora.",
    outputs: ["Domínio + hospedagem", "Certificado SSL", "Otimizado para Google"],
  },
  {
    step: "04",
    title: "Evolução",
    duration: "Contínuo",
    description:
      "Precisou mudar um texto, trocar uma foto, adicionar página? Você pede e a gente faz. Alterações ilimitadas, uma na fila por vez.",
    outputs: ["Suporte contínuo", "Alterações ilimitadas", "Sempre no ar"],
  },
];
