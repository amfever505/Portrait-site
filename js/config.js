tailwind.config = {
  theme: {
    screens: {
      xl: { max: '1199px' },

      lg: { max: '1023px' },

      md: { max: '768px' },

      sm: { max: '428px' },
    },
    maxWidth: {
      'box-sp': '320px',
      'box-tablet': '600px',
      'box-sm': '680px',
      'box-md': '1228px',
      'box-lg': '1256px',
    },
    fontSize: {
      sm: ['0.75rem', 1],
      base: ['1rem', 1],
      p: ['1rem', 2],
      'p-sp': ['0.75rem', 1.5],
      lg: ['1.875rem', 1],
      semil: ['4.5rem', 1],
      xl: ['6rem', 1],
      xxl: ['7.5rem', 1],
      '3l': ['10rem', 1],
    },
    fontFamily: {
      sans: ['小塚ゴシック Pro', 'ui-sans-serif', 'system-ui'],
      serif: ['Times', 'serif'],
      mono: ['小塚ゴシック Pro', 'ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      colors: {
        main: '#E7D0D0',
        txt: '#707070',
        wt: '#fff',
      },
      margin: {
        '5px': '5px',
        15: '3.75rem',
        30: '7.5rem',
        50: '12.5rem',
        68: '17rem',
        69: '17.25rem',
      },
      spacing: {
        '3/10': '30%',
        '9/25': '36%',
        '11/25': '44%',
        '14/25': '56%',
        '7/11': '63%',
        // '7/10': '70%',
        '18/25': '72%',
      },
    },
  },
};
