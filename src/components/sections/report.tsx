import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { Scrub } from "@/components/motion/scrub";
import { methodology } from "@/content/methodology";
import { reportSample } from "@/content/report-sample";

export function Report() {
  return (
    <section id="relatorio" className="section scroll-mt-16 bg-foreground text-background">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow section-anchor section-anchor-cream text-cream-muted">
                {methodology.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-5 max-w-[18ch] text-[length:var(--fs-h1)]">
                {methodology.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="max-w-2xl text-[length:var(--fs-lead)] leading-relaxed text-cream-muted">
              {methodology.description}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16 border-y border-cream-faint py-10">
          <p className="font-mono text-[13px] uppercase tracking-wider text-cream-muted">
            {methodology.research.title}
          </p>
          <dl className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-10">
            {methodology.research.stats.map((stat) => (
              <div key={stat.value}>
                <dt className="display text-[length:var(--fs-h1)]">
                  <CountUp value={stat.value} />
                </dt>
                <dd className="mt-3 max-w-[30ch] leading-relaxed text-cream-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 grid gap-3 lg:grid-cols-12 lg:gap-16">
            <p className="display-balanced text-[length:var(--fs-h3)] lg:col-span-7">
              “{methodology.research.example.question}”
            </p>
            <div className="lg:col-span-5">
              <p className="leading-relaxed">{methodology.research.example.answer}</p>
              <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                {methodology.research.caveat}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0.12} className="lg:col-span-7">
            <figure className="rounded-[20px] bg-paper p-5 text-foreground shadow-lg sm:p-8">
              <p className="font-mono text-[13px] uppercase tracking-wider text-foreground-subtle">
                {reportSample.kicker}
              </p>
              <p className="display-balanced mt-2 text-[length:var(--fs-h3)]">
                {reportSample.clinic}
              </p>

              <Scrub
                steps="tbody tr"
                tweens={[
                  { select: ":scope", from: { opacity: 0.15, y: 12 }, to: { opacity: 1, y: 0 } },
                ]}
                start="top 75%"
                end="bottom 55%"
              >
                <table className="mt-6 w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-border text-sm text-foreground-subtle">
                      <th scope="col" className="py-3 pr-4 font-medium">
                        {reportSample.columns.question}
                      </th>
                      <th scope="col" className="hidden py-3 pr-4 font-medium sm:table-cell">
                        {reportSample.columns.where}
                      </th>
                      <th scope="col" className="py-3 text-right font-medium">
                        {reportSample.columns.result}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportSample.rows.map((row) => (
                      <tr key={row.question} className="border-b border-border">
                        <td className="py-4 pr-4">{row.question}</td>
                        <td className="hidden py-4 pr-4 text-sm text-foreground-muted sm:table-cell">
                          {row.where}
                        </td>
                        <td className="py-4 text-right">
                          <span
                            className={
                              row.cited
                                ? "inline-block whitespace-nowrap rounded-full bg-foreground px-3 py-1 text-sm font-semibold text-background"
                                : "inline-block whitespace-nowrap rounded-full border border-dashed border-coral px-3 py-1 text-sm font-semibold text-coral-deep"
                            }
                          >
                            {row.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Scrub>

              <figcaption className="mt-5 text-sm text-foreground-muted">
                {reportSample.footnote}
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal delay={0.16}>
              <p className="font-mono text-[13px] uppercase tracking-wider text-cream-muted">
                {methodology.metricsTitle}
              </p>
              <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {methodology.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="font-medium">{metric.label}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-cream-muted">
                      {metric.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 border-t border-cream-faint pt-6">
                <p className="font-mono text-[13px] uppercase tracking-wider text-cream-muted">
                  {methodology.caveatTitle}
                </p>
                <p className="mt-3 leading-relaxed">{methodology.caveat}</p>
                <p className="mt-4 text-sm leading-relaxed text-cream-muted">
                  {methodology.disclaimer}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
