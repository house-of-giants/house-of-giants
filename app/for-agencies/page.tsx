import { Metadata } from 'next';
import AgenciesContent from './agencies-content';

export const metadata: Metadata = {
	title: 'Development Partner for Agencies | Engineering Pods | House of Giants',
	description:
		'Embedded development pods for agencies. A fully managed engineering team that extends your capacity. Senior-led architecture, predictable monthly pricing. White-label available.',
	keywords: [
		'agency development partner',
		'development partner for agencies',
		'outsource development for agencies',
		'development pod',
		'managed development team',
		'embedded development team',
		'agency staff augmentation',
		'white label development',
		'white label web development',
		'agency engineering partner',
	],
	openGraph: {
		title: 'Development Partner for Agencies | House of Giants',
		description:
			'A fully managed engineering team that extends your agency. Senior-led architecture, predictable pricing. White-label available.',
		url: 'https://houseofgiants.com/for-agencies',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Development Partner for Agencies | House of Giants',
		description:
			'A fully managed engineering team that extends your agency. Senior-led architecture, predictable pricing. White-label available.',
	},
	alternates: {
		canonical: 'https://houseofgiants.com/for-agencies',
	},
};

const agenciesJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	serviceType: 'Agency Development Partnership',
	name: 'Development Pod for Agencies',
	description: 'A fully managed, senior-led development team that extends your agency capacity. White-label available.',
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
	audience: {
		'@type': 'Audience',
		audienceType: 'Digital Agencies and Creative Studios',
	},
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

export default function ForAgenciesPage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesJsonLd) }} />
			<AgenciesContent />
		</>
	);
}
