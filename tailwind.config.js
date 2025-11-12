 /** @type {import('tailwindcss').Config} */
module.exports ={
  darkMode: 'class',
   content: ["index.html  ", "./src/**/*.{html,js}"],
   theme: {
     extend: {
      colors: {
        'mainColor': '#680000',
        'secondColor': '#5A0202',
        'thirdColor': '#720000',
        'fourthColor': '#FFFFFF',
        'fifthColor': '#7D0000'
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif']
      }
     },
   },
   plugins: [],
 }