import { Reveal } from "@/components/motion/reveal";
import { methodology } from "@/content/methodology";
import { Check, FileCheck2, Gauge, Radar, Search, ShieldCheck } from "lucide-react";

const frameworkIcons = [Search, Radar, Gauge, ShieldCheck, FileCheck2] as const;

export function Methodology() {
  return (
    <section id="metodologia" className="section scroll-mt-16 bg-foreground text-background">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow section-anchor section-anchor-cream text-cream-muted">
                {methodology.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-5 max-w-[18ch] text-[length:var(--fs-h1)]">
                {methodology.title}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="max-w-3xl text-[length:var(--fs-lead)] leading-relaxed text-cream-muted">
              {methodology.description}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="mt-16">
          <div className="border-y border-cream-faint py-6">
            <p className="font-mono text-xs uppercase tracking-wider text-cream-faint">
              {methodology.frameworkName}
            </p>
            <ol className="mt-6 grid gap-4 lg:grid-cols-5">
              {methodology.framework.map((step, i) => {
                const Icon = frameworkIcons[i] ?? Search;
                return (
                  <li
                    key={step.id}
                    className="group border border-cream-faint p-5 transition duration-300 hover:bg-background/10"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs text-cream-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        size={18}
                        className="text-coral transition-transform duration-500 group-hover:scale-110"
                        aria-hidden
                      />
                    </div>
                    <h3 className="display-balanced mt-8 min-h-14 text-[length:var(--fs-h3)]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-cream-muted">
                      {step.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-flow-dense gap-4 lg:grid-cols-12">
          <Reveal delay={0.04} className="lg:col-span-7">
            <article className="h-full border border-cream-faint p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-cream-faint">
                {methodology.metricsTitle}
              </p>
              <h3 className="display-balanced mt-4 max-w-[20ch] text-[length:var(--fs-h2)]">
                Baseline, evolução e comparação contra concorrentes.
              </h3>
              <p className="mt-5 max-w-2xl leading-relaxed text-cream-muted">
                {methodology.metricsIntro}
              </p>
              <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {methodology.metrics.map((metric) => (
                  <li key={metric.label} className="flex items-start gap-3">
                    <Check size={16} className="mt-1 shrink-0 text-coral" aria-hidden />
                    <div>
                      <p className="font-medium">{metric.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-cream-muted">
                        {metric.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <article className="flex h-full flex-col justify-between border border-cream-faint bg-background/10 p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-cream-faint">
                Limite honesto
              </p>
              <p className="mt-8 display-balanced text-[length:var(--fs-h3)] leading-tight">
                {methodology.caveat}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-4">
            <article className="h-full border border-cream-faint p-6 sm:p-8">
              <h3 className="display-balanced text-[length:var(--fs-h3)]">
                {methodology.scope.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-muted">
                {methodology.scope.description}
              </p>
              <ul className="mt-6 space-y-2">
                {methodology.scope.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-cream-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coral" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-4">
            <article className="h-full border border-cream-faint p-6 sm:p-8">
              <h3 className="display-balanced text-[length:var(--fs-h3)]">
                {methodology.monitoring.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-muted">
                {methodology.monitoring.description}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-4">
            <article className="h-full border border-cream-faint p-6 sm:p-8">
              <h3 className="display-balanced text-[length:var(--fs-h3)]">
                {methodology.evidence.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-muted">
                {methodology.evidence.description}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
