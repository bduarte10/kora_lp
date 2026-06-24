import { diagnostic } from "@/content/diagnostic";
import { faq } from "@/content/faq";
import { services } from "@/content/services";
import { site } from "@/content/site";
import type { Metadata } from "next";

const siteUrl = site.url;
const knowsAbout = [
  "GEO",
  "Generative Engine Optimization",
  "busca por IA",
  "auditoria de presença em IA",
  "monitoramento de prompts",
  "share of voice generativo",
  "AI Share of Voice",
  "entity audit",
  "schema para GEO",
  "dados estruturados",
  "atendimento com IA",
  "automação de atendimento",
  "bases de conhecimento",
  "agentes de IA",
  "copilots internos",
  "ChatGPT",
  "Claude",
  "Gemini",
  "Perplexity",
  "Google com IA",
];

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KORA | GEO e Atendimento com IA para PMEs",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  generator: "Next.js",
  keywords: [
    "GEO",
    "generative engine optimization",
    "otimização para IA",
    "busca por IA",
    "diagnóstico GEO",
    "auditoria de presença em IA",
    "monitoramento de prompts",
    "share of voice generativo",
    "AI Share of Voice",
    "entity audit",
    "schema para GEO",
    "dados estruturados",
    "autoridade digital para IA",
    "ChatGPT para empresas",
    "Claude para empresas",
    "Perplexity para empresas",
    "Google AI Overviews",
    "Google com IA",
    "automação de atendimento",
    "atendimento com IA",
    "agentes de IA",
    "base de conhecimento para IA",
    "copilots internos",
    "automação para PMEs",
    "PMEs brasileiras",
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
    title: "KORA | GEO e Atendimento com IA para PMEs",
    description: site.description,
    images: [
      {
        url: site.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "KORA | GEO e Atendimento com IA para PMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KORA | GEO e Atendimento com IA para PMEs",
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: siteUrl,
  logo: `${siteUrl}/og-default.png`,
  email: site.contact.email,
  description: site.description,
  areaServed: "BR",
  knowsAbout,
  sameAs: Object.values(site.social),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    areaServed: "BR",
    availableLanguage: "Portuguese",
    email: site.contact.email,
  },
};

export const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: siteUrl,
  inLanguage: site.locale,
  description: site.description,
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
  },
  about: knowsAbout.map((name) => ({ "@type": "Thing", name })),
};

export const diagnosticServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: diagnostic.title,
  description: diagnostic.description,
  serviceType: "Diagnóstico GEO, auditoria de presença em IA e automação de atendimento",
  provider: {
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
  },
  areaServed: { "@type": "Country", name: "Brazil" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "PMEs brasileiras",
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
  serviceType:
    "GEO, auditoria de presença em IA, monitoramento de prompts, automação de atendimento e IA aplicada para empresas",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.state,
    addressCountry: site.contact.address.country,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços KORA",
    itemListElement: [
      {
        "@type": "Offer",
        position: 1,
        itemOffered: {
          "@type": "Service",
          name: diagnostic.title,
          description: diagnostic.description,
        },
      },
      ...services.map((s, i) => ({
        "@type": "Offer",
        position: i + 2,
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    ],
  },
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: siteUrl,
    },
  ],
};

export function jsonLdString(data: object) {
  return JSON.stringify(data);
}
