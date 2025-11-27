import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // this tells vercel/next to skip eslint during production builds
    ignoreDuringBuilds: true,
  },
  /* other config options here */
};

export default nextConfig;
