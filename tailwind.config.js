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
			colors: {
				'cyber-green': '#c1ff1d',
				'wolf-gray': '#1a1a1a',
				'moon-rock': '#ececec',
				'cyber-blue': '#00f0ff',
				'cyber-purple': '#9b4dff',
				'cyber-red': '#ff0000',
				'cyber-pink': '#ff2a6d',
				'neon-sky': '#00ffe0',
				'primary-dark': '#1a1f24',
			},
			boxShadow: {
				glow: '0 0 15px rgba(0, 255, 224, 0.3), 0 0 30px rgba(0, 255, 224, 0.1)',
			},
		},
	},
	plugins: [],
};
