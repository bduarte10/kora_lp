const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511920923143";

const waLink = (text: string) =>
  `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

// Aceita a mensagem crua ou já URL-encoded; o waLink codifica de novo.
const fromEnvMessage = (value: string | undefined) => {
  if (!value) return undefined;
  try {
    return decodeURIComponent(value.replace(/\+/g, " "));
  } catch {
    return value;
  }
};

export const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);

const monthlyFromBRL = 2500;
const monthlyFrom = formatBRL(monthlyFromBRL);

const callMessage =
  "Oi, vim pelo site da Kora GEO. Quero a análise gratuita: ver como minha clínica aparece no Google e nas respostas de IA.";

export const site = {
  name: "Kora GEO",
  alternateNames: ["Kora Intelligence Brasil", "KORA", "Kora"],
  legalName: "Bruno Bilego Duarte Consultoria em Tecnologia da Informação LTDA",
  cnpj: "54.381.960/0001-78",
  foundingDate: "2024-03-19",
  tagline: "Presença no Google e em IA para clínicas odontológicas",
  description: `A Kora GEO faz clínicas odontológicas aparecerem quando o paciente procura no Google, no Maps e no ChatGPT, e mostra todo mês o que mudou. Mensalidade a partir de ${monthlyFrom}.`,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://koraintelligence.com.br",
  locale: "pt-BR",
  defaultOgImage: "/opengraph-image",

  contact: {
    whatsappNumber,
    whatsappMessage:
      fromEnvMessage(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE) ??
      "Oi, vim pelo site da Kora GEO e quero tirar uma dúvida sobre a mensalidade para clínicas",
    address: {
      street: "Av. Paulista, 1106, sala 01, andar 16",
      district: "Bela Vista",
      city: "São Paulo",
      state: "SP",
      postalCode: "01310-914",
      country: "BR",
    },
  },

  social: {
    linkedin: "https://www.linkedin.com/company/kora-intelligence",
    instagram: "https://www.instagram.com/kora.solucoes",
  },

  pricing: {
    monthlyFromBRL,
    monthlyFrom,
  },

  ctas: {
    call: "Análise gratuita",
    callHref: waLink(callMessage),
    apply: "Deixar meu contato",
    applyHref: "/diagnostico",
  },

  nav: [
    { href: "/#mensalidade", label: "O que entra" },
    { href: "/#preco", label: "Preço" },
    { href: "/#processo", label: "Como funciona" },
    { href: "/#relatorio", label: "O relatório" },
    { href: "/#faq", label: "FAQ" },
  ],
} as const;

export const whatsappLinkWith = waLink;

export const whatsappLink = () => waLink(site.contact.whatsappMessage);
