import { ProgressiveLeadForm } from "@/components/forms/progressive-lead-form";
import { JsonLd } from "@/components/seo/json-ld";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { diagnostic } from "@/content/diagnostic";
import { diagnosticApplication } from "@/content/diagnostic-application";
import { site, whatsappLink } from "@/content/site";
import { diagnosticServiceJsonLd } from "@/lib/seo";
import { ArrowLeft, Linkedin, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

const pageUrl = `${site.url}${diagnosticApplication.route}`;

export const metadata: Metadata = {
  title: "Aplicação para Diagnóstico GEO",
  description: diagnosticApplication.description,
  alternates: {
    canonical: diagnosticApplication.route,
    languages: { "pt-BR": diagnosticApplication.route },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: pageUrl,
    siteName: site.name,
    title: "Aplicação para Diagnóstico GEO | KORA",
    description: diagnosticApplication.description,
    images: [
      {
        url: site.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Aplicação para Diagnóstico GEO KORA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplicação para Diagnóstico GEO | KORA",
    description: diagnosticApplication.description,
    images: [site.defaultOgImage],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: site.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Diagnóstico",
      item: pageUrl,
    },
  ],
};

export default function DiagnosticApplicationPage() {
  return (
    <>
      <JsonLd data={diagnosticServiceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-border bg-background/90 backdrop-blur-xl">
          <div className="container-page flex min-h-16 items-center justify-between gap-4 py-3">
            <a
              href="/"
              className="text-base font-semibold tracking-[-0.04em]"
              aria-label={`${site.name}, início`}
            >
              {site.name}
            </a>
            <div className="flex items-center gap-3">
              <a
                href="/"
                className="hidden items-center gap-2 text-sm font-medium text-foreground-muted transition hover:text-foreground sm:inline-flex"
              >
                <ArrowLeft size={15} />
                Voltar para o site
              </a>
              <TrackedLink
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                event={{ event: "whatsapp_click", location: "diagnostic-page-header" }}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground-muted transition hover:border-border-strong hover:text-foreground"
              >
                <MessageCircle size={15} />
                WhatsApp
              </TrackedLink>
            </div>
          </div>
        </header>

        <section className="container-page py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="border-b border-border pb-8">
                <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
                  Aplicação KORA
                </p>
                <h1 className="display mt-5 max-w-[12ch] text-[length:var(--fs-h1)]">
                  {diagnosticApplication.title}
                </h1>
                <p className="mt-6 max-w-prose text-[length:var(--fs-lead)] leading-relaxed text-foreground-muted">
                  {diagnosticApplication.description}
                </p>
              </div>

              <div className="py-8">
                <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
                  O que esperar
                </p>
                <div className="mt-5 divide-y divide-border border-y border-border">
                  {diagnosticApplication.expectations.map((item) => (
                    <div key={item.label} className="grid gap-2 py-5 sm:grid-cols-[7rem_1fr]">
                      <p className="text-xs font-medium uppercase tracking-wider text-coral">
                        {item.label}
                      </p>
                      <div>
                        <p className="font-medium text-foreground">{item.value}</p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-foreground-muted">
                {diagnostic.note}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-border bg-paper p-5 shadow-lg sm:p-8 lg:p-10">
                <ProgressiveLeadForm />
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-border">
          <div className="container-page flex flex-col gap-3 py-6 text-xs text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
            <p>{diagnosticApplication.footerNote}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="KORA no LinkedIn"
                className="inline-flex items-center gap-1.5 hover:text-foreground"
              >
                <Linkedin size={14} aria-hidden />
                LinkedIn
              </a>
              <a href="/politica-de-privacidade" className="hover:text-foreground">
                Política de privacidade
              </a>
              <a href="/termos" className="hover:text-foreground">
                Termos
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
