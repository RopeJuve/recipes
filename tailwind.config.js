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
      fade: 'fade 0.5s linear forwards 2s',
      'fade-1': 'fade 0.5s linear forwards 2.5s',
      'fade-2': 'fade 0.5s linear forwards 3s',
      'fade-3': 'fade 0.5s linear forwards 3.5s',
    },
    extend: {
      boxShadow: {
        'sm': '0 0 0 5px #EFDBB2'
      }
    },
  },
  plugins: [],
}

