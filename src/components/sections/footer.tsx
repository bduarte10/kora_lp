import { site } from "@/content/site";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-base font-semibold tracking-[-0.04em]">{site.name}</div>
            <p className="mt-2 text-sm font-medium text-foreground">
              Menos promessa. Mais operação.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground-muted">
              {site.description}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
              Navegar
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-foreground-muted hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
              Contato
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="KORA no LinkedIn"
                  className="inline-flex items-center gap-2 text-foreground-muted transition hover:text-foreground"
                >
                  <Linkedin size={15} aria-hidden />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="KORA no Instagram"
                  className="inline-flex items-center gap-2 text-foreground-muted transition hover:text-foreground"
                >
                  <Instagram size={15} aria-hidden />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 text-xs text-foreground-subtle md:flex-row md:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </span>
          <div className="flex gap-4">
            <a href="/politica-de-privacidade" className="hover:text-foreground">
              Política de privacidade
            </a>
            <a href="/termos" className="hover:text-foreground">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
