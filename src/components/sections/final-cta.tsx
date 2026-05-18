import { ArrowRight, MessageCircle } from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { Reveal } from "@/components/motion/reveal";
import { whatsappLink } from "@/content/site";

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
              <h2 className="display mt-6 max-w-[16ch] text-balance text-[clamp(2.5rem,4.5vw+1rem,5.5rem)] text-cream">
                Diagnóstico gratuito de 30 minutos, sem proposta empurrada.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-md text-[length:var(--fs-lead)] leading-relaxed text-cream-muted">
                Conta um pouco do que você quer resolver. Respondemos em até 24 horas úteis com
                uma agenda direta para o diagnóstico.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 space-y-4">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-cream-faint px-5 py-3 text-sm font-medium text-cream transition hover:border-cream"
                >
                  <MessageCircle size={15} />
                  Falar direto no WhatsApp
                  <ArrowRight
                    size={15}
                    className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
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
                Solicitar diagnóstico
              </p>
              <h3 className="display-balanced mt-3 text-[length:var(--fs-h3)] text-foreground">
                Conte um pouco do que você quer resolver
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
