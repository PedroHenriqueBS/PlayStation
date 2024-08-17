/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // DEAFAULTS
        white: "var(--white)",
        black: "var(--black)",
        gray: "var(--gray)",
        // BUTTONS
        btnBlue: "var(--btn-blue)",
        btnBlueHover: "var(--btn-blue-hover)",
        btnWhite: "var(--btn-white)",
        btnWhiteHover: "var(--btn-white-hover)",
        btnOrange: "var(--btn-orange)",
        btnOrangeHover: "var(--btn-orange-hover)",
        // GAMES LIST
        bgGames: "var(--bg-games)",
        bgButton: "var(--bg-button)",
        // PLUS
        boxDeluxe: "var(--box-deluxe)",
        borderPlus: "var(--border-plus)",
        textDeluxe: "var(--text-deluxe)",
        boxExtra: "var(--box-extra)",
      },
      boxShadow: {
        boxHeader: '2px 2px 5px gray',
      },
      spacing: {
        widthHeader: '70px',
        heightSlide: '500px',
        widthAccessories: '500px',
        heightVR: '430px',
        widtContainerSwiper: '1850px',
        heightPlus: '820px',
      },
      gridTemplateColumns: {
        'listGaming': 'repeat(6, minmax(0, 192px))',
        'listGamingMobile': 'repeat(2, minmax(0, 192px))',
      },
    },
  },
  plugins: [],
}

