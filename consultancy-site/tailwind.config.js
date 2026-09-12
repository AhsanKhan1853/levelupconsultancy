
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005326",   // deep navy blue (consultancy trust color)
        accent: "#cc8718",    // gold/orange CTA accent
        dark: "#0A0A0A",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};