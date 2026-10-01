import { type GuideGroup, groupLabels, guides } from "@/content/guias/registry";
import { site } from "@/content/site";

// Gera /llms.txt no padrão llmstxt.org a partir do conteúdo do site — mantém-se
// em sincronia automática quando novos guias são adicionados ao registry.
export const dynamic = "force-static";

function buildLlmsTxt(): string {
  const base = site.url;
  const groups: GuideGroup[] = ["fundamentos", "clinicas"];

  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name} (também ${site.alternateNames.join(", ")}) — ${site.tagline}. Atende clínicas odontológicas no Brasil com uma mensalidade de GEO: presença no Google, no Maps e em respostas de ChatGPT, Gemini e Google com IA, com perfil do Google, avaliações e páginas de procedimento cuidados todo mês. Mede a presença todo mês com as mesmas perguntas de paciente. Atendimento em português, base em São Paulo, Brasil.`,
    "",
    "Não confundir com a Kora Intelligence (koraintelligence.com), plataforma internacional de IA sem relação com esta empresa.",
    "",
    "## Páginas",
    `- [Início](${base}/): o que entra na mensalidade para clínicas, preço, método e perguntas frequentes.`,
    `- [Aplicação](${base}/diagnostico): formulário para clínicas, mensalidade a partir de ${site.pricing.monthlyFrom} por clínica, com tudo incluído.`,
    `- [Guias](${base}/guias): conteúdo answer-first sobre GEO, automação de atendimento e IA aplicada.`,
    "",
  ];

  for (const group of groups) {
    const items = guides.filter((g) => g.group === group);
    if (items.length === 0) continue;
    lines.push(`## Guias — ${groupLabels[group]}`);
    for (const g of items) {
      lines.push(`- [${g.title}](${base}/guias/${g.slug}): ${g.description}`);
    }
    lines.push("");
  }

  lines.push(
    "## Contato",
    `- WhatsApp: +${site.contact.whatsappNumber.replace(/\D/g, "")}`,
    `- LinkedIn: ${site.social.linkedin}`,
    `- Instagram: ${site.social.instagram}`,
    "",
  );

  return lines.join("\n");
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
