import { Metadata } from 'next';
import WorkContent from './work-content';

export const metadata: Metadata = {
	title: 'Custom Web Development Portfolio | House of Giants',
	description:
		'Case studies and success stories from House of Giants. See how we build custom web applications that drive revenue and scale for startups and founders.',
	keywords: [
		'web development case studies',
		'software engineering portfolio',
		'custom web apps',
		'Next.js case studies',
		'React application examples',
		'startup success stories',
		'digital transformation results',
	],
	openGraph: {
		title: 'Our Work | House of Giants',
		description: 'Real projects. Real metrics. See how we help founders build custom web software that actually works.',
		url: 'https://houseofgiants.com/work',
		type: 'website',
	},
};

const workJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'CollectionPage',
	name: 'House of Giants Case Studies',
	description:
		'A collection of case studies showcasing custom web development and design work for startups and enterprise clients.',
	provider: {
		'@type': 'Organization',
		name: 'House of Giants',
		url: 'https://houseofgiants.com',
	},
};

export default function WorkPage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workJsonLd) }} />
			<WorkContent />
		</>
	);
}
