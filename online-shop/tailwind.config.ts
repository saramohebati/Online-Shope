import type { Config } from 'tailwindcss'

export default {
   content: [
    "./src/**/*.ts",
     "./**/*.html",
     "./node_modules/flowbite/**/*.js",
     "./src/**/*.{js,jsx,ts,tsx}"
    ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
     
    },
  },
  plugins: [],
} satisfies Config