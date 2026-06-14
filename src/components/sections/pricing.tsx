import { Reveal } from "@/components/motion/reveal";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { pricingLead, pricingLeadDetail, pricingNote } from "@/content/pricing";

export function Pricing() {
  return (
    <section id="planos" className="section bg-bone border-y border-border">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow section-anchor">Planos de site</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-5 max-w-[22ch] text-[length:var(--fs-h1)]">
            Seu site no ar.{" "}
            <span className="text-foreground-muted">Tudo incluso, por assinatura.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-[length:var(--fs-lead)] leading-relaxed">
            <span className="font-medium text-foreground">{pricingLead}</span>{" "}
            <span className="text-foreground-muted">{pricingLeadDetail}</span>
          </p>
        </Reveal>

        <PricingCards />

        <Reveal delay={0.2} className="mt-10 max-w-prose text-sm text-foreground-subtle">
          <p>{pricingNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
