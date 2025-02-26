export const LocalBusinessSchema = () => {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'ProfessionalService',
					name: 'House of Giants',
					image: 'https://houseofgiants.com/images/logo.png',
					url: 'https://houseofgiants.com',
					telephone: '+1-(303) 219-0697', // Add your actual phone number
					address: {
						'@type': 'PostalAddress',
						streetAddress: '3839 Jackson St', // Add your actual address
						addressLocality: 'Denver',
						addressRegion: 'CO',
						postalCode: '80205', // Add your actual zip
						addressCountry: 'US',
					},
					geo: {
						'@type': 'GeoCoordinates',
						latitude: 39.7392, // Denver's coordinates - update with your exact location
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
					description:
						"Denver's premier web development studio specializing in custom website development, web applications, and digital experiences that transform brands.",
					keywords:
						'Denver web development, Denver web developer, WordPress development Denver, web design Denver, web application design Denver, web application development Denver, digital experience design Denver, digital experience development Denver',
				}),
			}}
		/>
	);
};
