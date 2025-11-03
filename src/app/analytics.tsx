"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || ""; // D41P443C77UCH1AE8MFG en prod

export default function Analytics() {
  return (
    <>
      {/* ===== TikTok Pixel (bootstrap + sdkid) ===== */}
      {TIKTOK_PIXEL_ID && (
        <>
          <Script id="tiktok-bootstrap" strategy="beforeInteractive">
            {`
              !function (w, d, t) {
                w.TiktokAnalyticsObject = t;
                var ttq = w[t] = w[t] || [];
                ttq.methods = ["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
                ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } };
                for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);

                // Versión que añade ?sdkid=
                ttq.load = function (id, opts) {
                  var base = "https://analytics.tiktok.com/i18n/pixel/events.js";
                  var u = base + "?sdkid=" + encodeURIComponent(id) + "&lib=ttq";
                  ttq._i = ttq._i || {}; ttq._i[id] = []; ttq._i[id]._u = u;
                  ttq._t = ttq._t || {}; ttq._t[id] = +new Date();
                  ttq._o = ttq._o || {}; ttq._o[id] = opts || {};
                  var s = d.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = u;
                  var a = d.getElementsByTagName("script")[0]; a.parentNode.insertBefore(s, a);
                };
              }(window, document, 'ttq');
            `}
          </Script>

          <Script id="tiktok-init" strategy="afterInteractive">
            {`
              (function(){
                var id='${TIKTOK_PIXEL_ID}';
                if (!id) return;
                try {
                  window.ttq && window.ttq.debug && window.ttq.debug(true);
                  // Evitar doble init: si ya está inicializado, sólo page()
                  if (window.ttq && window.ttq._i && window.ttq._i[id]) {
                    window.ttq.page && window.ttq.page();
                  } else {
                    window.ttq && window.ttq.load && window.ttq.load(id);
                    window.ttq && window.ttq.page && window.ttq.page();
                  }
                } catch(e) {}
              })();
            `}
          </Script>
        </>
      )}

      {/* ===== GA4 ===== */}
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

      {/* ===== Meta Pixel ===== */}
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
