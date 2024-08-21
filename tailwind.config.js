/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    colors: {
      lightGray: "#6E8980",
      lightCream: "#CFD2A8",
      darkGray: "#4D5A55",
      lightBlue: "#4F9AA7",
      lightBrown: "#9B9264",
      white: "#E2EBCE",
      darkBlue: "#316B7A",
      black: "#383634",
      darkCream: "#C0BB79",
      darkBrown: "#706244",
    },
    extend: {
      backgroundImage: {
        mountain: "url('/IMG_BKG.jpg')",
      },
    },
  },
  plugins: [],
};
