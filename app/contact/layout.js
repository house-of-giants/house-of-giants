export const metadata = {
	title: "Let's Build Something That Makes Your Competition Nervous",
	description:
		'Connect with House of Giants and get a digital partner who actually listens, solves problems, and builds stuff that works.',
	keywords: 'contact us, web design Denver, UX architecture Denver, digital innovation Denver',
	alternates: {
		canonical: '/contact',
	},
	openGraph: {
		title: "Let's Build Something That Makes Your Competition Nervous",
		description:
			'Connect with House of Giants and get a digital partner who actually listens, solves problems, and builds stuff that works.',
		url: 'https://houseofgiants.com/contact',
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=Let%27s%20Build%20Something%20That%20Makes%20Your%20Competition%20Nervous',
				width: 1200,
				height: 630,
				alt: "Let's Build Something That Makes Your Competition Nervous | House of Giants",
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: "Let's Build Something That Makes Your Competition Nervous",
		description:
			'Connect with House of Giants and get a digital partner who actually listens, solves problems, and builds stuff that works.',
		images: [
			'https://houseofgiants.com/api/og?title=Let%27s%20Build%20Something%20That%20Makes%20Your%20Competition%20Nervous',
		],
	},
};

export default function ContactLayout({ children }) {
	return <>{children}</>;
}
