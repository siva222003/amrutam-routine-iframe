/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#3A643B",
        primaryGrey: "#A0A0A0",
        primaryCream: "#FFF7E2",
        primaryBlack: "#2E2F2E",
        secondaryGreen: "#3A643BB2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
