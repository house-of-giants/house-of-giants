import siteMetadata from '@/data/siteMetadata';

export const LocalBusinessSchema = () => {
	return (
		<>
			{/* Professional Service Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ProfessionalService',
						'@id': 'https://houseofgiants.com/#organization',
						name: 'House of Giants',
						alternateName: 'HoG Studio',
						image: 'https://houseofgiants.com/images/logo.png',
						logo: 'https://houseofgiants.com/images/logo.png',
						url: 'https://houseofgiants.com',
						telephone: '+1-(303)-219-0697',
						email: 'hello@houseofgiants.com',
						address: {
							'@type': 'PostalAddress',
							streetAddress: '3839 Jackson St',
							addressLocality: 'Denver',
							addressRegion: 'CO',
							postalCode: '80205',
							addressCountry: 'US',
						},
						geo: {
							'@type': 'GeoCoordinates',
							latitude: 39.7392,
							longitude: -104.9903,
						},
						openingHoursSpecification: {
							'@type': 'OpeningHoursSpecification',
							dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
							opens: '09:00',
							closes: '17:00',
						},
						sameAs: [
							'https://twitter.com/_houseofgiants',
							'https://www.linkedin.com/company/houseofgiants/',
							'https://www.instagram.com/_houseofgiants',
						],
						priceRange: '$$',
						description: siteMetadata.description,
						keywords:
							'Denver web development, Denver web developer, WordPress development Denver, web design Denver, web application design Denver, web application development Denver, digital experience design Denver, digital experience development Denver',
						hasOfferCatalog: {
							'@type': 'OfferCatalog',
							name: 'Web Development Services',
							itemListElement: [
								{
									'@type': 'Offer',
									name: 'Web Design & Development',
									description: 'Custom website design and development for businesses and organizations.',
								},
								{
									'@type': 'Offer',
									name: 'Web Application Development',
									description: 'Development of custom web applications and digital products.',
								},
								{
									'@type': 'Offer',
									name: 'Digital Experience Design',
									description: 'Creating immersive and engaging digital experiences for brands.',
								},
							],
						},
						areaServed: [
							{
								'@type': 'City',
								name: 'Denver',
								'@id': 'https://en.wikipedia.org/wiki/Denver',
							},
							{
								'@type': 'State',
								name: 'Colorado',
								'@id': 'https://en.wikipedia.org/wiki/Colorado',
							},
							{
								'@type': 'Country',
								name: 'United States',
								'@id': 'https://en.wikipedia.org/wiki/United_States',
							},
						],
						founder: {
							'@type': 'Person',
							name: 'Dominic Magnifico',
						},
						foundingDate: '2015',
						isAccessibleForFree: 'False',
						knowsLanguage: ['en-US'],
					}),
				}}
			/>

			{/* Website Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						'@id': 'https://houseofgiants.com/#website',
						url: 'https://houseofgiants.com',
						name: siteMetadata.headerTitle,
						description: siteMetadata.description,
						publisher: {
							'@id': 'https://houseofgiants.com/#organization',
						},
						potentialAction: {
							'@type': 'SearchAction',
							target: 'https://houseofgiants.com/search?q={search_term_string}',
							'query-input': 'required name=search_term_string',
						},
						inLanguage: 'en-US',
					}),
				}}
			/>

			{/* HomePage Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						'@id': 'https://houseofgiants.com/#webpage',
						url: 'https://houseofgiants.com',
						name: siteMetadata.title,
						description: siteMetadata.description,
						isPartOf: {
							'@id': 'https://houseofgiants.com/#website',
						},
						about: {
							'@id': 'https://houseofgiants.com/#organization',
						},
						primaryImageOfPage: {
							'@type': 'ImageObject',
							inLanguage: 'en-US',
							url: siteMetadata.getOgImage(),
							width: 1200,
							height: 630,
						},
						breadcrumb: {
							'@id': 'https://houseofgiants.com/#breadcrumb',
						},
						speakable: {
							'@type': 'SpeakableSpecification',
							cssSelector: ['article', '.speakable'],
						},
						inLanguage: 'en-US',
						potentialAction: [
							{
								'@type': 'ReadAction',
								target: ['https://houseofgiants.com'],
							},
						],
					}),
				}}
			/>

			{/* BreadcrumbList Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BreadcrumbList',
						'@id': 'https://houseofgiants.com/#breadcrumb',
						itemListElement: [
							{
								'@type': 'ListItem',
								position: 1,
								name: 'Home',
								item: 'https://houseofgiants.com',
							},
						],
					}),
				}}
			/>
		</>
	);
};
