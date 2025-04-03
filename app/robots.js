import siteMetadata from '@/data/siteMetadata';

export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
				allow: [
					'/',
					'/blog/',
					'/work/',
					'/services/',
					'/about',
					'/contact',
					'/web-development',
					'/web-design',
					'/ux-architecture',
					'/digital-innovation',
				],
				disallow: ['/api/', '/_next/', '/private/', '/admin/', '/*.json$', '/*.xml$'],
				crawlDelay: 10, // Add a small delay to prevent server overload
			},
			{
				userAgent: 'Googlebot',
				allow: ['/'],
				disallow: ['/api/', '/_next/', '/private/', '/admin/'],
				crawlDelay: 5, // Faster crawl delay for Googlebot
			},
			{
				userAgent: 'Googlebot-Image',
				allow: ['/'],
				disallow: ['/api/', '/_next/', '/private/', '/admin/'],
			},
		],
		sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
		host: siteMetadata.siteUrl,
	};
}
