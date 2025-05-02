/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        obsidian: '#1A1A1A', // Deep black with slight warmth
        charcoal: '#2C2C2C', // Slightly lighter black
        walnut: '#513B2F', // Deep, rich brown
        oak: '#A67C52', // Medium warm brown
        maple: '#DEB887', // Light, warm brown
        ivory: '#FFFDF7', // Warm white
        gold: '#D4AF37', // Accent color
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom, rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.8)), url("/src/assets/images/hero-bg.jpg")',
        'about-pattern': 'linear-gradient(to right, rgba(26, 26, 26, 0.9), rgba(26, 26, 26, 0.7)), url("/src/assets/images/about-bg.jpg")',
        'cta-pattern': 'linear-gradient(to bottom, rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.8)), url("/src/assets/images/cta-bg.jpg")',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'custom-lg': '0 10px 30px rgba(0, 0, 0, 0.12)',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '128': '32rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};