import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { NoiseBackground } from "@/components/ui/noise-background";
import { site, whatsappLink } from "@/content/site";

const pillars = ["Sites", "Automação", "IA Aplicada", "Suporte Contínuo"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-coral text-cream">
      <NoiseBackground />

      <div className="container-page relative z-10 flex min-h-[88vh] flex-col pt-28 pb-12 sm:pt-32 lg:pt-36 lg:pb-16">
        {/* Editorial strip topo */}
        <Reveal delay={0.04}>
          <div className="flex items-center gap-x-6 border-b border-cream-faint pb-5">
            <span className="text-[13px] font-medium section-anchor section-anchor-cream">
              <span className="text-cream-muted">Sites, automação e IA para PMEs brasileiras</span>
            </span>
            <span className="hidden h-px flex-1 bg-cream-faint sm:block" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-cream-faint">
              BR / 2026
            </span>
          </div>
        </Reveal>

        {/* Bloco central: H1 massive */}
        <div className="flex-1 flex flex-col justify-center py-14 sm:py-20">
          <h1 className="display max-w-[16ch] text-[length:var(--fs-display)] text-cream">
            <span className="hero-line">
              <span>Seu site no ar.</span>
            </span>
            <span className="hero-line">
              <span>Tudo incluso.</span>
            </span>
          </h1>

          <Reveal delay={0.34}>
            <p className="mt-7 max-w-xl text-[length:var(--fs-lead)] leading-relaxed text-cream">
              Criação, hospedagem, domínio e suporte contínuo numa assinatura simples — sem custo
              escondido, sem dor de cabeça. E quando quiser escalar, automação e IA sob medida.
            </p>
          </Reveal>

          <Reveal delay={0.44}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#planos"
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-medium text-coral-deep transition hover:bg-cream/95"
              >
                {site.ctas.primary}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream-faint px-5 py-3 text-sm font-medium text-cream transition hover:border-cream"
                style={{ borderColor: "rgb(250 246 242 / 0.35)" }}
              >
                <MessageCircle size={15} />
                {site.ctas.secondary}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Faixa pilares marquee — mask gradient nas bordas fade o texto sem cobrir o aurora */}
        <Reveal delay={0.52}>
          <div className="border-t border-cream-faint pt-6">
            <div
              className="overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
              }}
            >
              <div className="marquee-track flex w-max gap-12">
                {[...pillars, ...pillars, ...pillars, ...pillars].map((p, i) => (
                  <span
                    key={i}
                    className="flex shrink-0 items-center text-[length:var(--fs-h3)] tracking-tight text-cream-muted"
                  >
                    {p}
                    <span className="ml-12 text-cream-faint" aria-hidden>
                      ·
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
