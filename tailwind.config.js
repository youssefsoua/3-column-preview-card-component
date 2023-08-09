/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "big-shoulders": ["Big Shoulders Display", "cursive"],
        "Lexend-Deca": ["Lexend Deca", "sans-serif"],
      },
      screens: {
        mobile: "480px",
        "2k": "1440px",
      },
      colors: {
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "very-light-gray": "hsl(0, 0%, 95%)",
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
      },
      minHeight: {
        "1/4": "25%",
      },
    },
  },
  plugins: [],
};
