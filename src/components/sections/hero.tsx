import { Reveal } from "@/components/motion/reveal";
import { NoiseBackground } from "@/components/ui/noise-background";
import { site, whatsappLink } from "@/content/site";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

const pillars = [
  "GEO",
  "Atendimento com IA",
  "Bases de conhecimento",
  "Copilots internos",
  "Automação",
];

const marqueePillars = Array.from({ length: 4 }, (_, cycle) =>
  pillars.map((pillar) => ({ id: `${cycle}-${pillar}`, label: pillar })),
).flat();

const includes = [
  { id: "auditoria", label: "Auditoria de presença em IA" },
  { id: "geo", label: "GEO para ChatGPT, Gemini e Perplexity" },
  { id: "base", label: "Base de conhecimento para atendimento" },
  {
    id: "automacao",
    label: (
      <>
        Automação de WhatsApp, CRM e <span className="whitespace-nowrap">e-mail</span>
      </>
    ),
  },
  { id: "plano", label: "Plano de implantação priorizado" },
];

const reassurance = ["Diagnóstico pago", "Aplicação com fit", "Implantação sob medida"];

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
            <div className="lg:col-span-7">
              <h1 className="display text-[clamp(2rem,2.45vw+0.95rem,3.05rem)] text-cream">
                <span className="hero-line">
                  <span className="lg:whitespace-nowrap">Sua empresa está pronta</span>
                </span>
                <span className="hero-line">
                  <span className="lg:whitespace-nowrap">para ser recomendada por IAs?</span>
                </span>
              </h1>

              <Reveal delay={0.34}>
                <p className="mt-7 max-w-xl text-[length:var(--fs-lead)] leading-relaxed text-cream">
                  Clientes já pesquisam em ChatGPT, Gemini, Perplexity e Google com IA. A KORA
                  prepara sua empresa para ser encontrada, citada e escolhida nesse novo ambiente de
                  busca.
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
                  O que entra no diagnóstico
                </p>
                <ul className="mt-5 space-y-3.5">
                  {includes.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-start gap-2.5 text-[length:var(--fs-lead)] text-cream"
                    >
                      <Check size={18} className="mt-1 shrink-0 text-cream" aria-hidden />
                      <span>{item.label}</span>
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
