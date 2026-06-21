"use client";

import { clientEnv } from "@/lib/env";
import Script from "next/script";
import { useEffect, useState } from "react";

/**
 * GTM carregado deferido: após primeiro scroll/interação ou 3s;o que vier primeiro.
 * Consent Mode v2 inicializado como denied; ConsentBanner atualiza para granted.
 */
export function GTM() {
  const id = clientEnv.NEXT_PUBLIC_GTM_ID;
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!id) return;
    const onInteract = () => setShouldLoad(true);
    const timer = window.setTimeout(() => setShouldLoad(true), 3000);
    window.addEventListener("scroll", onInteract, { once: true, passive: true });
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("keydown", onInteract, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
  }, [id]);

  if (!id) return null;

  return (
    <>
      <Script id="gtm-consent-default" strategy="beforeInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
      </Script>
      {shouldLoad && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${id}');
            `}
        </Script>
      )}
    </>
  );
}

export function GTMNoScript() {
  const id = clientEnv.NEXT_PUBLIC_GTM_ID;
  if (!id) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${id}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="GTM"
      />
    </noscript>
  );
}
