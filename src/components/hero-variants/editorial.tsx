import { hero } from "@/content/hero";
import { heroPhotos } from "@/content/hero-variants";
import { site } from "@/content/site";
import Image from "next/image";
import { CallCta, SecondaryLink, headline } from "./shared";

const pillars = [
  { n: "01", title: "Ser encontrada", detail: "Google, Maps e IA" },
  { n: "02", title: "Ser escolhida", detail: "Avaliações e conteúdo" },
  { n: "03", title: "Saber o que mudou", detail: "Um relatório por mês" },
];

export function Hero3A() {
  return (
    <section className="bg-hv-sand pt-16 text-hv-umber">
      <div className="grid min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
        <div className="relative h-[60svh] lg:h-auto">
          <Image
            src={heroPhotos.warmSmile.src}
            alt={heroPhotos.warmSmile.alt}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[70%_center]"
          />
        </div>
        <div className="flex flex-col px-6 pt-12 pb-12 sm:px-12 lg:px-20 lg:pt-16">
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-xs tracking-[0.16em] text-hv-umber-soft uppercase">
              Presença para clínicas odontológicas
            </p>
            <h1 className="mt-7 max-w-[16ch] text-[clamp(2.4rem,3.5vw+0.5rem,3.6rem)] leading-[1.12] font-light tracking-[-0.02em] text-balance">
              {headline}
            </h1>
            <p className="mt-7 max-w-md leading-[1.7] text-hv-umber-soft">{hero.description}</p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <CallCta
                variant="3a"
                label="Ver onde a clínica aparece"
                className="min-h-13 bg-hv-umber px-7 text-sm tracking-[0.06em] text-hv-sand hover:bg-ink"
              />
              <SecondaryLink
                variant="3a"
                href="#relatorio"
                label="Conhecer o método"
                className="border-b border-hv-umber pb-1 text-sm tracking-[0.04em]"
              />
            </div>
          </div>
          <ul className="mt-14 grid grid-cols-3 gap-6 border-t border-hv-sand-line pt-6">
            {pillars.map((p) => (
              <li key={p.n}>
                <p className="text-xs text-hv-umber-soft">{p.n}</p>
                <p className="mt-2 text-[15px]">{p.title}</p>
                <p className="mt-1 text-[13px] text-hv-umber-soft">{p.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Hero3B() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-hv-umber text-hv-umber">
      <Image
        src={heroPhotos.warmSmile.src}
        alt={heroPhotos.warmSmile.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div className="container-page relative flex min-h-[100svh] flex-col justify-end gap-8 pt-28 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
        <div className="w-full max-w-[560px] bg-hv-sand px-8 py-10 sm:px-12">
          <p className="text-xs tracking-[0.16em] text-hv-umber-soft uppercase">
            Presença para clínicas odontológicas
          </p>
          <h1 className="mt-5 text-[clamp(2rem,2.5vw+0.75rem,2.75rem)] leading-[1.14] font-light tracking-[-0.02em] text-balance">
            {headline}
          </h1>
          <p className="mt-5 leading-[1.7] text-hv-umber-soft">{hero.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-hv-sand-line pt-6">
            <CallCta
              variant="3b"
              label="Ver onde a clínica aparece"
              className="border-b border-hv-umber pb-1 text-sm tracking-[0.06em] uppercase"
            />
            <span className="text-[13px] text-hv-umber-soft">
              A partir de {site.pricing.monthlyFrom}/mês
            </span>
          </div>
        </div>
        <p className="max-w-[260px] text-sm leading-relaxed text-hv-milk lg:text-right">
          Em setembro, 11 de 13 respostas do Google com IA citaram clínicas pelo nome.
        </p>
      </div>
    </section>
  );
}

export function Hero3C() {
  return (
    <section className="bg-hv-sand text-hv-umber">
      <div className="container-page grid min-h-[92svh] gap-12 pt-28 pb-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,0.7fr)] lg:gap-14 lg:pt-32">
        <div className="flex flex-col justify-between gap-10">
          <h1 className="text-[clamp(2.4rem,3.5vw+0.5rem,3.9rem)] leading-[1.08] font-light tracking-[-0.025em] text-balance">
            {headline}
          </h1>
          <div>
            <p className="text-xs tracking-[0.16em] text-hv-umber-soft uppercase">
              Presença para clínicas odontológicas
            </p>
            <CallCta
              variant="3c"
              label="Ver onde a clínica aparece"
              className="mt-5 min-h-13 bg-hv-umber px-7 text-sm tracking-[0.06em] text-hv-sand hover:bg-ink"
            />
          </div>
        </div>
        <div className="relative h-[520px] lg:h-auto lg:min-h-[600px]">
          <Image
            src={heroPhotos.warmSmile.src}
            alt={heroPhotos.warmSmile.alt}
            fill
            priority
            sizes="(min-width: 1024px) 28vw, 100vw"
            className="object-cover object-[72%_center]"
          />
        </div>
        <div className="flex flex-col justify-between gap-10 text-[15px] leading-[1.7] text-hv-umber-soft">
          <p>{hero.description}</p>
          <ul className="space-y-4 text-sm">
            {pillars.map((p) => (
              <li key={p.n} className="border-t border-hv-sand-line pt-3.5">
                <span className="text-hv-umber">{p.title}.</span> {p.detail}.
              </li>
            ))}
            <li className="pt-1 text-[13px]">A partir de {site.pricing.monthlyFrom} por mês.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
