'use client';

import { useCallback } from 'react';

/**
 * Custom hook for Plausible analytics tracking
 * Ensures proper client-side handling and SSR compatibility
 */
export const usePlausible = () => {
	const trackEvent = useCallback((eventName, options = {}) => {
		// Only run on client side
		if (typeof window === 'undefined') return;

		// Wait for plausible to be available
		if (window.plausible) {
			window.plausible(eventName, options);
		} else {
			// Queue the event if plausible isn't loaded yet
			window.plausible =
				window.plausible ||
				function () {
					(window.plausible.q = window.plausible.q || []).push(arguments);
				};
			window.plausible(eventName, options);
		}
	}, []);

	const trackAudienceSelection = useCallback(
		(audience) => {
			trackEvent('Audience+Selected', {
				props: {
					audience: audience,
				},
			});
		},
		[trackEvent]
	);

	const trackContactFormSubmission = useCallback(
		(formSource, audience = 'general') => {
			trackEvent('Contact+Form+Submitted', {
				props: {
					form_source: formSource,
					audience: audience,
				},
			});
		},
		[trackEvent]
	);

	const trackButtonClick = useCallback(
		(buttonName, additionalProps = {}) => {
			trackEvent('Button+Clicked', {
				props: {
					button_name: buttonName,
					...additionalProps,
				},
			});
		},
		[trackEvent]
	);

	return {
		trackEvent,
		trackAudienceSelection,
		trackContactFormSubmission,
		trackButtonClick,
	};
};
