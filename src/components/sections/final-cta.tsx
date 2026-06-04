import { LeadForm } from "@/components/forms/lead-form";
import { Reveal } from "@/components/motion/reveal";
import { FinalCtaWhatsApp } from "@/components/sections/final-cta-whatsapp";

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-coral text-cream">
      <div className="aurora-bg" aria-hidden>
        <div className="aurora-orb aurora-orb--peach" />
        <div className="aurora-orb aurora-orb--gold" />
        <div className="aurora-orb aurora-orb--rose" />
      </div>

      <div className="container-page section relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-20">
          {/* Coluna esquerda: copy + WhatsApp */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow section-anchor section-anchor-cream text-cream-muted">
                Próximo passo
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 max-w-[18ch] text-balance text-[length:var(--fs-h1)] text-cream">
                Pronto pra colocar sua empresa no ar?
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-md text-[length:var(--fs-lead)] leading-relaxed text-cream-muted">
                Escolheu um plano de site ou quer um diagnóstico de automação e IA? Conta o que
                você precisa e respondemos em até 24 horas úteis.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 space-y-4">
                <FinalCtaWhatsApp />
                <p className="text-xs text-cream-faint">
                  Para conversa rápida ou casos urgentes.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Coluna direita: form em painel cream */}
          <Reveal
            delay={0.22}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="rounded-2xl bg-paper p-6 text-foreground shadow-lg sm:p-10">
              <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
                Fale com a gente
              </p>
              <h3 className="display-balanced mt-3 text-[length:var(--fs-h3)] text-foreground">
                Conte o que você precisa
              </h3>
              <div className="mt-7">
                <LeadForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
