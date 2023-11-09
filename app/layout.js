import { Analytics } from '@vercel/analytics/react';

import { Header } from '@/components/Header/Header';
import GlobalStyles from '@/components/Styles/GlobalStyles';
import StyledComponentsRegistry from 'lib/registry';

import './globals.css';

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
