import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { NoiseBackground } from "@/components/ui/noise-background";
import { site, whatsappLink } from "@/content/site";

const pillars = ["Sites", "Automação", "IA Aplicada", "Suporte Contínuo"];

const includes = [
  "Site profissional sob medida",
  "Domínio + hospedagem + SSL",
  "WhatsApp integrado",
  "SEO + GEO (otimização para IA)",
  "Suporte e alterações contínuas",
];

const reassurance = ["No ar em dias", "Sem fidelidade", "Suporte humano"];

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

        {/* Bloco central: 2 colunas — copy à esquerda, inclusos à direita */}
        <div className="flex-1 py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            {/* Esquerda: H1 + sub + CTAs + reasseguramento */}
            <div className="lg:col-span-7">
              <h1 className="display text-[clamp(2rem,2.6vw+1rem,3.25rem)] text-cream">
                <span className="hero-line">
                  <span>Comece com um site.</span>
                </span>
                <span className="hero-line">
                  <span>Escale com automação e IA.</span>
                </span>
              </h1>

              <Reveal delay={0.34}>
                <p className="mt-7 max-w-md text-[length:var(--fs-lead)] leading-relaxed text-cream">
                  Criação, hospedagem, domínio e suporte numa assinatura simples. Sem taxas
                  escondidas.
                </p>
              </Reveal>

              <Reveal delay={0.44}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
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
                    className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-cream transition hover:border-cream"
                    style={{ borderColor: "rgb(250 246 242 / 0.35)" }}
                  >
                    <MessageCircle size={15} />
                    {site.ctas.secondary}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.52}>
                <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-cream-muted">
                  {reassurance.map((r, i) => (
                    <li key={r} className="flex items-center gap-3">
                      {i > 0 && (
                        <span className="text-cream-faint" aria-hidden>
                          ·
                        </span>
                      )}
                      {r}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Direita: checklist de inclusos */}
            <Reveal delay={0.42} className="lg:col-span-5">
              <div className="border-t border-cream-faint pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-cream-faint">
                  Tudo incluso
                </p>
                <ul className="mt-5 space-y-3.5">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[length:var(--fs-lead)] text-cream"
                    >
                      <Check size={18} className="mt-1 shrink-0 text-cream" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Faixa pilares marquee — visível no load; mask gradient nas bordas fade o texto sem cobrir o aurora */}
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
      </div>
    </section>
  );
}
