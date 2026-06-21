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
            Do fit à implantação.{" "}
            <span className="text-foreground-muted">Método antes de ferramenta.</span>
          </h2>
        </Reveal>

        <ol className="mt-20 grid gap-y-4 md:gap-y-0">
          {process.map((step, i) => (
            <Reveal key={step.step} delay={0.04 * i} as="li">
              <div className="grid items-baseline gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-foreground-faint">{step.step}</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="display-balanced text-[length:var(--fs-h2)]">{step.title}</h3>
                </div>
                <div className="md:col-span-5">
                  <p className="leading-relaxed text-foreground-muted">{step.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-foreground-subtle">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="inline-block h-1 w-1 rounded-full bg-coral" />
                      <span className="font-medium uppercase tracking-wider text-foreground-muted">
                        Duração
                      </span>
                      <span>{step.duration}</span>
                    </span>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {step.outputs.map((o) => (
                      <li
                        key={o}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground-muted"
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
