import SubscribeForm from "./components/SubscribeForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ===== HEADER ===== */}
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-tight">
          Zero <span className="text-brand-cyan">Procrastinación</span>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <a href="#beneficios" className="hover:text-brand-white">Beneficios</a>
          <a href="#guia" className="hover:text-brand-white">Guía</a>
          <a href="#cta" className="hover:text-brand-white">Empezar</a>
        </nav>

        <a
          href="#cta"
          className="sm:hidden inline-flex items-center rounded-full bg-brand-cyan/90 px-4 py-2 text-sm font-semibold text-black hover:bg-brand-cyan transition"
        >
          Empezar
        </a>
      </header>

      {/* ===== HERO DIFERENCIADO ===== */}
      <section className="relative overflow-hidden" aria-label="Hero principal">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="hero-pattern absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-6xl px-6 pt-8 pb-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                Nueva guía v1.0 — 7 días
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Cero excusas.{" "}
                <span className="text-brand-cyan">Cien por ciento acción.</span>
              </h1>

              <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl">
                Un sistema directo para dejar de posponer y empezar a avanzar hoy.
                Nada de humo. Pasos simples, resultados reales.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-brand-cyan px-7 py-3 font-semibold text-black hover:opacity-90 transition"
                >
                  Empezá ahora
                </a>
                <a
                  href="#beneficios"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 font-semibold hover:bg-white/5 transition"
                >
                  Ver beneficios
                </a>
              </div>

              <p className="mt-6 text-sm text-white/60">
                Método probado en rutinas reales. 7 días para arrancar, 30 para consolidar.
              </p>
            </div>

            {/* VISUAL */}
            <div className="md:col-span-5">
              <div className="mt-2 md:mt-0">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl">🧠</div>
                      <p className="mt-3 text-white/70">
                        “Plan de 7 días” + checklist imprimible
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-white/70">
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">⚡ Acción diaria</div>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">⏱️ Sesiones Focus</div>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">📋 Hábitos clave</div>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-white/50">
                  Incluye versión gratuita y versión completa con planificador.
                </p>
              </div>
            </div>
          </div>
        </div>

        <svg className="block w-full text-brand-dark" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
          <polygon fill="currentColor" points="0,60 1440,0 1440,60"></polygon>
        </svg>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section id="beneficios" className="bg-[#101828]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Beneficios de Zero <span className="text-brand-cyan">Procrastinación</span>
            </h2>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Enfocado en acción real. Sin humo, sin teoría innecesaria.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl">⚡</div>
              <h3 className="mt-4 text-xl font-semibold">Acción real</h3>
              <p className="mt-2 text-white/70">
                Técnicas simples para empezar ahora y sostener el hábito sin depender de la motivación.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl">⏱️</div>
              <h3 className="mt-4 text-xl font-semibold">Método simple</h3>
              <p className="mt-2 text-white/70">
                Pasos claros y concretos. Lo justo para avanzar, sin sobrecargarte.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl">🚀</div>
              <h3 className="mt-4 text-xl font-semibold">Resultados visibles</h3>
              <p className="mt-2 text-white/70">
                Notá el cambio desde la primera semana con pequeñas victorias diarias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GUÍA ===== */}
      <section id="guia" className="bg-brand-dark">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                La <span className="text-brand-cyan">Guía Zero</span> — directa al grano
              </h2>
              <p className="mt-3 text-white/75">
                En 10–15 páginas te explica por qué procrastinás, cómo romper el ciclo y aplicar el método Zero con un plan de 7 días.
              </p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li>• Por qué procrastinamos (sin tecnicismos).</li>
                <li>• Los 3 errores más comunes que te frenan.</li>
                <li>• Método Zero paso a paso.</li>
                <li>• Plan de 7 días + checklist imprimible.</li>
                <li>• Plantilla de seguimiento y cierre motivador.</li>
              </ul>
            </div>

            <div className="md:col-span-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 aspect-[3/4] flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="text-2xl">📘</div>
                      <p className="mt-2 text-sm text-white/70">Portada</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 aspect-[3/4] flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="text-2xl">✅</div>
                      <p className="mt-2 text-sm text-white/70">Checklist 7 días</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                  <strong>Versión gratuita:</strong> resumen con consejos clave. <br />
                  <strong>Versión completa:</strong> guía + planificador + bonos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA + COMPARATIVA ===== */}
      <section id="cta" data-section="cta" className="bg-[#0d1422]">
        <div className="mx-auto max-w-6xl px-6 py-20 space-y-20">
          {/* CTA */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <h3 className="text-2xl md:text-3xl font-bold">Empezá hoy con la versión gratuita</h3>
                <p className="mt-2 text-white/75">
                  Recibí la guía de inicio en tu email y aplicá el plan de 7 días. Si te funciona, pasás a la versión completa.
                </p>
              </div>
              <div className="md:col-span-5">
                <SubscribeForm />
                <p className="mt-2 text-xs text-white/50">Sin spam. Cancelás cuando quieras.</p>
              </div>
            </div>
          </div>

          {/* COMPARATIVA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8">Elegí tu versión</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Free */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-brand-cyan">Gratis</h4>
                <ul className="mt-4 space-y-2 text-white/75">
                  <li>✔ Consejos esenciales</li>
                  <li>✔ Resumen del método</li>
                  <li>✖ Sin planificador</li>
                  <li>✖ Sin plantillas editables</li>
                </ul>
                <a
                  href="#cta"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-cyan/90 px-6 py-2 font-semibold text-black hover:bg-brand-cyan transition"
                >
                  Descargar
                </a>
              </div>

              {/* Full */}
              <div className="rounded-3xl border border-brand-cyan/40 bg-brand-cyan/10 p-8 backdrop-blur-sm relative">
                <span className="absolute -top-3 right-6 bg-brand-cyan text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
                <h4 className="text-xl font-semibold text-brand-cyan">Completa</h4>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li>✔ Todo lo del plan gratuito</li>
                  <li>✔ Planificador 7 días</li>
                  <li>✔ Plantillas editables</li>
                  <li>✔ Bonos extra (hábitos + focus)</li>
                </ul>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-cyan px-6 py-2 font-semibold text-black hover:opacity-90 transition"
                >
                  Comprar (€9)
                </a>
              </div>
            </div>
          </div>

          {/* MICROCOPYS */}
          <div className="text-center space-y-6">
            <h4 className="text-xl font-bold text-brand-cyan">¿Todavía dudás?</h4>
            <div className="max-w-3xl mx-auto text-white/70 space-y-3">
              <p>🕒 “No tengo tiempo.” → Precisamente por eso esta guía existe: acciones de menos de 15 min/día.</p>
              <p>🤔 “Ya probé de todo.” → Este método no te motiva, te organiza. Te da estructura, no frases vacías.</p>
              <p>💸 “¿Vale la pena pagar?” → Probá la versión gratis primero. Si ves resultados, recién ahí pasás a la completa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Zero Procrastinación</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">TikTok</a>
            <a href="#" className="hover:text-white">YouTube</a>
            <a href="#" className="hover:text-white">Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
