"use client";

import { hero } from "@/content/hero";
import { site } from "@/content/site";
import { pushEvent } from "@/lib/gtm";
import { ArrowRight } from "lucide-react";

export function FinalCtaWhatsApp() {
  return (
    <a
      href={site.ctas.callHref}
      target="_blank"
      rel="noreferrer"
      onClick={() =>
        pushEvent({ event: "whatsapp_click", label: hero.primaryCta, location: "final-cta-call" })
      }
      className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-cream px-7 text-base font-semibold text-coral-deep transition hover:bg-cream/95"
    >
      {hero.primaryCta}
      <ArrowRight
        size={18}
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </a>
  );
}
