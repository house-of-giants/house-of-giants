export const metadata = {
	title: 'Our Work – Portfolio & Case Studies | House of Giants',
	description:
		'Explore our portfolio of innovative web design and development projects. From artist management to luxury brands, see how we push creative boundaries and deliver real business results.',
	alternates: {
		canonical: '/work',
	},
	openGraph: {
		title: 'Our Work – Portfolio & Case Studies | House of Giants',
		description:
			'Explore our portfolio of innovative web design and development projects. From artist management to luxury brands, see how we push creative boundaries and deliver real business results.',
		url: 'https://houseofgiants.com/work',
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=Our%20Work%20%E2%80%93%20Portfolio%20%26%20Case%20Studies',
				width: 1200,
				height: 630,
				alt: 'Our Work – Portfolio & Case Studies | House of Giants',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Our Work – Portfolio & Case Studies | House of Giants',
		description:
			'Explore our portfolio of innovative web design and development projects. From artist management to luxury brands, see how we push creative boundaries and deliver real business results.',
		images: ['https://houseofgiants.com/api/og?title=Our%20Work%20%E2%80%93%20Portfolio%20%26%20Case%20Studies'],
	},
};

function WorkLayout({ children }) {
	return children;
}

export default WorkLayout;
