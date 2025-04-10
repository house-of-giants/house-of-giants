export const metadata = {
	title: 'Shakey Graves – Interactive Web Experience with AI & Fan Tools',
	description:
		'See how House of Giants built an immersive experience for Shakey Graves "Movie of the Week"—with AI features, dynamic user paths, and creative interaction design.',
	alternates: {
		canonical: '/work/shakey-graves',
	},
	openGraph: {
		title: 'Shakey Graves – Interactive Web Experience with AI & Fan Tools',
		description:
			'See how House of Giants built an immersive experience for Shakey Graves "Movie of the Week"—with AI features, dynamic user paths, and creative interaction design.',
		url: 'https://houseofgiants.com/work/shakey-graves',
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=Shakey%20Graves%20%E2%80%93%20Interactive%20Web%20Experience',
				width: 1200,
				height: 630,
				alt: 'Shakey Graves – Interactive Web Experience with AI & Fan Tools | House of Giants',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Shakey Graves – Interactive Web Experience with AI & Fan Tools',
		description:
			'See how House of Giants built an immersive experience for Shakey Graves "Movie of the Week"—with AI features, dynamic user paths, and creative interaction design.',
		images: ['https://houseofgiants.com/api/og?title=Shakey%20Graves%20%E2%80%93%20Interactive%20Web%20Experience'],
	},
};

function ShakeyGravesLayout({ children }) {
	return children;
}

export default ShakeyGravesLayout;
