import { Metadata } from 'next';
import BlogContent from './blog-content';

export const metadata: Metadata = {
	title: 'Blog | House of Giants',
	description:
		'Insights on web development, design, and building digital products. Practical advice for startups and founders from the House of Giants team.',
	keywords: [
		'web development blog',
		'startup advice',
		'Next.js tutorials',
		'React development',
		'design insights',
		'tech leadership',
	],
	openGraph: {
		title: 'Blog | House of Giants',
		description: 'Practical insights on web development, design, and building products that scale.',
		url: 'https://houseofgiants.com/blog',
		type: 'website',
	},
};

const blogJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Blog',
	name: 'House of Giants Blog',
	description: 'Insights on web development, design, and building digital products.',
	publisher: {
		'@type': 'Organization',
		name: 'House of Giants',
		url: 'https://houseofgiants.com',
	},
};

export default function BlogPage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
			<BlogContent />
		</>
	);
}
