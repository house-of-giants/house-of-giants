import { PricingPage } from '@/components/Templates/PricingTemplate';
import siteMetadata from '@/data/siteMetadata';

export const metadata = {
	title: 'Website & Web App Pricing | House of Giants',
	description:
		'Transparent pricing for custom websites and web applications. No templates, no fluff—just fast, scalable, design-forward builds made to grow with you.',
	openGraph: {
		title: 'Website & Web App Pricing | House of Giants',
		description:
			'See pricing for House of Giants’ custom websites and web applications. Built for growth, performance, and conversion—without bloated agency overhead.',
		url: `${siteMetadata.siteUrl}/pricing`,
		type: 'website',
		images: [
			{
				url: `${siteMetadata.siteUrl}/api/og?title=${encodeURIComponent('Website & Web App Pricing')}`,
				width: 1200,
				height: 630,
				alt: 'House of Giants Website and Web App Pricing',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Website & Web App Pricing | House of Giants',
		description:
			'Transparent pricing for custom websites and scalable web apps. Design-first, performance-ready, and built to last.',
		images: [`${siteMetadata.siteUrl}/api/og?title=${encodeURIComponent('Website & Web App Pricing')}`],
	},
};

export default function Page() {
	const heroProps = {
		title: 'HOUSE OF GIANTS',
		subtitle: 'Design forward, tech-agnostic websites built to convert, scale, and look like you actually give a s**t.',
		description: 'Select the package that best fits your business needs and growth ambitions.',
	};

	const includedProps = {
		includes: [
			{
				title: 'Tech-agnostic solutions',
				description: "We recommend what works best for your goals—not what's easiest for us to build.",
			},
			{
				title: 'Mobile-first by default',
				description: 'Designed and tested for performance across every screen, not just desktop showpieces.',
			},
			{
				title: 'Scalability from day one',
				description: "You won't need a rebuild just because your content or your business grows.",
			},
			{
				title: 'Human first support',
				description: 'Real people. Clear communication. No black-box agency games.',
			},
			{
				title: 'Accessibility built in',
				description: "WCAG AA compliance isn't an add-on, it's a baseline.",
			},
		],
	};

	const partnersProps = {};

	const contactProps = {
		title: 'Ready to Start Your Project?',
		subtitle: "Let's talk about your vision",
		description: "Tell us about your project goals and timeline, and we'll get back to you within 24 hours.",
	};

	return (
		<>
			<PricingPage
				heroProps={heroProps}
				includedProps={includedProps}
				partnersProps={partnersProps}
				contactProps={contactProps}
				gradientVariant="purple"
				intensityLevel="low"
			/>
		</>
	);
}
