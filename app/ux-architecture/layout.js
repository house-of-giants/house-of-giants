export const metadata = {
	title: "User Experience That Works Like Magic (Because It's Engineered That Way)",
	description:
		'Strategic UX that helps users buy, book, order, or explore with ease—cutting friction and increasing conversions at every step.',
	keywords:
		'UX architecture Denver, user experience design, UX design Denver, information architecture, interaction design Denver',
	alternates: {
		canonical: '/ux-architecture',
	},
	openGraph: {
		title: "User Experience That Works Like Magic (Because It's Engineered That Way)",
		description:
			'Strategic UX that helps users buy, book, order, or explore with ease—cutting friction and increasing conversions at every step.',
		url: 'https://houseofgiants.com/ux-architecture',
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=User%20Experience%20That%20Works%20Like%20Magic',
				width: 1200,
				height: 630,
				alt: 'User Experience That Works Like Magic | House of Giants',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: "User Experience That Works Like Magic (Because It's Engineered That Way)",
		description:
			'Strategic UX that helps users buy, book, order, or explore with ease—cutting friction and increasing conversions at every step.',
		images: ['https://houseofgiants.com/api/og?title=User%20Experience%20That%20Works%20Like%20Magic'],
	},
};

export default function UXArchitectureLayout({ children }) {
	return <>{children}</>;
}
