import { diagnostic } from "@/content/diagnostic";
import { faq } from "@/content/faq";
import { services } from "@/content/services";
import { site } from "@/content/site";
import type { Metadata } from "next";

const siteUrl = site.url;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  generator: "Next.js",
  keywords: [
    "GEO",
    "generative engine optimization",
    "consultoria de GEO no Brasil",
    "aparecer no ChatGPT",
    "presença em IA",
    "auditoria de presença em IA",
    "automação de atendimento",
    "agentes de IA",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/" },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: [{ url: site.defaultOgImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: [site.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: site.name,
  alternateName: site.alternateNames,
  url: siteUrl,
  logo: `${siteUrl}/og-default.png`,
  image: `${siteUrl}/og-default.png`,
  description: site.description,
  slogan: site.tagline,
  email: site.contact.email,
  telephone: `+${site.contact.whatsappNumber.replace(/\D/g, "")}`,
  areaServed: { "@type": "Country", name: "Brazil" },
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.state,
      addressCountry: site.contact.address.country,
    },
  },
  knowsAbout: [
    "GEO (Generative Engine Optimization)",
    "Auditoria de presença em IA",
    "Monitoramento de menções em ChatGPT, Gemini e Perplexity",
    "Dados estruturados e entidade de marca",
    "Conteúdo answer-first",
    "Automação de atendimento no WhatsApp",
    "Agentes de IA",
    "Inteligência artificial aplicada a negócios",
  ],
  sameAs: Object.values(site.social),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    areaServed: "BR",
    availableLanguage: "Portuguese",
    email: site.contact.email,
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: site.name,
  url: siteUrl,
  description: site.description,
  inLanguage: "pt-BR",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export const diagnosticServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: diagnostic.title,
  description: diagnostic.description,
  serviceType: "Diagnóstico GEO, auditoria de presença em IA e automação de atendimento",
  provider: { "@id": `${siteUrl}/#organization` },
  areaServed: { "@type": "Country", name: "Brazil" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "PMEs brasileiras",
  },
  offers: {
    "@type": "Offer",
    url: `${siteUrl}/diagnostico`,
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "BRL",
      minPrice: site.pricing.diagnosticFromBRL,
    },
  },
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: siteUrl,
  image: `${siteUrl}/og-default.png`,
  areaServed: { "@type": "Country", name: "Brazil" },
  serviceType: "Consultoria de GEO, auditoria de presença em IA e automação de atendimento",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.state,
    addressCountry: site.contact.address.country,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços KORA",
    itemListElement: services.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Service", name: s.title, description: s.description },
    })),
  },
};

export function buildFaqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleJsonLd(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    inLanguage: "pt-BR",
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { "@type": "Organization", name: site.name, url: siteUrl },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": article.url },
  };
}

export const faqJsonLd = buildFaqJsonLd(faq);

export const breadcrumbJsonLd = buildBreadcrumbJsonLd([{ name: "Início", url: siteUrl }]);

export function jsonLdString(data: object) {
  return JSON.stringify(data);
}
