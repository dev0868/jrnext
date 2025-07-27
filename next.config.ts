import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/400x300/**",
      },
      {
        protocol: "https",
        hostname: "packageimage.s3.ap-south-1.amazonaws.com",
        pathname: "/Thailand/**",
      },
    ],
  },
};

export default nextConfig;
