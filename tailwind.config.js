module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Primary: ['Merriweather Sans', 'sans-serif'],
        Secundary: ['Lato', 'sans-serif'],

      },
      colors: {
        'primary': '#FFFFFF',
        'secundary': '#0F0C11',
        'error': '#D60000',
        'addictional': '#4B494D',
   
      },   
      zIndex: {
        '100': '99999',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
