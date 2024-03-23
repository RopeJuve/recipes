/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Heading-bold': ['Heading-bold', 'sans-serif'],
      'Text': ['Text', 'sans-serif'],
      'Heading-latin': ['Heading-latin', 'sans-serif'],
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
      backgroundColor: {
        'light': '#fdf9f4',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

