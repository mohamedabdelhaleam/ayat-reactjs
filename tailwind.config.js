/** 
 * @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
      screens: {
        'sm': '567px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '992px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1200px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1400px',
        // => @media (min-width: 1536px) { ... }
      },
  extend: {
      screens:{
        'xs' : {'min':'320px' ,'max':'567px'},
        'sm' : {'min':'568px' ,'max':'768px'},
        'md' : {'min':'769px' ,'max':'992px'},
        'lg' : {'min':'993px' ,'max':'1200px'},
        'xl' : {'min':'1201px' ,'max':'1400px'},
        '2xl' : {'min':'1400px'}
      },
 
    },
  },
  plugins: [],
}

