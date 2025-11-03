"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "";

export default function Analytics() {
  // --- TikTok Pixel: montar después del render y evitar doble init ---
  useEffect(() => {
    if (!TIKTOK_PIXEL_ID) return;

    // Evita reinicializar si ya está cargado
    const w = window as any;
    if (w.ttq?.loaded) {
      try {
        w.ttq.page();
      } catch {}
      return;
    }

    // Bootstrap oficial pero en JS nativo (no string-injected)
    w.TiktokAnalyticsObject = "ttq";
    const ttq: any[] & { [key: string]: any } = (w.ttq = w.ttq || []);
    ttq.methods = [
      "page",
      "track",
      "identify",
      "instances",
      "debug",
      "on",
      "off",
      "once",
      "ready",
      "alias",
      "group",
      "enableCookie",
      "disableCookie",
    ];
    ttq.setAndDefer = function (t: any, e: string) {
      t[e] = function () {
        // @ts-ignore
        t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
      };
    };
    for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);

    ttq.load = function (e: string, n?: Record<string, any>) {
      const src = "https://analytics.tiktok.com/i18n/pixel/events.js";
      ttq._i = ttq._i || {};
      ttq._i[e] = [];
      ttq._i[e]._u = src;
      ttq._t = ttq._t || {};
      ttq._t[e] = +new Date();
      ttq._o = ttq._o || {};
      ttq._o[e] = n || {};

      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = src;
      const a = document.getElementsByTagName("script")[0];
      a.parentNode?.insertBefore(s, a);
    };

    ttq.load(TIKTOK_PIXEL_ID);
    ttq.page();
  }, []);

  return (
    <>
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
