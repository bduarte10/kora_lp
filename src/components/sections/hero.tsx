import { Reveal } from "@/components/motion/reveal";
import { NoiseBackground } from "@/components/ui/noise-background";
import { hero } from "@/content/hero";
import { site, whatsappLink } from "@/content/site";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

const marqueePillars = Array.from({ length: 4 }, (_, cycle) =>
  hero.pillars.map((pillar) => ({ id: `${cycle}-${pillar}`, label: pillar })),
).flat();

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-coral text-cream">
      <NoiseBackground />

      <div className="container-page relative z-10 flex min-h-[92svh] flex-col pt-28 pb-12 sm:pt-32 lg:pt-36 lg:pb-16">
        {/* Editorial strip topo */}
        <Reveal delay={0.04}>
          <div className="flex items-center gap-x-6 border-b border-cream-faint pb-5">
            <span className="text-[13px] font-medium section-anchor section-anchor-cream">
              <span className="text-cream-muted">{site.tagline}</span>
            </span>
            <span className="hidden h-px flex-1 bg-cream-faint sm:block" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-cream-faint">
              BR / 2026
            </span>
          </div>
        </Reveal>

        {/* Bloco central: 2 colunas — copy à esquerda, inclusos à direita */}
        <div className="flex-1 py-10 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            {/* Esquerda: H1 + sub + CTAs + reasseguramento */}
            <div className="min-w-0 lg:col-span-7">
              <h1 className="display text-[clamp(2rem,1.75vw+0.9rem,2.55rem)] text-cream">
                {hero.headlineLines.map((line) => (
                  <span key={line} className="hero-line">
                    <span className="block w-full lg:inline-block lg:w-auto lg:whitespace-nowrap">
                      {line}
                    </span>
                  </span>
                ))}
              </h1>

              <Reveal delay={0.34}>
                <p className="mt-7 max-w-xl text-[length:var(--fs-lead)] leading-relaxed text-cream">
                  {hero.description}
                </p>
              </Reveal>

              <Reveal delay={0.44}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href={site.ctas.primaryHref}
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
                  {hero.reassurance.map((r, i) => (
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
            <Reveal delay={0.42} className="min-w-0 lg:col-span-5">
              <div className="border-t border-cream-faint pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-cream-faint">
                  {hero.includesTitle}
                </p>
                <ul className="mt-6 space-y-4">
                  {hero.includes.map((item) => (
                    <li
                      key={item.id}
                      className="grid grid-cols-[1.625rem_1fr] gap-3.5 text-[length:var(--fs-body)] leading-snug text-cream-muted"
                    >
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-cream/10 text-cream">
                        <Check size={13} strokeWidth={2.4} aria-hidden />
                      </span>
                      <span className="max-w-[38ch]">{item.label}</span>
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
              {marqueePillars.map((pillar) => (
                <span
                  key={pillar.id}
                  className="flex shrink-0 items-center text-[length:var(--fs-h3)] tracking-tight text-cream-muted"
                >
                  {pillar.label}
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
