/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // --- brand colours, unchanged ---
        primary: "#005326",   // deep forest green
        accent: "#cc8718",    // warm gold
        dark: "#0A0A0A",

        // --- surfaces ---
        night: "#171A18",     // page base
        coal: "#1F2321",      // alternating section bands
        slate: "#272C29",     // cards and raised surfaces
        bark: "#101312",      // footer, the darkest step
        rule: "#363C38",      // borders and hairlines

        // --- text ---
        smoke: "#E8EBE7",     // primary text
        ash: "#A9B1AA",       // secondary text
        dim: "#7C847E",       // captions, meta

        // --- solid tints (these exist so nothing needs opacity) ---
        pine: "#00401D",      // a step darker than primary, for wells on green
        sage: "#A8C3B3",      // secondary text sitting on a green panel
        amber: "#E4A23C",     // lighter gold, for hover states
        goldsoft: "#33291A",  // solid gold-tinted well behind icons
        goldmute: "#6B5420",  // muted gold for quiet marks

        // For a LIGHT grey page instead, swap these four and nothing else:
        // night #E9EAE8, coal #DFE1DE, slate #F3F4F2, smoke #1B211D.
      },
      fontFamily: {
        // One family across the whole site — rounded, geometric, friendly.
        sans: ["Quicksand", "system-ui", "sans-serif"],
        display: ["Quicksand", "system-ui", "sans-serif"],
      },
      borderRadius: {
        // uneven corners: hand-cut rather than machine-cut
        pebble: "2rem 1.35rem 2rem 1.35rem",
        "pebble-alt": "1.35rem 2rem 1.35rem 2rem",
        arch: "10rem 10rem 1.5rem 1.5rem",
      },
      // No boxShadow extensions. The design is flat: depth comes from solid
      // background steps (night -> coal -> slate) and 1px borders.
    },
  },
  plugins: [],
};