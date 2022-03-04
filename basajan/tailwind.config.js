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
		screens: {},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
