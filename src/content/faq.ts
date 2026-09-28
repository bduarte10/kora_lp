import { site } from "./site";

export type FAQItem = {
  q: string;
  a: string;
};

export const faq: FAQItem[] = [
  {
    q: "O que a KORA faz por uma clínica odontológica?",
    a: "Duas coisas, numa mensalidade só. Faz a clínica aparecer quando o paciente procura no Google, no Maps e em IAs como o ChatGPT e o Gemini, e coloca um agente de IA no WhatsApp para responder o paciente na hora, com passagem para a recepção quando precisa.",
  },
  {
    q: "Quanto custa?",
    a: `A mensalidade começa em ${site.pricing.monthlyFrom}. O valor final e o setup dependem do tamanho da clínica, do volume de conversas no WhatsApp e de quantos procedimentos entram no trabalho. Tudo é fechado na conversa, antes de qualquer contrato.`,
  },
  {
    q: "O agente de IA vai dar diagnóstico ou falar preço para o paciente?",
    a: "Não. O agente responde a partir de uma base revisada pelo dentista responsável: procedimentos, horários, convênios, como funciona a avaliação. Diagnóstico, urgência e negociação vão para a recepção. O agente também não promete resultado, seguindo o Código de Ética Odontológica.",
  },
  {
    q: "Isso respeita as regras de publicidade do CFO?",
    a: "Sim. O Código de Ética Odontológica proíbe anunciar preço, usar antes e depois e prometer resultado. O conteúdo que produzimos explica procedimentos e o que define o custo, sem anunciar valor, e passa pela aprovação do dentista responsável antes de ir ao ar.",
  },
  {
    q: "E os dados dos pacientes?",
    a: "Conversas de saúde são dados sensíveis pela LGPD. O agente não pede informação clínica além do necessário para agendar, as conversas ficam registradas para a clínica e o acesso é restrito. Os detalhes entram no contrato.",
  },
  {
    q: "O que é GEO?",
    a: "GEO é o nome técnico do trabalho de fazer uma empresa ser entendida e citada por IAs como o ChatGPT, o Gemini e o Google com IA. Na prática, para uma clínica, significa perfil do Google completo, avaliações, informações iguais em toda parte e páginas que respondem as dúvidas do paciente.",
  },
  {
    q: "Vocês garantem que minha clínica vai aparecer no ChatGPT?",
    a: "Não. Ninguém controla a resposta de uma IA, que muda com o modelo, a data e a localização de quem pergunta. O que garantimos é o trabalho feito e a medição honesta: as mesmas perguntas todo mês, com data e print, para você ver o que mudou.",
  },
  {
    q: "Como vocês medem se está funcionando?",
    a: "No primeiro mês registramos uma linha de base: as perguntas que um paciente faria, feitas no Google com IA, no ChatGPT e no Gemini, e quem aparece em cada uma. Todo mês repetimos as mesmas perguntas e somamos as conversas atendidas pelo agente.",
  },
  {
    q: "Preciso trocar meu site ou minha agência?",
    a: "Não. A KORA trabalha com o site que a clínica já tem e convive com a agência que cuida das redes e dos anúncios. Quando o site atrapalha, dizemos o que ajustar.",
  },
  {
    q: "Já tenho secretária e sistema de agenda. Onde o agente entra?",
    a: "O agente não substitui a recepção. Ele atende nos horários em que ninguém está olhando o WhatsApp e responde as dúvidas repetidas, para que a recepção cuide de confirmar, receber e negociar.",
  },
  {
    q: "Para quem a KORA não é indicada?",
    a: "Para quem quer só post em rede social, chatbot genérico de menu ou volume barato de leads. O trabalho funciona melhor em clínicas particulares com foco em implante, reabilitação ou estética, e com um dentista disposto a revisar as respostas do agente.",
  },
];
