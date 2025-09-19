export const metadata = {
	title: 'Our Work – Portfolio & Case Studies | House of Giants',
	description:
		'Explore our portfolio of innovative web design and development projects. From WordPress development to luxury website design, see how we push creative boundaries and deliver real business results across multiple industries.',
	keywords: [
		'web app development',
		'wordpress development',
		'artist website design',
		'luxury website design',
		'brand website redesign',
		'web design portfolio',
		'web development case studies',
		'AI integration projects',
		'saas development',
		'cybersecurity platform',
		'entertainment websites',
		'platform architecture',
	],
	alternates: {
		canonical: '/work',
	},
	openGraph: {
		title: 'Our Work – Portfolio & Case Studies | House of Giants',
		description:
			'Explore our portfolio of innovative web design and development projects. From WordPress development to luxury website design, see how we push creative boundaries and deliver real business results across multiple industries.',
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
		siteName: 'House of Giants',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Our Work – Portfolio & Case Studies | House of Giants',
		description:
			'Explore our portfolio of innovative web design and development projects. From WordPress development to luxury website design, see how we push creative boundaries and deliver real business results across multiple industries.',
		images: ['https://houseofgiants.com/api/og?title=Our%20Work%20%E2%80%93%20Portfolio%20%26%20Case%20Studies'],
		creator: '@houseofgiants',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code',
	},
};

export default function WorkLayout({ children }) {
	return children;
}
