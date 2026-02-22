import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mediagarcia.com",
      },
      {
        protocol: "https",
        hostname: "*.mediagarcia.com",
      },
    ],
  },
};

export default nextConfig;
