import { site } from "@/content/site";

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
              <li>
                <a href="/guias" className="text-foreground-muted hover:text-foreground">
                  Guias
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-foreground-faint">
              Contato
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-foreground-muted hover:text-foreground"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground-muted hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground-muted hover:text-foreground"
                >
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
