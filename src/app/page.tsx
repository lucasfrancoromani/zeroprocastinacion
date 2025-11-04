import SubscribeForm from "./components/SubscribeForm";

export default function Home() {
  // ✅ usamos variable de entorno (sin hardcodear)
  const payLink = process.env.NEXT_PUBLIC_PAY_LINK || "#";

  return (
    <main className="min-h-screen">
      {/* ===== HEADER ===== */}
      <header className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        {/* LOGO protagonista */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo-zero.png"
            alt="Zero Procrastinación"
            className="h-auto w-[260px] md:w-[320px] lg:w-[360px] opacity-95 group-hover:opacity-100 transition-all duration-300"
            style={{ maxWidth: "100%" }}
          />
        </a>

        {/* MENÚ */}
        <nav className="hidden sm:flex items-center gap-8 text-sm md:text-base text-white/70">
          <a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a>
          <a href="#guia" className="hover:text-white transition-colors">Guía</a>
          <a href="#cta" className="hover:text-white transition-colors">Descargar</a>
        </nav>

        {/* CTA header (visible mobile) */}
        <a
          href="#cta"
          className="sm:hidden inline-flex items-center rounded-full bg-brand-cyan/90 px-5 py-2 text-sm font-semibold text-black hover:bg-brand-cyan transition"
        >
          Descargar
        </a>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" aria-label="Hero principal">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        <div className="hero-pattern absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-24 grid md:grid-cols-12 items-center gap-10">
          {/* Texto principal */}
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-brand-cyan">Dejá de posponer</span> lo que sabés que tenés que hacer.
            </h1>

            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              Descubrí un método claro, práctico y probado para dejar la procrastinación atrás en solo 7 días.
            </p>

            {/* CTA botones */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-brand-cyan px-8 py-4 font-semibold text-black hover:opacity-90 shadow-lg shadow-brand-cyan/20 transition"
              >
                📩 Descargá la guía gratis
              </a>
              <a
                href="#guia"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-semibold hover:bg-white/5 transition"
              >
                Ver contenido
              </a>
            </div>

            <p className="mt-6 text-sm text-white/60">
              🔒 100% gratuita — sin spam, cancelás cuando quieras.
            </p>
          </div>

          {/* Visual */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-brand-cyan/20 blur-3xl" />
              <div className="relative bg-white/5 rounded-3xl border border-white/10 p-6 backdrop-blur-sm flex flex-col items-center">
                <img src="/images/icon-ray.png" alt="Marca Zero" className="h-40 w-auto" />
                <p className="mt-4 text-white/80 font-medium text-center max-w-[300px]">
                  “Cero excusas. Cien por ciento acción.”
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
      <section id="beneficios" className="bg-[#0b1220]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              ¿Por qué el Método Zero?
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
              Accioná <span className="text-brand-cyan">hoy</span>, sostené <span className="text-brand-cyan">siempre</span>
            </h2>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Menos ruido. Más resultados. Tres pilares para salir del bucle de postergar.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* 1 */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-7 overflow-hidden">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-cyan/10 blur-2xl" />
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold">Accioná ahora</h3>
              <p className="mt-2 text-white/70">
                Pasos simples de <strong>&lt; 15 min</strong>. Nada de esperar “ganas”: ejecutás y listo.
              </p>
              <ul className="mt-4 space-y-2 text-white/75 text-sm">
                <li>• Micro-tareas claras</li>
                <li>• Primer empujón guiado</li>
                <li>• Cierre rápido para momentum</li>
              </ul>
            </div>

            {/* 2 */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-7 overflow-hidden">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-cyan/10 blur-2xl" />
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="text-xl font-semibold">Ganale al reloj</h3>
              <p className="mt-2 text-white/70">
                Bloques Focus para terminar sin distracciones. Método <strong>Start–Stop</strong>.
              </p>
              <ul className="mt-4 space-y-2 text-white/75 text-sm">
                <li>• Temporizador sugerido</li>
                <li>• Pausas con sentido</li>
                <li>• Criterio de “hecho”</li>
              </ul>
            </div>

            {/* 3 */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-7 overflow-hidden">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-cyan/10 blur-2xl" />
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold">Resultados visibles</h3>
              <p className="mt-2 text-white/70">
                Progreso medible desde el día 1 con <strong>checklist</strong> y mini-victorias.
              </p>
              <ul className="mt-4 space-y-2 text-white/75 text-sm">
                <li>• Track simple</li>
                <li>• Revisión en 7 días</li>
                <li>• Siguiente objetivo listo</li>
              </ul>
            </div>
          </div>

          {/* Mini barra de confianza */}
          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-white/60">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            <span>Guía aplicada por usuarios reales para romper la inercia en una semana.</span>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIO / SOCIAL PROOF ===== */}
      <section className="bg-[#0b1220]">
        <div className="mx-auto max-w-5xl px-6 pb-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Foto del usuario */}
              <div className="shrink-0 relative">
                <div className="absolute -inset-2 rounded-full bg-brand-cyan/20 blur-2xl" />
                <img
                  src="/images/user-testimonial.jpg"
                  alt="Usuario del Método Zero"
                  className="relative h-20 w-20 rounded-full border border-white/10 object-cover"
                />
              </div>

              {/* Cita */}
              <div className="flex-1">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed italic">
                  “Después de 7 días entendí que no me faltaba motivación, me faltaba <span className="text-brand-cyan font-semibold not-italic">método</span>.
                  Con pequeñas acciones de menos de 15 minutos empecé a cumplir lo que venía pateando hace meses.”
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/60">
                  <span className="font-semibold text-white/90">Mariana Torres</span>
                  <span className="text-white/40">•</span>
                  <span>Emprendedora digital</span>
                  <span className="text-white/30">•</span>
                  <span>Usuario del Método Zero</span>
                </div>
              </div>
            </div>

            {/* Mini métricas */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-white/70">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="text-xl font-semibold text-brand-cyan">7 días</div>
                <div>para salir de la inercia</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="text-xl font-semibold text-brand-cyan">15 min</div>
                <div>sesiones de arranque</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="text-xl font-semibold text-brand-cyan">1 método</div>
                <div>para sostener el hábito</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GUÍA ===== */}
<section id="guia" className="bg-[#0b1220]">
  <div className="mx-auto max-w-6xl px-6 py-20">
    <div className="grid md:grid-cols-12 gap-10 items-center">
      {/* Texto principal */}
      <div className="md:col-span-6 space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          Contenido de la guía
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-brand-cyan">Cómo dejar de procrastinar</span> en 7 días
        </h2>
        <p className="text-white/75 leading-relaxed">
          El <strong>Método Zero</strong> combina acción inmediata con estructura mental. Vas a descubrir por qué postergás,
          cómo reprogramar tu enfoque y cómo pasar del bloqueo a la acción sostenida.
        </p>
        <ul className="space-y-3 text-white/80 text-sm">
          <li>📘 Introducción: por qué procrastinamos y cómo detectarlo.</li>
          <li>💡 Los 3 errores que te hacen perder enfoque y energía.</li>
          <li>⚙️ El Método Zero paso a paso (aplicación práctica).</li>
          <li>🗓️ Plan de 7 días + checklist imprimible.</li>
          <li>🧭 Plantilla de seguimiento y reflexión final.</li>
        </ul>
        <p className="text-sm text-white/60 pt-4">
          Incluye versión <strong>gratuita</strong> y <strong>completa</strong> con materiales adicionales.
        </p>
        <a
          href="#cta"
          className="inline-flex items-center justify-center rounded-full bg-brand-cyan px-6 py-3 mt-5 font-semibold text-black hover:opacity-90 transition"
        >
          Ver opciones de descarga
        </a>
      </div>

      {/* Visual guía */}
      <div className="md:col-span-6">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 backdrop-blur-sm">
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-cyan/10 blur-3xl" />
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 aspect-[3/4] text-center">
              <div className="text-4xl mb-2">📘</div>
              <p className="text-sm text-white/80 font-medium">Guía completa</p>
              <span className="text-xs text-white/50">Páginas prácticas</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 aspect-[3/4] text-center">
              <div className="text-4xl mb-2">🧩</div>
              <p className="text-sm text-white/80 font-medium">Checklist y planificador</p>
              <span className="text-xs text-white/50">para aplicar día a día</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ===== CTA + COMPARATIVA ===== */}
      <section id="cta" data-section="cta" className="bg-[#0a1020]">
        <div className="mx-auto max-w-6xl px-6 py-24 space-y-20">
          {/* CTA de captura reforzado */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#0f172a]">
            {/* Glow de fondo */}
            <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-brand-cyan/10 blur-3xl" />

            <div className="relative grid gap-10 md:grid-cols-12 md:items-center p-8 md:p-12">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                  Envío inmediato por email
                </div>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                  Descargá la <span className="text-brand-cyan">Guía Zero</span> gratis y empezá hoy
                </h3>
                <p className="mt-3 text-white/75">
                  Acciones de &lt; 15 minutos por día, plan de 7 días y checklist imprimible. Sin humo. Solo lo que funciona.
                </p>

                {/* Tiras de confianza */}
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">✅ Sin spam</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">🔒 Podés desuscribirte cuando quieras</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">📎 PDF + checklist incluido</span>
                </div>
              </div>

              {/* FORMULARIO */}
              <div className="md:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <SubscribeForm />
                  <p className="mt-3 text-xs text-white/55">
                    Al enviar, aceptás recibir correos sobre la guía y novedades de Zero Procrastinación.
                    <br />
                    Más info en <a href="/legal/privacidad" className="underline hover:text-brand-cyan">Política de Privacidad</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparativa: Gratis vs Completa */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8">Elegí tu versión</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Free */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm text-left">
                <h4 className="text-xl font-semibold text-brand-cyan">Gratis</h4>
                <ul className="mt-4 space-y-2 text-white/75">
                  <li>✔ Resumen del método</li>
                  <li>✔ Acciones de inicio (&lt; 15 min)</li>
                  <li>✔ Checklist imprimible</li>
                  <li>✖ Sin planificador editable</li>
                </ul>
                <a
                  href="#cta"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-cyan/90 px-6 py-2 font-semibold text-black hover:bg-brand-cyan transition"
                >
                  Descargar gratis
                </a>
              </div>

              {/* Full (Compra) */}
              <div className="relative rounded-3xl border border-brand-cyan/40 bg-brand-cyan/10 p-8 backdrop-blur-sm text-left">
                <span className="absolute -top-3 right-6 bg-brand-cyan text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
                <h4 className="text-xl font-semibold text-brand-cyan">Completa</h4>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li>✔ Guía completa</li>
                  <li>✔ Planificador 7 días editable</li>
                  <li>✔ Audio-guía de enfoque diario</li>
                  <li>✔ Plantillas imprimibles + bonos</li>
                  <li>✔ Mini guía “Cómo mantener la disciplina”</li>
                  <li>✔ Casos reales + acceso anticipado a nuevos materiales</li>
                </ul>
                <a
                  href={payLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-cyan px-6 py-2 font-semibold text-black hover:opacity-90 transition"
                >
                  Comprar ($15.000 ARS)
                </a>
                <p className="mt-3 text-xs text-white/60 leading-relaxed">
                  💳 Pago seguro con <strong>Mercado Pago</strong> a través de <strong>Payhip</strong>.
                  <br />
                  📩 Descarga automática del PDF completo al finalizar la compra.
                </p>
                <p className="mt-2 text-xs text-white/40 italic">
                  También disponible para pagos internacionales (USD / EUR) desde el mismo enlace.
                </p>
              </div>
            </div>
          </div>

          {/* Objeciones rápidas */}
          <div className="text-center space-y-6">
            <h4 className="text-xl font-bold text-brand-cyan">¿Dudas antes de empezar?</h4>
            <div className="max-w-3xl mx-auto text-white/70 space-y-3">
              <p>🕒 “No tengo tiempo.” → Las tareas son de menos de 15 minutos.</p>
              <p>🤔 “Ya probé de todo.” → Esto no es motivación; es estructura que te hace ejecutar.</p>
              <p>💸 “¿Vale pagar?” → Probá gratis. Si te sirve, recién ahí pasás a la completa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER (nuevo) ===== */}
      <footer className="border-t border-white/10 bg-[#0a0f1d]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Marca + claim */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src="/images/icon-ray.png" alt="Zero Procrastinación" className="h-7 w-auto" />
                <span className="text-white/80 font-semibold">Zero Procrastinación</span>
              </div>
              <p className="text-white/60 text-sm">
                Hecho con 💙 para pasar de idea a acción. <br className="hidden sm:block" />
                “Cero excusas. Cien por ciento acción.”
              </p>
              <div className="flex items-center gap-4 text-white/60">
                <a href="mailto:contacto@zeroprocrastinacion.com" className="hover:text-white underline underline-offset-4">
                  contacto@zeroprocrastinacion.com
                </a>
              </div>
            </div>

            {/* Navegación */}
            <nav className="grid grid-cols-2 gap-6 text-sm text-white/70">
              <div className="space-y-2">
                <a href="#beneficios" className="block hover:text-white">Beneficios</a>
                <a href="#guia" className="block hover:text-white">Guía</a>
                <a href="#cta" className="block hover:text-white">Descargar</a>
              </div>
              <div className="space-y-2">
                <a href="/legal/privacidad" className="block hover:text-white">Privacidad</a>
                <a href="#" className="block hover:text-white">Términos</a>
                <a href="#" className="block hover:text-white">Soporte</a>
              </div>
            </nav>

            {/* Social minimal */}
            <div className="flex items-center gap-4">
              {/* Reemplazá los href por tus perfiles */}
              <a href="#" aria-label="Instagram" className="group">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white/60 group-hover:fill-white transition"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Zm5.5-.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z"/></svg>
              </a>
              <a href="#" aria-label="TikTok" className="group">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white/60 group-hover:fill-white transition"><path d="M17 2c.3 2.1 1.7 3.9 4 4.3v3.1c-1.5 0-2.9-.5-4-1.3v6.7a6.9 6.9 0 1 1-6.9-6.9c.5 0 1 .1 1.4.2v3.2a3.8 3.8 0 1 0 2.7 3.6V2H17z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="group">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white/60 group-hover:fill-white transition"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8ZM9.6 15.5v-7l6.4 3.5-6.4 3.5Z"/></svg>
              </a>
            </div>
          </div>

          {/* Línea base */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>© {new Date().getFullYear()} Zero Procrastinación. Todos los derechos reservados.</p>
            <a href="#" className="inline-flex items-center gap-2 hover:text-white">
              Volver arriba
              <span className="inline-block h-4 w-4 rotate-180">↴</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
