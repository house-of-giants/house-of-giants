export const metadata = {
	title: 'Web Design That Gets Clicks, Orders, and Results',
	description:
		"We design digital experiences that drive engagement - whether you're launching a new product or streamlining online ordering.",
	keywords: 'Denver web design, Denver web designer, UX design Denver, UI design, interactive web design Denver',
	alternates: {
		canonical: '/web-design',
	},
	openGraph: {
		title: 'Web Design That Gets Clicks, Orders, and Results',
		description:
			"We design digital experiences that drive engagement - whether you're launching a new product or streamlining online ordering.",
		url: 'https://houseofgiants.com/web-design',
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=Web%20Design%20That%20Gets%20Clicks%2C%20Orders%2C%20and%20Results',
				width: 1200,
				height: 630,
				alt: 'Web Design That Gets Clicks, Orders, and Results | House of Giants',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Web Design That Gets Clicks, Orders, and Results',
		description:
			"We design digital experiences that drive engagement - whether you're launching a new product or streamlining online ordering.",
		images: [
			'https://houseofgiants.com/api/og?title=Web%20Design%20That%20Gets%20Clicks%2C%20Orders%2C%20and%20Results',
		],
	},
};

export default function WebDesignLayout({ children }) {
	return <>{children}</>;
}
