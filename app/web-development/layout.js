export const metadata = {
	title: 'Custom Web Development for Startups & QSR Brands | House of Giants',
	description:
		"We build fast, scalable websites and web apps that don't break when your business grows. Custom web development for startups and multi-location restaurants. No templates. No bloat.",
	keywords:
		'custom web development, startup websites, restaurant website design, QSR web development, scalable websites, Next.js agency, WordPress developer Denver, UX-focused development, MVP development, headless CMS builds',
	alternates: {
		canonical: '/web-development',
	},
	openGraph: {
		title: 'Custom Web Development for Startups & QSR Brands | House of Giants',
		description:
			"We build fast, scalable websites and web apps that don't break when your business grows. Custom web development for startups and multi-location restaurants. No templates. No bloat.",
		url: 'https://houseofgiants.com/web-development',
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=Custom%20Web%20Development%20for%20Startups%20%26%20QSR%20Brands%20%7C%20House%20of%20Giants',
				width: 1200,
				height: 630,
				alt: 'Custom Web Development for Startups & QSR Brands | House of Giants',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Custom Web Development for Startups & QSR Brands | House of Giants',
		description:
			"We build fast, scalable websites and web apps that don't break when your business grows. Custom web development for startups and multi-location restaurants. No templates. No bloat.",
		images: [
			'https://houseofgiants.com/api/og?title=Custom%20Web%20Development%20for%20Startups%20%26%20QSR%20Brands%20%7C%20House%20of%20Giants',
		],
	},
};

export default function WebDevelopmentLayout({ children }) {
	return <>{children}</>;
}
