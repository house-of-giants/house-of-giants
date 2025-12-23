import { MetadataRoute } from 'next';
import { posts } from '#site/content';
import { caseStudies } from '@/lib/data/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://houseofgiants.com';

	// Static routes
	const staticRoutes = [
		'',
		'/about',
		'/services',
		'/work',
		'/blog',
		'/pricing',
		'/contact',
		'/for-startups',
		'/dedicated-teams',
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: 'monthly' as const,
		priority: route === '' ? 1 : 0.8,
	}));

	// Blog post routes
	const blogRoutes = posts
		.filter((post) => post.published)
		.map((post) => ({
			url: `${baseUrl}${post.permalink}`,
			lastModified: new Date(post.date),
			changeFrequency: 'weekly' as const,
			priority: 0.6,
		}));

	// Case study routes
	const caseStudyRoutes = caseStudies.map((study) => ({
		url: `${baseUrl}/work/${study.slug}`,
		lastModified: new Date(), // Using current date as lastModified for case studies
		changeFrequency: 'monthly' as const,
		priority: 0.7,
	}));

	return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}

