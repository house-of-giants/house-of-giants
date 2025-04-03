/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=86400, must-revalidate',
					},
					{
						key: 'Vary',
						value: 'Accept-Encoding',
					},
				],
			},
		];
	},
	// ... existing config
};

module.exports = nextConfig;
