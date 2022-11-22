/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages/**/*.{jsx,js,ts,tsx}", "components/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      animation: { sild: "sild 2s linear infinite" },
      keyframes: {},
    },
    fontFamily: {
      title: ["Libre Caslon Display"],
      bodyCopy: ["Mulish"],

    },
  },
};
