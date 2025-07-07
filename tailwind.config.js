module.exports = {
  media: false,
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backdropBlur: {
      sm: 10,
    },
    extend: {
      backdropBlur: {
        sm: 10,
      },
    },
    darkMode: 'class', // Enable dark mode based on class
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
