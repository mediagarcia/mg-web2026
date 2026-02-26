"use client";

import { useEffect, useRef } from "react";

interface HubSpotMeetingsProps {
  url: string;
  className?: string;
}

const SCRIPT_SRC =
  "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

export function HubSpotMeetings({ url, className = "" }: HubSpotMeetingsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Only append the embed script once globally
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }

    // The HubSpot script scans for .meetings-iframe-container on load.
    // If it already ran before our div existed, re-trigger by re-appending.
    const poll = setInterval(() => {
      if (!containerRef.current) return;
      // HubSpot replaces the div contents with an iframe when it processes it
      if (containerRef.current.querySelector("iframe")) {
        clearInterval(poll);
        return;
      }
      // If the script is loaded but hasn't processed our container, nudge it
      const existingScript = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
      if (existingScript) {
        const fresh = document.createElement("script");
        fresh.src = SCRIPT_SRC;
        fresh.async = true;
        document.head.appendChild(fresh);
        clearInterval(poll);
      }
    }, 200);

    return () => {
      clearInterval(poll);
    };
  }, []);

  const embedUrl = url.includes("embed=true") ? url : `${url}?embed=true`;

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="meetings-iframe-container"
        data-src={embedUrl}
      />
    </div>
  );
}
