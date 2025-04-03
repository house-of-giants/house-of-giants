import siteMetadata from '@/data/siteMetadata';

export default function JsonLd() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: siteMetadata.title,
		url: siteMetadata.siteUrl,
		logo: `${siteMetadata.siteUrl}/favicon.svg`,
		sameAs: [
			siteMetadata.twitter ? `https://twitter.com/${siteMetadata.twitter}` : null,
			siteMetadata.github ? `https://github.com/${siteMetadata.github}` : null,
			siteMetadata.linkedin ? `https://linkedin.com/in/${siteMetadata.linkedin}` : null,
		].filter(Boolean),
		description: siteMetadata.description,
	};

	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
