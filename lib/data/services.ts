export interface Service {
	id: string;
	title: string;
	shortDescription: string;
	description: string;
	deliverables: string[];
	goodFor: string[];
	icon: string;
}

export const services: Service[] = [
	{
		id: 'development',
		title: 'Web Development',
		shortDescription: 'Custom code that scales with your ambitions',
		description:
			'We build performant, maintainable web applications using modern frameworks and best practices. No templates, no page builders—just clean, documented code that your team can actually work with.',
		deliverables: [
			'Custom web applications',
			'API development & integration',
			'Performance optimization',
			'Technical architecture',
			'Code documentation',
		],
		goodFor: [
			'Startups outgrowing templates',
			'Complex business logic',
			'High-traffic applications',
			'Long-term scalability',
		],
		icon: 'code',
	},
	{
		id: 'design',
		title: 'Web Design',
		shortDescription: 'Interfaces that convert and delight',
		description:
			'Design that serves a purpose. We create visual systems that reinforce your brand, guide users to action, and scale across your entire digital presence.',
		deliverables: [
			'UI/Visual design',
			'Design systems',
			'Responsive layouts',
			'Motion & interaction design',
			'Brand-aligned aesthetics',
		],
		goodFor: ['Brand differentiation', 'Conversion optimization', 'Design system needs', 'Product redesigns'],
		icon: 'palette',
	},
	{
		id: 'ux',
		title: 'UX Architecture',
		shortDescription: 'Research-driven experiences that just work',
		description:
			'Great UX is invisible. We research, test, and iterate until the experience feels effortless. From information architecture to micro-interactions, every decision is backed by user insight.',
		deliverables: [
			'User research & testing',
			'Information architecture',
			'Wireframes & prototypes',
			'Usability optimization',
			'Conversion analysis',
		],
		goodFor: ['Complex user journeys', 'SaaS products', 'E-commerce optimization', 'Product launches'],
		icon: 'users',
	},
	{
		id: 'strategy',
		title: 'Digital Strategy',
		shortDescription: 'Clarity before code',
		description:
			"Before we build anything, we make sure we're solving the right problem. Strategy sessions, audits, and roadmapping that align your digital presence with business objectives.",
		deliverables: [
			'Digital audits',
			'Competitive analysis',
			'Technical roadmapping',
			'Platform selection',
			'Growth strategy',
		],
		goodFor: ['Pre-development planning', 'Platform migrations', 'Technical debt assessment', 'Digital transformation'],
		icon: 'compass',
	},
];

export function getServiceById(id: string): Service | undefined {
	return services.find((service) => service.id === id);
}
