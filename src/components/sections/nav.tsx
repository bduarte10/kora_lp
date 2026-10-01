"use client";

import { site } from "@/content/site";
import { pushEvent } from "@/lib/gtm";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        overHero ? "bg-transparent" : "border-b border-border bg-background/85 backdrop-blur-xl",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="/"
          className="text-base font-semibold tracking-[-0.04em] text-foreground"
          aria-label={`${site.name}, início`}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.ctas.callHref}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              pushEvent({ event: "whatsapp_click", label: site.ctas.call, location: "nav" })
            }
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-foreground/90 md:inline-flex"
          >
            {site.ctas.call}
          </a>
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col gap-4 py-6">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.ctas.callHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                setOpen(false);
                pushEvent({
                  event: "whatsapp_click",
                  label: site.ctas.call,
                  location: "nav-mobile",
                });
              }}
              className="mt-2 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              {site.ctas.call}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
