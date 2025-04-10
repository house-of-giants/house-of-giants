/**
 * Collection of utility functions for image processing and optimization
 */

/**
 * Generates a simple blurred placeholder for GIFs
 * This creates a tiny 10px colored square that can be used as a placeholder
 * @param {string} color - HEX color to use for the placeholder (without #)
 * @returns {string} - Base64 encoded data URL
 */
export function generateGifPlaceholder(color = '121417') {
	// Simplified SVG approach for browser compatibility
	const svg = `<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" fill="#${color}" /></svg>`;
	return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Gets a placeholder for a specific GIF based on its content/theme
 * @param {string} gifName - Name or path of the GIF
 * @returns {string} - Base64 encoded data URL placeholder
 */
export function getGifPlaceholder(gifName = '') {
	// A mapping of GIF paths to appropriate placeholder colors
	// Using more visible colors for better contrast on dark backgrounds
	const gifColorMap = {
		'/images/sammy.gif': '5a6f84', // Medium blue-gray for food/sandwich
		'/images/burgerfinal.gif': '5a6f84', // Medium blue-gray for burger
		'/images/cakes.gif': '5a6f84', // Medium blue-gray for cakes
		default: '3a4047', // Medium-dark gray (lighter than before)
	};

	const colorKey =
		Object.keys(gifColorMap).find((key) => gifName.toLowerCase().includes(key.toLowerCase())) || 'default';

	return generateGifPlaceholder(gifColorMap[colorKey]);
}
