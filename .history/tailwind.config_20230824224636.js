/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '641px',   // Small screens (e.g., mobile)
        'md': '768px',   // Medium screens (e.g., tablet)
        'lg': '1369px',  // Large screens (e.g., desktop)
      },
    },
  },
  plugins: [],
}
