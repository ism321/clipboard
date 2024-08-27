module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl:'1440px',
    },
    extend: {
      colors: {
        strongcyan: 'hsl(171,66%,44%)',
        lightblue:'hsl(233,100%,69%)',
        darkgrayishblue:'hsl(210,10%,33%)',
        grayishblue:'hsl(201,11%,66%)',

      },
      fontfamily: {
        sans:['Bai jamjuree, sans-serif'],

      },
    },
  },
  plugins: [],
}
