/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // DEAFAULTS
        white: "var(--white)",
        black: "var(--black)",
        // BUTTONS
        btnBlue: "var(--btn-blue)",
        btnBlueHover: "var(--btn-blue-hover)",
        btnWhite: "var(--btn-white)",
        btnWhiteHover: "var(--btn-white-hover)",
        btnOrange: "var(--btn-orange)",
        btnOrangeHover: "var(--btn-orange-hover)",
      },
      boxShadow: {
        boxHeader: '2px 2px 5px gray',
      },
      spacing: {
        widthHeader: '70px',
        heightSlide: '500px',
      },
    },
  },
  plugins: [],
}

