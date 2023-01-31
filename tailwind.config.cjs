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
        light: {
          primary: '#5360CE',
          'primary-focus': '#5360CE',
          'primary-content': '#F9F9F9',
          secondary: '#F3F4F6',
          'secondary-focus': '#EBEBEB',
          'secondary-content': '#111827',
          accent: '#FFFFFF',
          'accent-focus': '#FFFFFF',
          'accent-content': '#111827',
          neutral: '#9B9B9B',
          'neutral-focus': '#9B9B9B',
          'neutral-content': '#000000',
          'base-100': '#EBEBEB',
          'base-200': '#EBEBEB',
          'base-300': '#303239',
          'base-content': '#111827',
          success: '#1AE06C',
          'success-content': '#111827',
          warning: '#F6A414',
          'warning-content': '#F9F9F9',
          error: '#F34968',
          'error-content': '#F9F9F9',
          info: '#3ABFF8',
          'info-content': '#002B3D',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
