
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'color-change-hover': 'color-change-hover 8s infinite',
      },
      keyframes: {
        'color-change-hover': {
          '0%, 100%': { color: '#ff0000' }, 
          '20%': { color: '#ff7f00' },       
          '40%': { color: '#ffff00' },       
          '60%': { color: '#00ff00' },       
          '80%': { color: '#0000ff' },       
        },
      },
    },
  },
  plugins: [],
};
