/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
       'custom': '4px 6px 11px -1px rgba(0, 0, 0, 0.40)',
       'seco': ' 4px 6px 3px 0px rgba(0,0,0,1)',
      }, 
      colors: {
        yellow: '#FFD700',
      },
    },
  },
  plugins: [],
}