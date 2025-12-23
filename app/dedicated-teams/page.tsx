import { Metadata } from 'next';
import DedicatedTeamsContent from './dedicated-teams-content';

export const metadata: Metadata = {
	title: 'Dedicated Development Teams | Custom Engineering Pods | House of Giants',
	description:
		'Scale your product with a dedicated development team. Senior-led engineering pods that integrate directly into your workflow. Predictable monthly pricing, zero hiring overhead.',
	keywords: [
		'dedicated development team',
		'engineering pod',
		'custom web development team',
		'fractional cto services',
		'remote development team',
		'staff augmentation denver',
		'managed engineering team',
		'software development partner',
		'dedicated developers for startups',
		'agency engineering partner',
	],
	openGraph: {
		title: 'Dedicated Development Teams | House of Giants',
		description:
			'A fully managed engineering team that treats your product like their own. Senior-led, predictable pricing, and high-velocity output.',
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
	description:
		'A fully managed, senior-led development team that integrates directly into your product roadmap.',
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
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(dedicatedTeamsJsonLd) }}
			/>
			<DedicatedTeamsContent />
		</>
	);
}
