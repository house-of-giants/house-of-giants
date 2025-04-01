import localFont from 'next/font/local';

// Load Nikolai fonts using Next.js's font optimization
export const nikolai = localFont({
	src: [
		{
			path: '../public/fonts/Nikolai/regular/Nikolai-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Nikolai/italic/Nikolai-Italic.woff2',
			weight: '400',
			style: 'italic',
		},
	],
	display: 'swap',
	variable: '--font-nikolai', // CSS variable for use in stylesheets
});
