const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans,],
      serif: ['Lora', ...defaultTheme.fontFamily.serif]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      DEFAULT: '#1C2526',
      // The colors, extended
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      violet: colors.violet,
      fuschia: colors.fuschia,
      rose: colors.rose,
      // Default Colors
      black: '#1C2526',
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {
      colors: {
        'offWhite': '#FFFCEE',
        'peach': '#FFEADC',
        'pathGray': '#565E63',
        'pathRed': '#A42100',
        'pathRedark': '#932003',
        'pathRedarkest': '#410E01',
        'pathBlue': '#578287',
        'pathBlueker': '#005058',
        'pathBluekest': '#00383E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function({ addComponents }) {
      const components = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.3rem',
          fontWeight: '600',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          '&:hover': {
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
          },
        },
        '.btn-primary': {
          backgroundColor: '#578287',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#005058'
          },
        },
        '.btn-secondary': {
          backgroundColor: '#565E63',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#1C2526'
          },
        },
      }

      addComponents(components)
    })
  ]
}
