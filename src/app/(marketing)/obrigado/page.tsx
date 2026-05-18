"use client";

import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { pushEvent } from "@/lib/gtm";

export default function ThankYouPage() {
  useEffect(() => {
    pushEvent({ event: "lead_qualified", form_id: "thank-you-view" });
  }, []);

  return (
    <section className="section">
      <div className="container-text text-center">
        <h1 className="display text-[length:var(--fs-h1)]">
          Obrigado. Vamos cuidar disso agora.
        </h1>
        <p className="mt-6 text-foreground-muted">
          Sua solicitação chegou. Respondemos em até 24 horas úteis, e, se preferir, você pode
          acelerar tudo conversando direto no WhatsApp.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition hover:border-foreground"
        >
          <ArrowLeft size={16} />
          Voltar ao início
        </a>
      </div>
    </section>
  );
}
