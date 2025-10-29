export default function PrivacidadPage() {
  return (
    <main className="min-h-[70vh] bg-brand-dark text-brand-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Política de Privacidad</h1>
        <p className="mt-4 text-white/80">
          En <strong>Zero Procrastinación</strong> respetamos tu privacidad. Recopilamos el correo electrónico y, de forma opcional, tu nombre para enviarte la guía y novedades relacionadas. Podés desuscribirte en cualquier momento.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Datos que recolectamos</h2>
        <ul className="mt-3 list-disc pl-6 text-white/80 space-y-2">
          <li>Email (obligatorio) y nombre (opcional) al suscribirte.</li>
          <li>Metadatos de campaña (UTM) para medir resultados de marketing.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Finalidad</h2>
        <p className="mt-3 text-white/80">
          Enviar la guía gratuita, novedades del método y ofertas relacionadas. No vendemos ni cedemos tus datos a terceros con fines comerciales.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Proveedores</h2>
        <p className="mt-3 text-white/80">
          Para el formulario usamos <strong>Formspree</strong> y para el pago/redescarga un proveedor externo (p. ej., Payhip/Gumroad/Stripe). Al comprar, tu pago se procesa en su plataforma bajo sus propias políticas de privacidad.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Tus derechos</h2>
        <p className="mt-3 text-white/80">
          Podés solicitar acceso, rectificación o eliminación de tus datos escribiendo a{" "}
          <a href="mailto:contacto@zeroprocrastinacion.com" className="underline text-brand-cyan">
            contacto@zeroprocrastinacion.com
          </a>.
        </p>

        <p className="mt-10 text-sm text-white/50">
          Última actualización: {new Date().toLocaleDateString("es-ES")}
        </p>
      </section>
    </main>
  );
}
