import { JsonLd } from "@/components/seo/json-ld";
import { type GuideGroup, groupLabels, guides } from "@/content/guias/registry";
import { site } from "@/content/site";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guias: sites, automação e IA para empresas",
  description:
    "Guias práticos da KORA sobre criação de sites, custos, automação, IA e otimização para o Google e para IAs (GEO), com uma série focada em clínicas e consultórios.",
  alternates: { canonical: "/guias" },
  openGraph: {
    type: "website",
    url: "/guias",
    title: "Guias KORA: sites, automação e IA para empresas",
    description:
      "Guias práticos sobre criação de sites, custos, automação, IA e GEO — com série focada em clínicas e consultórios.",
  },
};

const groupOrder: GuideGroup[] = ["fundamentos", "clinicas"];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Guias KORA",
  itemListElement: guides.map((g, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${site.url}/guias/${g.slug}`,
    name: g.title,
  })),
};

export default function GuiasIndexPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <JsonLd data={itemListJsonLd} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Início", url: site.url },
          { name: "Guias", url: `${site.url}/guias` },
        ])}
      />

      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wider text-coral-deep">Guias</p>
        <h1 className="display mt-3 text-[length:var(--fs-h1)] leading-[1.1]">
          Sites, automação e IA — explicados sem enrolação
        </h1>
        <p className="mt-4 leading-relaxed text-foreground-muted">
          Respostas diretas para as dúvidas de quem quer colocar a empresa no ar e operar melhor.
          Inclui uma série dedicada a clínicas e consultórios.
        </p>
      </header>

      <div className="mt-14 space-y-14">
        {groupOrder.map((group) => {
          const items = guides.filter((g) => g.group === group);
          if (items.length === 0) return null;
          return (
            <section key={group} aria-labelledby={`group-${group}`}>
              <h2
                id={`group-${group}`}
                className="font-mono text-xs uppercase tracking-wider text-foreground-faint"
              >
                {groupLabels[group]}
              </h2>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {items.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/guias/${g.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition hover:border-coral"
                    >
                      <h3 className="font-semibold leading-snug text-foreground group-hover:text-coral">
                        {g.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground-muted">
                        {g.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
