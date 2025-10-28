"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: acá luego integramos Mailchimp/ConvertKit
    alert("¡Gracias! Pronto activamos la entrega automática.");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu email"
        className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand-cyan/60"
        aria-label="Email"
      />
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-brand-cyan px-6 py-3 font-semibold text-black hover:opacity-90 transition"
      >
        Recibir guía
      </button>
    </form>
  );
}
