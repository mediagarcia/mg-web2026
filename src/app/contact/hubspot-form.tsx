"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}

export function HubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => {
      if (window.hbspt && containerRef.current) {
        window.hbspt.forms.create({
          portalId: "556151",
          formId: "9889726d-8529-4a21-a79a-3fd746e3fc44",
          region: "na1",
          target: "#hubspot-form-container",
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="hubspot-form-container"
      ref={containerRef}
      className="min-h-[400px]"
    />
  );
}
