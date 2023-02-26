/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#805AD5',
        'purple-darkest': '#663ec2',
        'orange-light': '#FBD38D',
        'orange-darkest': '#e6c181'
      },
    },
  },
  plugins: [],
};
