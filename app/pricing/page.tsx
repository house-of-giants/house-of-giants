import { Metadata } from 'next';
import PricingContent from './pricing-content';
import { pricingTiers, pricingFaqs } from '@/lib/data/pricing';

export const metadata: Metadata = {
	title: 'Pricing | Transparent Project-Based Pricing | House of Giants',
	description:
		'No black boxes. No hourly surprises. Project-based pricing starting at $15K. Know your investment before we write a line of code.',
	keywords: [
		'web development pricing',
		'website cost',
		'custom web development cost',
		'project-based pricing',
		'denver web agency pricing',
		'startup website pricing',
		'transparent pricing',
	],
	openGraph: {
		title: 'Transparent Pricing | House of Giants',
		description:
			'No black boxes. No hourly surprises. Project-based pricing starting at $15K. Know your investment before we write a line of code.',
		url: 'https://houseofgiants.com/pricing',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Transparent Pricing | House of Giants',
		description:
			'No black boxes. No hourly surprises. Project-based pricing starting at $15K. Know your investment before we write a line of code.',
	},
};

const pricingJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	serviceType: 'Web Development',
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
		itemListElement: pricingTiers.map((tier) => ({
			'@type': 'Offer',
			name: tier.name,
			description: tier.bestFor,
			priceSpecification: {
				'@type': 'PriceSpecification',
				price: tier.price.replace('$', '').replace('K+', '000'),
				priceCurrency: 'USD',
				minPrice: tier.price.replace('$', '').replace('K+', '000'),
			},
		})),
	},
};

const faqJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: pricingFaqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: {
			'@type': 'Answer',
			text: faq.answer,
		},
	})),
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
			name: 'Pricing',
			item: 'https://houseofgiants.com/pricing',
		},
	],
};

export default function PricingPage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
			<PricingContent />
		</>
	);
}
