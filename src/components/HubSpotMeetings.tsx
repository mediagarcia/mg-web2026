"use client";

import { useEffect, useRef } from "react";

interface HubSpotMeetingsProps {
  url: string;
  className?: string;
}

export function HubSpotMeetings({ url, className = "" }: HubSpotMeetingsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!containerRef.current || scriptLoaded.current) return;

    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    scriptLoaded.current = true;

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
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
