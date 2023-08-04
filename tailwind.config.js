/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus'],
      textColor: ['responsive', 'hover', 'focus'],
      // Ajoutez d'autres propriétés CSS que vous souhaitez activer pour la pseudo-classe hover
    },
  },
};