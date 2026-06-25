import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
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
