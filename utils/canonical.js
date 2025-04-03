export function generateCanonicalUrl(path) {
	// Remove trailing slash if present
	const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;

	// Ensure path starts with a slash
	const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;

	// Return the full canonical URL
	return `https://houseofgiants.com${normalizedPath}`;
}
