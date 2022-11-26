module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './plugins/docusaurus-theme-extends/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          0: 'var(--xcharts-grey-0)',
          1: 'var(--xcharts-grey-1)',
          2: 'var(--xcharts-grey-2)',
          3: 'var(--xcharts-grey-3)',
          4: 'var(--xcharts-grey-4)',
        },
        'dark-grey-0': 'var(--xcharts-dark-grey-0)',
        'dark-grey-1': 'var(--xcharts-dark-grey-1)',
        'dark-grey-2': 'var(--xcharts-dark-grey-2)',
        'dark-grey-3': 'var(--xcharts-dark-grey-3)',
        'dark-grey-4': 'var(--xcharts-dark-grey-4)',
        'light-grey-0': 'var(--xcharts-light-grey-0)',
        'light-grey-1': 'var(--xcharts-light-grey-1)',
        'light-grey-2': 'var(--xcharts-light-grey-2)',
        'light-grey-3': 'var(--xcharts-light-grey-3)',
        'light-grey-4': 'var(--xcharts-light-grey-4)',
        'brand-cyan': 'var(--xcharts-brand-cyan)',
        'brand-blue': 'var(--xcharts-brand-blue)',
        'brand-cyan-dark': 'var(--xcharts-brand-cyan-dark)',
        red: {
          main: 'var(--xcharts-red-main)',
        },
        yellow: {
          main: 'var(--xcharts-yellow-main)',
        },
        white: '#ffff',
      },
      screens: {
        desktop: '997px',
      },
      maxWidth: {
        'docmain': '1160px',
        'articlemain': '792px',
      },
      width: {
        'docsidebar': '362px',
        'dochiddensidebar': '0px',
        'docmain': '1160px',
      },
    },
  },
  plugins: [],
};
