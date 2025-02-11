'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const messages = [
	'👁️ Always Watching 👁️',
	'👀 Looking Good 👀',
	'👁️ Nice Browser Tab 👁️',
	'️👀 Come Back Soon 👀',
	'👁️ Miss You Already 👁️',
	'👀 Still Here 👀',
	'👁️ Just Checking In 👁️',
];

export default function AnimatedTitle() {
	const pathname = usePathname();
	const isBlogPage = pathname?.includes('/blog');

	useEffect(() => {
		// Don't run animation on blog pages
		if (isBlogPage) return;

		let currentIndex = 0;
		const originalTitle = document.title;
		const baseTitle = 'House of Giants';
		let intervalId = null;

		const updateTitle = () => {
			currentIndex = (currentIndex + 1) % messages.length;
			document.title = `${messages[currentIndex]} | ${baseTitle}`;
		};

		const handleVisibilityChange = () => {
			if (document.hidden) {
				// Start animation when tab is not focused
				if (!intervalId) {
					intervalId = setInterval(updateTitle, 5000); // Change message every 5 seconds when tab is inactive
				}
			} else {
				// Stop animation and restore original title when tab is focused
				if (intervalId) {
					clearInterval(intervalId);
					intervalId = null;
				}
				document.title = originalTitle;
			}
		};

		// Listen for tab visibility changes
		document.addEventListener('visibilitychange', handleVisibilityChange);

		// Cleanup
		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			document.title = originalTitle;
		};
	}, [isBlogPage]);

	return null; // This component doesn't render anything
}
