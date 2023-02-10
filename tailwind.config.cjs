const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    styled: true,
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dracula]'],
          primary: '#F1B569',
          'primary-focus': '#ffab42',
          'primary-content': '#2a303c',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
