/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Lora', 'serif'],
      },
      colors: {
        amber: {
          50: '#fff8e6',
          100: '#ffefc4',
          200: '#ffe09b',
          300: '#ffc96b',
          400: '#ffb347',
          500: '#ff9d1b',
          600: '#fe8a0a',
          700: '#ee7600',
          800: '#cc5f00',
          900: '#a94e08',
          950: '#7a2d00',
        },
      },
      backgroundImage: {
        'wood-pattern': "url('https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};