export default function WorkPortfolioSchema() {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'House of Giants Work Portfolio',
		description:
			'Portfolio of innovative web design and development projects showcasing our expertise across multiple industries.',
		url: 'https://houseofgiants.com/work',
		numberOfItems: 5,
		itemListElement: [
			{
				'@type': 'CreativeWork',
				position: 1,
				name: 'The CyberNest',
				description: 'A next-generation cybersecurity intelligence platform with AI integration.',
				url: 'https://houseofgiants.com/work/cybernest',
				creator: {
					'@type': 'Organization',
					name: 'House of Giants',
				},
				genre: ['Web App Development', 'AI Integration', 'SaaS Platform'],
				keywords: 'web app development, cybersecurity platform, AI integration, SaaS development',
				datePublished: '2024',
			},
			{
				'@type': 'CreativeWork',
				position: 2,
				name: 'Shakey Graves',
				description: 'An innovative interactive experience featuring AI-powered movie generation.',
				url: 'https://houseofgiants.com/work/shakey-graves',
				creator: {
					'@type': 'Organization',
					name: 'House of Giants',
				},
				genre: ['Artist Website Design', 'AI Integration', 'Interactive Experience'],
				keywords: 'artist website design, music website, AI movie generation, interactive experience',
				datePublished: '2021',
			},
			{
				'@type': 'CreativeWork',
				position: 3,
				name: 'Hyperlocology',
				description: 'A platform development project featuring WordPress architecture and scalable solutions.',
				url: 'https://houseofgiants.com/work/hyperlocology',
				creator: {
					'@type': 'Organization',
					name: 'House of Giants',
				},
				genre: ['WordPress Development', 'Platform Architecture', 'SaaS'],
				keywords: 'wordpress development, platform architecture, SaaS solutions',
				datePublished: '2024',
			},
			{
				'@type': 'CreativeWork',
				position: 4,
				name: 'Hayashi Whisky',
				description: 'A luxury web experience capturing the artistry of Okinawan island life in premium whisky.',
				url: 'https://houseofgiants.com/work/hayashi',
				creator: {
					'@type': 'Organization',
					name: 'House of Giants',
				},
				genre: ['Luxury Website Design', 'Visual Storytelling', 'Premium Experience'],
				keywords: 'luxury website design, whisky branding, visual storytelling',
				datePublished: '2022',
			},
			{
				'@type': 'CreativeWork',
				position: 5,
				name: 'BackForty Management',
				description: 'A digital experience breaking conventional molds for artist management and music supervision.',
				url: 'https://houseofgiants.com/work/backforty',
				creator: {
					'@type': 'Organization',
					name: 'House of Giants',
				},
				genre: ['Brand Website Redesign', 'Artist Management', 'Creative Agency'],
				keywords: 'brand website redesign, artist management, music supervision',
				datePublished: '2023',
			},
		],
		mainEntity: {
			'@type': 'Organization',
			name: 'House of Giants',
			description:
				'A web design and development studio that pushes creative boundaries while delivering real business results.',
			url: 'https://houseofgiants.com',
			logo: 'https://houseofgiants.com/logo.png',
			sameAs: ['https://twitter.com/houseofgiants', 'https://linkedin.com/company/houseofgiants'],
		},
	};

	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
