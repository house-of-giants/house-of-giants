import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/white-label-development',
				destination: '/for-agencies',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
