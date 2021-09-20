module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fill: {
      current: 'currentColor',
    },
    container: {
      center: true
    },
    fontFamily: {
      'Poppins': ['Poppins','sans-serif']
    },
    extend: {
      margin: {
        '8px':'8px',
        '12px':'12px',
        '16px':'16px',
        '18px':'18px',
        '21px':'21px',
        '23px':'23px',
        '25px':'25px',
        '30px':'30px',
        '34px':'34px',
        '38px':'38px',
        '45px':'45px',
        '50px':'50px',
        '64px':'64px',
        '114px':'114px',
        '150px':'150px',
        '168px': '168px',
      },
      borderRadius: {
        "4px": "4px",
        '8px': '8px',
        '32px': '32px',
      },
      fontSize: {
        "h2": ['40px', {lineHeight: '60px'}],
        "mobile-h2": ['36px', {lineHeight: '60px'}],
        "h3": ['32px', {lineHeight: '48px'}],
        "h4": ['22px', {lineHeight: '33px'}],
        "h5": ['16px', {lineHeight: '24px'}],
        "text1": ['18px', {lineHeight: '28px'}],
        "text6": ['20px', {lineHeight: '30px'}],
        "text2": ['16px', {lineHeight: '26px'}],
        "text8": ['16px', {lineHeight: '30px'}],
        "text3": ['16px', {lineHeight: '40px'}],
        "text7": ['16px', {lineHeight: '35px'}],
        "text4": ['16px', {lineHeight: '22px'}],
        "text5": ['16px', {lineHeight: '19px'}],
        "currency": ['24px', {lineHeight: '30px'}],
        "client-text": ['16px', {lineHeight: '24px'}],
        "box-title": ['24px', {lineHeight: '40px'}],
        "news-times": ['16px', {lineHeight: '28px'}],
        "price-cta": ['18px', {lineHeight: '21.94px'}],
        "button-text": ['16px', {lineHeight: '24px'}],
      },
      colors:{
        "primary": "#02897A",
        "primary2": "#04524a",
        "button" : "#02897A",
        "default": "#22343D",
        "gray-line":"#BCD0E5",
        "secondary":"#173A56",
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [],
}
