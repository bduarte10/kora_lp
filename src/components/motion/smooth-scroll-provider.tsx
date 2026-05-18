"use client";

import Lenis from "lenis";
import { type ReactNode, useEffect } from "react";

let gsapPromise: Promise<typeof import("gsap").default> | null = null;

async function loadGsap() {
  if (!gsapPromise) {
    gsapPromise = Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      return gsap;
    });
  }
  return gsapPromise;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    let gsapRef: typeof import("gsap").default | null = null;

    function raf(time: number) {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    }
    rafId = window.requestAnimationFrame(raf);

    loadGsap().then(async (gsap) => {
      gsapRef = gsap;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      gsapRef?.ticker.remove(() => {});
    };
  }, []);

  return <>{children}</>;
}
