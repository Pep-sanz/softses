/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgSilver: "url('./src/assets/bg3.png')",
        bgBlue: "url('./src/assets/bgBlue.png')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: { biru: "#0061FF" },
    },
  },
  plugins: [],
};
