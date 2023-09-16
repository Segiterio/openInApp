
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth:{
         maxContainer:"1440px"
      },
      fontFamily:{
        Montserrat:["Montserrat"],
        Figtree:["Figtree"],
        Lato:["Lato"],
        Open_sans:["Open Sans"]
      },
      borderRadius:{
         lgPlus:"10px"
      },
      fontSize:{
         xxs:"10px"
      },
      boxShadow:{
         shadowFull:"4px 4px 20px rgba(0,0,0,.1) "
      },
      backgroundImage:{
        "leftImage" : "url('./src/assets/socialicons/Leftside.svg')",
      }
    },
  },
  plugins: [],
};
