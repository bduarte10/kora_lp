"use client";

import { useEffect, useRef } from "react";

/** Conta até o primeiro número do texto quando ele entra na tela ("5 de 13" conta o 5). */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^(\d+)(.*)$/);
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = Number(match[1]);
    const rest = match[2];
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        const counter = { n: 0 };
        el.textContent = `0${rest}`;
        const tween = gsap.to(counter, {
          n: target,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${Math.round(counter.n)}${rest}`;
          },
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
        cleanup = () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          el.textContent = value;
        };
      },
    );

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [value]);

  return <span ref={ref}>{value}</span>;
}
