/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  container:{
   center:"true",
   padding:{
    default:'0.5rem'
   }
  },

  theme: {
    fontFamily: {
       "sans":["Montserrat", 'sans-serif']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
       primary:"var(--color-primary)",
       secondary:"var(--color-secondary)",
       tertiary:"var(--color-tertiary)",
       quaternary:"var(--color-quaternary)",
       primaryemphasis:"var(--color-primaryemphasis)",
       secondaryemphasis:"var(--color-secondaryemphasis)",
       brown:"var(--color-brown)",
       lightbrown:"var(--color-lightbrown)",
       darkgray:"var(--color-darkgray)",
       lightgray:"var(--color-lightgray)",
       grayvariant:"var(--color-lightgray)",
       bordercolor:"var(--color-bordercolor)",
       graysubtle:"var(--color-graysubtle)",
       textclr:"var(--color-textclr)",
       lightsubtle:"var(--color-lightsubtle)",
       faintgray:"var(--color-faintgray)",
       modestgray:"var(--color-modestgray)",
       modestlight:"var(--color-modestlight)",
       grayemphasis:"var(--color-grayemphasis)",
      },
      boxShadow:{
        'sm':"0 4px 4px #00000040",
        "md":"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
       },
    },
  },
  plugins: [
    require('preline/plugin'),
    require("@tailwindcss/forms")
  ],
};
