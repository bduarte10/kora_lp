import { Reveal } from "@/components/motion/reveal";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { hero } from "@/content/hero";
import { offer } from "@/content/offer";
import { site } from "@/content/site";
import { ArrowRight, Check } from "lucide-react";

export function Offer() {
  return (
    <section id="preco" className="section scroll-mt-16">
      <div className="container-page grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-x-16 lg:gap-y-10">
        <div className="max-w-2xl lg:col-span-6">
          <Reveal>
            <p className="eyebrow section-anchor">Preço</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-5 max-w-[16ch] text-[length:var(--fs-h1)]">{offer.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-[length:var(--fs-lead)] leading-relaxed text-foreground-muted">
              {offer.description}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="lg:col-span-5 lg:col-start-8 lg:row-span-2">
          <div className="rounded-2xl border border-border bg-background-elev p-6 text-foreground shadow-lg sm:p-8">
            <p className="font-mono text-[13px] uppercase tracking-wider text-foreground-subtle">
              {offer.card.kicker}
            </p>
            <h3 className="display-balanced mt-3 text-[length:var(--fs-h3)] text-foreground">
              {offer.card.title}
            </h3>
            <p className="mt-5 leading-relaxed text-foreground-muted">{offer.card.description}</p>

            <div className="mt-7 grid grid-cols-2 border-y border-border text-sm">
              <div className="border-r border-border py-4 pr-4">
                <p className="font-medium text-foreground">15 min</p>
                <p className="mt-1 text-[13px] text-foreground-subtle">Conversa pelo WhatsApp</p>
              </div>
              <div className="py-4 pl-4">
                <p className="font-medium text-foreground">{site.pricing.monthlyFrom}/mês</p>
                <p className="mt-1 text-[13px] text-foreground-subtle">Mensalidade a partir de</p>
              </div>
            </div>

            <TrackedLink
              href={site.ctas.callHref}
              target="_blank"
              rel="noreferrer"
              event={{
                event: "cta_click",
                label: hero.primaryCta,
                location: "offer-section",
              }}
              className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-base font-semibold text-background transition hover:bg-foreground/90"
            >
              {hero.primaryCta}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </TrackedLink>

            <TrackedLink
              href={site.ctas.applyHref}
              event={{
                event: "cta_click",
                label: site.ctas.apply,
                location: "offer-section-apply",
              }}
              className="mt-4 flex w-full items-center justify-center text-sm font-medium text-foreground-muted underline-offset-4 transition hover:text-foreground hover:underline"
            >
              {offer.card.applyLink}
            </TrackedLink>
          </div>
        </Reveal>

        <div className="max-w-2xl lg:col-span-6">
          <Reveal delay={0.14}>
            <div className="border-y border-border py-7">
              <p className="font-mono text-[13px] uppercase tracking-wider text-foreground-subtle">
                O que entra
              </p>
              <ul className="mt-5 space-y-3">
                {offer.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Check size={15} className="mt-[3px] shrink-0 text-coral" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-foreground-muted">
              {offer.price}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
