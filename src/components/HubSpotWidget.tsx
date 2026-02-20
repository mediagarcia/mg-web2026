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

interface HubSpotWidgetProps {
  formId: string;
  portalId?: string;
  region?: string;
  minHeight?: string;
  containerId: string;
}

export function HubSpotWidget({
  formId,
  portalId = "556151",
  region = "na1",
  minHeight = "600px",
  containerId,
}: HubSpotWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const initForm = () => {
      if (window.hbspt && containerRef.current) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${containerId}`,
        });
      }
    };

    // Check if HubSpot script is already loaded
    if (window.hbspt) {
      initForm();
      return;
    }

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = initForm;
    document.head.appendChild(script);
  }, [formId, portalId, region, containerId]);

  return (
    <div
      id={containerId}
      ref={containerRef}
      style={{ minHeight }}
    />
  );
}
