"use client";

import { whatsappLink } from "@/content/site";
import { pushEvent } from "@/lib/gtm";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FinalCtaWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      onClick={() => pushEvent({ event: "whatsapp_click", location: "final-cta" })}
      className="group inline-flex items-center gap-2 rounded-full border border-cream-faint px-5 py-3 text-sm font-medium text-cream transition hover:border-cream"
    >
      <MessageCircle size={15} />
      Tirar dúvida rápida no WhatsApp
      <ArrowRight
        size={15}
        className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </a>
  );
}
