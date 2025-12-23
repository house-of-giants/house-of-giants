import { Calendar, MessageSquare, FileText, type LucideIcon } from 'lucide-react';

export interface NavItem {
	name: string;
	href: string;
	external?: boolean;
}

export interface ProcessStepData {
	icon: LucideIcon;
	label: string;
	description: string;
}

export const mainNavigation: NavItem[] = [
	{ name: 'Work', href: '/work' },
	{ name: 'Services', href: '/services' },
	{ name: 'Pods', href: '/dedicated-teams' },
	{ name: 'About', href: '/about' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Pricing', href: '/pricing' },
];

export const footerNavigation: NavItem[] = [...mainNavigation, { name: 'Contact', href: '/contact' }];

export const audienceNavigation: NavItem[] = [
	{ name: 'For Startups', href: '/for-startups' },
];

export const socialLinks: NavItem[] = [
	{ name: 'Twitter / X', href: 'https://x.com/_houseofgiants', external: true },
	{ name: 'LinkedIn', href: 'https://linkedin.com/company/house-of-giants', external: true },
	{ name: 'GitHub', href: 'https://github.com/house-of-giants', external: true },
	{ name: 'Dribbble', href: 'https://dribbble.com/house-of-giants', external: true },
];

export const nextSteps: ProcessStepData[] = [
	{
		icon: MessageSquare,
		label: 'Quick chat',
		description: "15 min to see if we're a fit",
	},
	{
		icon: FileText,
		label: 'Scope & quote',
		description: 'Clear deliverables, honest pricing',
	},
	{
		icon: Calendar,
		label: 'Kick off',
		description: 'Start building within 2 weeks',
	},
];

export const contactInfo = {
	location: 'Denver, Colorado',
	email: 'hello@houseofgiants.com',
};
