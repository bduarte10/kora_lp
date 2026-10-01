import { pricing } from "./offer";

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
    a: `A mensalidade é de ${pricing.monthly} por clínica e cobre o trabalho descrito nesta página: Perfil do Google, avaliações, diretórios, dados estruturados, menções em fontes locais, páginas de procedimento, e-mail semanal e relatório mensal, focados nos procedimentos e bairros que mais trazem receita para a clínica. O que entra em cada mês sai do diagnóstico e do plano mensal. Não entram site novo, anúncios, posts em redes sociais nem atendimento automático no WhatsApp. Cada unidade a mais custa ${pricing.extraUnit} por mês. O setup é de ${pricing.setup} (mais ${pricing.extraUnitSetup} por unidade a mais), pago uma vez, na assinatura, e cobre a configuração inicial: acessos, correção de dados nos diretórios, dados estruturados e o começo da rotina de avaliações. O contrato começa com um piloto de ${pricing.pilotMonths} meses, que para uma clínica soma ${pricing.pilotTotal} com o setup. No fim do piloto, a clínica decide se continua. Tudo é fechado na conversa, antes de qualquer contrato.`,
  },
  {
    q: "O que acontece se algo combinado não for entregue?",
    a: "A garantia é de entrega. O plano de cada mês diz o que vamos fazer. Se algo combinado não sair por falha nossa, a clínica avisa e a gente faz sem custo em até 10 dias úteis. Se não fizer, a clínica pode encerrar o contrato. Ficam de fora o que depende da clínica, como liberar acessos, aprovar conteúdo e pedir avaliações, e o que depende de terceiros, como o Google publicar uma alteração ou uma IA citar a clínica. O relatório mostra cada coisa separada.",
  },
  {
    q: "Isso respeita as regras de publicidade do CFO?",
    a: "Sim. O Código de Ética Odontológica proíbe anunciar preço e prometer resultado. Antes e depois só é permitido ao cirurgião-dentista responsável, com condições e autorização do paciente, e não à clínica como empresa. Como trabalhamos no perfil e no site da clínica, seguimos a regra mais restrita: nada de preço, antes e depois ou promessa. O conteúdo explica procedimentos e o que define o custo e passa pela aprovação do dentista responsável antes de ir ao ar.",
  },
  {
    q: "Vocês garantem que minha clínica vai aparecer no ChatGPT?",
    a: "Não. Ninguém controla a resposta de uma IA, que muda com o modelo, a data e a localização de quem pergunta. O que garantimos é o trabalho feito e a medição honesta: as mesmas perguntas todo mês, com data e print, para você ver o que mudou.",
  },
  {
    q: "Como vocês medem se está funcionando?",
    a: "No primeiro mês registramos uma linha de base: as perguntas que um paciente faria, feitas no Google com IA, no ChatGPT e no Gemini, e quem aparece em cada uma. Todo mês repetimos as mesmas perguntas e somamos os cliques para ligar e os pedidos de rota que o perfil do Google registrou. Clique não é paciente: o relatório separa o que entregamos, onde a clínica apareceu e o que o perfil registrou.",
  },
  {
    q: "Preciso trocar meu site ou minha agência?",
    a: "Não. A KORA trabalha com o site que a clínica já tem e convive com a agência que cuida das redes e dos anúncios. Quando o site atrapalha, dizemos o que ajustar. Se a clínica não tem site, fazemos um completo, no domínio e no nome dela, com orçamento à parte, informado antes de assinar.",
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
