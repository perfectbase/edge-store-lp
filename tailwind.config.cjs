/* eslint-disable @typescript-eslint/no-var-requires */
const theme = require("./src/utils/theme.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: theme.primary,
      },
      fontFamily: {
        sans: ["futura", "sans-serif"],
      },
    },
  },
  plugins: [],
};
