import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // pathname: "/dkr2oaodk/**",
      },
    ],
  },
};
export default nextConfig;
