import { work } from '@/data/work';

/**
 * Get next case studies excluding the current one
 * @param {string} currentTitle - Title of the current case study
 * @param {number} limit - Maximum number of case studies to return (default: 4)
 * @returns {Array} Array of case study objects
 *
 * @example
 * // Get up to 4 next case studies
 * const nextCases = getNextCaseStudies('The CyberNest');
 *
 * // Get only 2 next case studies
 * const nextCases = getNextCaseStudies('The CyberNest', 2);
 */
export const getNextCaseStudies = (currentTitle, limit = 4) => {
	return work
		.filter((project) => project.title !== currentTitle)
		.slice(0, limit)
		.map((project) => ({
			title: project.title,
			description: project.description,
			image: project.cardImage,
			tags: project.tags,
			url: project.url,
		}));
};

/**
 * Get a random selection of case studies
 * @param {string} currentTitle - Title of the current case study
 * @param {number} count - Number of case studies to return (default: 3)
 * @returns {Array} Array of case study objects
 *
 * @example
 * // Get 3 random case studies
 * const randomCases = getRandomCaseStudies('The CyberNest');
 *
 * // Get 2 random case studies
 * const randomCases = getRandomCaseStudies('The CyberNest', 2);
 */
export const getRandomCaseStudies = (currentTitle, count = 3) => {
	const availableCases = work.filter((project) => project.title !== currentTitle);

	if (availableCases.length <= count) {
		return getNextCaseStudies(currentTitle, count);
	}

	// Shuffle and take first 'count' items
	const shuffled = [...availableCases].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count).map((project) => ({
		title: project.title,
		description: project.description,
		image: project.cardImage,
		tags: project.tags,
		url: project.url,
	}));
};

/**
 * Get case studies by tag
 * @param {string} currentTitle - Title of the current case study
 * @param {string} tag - Tag to filter by
 * @param {number} limit - Maximum number of case studies to return (default: 4)
 * @returns {Array} Array of case study objects
 *
 * @example
 * // Get case studies with 'AI' tag
 * const aiCases = getCaseStudiesByTag('The CyberNest', 'AI');
 *
 * // Get case studies with 'Web Design' tag, limit to 2
 * const designCases = getCaseStudiesByTag('The CyberNest', 'Web Design', 2);
 */
export const getCaseStudiesByTag = (currentTitle, tag, limit = 4) => {
	return work
		.filter(
			(project) =>
				project.title !== currentTitle && project.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
		)
		.slice(0, limit)
		.map((project) => ({
			title: project.title,
			description: project.description,
			image: project.cardImage,
			tags: project.tags,
			url: project.url,
		}));
};

/**
 * Get all available case study data
 * @returns {Array} Array of all case study objects
 *
 * @example
 * // Get all case studies for use in other components
 * const allCases = getAllCaseStudies();
 */
export const getAllCaseStudies = () => {
	return work.map((project) => ({
		title: project.title,
		description: project.description,
		image: project.cardImage,
		tags: project.tags,
		url: project.url,
		type: project.type,
		img: project.img, // Keep original img for backward compatibility
	}));
};

/**
 * Get featured case studies for the work page
 * @returns {Array} Array of featured case study objects
 */
export const getFeaturedCaseStudies = () => {
	return work
		.filter((project) => project.featured)
		.map((project) => ({
			title: project.title,
			description: project.description,
			image: project.image || project.cardImage,
			tags: project.tags,
			url: project.url,
			year: project.year,
			client: project.client,
			category: project.category,
			industry: project.industry,
		}));
};

/**
 * Get non-featured case studies for the work page
 * @returns {Array} Array of non-featured case study objects
 */
export const getNonFeaturedCaseStudies = () => {
	return work
		.filter((project) => !project.featured)
		.map((project) => ({
			title: project.title,
			description: project.description,
			image: project.image || project.cardImage,
			tags: project.tags,
			url: project.url,
			year: project.year,
			client: project.client,
			category: project.category,
			industry: project.industry,
		}));
};

/**
 * Get case studies by category
 * @param {string} category - Category to filter by
 * @returns {Array} Array of case study objects in the specified category
 */
export const getCaseStudiesByCategory = (category) => {
	return work
		.filter((project) => project.category === category)
		.map((project) => ({
			title: project.title,
			description: project.description,
			image: project.image || project.cardImage,
			tags: project.tags,
			url: project.url,
			year: project.year,
			client: project.client,
			category: project.category,
			industry: project.industry,
		}));
};

/**
 * Get all available categories
 * @returns {Array} Array of unique category names
 */
export const getAllCategories = () => {
	return [...new Set(work.map((project) => project.category))];
};

/**
 * Get case studies by industry
 * @param {string} industry - Industry to filter by
 * @returns {Array} Array of case study objects in the specified industry
 */
export const getCaseStudiesByIndustry = (industry) => {
	return work
		.filter((project) => project.industry === industry)
		.map((project) => ({
			title: project.title,
			description: project.description,
			image: project.image || project.cardImage,
			tags: project.tags,
			url: project.url,
			year: project.year,
			client: project.client,
			category: project.category,
			industry: project.industry,
		}));
};

/**
 * Get all available industries
 * @returns {Array} Array of unique industry names
 */
export const getAllIndustries = () => {
	return [...new Set(work.map((project) => project.industry))];
};
