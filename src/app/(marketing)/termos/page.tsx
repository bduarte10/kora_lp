import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de uso do site ${site.name}.`,
  alternates: { canonical: "/termos" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <article className="section">
      <div className="container-text">
        <h1 className="display text-[length:var(--fs-h1)]">
          Termos de Uso
        </h1>
        <p className="mt-6 text-sm text-foreground-subtle">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="mt-12 space-y-6 leading-relaxed text-foreground">
          <p>
            Ao utilizar este site, você concorda com os termos descritos abaixo. Se não
            concordar, por favor não utilize o site.
          </p>
          <h2 className="display-balanced text-[length:var(--fs-h3)]">1. Conteúdo</h2>
          <p>
            Todo o conteúdo deste site (textos, imagens, marca e materiais) pertence à{" "}
            <strong>{site.name}</strong>. É permitido o uso pessoal e referência com crédito;
            reprodução comercial exige autorização prévia.
          </p>
          <h2 className="display-balanced text-[length:var(--fs-h3)]">2. Responsabilidade</h2>
          <p>
            As informações aqui apresentadas têm caráter informativo e comercial. Não constituem
            garantia de resultado específico. Resultados em IA e automação dependem de fatores
            específicos de cada empresa.
          </p>
          <h2 className="display-balanced text-[length:var(--fs-h3)]">3. Alterações</h2>
          <p>
            Estes termos podem ser atualizados a qualquer momento. A versão vigente é sempre a
            publicada nesta página.
          </p>
          <h2 className="display-balanced text-[length:var(--fs-h3)]">4. Contato</h2>
          <p>
            Dúvidas:{" "}
            <a className="underline" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
