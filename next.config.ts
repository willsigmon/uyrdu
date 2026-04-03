import type { NextConfig } from "next";

const CRM_ORIGIN = "https://uyraleighmetro.vercel.app";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/recommendation-sheet",
        destination: `${CRM_ORIGIN}/api/recommendation-sheet`,
      },
    ];
  },
};

export default nextConfig;
