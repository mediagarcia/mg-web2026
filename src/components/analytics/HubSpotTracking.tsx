"use client";

import Script from "next/script";

const HUBSPOT_PORTAL_ID = "556151";

export function HubSpotTracking() {
  return (
    <Script
      id="hs-script-loader"
      src={`//js.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
      strategy="afterInteractive"
    />
  );
}
