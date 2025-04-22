/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	experimental: {
		mdxRs: false,
		serverComponentsExternalPackages: ['shiki'],
	},
	reactStrictMode: true,

	compiler: {
		styledComponents: {
			ssr: true,
			namespace: 'hog',
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.midjourney.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
			},
		],
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on',
					},
					{
						key: 'Cache-Control',
						value: 'public, max-age=86400, must-revalidate',
					},
					{
						key: 'Vary',
						value: 'Accept-Encoding',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Content-Security-Policy',
						value:
							`default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://www.googletagmanager.com https://tagmanager.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: https://cdn.midjourney.com https://images.unsplash.com; font-src 'self' data:; connect-src 'self' https://plausible.io https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https:;`
								.replace(/\s+/g, ' ')
								.trim(),
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
