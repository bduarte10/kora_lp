import { hero } from "@/content/hero";
import { heroPhotos } from "@/content/hero-variants";
import { site } from "@/content/site";
import Image from "next/image";
import { CallCta, clinics, headlineLead, headlineQuestion } from "./shared";

export function Hero4A() {
  return (
    <section className="bg-cream text-hv-soot">
      <div className="container-page grid min-h-[92svh] gap-6 pt-24 pb-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:pt-28">
        <div className="flex flex-col justify-between gap-12 rounded-[32px] bg-hv-flame p-8 text-hv-milk sm:p-14">
          <div>
            <p className="text-2xl font-medium tracking-[-0.02em]">{headlineLead}</p>
            <h1 className="mt-3 text-[clamp(3.5rem,7vw+0.5rem,8rem)] leading-[0.9] font-extrabold tracking-[-0.06em]">
              {headlineQuestion}
            </h1>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-sm text-lg leading-snug font-medium">{hero.description}</p>
            <CallCta
              variant="4a"
              arrow
              className="min-h-15 shrink-0 rounded-full bg-hv-soot px-8 text-[17px] font-semibold text-hv-milk hover:bg-black"
            />
          </div>
        </div>
        <div className="relative min-h-[480px] overflow-hidden rounded-[32px] bg-hv-soot">
          <Image
            src={heroPhotos.portrait.src}
            alt={heroPhotos.portrait.alt}
            fill
            priority
            sizes="(min-width: 1024px) 35vw, 100vw"
            className="object-cover grayscale"
          />
          <ul className="absolute inset-x-5 bottom-5 flex flex-col items-start gap-2">
            {clinics.map((c, i) => (
              <li
                key={c.id}
                className="rounded-full bg-hv-milk px-4 py-2.5 text-[15px] font-semibold"
              >
                {i + 1} · {c.name}
              </li>
            ))}
            <li className="rounded-full bg-hv-lime px-5 py-3 font-extrabold">
              Sua clínica? Não citada.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Hero4B() {
  return (
    <section className="bg-hv-lime text-hv-soot">
      <div className="container-page flex min-h-[92svh] flex-col pt-28 pb-12 lg:pb-14">
        <p className="text-[clamp(1.25rem,1vw+1rem,1.75rem)] font-semibold tracking-[-0.02em]">
          {headlineLead}
        </p>
        <h1 className="mt-1 text-[clamp(4rem,11vw,11rem)] leading-[0.86] font-extrabold tracking-[-0.065em]">
          sua clínica
          <br />
          aparece?
        </h1>
        <div className="mt-auto grid items-end gap-6 pt-12 lg:grid-cols-[minmax(0,1fr)_560px]">
          <div className="flex flex-col gap-6">
            <p className="max-w-md text-xl leading-snug font-medium">{hero.description}</p>
            <div className="flex flex-wrap items-center gap-5">
              <CallCta
                variant="4b"
                arrow
                className="min-h-15 rounded-full bg-hv-soot px-8 text-[17px] font-bold text-hv-lime hover:bg-black"
              />
              <span className="font-semibold">a partir de {site.pricing.monthlyFrom}/mês</span>
            </div>
          </div>
          <div className="rounded-[28px] bg-hv-soot p-7 text-cream">
            <p className="text-sm text-mist">{hero.answer.query}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {clinics.map((c, i) => (
                <li
                  key={c.id}
                  className="rounded-full bg-hv-soot-soft px-4 py-2.5 text-[15px] font-semibold"
                >
                  {i + 1} · {c.name}
                </li>
              ))}
              <li className="rounded-full bg-hv-flame px-4 py-2.5 text-[15px] font-extrabold text-hv-milk">
                Sua clínica? Não citada.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero4C() {
  return (
    <section className="bg-hv-soot text-hv-milk">
      <div className="container-page grid min-h-[92svh] items-center gap-14 pt-28 pb-14 lg:grid-cols-[minmax(0,1fr)_480px]">
        <div>
          <h1 className="text-[clamp(3rem,6vw+0.5rem,7.25rem)] leading-[0.9] font-extrabold tracking-[-0.06em]">
            O paciente
            <br />
            perguntou.
            <br />
            <span className="text-hv-flame">A IA respondeu.</span>
            <br />
            <span className="text-stone">Você não estava lá.</span>
          </h1>
          <p className="mt-9 max-w-lg text-lg leading-snug text-fog">{hero.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <CallCta
              variant="4c"
              arrow
              className="min-h-15 rounded-full bg-hv-lime px-8 text-[17px] font-extrabold text-hv-soot hover:brightness-95"
            />
            <span className="font-semibold text-fog">
              a partir de {site.pricing.monthlyFrom}/mês
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-3.5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
              <Image
                src={heroPhotos.portrait.src}
                alt=""
                fill
                sizes="64px"
                className="object-cover object-[60%_40%] grayscale"
              />
            </div>
            <p className="rounded-[22px] rounded-bl-md bg-hv-soot-soft px-5 py-4 text-lg font-semibold">
              {hero.answer.query}
            </p>
          </div>
          <div className="ml-[78px] rounded-[22px] bg-hv-milk p-6 text-hv-soot">
            <p className="text-sm font-semibold text-stone">Resposta de IA</p>
            <ol className="mt-2.5 space-y-1 text-xl font-bold">
              {clinics.map((c, i) => (
                <li key={c.id}>
                  {i + 1} · {c.name}
                </li>
              ))}
            </ol>
          </div>
          <p className="ml-[78px] self-start rounded-full bg-hv-flame px-5 py-3 font-extrabold">
            Sua clínica? Não citada.
          </p>
        </div>
      </div>
    </section>
  );
}
