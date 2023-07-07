/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        notoSansKr: ["var(--noto-sans-kr)"],
        roboto: ["var(--roboto)"],
      },
    },
  },
  plugins: [],
};
