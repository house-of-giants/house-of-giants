/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./node_modules/pliny/**/*.js',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./layouts/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				serif: 'var(--f-serif)',
				display: 'var(--f-display)',
			},
		},
	},
	plugins: [],
};
