"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/content/site";
import { pushEvent } from "@/lib/gtm";
import { cn } from "@/lib/utils";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      onClick={() => pushEvent({ event: "whatsapp_click", location: "fab" })}
      aria-label={`Conversar com ${site.name} no WhatsApp`}
      className={cn(
        "fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-lg transition-all duration-300",
        "hover:scale-[1.03] hover:opacity-95",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none",
      )}
    >
      <MessageCircle size={18} aria-hidden />
      <span>WhatsApp</span>
    </a>
  );
}
