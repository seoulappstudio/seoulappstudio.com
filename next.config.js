/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export", // 정적 HTML 내보내기 활성화
  images: {
    unoptimized: true, // GitHub Pages에서는 이미지 최적화 서버를 실행할 수 없으므로
  },
  basePath: process.env.NODE_ENV === "production" ? "" : "", // 프로덕션 환경에서 baseUrl 설정
  trailingSlash: true, // 각 페이지를 index.html로 생성
};

module.exports = nextConfig;
