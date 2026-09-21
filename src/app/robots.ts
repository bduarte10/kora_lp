import { site } from "@/content/site";
import type { MetadataRoute } from "next";

// Crawlers de IA que permitimos explicitamente (GEO): busca ao vivo e indexação
// de ChatGPT, Claude, Perplexity, Gemini, Copilot/Bing e treinamento aberto.
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Bingbot",
  "Amazonbot",
  "Applebot-Extended",
  "CCBot",
  "DuckAssistBot",
  "cohere-ai",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/", "/obrigado"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      // Allow explícito sinaliza intenção e mantém o controle granular por bot.
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/", disallow })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
