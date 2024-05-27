/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      Fray: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#262626",
      },
      Gbay: {
        50: "#efeeff",
        100: "#e2e0ff",
        200: "#cbc7fe",
        300: "#aca5fc",
        400: "#8a81f8",
        500: "#6e63f1",
        600: "#5246e5",
        700: "#4338ca",
        800: "#3930a3",
        900: "#342e81",
        950: "#1f1b4b",
      },
    },
    extend: {},
  },
  plugins: [],
};
