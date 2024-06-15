import flowbite from "flowbite-react/tailwind";
import color, { blue } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",
        secondary: "#C81E1E",
        text: "#fff",
        sub: "#222222",
        failure: "#C81E1E",
        red: color.red[600],
        blue: color.blue[600],
        green: color.green[400],
        yellow: color.yellow[400],
        gray: color.gray[400],
      },
      fontFamily: {
        default: '"Montserrat", sans-serif',
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwind-scrollbar")],
};
