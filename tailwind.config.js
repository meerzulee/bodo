module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'body': ['Roboto', 'Montserrat'],
      'roboto': ['Roboto'],
      'montserrat': ['Montserrat']
    },
    screens: {
      'desktop': {
        // <1800px
        min: '112.5em',
      },
      'laptop': {
        // <1200px
        min: '75em',
      },
      'tab-land': {
        // 900-1200px
        max: '74.9em',
        min: '62.1em',
      },

      'tab-port': {
        //769-900px
        max: '62em',
        min: '48.1em'
      },
      'tab-mini': {
        //577-768px
        max: '48em',
        min: '36.1em',
      },
      'phone': {
        // 471-576px
        max: '36em',
        min: '29.4em'
      },
      'phone-mini': {
        // <470px
        max: '29.375em'
      },
      'laptop-down': {
        // <1200px
        max: '75em',
      },
      'tab-land-down': {
        // <900
        max: '62.1em',
      },
      'tab-land-up': {
        // >900
        min: '62.1em',
      },



    },
    extend: {
      colors: {
        'royal_blue': '#3665db',
        'solitude': '#f2f4f7',
        'd_tangerine': '#FFB420',
        'dark': '#4C535B',
        'darker': '#3F454B',
        "smoke-900": "rgba(0, 0, 0, 0.9)",
        "smoke-800": "rgba(0, 0, 0, 0.75)",
        "smoke-600": "rgba(0, 0, 0, 0.6)",
        smoke: "rgba(0, 0, 0, 0.5)",
        "smoke-400": "rgba(0, 0, 0, 0.4)",
        "smoke-200": "rgba(0, 0, 0, 0.25)",
        "smoke-100": "rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        '7sm': "4.5rem",
        '6sm': '3.3125rem'

      },
      spacing: {
        '100': '6.25rem',
        '150': '9.375rem',
        '220': '13.75rem',
        '300': '18.75rem',
        '380': '23.75rem',
        '400': '25rem',

        '445': '27.8125rem',
      },
      height: {
        '505': '505px',
        '90vh': '90vh'
      },
      inset: {
        '-1/2': '-50%',
      },
      maxHeight: {
        '432': '27rem',
        '500': '31.25rem',
        '670': '41.875rem',
        '720': '45rem'


      },
      zIndex: {
        "-10": '-10'
      }
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',

          '@screen laptop': {
            maxWidth: '1140px'
          },

          '@screen tab-land': {
            maxWidth: '970px'
          },
          '@screen tab-port': {
            maxWidth: '750px'
          },
          '@screen tab-mini': {
            maxWidth: '540px'
          },
          '@screen phone': {
            maxWidth: '100%'
          },

        }
      });
    }
  ],
}
