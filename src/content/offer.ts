import { formatBRL, site } from "./site";

const setupBRL = 2000;
const pilotMonths = 3;

export const pricing = {
  monthly: site.pricing.monthlyFrom,
  extraUnit: formatBRL(1500),
  setup: formatBRL(setupBRL),
  extraUnitSetup: formatBRL(1000),
  pilotMonths,
  pilotTotal: formatBRL(setupBRL + pilotMonths * site.pricing.monthlyFromBRL),
};

const pilot = `Começa com um piloto de ${pilotMonths} meses. Setup de ${pricing.setup}, pago uma vez, na assinatura. Para uma clínica, o piloto soma ${pricing.pilotTotal}. No fim do 3º mês, a clínica decide se continua.`;

const guarantee =
  "Garantia de entrega: se algo combinado para o mês não sair por falha nossa, fazemos sem custo em até 10 dias úteis depois do aviso.";

const exclusions =
  "Não entram: site novo (orçamento à parte, antes de assinar), anúncios, posts em redes sociais e atendimento automático no WhatsApp.";

export const offer = {
  title: "Mensalidade KORA para clínicas odontológicas",
  description:
    "Um só contrato cuida das informações que o Google, o Maps e as IAs usam para indicar uma clínica, e de ela ser a opção mais fácil de escolher quando o paciente compara. O primeiro mês começa com o diagnóstico de onde a clínica aparece hoje.",
  price: `${pricing.monthly} por mês por clínica. Cada unidade a mais: ${pricing.extraUnit} por mês. ${pilot} ${guarantee}`,
  card: {
    kicker: "Preço",
    priceLabel: "por clínica",
    extraUnit: `Cada unidade a mais: ${pricing.extraUnit} por mês e ${pricing.extraUnitSetup} de setup.`,
    firstMonth: "O primeiro mês começa com o diagnóstico de onde a clínica aparece hoje.",
    terms: pilot,
    guarantee,
    exclusions,
    applyLink: "Prefere que a gente chame você? Deixe seu contato",
  },
} as const;
