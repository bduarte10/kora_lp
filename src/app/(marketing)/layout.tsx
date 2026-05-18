import type { ReactNode } from "react";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";
import { WhatsAppFab } from "@/components/widgets/whatsapp-fab";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <Nav />
      <main id="main" className="w-full max-w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <WhatsAppFab />
    </SmoothScrollProvider>
  );
}
