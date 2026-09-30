import { Reveal } from "@/components/motion/reveal";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { hero } from "@/content/hero";
import { offer, plans } from "@/content/offer";
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
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {plans.map((plan) => (
                  <li key={plan.id} className="py-3.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="flex items-center gap-2 font-semibold text-foreground">
                        {plan.name}
                        {plan.recommended ? (
                          <span className="rounded-full border border-coral px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-coral-deep">
                            {offer.card.recommendedLabel}
                          </span>
                        ) : null}
                      </p>
                      <p className="font-semibold tabular-nums text-foreground">
                        {plan.pricePrefix ? (
                          <span className="mr-1 text-xs font-normal text-foreground-muted">
                            {plan.pricePrefix}
                          </span>
                        ) : null}
                        {plan.price}
                        <span className="text-sm font-normal text-foreground-muted">/mês</span>
                      </p>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                      {plan.summary}
                    </p>
                  </li>
                ))}
              </ul>
              <TrackedLink
                href={site.ctas.callHref}
                target="_blank"
                rel="noreferrer"
                event={{
                  event: "cta_click",
                  label: hero.primaryCta,
                  location: "offer-section",
                }}
                className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-base font-semibold text-background transition hover:bg-foreground/90"
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
              <p className="mt-6 text-sm leading-relaxed text-foreground-muted">
                {offer.card.terms}
              </p>
              <p className="mt-5 rounded-lg bg-bone p-4 text-sm leading-relaxed text-foreground">
                {offer.card.value.text}{" "}
                <a
                  href={offer.card.value.source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground-subtle underline underline-offset-2 hover:text-foreground"
                >
                  Fonte: {offer.card.value.source.label}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
