/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-color': '#191A23',
      'secondary-color': '#B9FF66',
      'custom-white-color': '#FFFFFF',
    },
    fontFamily: {
      
    },
    extend: {
      animation: {
        'scroll-x': 'scroll-x 10s linear infinite',
      },
      keyframes: {
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}