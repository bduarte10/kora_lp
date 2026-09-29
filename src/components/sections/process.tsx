import { Reveal } from "@/components/motion/reveal";
import { process } from "@/content/process";

export function Process() {
  return (
    <section id="processo" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow section-anchor">Como funciona</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-5 max-w-[20ch] text-[length:var(--fs-h1)]">
            Da conversa ao primeiro relatório.{" "}
            <span className="text-foreground-muted">Uma etapa por mês.</span>
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.step} delay={0.04 * i} as="li">
              <div className="relative border-t border-border-strong pt-7">
                <span
                  aria-hidden
                  className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-coral"
                />
                <p className="font-mono text-[13px] uppercase tracking-wider text-foreground-subtle">
                  {step.duration}
                </p>
                <h3 className="display-balanced mt-3 text-[length:var(--fs-h3)]">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
