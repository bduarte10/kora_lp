import { Reveal } from "@/components/motion/reveal";

const pains = [
  {
    title: "Site fraco (ou nenhum) custa venda todo dia.",
    body: "Seu cliente pesquisa antes de comprar. Sem uma presença profissional no ar, a confiança vai pro concorrente.",
  },
  {
    title: "Fazer site virou dor de cabeça e custo escondido.",
    body: "Orçamento alto na criação, agência que some depois, hospedagem e manutenção cobradas à parte. Ninguém te dá suporte.",
  },
  {
    title: "Processos repetitivos sugam o melhor da sua equipe.",
    body: "Cotação, follow-up, planilha, e-mail. Tarefa de máquina sendo feita por gente cara.",
  },
  {
    title: "Ferramentas isoladas, nada conversa entre si.",
    body: "CRM, planilha, WhatsApp, ERP. Dados duplicados, decisões lentas, retrabalho diário.",
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
            Sua empresa precisa estar online de verdade.{" "}
            <span className="text-foreground-muted">E operar sem desperdício.</span>
          </h2>
        </Reveal>

        <ul className="mt-20 divide-y divide-border border-y border-border sm:grid sm:grid-cols-2 sm:divide-y-0">
          {pains.map((p, i) => (
            <Reveal
              key={p.title}
              delay={0.04 * i}
              as="li"
              className={
                "py-12 sm:py-14 " +
                (i % 2 === 0
                  ? "sm:border-r sm:border-border sm:pr-10"
                  : "sm:pl-10") +
                ((i === 2 || i === 3) ? " sm:border-t sm:border-border" : "")
              }
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
