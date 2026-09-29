"use client";

import { heroVariants } from "@/content/hero-variants";
import { cn } from "@/lib/utils";
import { LayoutGrid, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "kora:heroes";
const previewPaths = new Set(["/heroes", ...heroVariants.map((v) => `/${v.id}`)]);
const groups = [...new Set(heroVariants.map((v) => v.reference))].map(
  (reference) => [reference, heroVariants.filter((v) => v.reference === reference)] as const,
);

function readFlag() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function writeFlag() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {}
}

/**
 * Atalho para navegar entre as prévias de hero. Visitantes não veem: aparece só nas próprias
 * prévias, ou na home depois que este navegador passou por /heroes ou por /?heroes.
 * Shift+H mostra ou esconde.
 */
export function HeroSwitcher() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPreview = previewPaths.has(pathname);
    if (onPreview || new URLSearchParams(window.location.search).has("heroes")) writeFlag();
    setVisible(onPreview || (pathname === "/" && readFlag()));
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("input, textarea, [contenteditable]")) return;
      if (e.key === "Escape") setOpen(false);
      if (e.shiftKey && e.key.toLowerCase() === "h" && readFlag()) {
        setVisible((v) => !v);
        setOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  if (!visible) return null;

  const current = pathname === "/" ? "home" : pathname.slice(1);

  return (
    <div ref={panelRef} className="fixed bottom-5 left-16 z-50">
      {open && (
        <nav
          aria-label="Prévias de hero"
          className="mb-3 w-72 overflow-hidden rounded-xl border border-border bg-background-elev text-foreground shadow-lg"
        >
          <div className="max-h-[70vh] overflow-y-auto p-2">
            <a
              href="/"
              aria-current={current === "home" ? "page" : undefined}
              className={cn(
                "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-bone",
                current === "home" && "bg-bone font-medium",
              )}
            >
              Home atual
              <span className="font-mono text-xs text-foreground-subtle">/</span>
            </a>
            {groups.map(([reference, items]) => (
              <div key={reference} className="mt-2">
                <p className="px-3 pt-1 pb-1 text-xs font-medium text-foreground-subtle">
                  {reference}
                </p>
                {items.map((v) => (
                  <a
                    key={v.id}
                    href={`/${v.id}`}
                    aria-current={current === v.id ? "page" : undefined}
                    className={cn(
                      "flex items-baseline gap-3 rounded-lg px-3 py-2 text-sm transition hover:bg-bone",
                      current === v.id && "bg-bone font-medium",
                    )}
                  >
                    <span className="w-6 shrink-0 font-mono text-xs text-coral">{v.id}</span>
                    <span className="leading-snug">{v.idea}</span>
                  </a>
                ))}
              </div>
            ))}
            <a
              href="/heroes"
              className="mt-2 block rounded-lg px-3 py-2 text-xs text-foreground-subtle transition hover:bg-bone"
            >
              Ver lista completa · Shift+H esconde
            </a>
          </div>
        </nav>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Fechar prévias de hero" : "Abrir prévias de hero"}
        className="flex h-11 items-center gap-2 rounded-full border border-border bg-background-elev/90 px-3.5 text-xs font-medium text-foreground-muted shadow-md backdrop-blur transition hover:text-foreground"
      >
        {open ? <X size={15} aria-hidden /> : <LayoutGrid size={15} aria-hidden />}
        <span className="font-mono">{current === "home" ? "home" : current}</span>
      </button>
    </div>
  );
}
