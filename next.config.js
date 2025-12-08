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
							`default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://www.googletagmanager.com https://tagmanager.google.com https://tools.luckyorange.com https://cdn.luckyorange.com https://storage.googleapis.com https://use.fontawesome.com https://*.cloudfront.net; worker-src 'self' blob:; style-src 'self' 'unsafe-inline' https://use.fontawesome.com; img-src 'self' data: https: https://cdn.midjourney.com https://images.unsplash.com; font-src 'self' data: https:; connect-src 'self' https://plausible.io https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://*.luckyorange.com wss://*.luckyorange.com wss://in.visitors.live https:; frame-ancestors 'self' https://luckyorange.com https://app.luckyorange.com https://tools.luckyorange.com https://www.luckyorange.com https://hmproxy.luckyorange.com https://cdn.luckyorange.com;`
								.replace(/\s+/g, ' ')
								.trim(),
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
