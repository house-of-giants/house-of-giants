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
			'Our website looks fantastic and we are getting more business off of it than we previously were. HoG did a great job listening to our needs and designing a website that looks and runs fantastic.',
		author: 'Kathleen Lannes',
		title: 'Sales Manager',
		company: 'Longero',
	},
	{
		quote:
			'They even took the time for in-depth research before calls which proved to me they understood the history and path.',
		author: 'Bodie Johnson',
		title: 'Founder',
		company: '',
	},
	{
		quote:
			'I was most impressed with how seriously they took my ideas and incorporated them into their awesome design ability.',
		author: 'Sheryl Glubok',
		title: 'Business Owner',
		company: '',
	},
	{
		quote:
			"The outcome has been fantastic, as we're successfully generating new people who want to get involved in our program.",
		author: 'Ann Marie Beresford',
		title: 'Program Director',
		company: '',
	},
	{
		quote: 'House of Giants was really forward-thinking in their design.',
		author: 'Devan Crean',
		title: 'Marketing Director',
		company: '',
	},
	{
		quote: 'They do a great job at getting to know the brand and investing in our collaboration.',
		author: 'Katie Zak',
		title: 'Brand Manager',
		company: '',
	},
];

export const stats = [
	{ value: '2017', label: 'Founded' },
	{ value: '100+', label: 'Projects Shipped' },
	{ value: '$2B+', label: 'Client Revenue Enabled' },
	{ value: '4.9/5', label: 'Client Rating' },
];
