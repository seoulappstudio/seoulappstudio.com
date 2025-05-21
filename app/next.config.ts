import type { NextConfig } from "next";

const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  basePath: basePath,
  assetPrefix: basePath,
  output: "export", // GitHub Pages는 정적 사이트만 지원하므로 export 모드로 설정
  // trailingSlash: true, // 필요에 따라 주석 해제 (예: /about/ -> /about)
  // reactStrictMode: true, // 기본값은 true
};

export default nextConfig;
