import type { Metadata } from 'next';
import { Geist_Mono, Plus_Jakarta_Sans, Syne } from 'next/font/google';
import { LenisProvider } from '@/components/providers/lenis-provider';
import './globals.css';

const jakartaSans = Plus_Jakarta_Sans({
	variable: '--font-sans',
	subsets: ['latin'],
	display: 'swap',
});

const syne = Syne({
	variable: '--font-display',
	subsets: ['latin'],
	display: 'swap',
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://houseofgiants.com'),
	title: 'Custom Web Development Partner in Denver | House of Giants',
	description:
		'Denver development studio partnering with founders who care about craft. No bullshit, no templates...just custom web development that scales.',
	keywords: [
		'custom web development denver',
		'web development partner colorado',
		'startup web development denver',
		'custom web application development',
		'dedicated development team boulder',
		'denver development studio',
		'mvp development services colorado',
		'bespoke web development rocky mountains',
		'web development company denver',
		'colorado web development',
		'rocky mountain tech partner',
		'software engineering denver',
		'boulder web development',
		'front range startup development',
		'denver software development company',
	],
	authors: [{ name: 'House of Giants' }],
	creator: 'House of Giants',
	publisher: 'House of Giants',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://houseofgiants.com',
		siteName: 'House of Giants',
		title: 'Custom Web Development Partner in Denver | House of Giants',
		description:
			'Founder-led development studio building custom web applications for people who care about craft.',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'House of Giants - Denver Web Development Studio',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Custom Web Development Partner in Denver',
		description: 'Founder-led development studio. No bullshit, just code that scales.',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: 'https://houseofgiants.com',
	},
	other: {
		'application/ld+json': JSON.stringify([
			{
				'@context': 'https://schema.org',
				'@type': 'Organization',
				name: 'House of Giants',
				alternateName: 'HoG Development Studio',
				url: 'https://houseofgiants.com',
				logo: 'https://houseofgiants.com/logo.png',
				description:
					'Custom web development studio in Denver partnering with founders who care about craft across Colorado and the world.',
				address: {
					'@type': 'PostalAddress',
					streetAddress: '3839 Jackson Street',
					addressLocality: 'Denver',
					addressRegion: 'CO',
					postalCode: '80205',
					addressCountry: 'US',
				},
				geo: {
					'@type': 'GeoCoordinates',
					latitude: '39.7392',
					longitude: '-104.9903',
				},
				sameAs: [
					'https://x.com/_houseofgiants',
					'https://linkedin.com/company/house-of-giants',
					'https://github.com/house-of-giants',
					'https://dribbble.com/house-of-giants',
				],
				areaServed: [
					{
						'@type': 'State',
						name: 'Colorado',
					},
					{
						'@type': 'City',
						name: 'Denver',
					},
					{
						'@type': 'City',
						name: 'Boulder',
					},
					{
						'@type': 'Country',
						name: 'USA',
					},
				],
				foundingDate: '2017',
				foundingLocation: 'Denver, CO',
				slogan: 'Not your typical web development studio',
				serviceType: [
					'Custom Web Development',
					'Web Application Development',
					'Startup Development Services',
					'Dedicated Development Teams',
					'MVP Development',
				],
				knowsAbout: [
					'React',
					'Next.js',
					'Custom Web Applications',
					'Startup Development',
					'Web Architecture',
					'Software Engineering',
				],
				aggregateRating: {
					'@type': 'AggregateRating',
					ratingValue: '4.9',
					reviewCount: '100',
					bestRating: '5',
				},
			},
			{
				'@context': 'https://schema.org',
				'@type': 'ProfessionalService',
				name: 'House of Giants',
				image: 'https://houseofgiants.com/og-image.jpg',
				'@id': 'https://houseofgiants.com',
				url: 'https://houseofgiants.com',
				telephone: '',
				priceRange: '$$$',
				address: {
					'@type': 'PostalAddress',
					streetAddress: '3839 Jackson Street',
					addressLocality: 'Denver',
					addressRegion: 'CO',
					postalCode: '80205',
					addressCountry: 'US',
				},
				geo: {
					'@type': 'GeoCoordinates',
					latitude: '39.7392',
					longitude: '-104.9903',
				},
				openingHoursSpecification: {
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
					opens: '09:00',
					closes: '18:00',
				},
			},
			{
				'@context': 'https://schema.org',
				'@type': 'Person',
				name: 'Dominic Magnifico',
				jobTitle: 'Founder & Lead Developer',
				worksFor: {
					'@type': 'Organization',
					name: 'House of Giants',
				},
				url: 'https://houseofgiants.com/about',
				sameAs: ['https://linkedin.com/in/dominicmagnifico'],
			},
			{
				'@context': 'https://schema.org',
				'@type': 'WebSite',
				name: 'House of Giants',
				url: 'https://houseofgiants.com',
				potentialAction: {
					'@type': 'SearchAction',
					target: 'https://houseofgiants.com/blog?q={search_term_string}',
					'query-input': 'required name=search_term_string',
				},
			},
		]),
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${jakartaSans.variable} ${syne.variable} ${geistMono.variable}`}>
			<body className="font-sans antialiased">
				<LenisProvider>{children}</LenisProvider>
			</body>
		</html>
	);
}
