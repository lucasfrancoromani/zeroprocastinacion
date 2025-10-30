"use client";

import { useEffect } from "react";

type Props = {
  event?: string;
  params?: Record<string, any>;
};

export default function ConversionEvent({
  event = "generate_lead",
  params = {},
}: Props) {
  useEffect(() => {
    // Solo si GA está cargado
    // @ts-ignore
    const gtag = (window as any)?.gtag;
    if (typeof gtag === "function") {
      gtag("event", event, {
        value: 1,
        currency: "EUR",
        ...params,
      });
      // Opcional: también enviar un page_view explícito
      // gtag("event", "page_view");
    }
  }, [event, params]);

  return null;
}
