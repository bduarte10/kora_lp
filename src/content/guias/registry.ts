import type { ComponentType } from "react";
import AutomatizarWhatsapp from "./automatizar-atendimento-whatsapp-ia.mdx";
import IaClinicasSigilo from "./ia-automacao-clinicas-sigilo.mdx";
import OQueEGeo from "./o-que-e-geo.mdx";

export type GuideGroup = "fundamentos" | "clinicas";

export type Guide = {
  slug: string;
  /** H1 e <title> — formulado como a pergunta que o público faz às IAs. */
  title: string;
  /** Meta description e OG. */
  description: string;
  /** "Resposta rápida" (40–60 palavras) renderizada no topo — o trecho citável. */
  tldr: string;
  group: GuideGroup;
  datePublished: string;
  dateModified: string;
  faq: { q: string; a: string }[];
  /** Slugs de guias relacionados (linkagem do cluster). */
  related: string[];
  Content: ComponentType;
};

export const groupLabels: Record<GuideGroup, string> = {
  fundamentos: "Fundamentos",
  clinicas: "Clínicas e consultórios",
};

const PUBLISHED = "2026-06-14";
const REVISED = "2026-10-01";

export const guides: Guide[] = [
  {
    slug: "o-que-e-geo",
    title: "O que é GEO: como aparecer no ChatGPT, Gemini e Perplexity (e como difere do SEO)",
    description:
      "GEO (Generative Engine Optimization) é otimizar seu site para ser citado por IAs como ChatGPT, Gemini e Perplexity. Entenda como funciona, como difere do SEO e o que fazer na prática.",
    tldr: "GEO (Generative Engine Optimization) é a prática de otimizar um site para ser citado nas respostas de assistentes de IA como ChatGPT, Gemini e Perplexity. Diferente do SEO, que busca posições no Google, o GEO foca em conteúdo factual e bem estruturado, dados acessíveis aos robôs de busca das IAs e autoridade da marca para que o modelo cite sua empresa como fonte.",
    group: "fundamentos",
    datePublished: PUBLISHED,
    dateModified: REVISED,
    related: ["automatizar-atendimento-whatsapp-ia"],
    Content: OQueEGeo,
    faq: [
      {
        q: "GEO substitui o SEO?",
        a: "Não. GEO e SEO se complementam. Boa parte do que ajuda no GEO (conteúdo claro, estrutura, autoridade) também ajuda no SEO. O GEO adiciona uma camada: tornar o conteúdo fácil de citar por modelos de IA.",
      },
      {
        q: "Como faço meu site ser citado pelo ChatGPT?",
        a: "Não bloqueie o robô de busca da OpenAI (OAI-SearchBot) — o GPTBot, de treino, é decisão à parte —, publique conteúdo que responda perguntas de forma direta e factual, use dados estruturados (schema.org) e construa autoridade com menções da marca em fontes confiáveis.",
      },
      {
        q: "Quanto tempo leva para aparecer nas IAs?",
        a: "Para os mecanismos com busca ao vivo (ChatGPT Search, Perplexity, Gemini), pode ser questão de dias a semanas após publicar e ser indexado. Para o conhecimento interno do modelo (dados de treino), é bem mais lento e indireto.",
      },
    ],
  },
  {
    slug: "automatizar-atendimento-whatsapp-ia",
    title: "Como automatizar o atendimento no WhatsApp com IA (guia prático 2026)",
    description:
      "Guia prático para automatizar o atendimento no WhatsApp com IA: o que dá para automatizar, como funciona a API oficial, custos, riscos e quando vale a pena para uma PME.",
    tldr: "Para automatizar o atendimento no WhatsApp com IA, use a API oficial (WhatsApp Business Platform) conectada a um agente de IA que responde dúvidas frequentes, qualifica leads e agenda, escalando para um humano quando necessário. Bem feito, resolve a maior parte das conversas repetitivas; mal feito, frustra o cliente — por isso o desenho do fluxo e o handoff humano são essenciais.",
    group: "fundamentos",
    datePublished: PUBLISHED,
    dateModified: REVISED,
    related: ["o-que-e-geo", "ia-automacao-clinicas-sigilo"],
    Content: AutomatizarWhatsapp,
    faq: [
      {
        q: "Preciso da API oficial do WhatsApp para usar IA?",
        a: "Para automação confiável e em escala, sim. A API oficial (WhatsApp Business Platform) é o caminho aprovado pela Meta. Soluções não oficiais que automatizam o app comum violam os termos e podem bloquear seu número.",
      },
      {
        q: "A IA vai substituir meu atendente?",
        a: "Não totalmente. O melhor desenho usa IA para resolver o repetitivo (dúvidas, agendamento, qualificação) e passa para um humano os casos sensíveis ou complexos. Isso libera a equipe para o que exige julgamento.",
      },
    ],
  },
  {
    slug: "ia-automacao-clinicas-sigilo",
    title: "IA e automação para clínicas sem ferir o sigilo (LGPD + sigilo profissional)",
    description:
      "Como clínicas e profissionais de saúde podem usar IA e automação (agendamento, atendimento, lembretes) respeitando a LGPD e o sigilo profissional, com dados sensíveis protegidos.",
    tldr: "Clínicas podem usar IA e automação para agendamento, lembretes e triagem inicial, desde que tratem dados de saúde como dados sensíveis sob a LGPD: com base legal adequada, consentimento quando exigido, minimização de dados, contratos com os fornecedores (operadores) e nada de expor conteúdo clínico em ferramentas sem garantia de confidencialidade. O sigilo profissional continua valendo para o que a automação coleta.",
    group: "clinicas",
    datePublished: PUBLISHED,
    dateModified: REVISED,
    related: ["automatizar-atendimento-whatsapp-ia"],
    Content: IaClinicasSigilo,
    faq: [
      {
        q: "É seguro usar IA com dados de pacientes?",
        a: "Pode ser, com cuidados. Dados de saúde são sensíveis na LGPD e exigem base legal, minimização e fornecedores com garantias de segurança e confidencialidade (contrato de operador). Evite inserir dados clínicos identificáveis em ferramentas de IA genéricas sem essas garantias.",
      },
      {
        q: "Posso usar um chatbot de IA para agendar consultas?",
        a: "Sim. Agendamento, lembretes e dúvidas administrativas são usos de baixo risco, desde que você colete apenas o necessário, informe o paciente sobre o tratamento de dados e mantenha o sigilo do que for trocado.",
      },
    ],
  },
];

export const guidesBySlug: Record<string, Guide> = Object.fromEntries(
  guides.map((g) => [g.slug, g]),
);

export const getGuide = (slug: string): Guide | undefined => guidesBySlug[slug];

export const relatedGuides = (slug: string): Guide[] => {
  const guide = getGuide(slug);
  if (!guide) return [];
  return guide.related.map(getGuide).filter((g): g is Guide => Boolean(g));
};
