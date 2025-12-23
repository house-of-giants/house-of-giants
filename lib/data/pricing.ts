export interface ProjectType {
	id: 'marketing' | 'product' | 'application';
	title: string;
	description: string;
	icon: string;
	recommendedTier: string;
}

export interface PricingTier {
	id: string;
	name: string;
	price: string;
	timeline: string;
	scope: string;
	bestFor: string;
	popular: boolean;
	features: string[];
}

export interface PricingFaq {
	question: string;
	answer: string;
}

export const projectTypes: ProjectType[] = [
	{
		id: 'marketing',
		title: 'Marketing Site',
		description: '5-15 pages, CMS, conversion-focused',
		icon: 'Globe',
		recommendedTier: 'baseline',
	},
	{
		id: 'product',
		title: 'Product Site',
		description: 'Custom features, integrations, accounts',
		icon: 'Layers',
		recommendedTier: 'growth',
	},
	{
		id: 'application',
		title: 'Web Application',
		description: 'Complex logic, dashboards, APIs',
		icon: 'Code',
		recommendedTier: 'flagship',
	},
];

export const pricingTiers: PricingTier[] = [
	{
		id: 'baseline',
		name: 'Foundational',
		price: '$15K+',
		timeline: '4-6 weeks',
		scope: '3-4 layouts, light CMS',
		bestFor: 'Marketing sites, landing pages',
		popular: false,
		features: [
			'3-4 page layouts',
			'Light CMS integration',
			'Mobile responsive',
			'Basic SEO setup',
			'Contact form',
			'Analytics integration',
		],
	},
	{
		id: 'growth',
		name: 'Scalable',
		price: '$25K+',
		timeline: '6-8 weeks',
		scope: '6-8 layouts, modular components',
		bestFor: 'Growing companies, content-heavy',
		popular: true,
		features: [
			'6-8 page layouts',
			'Modular component system',
			'Advanced CMS setup',
			'Blog/content architecture',
			'Third-party integrations',
			'Performance optimization',
			'Technical SEO',
		],
	},
	{
		id: 'flagship',
		name: 'Enterprise',
		price: '$40K+',
		timeline: '10-14 weeks',
		scope: 'Auth, dashboards, APIs',
		bestFor: 'SaaS, platforms, enterprise',
		popular: false,
		features: [
			'Custom application logic',
			'User authentication',
			'Dashboard interfaces',
			'API development',
			'Database architecture',
			'Admin panels',
			'Advanced integrations',
			'Scalable infrastructure',
		],
	},
];

export const pricingFactors: string[] = [
	'Complexity of features',
	'Number of integrations',
	'Content migration needs',
	'Timeline (rush = premium)',
	'Ongoing support needs',
];

export const pricingFaqs: PricingFaq[] = [
	{
		question: 'Do you work hourly?',
		answer:
			'No, we price outcomes. You know the full investment before we write a line of code. No hourly surprises, no scope creep games.',
	},
	{
		question: 'What if scope changes?',
		answer:
			'We use flat monthly billing until completion. If requirements evolve reasonably, we adapt. Major pivots get a conversation, not a surprise invoice.',
	},
	{
		question: 'Do I own the code?',
		answer:
			'Yes, 100%. No lock-in, no licensing fees, no hostage situations. The code is yours to keep, modify, or hand off to another team.',
	},
	{
		question: 'What about ongoing work?',
		answer:
			'We offer dedicated development pods for ongoing partnerships. Predictable monthly pricing, consistent velocity. Perfect for teams that need steady development capacity.',
	},
];

export function getTierById(id: string): PricingTier | undefined {
	return pricingTiers.find((tier) => tier.id === id);
}

export function getProjectTypeById(id: string): ProjectType | undefined {
	return projectTypes.find((type) => type.id === id);
}
