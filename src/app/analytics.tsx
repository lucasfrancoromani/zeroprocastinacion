"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "";

export default function Analytics() {
  // 1) Definimos el STUB de TikTok ANTES de que la app ejecute efectos (cola segura)
  //    Esto permite que cualquier llamada a ttq.track() se encole aunque el SDK no esté cargado aún.
  //    Usamos Script "beforeInteractive" para que se ejecute lo más temprano posible.
  //    (Ojo: no llamamos a ttq.load() acá; solo definimos el stub.)
  const TikTokStub = (
    <Script id="ttq-stub" strategy="beforeInteractive">
      {`
        (function (w, d, t) {
          if (w[t]) return; // si ya existe, no duplicar
          w.TiktokAnalyticsObject = t;
          var ttq = w[t] = w[t] || [];
          ttq.methods = ["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
          ttq.setAndDefer = function (t, e) {
            t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            }
          };
          for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
        })(window, document, 'ttq');
      `}
    </Script>
  );

  // 2) Carga del SDK y ttq.load(ID) una vez montado (sin carreras con el DOM)
  useEffect(() => {
    if (!TIKTOK_PIXEL_ID) return;

    const w = window as any;
    const ttq = w.ttq;

    // Evitar doble inicialización si navegás entre páginas
    if (ttq && ttq.loaded) {
      try {
        ttq.page();
      } catch {}
      return;
    }

    // Inserta el script oficial
    const src = "https://analytics.tiktok.com/i18n/pixel/events.js";
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = src;
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript?.parentNode?.insertBefore(s, firstScript);

    // Cuando el tag esté listo, TikTok lee lo que haya encolado el stub
    try {
      ttq.load?.(TIKTOK_PIXEL_ID);
      ttq.page?.();
    } catch {}
  }, []);

  return (
    <>
      {/* ===== TikTok STUB (temprano) ===== */}
      {TikTokStub}

      {/* ===== GA4 base ===== */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true, send_page_view: true });
            `}
          </Script>
        </>
      )}

      {/* ===== Meta Pixel base ===== */}
      {META_PIXEL_ID && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}

