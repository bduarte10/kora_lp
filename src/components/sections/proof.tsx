import { Reveal } from "@/components/motion/reveal";
import { photos } from "@/content/photos";
import Image from "next/image";

type Transformation = {
  area: string;
  before: string;
  after: string;
};

const transformations: Transformation[] = [
  {
    area: "Presença",
    before:
      "O paciente pergunta ao Google com IA onde fazer implante no bairro. A resposta cita três clínicas, e nenhuma é a sua.",
    after:
      "Perfil, avaliações e páginas de procedimento contam a mesma história. A clínica passa a ter o que a IA precisa para citá-la.",
  },
  {
    area: "Escolha",
    before:
      "O paciente compara três clínicas no Google. A sua tem poucas avaliações, a última de meses atrás, e nenhuma respondida.",
    after:
      "Avaliações novas todo mês, todas respondidas, e uma página que explica o procedimento. A clínica vira a opção mais fácil de escolher.",
  },
  {
    area: "Gestão",
    before:
      "O dono da clínica paga agência e não sabe dizer se a clínica aparece mais ou menos do que no mês passado.",
    after:
      "Um relatório por mês mostra as mesmas perguntas, quem apareceu e quantas ligações o perfil do Google trouxe.",
  },
];

export function Proof() {
  return (
    <section id="cases" className="section border-t border-border">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow section-anchor">Antes e depois</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-5 max-w-[24ch] text-[length:var(--fs-h1)]">
            O que muda na rotina <span className="text-foreground-muted">da clínica.</span>
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
            Os exemplos acima descrevem o que o trabalho muda, não resultados de uma clínica
            específica. Cases com nome dependem de autorização da clínica; sem ela, mostramos
            perguntas datadas, prints e a evolução do relatório.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
