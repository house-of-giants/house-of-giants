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
				'cyber-green': '#d4ff35',
				'wolf-gray': '#6d7985',
				'moon-rock': '#ececec',
				'cyber-blue': '#00ffe0',
				'cyber-purple': '#8e3dfd',
				'cyber-red': '#e61e5e',
				'cyber-pink': '#e61e5e',
				'neon-sky': '#00ffe0',
				'primary-dark': '#1a1f24',
				'deep-plum': '#100c1c',
				'warm-bone': '#dad2c6',
				'ui-border': '#94a3b8',
				'button-primary': '#d4ff35',
				'button-hover': '#8e3dfd',
				'button-text': '#1a1f24',
			},
			boxShadow: {
				glow: '0 0 15px rgba(0, 255, 224, 0.3), 0 0 30px rgba(0, 255, 224, 0.1)',
			},
		},
	},
	plugins: [],
};
