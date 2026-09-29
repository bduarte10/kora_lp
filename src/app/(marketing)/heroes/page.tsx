import { heroVariants } from "@/content/hero-variants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prévias de hero",
  robots: { index: false, follow: false },
};

export default function HeroesIndexPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <p className="eyebrow section-anchor">Prévias</p>
        <h1 className="display mt-5 text-[length:var(--fs-h1)]">Opções de hero</h1>
        <p className="mt-5 max-w-prose text-foreground-muted">
          Cada página é uma cópia da home com um hero diferente. A home em{" "}
          <a href="/" className="underline underline-offset-4">
            /
          </a>{" "}
          continua como está.
        </p>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {heroVariants.map((v) => (
            <li key={v.id}>
              <a
                href={`/${v.id}`}
                className="grid grid-cols-[4rem_1fr] items-baseline gap-4 py-5 transition hover:text-coral sm:grid-cols-[4rem_14rem_1fr]"
              >
                <span className="font-mono text-sm text-foreground-subtle">/{v.id}</span>
                <span className="font-medium">{v.reference}</span>
                <span className="col-start-2 text-foreground-muted sm:col-start-auto">
                  {v.idea}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
