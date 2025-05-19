import siteMetadata from '@/data/siteMetadata';

export const ServiceSchema = ({ service }) => {
	// Map our service slug to schema data
	const serviceData = {
		'web-development': {
			name: 'Web Development Services',
			description:
				'Professional web development services including CMS development, custom web applications, and scalable solutions for businesses in Denver and beyond.',
			image: `${siteMetadata.siteUrl}/images/domcodes.jpg`,
			offers: [
				{
					name: 'CMS Development',
					description:
						'Custom content management system development with tailored admin interfaces, content modeling, and enterprise-grade security.',
				},
				{
					name: 'Web App Development',
					description:
						'Full-stack web application development with modern frameworks, API integration, and scalable cloud architecture.',
				},
				{
					name: 'HTML & CSS Development',
					description:
						'Semantic HTML structure and modern CSS implementations for responsive, accessible, and high-performance websites.',
				},
			],
		},
		'restaurant-websites': {
			name: 'Custom Restaurant Website Services',
			description:
				'Specialized web development for restaurants, QSRs, and fast-casual chains with online ordering integration, location management, and mobile-optimized menus.',
			image: `${siteMetadata.siteUrl}/images/restaurant-websites.jpg`,
			offers: [
				{
					name: 'Custom Restaurant Website Development',
					description:
						'Fully custom restaurant website development with branded design, online ordering systems, and seamless third-party delivery integration.',
				},
				{
					name: 'QSR Website Solutions',
					description:
						'High-performance websites for quick-service restaurants with location finders, integrated loyalty programs, and mobile ordering capabilities.',
				},
				{
					name: 'Restaurant Chain Web Development',
					description:
						'Scalable multi-location restaurant website solutions with centralized content management, franchisee portals, and location-specific content.',
				},
			],
		},
		'web-design': {
			name: 'Web Design Services',
			description:
				'Strategic web design services focused on conversion-driven layouts, brand-aligned visuals, and intuitive user experience for businesses.',
			image: `${siteMetadata.siteUrl}/images/domdesign.jpg`,
			offers: [
				{
					name: 'UI Design',
					description:
						'Intuitive user interface design with responsive layouts, visual hierarchy, and interactive elements that enhance user engagement.',
				},
				{
					name: 'Visual Design',
					description:
						'Brand-aligned visual design including typography, color systems, and imagery that resonates with your target audience.',
				},
				{
					name: 'Design Systems',
					description:
						'Comprehensive design systems with reusable components, style guides, and documentation for consistent brand implementation.',
				},
			],
		},
		'ux-architecture': {
			name: 'UX Architecture Services',
			description:
				'User experience architecture services including user research, information architecture, and interaction design for optimal digital experiences.',
			image: `${siteMetadata.siteUrl}/images/domux.jpg`,
			offers: [
				{
					name: 'User Research',
					description:
						'In-depth user research including user interviews, testing, and analytics to inform data-driven design decisions.',
				},
				{
					name: 'Information Architecture',
					description:
						'Strategic organization of content and functionality to create intuitive navigation and user flows.',
				},
				{
					name: 'Interaction Design',
					description:
						'Thoughtful design of interactive elements and micro-interactions that enhance user engagement and satisfaction.',
				},
			],
		},
		'digital-innovation': {
			name: 'Digital Innovation Services',
			description:
				'Cutting-edge digital innovation services including Three.js development, AI integration, and immersive AR/VR experiences for forward-thinking brands.',
			image: `${siteMetadata.siteUrl}/images/innovate.jpg`,
			offers: [
				{
					name: 'Three.js Development',
					description:
						'WebGL-powered 3D experiences with Three.js for interactive product showcases, data visualization, and immersive web experiences.',
				},
				{
					name: 'AI Integration',
					description:
						'Custom AI solutions including machine learning models, natural language processing, and intelligent content analysis for businesses.',
				},
				{
					name: 'AR/VR Experiences',
					description:
						'Immersive augmented and virtual reality experiences including WebXR implementations, virtual product showcases, and interactive simulations.',
				},
			],
		},
	};

	// Get the current service data
	const currentService = serviceData[service];
	if (!currentService) return null;

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Service',
					'@id': `${siteMetadata.siteUrl}/${service}#service`,
					name: currentService.name,
					description: currentService.description,
					provider: {
						'@type': 'ProfessionalService',
						'@id': 'https://houseofgiants.com/#organization',
						name: 'House of Giants',
						url: siteMetadata.siteUrl,
					},
					url: `${siteMetadata.siteUrl}/${service}`,
					image: currentService.image,
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
					hasOfferCatalog: {
						'@type': 'OfferCatalog',
						name: currentService.name,
						itemListElement: currentService.offers.map((offer) => ({
							'@type': 'Offer',
							name: offer.name,
							description: offer.description,
						})),
					},
					serviceType: currentService.name,
					// Add a specific WebPage schema for this service page
					mainEntityOfPage: {
						'@type': 'WebPage',
						'@id': `${siteMetadata.siteUrl}/${service}#webpage`,
						url: `${siteMetadata.siteUrl}/${service}`,
						name: `${currentService.name} | ${siteMetadata.title}`,
						description: currentService.description,
						isPartOf: {
							'@id': 'https://houseofgiants.com/#website',
						},
						about: {
							'@id': 'https://houseofgiants.com/#organization',
						},
						primaryImageOfPage: {
							'@type': 'ImageObject',
							inLanguage: 'en-US',
							url: currentService.image,
						},
						breadcrumb: {
							'@id': `${siteMetadata.siteUrl}/${service}#breadcrumb`,
						},
						inLanguage: 'en-US',
					},
					// Breadcrumb for this specific service
					breadcrumb: {
						'@type': 'BreadcrumbList',
						'@id': `${siteMetadata.siteUrl}/${service}#breadcrumb`,
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
								name: currentService.name,
								item: `${siteMetadata.siteUrl}/${service}`,
							},
						],
					},
				}),
			}}
		/>
	);
};
