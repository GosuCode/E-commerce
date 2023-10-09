/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text': '#012d29',
 'background': '#ebfffd',
 'primary': '#fa0a1e',
 'secondary': '#fdf7b4',
 'accent': '#e10517',
      },
      textColor: {
        'primary': '#000205',
        'secondary': '#fafafa',
      }
    },
  },
  plugins: [],
}
