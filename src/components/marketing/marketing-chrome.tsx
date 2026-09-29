"use client";

import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";
import { WhatsAppFab } from "@/components/widgets/whatsapp-fab";
import { heroVariantNav } from "@/content/hero-variants";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function MarketingChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const minimalChrome = pathname === "/diagnostico";
  const heroTone = pathname === "/heroes" ? "ink" : heroVariantNav(pathname);

  return (
    <SmoothScrollProvider>
      {minimalChrome ? (
        <main id="main" className="w-full max-w-full overflow-x-clip">
          {children}
        </main>
      ) : (
        <>
          <Nav heroTone={heroTone} />
          <main id="main" className="w-full max-w-full overflow-x-clip">
            {children}
          </main>
          <Footer />
          <WhatsAppFab />
        </>
      )}
    </SmoothScrollProvider>
  );
}
