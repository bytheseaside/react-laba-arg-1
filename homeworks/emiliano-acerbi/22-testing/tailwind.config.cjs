/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Poppins', sans-serif",
      },
      fontSize: {
        'size-primary': '56px',
        'size-secondary': '26px',
      },
      colors: {
        primary: '#FFBB00',
        neutral: '#FFFFFF',
      },
      backgroundColor: {
        primary: '#FFBB00',
        neutral: '#E5E5E5',
        'neutral-calculator': '#242530',
        'neutral-operator': '#363746',
        'neutral-number': '#2E2F3E',
        hover: '#3f4054',
        'hover-primary': '#FFCB3B',
      },
    },
  },
  plugins: [],
};
