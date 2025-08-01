'use client';

import Script from 'next/script';
import { useEffect } from 'react';

function PlausibleScript() {
	useEffect(() => {
		// Initialize plausible function on client side
		if (typeof window !== 'undefined') {
			window.plausible =
				window.plausible ||
				function () {
					(window.plausible.q = window.plausible.q || []).push(arguments);
				};
		}
	}, []);

	return <Script strategy="afterInteractive" data-domain="houseofgiants.com" src="https://plausible.io/js/script.js" />;
}

export default PlausibleScript;
