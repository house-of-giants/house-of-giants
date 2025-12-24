import * as React from 'react';
import Link from 'next/link';

export interface PodTier {
	id: 'starter' | 'standard' | 'full';
	name: string;
	price: string;
	priceNumeric: number;
	teamComposition: string[];
	bestFor: string;
	popular: boolean;
}

export interface PodBenefit {
	title: string;
	description: string;
	icon: string;
}

export interface PodResponsibility {
	category: string;
	items: string[];
}

export interface PodFaq {
	question: string;
	answer: string | React.ReactNode;
}

export const podTiers: PodTier[] = [
	{
		id: 'starter',
		name: 'Starter Pod',
		price: '$14,000',
		priceNumeric: 14000,
		teamComposition: ['Pod Lead (shared)', '1 Developer', 'QA via Pod Lead'],
		bestFor:
			'Agencies needing steady dev output without a full team. Ideal for small builds, maintenance, or steady feature development.',
		popular: false,
	},
	{
		id: 'standard',
		name: 'Standard Pod',
		price: '$24,000',
		priceNumeric: 24000,
		teamComposition: ['Dedicated Pod Lead', '2 Developers', 'QA (shared or fractional)'],
		bestFor: 'Agencies running multiple projects or medium-size builds. Predictable, scalable production capacity.',
		popular: true,
	},
	{
		id: 'full',
		name: 'Full Build Pod',
		price: '$38,000',
		priceNumeric: 38000,
		teamComposition: ['Full-time Pod Lead (TD/Architect)', '3 Developers', 'Dedicated QA'],
		bestFor:
			'Agencies replacing or augmenting a full internal development team. Large-scale builds, retainers, or ongoing product development.',
		popular: false,
	},
];

export const podBenefits: PodBenefit[] = [
	{
		title: 'Senior-Led Architecture',
		description:
			'Every project gets senior-level oversight and technical direction. No junior-only teams learning on your dime.',
		icon: 'Crown',
	},
	{
		title: 'Predictable Monthly Cost',
		description:
			"Know exactly what you're spending. No hourly surprises, no scope creep invoices, no contractor juggling.",
		icon: 'DollarSign',
	},
	{
		title: 'Zero Management Burden',
		description: 'We handle hiring, performance, sprints, and code reviews. You focus on clients and growth.',
		icon: 'UserX',
	},
	{
		title: 'Flexible Partnership Model',
		description:
			'Work with us as House of Giants, or go white-label if your client relationships require it. Your call.',
		icon: 'Eye',
	},
	{
		title: 'Battle-Tested Velocity',
		description:
			'Established workflows, reusable components, and proven processes mean faster delivery on every project.',
		icon: 'Zap',
	},
	{
		title: 'Scales With Your Pipeline',
		description:
			'Add capacity when you land big contracts. Scale back during slower months. No long-term headcount risk.',
		icon: 'TrendingUp',
	},
];

export const hogResponsibilities: PodResponsibility[] = [
	{
		category: 'Full Development Execution',
		items: [
			'Deliver projects from discovery through deployment',
			'Implement modern coding standards and reusable components',
			'Build reliable foundations for long-term maintainability',
		],
	},
	{
		category: 'Managed Pod Team & Leadership',
		items: [
			'Provide a Pod Lead responsible for technical quality',
			'Manage developer performance, output, and velocity',
			'Run sprint planning, code reviews, and QA oversight',
		],
	},
	{
		category: 'Architecture & Technical Strategy',
		items: [
			'Create architecture plans and documentation',
			'Guide complex features, integrations, and performance',
			'Ensure alignment with your creative and UX direction',
		],
	},
	{
		category: 'QA, Deployment & Sustainability',
		items: [
			'Enforce code quality via structured QA processes',
			'Implement CI/CD and deployment pipelines',
			'Deliver documentation and handoff packages',
		],
	},
];

export const partnerResponsibilities: PodResponsibility[] = [
	{
		category: 'Client Relationship & Project Direction',
		items: [
			'Own all client communication, approvals, and timelines',
			'Provide clear requirements, designs, and strategic context',
		],
	},
	{
		category: 'Creative & Strategic Inputs',
		items: [
			'Deliver brand, UX, and design assets needed for development',
			'Approve scopes and assign priority to deliverables',
		],
	},
	{
		category: 'Pod Enablement & Context',
		items: [
			'Provide access to any existing repos, environments, and documentation',
			'Supply a project or account manager for coordination',
		],
	},
];

export const podFaqs: PodFaq[] = [
	{
		question: 'How is this different from hiring contractors?',
		answer: (
			<>
				Contractors are bodies you manage. A Pod is a complete, managed development unit with its own leadership.
				We handle architecture, code reviews, sprints, and quality—you just provide requirements and direction.
				See how this works in our{' '}
				<Link href="/work" className="text-primary hover:underline font-medium">
					case studies
				</Link>
				.
			</>
		),
	},
	{
		question: 'Do you offer white-label partnerships?',
		answer: (
			<>
				Yes. While we bring our own process and Pod OS, we can work under your brand and bridge our tools into
				your client&apos;s view. We&apos;re happy to be the invisible engine behind your agency&apos;s delivery.
				Check out our{' '}
				<Link href="/services" className="text-primary hover:underline font-medium">
					full range of services
				</Link>{' '}
				to see how we can support you.
			</>
		),
	},
	{
		question: 'What if I need to scale up or down?',
		answer:
			'Pods are flexible. You can upgrade tiers when you land big contracts or scale back during slower periods. No long-term headcount commitments.',
	},
	{
		question: 'How do you handle communication?',
		answer:
			"Your Pod Lead is your single point of contact. We bring you into our dedicated delivery channels for full transparency, providing real-time visibility into sprints, blockers, and progress without the management overhead.",
	},
	{
		question: 'What technologies do you work with?',
		answer:
			"We lead with a modern, high-velocity stack: React, Next.js, Node, TypeScript, and headless CMS platforms. While we bring our own proven toolchain (Pod OS), we ensure it integrates seamlessly with your target environment for final delivery.",
	},
	{
		question: 'How fast can we start?',
		answer:
			'Most Pods are operational within 2 weeks. We run a structured onboarding to deploy the Pod OS, establish the technical foundation, and audit any existing codebase so we can start shipping immediately.',
	},
];

export function getPodTierById(id: string): PodTier | undefined {
	return podTiers.find((tier) => tier.id === id);
}
