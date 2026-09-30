import { site } from "./site";

export type FAQItem = {
  q: string;
  a: string;
};

export const faq: FAQItem[] = [
  {
    q: "O que a KORA faz por uma clínica odontológica?",
    a: "Faz a clínica aparecer quando o paciente procura no Google, no Maps e em IAs como o ChatGPT e o Gemini, e ser a opção mais fácil de escolher quando ele compara: perfil do Google, avaliações e páginas que respondem as dúvidas do paciente. Todo mês, um relatório mostra o que mudou.",
  },
  {
    q: "Quanto custa?",
    a: `A mensalidade começa em ${site.pricing.monthlyFrom}. O valor final e o setup dependem do tamanho da clínica e de quantos procedimentos e bairros entram no trabalho. O contrato mínimo é de 6 meses, e se o relatório do 3º mês não mostrar evolução você cancela sem multa. Tudo é fechado na conversa, antes de qualquer contrato.`,
  },
  {
    q: "Isso respeita as regras de publicidade do CFO?",
    a: "Sim. O Código de Ética Odontológica proíbe anunciar preço, usar antes e depois, depoimento de paciente em anúncio e promessa de resultado. O conteúdo que produzimos explica procedimentos e o que define o custo, sem anunciar valor, e passa pela aprovação do dentista responsável antes de ir ao ar.",
  },
  {
    q: "Vocês garantem que minha clínica vai aparecer no ChatGPT?",
    a: "Não. Ninguém controla a resposta de uma IA, que muda com o modelo, a data e a localização de quem pergunta. O que garantimos é o trabalho feito e a medição honesta: as mesmas perguntas todo mês, com data e print, para você ver o que mudou.",
  },
  {
    q: "Como vocês medem se está funcionando?",
    a: "No primeiro mês registramos uma linha de base: as perguntas que um paciente faria, feitas no Google com IA, no ChatGPT e no Gemini, e quem aparece em cada uma. Todo mês repetimos as mesmas perguntas e somamos as ligações e os pedidos de rota que o perfil do Google trouxe.",
  },
  {
    q: "Preciso trocar meu site ou minha agência?",
    a: "Não. A KORA trabalha com o site que a clínica já tem e convive com a agência que cuida das redes e dos anúncios. Quando o site atrapalha, dizemos o que ajustar.",
  },
  {
    q: "Para quem a KORA não é indicada?",
    a: "Para quem quer só post em rede social ou volume barato de leads. O trabalho funciona melhor em clínicas particulares com foco em implante, reabilitação ou estética, e com um dentista disposto a revisar o conteúdo antes de publicar.",
  },
  {
    q: "O que é GEO?",
    a: "GEO é o nome técnico do trabalho de fazer uma empresa ser entendida e citada por IAs como o ChatGPT, o Gemini e o Google com IA. Na prática, para uma clínica, significa perfil do Google completo, avaliações, informações iguais em toda parte e páginas que respondem as dúvidas do paciente.",
  },
];
