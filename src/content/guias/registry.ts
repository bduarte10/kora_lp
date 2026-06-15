import type { ComponentType } from "react";
import AutomatizarWhatsapp from "./automatizar-atendimento-whatsapp-ia.mdx";
import ComoEscolher from "./como-escolher-quem-cria-seu-site.mdx";
import IaClinicasSigilo from "./ia-automacao-clinicas-sigilo.mdx";
import OQueEGeo from "./o-que-e-geo.mdx";
import QuantoCustaClinica from "./quanto-custa-site-clinica-consultorio.mdx";
import QuantoCustaPme from "./quanto-custa-site-pequena-empresa.mdx";
import SiteAssinaturaVs from "./site-assinatura-vs-construtor-vs-agencia.mdx";
import SiteDentista from "./site-para-dentista.mdx";
import SiteMedico from "./site-para-medico-clinica.mdx";
import SiteNutricionista from "./site-para-nutricionista.mdx";
import SitePsicologo from "./site-para-psicologo.mdx";

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

export const guides: Guide[] = [
  {
    slug: "quanto-custa-site-pequena-empresa",
    title: "Quanto custa um site profissional para pequena empresa no Brasil (2026)",
    description:
      "Faixas de preço reais de um site profissional para pequena empresa no Brasil em 2026: criação avulsa, freelancer, agência e site por assinatura. Veja o que entra no custo.",
    tldr: "Em 2026, um site profissional para pequena empresa no Brasil custa de R$0 a R$200/mês no modelo por assinatura (com domínio, hospedagem e suporte inclusos) ou de R$1.500 a R$15.000 num projeto avulso de agência, fora os custos recorrentes de hospedagem, domínio e manutenção.",
    group: "fundamentos",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    related: ["site-assinatura-vs-construtor-vs-agencia", "como-escolher-quem-cria-seu-site"],
    Content: QuantoCustaPme,
    faq: [
      {
        q: "Qual a forma mais barata de ter um site profissional?",
        a: "O modelo por assinatura costuma ter o menor custo de entrada: você paga uma mensalidade que já inclui criação, domínio, hospedagem, SSL e suporte, sem desembolsar milhares de reais de uma vez.",
      },
      {
        q: "Quanto custa manter um site por ano?",
        a: "Num projeto avulso, a manutenção (hospedagem, domínio, SSL, atualizações e ajustes) costuma somar de R$600 a R$3.000 por ano. No modelo por assinatura, tudo isso já está embutido na mensalidade.",
      },
      {
        q: "Vale a pena fazer site de graça em construtor?",
        a: "Para validar uma ideia, sim. Para uma empresa que depende do site para vender, os planos gratuitos costumam ter domínio genérico, anúncios e limitações de SEO que prejudicam a credibilidade e a busca.",
      },
    ],
  },
  {
    slug: "site-assinatura-vs-construtor-vs-agencia",
    title:
      "Site por assinatura, construtor (Wix) ou agência? Comparação de custo e quando faz sentido",
    description:
      "Comparação direta entre site por assinatura, construtores como Wix/Squarespace e agência tradicional: custo, tempo, manutenção e para quem cada modelo faz sentido.",
    tldr: "Construtores (Wix, Squarespace) são mais baratos no papel, mas exigem que você mesmo construa e mantenha. Agência entrega sob medida, porém com alto custo inicial. O site por assinatura fica no meio: profissional e sob medida, com custo diluído e manutenção inclusa — ideal para PMEs que não querem operar a ferramenta.",
    group: "fundamentos",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    related: ["quanto-custa-site-pequena-empresa", "como-escolher-quem-cria-seu-site"],
    Content: SiteAssinaturaVs,
    faq: [
      {
        q: "Site por assinatura é mais caro que o Wix no longo prazo?",
        a: "O Wix tende a ser mais barato em mensalidade pura, mas não inclui criação sob medida nem manutenção feita por alguém. Quando você soma seu tempo construindo e mantendo, a assinatura costuma sair mais vantajosa para quem não quer operar a ferramenta.",
      },
      {
        q: "Com quem fica o site se eu cancelar a assinatura?",
        a: "Depende do fornecedor. Procure quem garante que você mantém o domínio e pode migrar o conteúdo. Na Kora, o domínio é seu e o site fica no ar enquanto a assinatura está ativa.",
      },
    ],
  },
  {
    slug: "como-escolher-quem-cria-seu-site",
    title: "Como escolher quem vai criar o site da sua empresa (checklist 2026)",
    description:
      "Checklist prático para escolher entre freelancer, agência ou serviço por assinatura para criar o site da sua empresa, sem cair em armadilhas de preço, prazo e manutenção.",
    tldr: "Para escolher quem vai criar seu site, avalie cinco pontos: o que está incluso (domínio, hospedagem, SSL, suporte), quem mantém o site depois de no ar, o prazo de entrega, a propriedade do domínio e do conteúdo, e se há otimização para busca e para IAs (SEO e GEO). Preço baixo sem manutenção costuma sair caro.",
    group: "fundamentos",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    related: ["quanto-custa-site-pequena-empresa", "site-assinatura-vs-construtor-vs-agencia"],
    Content: ComoEscolher,
    faq: [
      {
        q: "Freelancer ou agência: qual é melhor para um site simples?",
        a: "Para um site simples, um bom freelancer resolve a criação. O ponto de atenção é a manutenção contínua: freelancers somem ou ficam indisponíveis. Serviços por assinatura garantem continuidade de suporte e alterações.",
      },
      {
        q: "Quais perguntas fazer antes de fechar?",
        a: "Pergunte: o domínio fica no meu nome? Hospedagem e SSL estão inclusos? Quem faz alterações depois e quanto custa? Qual o prazo? O site é otimizado para Google e para IAs? O que acontece se eu quiser sair?",
      },
    ],
  },
  {
    slug: "o-que-e-geo",
    title: "O que é GEO: como aparecer no ChatGPT, Gemini e Perplexity (e como difere do SEO)",
    description:
      "GEO (Generative Engine Optimization) é otimizar seu site para ser citado por IAs como ChatGPT, Gemini e Perplexity. Entenda como funciona, como difere do SEO e o que fazer na prática.",
    tldr: "GEO (Generative Engine Optimization) é a prática de otimizar um site para ser citado nas respostas de assistentes de IA como ChatGPT, Gemini e Perplexity. Diferente do SEO, que busca posições no Google, o GEO foca em conteúdo factual e bem estruturado, dados acessíveis a crawlers de IA e autoridade da marca para que o modelo cite sua empresa como fonte.",
    group: "fundamentos",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    related: ["como-escolher-quem-cria-seu-site", "automatizar-atendimento-whatsapp-ia"],
    Content: OQueEGeo,
    faq: [
      {
        q: "GEO substitui o SEO?",
        a: "Não. GEO e SEO se complementam. Boa parte do que ajuda no GEO (conteúdo claro, estrutura, autoridade) também ajuda no SEO. O GEO adiciona uma camada: tornar o conteúdo fácil de citar por modelos de IA.",
      },
      {
        q: "Como faço meu site ser citado pelo ChatGPT?",
        a: "Permita o acesso dos crawlers de IA (GPTBot, OAI-SearchBot), publique conteúdo que responda perguntas de forma direta e factual, use dados estruturados (schema.org) e construa autoridade com menções da marca em fontes confiáveis.",
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
    dateModified: PUBLISHED,
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
    slug: "site-para-psicologo",
    title: "Site para psicólogo: o que não pode faltar (e o que o CFP permite)",
    description:
      "O que um site de psicólogo precisa ter e o que o Código de Ética e as resoluções do CFP permitem ou proíbem na divulgação: o que pode, o que não pode e como evitar problemas.",
    tldr: "Um site de psicólogo deve trazer nome, CRP, abordagem e formas de contato, com linguagem informativa e sóbria. O CFP proíbe sensacionalismo, promessas de resultado, preço como atrativo principal e uso de depoimentos de pacientes. O site pode (e deve) explicar serviços e facilitar o agendamento, sempre preservando o sigilo e a dignidade da profissão.",
    group: "clinicas",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    related: [
      "ia-automacao-clinicas-sigilo",
      "quanto-custa-site-clinica-consultorio",
      "site-para-nutricionista",
    ],
    Content: SitePsicologo,
    faq: [
      {
        q: "Psicólogo pode divulgar preço da consulta no site?",
        a: "O CFP desaconselha usar o preço como principal chamariz ou fazer promoções no estilo comercial. Informar valores de forma sóbria e informativa é tolerável, mas o foco da divulgação deve ser informativo, não publicitário-agressivo.",
      },
      {
        q: "Pode usar depoimento de paciente no site?",
        a: "Não. O Código de Ética veda o uso de depoimentos de clientes/pacientes para autopromoção, por envolver a relação terapêutica e o sigilo. Prefira descrever a abordagem e o processo de trabalho.",
      },
      {
        q: "É obrigatório mostrar o CRP no site?",
        a: "Sim. A identificação profissional com nome e número de registro no CRP é exigida na divulgação dos serviços do psicólogo.",
      },
    ],
  },
  {
    slug: "site-para-nutricionista",
    title: "Site para nutricionista: o que o CFN permite divulgar",
    description:
      "O que um site de nutricionista deve conter e o que o Código de Ética e Conduta do CFN permite ou veda na divulgação: antes e depois, promessas, preço e identificação profissional.",
    tldr: "Um site de nutricionista deve identificar o profissional com nome e CRN, descrever a atuação e facilitar o contato. O CFN veda promessas de resultado, sensacionalismo, uso de imagens de 'antes e depois' como propaganda e a oferta de fórmulas milagrosas. A divulgação deve ser informativa e baseada em evidência, sem prometer emagrecimento garantido.",
    group: "clinicas",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    related: [
      "site-para-psicologo",
      "quanto-custa-site-clinica-consultorio",
      "ia-automacao-clinicas-sigilo",
    ],
    Content: SiteNutricionista,
    faq: [
      {
        q: "Nutricionista pode postar 'antes e depois' no site?",
        a: "O CFN restringe o uso de imagens de antes e depois com fim publicitário, por induzir a promessa de resultado. O conteúdo deve ser informativo e baseado em evidência, não promessas de transformação garantida.",
      },
      {
        q: "O que não pode faltar no site de um nutricionista?",
        a: "Nome completo, número do CRN, área de atuação, informações de contato e conteúdo informativo. Evite linguagem que prometa resultados ou ofereça 'dietas milagrosas'.",
      },
    ],
  },
  {
    slug: "site-para-dentista",
    title: "Site para dentista e clínica odontológica: o que o CFO permite",
    description:
      "Regras de divulgação do CFO para sites de dentistas e clínicas odontológicas: o que pode na propaganda, o que é vedado (antes e depois, preço, sensacionalismo) e o que não pode faltar.",
    tldr: "Um site de dentista ou clínica odontológica deve informar nome, CRO, especialidades registradas e responsável técnico. O CFO veda divulgar preços e promoções como atrativo, imagens de 'antes e depois', sensacionalismo e promessa de resultado. A divulgação de especialidade exige registro no conselho; a comunicação deve ser informativa e ética.",
    group: "clinicas",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    related: [
      "site-para-medico-clinica",
      "quanto-custa-site-clinica-consultorio",
      "ia-automacao-clinicas-sigilo",
    ],
    Content: SiteDentista,
    faq: [
      {
        q: "Dentista pode anunciar preço e promoção no site?",
        a: "Não. O Código de Ética Odontológica veda a divulgação de preços, modalidades de pagamento e promoções como forma de concorrência ou atrativo. A comunicação deve ser informativa, não mercantil.",
      },
      {
        q: "Pode mostrar foto de antes e depois de tratamento?",
        a: "Não para fins de propaganda. O CFO veda o uso de imagens de antes e depois na divulgação, por caracterizar promessa de resultado e sensacionalismo.",
      },
    ],
  },
  {
    slug: "site-para-medico-clinica",
    title: "Site para médico e clínica: o que o CFM permite na divulgação",
    description:
      "O que a Resolução CFM e o Código de Ética Médica permitem e proíbem em sites de médicos e clínicas: identificação, especialidade, antes e depois, autopromoção e sensacionalismo.",
    tldr: "Um site de médico ou clínica deve trazer nome, CRM, RQE da especialidade quando aplicável e o diretor técnico no caso de clínicas. O CFM veda autopromoção, sensacionalismo, promessa de resultado, imagens de 'antes e depois', divulgação de preço como atrativo e a publicação de selfies/imagens em ato cirúrgico para autopromoção. A comunicação deve ser informativa e respeitar o sigilo.",
    group: "clinicas",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    related: [
      "site-para-dentista",
      "ia-automacao-clinicas-sigilo",
      "quanto-custa-site-clinica-consultorio",
    ],
    Content: SiteMedico,
    faq: [
      {
        q: "Médico pode divulgar especialidade no site?",
        a: "Sim, desde que registrada no CRM (RQE — Registro de Qualificação de Especialista). Anunciar uma especialidade sem o registro correspondente é vedado pelo CFM.",
      },
      {
        q: "Clínica precisa informar o responsável técnico no site?",
        a: "Sim. A divulgação de estabelecimentos de saúde deve identificar o diretor/responsável técnico e seu registro no conselho, conforme as normas do CFM.",
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
    dateModified: PUBLISHED,
    related: [
      "automatizar-atendimento-whatsapp-ia",
      "site-para-psicologo",
      "site-para-medico-clinica",
    ],
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
  {
    slug: "quanto-custa-site-clinica-consultorio",
    title: "Quanto custa um site para clínica ou consultório? (faixas 2026)",
    description:
      "Faixas de preço de um site para clínica ou consultório em 2026, o que influencia o custo (agendamento, integrações, conteúdo) e como o modelo por assinatura se compara ao projeto avulso.",
    tldr: "Em 2026, um site para clínica ou consultório custa de cerca de R$100 a R$300/mês no modelo por assinatura (com domínio, hospedagem, suporte e, às vezes, agendamento online inclusos) ou de R$2.000 a R$12.000 num projeto avulso, dependendo de recursos como agendamento, integração com prontuário e número de páginas.",
    group: "clinicas",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    related: [
      "quanto-custa-site-pequena-empresa",
      "site-para-psicologo",
      "ia-automacao-clinicas-sigilo",
    ],
    Content: QuantoCustaClinica,
    faq: [
      {
        q: "O que encarece o site de uma clínica?",
        a: "Agendamento online, integração com sistemas de prontuário ou gestão, múltiplas unidades/profissionais, conteúdo extenso e recursos de acessibilidade são os principais fatores que elevam o custo.",
      },
      {
        q: "Vale a pena ter agendamento online no site?",
        a: "Para a maioria das clínicas, sim: reduz faltas com lembretes, diminui o trabalho da recepção e melhora a experiência do paciente. Avalie se a ferramenta respeita a LGPD para dados de saúde.",
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
