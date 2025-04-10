'use client';

import { IndustryPage } from '@/components/Templates/IndustryTemplate';
import CanonicalLink from '@/components/SEO/CanonicalLink';
import { getGifPlaceholder } from '@/utils/imageUtils';

// Pre-generate blur placeholders for performance
const BURGER_GIF_PLACEHOLDER = getGifPlaceholder('/images/burgerfinal.gif');
const SAMMY_GIF_PLACEHOLDER = getGifPlaceholder('/images/sammy.gif');
const CAKES_GIF_PLACEHOLDER = getGifPlaceholder('/images/cakes.gif');

export default function RestaurantPage() {
	// Restaurant-specific services
	const services = [
		{
			id: '01',
			title: 'Restaurant Website Design',
			description:
				'We create custom restaurant websites that blend brand storytelling with practical UX. Showcase your food, boost online orders, and make a strong impression on mobile first diners.',
			features: [
				'Mobile optimized menu browsing',
				'Custom branding and visuals',
				'Built to scale for multiple locations',
			],
		},
		{
			id: '02',
			title: 'Direct Online Ordering Systems',
			description:
				'Cut third-party fees and take control of your customer experience. Our restaurant ordering systems are designed to increase conversion rates and simplify backend workflows.',
			features: ['Built-in payment processing', 'Real-time order tracking', 'Multi-location menu and promo management'],
		},
		{
			id: '03',
			title: 'Local Restaurant SEO & Marketing',
			description:
				'Get discovered when it matters most. We optimize your restaurant website and business listings for hungry, local customers who are ready to order or visit.',
			features: ['Google Business Profile setup', 'Local keyword targeting', 'Review generation & response systems'],
		},
		{
			id: '04',
			title: 'Digital Loyalty & Retention Tools',
			description:
				'Turn one-time guests into loyal fans. Our digital loyalty tools and personalized email strategies drive return visits and increase average ticket size.',
			features: [
				'Custom loyalty platform integration',
				'Branded mobile app or web wallet',
				'Customer behavior tracking',
			],
		},
	];

	// Restaurant process steps
	const processSteps = [
		{
			id: '01',
			title: 'Menu-First Restaurant Website Design',
			description:
				'Your menu is the moneymaker, so we build everything around it. We design restaurant websites that make your food the hero, guide customers to high margin items, and make mobile ordering feel effortless.',
			features: [
				'Strategic menu hierarchy & layout',
				'Upsell-focused item placement',
				'Optimized for mobile first ordering',
			],
			imageUrl: '/images/sammy.gif',
			blurDataUrl: SAMMY_GIF_PLACEHOLDER,
		},
		{
			id: '02',
			title: 'Ordering, Location & Loyalty Integration',
			description:
				"Whether you've got 1 store or 50, we build custom restaurant websites that tie it all together. From Google Maps to digital ordering to loyalty programs, we connect your locations and your customers in one seamless experience.",
			features: [
				'Multi-location restaurant site architecture',
				'Google Business integration & local SEO',
				'Loyalty platform integration (Punchh, Hang, etc.)',
				'Custom online ordering systems',
			],
			imageUrl: '/images/burgerfinal.gif',
			blurDataUrl: BURGER_GIF_PLACEHOLDER,
		},
		{
			id: '03',
			title: 'Digital Brand Experience Design',
			description:
				"Great restaurant websites don't just show your menu, they show your vibe. We bring your brand experience online with custom photography, storytelling elements, and design that actually feels like you.",
			features: [
				'Atmosphere-driven design direction',
				'Custom brand visuals & layout systems',
				'Restaurant storytelling through UX',
			],
			imageUrl: '/images/cakes.gif',
			blurDataUrl: CAKES_GIF_PLACEHOLDER,
		},
	];

	// Industry benchmark metrics instead of claimed results
	const metrics = [
		{
			value: 'Up to 30%',
			title: 'Increase in Online Orders',
			description:
				'QSRs that switch to custom restaurant ordering websites typically see a 20–30% increase in direct orders.',
		},
		{
			value: '15–25%',
			title: 'Higher Average Ticket Value',
			description: 'Better menu UX and strategic upsells drive larger average orders. No discounting required.',
		},
		{
			value: '3–5x',
			title: 'More Repeat Visits with Loyalty',
			description:
				'Digital loyalty programs can improve retention and repeat visits by up to 5x for restaurant brands.',
		},
	];

	return (
		<>
			<CanonicalLink path="/restaurant-websites" />
			<IndustryPage
				industry="Restaurant"
				gradientVariant="purple"
				intensityLevel="low"
				canonicalPath="/restaurant-websites"
				heroProps={{
					headline: 'Custom Restaurant Websites & Online Ordering',
					subheadline: 'Built for Speed, Multi-Location Growth, and Conversion',
					description:
						'We build fast, branded restaurant websites and direct ordering systems that drive more online orders, support multi-location growth, and make your digital experience feel as seamless as your service.',
					heroImage: '/images/burgerfinal.gif',
					blurDataUrl: BURGER_GIF_PLACEHOLDER,
				}}
				servicesProps={{
					title: 'Custom Web Solutions for Restaurants',
					subtitle: 'Convert Better. Scale Easier. Keep More Revenue.',
					description:
						'We help restaurant brands build fast, flexible websites and ordering systems that drive more online sales, reduce platform fees, and create brand consistency across every location and device.',
					services: services,
				}}
				processProps={{
					title: 'A Tasty Website is Just the Start',
					subtitle: 'A Process Built for Restaurant Brands',
					accent: 'How We Build QSR Websites That Convert and Scale',
					description:
						'Your restaurant website should do more than just look good. We design for performance, integrating ordering, loyalty, and location management into a mobile first experience that grows with your brand.',
					processSteps: processSteps,
				}}
				impactProps={{
					title: 'Results You Can Expect',
					subtitle: 'From restaurant websites optimized for performance',
					accent: 'Benchmarks from top-performing QSR and multi-location brands',
					description:
						"We help QSR and restaurant groups drive more direct orders, increase revenue per customer, and reduce their dependence on third-party delivery apps. Here's what a smart digital experience can unlock.",
					metrics: metrics,
				}}
				contactProps={{
					title: "Let's Fix Your Restaurant Website",
					subtitle: 'Start fresh with a partner who knows food service.',
					accent: 'Custom digital strategy for QSR & multi-location restaurants',
					description:
						'From clunky templates to underperforming ordering flows, we help restaurant brands rebuild smarter. No subscriptions. No surprise fees. Just a digital presence that makes every order count.',
				}}
			/>
		</>
	);
}
