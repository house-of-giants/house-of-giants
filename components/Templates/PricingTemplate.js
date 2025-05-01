'use client';

import { useState } from 'react';
import Script from 'next/script';

import { Section } from '@/components/Section/Section';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import { SectionSeparator } from '@/components/SectionSeparator/SectionSeparator';
import { PricingHero } from '@/components/Pricing/PricingHero';
import { PricingApproach } from '@/components/Pricing/PricingApproach';
import { PricingIncludes } from '@/components/Pricing/PricingIncludes';
import { QuickContactForm } from '@/components/Pricing/QuickContact';
import { PricingTiersWithSelection } from '../Pricing/PricingTiersWithSelection';

// Complete pricing page template
export const PricingPage = ({ heroProps, includedProps, gradientVariant = 'purple', intensityLevel = 'low' }) => {
	// State to track which package was selected
	const [selectedPackage, setSelectedPackage] = useState(null);

	// Function to handle package selection and scroll to form
	const handlePackageSelect = (packageName) => {
		setSelectedPackage(packageName);
		// Smooth scroll to the contact form
		document.getElementById('quick-contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	// JSON-LD structured data for pricing packages
	const jsonLD = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'House of Giants Web Design & Development Pricing',
		description:
			'Design-forward, tech-agnostic websites built to convert, scale, and look like you actually give a s**t.',
		offers: [
			{
				'@type': 'Offer',
				name: 'The Baseline Brawler',
				description:
					"Perfect for new brands, lean teams, or fast-growing businesses that need a custom marketing or ecommerce site that doesn't look like a template graveyard.",
				price: '15000',
				priceCurrency: 'USD',
				priceSpecification: {
					'@type': 'PriceSpecification',
					price: '15000',
					priceCurrency: 'USD',
					minPrice: '15000',
				},
				itemOffered: {
					'@type': 'Service',
					name: 'Custom Website Development - Baseline Package',
					description: '4–6 fully custom-designed pages with conversion-focused UX design and mobile-first flows',
				},
			},
			{
				'@type': 'Offer',
				name: 'The Growth Engine',
				description:
					'For brands scaling hard and fast. This package is built to support content, product flow, campaigns, and creative flexibility.',
				price: '25000',
				priceCurrency: 'USD',
				priceSpecification: {
					'@type': 'PriceSpecification',
					price: '25000',
					priceCurrency: 'USD',
					minPrice: '25000',
				},
				itemOffered: {
					'@type': 'Service',
					name: 'Custom Website Development - Growth Package',
					description: '8–12 pages custom-designed with modular components and interactive elements',
				},
			},
			{
				'@type': 'Offer',
				name: 'The Flagship Flex',
				description:
					'This is the site that turns heads, drives business, and gives your team the power to scale. Built for established brands.',
				price: '40000',
				priceCurrency: 'USD',
				priceSpecification: {
					'@type': 'PriceSpecification',
					price: '40000',
					priceCurrency: 'USD',
					minPrice: '40000',
				},
				itemOffered: {
					'@type': 'Service',
					name: 'Custom Website Development - Enterprise Package',
					description: 'Unlimited custom pages, advanced features, and priority support',
				},
			},
		],
		provider: {
			'@type': 'ProfessionalService',
			name: 'House of Giants',
			description: 'Web design and development agency creating digital solutions that convert and scale',
			serviceType: ['Web Design', 'Web Development', 'UX Design', 'Digital Experience'],
		},
	};

	return (
		<main className="relative">
			{/* Add JSON-LD structured data */}
			<Script id="pricing-jsonld" type="application/ld+json">
				{JSON.stringify(jsonLD)}
			</Script>
			<FloatingGradients variant={gradientVariant} intensity={intensityLevel} />
			<Section count="1.0" title="Pricing Options" className="-mt-18 lg:-mt-24 2xl:-mt-36">
				<PricingHero {...heroProps} />
			</Section>
			<SectionSeparator />
			<PricingTiersWithSelection tiers={null} onSelectPackage={handlePackageSelect} />
			<SectionSeparator />
			<PricingApproach />
			<SectionSeparator />
			<PricingIncludes includes={includedProps.includes} />
			<SectionSeparator />
			<QuickContactForm selectedPackage={selectedPackage} />
		</main>
	);
};
