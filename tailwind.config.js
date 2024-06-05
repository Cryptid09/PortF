
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        instagram: 'instagram 1s linear infinite',
        'color-change-hover': 'color-change-hover 3s linear infinite',
      },
      keyframes: {
        instagram: {
          '0%': { color: '#f09433' },
          '25%': { color: '#e6683c' },
          '50%': { color: '#dc2743' },
          '75%': { color: '#cc2366' },
          '100%': { color: '#bc1888' },
        },
        'color-change-hover': {
          '0%, 100%': { color: '#f09433' },  
          '10%': { color: '#f29492' },      
          '20%': { color: '#e6683c' },       
          '30%': { color: '#dc2743' },      
          '40%': { color: '#cc2366' },      
          '50%': { color: '#bc1888' },       
          '60%': { color: '#833ab4' },       
          '70%': { color: '#5851db' },      
          '80%': { color: '#405de6' },       
          '90%': { color: '#1a6eff' },       
        },
      },
    },
  },
  plugins: [],
  
};
