"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * SubscribeForm (con redirección a /gracias)
 * - Baja fricción (email), nombre opcional, consentimiento.
 * - Captura UTM params + timestamp.
 * - Tras éxito, redirige a /gracias.
 */
export default function SubscribeForm() {
  const router = useRouter();
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  // Lee UTM params al cargar
  const utms = useMemo(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      ref: document.referrer || "",
    };
  }, []);

  const disabled = loading || !email || !endpoint || !consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setOk(false);

    if (!endpoint) {
      setError(
        "Falta configurar el endpoint de Formspree. Agregá NEXT_PUBLIC_FORMSPREE_ENDPOINT en .env.local"
      );
      return;
    }
    if (!consent) {
      setError("Necesitamos tu consentimiento para enviarte la guía por email.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("email", email);
      if (name.trim()) formData.append("name", name.trim());
      formData.append("consent_marketing", consent ? "true" : "false");
      formData.append("submitted_at", new Date().toISOString());
      Object.entries(utms).forEach(([k, v]) => v && formData.append(k, String(v)));

      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setOk(true);
        setEmail("");
        setName("");
        setConsent(false);
        // ✅ Redirección a la página de gracias
        router.push("/gracias");
      } else {
        const data = await res.json().catch(() => null);
        const msg =
          data?.errors?.[0]?.message ||
          "No se pudo enviar el formulario. Intentá nuevamente.";
        setError(msg);
      }
    } catch {
      setError("Error de red. Verificá tu conexión e intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!endpoint && (
        <p className="mb-2 text-xs text-amber-300/90">
          ⚠️ Configurá <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> en <code>.env.local</code>.
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Nombre opcional */}
        <input
          type="text"
          name="name"
          placeholder="Tu nombre (opcional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand-cyan/60"
          aria-label="Nombre"
        />

        {/* Email requerido + botón */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            name="email"
            required
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand-cyan/60"
            aria-label="Email"
          />
          <button
            type="submit"
            disabled={disabled}
            className={`shrink-0 rounded-xl px-6 py-3 font-semibold transition ${
              disabled
                ? "bg-brand-cyan/50 text-black cursor-not-allowed"
                : "bg-brand-cyan text-black hover:opacity-90"
            }`}
          >
            {loading ? "Enviando..." : "Recibir guía"}
          </button>
        </div>

        {/* Consentimiento */}
        <label className="mt-1 flex items-start gap-2 text-xs text-white/70">
          <input
            type="checkbox"
            className="mt-[3px] h-4 w-4 rounded border-white/30 bg-transparent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            Acepto recibir emails sobre la guía y novedades de Zero Procrastinación.
            <span className="block text-white/40">Sin spam. Podés desuscribirte cuando quieras.</span>
          </span>
        </label>
      </form>

      {/* Mensajes inline por si no redirige (fallback) */}
      {ok && (
        <p className="mt-2 text-sm text-emerald-300/90">
          ¡Listo! Revisá tu bandeja (y spam/promos).
        </p>
      )}
      {error && <p className="mt-2 text-sm text-rose-300/90">{error}</p>}
    </div>
  );
}
