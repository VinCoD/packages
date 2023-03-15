module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'adine_lg': '7rem'
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest1: '.2em',
      },
      borderWidth: {
        r1: '22px',
      },
      borderColor: {
        bs3: "#D8DBCD"
      },
      colors: {
        para: '#624332',
        vol: "#282b2b",
        'harrows-gate': '#7d8f91',
        'light-harrows-gate': '#a4b5b7',
        grayLightGreen:  'rgba(217,220,205,0.75)'
      },
      backgroundColor: {
        sect: "#D9DCCD"
      },
    },
  },
  plugins: [],
};