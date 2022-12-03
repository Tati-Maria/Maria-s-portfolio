/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["raleway", "sans-serif"],
        lobster: ["lobster", "cursive"]
      },
      colors: {
        "smokey-black": "#161313",
        "blue-sapphire": "#326273",
        "cadet-blue": "#5c9ead",
        "ghost-white": "#fbfbff",
        "dark-blue": "#22434E",
        "blue-green": "#4796AE"
      }
    },
  },
  plugins: [],
}
