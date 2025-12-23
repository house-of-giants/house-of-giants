import { Metadata } from 'next';
import WhiteLabelContent from './white-label-content';

export const metadata: Metadata = {
	title: 'White-Label Engineering Pods for Agencies | House of Giants',
	description:
		'A scalable, full-service development team delivered as an invisible extension of your agency. Senior-led engineering without the hiring headache.',
	keywords: [
		'white label web development',
		'outsourced development for agencies',
		'white label engineering pod',
		'agency development partner',
		'invisible development team',
		'managed engineering for creative agencies',
	],
	openGraph: {
		title: 'White-Label Engineering Pods | House of Giants',
		description: 'The invisible engine for your agency’s technical delivery.',
		url: 'https://houseofgiants.com/partnerships/white-label',
		type: 'website',
	},
};

const whiteLabelJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	serviceType: 'White-Label Web Development',
	provider: {
		'@type': 'Organization',
		name: 'House of Giants',
		url: 'https://houseofgiants.com',
	},
	description: 'Fully managed, senior-led engineering pods delivered as a white-labeled extension of your agency.',
	areaServed: 'Worldwide',
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
		{
			'@type': 'ListItem',
			position: 3,
			name: 'White-Label',
			item: 'https://houseofgiants.com/partnerships/white-label',
		},
	],
};

export default function WhiteLabelPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(whiteLabelJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>
			<WhiteLabelContent />
		</>
	);
}

