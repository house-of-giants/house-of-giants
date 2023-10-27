'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager, createGlobalStyle } from 'styled-components';
import { Base, Typography } from '@/styles/base';

const GlobalStyle = createGlobalStyle`
body {
    background: red;
}
	${Base}
	${Typography}
`;

export default function StyledComponentsRegistry({ children }) {
	// Only create stylesheet once with lazy initial state
	// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return (
			<>
				<GlobalStyle />
				{styles}
			</>
		);
	});

	if (typeof window !== 'undefined') return <>{children}</>;

	return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>;
}
