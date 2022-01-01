// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js'],
    darkMode: false,
    theme: {
      extend: {
        colors: {
          mercadopago: '#01B1EA',
          primary: '#D71567',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}