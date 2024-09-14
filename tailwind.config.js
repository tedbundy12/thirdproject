/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    fontFamily: {
      def: "Rubik, sans-serif"
    },
    screens: {
      navbarFirst: {max: '1200px'},
      onethreefivezero: {max: '1350px'},
      oneonefivezero: {max: '1150px'},
      onetwothreezero: {max: '1230px'},
      oneonezerozero: {max: '1100px'}
    },
  },
  plugins: [],
};
