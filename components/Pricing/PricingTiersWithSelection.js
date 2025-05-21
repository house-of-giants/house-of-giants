import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/Container/Container';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { Section } from '@/components/Section/Section';
import { Button } from '../Button/Button';

export const PricingTiersWithSelection = ({ tiers: propTiers, onSelectPackage }) => {
	const defaultTiers = [
		{
			id: 1,
			name: 'THE BASELINE BRAWLER',
			price: 'Starting at $15,000',
			description:
				"Perfect for new brands, lean teams, or fast-growing businesses that need a custom marketing or ecommerce site that doesn't look like a template.",
			features: [
				'Discovery & UX Planning Sprint',
				'3–4 custom layouts (e.g. homepage, product/service overview, single detail view, contact)',
				'Clean, strategic content hierarchy (so your message lands and converts)',
				'Mobile first, performance optimized frontend',
				'Light CMS setup for basic edits',
				'Basic integrations (email, forms, analytics)',
				'1 round of design revisions + QA pass',
			],
			cta: 'Get Started',
			value:
				'A templated site might get you online. This gets you sales. Built to tell your story and convert visitors without the junk drawer feel of DIY platforms. Think of it as your digital first impression but with bite.',
			packageValue: 'Baseline Brawler',
		},
		{
			id: 2,
			name: 'THE GROWTH ENGINE',
			price: 'Starting at $25,000',
			description:
				'For brands scaling hard and fast. This package is built to support content, product flow, campaigns, and creative flexibility. If you need a site that grows with you, not against you, this is your play.',
			features: [
				'Full UX & conversion strategy',
				'6–8 custom layouts (e.g. homepage, landing page, listing page, product page, content hub, contact, etc.)',
				'Modular component system (for ongoing page and section reuse)',
				'Support for catalogs, location directories, service listings, etc.',
				'Form flows, galleries, filtering tools, or basic calculators',
				'Admin and marketing friendly backend (no dev needed for content changes)',
				'SEO + metadata system',
				'Post-launch training & documentation',
			],
			cta: 'Get Started',
			value:
				"This site works harder than your sales team. It's built to convert, adapt, and run campaigns without breaking. You'll actually want to send people here, and they'll actually stick around.",
			packageValue: 'Growth Engine',
		},
		{
			id: 3,
			name: 'THE FLAGSHIP FLEX',
			price: 'Starting at $40,000',
			description:
				'This is the site that turns heads, drives business, and gives your team the power to scale. Built for established brands ready to outgrow their outdated tech, bloated design, or off the shelf limitations.',
			features: [
				'Deep-dive workshops + product/UX planning',
				'Unlimited custom layouts within scope (built modularly, tied to user flows)',
				'Authenticated user flows, role-based dashboards, or custom workflows',
				'API integration, content syncing, real-time interactivity',
				'Custom content types, portals, or gated experiences',
				'Admin dashboard or CMS tuned to your ops',
				'QA, staging, and handoff pipeline setup',
				'Post-launch support window (30–60 days)',
			],
			cta: 'Get Started',
			value:
				"This isn't just a site, it's your growth platform. Whether you're pitching to investors, running high volume campaigns, or building brand loyalty from the jump, this package turns your digital presence into a competitive weapon.",
			packageValue: 'Flagship Flex',
		},
	];

	const tiers = propTiers || defaultTiers;

	// State to track which tier is being highlighted/focused
	const [activeTier, setActiveTier] = useState(null);
	// State to track which feature is being highlighted
	const [highlightedFeature, setHighlightedFeature] = useState({ tier: null, index: null });

	return (
        <Section count="3.0" title="Pricing Tiers" id="pricing">
            <Container
				className="-has-background"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
			>
				<SectionHeader
					title="Choose Your Package"
					subtitle="Flexible options for every stage"
					accent="Custom digital solutions that fit your needs"
				/>

				<div className="mt-[var(--header-spacing)] grid grid-cols-1 gap-12">
					{tiers.map((tier, index) => (
						<motion.div
							id={tier.packageValue.toLowerCase().replace(/\s+/g, '-')}
							key={tier.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className={`bg-black/10 rounded-lg overflow-hidden border border-moon-rock/10 transition-all duration-300 ${
								activeTier === tier.id
									? 'border-cyber-green scale-[1.01] shadow-lg shadow-cyber-green/10'
									: 'hover:border-cyber-green/30'
							}`}
							onMouseEnter={() => setActiveTier(tier.id)}
							onMouseLeave={() => setActiveTier(null)}
						>
							<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0">
								<div className="p-8 md:p-10 bg-black/20">
									<div className="mb-6">
										<span className="text-sm uppercase font-mono text-cyber-green">{`TIER ${tier.id}`}</span>
									</div>
									<h3 className="text-2xl md:text-3xl font-bold mb-4">{tier.name}</h3>
									<div className="text-xl md:text-2xl font-black mb-4 text-cyber-green transition-all duration-300">
										{tier.price}
									</div>
									<p className="text-moon-rock/90 text-base mb-6">{tier.description}</p>
								</div>

								<div className="p-8 md:p-10">
									<h4 className="text-xl font-bold mb-4">You Get:</h4>
									<ul className="space-y-3 mb-8">
										{tier.features.map((feature, idx) => (
											<motion.li
												key={idx}
												className={`flex items-start p-2 rounded-md transition-all duration-300 ${
													highlightedFeature.tier === tier.id && highlightedFeature.index === idx
														? 'bg-cyber-green/10 border-l-2 border-cyber-green pl-3'
														: ''
												}`}
												onMouseEnter={() => setHighlightedFeature({ tier: tier.id, index: idx })}
												onMouseLeave={() => setHighlightedFeature({ tier: null, index: null })}
												whileHover={{ x: 5 }}
												transition={{ type: 'spring', stiffness: 300, damping: 10 }}
											>
												<span className="text-cyber-green mr-3 transition-all duration-300">✓</span>
												<span className="text-moon-rock">{feature}</span>
											</motion.li>
										))}
									</ul>

									<div className="bg-black/20 p-5 rounded-lg mt-6">
										<h4 className="text-lg font-bold mb-2">Why it's worth it:</h4>
										<p className="text-moon-rock/90 text-sm">{tier.value}</p>
									</div>
								</div>
							</div>
							{/* CTA button with onClick to select package */}
							<div className="px-8 pb-8 md:px-10 md:pb-10 mt-0 bg-gradient-to-r from-black/30 to-black/10">
								<Button
									variant="primary"
									size="xl"
									onClick={() => onSelectPackage(tier.packageValue)}
									className="w-full"
								>
									{tier.cta} <span className="ml-2">→</span>
								</Button>
							</div>
						</motion.div>
					))}
				</div>
			</Container>
        </Section>
    );
};
