import { Reveal } from "@/components/motion/reveal";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { Linkedin } from "lucide-react";

export function About() {
  return (
    <section id="quem-faz" className="section-sm scroll-mt-16">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow section-anchor">{about.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-5 max-w-[20ch] text-[length:var(--fs-h1)]">{about.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            {about.body.map((p) => (
              <p
                key={p}
                className="mt-6 max-w-xl text-[length:var(--fs-lead)] leading-relaxed text-foreground-muted"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.12} className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-background-elev p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span
                aria-hidden
                className="flex h-16 w-16 items-center justify-center rounded-full bg-coral text-xl font-semibold text-cream"
              >
                {about.person.initials}
              </span>
              <div>
                <p className="font-medium">{about.person.name}</p>
                <p className="text-sm text-foreground-subtle">{about.person.role}</p>
              </div>
            </div>
            <dl className="mt-7 space-y-4 border-t border-border pt-6 text-sm">
              {about.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-foreground-subtle">{f.label}</dt>
                  <dd className="mt-0.5 text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground-muted transition hover:text-foreground"
            >
              <Linkedin size={15} aria-hidden />
              Kora GEO no LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
