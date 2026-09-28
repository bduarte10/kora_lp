import { Reveal } from "@/components/motion/reveal";

const pains = [
  {
    title: "A IA já cita clínicas pelo nome.",
    body: "Perguntamos ao Google com IA onde fazer implante em São Paulo. A resposta trouxe clínicas pelo nome, com endereço e dentista responsável. Quem não está nessa lista nem entra na comparação.",
  },
  {
    title: "Quem procura implante quer saber o preço.",
    body: "As buscas mais comuns sobre implante no Google são sobre valor. Preço não pode ser anunciado, mas dá para explicar o que define o custo. A clínica que faz isso bem é a que a IA encontra e a que o paciente chama.",
  },
  {
    title: "Site que não responde a dúvida manda o paciente embora.",
    body: "O paciente quer saber se dói, quanto tempo leva e o que muda o custo. Se o site da clínica não responde, a IA busca a resposta, e a clínica, em outro lugar.",
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

        <ul className="mt-20 divide-y divide-border border-y border-border sm:grid sm:grid-cols-2 sm:divide-y-0">
          {pains.map((p, i) => (
            <Reveal
              key={p.title}
              delay={0.04 * i}
              as="li"
              className={`py-12 sm:py-14 ${
                i % 2 === 0 ? "sm:border-r sm:border-border sm:pr-10" : "sm:pl-10"
              }${i === 2 || i === 3 ? " sm:border-t sm:border-border" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-foreground-faint">0{i + 1}</span>
                <span className="h-px flex-1 bg-border" aria-hidden />
              </div>
              <h3 className="display-balanced mt-5 text-[length:var(--fs-h3)]">{p.title}</h3>
              <p className="mt-3 max-w-[42ch] leading-relaxed text-foreground-muted">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
