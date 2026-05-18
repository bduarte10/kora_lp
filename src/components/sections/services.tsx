import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/content/services";

export function Services() {
  return (
    <section id="servicos" className="section bg-bone border-y border-border">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow section-anchor">O que entregamos</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-5 max-w-[26ch] text-[length:var(--fs-h1)]">
            Do diagnóstico inicial ao seu time operando sozinho.
          </h2>
        </Reveal>

        <div className="mt-20 divide-y divide-border border-y border-border">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={0.04 * i}>
              <article className="grid gap-8 py-14 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-foreground-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-12 bg-border-strong" aria-hidden />
                  </div>
                  <h3 className="display-balanced mt-4 text-[length:var(--fs-h2)]">
                    {s.kicker}
                  </h3>
                </div>

                <div className="md:col-span-9">
                  <p className="display-balanced max-w-[28ch] text-[length:var(--fs-h3)]">
                    {s.title}
                  </p>
                  <p className="mt-5 max-w-prose leading-relaxed text-foreground-muted">
                    {s.description}
                  </p>

                  <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                        <Check
                          size={15}
                          className="mt-[3px] shrink-0 text-coral"
                          aria-hidden
                        />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
