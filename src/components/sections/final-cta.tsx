import { Reveal } from "@/components/motion/reveal";
import { FinalCtaWhatsApp } from "@/components/sections/final-cta-whatsapp";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { site } from "@/content/site";
import { ArrowRight } from "lucide-react";

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
                Quer saber se existe fit?
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-md text-[length:var(--fs-lead)] leading-relaxed text-cream-muted">
                Aplique para o Diagnóstico GEO & Automação de Atendimento. Se a KORA puder ajudar,
                retornamos com próximos passos e escopo inicial.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 space-y-4">
                <FinalCtaWhatsApp />
                <p className="text-xs text-cream-faint">
                  Para uma dúvida objetiva antes de aplicar.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Coluna direita: form em painel cream */}
          <Reveal delay={0.22} className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-2xl bg-paper p-6 text-foreground shadow-lg sm:p-10">
              <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
                Fale com a gente
              </p>
              <h3 className="display-balanced mt-3 text-[length:var(--fs-h3)] text-foreground">
                Aplicação para diagnóstico
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-foreground-muted">
                Abra a experiência dedicada, responda em etapas e envie sua aplicação para análise
                de fit.
              </p>
              <TrackedLink
                href={site.ctas.navHref}
                event={{
                  event: "cta_click",
                  label: site.ctas.nav,
                  location: "final-cta-application",
                }}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
              >
                {site.ctas.nav}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </TrackedLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
