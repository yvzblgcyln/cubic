/** @type {import('tailwindcss').Config} */
// import colors from "./src/styles/colors.js";
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      white: "#fff",
      grey: "#78819d",
      linear: "gradient-to-r from-[#FFC658] to-[#F4A100]",
      "grey-trans-5": "#78819D0D",
      "grey-trans-15": "#78819D26",
      "bg-dark": "#282D38",
      "bg-tab-area": "#353A47",
      "footer-bg": "#2D323E",
    },
    fontFamily: {
      "Gilroy-400": ["Gilroy-400"],
      "Gilroy-500": ["Gilroy-500"],
      "Gilroy-700": ["Gilroy-700"],
      "Gilroy-800": ["Gilroy-800"],
      "Gilroy-900": ["Gilroy-900"],
    },
    borderRadius: {
      sm: "2px",
      md: "6px",
      lg: "8px",
      t: "10px",
      xl: "12px",
      xxl: "50%",
    },
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1320px",
    },
  },
  plugins: [],
};
