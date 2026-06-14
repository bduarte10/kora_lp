"use client";

import { usePlanSelection } from "@/components/pricing/plan-selection";
import { type BillingPeriod, type Plan, planWhatsappLink } from "@/content/pricing";
import { pushEvent } from "@/lib/gtm";
import { cn } from "@/lib/utils";
import { ArrowRight, MessageCircle } from "lucide-react";

export function PlanCta({
  plan,
  period = "monthly",
}: {
  plan: Plan;
  period?: BillingPeriod;
}) {
  const { setSelectedPlan } = usePlanSelection();

  return (
    <div className="mt-10 space-y-3">
      <a
        href="#cta"
        onClick={() => {
          setSelectedPlan(plan.id);
          pushEvent({ event: "select_plan", plan: plan.id, location: "pricing" });
        }}
        className={cn(
          "group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition",
          plan.highlighted
            ? "bg-coral text-cream hover:bg-coral-deep"
            : "border border-border-strong text-foreground hover:border-foreground",
        )}
      >
        {plan.ctaLabel}
        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </a>

      <a
        href={planWhatsappLink(plan, period)}
        target="_blank"
        rel="noreferrer"
        onClick={() => pushEvent({ event: "whatsapp_click", location: "pricing" })}
        className="inline-flex w-full items-center justify-center gap-1.5 text-xs font-medium text-foreground-muted transition hover:text-foreground"
      >
        <MessageCircle size={13} aria-hidden />
        Tirar dúvida no WhatsApp
      </a>
    </div>
  );
}
