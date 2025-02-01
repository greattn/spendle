import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    unoptimized: false,
  },
  sassOptions: {},
};

export default nextConfig;
