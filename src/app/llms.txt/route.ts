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
    `${site.name} — ${site.tagline}. Sites profissionais por assinatura (criação, domínio, hospedagem, SSL e suporte inclusos), automação de processos e IA aplicada para PMEs brasileiras. Atendimento em português, base em São Paulo, Brasil.`,
    "",
    "## Páginas",
    `- [Início](${base}/): visão geral de planos, soluções e como funciona.`,
    `- [Planos](${base}/#planos): sites por assinatura otimizados para SEO e GEO.`,
    `- [Guias](${base}/guias): conteúdo sobre sites, custos, automação, IA e GEO.`,
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
    `- E-mail: ${site.contact.email}`,
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
