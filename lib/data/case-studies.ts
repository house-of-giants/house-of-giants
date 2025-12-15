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
		title: 'CyberNest',
		hook: 'Enterprise security platform that scales with your threat landscape',
		client: {
			name: 'CyberNest Security',
			description: 'Leading cybersecurity SaaS platform protecting enterprise networks',
		},
		industry: 'Enterprise SaaS',
		timeline: '12 weeks',
		services: ['Web Development', 'UX Architecture', 'Design System'],
		challenge:
			'CyberNest needed to transform their legacy dashboard into a modern, real-time threat monitoring platform that could handle millions of events per second while remaining intuitive for security analysts.',
		approach:
			'We took a performance-first approach, architecting a real-time data pipeline that could process and visualize threats instantly. Our UX research with security teams shaped every interaction.',
		solution:
			'A complete platform rebuild using React with server-side rendering, WebSocket connections for real-time updates, and a component library designed for information-dense security dashboards.',
		results: [
			{
				metric: 'Response Time',
				value: '-68%',
				description: 'Faster threat detection to response',
			},
			{
				metric: 'User Efficiency',
				value: '+124%',
				description: 'Tasks completed per analyst session',
			},
			{
				metric: 'System Load',
				value: '10M+',
				description: 'Events processed per minute',
			},
		],
		testimonial: {
			quote:
				"House of Giants understood that in cybersecurity, milliseconds matter. They built us a platform that doesn't just look modern—it actually makes our analysts faster.",
			author: 'Marcus Chen',
			title: 'CTO, CyberNest Security',
		},
		techStack: ['Next.js', 'TypeScript', 'WebSocket', 'D3.js', 'PostgreSQL'],
		images: {
			hero: '/work/cybernest-hero.jpg',
			thumbnail: '/work/cybernest-thumb.jpg',
		},
		featured: true,
	},
	{
		slug: 'hyperlocology',
		title: 'Hyperlocology',
		hook: 'From scrappy startup to Series A with a platform built to scale',
		client: {
			name: 'Hyperlocology',
			description: 'Local marketing intelligence platform for multi-location brands',
		},
		industry: 'MarTech',
		timeline: '16 weeks',
		services: ['Web Development', 'Web Design', 'UX Architecture'],
		challenge:
			'Hyperlocology was running on a patchwork of tools and needed a unified platform before their Series A. They needed to prove their tech was enterprise-ready without the enterprise budget.',
		approach:
			'We built for where they were going, not just where they were. Every architectural decision was made with 10x growth in mind while shipping fast enough to hit fundraising milestones.',
		solution:
			'A modular platform architecture that could add new marketing channels without code changes, white-label capabilities for enterprise clients, and a dashboard that made complex data feel simple.',
		results: [
			{
				metric: 'Funding',
				value: '$8.5M',
				description: 'Series A raised post-launch',
			},
			{
				metric: 'Clients',
				value: '+340%',
				description: 'Growth in enterprise accounts',
			},
			{
				metric: 'Scale',
				value: '50K+',
				description: 'Locations managed on platform',
			},
		],
		testimonial: {
			quote:
				'Most agencies would have built what we asked for. House of Giants built what we actually needed—a platform that was investor-ready and scale-ready from day one.',
			author: 'Sarah Park',
			title: 'CEO, Hyperlocology',
		},
		techStack: ['React', 'Node.js', 'GraphQL', 'AWS', 'Redis'],
		images: {
			hero: '/work/hyperlocology-hero.jpg',
			thumbnail: '/work/hyperlocology-thumb.jpg',
		},
		featured: true,
	},
	{
		slug: 'shakey-graves',
		title: 'Shakey Graves',
		hook: "An artist's digital home as unconventional as his music",
		client: {
			name: 'Shakey Graves',
			description: 'Grammy-nominated artist known for genre-defying Americana',
		},
		industry: 'Entertainment',
		timeline: '8 weeks',
		services: ['Web Design', 'Web Development', 'Creative Direction'],
		challenge:
			'Alejandro Rose-Garcia needed a digital presence that could capture the raw, authentic energy of his live shows while handling tour dates, merch, and a rabidly loyal fanbase.',
		approach:
			"We immersed ourselves in Shakey's visual language and musical evolution, designing an experience that felt like discovering a hidden record store—intimate but exciting.",
		solution:
			'A fully custom WordPress build with seamless integration to Shopify for merch, Bandsintown for tours, and a content architecture that lets the team update everything without touching code.',
		results: [
			{
				metric: 'Engagement',
				value: '+89%',
				description: 'Time on site increase',
			},
			{
				metric: 'Merch Sales',
				value: '+156%',
				description: 'Direct-to-fan revenue growth',
			},
			{
				metric: 'Newsletter',
				value: '+42%',
				description: 'Email signup conversion rate',
			},
		],
		techStack: ['WordPress', 'Shopify', 'GSAP', 'Bandsintown API'],
		images: {
			hero: '/work/shakey-hero.jpg',
			thumbnail: '/work/shakey-thumb.jpg',
		},
		featured: true,
	},
	{
		slug: 'hayashi',
		title: 'Hayashi',
		hook: "Luxury brand presence for Denver's finest omakase",
		client: {
			name: 'Hayashi',
			description: "Intimate omakase experience in Denver's RiNo district",
		},
		industry: 'Hospitality',
		timeline: '6 weeks',
		services: ['Web Design', 'Web Development', 'Brand Strategy'],
		challenge:
			'Chef Hayashi needed a digital presence that matched the precision and artistry of his 12-seat omakase counter. The site had to feel as intentional as every piece of fish he serves.',
		approach:
			'Restraint was everything. We stripped away every unnecessary element, letting the photography and typography create the same sense of anticipation you feel walking into the restaurant.',
		solution:
			'A minimal, typography-driven site with micro-interactions that reward attention. Seamless Tock integration for reservations without breaking the aesthetic.',
		results: [
			{
				metric: 'Bookings',
				value: '100%',
				description: 'Fully booked 3 months out',
			},
			{
				metric: 'Avg Check',
				value: '+28%',
				description: 'Increase in omakase upgrades',
			},
			{
				metric: 'Coverage',
				value: '5 Star',
				description: 'Reviews from major publications',
			},
		],
		techStack: ['Next.js', 'Sanity CMS', 'Tock', 'Framer Motion'],
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
