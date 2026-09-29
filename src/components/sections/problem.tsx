import { Reveal } from "@/components/motion/reveal";

const pains = [
  {
    title: "A IA já cita clínicas pelo nome.",
    body: "Perguntamos ao Google com IA onde fazer implante em São Paulo. A resposta trouxe clínicas pelo nome, com endereço e dentista responsável. Quem não está nessa lista nem entra na comparação.",
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

        <ul className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
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
