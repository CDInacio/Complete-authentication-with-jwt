const { blackA, violet, mauve } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        danger: "#D32F2F",
        success: "#388E3C",
        darkBlue: "#2C2C38",
        dark: "#2E2E2E",
        veryDark: "#212121",
        primary: {
          100: "#e0dff4",
          200: "#c1bfe8",
          300: "#a29fdd",
          400: "#837fd1",
          500: "#645fc6",
          600: "#504c9e",
          700: "#3c3977",
          800: "#28264f",
          900: "#141328",
        },
        darkPurple: "#514BBE",
        ...blackA,
        ...violet,
        ...mauve,
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
