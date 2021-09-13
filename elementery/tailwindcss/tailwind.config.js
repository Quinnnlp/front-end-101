const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    divideWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
    },
    colors: {
      "quinnio-blue": "#458FF6",
      "quinnio-gray": "#7D7987",
      "quinnio-white": "#FFFFFF",
      "quinnio-black": "#1F1534",
    },
    extend: {},
    fontFamily: {
      Mulish: ["Mulish", "sans-serif"], 
    },
    container: {
      center:true,
      padding: "1rem",
      screen: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [],
}
