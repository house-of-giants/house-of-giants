import { getSortedPostsData } from '@/lib/blog';
import siteMetadata from '@/data/siteMetadata';

export default async function sitemap() {
	// Get all blog posts
	const posts = getSortedPostsData();
	const blogEntries = posts.map((post) => ({
		url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
		lastModified: post.lastmod || post.date,
		changeFrequency: 'weekly',
		priority: 0.7,
	}));

	// Define case study routes with more specific metadata
	const caseStudies = ['shakey-graves', 'hayashi', 'backforty'].map((slug) => ({
		url: `${siteMetadata.siteUrl}/work/${slug}`,
		lastModified: new Date().toISOString(),
		changeFrequency: 'monthly',
		priority: 0.8,
	}));

	// Define service page routes with higher priority
	const servicePages = [
		'web-development',
		'web-design',
		'ux-architecture',
		'digital-innovation',
		'restaurant-websites',
		'contact',
	].map((slug) => ({
		url: `${siteMetadata.siteUrl}/${slug}`,
		lastModified: new Date().toISOString(),
		changeFrequency: 'weekly',
		priority: 0.9,
	}));

	// Define static routes with highest priority
	const routes = ['', '/blog'].map((route) => ({
		url: `${siteMetadata.siteUrl}${route}`,
		lastModified: new Date().toISOString(),
		changeFrequency: 'daily',
		priority: 1.0,
	}));

	// Combine all routes and sort by priority
	const allRoutes = [...routes, ...servicePages, ...caseStudies, ...blogEntries];

	// Sort by priority (highest first) and then by lastModified (newest first)
	return allRoutes.sort((a, b) => {
		if (b.priority !== a.priority) {
			return b.priority - a.priority;
		}
		return new Date(b.lastModified) - new Date(a.lastModified);
	});
}
