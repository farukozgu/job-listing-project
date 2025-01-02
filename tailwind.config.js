/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/bg_banner.png')",
      },
      colors: {
        aqua: "#81D8D0",
      },
    },
  },
  plugins: [],
};
