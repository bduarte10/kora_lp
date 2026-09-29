import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { methodology } from "@/content/methodology";

const pains = [
  {
    title: "Quem entra primeiro, fica.",
    body: "Quando a IA confia numa clínica, ela repete o nome. Em setembro, a mesma clínica de implante apareceu em 5 das 13 respostas. Quanto antes a sua entra, menos espaço sobra para o vizinho.",
  },
  {
    title: "Site que não responde a dúvida manda o paciente embora.",
    body: "O paciente quer saber se dói, quanto tempo leva e o que muda o preço. Preço não pode ser anunciado, mas dá para explicar o que define o custo. Se o site não responde, a IA busca a resposta, e a clínica, em outro lugar.",
  },
  {
    title: "Perfil desatualizado tira a clínica do mapa.",
    body: "Horário errado, poucas avaliações e nenhuma resposta a elas. É dali que o Google e a IA tiram os dados para recomendar alguém.",
  },
];

export function Problem() {
  return (
    <section id="problema" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow section-anchor">O problema</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-5 max-w-[20ch] text-[length:var(--fs-h1)]">
            O paciente mudou de busca.{" "}
            <span className="text-foreground-muted">
              A maioria das clínicas ainda não percebeu.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 rounded-2xl bg-bone p-6 sm:p-10">
          <p className="font-mono text-[13px] uppercase tracking-wider text-foreground-subtle">
            {methodology.research.title}
          </p>
          <dl className="mt-7 grid gap-8 sm:grid-cols-3 sm:gap-10">
            {methodology.research.stats.map((stat) => (
              <div key={stat.value}>
                <dt className="display text-[length:var(--fs-h1)] text-coral">
                  <CountUp value={stat.value} />
                </dt>
                <dd className="mt-3 max-w-[30ch] leading-relaxed text-foreground-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-9 grid gap-3 border-t border-border-strong pt-7 lg:grid-cols-12 lg:gap-16">
            <p className="display-balanced text-[length:var(--fs-h3)] lg:col-span-7">
              “{methodology.research.example.question}”
            </p>
            <div className="lg:col-span-5">
              <p className="leading-relaxed">{methodology.research.example.answer}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {methodology.research.caveat}
              </p>
            </div>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={0.04 * i} as="li" className="border-t border-border pt-8">
              <h3 className="display-balanced text-[length:var(--fs-h3)]">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-foreground-muted">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
