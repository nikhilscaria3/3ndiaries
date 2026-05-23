export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF5F0',
        ivory: '#FDFBF7',
        champagne: '#E5D3B3',
        gold: '#D4AF37',
        olive: '#556B2F',
        blush: '#F4E1E1',
        chocolate: '#3E2723',
        dark: '#1A1A1A',
        text: '#333333',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
