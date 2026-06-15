import { guides } from "@/content/guias/registry";
import { site } from "@/content/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const guideEntries: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/guias/${g.slug}`,
    lastModified: new Date(`${g.dateModified}T12:00:00`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/guias`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...guideEntries,
    {
      url: `${base}/politica-de-privacidade`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    { url: `${base}/termos`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
