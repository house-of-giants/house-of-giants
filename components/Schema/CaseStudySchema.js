export default function CaseStudySchema({ caseStudy }) {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'CaseStudy',
		name: caseStudy.title,
		description: caseStudy.description || caseStudy.excerpt,
		image: caseStudy.coverImage || caseStudy.socialImage,
		datePublished: caseStudy.date,
		dateModified: caseStudy.lastmod || caseStudy.date,
		author: {
			'@type': 'Organization',
			name: 'House of Giants',
			url: 'https://houseofgiants.com',
		},
		about: {
			'@type': 'Thing',
			name: caseStudy.client || 'Client',
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://houseofgiants.com/work/${caseStudy.slug}`,
		},
		potentialAction: {
			'@type': 'ViewAction',
			target: `https://houseofgiants.com/work/${caseStudy.slug}`,
		},
	};

	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
