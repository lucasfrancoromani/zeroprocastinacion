"use client";

import { useEffect } from "react";

export default function GraciasPage() {
  const payLink = process.env.NEXT_PUBLIC_PAY_LINK || "#";

  useEffect(() => {
    // === TRACKING EVENTS ===
    const gtag = (window as any)?.gtag;
    if (typeof gtag === "function") {
      gtag("event", "generate_lead", {
        value: 1,
        currency: "ARS",
        method: "formspree",
        item: "guia_gratuita",
      });
    }

    const fbq = (window as any)?.fbq;
    if (typeof fbq === "function") {
      fbq("track", "Lead", { content_name: "guia_gratuita" });
    }

    const trackTTQ = () => {
      const ttq = (window as any)?.ttq;
      if (ttq && typeof ttq.track === "function") {
        ttq.track("CompleteRegistration", { content_name: "guia_gratuita" });
        return true;
      }
      return false;
    };
    if (!trackTTQ()) setTimeout(trackTTQ, 200);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a1020] text-brand-white flex flex-col items-center justify-center px-6 py-20">
      {/* Contenedor principal */}
      <div className="max-w-2xl text-center">
        {/* Glow decorativo */}
        <div className="relative inline-block">
          <div className="absolute -inset-6 rounded-full bg-brand-cyan/20 blur-3xl" />
          <div className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            Confirmación recibida
          </div>
        </div>

        {/* Texto principal */}
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
          ¡Gracias por sumarte a <span className="text-brand-cyan">Zero Procrastinación</span>! 🎉
        </h1>

        <p className="mt-5 text-white/75 text-lg">
          Te acabamos de enviar un correo con la guía gratuita{" "}
          <strong>“Cómo dejar de procrastinar en 7 días”</strong>.
          <br />Si no lo ves, revisá <em>spam</em> o <em>promociones</em>.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={payLink}
            className="rounded-full bg-brand-cyan px-8 py-4 font-semibold text-black hover:opacity-90 transition shadow-lg shadow-brand-cyan/20"
          >
            Quiero el método completo ($15.000 ARS)
          </a>
          <a
            href="/#beneficios"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold hover:bg-white/10 transition"
          >
            Ver beneficios del método
          </a>
        </div>

        {/* Tips */}
        <p className="mt-8 text-sm text-white/60">
          💡 Tip: añadí <strong>contacto@zeroprocrastinacion.com</strong> a tus contactos para recibir sin filtros.
        </p>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 w-full mx-auto opacity-60" />

        {/* Seguinos */}
        <div className="mt-8 text-center space-y-3">
          <p className="text-sm text-white/70">Seguinos para más herramientas y nuevos lanzamientos:</p>
          <div className="flex items-center justify-center gap-6">
            <a href="#" aria-label="Instagram" className="hover:text-brand-cyan transition">
              Instagram
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-brand-cyan transition">
              TikTok
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-brand-cyan transition">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
