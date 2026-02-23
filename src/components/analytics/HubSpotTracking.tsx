"use client";

import Script from "next/script";

const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

export function HubSpotTracking() {
  if (!HUBSPOT_PORTAL_ID) return null;

  return (
    <Script
      id="hs-script-loader"
      src={`//js.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
      strategy="afterInteractive"
    />
  );
}
