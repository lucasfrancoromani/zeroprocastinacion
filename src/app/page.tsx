export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HEADER */}
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-tight">
          Zero <span className="text-brand-cyan">Procrastinación</span>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <a href="#beneficios" className="hover:text-brand-white">Beneficios</a>
          <a href="#guia" className="hover:text-brand-white">Guía</a>
          <a href="#cta" className="hover:text-brand-white">Comprar</a>
        </nav>

        <a
          href="#cta"
          className="sm:hidden inline-flex items-center rounded-full bg-brand-cyan/90 px-4 py-2 text-sm font-semibold text-black hover:bg-brand-cyan transition"
        >
          Empezar
        </a>
      </header>

      {/* HERO DIFERENCIADO */}
      <section
        className="relative overflow-hidden"
        aria-label="Hero principal"
      >
        {/* Fondo con gradiente + patrón para distinguir del portfolio */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="hero-pattern absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-6xl px-6 pt-8 pb-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            {/* Texto */}
            <div className="md:col-span-7">
              {/* Badge distinta al portfolio */}
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

              {/* CTAs con estilo “pill” para diferenciarse */}
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

              {/* Social proof breve (también distinta al portfolio) */}
              <p className="mt-6 text-sm text-white/60">
                Método probado en rutinas reales. 7 días para arrancar, 30 para consolidar.
              </p>
            </div>

            {/* Visual / Card a la derecha: distinta al portfolio */}
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
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      ⚡ Acción diaria
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      ⏱️ Sesiones Focus
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      📋 Hábitos clave
                    </div>
                  </div>
                </div>

                {/* Micro copy debajo */}
                <p className="mt-4 text-center text-xs text-white/50">
                  Incluye versión gratuita y versión completa con planificador.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Separador en ángulo: marca diferencia visual */}
        <svg className="block w-full text-brand-dark" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
          <polygon fill="currentColor" points="0,60 1440,0 1440,60"></polygon>
        </svg>
      </section>

      {/* ====== SECCIONES EXISTENTES (las iremos puliendo en el PASO 2) ====== */}
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

      {/* Colocaremos #guia y #cta en los próximos pasos */}
    </main>
  );
}
