const nextConfig = {
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

module.exports = nextConfig;
