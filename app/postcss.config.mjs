// app/postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {}, // ✔️  v4 전용 플러그인
    // autoprefixer 같은 건 필요 없음
  },
};
