import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About House of Giants | Denver Web Development Studio',
	description:
		'Meet the punk rock web development studio. Founded in 2017 by Colorado natives, House of Giants is a small, founder-led team building custom web applications for those who give a damn.',
	keywords: [
		'about house of giants',
		'denver web development team',
		'custom web development partner',
		'colorado web agency',
		'founder-led development studio',
		'custom web development denver',
		'dedicated development team',
		'punk rock agency',
	],
	openGraph: {
		title: 'About House of Giants | Small Team. Outsized Results.',
		description:
			'Founded in 2017. Denver-based. A founder-led studio building web applications for those who give a damn. 150+ projects shipped.',
		url: 'https://houseofgiants.com/about',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'House of Giants - Denver Web Development Studio',
			},
		],
	},
	twitter: {
		title: 'About House of Giants | Small Team. Outsized Results.',
		description: 'The punk rock web development studio. Founded 2017 in Denver. 150+ projects shipped.',
	},
	alternates: {
		canonical: 'https://houseofgiants.com/about',
	},
};

const breadcrumbJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: [
		{
			'@type': 'ListItem',
			position: 1,
			name: 'Home',
			item: 'https://houseofgiants.com',
		},
		{
			'@type': 'ListItem',
			position: 2,
			name: 'About',
			item: 'https://houseofgiants.com/about',
		},
	],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
			{children}
		</>
	);
}
