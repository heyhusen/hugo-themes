const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		enabled: process.env.HUGO_ENVIRONMENT === 'production',
		content: [
			'assets/**/*.js',
			'layouts/**/*.html',
			'exampleSite/layouts/**/*.html',
			`${__dirname}/../../layouts/**/*.html`,
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.coolGray,
    },
		/*
		fontSize: {
			'xs': '0.75rem',
			'sm': '0.875rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '3.75rem',
			'7xl': '4.5rem',
			'8xl': '6rem',
			'9xl': '8rem',
		},
		*/
		screens: {},
		extend: {
			spacing: {
				18: '4.5rem',
			},
			// fontSize: {
			// 	'3xl': [
			// 		'1.875rem', {
			// 			lineHeight: '1.375',
			// 		},
			// 	],
			// 	'4xl': ['2.25rem'],
			// 	'5xl': '3rem',
			// 	'6xl': '3.75rem',
			// 	'7xl': '4.5rem',
			// 	'8xl': '6rem',
			// 	'9xl': '8rem',
			// },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
