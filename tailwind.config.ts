import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.ts",
    "./**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
} satisfies Config;
