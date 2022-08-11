module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      cabinBold: ['"Cabin-Bold"'],
      cabinMedium: ['"Cabin-Medium"'],
      cabinRegular: ['"Cabin-Regular"'],
      cabinSemibold: ['"Cabin-SemiBold"'],
    },
    extend: {
      fontSize: {
        xxs: '.55rem',
      },
      spacing: {
        128: '32rem',
        120: '30rem',
      },
      colors: {
        'makespotless-black': '#111111 ',
        primary: {
          main: '#103FA5',
        },
      },
    },
  },
  plugins: [],
};
