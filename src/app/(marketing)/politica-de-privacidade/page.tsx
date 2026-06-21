import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como a ${site.name} coleta, usa e protege seus dados, em conformidade com a LGPD.`,
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="section">
      <div className="container-text">
        <h1 className="display text-[length:var(--fs-h1)]">Política de Privacidade</h1>
        <p className="mt-6 text-sm text-foreground-subtle">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="prose prose-neutral mt-12 max-w-none space-y-6 leading-relaxed text-foreground">
          <p>
            Esta política descreve como a <strong>{site.name}</strong> coleta, utiliza e protege as
            informações fornecidas por visitantes deste site, em conformidade com a Lei Geral de
            Proteção de Dados (LGPD, Lei nº 13.709/2018).
          </p>

          <h2 className="display-balanced text-[length:var(--fs-h3)]">1. Dados coletados</h2>
          <p>
            Coletamos: (a) dados fornecidos voluntariamente em formulários ou agendamentos (nome,
            e-mail, telefone, empresa, mensagem); (b) dados técnicos de navegação (cookies, IP,
            páginas visitadas) por meio de ferramentas como Google Analytics, Meta Pixel e LinkedIn
            Insight Tag, mediante seu consentimento.
          </p>

          <h2 className="display-balanced text-[length:var(--fs-h3)]">2. Finalidade</h2>
          <p>
            Os dados são usados para: responder solicitações, organizar diagnósticos, enviar
            propostas comerciais relevantes e mensurar a eficácia de campanhas publicitárias.
          </p>

          <h2 className="display-balanced text-[length:var(--fs-h3)]">3. Compartilhamento</h2>
          <p>
            Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais.
            Utilizamos processadores como Resend (envio de e-mail), Google (planilhas e analytics) e
            Vercel (hospedagem), todos sob acordos de tratamento de dados.
          </p>

          <h2 className="display-balanced text-[length:var(--fs-h3)]">4. Cookies</h2>
          <p>
            Usamos cookies essenciais e analíticos. Você pode aceitar ou recusar cookies não
            essenciais pelo banner de consentimento. A recusa não impede o uso do site.
          </p>

          <h2 className="display-balanced text-[length:var(--fs-h3)]">5. Seus direitos</h2>
          <p>
            Você pode, a qualquer momento, solicitar acesso, correção, exclusão ou portabilidade dos
            seus dados escrevendo para{" "}
            <a className="underline" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            .
          </p>

          <h2 className="display-balanced text-[length:var(--fs-h3)]">6. Contato</h2>
          <p>Encarregado de Proteção de Dados: {site.contact.email}.</p>
        </div>
      </div>
    </article>
  );
}
