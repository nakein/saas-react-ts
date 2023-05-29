/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F9F8FE",
        "gray-50": "#A6A6A6",
        "gray-100": "#191A15",
        "gray-500": "#000000",
        "primary-100": "#85DAB9",
        "primary-200": "#6BC2A1",
        "primary-300": "#54BD95",
        "primary-500": "#54BE96",
        "secondary-400": "#161C28",
        "secondary-500": "#222938",
      },
      fontFamily: {
        inter: ['Inter', "sans-serif"]
      },
      content: {
        homepageline: "url('./assets/HomePageLine.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}

