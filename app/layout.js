import { Analytics } from '@vercel/analytics/react';

import { Header } from '@/components/Header/Header';
import GlobalStyles from '@/components/Styles/GlobalStyles';
import StyledComponentsRegistry from 'lib/registry';

import './globals.css';

export async function generateMetadata() {
	return {
		metadataBase: new URL('https://houseofgiants.com'),
		title: {
			default: '🤘 House of Giants | A Digital Interactive Studio',
			tempalte: '%s | House of Giants',
		},
		openGraph: {
			title: '🤘 House of Giants | A Digital Interactive Studio',
			description:
				'Dreaming of innovation. Experimenting with passion. Creating with purpose. We are a digital interactive studio focused on creating beautiful, bold, thoughtfully crafted websites.',
		},
		twitter: {
			title: '🤘 House of Giants | A Digital Interactive Studio',
			description:
				'Dreaming of innovation. Experimenting with passion. Creating with purpose. We are a digital interactive studio focused on creating beautiful, bold, thoughtfully crafted websites.',
			creator: '@_houseofgiants',
		},
	};
}

export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<StyledComponentsRegistry>
					<GlobalStyles />
					<Header />
					{children}
				</StyledComponentsRegistry>
				<Analytics />
			</body>
		</html>
	);
}
