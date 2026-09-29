import { hero } from "@/content/hero";
import { methodology } from "@/content/methodology";
import { Search } from "lucide-react";
import {
  CallCta,
  SecondaryLink,
  clinics,
  headline,
  headlineLead,
  headlineQuestion,
} from "./shared";

const [questions, cited] = methodology.research.stats;

export function Hero2A() {
  return (
    <section className="overflow-hidden bg-hv-night bg-[radial-gradient(60%_45%_at_50%_0%,rgb(var(--hv-ember)/0.2)_0%,transparent_70%)] text-cream">
      <div className="container-page flex flex-col items-center pt-32 text-center lg:pt-36">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-hv-night-line px-3.5 py-1.5 text-[13px] text-hv-night-mute">
          <span className="h-1.5 w-1.5 rounded-full bg-hv-ember" aria-hidden />
          Para clínicas odontológicas
        </p>
        <h1 className="mt-7 max-w-[20ch] text-[clamp(2.5rem,4.5vw+0.5rem,4.25rem)] font-medium leading-[1.04] tracking-[-0.04em] text-balance">
          {headlineLead} <span className="text-hv-night-mute">{headlineQuestion}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-hv-night-mute">
          {hero.description}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <CallCta
            variant="2a"
            className="min-h-12 rounded-[10px] bg-cream px-5 text-[15px] font-medium text-hv-night hover:bg-white"
          />
          <SecondaryLink
            variant="2a"
            href="#relatorio"
            label="Como medimos"
            className="inline-flex min-h-12 items-center rounded-[10px] border border-hv-night-line px-5 text-[15px] font-medium"
          />
        </div>

        <div className="mt-16 grid w-full max-w-5xl rounded-t-2xl border border-b-0 border-hv-night-line bg-hv-night-soft text-left md:grid-cols-2">
          <div className="border-hv-night-line p-7 md:border-r">
            <p className="font-mono text-xs text-hv-night-mute">GOOGLE COM IA · EXEMPLO</p>
            <p className="mt-3 text-[17px]">{hero.answer.query}</p>
            <ol className="mt-5 space-y-2 text-[15px]">
              {clinics.map((c, i) => (
                <li
                  key={c.id}
                  className="flex justify-between rounded-[10px] border border-hv-night-line bg-hv-night px-3.5 py-3"
                >
                  <span>{c.name}</span>
                  <span className="font-mono text-hv-night-mute">{i + 1}º</span>
                </li>
              ))}
              <li className="flex justify-between rounded-[10px] border border-dashed border-coral-soft bg-coral/10 px-3.5 py-3 text-hv-ember">
                <span>Sua clínica</span>
                <span>não citada</span>
              </li>
            </ol>
          </div>
          <div className="p-7">
            <p className="font-mono text-xs text-hv-night-mute">
              PESQUISA REAL · SÃO PAULO, SET/2026
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {[questions, cited].map((s) => (
                <div key={s.value} className="rounded-[10px] border border-hv-night-line p-4">
                  <p className="text-3xl font-medium">{s.value}</p>
                  <p className="mt-2 text-[13px] leading-snug text-hv-night-mute">{s.label}</p>
                </div>
              ))}
            </div>
            <div
              className="mt-4 flex h-28 items-end gap-2.5 rounded-[10px] border border-hv-night-line p-4"
              aria-hidden
            >
              <span className="h-[20%] flex-1 rounded bg-hv-night-line" />
              <span className="h-[30%] flex-1 rounded bg-hv-night-line" />
              <span className="h-[45%] flex-1 rounded bg-hv-night-mute/40" />
              <span className="h-[60%] flex-1 rounded bg-coral-soft" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero2B() {
  return (
    <section className="bg-hv-night bg-[linear-gradient(rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-[size:64px_64px] text-cream">
      <div className="container-page grid min-h-[92svh] items-center gap-16 pt-28 pb-16 lg:grid-cols-2 lg:pt-32">
        <div>
          <p className="font-mono text-[13px] tracking-[0.06em] text-hv-ember">
            PARA CLÍNICAS ODONTOLÓGICAS
          </p>
          <h1 className="mt-6 text-[clamp(2.5rem,4vw+0.5rem,4rem)] font-medium leading-[1.04] tracking-[-0.04em] text-balance">
            {headline}
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-hv-night-mute">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CallCta
              variant="2b"
              className="min-h-12 rounded-[10px] bg-hv-ember px-5 text-[15px] font-semibold text-hv-night hover:bg-coral-soft"
            />
            <SecondaryLink
              variant="2b"
              href="#relatorio"
              label="Ver um relatório"
              className="inline-flex min-h-12 items-center rounded-[10px] border border-hv-night-line px-5 text-[15px] font-medium"
            />
          </div>
          <dl className="mt-12 flex gap-10 text-[13px] text-hv-night-mute">
            {[questions, cited].map((s) => (
              <div key={s.value}>
                <dt className="text-2xl font-medium text-cream">{s.value}</dt>
                <dd className="mt-1 max-w-[16ch]">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative pb-28 lg:pl-8">
          <div className="overflow-hidden rounded-2xl border border-hv-night-line bg-hv-night-soft shadow-[0_0_120px_rgb(var(--hv-ember)/0.1)]">
            <div
              className="flex items-center gap-2 border-b border-hv-night-line px-4 py-3.5"
              aria-hidden
            >
              <span className="h-2.5 w-2.5 rounded-full bg-hv-night-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-hv-night-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-hv-night-line" />
              <span className="ml-3 font-mono text-xs text-hv-night-mute">
                google.com · modo IA
              </span>
            </div>
            <div className="p-7">
              <p className="text-lg">{hero.answer.query}</p>
              <p className="mt-4 leading-relaxed text-hv-night-mute">{hero.answer.intro}</p>
              <ol className="mt-4 space-y-2">
                {clinics.map((c, i) => (
                  <li key={c.id}>
                    {i + 1}. <strong className="font-medium">{c.name}</strong>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-[300px] rounded-xl border border-coral-deep/60 bg-hv-soot p-5 lg:-left-4">
            <p className="font-mono text-xs text-hv-ember">RELATÓRIO KORA</p>
            <p className="mt-2 text-cream">Sua clínica não foi citada.</p>
            <p className="mt-1 text-sm text-hv-night-mute">Quem aparece no lugar e por quê.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero2C() {
  return (
    <section className="bg-hv-night bg-[radial-gradient(40%_30%_at_50%_68%,rgb(var(--hv-ember)/0.22)_0%,transparent_100%)] text-cream">
      <div className="container-page flex min-h-[92svh] flex-col items-center justify-center pt-28 pb-16 text-center">
        <h1 className="max-w-[22ch] text-[clamp(2.4rem,4vw+0.5rem,3.9rem)] font-medium leading-[1.06] tracking-[-0.04em] text-balance">
          {headlineLead} <span className="text-hv-ember">{headlineQuestion}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-hv-night-mute">
          {hero.description}
        </p>
        <div className="mt-12 w-full max-w-3xl rounded-[20px] border border-hv-night-line bg-hv-night-soft text-left shadow-[0_0_0_6px_rgb(255_255_255/0.02),0_30px_80px_rgb(0_0_0/0.6)]">
          <div className="flex items-center gap-3.5 border-b border-hv-night-line px-5 py-5">
            <Search size={18} className="text-hv-night-mute" aria-hidden />
            <span className="flex-1 text-lg">{hero.answer.query}</span>
            <span className="hidden font-mono text-xs text-hv-night-mute sm:block">
              Google · ChatGPT · Gemini
            </span>
          </div>
          <ol className="grid grid-cols-2 gap-2.5 p-5 sm:grid-cols-4">
            {clinics.map((c, i) => (
              <li key={c.id} className="rounded-xl border border-hv-night-line p-3.5">
                <p className="font-mono text-xs text-hv-night-mute">{i + 1}º</p>
                <p className="mt-1.5 text-[15px]">{c.name}</p>
              </li>
            ))}
            <li className="rounded-xl border border-dashed border-coral-soft bg-coral/10 p-3.5 text-hv-ember">
              <p className="font-mono text-xs">não citada</p>
              <p className="mt-1.5 text-[15px]">Sua clínica</p>
            </li>
          </ol>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CallCta
            variant="2c"
            className="min-h-12 rounded-[10px] bg-cream px-5 text-[15px] font-medium text-hv-night hover:bg-white"
          />
          <SecondaryLink
            variant="2c"
            href="#preco"
            label="A partir de R$ 1.500/mês"
            className="inline-flex min-h-12 items-center rounded-[10px] border border-hv-night-line px-5 text-[15px] font-medium"
          />
        </div>
      </div>
    </section>
  );
}
