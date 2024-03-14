/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Cedarville': ['"Cedarville Cursive"', 'cursive'],
      'Fugaz': ['"Fugaz One"', 'sans-serif'],
      'Roboto': ['Roboto', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    keyframes: {
      fade: {
        '100%': {
          opacity: 1
        }
      }
    },
    animation: {
      fade: 'fade 0.5s linear forwards 0.8s'
    },
    extend: {
      boxShadow: {
        'sm': '0 0 0 5px #EFDBB2',
        'hero': '0 24px 0 18px #EFDBB2',
      },
    },
  },
  plugins: [],
}

