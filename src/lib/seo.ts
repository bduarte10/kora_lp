import { faq } from "@/content/faq";
import { offer } from "@/content/offer";
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
    "marketing para clínica odontológica",
    "avaliações no Google para dentista",
    "clínica odontológica no Google",
    "aparecer no ChatGPT",
    "GEO para clínicas",
    "presença em IA",
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: site.name,
  alternateName: site.alternateNames,
  legalName: site.legalName,
  taxID: site.cnpj,
  foundingDate: site.foundingDate,
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  image: `${siteUrl}${site.defaultOgImage}`,
  description: site.description,
  slogan: site.tagline,
  telephone: `+${site.contact.whatsappNumber.replace(/\D/g, "")}`,
  areaServed: { "@type": "Country", name: "Brazil" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.street,
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.state,
    postalCode: site.contact.address.postalCode,
    addressCountry: site.contact.address.country,
  },
  knowsAbout: [
    "GEO (Generative Engine Optimization)",
    "Presença de clínicas odontológicas no Google e em IA",
    "Google Business Profile e avaliações",
    "Publicidade odontológica e Código de Ética Odontológica",
    "Dados estruturados e entidade de marca",
  ],
  sameAs: Object.values(site.social),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    areaServed: "BR",
    availableLanguage: "Portuguese",
    telephone: `+${site.contact.whatsappNumber.replace(/\D/g, "")}`,
    url: `${siteUrl}/diagnostico`,
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

export const offerServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: offer.title,
  description: offer.description,
  serviceType: "Presença no Google, no Maps e em respostas de IA para clínicas odontológicas",
  provider: { "@id": `${siteUrl}/#organization` },
  areaServed: { "@type": "Country", name: "Brazil" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Clínicas odontológicas",
  },
  offers: {
    "@type": "Offer",
    url: `${siteUrl}/diagnostico`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "BRL",
      minPrice: site.pricing.monthlyFromBRL,
      unitCode: "MON",
      unitText: "mês",
    },
  },
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: siteUrl,
  image: `${siteUrl}${site.defaultOgImage}`,
  areaServed: { "@type": "Country", name: "Brazil" },
  serviceType: "Presença no Google, no Maps e em respostas de IA para clínicas odontológicas",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.street,
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.state,
    postalCode: site.contact.address.postalCode,
    addressCountry: site.contact.address.country,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `Serviços ${site.name}`,
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
