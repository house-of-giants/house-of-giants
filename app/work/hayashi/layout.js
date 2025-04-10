export const metadata = {
	title: 'Hayashi Whisky – Luxury Web Design & Story-Driven UI',
	description:
		'Dive into our elegant digital launch for Hayashi Whisky. Crafted to balance premium aesthetics, cultural storytelling, and a smooth user journey.',
	alternates: {
		canonical: '/work/hayashi',
	},
	openGraph: {
		title: 'Hayashi Whisky – Luxury Web Design & Story-Driven UI',
		description:
			'Dive into our elegant digital launch for Hayashi Whisky. Crafted to balance premium aesthetics, cultural storytelling, and a smooth user journey.',
		url: 'https://houseofgiants.com/work/hayashi',
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=Hayashi%20Whisky%20%E2%80%93%20Luxury%20Web%20Design%20%26%20Story-Driven%20UI',
				width: 1200,
				height: 630,
				alt: 'Hayashi Whisky – Luxury Web Design & Story-Driven UI | House of Giants',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Hayashi Whisky – Luxury Web Design & Story-Driven UI',
		description:
			'Dive into our elegant digital launch for Hayashi Whisky. Crafted to balance premium aesthetics, cultural storytelling, and a smooth user journey.',
		images: [
			'https://houseofgiants.com/api/og?title=Hayashi%20Whisky%20%E2%80%93%20Luxury%20Web%20Design%20%26%20Story-Driven%20UI',
		],
	},
};

function HayashiLayout({ children }) {
	return children;
}

export default HayashiLayout;
