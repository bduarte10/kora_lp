"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { faq } from "@/content/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-bone border-y border-border">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow section-anchor">Perguntas frequentes</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-5 text-[length:var(--fs-h1)]">
              Antes de marcar, <br />
              <span className="text-foreground-muted">talvez você queira saber.</span>
            </h2>
          </Reveal>
        </div>

        <ul className="lg:col-span-8">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-b border-border first:border-t">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="display-balanced text-[length:var(--fs-h3)]">{item.q}</span>
                  <Plus
                    size={18}
                    className={cn(
                      "mt-1.5 shrink-0 text-foreground-muted transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
                  )}
                >
                  <p className="min-h-0 max-w-prose leading-relaxed text-foreground-muted">
                    {item.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
