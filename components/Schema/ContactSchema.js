import siteMetadata from '@/data/siteMetadata';

export const ContactSchema = () => {
	return (
		<>
			{/* Contact Page Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ContactPage',
						'@id': `${siteMetadata.siteUrl}/contact#contactpage`,
						url: `${siteMetadata.siteUrl}/contact`,
						name: `Contact Us | ${siteMetadata.title}`,
						description:
							'Get in touch with House of Giants for web development, design, UX architecture, and digital innovation services.',
						isPartOf: {
							'@id': 'https://houseofgiants.com/#website',
						},
						about: {
							'@id': 'https://houseofgiants.com/#organization',
						},
						inLanguage: 'en-US',
						primaryImageOfPage: {
							'@type': 'ImageObject',
							inLanguage: 'en-US',
							url: `${siteMetadata.siteUrl}/images/dom.jpeg`,
							width: 800,
							height: 600,
						},
						mainEntity: {
							'@type': 'Organization',
							'@id': 'https://houseofgiants.com/#organization',
							name: 'House of Giants',
							url: siteMetadata.siteUrl,
							email: 'hello@houseofgiants.com',
							telephone: '+1-(303)-219-0697',
							image: `${siteMetadata.siteUrl}/images/logo.png`,
							address: {
								'@type': 'PostalAddress',
								streetAddress: '3839 Jackson St',
								addressLocality: 'Denver',
								addressRegion: 'CO',
								postalCode: '80205',
								addressCountry: 'US',
							},
							contactPoint: {
								'@type': 'ContactPoint',
								contactType: 'customer service',
								telephone: '+1-(303)-219-0697',
								email: 'hello@houseofgiants.com',
								availableLanguage: 'English',
								contactOption: 'TollFree',
								areaServed: 'US',
							},
						},
						breadcrumb: {
							'@type': 'BreadcrumbList',
							'@id': `${siteMetadata.siteUrl}/contact#breadcrumb`,
							itemListElement: [
								{
									'@type': 'ListItem',
									position: 1,
									name: 'Home',
									item: siteMetadata.siteUrl,
								},
								{
									'@type': 'ListItem',
									position: 2,
									name: 'Contact',
									item: `${siteMetadata.siteUrl}/contact`,
								},
							],
						},
					}),
				}}
			/>
		</>
	);
};
