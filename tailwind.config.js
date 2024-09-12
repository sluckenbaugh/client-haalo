/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        companyBlue: '#12395a',
        companyYellow: '#f9c706',
        companyGray: '#f0f0f2'
      },
      fontFamily: {
        'figtree': ['figtree', 'sans-serif']
      }
    },
  },
  plugins: [],
}
