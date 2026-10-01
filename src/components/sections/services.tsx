import { Reveal } from "@/components/motion/reveal";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { hero } from "@/content/hero";
import { offer } from "@/content/offer";
import { services, servicesIntro } from "@/content/services";
import { site } from "@/content/site";
import { ArrowRight, Check } from "lucide-react";

export function Services() {
  return (
    <section id="mensalidade" className="section scroll-mt-16 bg-bone border-y border-border">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow section-anchor">O que entra na mensalidade</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-5 max-w-[20ch] text-[length:var(--fs-h1)]">
              Ser encontrada, ser escolhida{" "}
              <span className="text-foreground-muted">e saber o que mudou.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-7 max-w-2xl text-[length:var(--fs-lead)] leading-relaxed text-foreground-muted">
              {servicesIntro.bridge}
            </p>
            <p className="mt-6 max-w-2xl rounded-xl bg-paper p-5 leading-relaxed text-foreground sm:p-6">
              {servicesIntro.success}
            </p>
          </Reveal>

          <div className="mt-14 divide-y divide-border border-y border-border">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={0.04 * i}>
                <article className="py-10">
                  <p className="text-sm font-semibold text-coral">{s.kicker}</p>
                  <h3 className="display-balanced mt-2 max-w-[30ch] text-[length:var(--fs-h3)]">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-prose leading-relaxed text-foreground-muted">
                    {s.description}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[15px] text-foreground">
                        <Check size={16} className="mt-[3px] shrink-0 text-coral" aria-hidden />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.1} className="lg:sticky lg:top-24">
            <div
              id="preco"
              className="scroll-mt-24 rounded-2xl border border-border bg-background-elev p-6 shadow-lg sm:p-8"
            >
              <p className="font-mono text-[13px] uppercase tracking-wider text-foreground-subtle">
                {offer.card.kicker}
              </p>
              <p className="mt-4 text-sm text-foreground-muted">{offer.card.priceLabel}</p>
              <p className="display mt-1 text-[length:var(--fs-h1)]">
                {site.pricing.monthlyFrom}
                <span className="text-[length:var(--fs-h3)] font-medium tracking-normal text-foreground-muted">
                  /mês
                </span>
              </p>
              <p className="mt-2 text-sm text-foreground-muted">{offer.card.extraUnit}</p>
              <p className="mt-5 leading-relaxed text-foreground">{offer.card.firstMonth}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {offer.card.terms}
              </p>
              <p className="mt-5 rounded-lg bg-bone p-4 text-sm leading-relaxed text-foreground">
                {offer.card.guarantee}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {offer.card.exclusions}
              </p>

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
                  className="hidden transition-transform duration-300 group-hover:translate-x-0.5 sm:block"
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
                className="mt-4 flex w-full items-center justify-center text-center text-sm font-medium text-foreground-muted underline-offset-4 transition hover:text-foreground hover:underline"
              >
                {offer.card.applyLink}
              </TrackedLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
