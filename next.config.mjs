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
};

export default nextConfig;
