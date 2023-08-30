/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '420px',   // Small screens (e.g., mobile)
        'md': '7689px',   // Medium screens (e.g., tablet)
        'lg': '1369px',  // Large screens (e.g., desktop)
      },
    },
  },
  plugins: [],
}
