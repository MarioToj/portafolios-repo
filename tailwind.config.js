/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
       'green-300-diffuse': '0 10px 15px -3px rgba(110, 231, 183, 0.3), 0 4px 6px -2px rgba(110, 231, 183, 0.1)',
      }
    },
  },
  plugins: [],
}