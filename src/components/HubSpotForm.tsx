"use client";

import { useEffect, useRef, useState } from "react";

interface HubSpotFormProps {
  portalId?: string;
  formId: string;
  className?: string;
}

const DEFAULT_PORTAL_ID = "556151";

export function HubSpotForm({ portalId, formId, className = "" }: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const resolvedPortalId = portalId || DEFAULT_PORTAL_ID;

  useEffect(() => {
    if (!resolvedPortalId || !formId || !containerRef.current) return;

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;

    script.onload = () => {
      if (window.hbspt && containerRef.current) {
        window.hbspt.forms.create({
          portalId: resolvedPortalId,
          formId,
          target: `#${containerRef.current.id}`,
        });
        setLoaded(true);
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup: only remove if script is still in DOM
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [resolvedPortalId, formId]);

  const containerId = `hsform-${formId}`;

  if (!resolvedPortalId || !formId) {
    return null;
  }

  return (
    <div className={className}>
      {!loaded && (
        <div className="flex items-center justify-center py-8">
          <div className="w-6 h-6 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <div ref={containerRef} id={containerId} />
    </div>
  );
}

// Type declaration for HubSpot global
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}
