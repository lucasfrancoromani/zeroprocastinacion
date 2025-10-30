"use client";

import { useEffect } from "react";

type Props = {
  event?: string; // Ej: "Lead", "Purchase"
  params?: Record<string, any>;
};

export default function MetaEvent({ event = "Lead", params = {} }: Props) {
  useEffect(() => {
    const fbq = (window as any)?.fbq;
    if (typeof fbq === "function") {
      fbq("track", event, params || {});
    }
  }, [event, params]);

  return null;
}
