import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: {
    root: "C:\\Users\\welle\\Desktop\\Abdel-Rahman\\Projects",
  },
};

export default nextConfig;
