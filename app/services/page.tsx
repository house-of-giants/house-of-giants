import { Metadata } from 'next';
import ServicesContent from './services-content';

export const metadata: Metadata = {
	title: 'Custom Web Development Services in Denver | House of Giants',
	description:
		'Web development, design, UX, and digital strategy services for startups and founders who care about craft. No templates, no shortcuts—just custom web applications built to scale.',
	keywords: [
		'custom web development services',
		'web application development',
		'denver web development',
		'startup web development',
		'custom web design',
		'ux architecture services',
		'digital strategy',
		'web development company denver',
	],
	openGraph: {
		title: 'Custom Web Development Services | House of Giants',
		description:
			'Web development, design, UX, and strategy for founders who care about craft. Denver-based, remote-friendly.',
		url: 'https://houseofgiants.com/services',
		type: 'website',
	},
};

const servicesJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	serviceType: 'Custom Web Development',
	provider: {
		'@type': 'Organization',
		name: 'House of Giants',
		url: 'https://houseofgiants.com',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Denver',
			addressRegion: 'CO',
			addressCountry: 'US',
		},
	},
	areaServed: 'Worldwide',
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Web Development Services',
		itemListElement: [
			{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web Development' } },
			{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design' } },
			{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UX Architecture' } },
			{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Strategy' } },
		],
	},
};

export default function ServicesPage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
			<ServicesContent />
		</>
	);
}
