import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/MyPortfolio",
  assetPrefix: "/MyPortfolio",
  images: { unoptimized: true },
  trailingSlash: true,
  
};

export default nextConfig;
