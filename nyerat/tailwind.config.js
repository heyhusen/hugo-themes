const plugin = require('tailwindcss/plugin');
const pseudoElements = require('tailwindcss-pseudo-elements');
const typography = require('@tailwindcss/typography');
const lineClamp = require('@tailwindcss/line-clamp');
const form = require('@tailwindcss/forms');
const interactionVariants = require('tailwindcss-interaction-variants');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      'assets/**/*.js',
      'layouts/**/*.{html,svg}',
      'content/**/*.{html,md}',
      'exampleSite/layouts/**/*.{html,svg}',
      'exampleSite/content/**/*.{html,md}',
      `${__dirname}/../../layouts/**/*.{html,svg}`,
      `${__dirname}/../../content/**/*.{html,md}`,
    ],
  },
  theme: {
    extend: {
      backgroundPosition: {
        '0-9/10': '0 90%',
      },
      backgroundSize: (theme) => ({
        '0-2': `0 ${theme('spacing.2')}`,
        'full-2': `100% ${theme('spacing.2')}`,
      }),
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Nanum Myeongjo', 'serif'],
        mono: ['Fira Code', 'monospace'],
        cursive: ['Satisfy', 'cursive'],
      },
      fontSize: {
        '16px': '16px',
      },
      spacing: {
        '150pct': '150%',
      },
      transformOrigin: {
        'full-1/2': '100% 50%',
        '1/2-full': '50% 100%',
        'top-center': 'top center',
      },
      transitionProperty: {
        width: 'width',
        'background-size': 'background-size',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['after'],
      backgroundImage: ['before'],
      backgroundSize: ['hover'],
      borderWidth: ['hover'],
      display: ['group-focus', 'group-focus-within', 'group-hover'],
      height: ['after', 'before', 'group-hover'],
      inset: ['after', 'before'],
      margin: ['after'],
      opacity: ['group-focus-within', 'group-hover'],
      pointerEvents: ['before'],
      position: ['after', 'before'],
      rotate: ['group-focus-within', 'group-hover'],
      scale: ['group-hover'],
      transform: [
        'before',
        'group-focus-within',
        'group-hover',
        'hover',
        'hover::before',
      ],
      transformOrigin: ['before'],
      transitionDuration: ['after', 'before'],
      transitionProperty: ['before', 'group-hover'],
      translate: ['before', 'group-focus-within', 'group-hover', 'hover'],
      visibility: ['group-focus-within', 'group-hover'],
      width: ['after', 'before', 'hover::after'],
      zIndex: ['after', 'before'],
    },
  },
  plugins: [
    plugin(({ addUtilities, addComponents }) => {
      // Pseudo element's content
      const pseudoElementContent = {
        '.content-empty': {
          content: '""',
        },
        '.content-data-text': {
          content: 'attr(data-text)',
        },
      };
      addUtilities(pseudoElementContent, {
        variants: ['after', 'before'],
      });

      addComponents(
        {
          '.title-link': {
            '@apply inline bg-gradient-to-b from-red-200 to-red-200 bg-no-repeat bg-0-9/10 bg-0-2 hover:bg-full-2 transition-background-size duration-200 no-underline hover:no-underline':
              {},
            '&_dark': {
              '@apply from-red-700 to-red-700 hover:text-white': {},
            },
            '*': {
              '@apply inline': {},
            },
          },
        },
        {
          variants: ['responsive'],
        },
      );
    }),
    pseudoElements(),
    typography,
    lineClamp,
    form,
    interactionVariants,
    aspectRatio,
  ],
};
