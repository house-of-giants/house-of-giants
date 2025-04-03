import { Analytics } from '@vercel/analytics/react';
import PlausibleProvider from 'next-plausible';
import AnimatedTitle from '@/components/AnimatedTitle/AnimatedTitle';
import JsonLd from '@/components/Schema/JsonLd';

import { Header } from '@/components/Header/Header';
import GlobalStyles from '@/components/Styles/GlobalStyles';
import { ContactFooter } from '@/components/Contact/ContactFooter';
import StyledComponentsRegistry from 'lib/registry';
import { nikolai } from '@/styles/fonts';

import './globals.css';
import siteMetadata from '@/data/siteMetadata';
import { SectionProvider } from '@/components/SectionContext/SectionContext';
import { SectionBar } from '@/components/SectionBar/SectionBar';
import { LocalBusinessSchema } from '@/components/Schema/LocalBusinessSchema';
import { Inter } from 'next/font/google';
import CanonicalLink from '@/components/SEO/CanonicalLink';

const inter = Inter({ subsets: ['latin'] });

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ececec' },
		{ media: '(prefers-color-scheme: dark)', color: '#1a1f24' },
	],
	colorScheme: 'dark',
};

export async function generateMetadata() {
	return {
		...siteMetadata,
		title: siteMetadata.title,
		description: siteMetadata.description,
		metadataBase: new URL('https://houseofgiants.com'),
		icons: {
			icon: [
				{ url: '/favicon.svg', type: 'image/svg+xml' },
				{ url: '/favicon.ico', sizes: 'any' },
			],
			shortcut: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
			apple: [{ url: '/apple-touch-icon.png' }],
		},
		openGraph: {
			title: siteMetadata.title,
			description: siteMetadata.description,
			url: siteMetadata.siteUrl,
			siteName: siteMetadata.title,
			locale: siteMetadata.locale,
			type: 'website',
			images: [
				{
					url: siteMetadata.socialBanner,
					width: 1200,
					height: 630,
					alt: siteMetadata.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: siteMetadata.title,
			description: siteMetadata.description,
			images: [siteMetadata.socialBanner],
			creator: siteMetadata.twitter,
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
	};
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${nikolai.variable} ${inter.className}`}>
			<head>
				<PlausibleProvider domain="houseofgiants.com" />
				<JsonLd />
			</head>
			<body>
				<StyledComponentsRegistry>
					<LocalBusinessSchema />
					<GlobalStyles />
					<Header />
					<AnimatedTitle />
					<SectionProvider>
						<SectionBar />
						{children}
					</SectionProvider>
					<ContactFooter />
				</StyledComponentsRegistry>
				<Analytics />
			</body>
		</html>
	);
}
