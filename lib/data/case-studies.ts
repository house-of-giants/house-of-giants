export interface CaseStudy {
	slug: string;
	title: string;
	hook: string;
	client: {
		name: string;
		description: string;
		logo?: string;
	};
	industry: string;
	timeline: string;
	services: string[];
	challenge: string;
	approach: string;
	solution: string;
	results: { metric: string; value: string; description?: string }[];
	testimonial?: {
		quote: string;
		author: string;
		title: string;
		avatar?: string;
	};
	techStack: string[];
	images: {
		hero: string;
		thumbnail: string;
		gallery?: string[];
	};
	featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'cybernest',
		title: 'The CyberNest',
		hook: 'Cybersecurity intelligence platform with community-verified threat data',
		client: {
			name: 'The CyberNest',
			description: 'Cybersecurity intelligence platform helping security teams find trusted information',
		},
		industry: 'Cybersecurity Intelligence',
		timeline: '2024',
		services: ['Platform Development', 'SaaS Architecture', 'UX Design'],
		challenge:
			'Security professionals face too much information with too little trust. CyberNest needed a complete intelligence platform serving both community members and expert networks, with sophisticated user management, real-time collaboration, smart content filtering, and enterprise-grade security.',
		approach:
			'We focused on building trust through design, combining cutting-edge technology with thoughtful UX. The dual-audience challenge required careful planning for user management, data security, and scalable permissions.',
		solution:
			'A next-generation platform using modern web architecture, intelligent content systems, and real-time collaboration tools. Features include AI-powered document summaries, community + expert ratings, smart trending algorithms, and live document annotation with team workspace isolation.',
		results: [
			{
				metric: 'User Experience',
				value: 'Enterprise',
				description: 'Consumer-grade ease with enterprise security',
			},
			{
				metric: 'Collaboration',
				value: 'Real-time',
				description: 'Live annotation and team workspaces',
			},
			{
				metric: 'Content',
				value: 'AI-Powered',
				description: 'Smart filtering and document summaries',
			},
		],
		testimonial: {
			quote: "They are the best team I've ever worked with regarding application development thus far.",
			author: 'Ben Siegel',
			title: 'CEO, The CyberNest',
		},
		techStack: ['Next.js', 'TypeScript', 'Real-time Collaboration', 'AI/ML', 'PostgreSQL'],
		images: {
			hero: '/work/cybernest-hero.jpg',
			thumbnail: '/work/cybernest-thumb.jpg',
		},
		featured: true,
	},
	{
		slug: 'hyperlocology',
		title: 'Hyperlocology',
		hook: 'Enterprise corporate website showcasing AI-powered advertising platform',
		client: {
			name: 'Hyperlocology',
			description: 'AI-powered advertising platform for multi-location businesses',
		},
		industry: 'Multi-Location Advertising',
		timeline: '2025',
		services: ['Platform Development', 'WordPress Architecture', 'Custom CMS'],
		challenge:
			'Hyperlocology needed a professional corporate website that would establish enterprise credibility while showcasing their AI-powered advertising platform for multi-location businesses. The site needed to serve as both a lead generation platform and a demonstration of technical capabilities.',
		approach:
			'Working alongside design partner Yeti Island, we planned a sophisticated navigation system and content organization strategy. We analyzed business requirements and identified the need for custom post types for customer stories and job listings.',
		solution:
			'A custom WordPress theme with modern architecture, leveraging WordPress 6.0+ features including block themes and custom post types. The modular, maintainable codebase supports diverse content types including customer success stories, job listings, and company resources.',
		results: [
			{
				metric: 'Architecture',
				value: 'Modern',
				description: 'WordPress 6.0+ block theme',
			},
			{
				metric: 'Content',
				value: 'Custom',
				description: 'Post types for stories & jobs',
			},
			{
				metric: 'Performance',
				value: 'Enterprise',
				description: 'Grade standards for speed & UX',
			},
		],
		techStack: ['WordPress', 'Block Theme', 'Custom Post Types', 'PHP', 'JavaScript'],
		images: {
			hero: '/work/hyperlocology-hero.jpg',
			thumbnail: '/work/hyperlocology-thumb.jpg',
		},
		featured: true,
	},
	{
		slug: 'shakey-graves',
		title: 'Shakey Graves',
		hook: 'Interactive AI-powered album experience for Movie of the Week',
		client: {
			name: 'Shakey Graves',
			description: 'Grammy-nominated artist known for bold creative choices and genre-defying music',
		},
		industry: 'Entertainment',
		timeline: '2021',
		services: ['Web Design', 'Web Development', 'AI Integration'],
		challenge:
			'Shakey Graves took a cosmic leap with his album "Movie of the Week"—a film score for a fictional movie with multiple track versions. He needed a digital space where fans could piece together their own soundtrack with custom artwork, titles, and AI-powered movie synopses.',
		approach:
			'We designed a retro-inspired web experience built around a TV-wall aesthetic—reminiscent of vintage sets playing half-remembered shows—so fans could "channel surf" through different parts of Shakey\'s site.',
		solution:
			'An AI-driven "Movie of the Week" generator where visitors select a movie genre, unlock personalized artwork, an original title, and a short synopsis, then receive a curated soundtrack pulled from hundreds of tracks. Nostalgic vibes meet modern tech.',
		results: [
			{
				metric: 'New Users',
				value: '+91%',
				description: 'Increase within the first week',
			},
			{
				metric: 'Page Views',
				value: '+285%',
				description: 'Growth post-launch',
			},
			{
				metric: 'Combinations',
				value: '1B+',
				description: 'Unique album combinations created',
			},
		],
		techStack: ['Custom Web App', 'AI/ML', 'GSAP', 'Audio Integration'],
		images: {
			hero: '/work/shakey-hero.jpg',
			thumbnail: '/work/shakey-thumb.jpg',
		},
		featured: true,
	},
	{
		slug: 'hayashi',
		title: 'Hayashi Whisky',
		hook: 'Luxury Japanese whisky brand with immersive visual storytelling',
		client: {
			name: 'Hayashi Whisky',
			description: 'Premium Japanese whisky evolving the Okinawan awamori rice spirit tradition',
		},
		industry: 'Luxury Spirits',
		timeline: '2022',
		services: ['Web Design', 'Web Development', 'Brand Strategy'],
		challenge:
			'Hayashi needed more than a pretty label—they wanted a digital launch that exuded upscale cool while educating consumers about their luxury status. Three core pillars—Japanese Artistry, Aged to Perfection, and Okinawan Lifestyle—had to shine through every aspect of the site.',
		approach:
			'We leaned into immersive visual storytelling to introduce Hayashi as the star of its own narrative. From gold-foil accents and intricate forest motifs to subtle nods at Ryukyu Islands culture, we built a clean, elegant website.',
		solution:
			"A luxury brand website weaving mystery, modernity, and tradition into each scroll. By showcasing the bottle as a central figure, we reinforced brand identity at every turn—ensuring Hayashi's prestige resonated with whisky aficionados and novices alike.",
		results: [
			{
				metric: 'Brand',
				value: 'Premium',
				description: 'Luxury positioning established',
			},
			{
				metric: 'Storytelling',
				value: 'Immersive',
				description: 'Visual narrative experience',
			},
			{
				metric: 'Heritage',
				value: 'Okinawan',
				description: 'Cultural authenticity showcased',
			},
		],
		techStack: ['Next.js', 'GSAP', 'Framer Motion', 'Sanity CMS'],
		images: {
			hero: '/work/hayashi-hero.jpg',
			thumbnail: '/work/hayashi-thumb.jpg',
		},
	},
	{
		slug: 'backforty',
		title: 'BackForty',
		hook: 'Ranch-to-table brand evolution for the modern West',
		client: {
			name: 'BackForty',
			description: 'Sustainable ranching and direct-to-consumer beef brand',
		},
		industry: 'Food & Agriculture',
		timeline: '10 weeks',
		services: ['Brand Strategy', 'Web Design', 'Web Development', 'E-commerce'],
		challenge:
			'BackForty needed to connect their regenerative ranching story to consumers increasingly skeptical of industrial meat while competing with VC-backed DTC brands.',
		approach:
			'We led with authenticity. Real ranch photography, real family stories, and real transparency about their practices. No stock photos, no greenwashing.',
		solution:
			'A full rebrand and e-commerce platform that tells the BackForty story from pasture to plate. Subscription management, cut education, and recipe content all work together to increase lifetime value.',
		results: [
			{
				metric: 'Revenue',
				value: '+234%',
				description: 'Year-over-year DTC growth',
			},
			{
				metric: 'Retention',
				value: '78%',
				description: 'Subscription customer retention',
			},
			{
				metric: 'AOV',
				value: '+45%',
				description: 'Average order value increase',
			},
		],
		techStack: ['Shopify Plus', 'Recharge', 'Klaviyo', 'Next.js Storefront'],
		images: {
			hero: '/work/backforty-hero.jpg',
			thumbnail: '/work/backforty-thumb.jpg',
		},
	},
];

export function getFeaturedCaseStudies(): CaseStudy[] {
	return caseStudies.filter((study) => study.featured);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
	return caseStudies.find((study) => study.slug === slug);
}
