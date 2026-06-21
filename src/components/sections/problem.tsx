import { Reveal } from "@/components/motion/reveal";

const pains = [
  {
    title: "Busca está virando resposta, não lista de links.",
    body: "Seu cliente pergunta para uma IA quem contratar. Se sua empresa não é uma resposta clara, ela nem entra na comparação.",
  },
  {
    title: "Autoridade mal estruturada deixa a empresa invisível.",
    body: "Conteúdo solto, sinais fracos e informações inconsistentes tornam difícil para mecanismos generativos entenderem sua marca.",
  },
  {
    title: "Atendimento lento desperdiça demanda qualificada.",
    body: "WhatsApp, e-mail e CRM acumulam perguntas repetidas. O time perde velocidade justamente quando o lead já demonstrou intenção.",
  },
  {
    title: "Conhecimento interno espalhado impede IA confiável.",
    body: "Sem base, regras e revisão, a empresa fica presa entre respostas manuais e automações genéricas que ninguém confia.",
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
            A nova busca já começou.{" "}
            <span className="text-foreground-muted">
              A maioria das empresas ainda não se preparou.
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
