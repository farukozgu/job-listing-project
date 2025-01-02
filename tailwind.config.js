/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
<<<<<<< HEAD
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "15px",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
=======
      backgroundImage: {
        "hero-pattern": "url('./assets/bg_banner.png')",
      },
      colors: {
        aqua: "#81D8D0",
>>>>>>> 289043deef656b083dd3f64e58228def30139629
      },
    },
  },
  plugins: [],
};
