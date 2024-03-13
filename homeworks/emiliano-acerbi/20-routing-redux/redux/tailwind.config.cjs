/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Hind Siliguri', sans-serif",
      },
      backgroundColor: {
        'todo-bg': '#ECF3FF',
        'add-bg': '#5275A0',
      },
      colors: {
        gradient: 'linear-gradient(116.67deg, #8c72b7 0.58%, rgba(192, 46, 195, 0) 101.02%)',
      },
    },
  },
  plugins: [],
};
