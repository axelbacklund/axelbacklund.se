/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'green-lighter': '#0F2725',
      'green-darker': '#081A18',
      bone: '#FFFEF3',
      'bone-darker': '#C2C1B1',
      'bone-darkest': '#8A8871',
      'off-black': '#202020',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Suisse_Intl', 'sans-serif'],
      serif: ['Source Serif Pro', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
