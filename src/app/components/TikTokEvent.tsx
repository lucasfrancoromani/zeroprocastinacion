"use client";

import { useEffect } from "react";

type Props = {
  event?: string; // Ej: "CompleteRegistration", "Lead", "Purchase"
  params?: Record<string, any>;
};

export default function TikTokEvent({
  event = "CompleteRegistration",
  params = {},
}: Props) {
  useEffect(() => {
    const ttq = (window as any)?.ttq;
    if (typeof ttq?.track === "function") {
      ttq.track(event, params || {});
    }
  }, [event, params]);

  return null;
}
