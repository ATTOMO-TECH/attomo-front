module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-Space': "url('/cases/spaceHero.jpg')",
        'hero-Case': "url('/cases/header_case.jpg')",
        'space-Attomo': "url('/cases/Espacio_Attomo.jpg')",
        'space-Attomo2': "url('/cases/Espacio_Attomo_2.jpg')",
        'space-Attomo3': "url('/cases/Espacio_Attomo_3.jpg')",
        'space-Attomo4': "url('/cases/Espacio_Attomo_4.jpg')",
        'localitation': "url('/Map_.jpg')",
        'circle': "url('/icon/semiElipse.svg')",
    

      },
      fontFamily: {
        Primary: ['Merriweather', 'serif'],
        PrimarySerif: ['Merriweather Sans', 'sans-serif'],
        Secundary: ['Lato', 'sans-serif'],

      },
      colors: {
        'primary': '#FFFFFF',
        'secundary': '#0F0C11',
        'error': '#D60000',
        'addictional': '#4B494D',
        'logos': '#7CBBB7',
        'backCollaplse': '#0f0b11',
   
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
