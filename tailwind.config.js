/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        regular: ["SFPro_Regular"],
        light: ["SFPro_Light"],
        bold: ["SFPro_Bold"],
        semibold: ["SFPro_Semibold"],
      },
      colors: {
        ritual: {
          100: "#F4F2F8",
          400: "#A7A3B3",
        },
        primary: {
          DEFAULT: "#2F50C1",
          light: "#3B82F6",
          dark: "#1D4ED8",
          ritual_cyan: "#A7A3B3",
        },
        background: {
          light: "#FFFFFF",
          dark: "#2F50C1",
        },
        text: {
          light: "#1F2937",
          dark: "#F8FAFC",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
