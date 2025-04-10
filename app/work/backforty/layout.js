export const metadata = {
	title: 'BackForty Management – Custom Web Development & Artist Platform',
	description:
		'Explore how House of Giants built a high-performance digital platform for BackForty Management—combining strategy, scalability, and artist-first UX.',
	alternates: {
		canonical: '/work/backforty',
	},
	openGraph: {
		title: 'BackForty Management – Custom Web Development & Artist Platform',
		description:
			'Explore how House of Giants built a high-performance digital platform for BackForty Management—combining strategy, scalability, and artist-first UX.',
		url: 'https://houseofgiants.com/work/backforty',
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=BackForty%20Management%20%E2%80%93%20Custom%20Web%20Development',
				width: 1200,
				height: 630,
				alt: 'BackForty Management – Custom Web Development & Artist Platform | House of Giants',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'BackForty Management – Custom Web Development & Artist Platform',
		description:
			'Explore how House of Giants built a high-performance digital platform for BackForty Management—combining strategy, scalability, and artist-first UX.',
		images: ['https://houseofgiants.com/api/og?title=BackForty%20Management%20%E2%80%93%20Custom%20Web%20Development'],
	},
};

function BackFortyLayout({ children }) {
	return children;
}

export default BackFortyLayout;
