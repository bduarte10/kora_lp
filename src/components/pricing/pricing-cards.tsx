"use client";

import { Reveal } from "@/components/motion/reveal";
import { PlanCta } from "@/components/pricing/plan-cta";
import { type BillingPeriod, planPrice, plans, pricingTrust } from "@/content/pricing";
import { pushEvent } from "@/lib/gtm";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";

export function PricingCards() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  const select = (next: BillingPeriod) => {
    setPeriod(next);
    pushEvent({ event: "toggle_billing", period: next });
  };

  return (
    <>
      <Reveal delay={0.12} className="mt-12">
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex rounded-full border border-border bg-background p-1 text-sm">
            <button
              type="button"
              onClick={() => select("monthly")}
              aria-pressed={period === "monthly"}
              className={cn(
                "rounded-full px-4 py-1.5 font-medium transition",
                period === "monthly"
                  ? "bg-foreground text-background"
                  : "text-foreground-muted hover:text-foreground",
              )}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => select("annual")}
              aria-pressed={period === "annual"}
              className={cn(
                "rounded-full px-4 py-1.5 font-medium transition",
                period === "annual"
                  ? "bg-foreground text-background"
                  : "text-foreground-muted hover:text-foreground",
              )}
            >
              Anual
            </button>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-coral/10 px-3 py-1 text-xs font-medium text-coral-deep">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" aria-hidden />2 meses
            grátis no anual
          </span>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.id} delay={0.05 * i}>
            <article
              className={cn(
                "flex h-full flex-col rounded-2xl border p-8 sm:p-10",
                plan.highlighted ? "border-coral bg-background" : "border-border bg-background",
              )}
            >
              <div className="flex min-h-[1.25rem] items-center">
                {plan.highlighted && (
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-coral-deep">
                    Mais escolhido
                  </span>
                )}
              </div>

              <h3 className="display-balanced mt-3 text-[length:var(--fs-h2)]">{plan.name}</h3>
              <p className="mt-3 min-h-[3rem] max-w-[34ch] leading-relaxed text-foreground-muted">
                {plan.forWho}
              </p>

              <div className="mt-8 border-t border-border pt-8">
                <div className="flex items-end gap-1">
                  <span className="display text-[length:var(--fs-h1)] leading-none">
                    {planPrice(plan, period)}
                  </span>
                  <span className="mb-1 text-sm text-foreground-muted">/mês</span>
                </div>
                <p className="mt-2 text-sm text-foreground-subtle">
                  {period === "annual" ? plan.valueAnchorAnnual : plan.valueAnchor}
                </p>
                {period === "annual" && (
                  <p className="mt-1 text-sm text-foreground-subtle">
                    cobrado anual · {plan.annualNote}
                  </p>
                )}
                <p className="mt-1 text-sm text-foreground-muted">
                  + {plan.setup} de setup · cobrado uma vez, na criação
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

              <PlanCta plan={plan} period={period} />
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-10">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {pricingTrust.map((item) => (
            <li
              key={item}
              className="flex items-center gap-1.5 text-sm font-medium text-foreground-muted"
            >
              <Check size={14} className="shrink-0 text-coral" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </>
  );
}
