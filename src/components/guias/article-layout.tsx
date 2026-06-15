import { JsonLd } from "@/components/seo/json-ld";
import { relatedGuides } from "@/content/guias/registry";
import type { Guide } from "@/content/guias/registry";
import { site, whatsappLinkWith } from "@/content/site";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";
import Link from "next/link";

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function ArticleLayout({ guide }: { guide: Guide }) {
  const url = `${site.url}/guias/${guide.slug}`;
  const related = relatedGuides(guide.slug);
  const whatsapp = whatsappLinkWith(
    `Oi! Li o guia "${guide.title}" no site da KORA e quero saber mais.`,
  );

  return (
    <article className="container-page py-16 sm:py-20">
      <JsonLd
        data={buildArticleJsonLd({
          title: guide.title,
          description: guide.description,
          url,
          datePublished: guide.datePublished,
          dateModified: guide.dateModified,
        })}
      />
      <JsonLd data={buildFaqJsonLd(guide.faq)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Início", url: site.url },
          { name: "Guias", url: `${site.url}/guias` },
          { name: guide.title, url },
        ])}
      />

      <div className="mx-auto max-w-2xl">
        <nav aria-label="Navegação estrutural" className="text-sm text-foreground-subtle">
          <Link href="/" className="hover:text-foreground">
            Início
          </Link>
          <span className="mx-1.5">/</span>
          <Link href="/guias" className="hover:text-foreground">
            Guias
          </Link>
        </nav>

        <h1 className="display mt-4 text-[length:var(--fs-h1)] leading-[1.1]">{guide.title}</h1>

        <p className="mt-3 text-sm text-foreground-subtle">
          Atualizado em {formatDate(guide.dateModified)} · KORA
        </p>

        <div className="mt-8 rounded-2xl border border-coral bg-coral/5 p-6">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-coral-deep">
            Resposta rápida
          </p>
          <p className="mt-2 leading-relaxed text-foreground">{guide.tldr}</p>
        </div>

        <div className="mt-6">
          <guide.Content />
        </div>

        <section aria-labelledby="faq-heading" className="mt-14 border-t border-border pt-10">
          <h2 id="faq-heading" className="display-balanced text-[length:var(--fs-h2)]">
            Perguntas frequentes
          </h2>
          <dl className="mt-6 space-y-6">
            {guide.faq.map((item) => (
              <div key={item.q}>
                <dt className="font-semibold text-foreground">{item.q}</dt>
                <dd className="mt-2 leading-relaxed text-foreground-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 rounded-2xl border border-border bg-background-elev p-8 text-center">
          <p className="display-balanced text-[length:var(--fs-h3)]">
            Quer um site assim para a sua empresa?
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-foreground-muted">
            A KORA cria, hospeda e mantém seu site por assinatura — otimizado para o Google e para
            IAs como ChatGPT, Gemini e Perplexity.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/#planos"
              className="inline-flex items-center justify-center rounded-full bg-coral px-5 py-3 text-sm font-medium text-cream transition hover:bg-coral-deep"
            >
              Ver planos
            </Link>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-background"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>

        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="mt-14 border-t border-border pt-10">
            <h2
              id="related-heading"
              className="font-mono text-xs uppercase tracking-wider text-foreground-faint"
            >
              Guias relacionados
            </h2>
            <ul className="mt-4 space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/guias/${r.slug}`}
                    className="font-medium text-foreground hover:text-coral"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
