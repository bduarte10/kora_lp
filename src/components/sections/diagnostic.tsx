import { LeadForm } from "@/components/forms/lead-form";
import { Reveal } from "@/components/motion/reveal";
import { diagnostic } from "@/content/diagnostic";
import { Check, SearchCheck } from "lucide-react";

export function Diagnostic() {
  return (
    <section id="diagnostico" className="section scroll-mt-16 bg-bone border-y border-border">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow section-anchor">Aplicação para Diagnóstico GEO</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-5 max-w-[18ch] text-[length:var(--fs-h1)]">
              {diagnostic.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-prose text-[length:var(--fs-lead)] leading-relaxed text-foreground-muted">
              {diagnostic.description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 border-y border-border py-8">
              <div className="flex items-center gap-3">
                <SearchCheck size={18} className="text-coral" aria-hidden />
                <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
                  Entregáveis
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {diagnostic.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check size={15} className="mt-[3px] shrink-0 text-coral" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
                Bom fit para
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground-muted">
                {diagnostic.fitCriteria.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-2xl bg-paper p-6 text-foreground shadow-lg sm:p-10">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
              Solicite uma análise de fit
            </p>
            <h3 className="display-balanced mt-3 text-[length:var(--fs-h3)] text-foreground">
              Responda algumas perguntas para entendermos o contexto.
            </h3>
            <div className="mt-7">
              <LeadForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
