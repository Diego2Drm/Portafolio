/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Background" : "#081B29",
        "Background2" : "#1C5E8F",
        "Text" : "#00ABF0",
        "action" : "#00EEFF",
        "text2" : "#1DE5FF",
        "text3" : "#118999",
        "lightWhite" : "rgba(255,255,255,0.17)",
      },
      fontFamily: {
        "Poppins": [ "Poppins", " sans-serif"] ,
      }
    },
  },
  plugins: [],
}

