import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://source.unsplash.com/400x300/?mountain,travel')],
  },};

export default nextConfig;
