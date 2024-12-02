/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bluebg":{
          100:"#6F4EFD",
          200:"#8F82CA",
          300:"#684CEB",
          500:"#423D96",
          700:"#060b25" ,
          900:"#2A2C55"         
        }
      },
      boxShadow: {
        "normal": "0px 1px 10px 0px #0000000D",
      },
      borderRadius: {
       "normal":"15px",
          "4xl":"28px",
          "5xl":"32px",
          "mdd":"35px",
          "6xl":"38px",
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
        "Sans":"Sans",
        "Vazir":"Vazir"
      },
      container: {
        center: true,
        DEAFULT: "1rem",
        lg: "0.625rem"
      },
      scale:{
        "90":"0.9",
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
  },
  plugins: [],
}
