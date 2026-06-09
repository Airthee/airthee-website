import defaultColors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      ...defaultColors,
      primary: '#2C527F',
      'primary-light': "#B0C4DC",
      'primary-lighten': '#E7EBEF',
      secondary: '#C38D37',
      'secondary-light': '#FFEAC8',
      'secondary-lighten': '#E7EBEF'
    },
    extend: {},
  },
  plugins: [],
}
