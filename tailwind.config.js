module.exports = {
  purge: [],
  theme: {
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
        '500': '31.25rem',
        '670': '41.875rem'
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
  plugins: [],
}
