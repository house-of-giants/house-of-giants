export interface Client {
	name: string;
	logo?: string;
}

export const clients: Client[] = [
	{ name: 'Microsoft' },
	{ name: 'Uber' },
	{ name: 'Salesforce' },
	{ name: 'EA' },
	{ name: 'Comcast' },
	{ name: 'Purdue' },
	{ name: 'Denver Botanic Gardens' },
	{ name: 'Indiana Pacers' },
	{ name: 'Nobel Prize' },
	{ name: 'Shakey Graves' },
];

export interface Testimonial {
	quote: string;
	author: string;
	title: string;
	company: string;
	avatar?: string;
}

export const testimonials: Testimonial[] = [
	{
		quote:
			"House of Giants isn't like other agencies. They don't just execute—they challenge, refine, and ultimately deliver something better than what you asked for.",
		author: 'Sarah Chen',
		title: 'VP of Marketing',
		company: 'CyberNest Security',
	},
	{
		quote:
			'Working with House of Giants felt like having a technical co-founder for our web presence. They understood our constraints, our timeline, and most importantly, where we needed to be in 2 years.',
		author: 'Marcus Park',
		title: 'CEO',
		company: 'Hyperlocology',
	},
	{
		quote:
			"They built us a site that's been fully booked since launch. More importantly, they understood that for a restaurant like ours, the website IS part of the experience.",
		author: 'Chef Hayashi',
		title: 'Owner',
		company: 'Hayashi Omakase',
	},
];

export const stats = [
	{ value: '2017', label: 'Founded' },
	{ value: '100+', label: 'Projects Shipped' },
	{ value: '$2B+', label: 'Client Revenue Enabled' },
	{ value: '4.9/5', label: 'Client Rating' },
];
