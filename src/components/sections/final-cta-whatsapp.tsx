"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { usePlanSelection } from "@/components/pricing/plan-selection";
import { planById, planWhatsappLink } from "@/content/pricing";
import { whatsappLink } from "@/content/site";
import { pushEvent } from "@/lib/gtm";

export function FinalCtaWhatsApp() {
  const { selectedPlan } = usePlanSelection();
  const plan = planById(selectedPlan);
  const href = plan ? planWhatsappLink(plan) : whatsappLink();

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => pushEvent({ event: "whatsapp_click", location: "final-cta" })}
      className="group inline-flex items-center gap-2 rounded-full border border-cream-faint px-5 py-3 text-sm font-medium text-cream transition hover:border-cream"
    >
      <MessageCircle size={15} />
      Falar direto no WhatsApp
      <ArrowRight
        size={15}
        className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </a>
  );
}
