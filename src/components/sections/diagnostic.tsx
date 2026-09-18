import { Reveal } from "@/components/motion/reveal";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { diagnostic } from "@/content/diagnostic";
import { site } from "@/content/site";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

const featuredDeliverables = diagnostic.deliverables.slice(0, 3);

export function Diagnostic() {
  return (
    <section id="diagnostico" className="section scroll-mt-16 bg-bone border-y border-border">
      <div className="container-page grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-x-16 lg:gap-y-10">
        <div className="max-w-2xl lg:col-span-6">
          <Reveal>
            <p className="eyebrow section-anchor">Aplicação para Diagnóstico GEO</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-5 max-w-[16ch] text-[length:var(--fs-h1)]">
              {diagnostic.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-[length:var(--fs-lead)] leading-relaxed text-foreground-muted">
              {diagnostic.description}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="lg:col-span-5 lg:col-start-8 lg:row-span-2">
          <div className="rounded-2xl bg-paper p-6 text-foreground shadow-lg sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
              Próximo passo
            </p>
            <h3 className="display-balanced mt-3 text-[length:var(--fs-h3)] text-foreground">
              Aplique em uma página focada, sem distrações.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-foreground-muted">
              O formulário progressivo leva poucos minutos e coleta só o necessário para avaliarmos
              fit, urgência e próximos passos.
            </p>

            <div className="mt-7 grid grid-cols-2 border-y border-border text-sm">
              <div className="border-r border-border py-4 pr-4">
                <p className="font-medium text-foreground">3 a 4 min</p>
                <p className="mt-1 text-xs text-foreground-subtle">Tempo médio</p>
              </div>
              <div className="py-4 pl-4">
                <p className="font-medium text-foreground">{site.pricing.diagnosticFrom}</p>
                <p className="mt-1 text-xs text-foreground-subtle">Diagnóstico a partir de</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-foreground-muted">{diagnostic.note}</p>

            <TrackedLink
              href={site.ctas.applyHref}
              event={{
                event: "cta_click",
                label: site.ctas.apply,
                location: "diagnostic-section",
              }}
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              {site.ctas.apply}
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </TrackedLink>

            <TrackedLink
              href={site.ctas.callHref}
              target="_blank"
              rel="noreferrer"
              event={{
                event: "cta_click",
                label: site.ctas.call,
                location: "diagnostic-section-call",
              }}
              className="mt-4 flex w-full items-center justify-center gap-2 text-sm font-medium text-foreground-muted underline-offset-4 transition hover:text-foreground hover:underline"
            >
              <MessageCircle size={15} />
              Ou agende 15 minutos antes de aplicar
            </TrackedLink>
          </div>
        </Reveal>

        <div className="max-w-2xl lg:col-span-6">
          <Reveal delay={0.14}>
            <div className="border-y border-border py-7">
              <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
                O que você recebe
              </p>
              <ul className="mt-5 space-y-3">
                {featuredDeliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Check size={15} className="mt-[3px] shrink-0 text-coral" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-foreground-muted">
              Bom fit para PMEs com operação ativa, demanda recorrente e intenção de implantar IA
              com método.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
