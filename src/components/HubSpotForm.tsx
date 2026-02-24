"use client";

import { useEffect, useRef, useState } from "react";

interface HubSpotFormProps {
  portalId?: string;
  formId: string;
  className?: string;
  theme?: "light" | "dark";
}

const DEFAULT_PORTAL_ID = "556151";

const DARK_THEME_CSS = `
  .hs-form fieldset { max-width: 100% !important; }
  .hs-form .hs-input {
    background: rgba(255,255,255,0.08) !important;
    border: 1px solid rgba(255,255,255,0.15) !important;
    color: #fff !important;
    border-radius: 9999px !important;
    padding: 10px 16px !important;
    font-size: 14px !important;
    font-family: var(--font-family-sans, 'Roboto', system-ui, sans-serif) !important;
    width: 100% !important;
    transition: border-color 0.2s, background 0.2s !important;
  }
  .hs-form .hs-input::placeholder { color: rgba(255,255,255,0.4) !important; }
  .hs-form .hs-input:focus {
    outline: none !important;
    border-color: #3BB782 !important;
    background: rgba(255,255,255,0.12) !important;
  }
  .hs-form .hs-button {
    background: #3BB782 !important;
    color: #fff !important;
    border: none !important;
    border-radius: 9999px !important;
    padding: 10px 24px !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    font-family: var(--font-family-sans, 'Roboto', system-ui, sans-serif) !important;
    cursor: pointer !important;
    transition: background 0.2s !important;
    width: auto !important;
  }
  .hs-form .hs-button:hover { background: #2F9268 !important; }
  .hs-form .hs-error-msgs { margin-top: 4px !important; }
  .hs-form .hs-error-msgs label { color: #f87171 !important; font-size: 12px !important; }
  .hs-form .hs-form-field { margin-bottom: 8px !important; }
  .hs-form label:not(.hs-error-msgs label) { display: none !important; }
  .hs-form .legal-consent-container { margin-top: 4px !important; }
  .hs-form .legal-consent-container p { color: rgba(255,255,255,0.4) !important; font-size: 11px !important; }
  .hs-form .legal-consent-container a { color: #3BB782 !important; }
  .submitted-message { color: #3BB782 !important; font-size: 14px !important; font-weight: 500 !important; }
`;

const LIGHT_THEME_CSS = `
  .hs-form fieldset { max-width: 100% !important; }
  .hs-form .hs-input {
    background: #f9fafb !important;
    border: 1px solid #e5e7eb !important;
    color: #111 !important;
    border-radius: 12px !important;
    padding: 12px 16px !important;
    font-size: 14px !important;
    font-family: var(--font-family-sans, 'Roboto', system-ui, sans-serif) !important;
    width: 100% !important;
    transition: border-color 0.2s, box-shadow 0.2s !important;
  }
  .hs-form .hs-input::placeholder { color: #9ca3af !important; }
  .hs-form .hs-input:focus {
    outline: none !important;
    border-color: #3BB782 !important;
    box-shadow: 0 0 0 3px rgba(59, 183, 130, 0.1) !important;
  }
  .hs-form select.hs-input {
    appearance: auto !important;
    border-radius: 12px !important;
  }
  .hs-form textarea.hs-input {
    border-radius: 12px !important;
    min-height: 120px !important;
    resize: vertical !important;
  }
  .hs-form .hs-button {
    background: #3BB782 !important;
    color: #fff !important;
    border: none !important;
    border-radius: 9999px !important;
    padding: 14px 32px !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    font-family: var(--font-family-sans, 'Roboto', system-ui, sans-serif) !important;
    cursor: pointer !important;
    transition: background 0.2s !important;
    width: 100% !important;
  }
  .hs-form .hs-button:hover { background: #2F9268 !important; }
  .hs-form .hs-error-msgs { margin-top: 4px !important; }
  .hs-form .hs-error-msgs label { color: #ef4444 !important; font-size: 12px !important; }
  .hs-form .hs-form-field { margin-bottom: 12px !important; }
  .hs-form label:not(.hs-error-msgs label) {
    display: block !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    color: #374151 !important;
    margin-bottom: 4px !important;
    font-family: var(--font-family-sans, 'Roboto', system-ui, sans-serif) !important;
  }
  .hs-form .legal-consent-container { margin-top: 8px !important; }
  .hs-form .legal-consent-container p { color: #6b7280 !important; font-size: 11px !important; }
  .hs-form .legal-consent-container a { color: #3BB782 !important; }
  .submitted-message { color: #3BB782 !important; font-size: 16px !important; font-weight: 600 !important; }
`;

export function HubSpotForm({ portalId, formId, className = "", theme = "light" }: HubSpotFormProps) {
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
        const config: Record<string, unknown> = {
          portalId: resolvedPortalId,
          formId,
          target: `#${containerRef.current.id}`,
        };
        if (theme === "dark") {
          config.css = DARK_THEME_CSS;
        } else {
          config.css = LIGHT_THEME_CSS;
        }
        window.hbspt.forms.create(config);
        setLoaded(true);
      }
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [resolvedPortalId, formId, theme]);

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
        create: (config: Record<string, unknown>) => void;
      };
    };
  }
}
