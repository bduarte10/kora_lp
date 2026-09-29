"use client";

import { type ReactNode, useEffect, useRef } from "react";

type Tween = {
  /** Seletor dentro de cada passo; ":scope" anima o próprio passo. */
  select: string;
  from: Record<string, number | string>;
  to: Record<string, number | string>;
};

type Props = {
  children: ReactNode;
  className?: string;
  /** Seletor dos passos, animados em sequência ao longo da rolagem. */
  steps: string;
  tweens: Tween[];
  start?: string;
  end?: string;
};

export function Scrub({
  children,
  className,
  steps,
  tweens,
  start = "top 80%",
  end = "bottom 60%",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
          scrollTrigger: { trigger: root, start, end, scrub: 0.6 },
        });
        for (const step of root.querySelectorAll<HTMLElement>(steps)) {
          for (const t of tweens) {
            const target = t.select === ":scope" ? step : step.querySelector(t.select);
            if (target) tl.fromTo(target, t.from, { ...t.to, ease: "none" });
          }
        }

        cleanup = () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      },
    );

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [steps, tweens, start, end]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
