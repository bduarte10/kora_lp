import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { photos } from "@/content/photos";

type Transformation = {
  area: string;
  before: string;
  after: string;
};

const transformations: Transformation[] = [
  {
    area: "Atendimento",
    before:
      "Equipe de 4 atendentes gasta 6h por dia respondendo perguntas repetidas no WhatsApp e e-mail.",
    after:
      "Agente conectado à base de conhecimento resolve 70% das conversas. As 6h voltam para o time fechar venda.",
  },
  {
    area: "Operação",
    before:
      "Diretor passa toda segunda copiando números de 3 sistemas para uma planilha do relatório semanal.",
    after:
      "Painel automático puxa dados a cada hora. O relatório aparece pronto no Slack; nenhuma planilha manual.",
  },
  {
    area: "Vendas",
    before:
      "Cada proposta consome 1 hora do vendedor: copiar template, ajustar números, escrever introdução, revisar.",
    after:
      "Copilot rascunha em 90 segundos a partir do briefing. O vendedor refina em 10 minutos.",
  },
];

export function Proof() {
  return (
    <section id="cases" className="section border-t border-border">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow section-anchor">Metodologia validada</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-5 max-w-[24ch] text-[length:var(--fs-h1)]">
            Onde o trabalho da KORA aparece{" "}
            <span className="text-foreground-muted">no dia a dia.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="mt-20">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-bone">
            <Image
              src={photos.proof.src}
              alt={photos.proof.alt}
              fill
              sizes="(min-width: 1024px) 1280px, 100vw"
              className="object-cover"
              style={{ filter: "grayscale(1) contrast(1.02) brightness(0.96)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent"
            />
          </div>
        </Reveal>

        <ol className="mt-20 divide-y divide-border border-y border-border">
          {transformations.map((t, i) => (
            <Reveal key={t.area} delay={0.04 * i} as="li">
              <article className="grid gap-8 py-14 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-foreground-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-10 bg-border-strong" aria-hidden />
                  </div>
                  <h3 className="display-balanced mt-4 text-[length:var(--fs-h2)]">{t.area}</h3>
                </div>
                <div className="md:col-span-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
                    Antes
                  </p>
                  <p className="mt-3 leading-relaxed text-foreground-muted">{t.before}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-coral">Depois</p>
                  <p className="mt-3 leading-relaxed text-foreground">{t.after}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2} className="mt-12 max-w-prose text-sm text-foreground-subtle">
          <p>
            Os exemplos acima representam padrões reais que aparecem em quase toda implantação.
            Cases nomeados são compartilhados no diagnóstico, sob NDA quando o cliente prefere.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
