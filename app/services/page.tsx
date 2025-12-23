import { Metadata } from 'next';
import ServicesContent from './services-content';

export const metadata: Metadata = {
	title: 'Custom Web Development & Design Services Colorado | House of Giants',
	description:
		'Full-service custom web development, design, and UX architecture for Colorado startups. High-craft, performance-first applications built in Denver.',
	keywords: [
		'custom web development services denver',
		'web application development colorado',
		'boulder web development studio',
		'denver software engineering',
		'custom web design denver',
		'ux architecture colorado',
		'digital strategy rocky mountains',
		'web development company denver',
	],
	openGraph: {
		title: 'Custom Web Development & Design Services | House of Giants',
		description:
			'Custom web development, design, and strategy for founders who care about craft. Denver-based, Rocky Mountain focus.',
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
			streetAddress: '3839 Jackson Street',
			addressLocality: 'Denver',
			addressRegion: 'CO',
			postalCode: '80205',
			addressCountry: 'US',
		},
	},
	areaServed: [
		{ '@type': 'State', name: 'Colorado' },
		{ '@type': 'City', name: 'Denver' },
		{ '@type': 'City', name: 'Boulder' },
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Web Development & Design Services',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Custom Web Development',
					description: 'Full-stack engineering for custom web applications and platforms.',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Web Design',
					description: 'Craft-focused, high-performance UI/UX design for digital products.',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'UX Architecture',
					description: 'Systematic approach to user experience and technical architecture.',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Digital Strategy',
					description: 'Strategic planning for product launches, scaling, and technical debt reduction.',
				},
			},
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
