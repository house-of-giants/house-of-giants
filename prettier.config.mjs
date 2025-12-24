/** @type {import("prettier").Config} */
const config = {
	trailingComma: 'es5',
	bracketSpacing: true,
	arrowParens: 'always',
	singleQuote: true,
	printWidth: 120,
	useTabs: true,
	plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
