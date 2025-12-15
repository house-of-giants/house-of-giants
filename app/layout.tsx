import type { Metadata } from 'next';
import { Geist_Mono, Plus_Jakarta_Sans, Syne } from 'next/font/google';
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
	title: 'House of Giants | Custom Web Development for Startups',
	description:
		'We build websites that get startups funded. Custom web development, design, and UX from a team that stays small on purpose.',
	keywords: ['web development', 'startup website', 'custom web design', 'Denver web agency', 'UX design'],
	authors: [{ name: 'House of Giants' }],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		siteName: 'House of Giants',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${jakartaSans.variable} ${syne.variable} ${geistMono.variable}`}>
			<body className="font-sans antialiased">{children}</body>
		</html>
	);
}
