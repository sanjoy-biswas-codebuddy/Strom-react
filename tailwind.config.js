/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'font-color': '#111111',
        'primary': '#FB0201',
        'secondary': '#fed6d6',
      },
      spacing: {
        '170': '170px', 
      },
      fontSize: {
        '60': '60px', 
      },
      lineHeight: {
        '70': '70px',
      },
      backgroundSize: {
        '100%': '100%',
      },
      fontFamily: {   
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },  
      boxShadow: {
        'card': '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
      },
      backgroundImage: {
        'line-pattern': "url('./src/assets/line.svg')",
      },
    },
  },
  plugins: []
}