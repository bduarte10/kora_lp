import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { PlanCta } from "@/components/pricing/plan-cta";
import { plans, pricingLead, pricingLeadDetail, pricingNote } from "@/content/pricing";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="planos" className="section bg-bone border-y border-border">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow section-anchor">Planos de site</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-5 max-w-[22ch] text-[length:var(--fs-h1)]">
            Seu site no ar.{" "}
            <span className="text-foreground-muted">Tudo incluso, por assinatura.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-[length:var(--fs-lead)] leading-relaxed">
            <span className="font-medium text-foreground">{pricingLead}</span>{" "}
            <span className="text-foreground-muted">{pricingLeadDetail}</span>
          </p>
        </Reveal>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={0.05 * i}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-8 sm:p-10",
                  plan.highlighted
                    ? "border-coral bg-background shadow-lg ring-1 ring-coral"
                    : "border-border bg-background",
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1 text-xs font-medium text-cream shadow-sm">
                    Mais escolhido
                  </span>
                )}
                <h3 className="display-balanced text-[length:var(--fs-h2)]">{plan.name}</h3>
                <p className="mt-3 min-h-[3rem] max-w-[34ch] leading-relaxed text-foreground-muted">
                  {plan.forWho}
                </p>

                <div className="mt-8 border-t border-border pt-8">
                  <div className="flex items-end gap-1">
                    <span className="display text-[length:var(--fs-h1)] leading-none">
                      {plan.monthly}
                    </span>
                    <span className="mb-1 text-sm text-foreground-muted">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-foreground-subtle">
                    + {plan.setup} de setup único
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={15} className="mt-[3px] shrink-0 text-coral" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <PlanCta plan={plan} />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 max-w-prose text-sm text-foreground-subtle">
          <p>{pricingNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
