/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://koraintelligence.com.br",
  generateRobotsTxt: false, // gerenciado por app/robots.ts
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/obrigado", "/api/*", "/manifest.webmanifest", "/robots.txt", "/sitemap.xml"],
  transform: async (config, path) => {
    const priority = path === "/" ? 1.0 : path.startsWith("/servicos") ? 0.9 : 0.6;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
