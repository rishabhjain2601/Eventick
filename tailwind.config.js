/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#0F0F0F",
        lightGray: "#1E1B1B",
        lightestGray: "#ffffff99"
      },
      fontFamily: {
        roboto: ["Roboto"],
      }
    },
  },
  plugins: [],
}

