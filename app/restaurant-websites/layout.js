export const metadata = {
	title: 'Custom Restaurant Websites | QSR & Fast Casual Web Design Experts',
	description:
		'Specialized Denver web agency for restaurant chains. Boost online orders, increase table bookings, and improve customer loyalty with high-performance custom restaurant websites.',
	keywords:
		'custom restaurant website, restaurant website design, QSR website development, restaurant website development, restaurant web design Denver, restaurant website builder',
	alternates: {
		canonical: '/restaurant-websites',
	},
	openGraph: {
		title: 'Custom Restaurant Websites That Actually Work | House of Giants',
		description:
			'Ditch the drag-and-drop template. We build fast, branded restaurant websites that boost orders, improve loyalty, and scale with your locations.',
		url: 'https://houseofgiants.com/restaurant-websites',
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=Custom%20Restaurant%20Websites%20That%20Actually%20Work',
				width: 1200,
				height: 630,
				alt: 'Custom Restaurant Websites That Actually Work | House of Giants',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Custom Restaurant Websites That Actually Work | House of Giants',
		description:
			'Ditch the drag-and-drop template. We build fast, branded restaurant websites that boost orders, improve loyalty, and scale with your locations.',
		images: ['https://houseofgiants.com/api/og?title=Custom%20Restaurant%20Websites%20That%20Actually%20Work'],
	},
};

export default function RestaurantWebsitesLayout({ children }) {
	return <>{children}</>;
}
