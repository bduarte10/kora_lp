import { InViewPlay } from "@/components/motion/in-view-play";
import { Reveal } from "@/components/motion/reveal";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { hero } from "@/content/hero";
import { site } from "@/content/site";
import { ArrowRight, Search, Sparkle, Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { answer } = hero;

  return (
    <section className="relative overflow-hidden bg-background-elev bg-[radial-gradient(70%_60%_at_85%_40%,rgb(var(--kora-blush))_0%,transparent_70%)] text-foreground">
      <div className="container-page grid min-h-[92svh] items-center gap-14 pt-28 pb-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 xl:grid-cols-2 xl:gap-12 lg:pt-32 lg:pb-20">
        {/* Esquerda: a pergunta, a promessa, a CTA e a prova */}
        <div className="min-w-0">
          <p className="text-sm font-medium text-coral">{hero.eyebrow}</p>
          <h1 className="mt-5 text-[length:var(--fs-hero)] leading-[1.08] font-medium tracking-[-0.04em]">
            {hero.headlineLines.map((line, i) => (
              <span
                key={line}
                className={
                  i === hero.headlineLines.length - 1
                    ? "block text-balance text-coral"
                    : "block text-balance"
                }
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-lg text-[length:var(--fs-lead)] leading-relaxed text-foreground-muted">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <TrackedLink
              href={site.ctas.callHref}
              target="_blank"
              rel="noreferrer"
              event={{ event: "whatsapp_click", label: hero.primaryCta, location: "hero-primary" }}
              className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-coral px-7 text-base font-medium text-cream shadow-[var(--shadow-coral)] transition hover:bg-coral-deep"
            >
              {hero.primaryCta}
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </TrackedLink>
            <p className="text-center text-sm leading-snug text-foreground-subtle sm:text-left">
              {hero.note}
              <br />
              {hero.price}
            </p>
          </div>

          <div className="mt-10 flex max-w-lg items-center gap-4 rounded-2xl bg-background-elev p-4 shadow-sm ring-1 ring-border sm:p-5">
            <span className="shrink-0 text-3xl font-semibold tracking-[-0.03em] text-coral">
              {hero.proof.value}
            </span>
            <span className="text-[13px] leading-relaxed text-foreground-muted">
              {hero.proof.label}
            </span>
          </div>
        </div>

        {/* Direita: a paciente e o que ela vê no celular */}
        <Reveal delay={0.15} className="min-w-0">
          <InViewPlay>
            <figure className="relative mx-auto h-[600px] max-w-[560px] xl:h-[690px]">
              <div className="absolute top-5 right-0 hidden h-[640px] w-[440px] overflow-hidden rounded-t-[220px] rounded-b-[28px] xl:block">
                <Image
                  src={hero.photo.src}
                  alt={hero.photo.alt}
                  fill
                  sizes="440px"
                  className="object-cover object-[50%_center]"
                />
              </div>

              <div className="absolute top-0 left-1/2 h-[500px] w-[260px] -translate-x-1/2 rounded-[40px] bg-ink p-2.5 shadow-[0_40px_90px_rgb(23_23_23/0.3)] xl:top-[90px] xl:left-2.5 xl:translate-x-0">
                <div className="flex h-full flex-col gap-3 rounded-[31px] bg-background-elev px-[18px] pt-10 pb-5">
                  <p className="flex items-center gap-2 rounded-full border border-border px-3 py-2.5 text-[13px]">
                    <Search size={14} className="text-foreground-subtle" aria-hidden />
                    {answer.query}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-foreground-subtle">
                    <Sparkle size={12} className="fill-coral text-coral" aria-hidden />
                    {answer.label}
                  </p>
                  <p className="text-xs leading-relaxed text-ink-soft">{answer.intro}</p>
                  <ol className="flex flex-col gap-2 text-[13px]">
                    {answer.cited.map((c) => (
                      <li
                        key={c.id}
                        className="answer-item rounded-[10px] bg-paper-warm px-2.5 py-2"
                      >
                        <span className="block font-semibold">{c.name}</span>
                        <span className="flex items-center gap-1 text-[11px] text-foreground-subtle">
                          <Star size={10} className="fill-current" aria-hidden />
                          {c.detail}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <p className="answer-item answer-missing absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-3 text-sm font-medium whitespace-nowrap text-cream shadow-[var(--shadow-coral)] xl:bottom-12 xl:left-[230px] xl:translate-x-0">
                {answer.missing}
              </p>
              <figcaption className="absolute inset-x-0 bottom-0 text-center text-xs text-foreground-subtle xl:left-auto xl:text-right">
                {answer.caption}
              </figcaption>
            </figure>
          </InViewPlay>
        </Reveal>
      </div>
    </section>
  );
}
