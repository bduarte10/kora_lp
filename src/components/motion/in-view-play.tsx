"use client";

import { type ReactNode, useEffect, useRef } from "react";

/** Segura as animações CSS dos filhos até o bloco entrar na tela (ver `[data-play]` em globals.css). */
export function InViewPlay({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.dataset.play = "false";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.dataset.play = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
