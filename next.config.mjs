const nextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	experimental: {
		mdxRs: false, // <- disabled
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
				source: '/(.*)',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=63072000; includeSubDomains; preload',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
					{
						key: 'Content-Security-Policy',
						value: `
							default-src 'self';
							script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io;
							style-src 'self' 'unsafe-inline';
							img-src 'self' data: https://cdn.midjourney.com https://images.unsplash.com;
							font-src 'self';
							connect-src 'self' https://plausible.io;
							frame-src 'self';
							base-uri 'self';
							form-action 'self';
						`
							.replace(/\s+/g, ' ')
							.trim(),
					},
				],
			},
		];
	},
};

export default nextConfig;
