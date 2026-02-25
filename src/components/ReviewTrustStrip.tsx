"use client";

import { Star } from "lucide-react";

interface ReviewTrustStripProps {
  variant?: "light" | "dark";
}

const platforms = [
  {
    name: "HubSpot",
    count: 29,
    label: "five-star reviews",
    url: "https://ecosystem.hubspot.com/marketplace/solutions/media-garcia",
  },
  {
    name: "Facebook",
    count: 15,
    label: "reviews (4.7\u2605)",
    url: "https://www.facebook.com/mediagarcia/reviews",
  },
  {
    name: "Google",
    count: 6,
    label: "five-star reviews",
    url: "https://g.page/mediagarcia",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-hidden="true">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </span>
  );
}

export function ReviewTrustStrip({ variant = "light" }: ReviewTrustStripProps) {
  const isDark = variant === "dark";

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
      aria-label="Verified client reviews"
    >
      {platforms.map((platform, index) => (
        <span key={platform.name} className="flex items-center gap-x-2">
          {index > 0 && (
            <span
              className={`hidden sm:inline-block w-px h-4 -ml-3 mr-1 ${
                isDark ? "bg-white/20" : "bg-gray-200"
              }`}
              aria-hidden="true"
            />
          )}
          <Stars />
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm transition-colors ${
              isDark
                ? "text-white/70 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <span
              className={`font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {platform.count}
            </span>{" "}
            {platform.label} on{" "}
            <span
              className={`font-medium underline underline-offset-2 decoration-dotted ${
                isDark
                  ? "decoration-white/30"
                  : "decoration-gray-300"
              }`}
            >
              {platform.name}
            </span>
          </a>
        </span>
      ))}
    </div>
  );
}
