/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mdLarge: "1267px"
      },
      fontFamily: {
        "PrimaryLogoFont": ['Island Moments', 'cursive'],
        "Logo": ['Open Sans', 'sans-serif']
      },
      colors: {
        primary: "#BD1EB9"
      }
    },
  },
  plugins: [],
}
