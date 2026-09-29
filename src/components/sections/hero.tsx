import { InViewPlay } from "@/components/motion/in-view-play";
import { Reveal } from "@/components/motion/reveal";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { NoiseBackground } from "@/components/ui/noise-background";
import { hero } from "@/content/hero";
import { site } from "@/content/site";
import { ArrowRight, Search } from "lucide-react";

export function Hero() {
  const { answer } = hero;

  return (
    <section className="relative overflow-hidden bg-coral text-cream">
      <NoiseBackground />

      <div className="container-page relative z-10 grid min-h-[92svh] items-center gap-14 pt-28 pb-16 sm:pt-32 lg:grid-cols-12 lg:gap-16 lg:pt-36 lg:pb-20">
        {/* Esquerda: a pergunta, a promessa e uma CTA */}
        <div className="min-w-0 lg:col-span-7">
          <p className="text-[15px] font-medium text-cream-muted">{hero.eyebrow}</p>

          <h1 className="display mt-6 text-balance text-[length:var(--fs-hero)] text-cream">
            {hero.headlineLines.join(" ")}
          </h1>

          <p className="mt-8 max-w-xl text-[length:var(--fs-lead)] leading-relaxed text-cream/85">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <TrackedLink
              href={site.ctas.callHref}
              target="_blank"
              rel="noreferrer"
              event={{
                event: "cta_click",
                label: hero.primaryCta,
                location: "hero-primary",
              }}
              className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-cream px-7 text-base font-semibold text-coral-deep transition hover:bg-cream/95"
            >
              {hero.primaryCta}
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </TrackedLink>
            <TrackedLink
              href={hero.secondaryCta.href}
              event={{
                event: "cta_click",
                label: hero.secondaryCta.label,
                location: "hero-secondary",
              }}
              className="text-center text-base font-medium text-cream underline decoration-cream/45 underline-offset-[5px] transition hover:decoration-cream"
            >
              {hero.secondaryCta.label}
            </TrackedLink>
          </div>

          <p className="mt-6 text-[15px] text-cream-muted">{hero.note}</p>
        </div>

        {/* Direita: a resposta de IA em que a clínica do leitor não aparece */}
        <Reveal delay={0.2} className="min-w-0 lg:col-span-5">
          <InViewPlay>
            <figure>
              <div className="overflow-hidden rounded-[20px] bg-paper text-foreground shadow-[0_30px_80px_rgba(60,20,8,0.35)]">
                <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                  <Search size={17} className="shrink-0 text-coral" aria-hidden />
                  <span className="text-base font-medium">{answer.query}</span>
                </div>

                <div className="px-5 pt-5">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-foreground-subtle">
                    {answer.label}
                  </p>
                  <p className="mt-1.5 hidden leading-relaxed text-foreground-muted sm:block">
                    {answer.intro}
                  </p>
                </div>

                <ol className="flex flex-col gap-2.5 p-5">
                  {answer.cited.map((clinic, i) => (
                    <li
                      key={clinic.id}
                      className="answer-item flex items-center gap-3.5 rounded-xl border border-border bg-background-elev px-4 py-3"
                    >
                      <span className="font-mono text-[13px] text-foreground-subtle">{i + 1}º</span>
                      <span className="flex min-w-0 flex-col">
                        <span className="font-semibold">{clinic.name}</span>
                        <span className="hidden text-sm text-foreground-subtle sm:block">
                          {clinic.reason}
                        </span>
                      </span>
                    </li>
                  ))}
                  <li className="answer-item answer-missing flex items-center gap-3.5 rounded-xl border-[1.5px] border-dashed border-coral bg-coral/[0.07] px-4 py-3 text-coral-deep">
                    <span className="font-mono text-[13px]" aria-hidden>
                      ?
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="font-semibold">{answer.missing.name}</span>
                      <span className="text-sm">{answer.missing.reason}</span>
                    </span>
                  </li>
                </ol>
              </div>
              <figcaption className="mt-4 text-sm text-cream-muted">{answer.caption}</figcaption>
            </figure>
          </InViewPlay>
        </Reveal>
      </div>
    </section>
  );
}
