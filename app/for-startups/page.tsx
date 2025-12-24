import { Metadata } from 'next';
import StartupsContent from './startups-content';

export const metadata: Metadata = {
	title: 'Startup Web Development | Custom Sites for Founders | House of Giants',
	description:
		"Custom web development for startups who've outgrown templates. From MVP to Series B—websites that help you raise, convert, and scale. Denver-based, remote-friendly.",
	keywords: [
		'startup web development',
		'mvp development',
		'startup website agency',
		'custom web app for startups',
		'denver startup development',
		'startup website design',
		'founder web development',
		'series a website',
	],
	openGraph: {
		title: 'Startup Web Development | House of Giants',
		description:
			"Custom web development for startups who've outgrown templates. From MVP to Series B—websites that help you raise, convert, and scale.",
		url: 'https://houseofgiants.com/for-startups',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Startup Web Development | House of Giants',
		description:
			"Custom web development for startups who've outgrown templates. From MVP to Series B—websites that help you raise, convert, and scale.",
	},
};

const startupsJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	serviceType: 'Startup Web Development',
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
		audienceType: 'Startups and Scale-ups',
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Startup Development Services',
		itemListElement: [
			{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MVP Development' } },
			{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Startup Website Design' } },
			{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web Application' } },
			{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Platform Development' } },
		],
	},
};

export default function ForStartupsPage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(startupsJsonLd) }} />
			<StartupsContent />
		</>
	);
}
