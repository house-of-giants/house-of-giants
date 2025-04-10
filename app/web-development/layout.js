export const metadata = {
	title: 'Custom Web Development That Scales with Demand',
	description:
		'From growing tech startups to national brands — we build fast, flexible web platforms that evolve with your business.',
	keywords:
		'Denver web development, Denver web developer, WordPress development Denver, Next.js development, full-stack development Denver',
	alternates: {
		canonical: '/web-development',
	},
	openGraph: {
		title: 'Custom Web Development That Scales with Demand',
		description:
			'From growing tech startups to national brands — we build fast, flexible web platforms that evolve with your business.',
		url: 'https://houseofgiants.com/web-development',
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=Custom%20Web%20Development%20That%20Scales%20with%20Demand',
				width: 1200,
				height: 630,
				alt: 'Custom Web Development That Scales with Demand | House of Giants',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Custom Web Development That Scales with Demand',
		description:
			'From growing tech startups to national brands — we build fast, flexible web platforms that evolve with your business.',
		images: ['https://houseofgiants.com/api/og?title=Custom%20Web%20Development%20That%20Scales%20with%20Demand'],
	},
};

export default function WebDevelopmentLayout({ children }) {
	return <>{children}</>;
}
