/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: '#8E24AA',
        amber: '#FFB300',
        offwhite: '#FAFAFA',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Merriweather', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            maxWidth: 'none',
            'h1, h2, h3, h4': {
              fontFamily: 'Playfair Display, serif',
              color: '#8E24AA',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};