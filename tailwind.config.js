/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#1A1D21",
        background: "#25292E",
        backgroundLight: "#2F3338",
        vividBlue: "#1E90FF",
        darkBlue: "#1E3A8A",
        vividRed: "#FF4C4C",
        vividGreen: "#2ECC71",
        vividPurple: "#A64DFF",
      },
    },
  },
  plugins: [],
};
