import { TrackedLink } from "@/components/tracking/tracked-link";
import { hero } from "@/content/hero";
import { headlineSplit } from "@/content/hero-variants";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const headline = hero.headlineLines.join(" ");
export const headlineLead = headlineSplit.lead;
export const headlineQuestion = headlineSplit.question;
export const clinics = hero.answer.cited;

export function CallCta({
  variant,
  className,
  label = hero.primaryCta,
  arrow = false,
}: {
  variant: string;
  className?: string;
  label?: string;
  arrow?: boolean;
}) {
  return (
    <TrackedLink
      href={site.ctas.callHref}
      target="_blank"
      rel="noreferrer"
      event={{ event: "cta_click", label, location: `hero-${variant}` }}
      className={cn("group inline-flex items-center justify-center gap-2.5 transition", className)}
    >
      {label}
      {arrow && (
        <ArrowRight
          size={18}
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </TrackedLink>
  );
}

export function SecondaryLink({
  variant,
  href = hero.secondaryCta.href,
  label = hero.secondaryCta.label,
  className,
}: {
  variant: string;
  href?: string;
  label?: string;
  className?: string;
}) {
  return (
    <TrackedLink
      href={href}
      event={{ event: "cta_click", label, location: `hero-${variant}-secondary` }}
      className={className}
    >
      {label}
    </TrackedLink>
  );
}

export const priceNote = `15 minutos pelo WhatsApp · a partir de ${site.pricing.monthlyFrom}/mês`;
