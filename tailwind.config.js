/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'outSpace': '#474747',
        'charlGr': '#2C2C2E',
        'dark': '#313234',
        'deepBG': '#242323',
      },
    },
    fontFamily: {
      libre: "Libre Baskerville",
      popp: "Poppins",
      poller: "Poller One",
      epi: "Epilogue",
    },
  },
  plugins: [],
}