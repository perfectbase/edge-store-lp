/* eslint-disable @typescript-eslint/no-var-requires */
const theme = require("./src/utils/theme.cjs");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: theme.primary,
      },
      fontFamily: {
        sans: ["var(--font-main)", ...fontFamily.sans],
        hand: ["var(--font-hand)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
