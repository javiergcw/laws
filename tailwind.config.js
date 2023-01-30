/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      height: {
        '1110px': '69.375rem',
      },
      colors: {
        'Dorado': '#C89D66',
        'Azul': '#1A1C2E',
        'Gris': '#F6F6F6',
      },

    },
  },
  plugins: [],
}
