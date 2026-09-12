
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B3D91",   // deep navy blue (consultancy trust color)
        accent: "#F5A623",    // gold/orange CTA accent
        dark: "#0A0A0A",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};