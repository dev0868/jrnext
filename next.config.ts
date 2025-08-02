/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        protocol: "https",
        hostname: "packageimage.s3.ap-south-1.amazonaws.com",
        pathname: "/tours/**",
      },
      {
        protocol: "https",
        hostname: "packageimage.s3.ap-south-1.amazonaws.com",
        pathname: "/NorthEast/**", // <-- ADD THIS
      },
    ],
  },
};

module.exports = nextConfig;
