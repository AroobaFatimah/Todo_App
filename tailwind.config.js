/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '481px',   // Small screens (e.g., mobile)
        'md': '789px',   // Medium screens (e.g., tablet)
        'lg': '1024px', // Large screens
        'xl': '1369px',  //extra Large screens (e.g., desktop)
      },
    },
  },
  plugins: [],
}
