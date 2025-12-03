'use client';

import Script from 'next/script';

function LuckyOrangeScript() {
	return <Script strategy="afterInteractive" src="https://tools.luckyorange.com/core/lo.js?site-id=d57b82a4" />;
}

export default LuckyOrangeScript;
