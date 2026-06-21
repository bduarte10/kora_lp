import { Reveal } from "@/components/motion/reveal";
import { solutions } from "@/content/solutions";
import { ArrowRight } from "lucide-react";

export function Solutions() {
  return (
    <section id="solucoes" className="section bg-bone border-y border-border">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow section-anchor">Soluções</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-5 max-w-[24ch] text-[length:var(--fs-h1)]">
            Visibilidade em IA precisa de operação por trás.{" "}
            <span className="text-foreground-muted">Não só conteúdo bonito.</span>
          </h2>
        </Reveal>

        <div className="mt-20 divide-y divide-border border-y border-border">
          {solutions.map((s, i) => (
            <Reveal key={s.id} delay={0.04 * i}>
              <article className="grid gap-8 py-14 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-foreground-faint">{s.index}</span>
                    <span className="h-px w-12 bg-border-strong" aria-hidden />
                  </div>
                  <h3 className="display-balanced mt-4 text-[length:var(--fs-h2)]">{s.kicker}</h3>
                </div>

                <div className="md:col-span-9">
                  <p className="display-balanced max-w-[28ch] text-[length:var(--fs-h3)]">
                    {s.title}
                  </p>
                  <p className="mt-5 max-w-prose leading-relaxed text-foreground-muted">
                    {s.description}
                  </p>
                  <a
                    href={s.ctaHref}
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-coral transition hover:text-coral-deep"
                  >
                    {s.ctaLabel}
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
