/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },

    boxShadow: { modal: "0 0 0 9999px rgba(0, 0, 0, 0.5)" },

    colors: {
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
      textLight: "#EFEEFF",
      textDark: "#342e81",
    },
    extend: {},
  },
  plugins: [],
};
