import { Metadata } from 'next';
import PartnershipsContent from './partnerships-content';

export const metadata: Metadata = {
	title: 'Partnerships | White-Label & Strategic Alliances | House of Giants',
	description:
		'High-craft technical partnerships for agencies, consultants, and venture studios. Scale your delivery with a dedicated engineering partner who gives a damn.',
	keywords: [
		'white label web development',
		'agency partnership program',
		'technical partner for consultants',
		'venture studio engineering',
		'outsourced development for agencies',
		'software engineering partner',
		'denver tech partnerships',
	],
	openGraph: {
		title: 'Partnerships | House of Giants',
		description: 'Scale your technical capacity with a partner who cares about craft as much as you do.',
		url: 'https://houseofgiants.com/partnerships',
		type: 'website',
	},
};

const partnershipsJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	name: 'House of Giants Partnerships',
	description: 'Information about white-label, strategic, and venture partnerships with House of Giants.',
	publisher: {
		'@type': 'Organization',
		name: 'House of Giants',
		url: 'https://houseofgiants.com',
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
			name: 'Partnerships',
			item: 'https://houseofgiants.com/partnerships',
		},
	],
};

export default function PartnershipsPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipsJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>
			<PartnershipsContent />
		</>
	);
}

