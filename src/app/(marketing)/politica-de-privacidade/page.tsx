import { site, whatsappLinkWith } from "@/content/site";
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
          Última atualização: 1º de outubro de 2026
        </p>

        <div className="prose prose-neutral mt-12 max-w-none space-y-6 leading-relaxed text-foreground">
          <p>
            Esta política descreve como a <strong>{site.name}</strong> coleta, utiliza e protege as
            informações fornecidas por visitantes deste site, em conformidade com a Lei Geral de
            Proteção de Dados (LGPD, Lei nº 13.709/2018).
          </p>

          <h2 className="display-balanced text-[length:var(--fs-h3)]">1. Dados coletados</h2>
          <p>
            Coletamos: (a) os dados que você informa no formulário ou no WhatsApp (nome, telefone,
            clínica, bairro e cidade), junto com a página e a campanha de onde veio a visita; (b)
            dados de navegação (cookies, IP, páginas visitadas), pelo Google Tag Manager e pelo
            PostHog, só depois do seu consentimento; (c) métricas agregadas de audiência e
            desempenho da Vercel, que não usam cookies; (d) registros de erro do site, pelo Sentry,
            para corrigir falhas.
          </p>

          <h2 className="display-balanced text-[length:var(--fs-h3)]">2. Finalidade</h2>
          <p>
            Os dados são usados para: responder o seu contato, fazer a análise gratuita, enviar uma
            proposta se você quiser seguir e medir quais páginas e campanhas trazem contatos.
          </p>

          <h2 className="display-balanced text-[length:var(--fs-h3)]">3. Compartilhamento</h2>
          <p>
            Não vendemos seus dados. Eles passam por fornecedores que os tratam em nosso nome:
            Google (planilha, e-mail e Tag Manager), Vercel (hospedagem e métricas), PostHog
            (análise de navegação) e Sentry (registro de erros). Alguns desses fornecedores guardam
            dados fora do Brasil. Ferramentas de anúncio, como as da Meta e do LinkedIn, só são
            carregadas pelo Tag Manager e só depois do seu consentimento.
          </p>

          <h2 className="display-balanced text-[length:var(--fs-h3)]">4. Cookies</h2>
          <p>
            Usamos cookies essenciais e analíticos. Você pode aceitar ou recusar cookies não
            essenciais pelo banner de consentimento. A recusa não impede o uso do site.
          </p>

          <h2 className="display-balanced text-[length:var(--fs-h3)]">5. Seus direitos</h2>
          <p>
            Você pode, a qualquer momento, solicitar acesso, correção, exclusão ou portabilidade dos
            seus dados pelo{" "}
            <a
              className="underline"
              href={whatsappLinkWith("Quero exercer meus direitos de titular de dados (LGPD)")}
              target="_blank"
              rel="noreferrer"
            >
              nosso WhatsApp
            </a>
            . Respondemos em até 15 dias.
          </p>

          <h2 className="display-balanced text-[length:var(--fs-h3)]">6. Contato</h2>
          <p>Encarregado de Proteção de Dados: Bruno Duarte, pelo WhatsApp acima.</p>
        </div>
      </div>
    </article>
  );
}
