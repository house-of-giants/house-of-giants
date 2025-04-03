export default function BlogPostSchema({ post }) {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description || post.excerpt,
		image: post.coverImage || post.socialImage,
		datePublished: post.date,
		dateModified: post.lastmod || post.date,
		author: {
			'@type': 'Person',
			name: post.author || 'House of Giants',
			url: 'https://houseofgiants.com',
		},
		publisher: {
			'@type': 'Organization',
			name: 'House of Giants',
			logo: {
				'@type': 'ImageObject',
				url: 'https://houseofgiants.com/favicon.svg',
			},
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://houseofgiants.com/blog/${post.slug}`,
		},
	};

	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
