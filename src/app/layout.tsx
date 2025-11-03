import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script"; // 👈 agregamos Script
import Analytics from "./analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zero Procrastinación",
  description: "El método para dejar de posponer tu vida.",
};

// Tomamos el ID acá también para decidir si inyectamos el stub
const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* ✅ STUB de TikTok: define window.ttq ANTES de que cargue la app */}
        {TIKTOK_PIXEL_ID && (
          <Script id="ttq-stub" strategy="beforeInteractive">
            {`
              (function (w, d, t) {
                if (w[t]) return; // evitar duplicados
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
        )}
      </head>
      <body className={`${inter.variable} font-sans bg-brand-dark text-brand-white`}>
        {/* Inicializa los píxeles/analytics (GA, Meta y la carga diferida de TikTok) */}
        <Analytics />
        {children}
      </body>
    </html>
  );
}
