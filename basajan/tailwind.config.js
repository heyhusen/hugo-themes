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
		fontSize: {
			'xs': [
				'0.75rem', {
					lineHeight: 1.5,
				},
			],
			'sm': [
				'0.875rem', {
					lineHeight: 1.5,
				},
			],
			'base': [
				'1rem', {
					lineHeight: 1.5,
				},
			],
			'lg': [
				'1.125rem', {
					lineHeight: 1.5,
				},
			],
			'xl': [
				'1.25rem', {
					lineHeight: 1.375,
				}
			],
			'2xl': [
				'1.5rem', {
					lineHeight: 1.375,
				},
			],
			'3xl': [
				'1.875rem', {
					lineHeight: 1.375,
				},
			],
			'4xl': [
				'2.25rem', {
					lineHeight: 1.375,
				},
			],
			'5xl': [
				'3rem', {
					lineHeight: 1.25,
				},
			],
			'6xl': [
				'3.75rem', {
					lineHeight: 1.25,
				},
			],
			'7xl': [
				'4.5rem', {
					lineHeight: 1.25,
				},
			],
			'8xl': [
				'6rem', {
					lineHeight: 1.25,
				},
			],
			'9xl': [
				'8rem', {
					lineHeight: 1.25,
				},
			],
		},
		screens: {},
		extend: {
			spacing: {
				18: '4.5rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
