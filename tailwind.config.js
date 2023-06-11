/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      
      fontFamily: {
       self: ['Helvetica Neue, Arial, sans-serif'],
       self2: ['Oswald','sans-serif'],
       self3: ['Karla','sans-serif'],
      //  self4: [' var(--e-global-typography-e79afd8-font-family ), Sans-serif'],

      },
      colors: { 
        black:'#0A0C12', 
        blue: '#6ac0e9',
        darkblue:'#0BA8E6',
        gray: '#262626',
        greenself: '#82b440',
        gray2: '#7A7A7A',
      },
    },
  },
  plugins: [],
}

