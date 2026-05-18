"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { pushEvent } from "@/lib/gtm";
import { cn } from "@/lib/utils";

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
        overHero
          ? "bg-transparent"
          : "border-b border-border bg-background/85 backdrop-blur-xl",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="/"
          className={cn(
            "text-base font-semibold tracking-[-0.04em] transition-colors",
            overHero ? "text-cream" : "text-foreground",
          )}
          aria-label={`${site.name}, início`}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] transition-colors",
                overHero
                  ? "text-cream-muted hover:text-cream"
                  : "text-foreground-muted hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            onClick={() => pushEvent({ event: "cta_click", label: site.ctas.nav, location: "nav" })}
            className={cn(
              "hidden rounded-full px-4 py-2 text-[13px] font-medium transition md:inline-flex",
              overHero
                ? "bg-cream text-coral-deep hover:bg-cream/95"
                : "bg-foreground text-background hover:bg-foreground/90",
            )}
          >
            {site.ctas.nav}
          </a>
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full border transition md:hidden",
              overHero
                ? "border-cream-faint text-cream"
                : "border-border text-foreground",
            )}
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
              href="#cta"
              onClick={() => {
                setOpen(false);
                pushEvent({ event: "cta_click", label: site.ctas.nav, location: "nav-mobile" });
              }}
              className="mt-2 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              {site.ctas.nav}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
