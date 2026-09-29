import { hero } from "@/content/hero";
import { heroPhotos } from "@/content/hero-variants";
import Image from "next/image";
import { CallCta, SecondaryLink, clinics, headline, priceNote } from "./shared";

function AnswerCard({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-[13px] text-stone">{hero.answer.query}</p>
      <ol className="mt-3 space-y-2 text-[15px]">
        {clinics.map((c, i) => (
          <li key={c.id} className="flex gap-3">
            <span className="text-stone">{i + 1}</span>
            {c.name}
          </li>
        ))}
      </ol>
      <p className="mt-3 flex items-center gap-2 border-t border-bone pt-3 text-[15px] font-medium text-coral">
        <span className="h-[7px] w-[7px] rounded-full bg-coral" aria-hidden />
        Sua clínica não foi citada
      </p>
    </div>
  );
}

export function Hero1A() {
  return (
    <section className="bg-hv-snow text-ink">
      <div className="container-page grid min-h-[92svh] items-center gap-14 pt-28 pb-16 lg:grid-cols-2 lg:gap-20 lg:pt-32">
        <div>
          <p className="text-sm font-medium text-coral">Para clínicas odontológicas</p>
          <h1 className="mt-6 text-[clamp(2.5rem,4vw+0.5rem,4rem)] font-medium leading-[1.04] tracking-[-0.035em] text-balance">
            {headline}
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">{hero.description}</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <CallCta
              variant="1a"
              className="min-h-13 rounded-full bg-ink px-7 text-base font-medium text-hv-snow hover:bg-ink-soft"
            />
            <SecondaryLink
              variant="1a"
              label="Como funciona ›"
              href="#processo"
              className="font-medium text-coral"
            />
          </div>
          <p className="mt-5 text-sm text-stone">{priceNote}</p>
        </div>
        <div className="relative h-[520px] lg:h-[640px]">
          <div className="absolute inset-y-0 right-0 w-full overflow-hidden rounded-[28px] lg:w-[88%]">
            <Image
              src={heroPhotos.laughing.src}
              alt={heroPhotos.laughing.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[center_30%]"
            />
          </div>
          <AnswerCard className="absolute bottom-8 left-4 w-[300px] rounded-2xl bg-white p-5 shadow-[0_24px_60px_rgba(17,17,17,0.14)] lg:left-0 lg:w-[330px]" />
        </div>
      </div>
    </section>
  );
}

export function Hero1B() {
  return (
    <section className="bg-white text-ink">
      <div className="container-page flex flex-col items-center pt-28 text-center lg:pt-32">
        <p className="text-[15px] font-medium text-coral">Para clínicas odontológicas</p>
        <h1 className="mt-4 max-w-[18ch] text-[clamp(2.5rem,4.5vw+0.5rem,4.5rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-balance">
          {headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">{hero.description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <CallCta
            variant="1b"
            className="min-h-12 rounded-full bg-coral px-6 text-base font-medium text-white hover:bg-coral-deep"
          />
          <span className="font-medium text-coral">a partir de R$ 1.500/mês</span>
        </div>
        <div className="relative mt-12 h-[300px] w-full overflow-hidden rounded-t-[28px] sm:h-[360px]">
          <Image
            src={heroPhotos.clinic.src}
            alt={heroPhotos.clinic.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_45%]"
          />
          <AnswerCard className="absolute top-8 right-4 w-[300px] rounded-2xl bg-white/95 p-5 text-left shadow-[0_20px_50px_rgba(17,17,17,0.18)] sm:right-12 sm:w-[340px]" />
        </div>
      </div>
    </section>
  );
}

export function Hero1C() {
  return (
    <section className="bg-gradient-to-b from-hv-peach via-hv-snow to-white text-ink">
      <div className="container-page grid min-h-[92svh] items-center gap-14 pt-28 pb-16 lg:grid-cols-2 lg:pt-32">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[13px] font-medium text-coral-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden />
            Para clínicas odontológicas
          </p>
          <h1 className="mt-7 text-[clamp(2.5rem,4vw+0.5rem,4.1rem)] font-medium leading-[1.03] tracking-[-0.04em] text-balance">
            {headline}
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">{hero.description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <CallCta
              variant="1c"
              className="min-h-13 rounded-full bg-coral px-7 text-base font-medium text-white shadow-[0_10px_24px_rgba(160,74,48,0.28)] hover:bg-coral-deep"
            />
            <span className="text-sm text-stone">15 min · a partir de R$ 1.500/mês</span>
          </div>
        </div>
        <div className="relative h-[560px] lg:h-[660px]">
          <div className="absolute top-6 right-0 h-[520px] w-[80%] overflow-hidden rounded-t-[240px] rounded-b-[32px] lg:h-[600px] lg:w-[470px]">
            <Image
              src={heroPhotos.laughing.src}
              alt={heroPhotos.laughing.alt}
              fill
              priority
              sizes="(min-width: 1024px) 470px, 80vw"
              className="object-cover object-[center_25%]"
            />
          </div>
          <div className="absolute top-24 left-0 w-[280px] rounded-2xl bg-white p-5 shadow-[0_18px_44px_rgba(22,18,15,0.12)]">
            <p className="text-xs text-stone">Google com IA</p>
            <p className="mt-1.5 text-[15px] font-medium">{hero.answer.query}</p>
            <p className="mt-3 text-sm text-ink-soft">{clinics.map((c) => c.name).join(" · ")}</p>
            <p className="mt-2 text-sm font-medium text-coral">Sua clínica não aparece</p>
          </div>
          <div className="absolute bottom-10 left-8 w-[280px] rounded-2xl bg-ink p-5 text-hv-snow shadow-[0_18px_44px_rgba(22,18,15,0.22)]">
            <p className="text-xs text-mist">Relatório de outubro · exemplo</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>✓ Perfil do Google revisado</li>
              <li>✓ Avaliações respondidas</li>
              <li>✓ Página de implante no ar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
