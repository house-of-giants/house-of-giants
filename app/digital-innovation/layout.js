export const metadata = {
	title: 'Digital Solutions That Solve Real Problems (And Also Look Cool)',
	description:
		"Denver's forward-thinking digital innovation agency solving complex business problems with cutting-edge technology and strategic thinking.",
	keywords:
		'Our discovery-led strategy uncovers smarter ways to use tech — whether you need better workflows, smarter AI, or a tighter funnel.',
	alternates: {
		canonical: '/digital-innovation',
	},
	openGraph: {
		title: 'Digital Solutions That Solve Real Problems (And Also Look Cool)',
		description:
			"Denver's forward-thinking digital innovation agency solving complex business problems with cutting-edge technology and strategic thinking.",
		url: 'https://houseofgiants.com/digital-innovation',
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=Digital%20Solutions%20That%20Solve%20Real%20Problems',
				width: 1200,
				height: 630,
				alt: 'Digital Solutions That Solve Real Problems | House of Giants',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Digital Solutions That Solve Real Problems (And Also Look Cool)',
		description:
			"Denver's forward-thinking digital innovation agency solving complex business problems with cutting-edge technology and strategic thinking.",
		images: ['https://houseofgiants.com/api/og?title=Digital%20Solutions%20That%20Solve%20Real%20Problems'],
	},
};

export default function DigitalInnovationLayout({ children }) {
	return <>{children}</>;
}
