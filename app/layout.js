import { Analytics } from '@vercel/analytics/react';
import PlausibleProvider from 'next-plausible';
import AnimatedTitle from '@/components/AnimatedTitle/AnimatedTitle';

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

export async function generateMetadata() {
	return {
		...siteMetadata,
		icons: {
			icon: [
				{ url: '/favicon.svg', type: 'image/svg+xml' },
				{ url: '/favicon.ico', sizes: 'any' },
			],
			shortcut: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
			apple: [{ url: '/apple-touch-icon.png' }],
		},
		metadataBase: new URL(siteMetadata.siteUrl),
		title: {
			default: siteMetadata.title,
			template: `%s | ${siteMetadata.title}`,
		},
		description: siteMetadata.description,
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
		<html lang="en" className={`${nikolai.variable}`}>
			<head>
				<PlausibleProvider domain="houseofgiants.com" />
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
