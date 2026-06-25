import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/driftless-logo.png",
        search: "?v=20260625-4",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
