import ConversionEvent from "../components/ConversionEvent";

export default function GraciasPage() {
  return (
    <main className="min-h-[70vh] bg-brand-dark text-brand-white">
      {/* ✅ Marca la conversión al cargar la página */}
      <ConversionEvent
        event="generate_lead"
        params={{ method: "formspree", item: "guia_gratuita" }}
      />

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          Confirmación
        </div>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
          ¡Gracias por suscribirte! 🎉
        </h1>

        <p className="mt-4 text-white/75">
          Te acabamos de enviar un email con la guía gratuita <strong>“Cómo dejar de procrastinar en 7 días”</strong>.
          Si no lo ves, revisá la carpeta de <em>spam</em> o <em>promociones</em>.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="#beneficios"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10 transition"
          >
            Ver beneficios del método
          </a>
          <a
            href="#cta"
            className="rounded-xl bg-brand-cyan px-5 py-3 font-semibold text-black hover:opacity-90 transition"
          >
            Quiero el plan completo (€9)
          </a>
        </div>

        <p className="mt-8 text-sm text-white/60">
          Tip: añadí <strong>contacto@zeroprocrastinacion.com</strong> a tus contactos para asegurar la entrega.
        </p>
      </section>
    </main>
  );
}
