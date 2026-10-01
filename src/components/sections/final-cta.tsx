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
                Quer ver como sua clínica aparece hoje?
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-md text-[length:var(--fs-lead)] leading-relaxed text-cream-muted">
                Em 15 minutos, sem custo, a gente faz junto as perguntas que seu paciente faria ao
                Google e ao ChatGPT e mostra quem aparece hoje. Se fizer sentido, a mensalidade vem
                depois.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 space-y-4">
                <FinalCtaWhatsApp />
                <p className="text-[13px] text-cream-muted">
                  Grátis e sem compromisso. Mensalidade a partir de{" "}
                  {site.pricing.monthlyFrom}.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Coluna direita: form em painel cream */}
          <Reveal delay={0.22} className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-2xl bg-paper p-6 text-foreground shadow-lg sm:p-10">
              <p className="font-mono text-[13px] uppercase tracking-wider text-foreground-subtle">
                Prefere que a gente chame?
              </p>
              <h3 className="display-balanced mt-3 text-[length:var(--fs-h3)] text-foreground">
                Deixe seu contato
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-foreground-muted">
                Nome, clínica e bairro. Em até 1 dia útil a gente chama você no WhatsApp, já com a
                pergunta do seu bairro feita.
              </p>
              <TrackedLink
                href={site.ctas.applyHref}
                event={{
                  event: "cta_click",
                  label: site.ctas.apply,
                  location: "final-cta-application",
                }}
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
              >
                {site.ctas.apply}
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
