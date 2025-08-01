/**
 * Plausible Analytics tracking utilities
 */

/**
 * Track a custom event with Plausible
 * @param {string} eventName - The name of the event to track
 * @param {Object} options - Optional parameters including props and callback
 */
export const trackEvent = (eventName, options = {}) => {
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
};

/**
 * Track audience selection
 * @param {string} audience - The selected audience type
 */
export const trackAudienceSelection = (audience) => {
	trackEvent('Audience+Selected', {
		props: {
			audience: audience,
		},
	});
};

/**
 * Track contact form submission
 * @param {string} formSource - The source of the form (e.g., 'audience_selector', 'homepage')
 * @param {string} audience - The audience type if applicable
 */
export const trackContactFormSubmission = (formSource, audience = 'general') => {
	trackEvent('Contact+Form+Submitted', {
		props: {
			form_source: formSource,
			audience: audience,
		},
	});
};

/**
 * Track button clicks with custom properties
 * @param {string} buttonName - The name/identifier of the button
 * @param {Object} additionalProps - Additional properties to track
 */
export const trackButtonClick = (buttonName, additionalProps = {}) => {
	trackEvent('Button+Clicked', {
		props: {
			button_name: buttonName,
			...additionalProps,
		},
	});
};
