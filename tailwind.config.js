/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2F50C1",
          light: "#3B82F6",
          dark: "#1D4ED8",
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
