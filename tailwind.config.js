/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: {'min': '1px', 'max': '480px'},
      md: {'min': '480px', 'max': '768px'},
      lg: {'min': '768px', 'max': '976px'},
    },
    extend: {},
  },
  plugins: [],
}
