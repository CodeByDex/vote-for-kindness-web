module.exports = {
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3c5704',
          light: '#edffcb'
        }
      }
    }
  },
  plugins: []
};
