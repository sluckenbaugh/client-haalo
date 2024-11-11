/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        companyTeal: '#6bcaba',
        companyGray: '#f0f0f2'
      },
      fontFamily: {
        'figtree': ['figtree', 'sans-serif']
      }
    },
  },
  plugins: [],
}
