module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkLow: '#11151c',
        next: '#212d40', // Assuming you're keeping the previous customization
        back:'#0a1128',
      },
      fontFamily: {
        'poppin': ['Poppins', 'sans-serif'], // Add 'poppin' font family
        'great-vibes': ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
}
