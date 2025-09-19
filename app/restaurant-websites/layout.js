export const metadata = {
	title: 'QSR Website Design & Ordering Systems | House of Giants',
	description:
		'Ditch clunky POS builders. We build lightning-fast custom QSR websites with online ordering that boost repeat orders—get a free quote today.',
	keywords:
		'custom restaurant website, QSR website development, fast casual restaurant web design, online ordering UX, restaurant website builder alternative, multi-location restaurant website, restaurant web agency',
	alternates: {
		canonical: '/restaurant-websites',
	},
	openGraph: {
		title: 'QSR Website Design & Ordering Systems | House of Giants',
		description:
			'Ditch clunky POS builders. We build lightning-fast custom QSR websites with online ordering that boost repeat orders—get a free quote today.',
		url: 'https://houseofgiants.com/restaurant-websites',
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=Custom%20Restaurant%20Websites%20That%20Convert%20%7C%20QSR%20%26%20Multi-Location%20Specialists',
				width: 1200,
				height: 630,
				alt: 'QSR Website Design & Ordering Systems | House of Giants',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'QSR Website Design & Ordering Systems | House of Giants',
		description:
			'Ditch clunky POS builders. We build lightning-fast custom QSR websites with online ordering that boost repeat orders—get a free quote today.',
		images: [
			'https://houseofgiants.com/api/og?title=Custom%20Restaurant%20Websites%20That%20Convert%20%7C%20QSR%20%26%20Multi-Location%20Specialists',
		],
	},
};

export default function RestaurantWebsitesLayout({ children }) {
	return <>{children}</>;
}
