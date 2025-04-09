'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
	const pathname = usePathname();

	// Scroll to top when pathname changes (page navigation)
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	// This component doesn't render anything
	return null;
};

export default ScrollToTop;
