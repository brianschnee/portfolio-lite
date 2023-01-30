/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'source': ['Source Code Pro', 'sans-serif'],
        'serif': ['DM Serif Display', 'serif'],
        'scope': ['Scope One', 'serif']
      },
      colors: {
        'bg-primary': '#242424',
        'bg-secondary': '#1a1a1a',
        'text-primary': '#e2e2e2',
        'text-secondary': '#979797',
        'text-tertiary': '#4a4a4a',
        'color-primary': '#9499ff',
        'color-primary-light': '#bcc0ff',
        'color-secondary': '#ffd32b',
        'border-primary': '#646cff'
      }
    },
  },
  plugins: [],
}