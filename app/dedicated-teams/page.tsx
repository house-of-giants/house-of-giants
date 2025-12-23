import { Metadata } from 'next';
import DedicatedTeamsContent from './dedicated-teams-content';

export const metadata: Metadata = {
	title: 'Dedicated Engineering Teams Boulder & Denver | House of Giants',
	description:
		'Scale your startup with a dedicated development team. Senior-led engineering pods in Colorado that integrate directly into your product roadmap.',
	keywords: [
		'dedicated development team denver',
		'engineering pods colorado',
		'custom web development team boulder',
		'fractional cto services denver',
		'remote development team rocky mountains',
		'staff augmentation colorado',
		'managed engineering team denver',
		'software development partner boulder',
		'dedicated developers for startups',
		'agency engineering partner colorado',
	],
	openGraph: {
		title: 'Dedicated Engineering Teams | House of Giants',
		description:
			'A fully managed engineering team that treats your product like their own. Senior-led, predictable pricing, and Colorado-based expertise.',
		url: 'https://houseofgiants.com/dedicated-teams',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Dedicated Development Teams | House of Giants',
		description: 'A fully managed engineering team that treats your product like their own.',
	},
	alternates: {
		canonical: 'https://houseofgiants.com/dedicated-teams',
	},
};

const dedicatedTeamsJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	serviceType: 'Dedicated Development Team',
	name: 'Engineering Pods',
	description: 'A fully managed, senior-led development team that integrates directly into your product roadmap.',
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
		name: 'Development Pod Tiers',
		itemListElement: [
			{
				'@type': 'Offer',
				name: 'Starter Pod',
				price: '14000',
				priceCurrency: 'USD',
				description: 'Pod Lead (shared), 1 Developer, QA via Pod Lead',
			},
			{
				'@type': 'Offer',
				name: 'Standard Pod',
				price: '24000',
				priceCurrency: 'USD',
				description: 'Dedicated Pod Lead, 2 Developers, QA (shared or fractional)',
			},
			{
				'@type': 'Offer',
				name: 'Full Build Pod',
				price: '38000',
				priceCurrency: 'USD',
				description: 'Full-time Pod Lead (TD/Architect), 3 Developers, Dedicated QA',
			},
		],
	},
};

export default function DedicatedTeamsPage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dedicatedTeamsJsonLd) }} />
			<DedicatedTeamsContent />
		</>
	);
}
