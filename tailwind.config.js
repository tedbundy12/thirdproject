/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    fontFamily: {
      def: "Rubik, sans-serif"
    },
    screens: {
      onetwothreezero: {max: "1230px"},
      onetwofivezero: {max: "1255px"},
      onefourfourzero: {max: "1440px"},
      oneonefivezero: {max: "1150px"},
      onezeroeightfive: {max: "1085px"},
      onezerofourzero: {max: "1040px"},
      onezerozerozero: {max: "1000px"},
      ninefivezero: {max: "950px"},
      ninethreezero: {max: "930px"},
      eightfivethree: {max: "853px"},
      eightfivezero: {max: "850px"},
      eightninezero: {max: "890px"},
      eightthreezero: {max: "830px"},
      sevensixzero: {max: "760px"},
      sixtwozero: {max: "620px"},
      fivezeronine: {max: '509px'},
      fourthreezero: {max: '430px'},
      fourzerozero: {max: '400px'},
    },
  },
  plugins: [],
};
