/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070a0f',
          900: '#0b1018',
          800: '#111824',
          700: '#1a2433',
          600: '#273449',
        },
        brand: {
          50: '#eaf7ff',
          100: '#cdeeff',
          200: '#9bdcff',
          300: '#5fc4ff',
          400: '#2aa8ff',
          500: '#0a8aef',
          600: '#006fc4',
          700: '#00599f',
          800: '#064a80',
          900: '#0a3d69',
        },
        accent: {
          400: '#34e0c0',
          500: '#0fc9a8',
          600: '#04a88a',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(42,168,255,0.45)',
        card: '0 24px 60px -28px rgba(0,0,0,0.7)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
