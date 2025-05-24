/** @type {import('tailwindcss').Config} */

export default {
  plugins: "@tailwindcss/postcss",

  // 👇 ①  config 파일(app/) 기준으로 src 디렉터리만 딱 잡아줍니다
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
