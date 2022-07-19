/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      dkblue: "#0d314b",
      aqua: "#86fbfb",
      hotmag: "#ff17e4",
      magenta: "#e310cb",
      white: "#f7f8fa",
      plum: "#4b0d49",
      black: "#171321",
    },
    fontFamily: {
      Oxygen: ["Oxygen", "sans-serif"],
      Mono: ["Oxygen Mono", "monospace"],
    },
  },
  plugins: [],
};
