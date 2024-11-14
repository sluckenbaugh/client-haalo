/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        companyTeal: '#6bcaba',
        companyGray: '#f0f0f2',
        companyPurple: '#8E90C1'
      },
      fontFamily: {
        'figtree': ['figtree', 'sans-serif']
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      }
    },
  },
  plugins: [],
}
