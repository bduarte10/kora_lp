"use client";

import { site } from "@/content/site";
import { pushEvent } from "@/lib/gtm";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    pushEvent({ event: "lead_qualified", form_id: "thank-you-view" });
  }, []);

  return (
    <section className="section">
      <div className="container-text text-center">
        <h1 className="display text-[length:var(--fs-h1)]">Recebemos seu contato.</h1>
        <p className="mt-6 text-[length:var(--fs-lead)] leading-relaxed text-foreground-muted">
          Vamos fazer a pergunta do seu bairro no Google com IA e no ChatGPT e chamar você no
          WhatsApp em até 1 dia útil.
        </p>
        <a
          href={site.ctas.callHref}
          target="_blank"
          rel="noreferrer"
          onClick={() => pushEvent({ event: "whatsapp_click", location: "thank-you" })}
          className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-6 text-base font-semibold text-background transition hover:bg-foreground/90"
        >
          <MessageCircle size={17} aria-hidden />
          Quer adiantar? Chame agora
        </a>
        <a
          href="/"
          className="mt-4 flex items-center justify-center gap-2 text-sm text-foreground-muted transition hover:text-foreground"
        >
          <ArrowLeft size={16} aria-hidden />
          Voltar ao início
        </a>
      </div>
    </section>
  );
}
