import { getSortedPostsData } from '@/lib/blog';
import siteMetadata from '@/data/siteMetadata';

export default async function sitemap() {
	// Get all blog posts
	const posts = getSortedPostsData();
	const blogEntries = posts.map((post) => ({
		url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
		lastModified: post.lastmod || post.date,
		changeFrequency: 'monthly',
		priority: 0.7,
	}));

	// Define case study routes
	const caseStudies = ['shakey-graves', 'hayashi', 'backforty'].map((slug) => ({
		url: `${siteMetadata.siteUrl}/work/${slug}`,
		lastModified: new Date().toISOString(),
		changeFrequency: 'monthly',
		priority: 0.8,
	}));

	// Define static routes
	const routes = ['', '/blog', '/work'].map((route) => ({
		url: `${siteMetadata.siteUrl}${route}`,
		lastModified: new Date().toISOString(),
		changeFrequency: 'daily',
		priority: 1,
	}));

	return [...routes, ...caseStudies, ...blogEntries];
}
