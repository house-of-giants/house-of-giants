export interface Client {
	name: string;
	logo: string;
}

export const clients: Client[] = [
	{ name: 'Microsoft', logo: '/images/clients/microsoft.webp' },
	{ name: 'Uber', logo: '/images/clients/uber.webp' },
	{ name: 'Salesforce', logo: '/images/clients/salesforce.webp' },
	{ name: 'EA', logo: '/images/clients/ea.webp' },
	{ name: 'Comcast', logo: '/images/clients/comcast.webp' },
	{ name: 'Purdue', logo: '/images/clients/purdue.webp' },
	{ name: 'Denver Botanic Gardens', logo: '/images/clients/botanic-gardens.webp' },
	{ name: 'Indiana Pacers', logo: '/images/clients/pacers.webp' },
	{ name: 'Nobel Prize', logo: '/images/clients/nobel.webp' },
	{ name: 'Shakey Graves', logo: '/images/clients/shakey.webp' },
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
		title: 'CEO & Owner',
		company: 'BackForty Management',
	},
	{
		quote:
			'I was most impressed with how seriously they took my ideas and incorporated them into their awesome design ability.',
		author: 'Sheryl Glubok',
		title: 'Independent Filmmaker',
		company: '',
	},
	{
		quote:
			"The outcome has been fantastic, as we're successfully generating new people who want to get involved in our program.",
		author: 'Ann Marie Beresford',
		title: 'Program Director',
		company: 'Adaptive Sports Association',
	},
	{
		quote: 'House of Giants was really forward-thinking in their design.',
		author: 'Devan Crean',
		title: 'Former Marketing & Communications Manager',
		company: 'Air Methods',
	},
	{
		quote: 'They do a great job at getting to know the brand and investing in our collaboration.',
		author: 'Katie Zak',
		title: 'Marketing Director',
		company: 'Untapped Learning',
	},
];

export const stats = [
	{ value: '2017', label: 'Founded' },
	{ value: '100+', label: 'Projects Shipped' },
	{ value: '$2B+', label: 'Client Revenue Enabled' },
	{ value: '4.9/5', label: 'Client Rating' },
];
