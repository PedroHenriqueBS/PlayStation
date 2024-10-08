/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'light': ['arial-light', 'sans-serif'],
    },
    extend: {
      colors: {
        // DEAFAULTS
        white: "var(--white)",
        black: "var(--black)",
        gray: "var(--gray)",
        purple: "var(--background-purple)",
        social: "var(--social)",
        footer: "var(--footer)",
        // BUTTONS
        btnBlue: "var(--btn-blue)",
        btnBlueHover: "var(--btn-blue-hover)",
        btnWhite: "var(--btn-white)",
        btnWhiteHover: "var(--btn-white-hover)",
        btnWhiteHover2: "var(--btn-white-hover2)",
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
        // UPDATE
        boxUpdate: "var(--box-update)",
        borderUpdate: "var(--border-update)",
        // LOGIN
        backgroundLogin: "var(--background-login)",
        btnLogin: "var(--btn-login)",
        input: "var(--input)",
        inputHover: "var(--input-hover)",
      },
      boxShadow: {
        boxHeader: '2px 2px 5px gray',
      },
      spacing: {
        widthHeader: '70px',
        heightSlide: '500px',
        heightVR: '550px',
        heightUpdate: '450px',
        heightUpdate2: '600px',
        widthAccessories: '500px',
        widtContainerSwiper: '1850px',
        heightPlus: '820px',
        heightStore: '650px',
      },
      gridTemplateColumns: {
        'listGaming': 'repeat(6, minmax(0, 192px))',
        'listGamingTablet': 'repeat(4, minmax(0, 192px))',
        'listGamingMobile': 'repeat(2, minmax(0, 192px))',
        'listGamingMiniMobile': 'repeat(1, minmax(0, 250px))',
      },
      gridTemplateRows:{
        'layout': '150px  1fr'
      },
      backgroundImage: {
        'backgroundVR': "url('../public/assets/VR/backgroundVR.webp')",
        'backgroundVR-mobile': "url('../public/assets/VR/VR-mobile.webp')",
        'backgroundDate': "url('../public/assets/sectiondata.webp')",
        'backgroundDate-mobile': "url('../public/assets/date-mobile.webp')",
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}

