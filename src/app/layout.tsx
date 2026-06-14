import { JsonLd } from "@/components/seo/json-ld";
import { ConsentBanner } from "@/components/tracking/consent-banner";
import { GTM, GTMNoScript } from "@/components/tracking/gtm";
import { PostHog } from "@/components/tracking/posthog";
import { baseMetadata, organizationJsonLd } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = baseMetadata;

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  width: "device-width",
  initialScale: 1,
};

const skipLinkClass =
  "absolute left-4 top-4 z-[100] -translate-y-24 rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background focus-visible:translate-y-0 focus-visible:outline-none";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <GTM />
        <JsonLd data={organizationJsonLd} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a href="#main" className={skipLinkClass}>
          Pular para o conteúdo
        </a>
        <GTMNoScript />
        {children}
        <ConsentBanner />
        <PostHog />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
