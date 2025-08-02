'use client';

import { motion } from 'framer-motion';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';
import { SectionHeader } from '../SectionHeader/SectionHeader';

export const PricingCTA = () => {
	return (
		<Section count="7.0" title="Pricing">
			<Container pt="var(--section-spacing-top)" pb="var(--section-spacing-bottom)">
				{/* Header with Vertical Gradient Line */}
				<SectionHeader
					title="Transparent Pricing"
					subtitle="Know what you're investing in."
					accent="No more guessing games"
					description="We believe in transparent pricing that reflects the value we deliver — no black-box agency games, no hidden fees."
				/>

				<div className="mt-20">
					{/* Highlighted Price Range */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative mb-16 text-center"
					>
						<div className="inline-block relative">
							<div className="text-xl md:text-2xl text-moon-rock font-serif italic mb-0 tracking-wide">Starting at</div>
							<h2 className="relative mb-0 -grad-header z-10 font-display text-7xl md:text-8xl font-black tracking-tight text-white">
								$15k
							</h2>
						</div>
					</motion.div>

					{/* Pricing Features Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
						{/* Feature Card 1: Total Control */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="group relative"
						>
							<div className="h-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-cyber-blue/30 hover:shadow-lg hover:shadow-cyber-blue/5">
								{/* Accent Circle */}
								<div className="absolute -right-8 -bottom-8 w-24 h-24 bg-cyber-blue/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

								{/* Number Typography */}
								<div className="relative z-10 mb-0">
									<div className="font-display text-6xl font-black text-cyber-blue leading-none">01</div>
								</div>

								{/* Content */}
								<h3 className="text-3xl font-bold text-cyber-blue mb-2">Total Transparency</h3>
								<p className="text-moon-rock text-base mb-0">
									Clear scope and pricing breakdowns, so you know exactly where your investment goes.
								</p>
							</div>
						</motion.div>

						{/* Feature Card 2: Predictable Costs */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="group relative"
						>
							<div className="h-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-cyber-red/30 hover:shadow-lg hover:shadow-cyber-red/5">
								{/* Accent Circle */}
								<div className="absolute -right-8 -bottom-8 w-24 h-24 bg-cyber-red/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

								{/* Number Typography */}
								<div className="relative z-10 mb-0">
									<div className="font-display text-6xl font-black text-cyber-red  leading-none">02</div>
								</div>

								{/* Content */}
								<h3 className="text-3xl font-bold text-white mb-2 text-cyber-red">Predictable Costs</h3>
								<p className="text-moon-rock text-base mb-0">
									No unexpected budget overruns or surprise fees. Just predictable, phased payments.
								</p>
							</div>
						</motion.div>

						{/* Feature Card 3: Scale As You Grow */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="group relative"
						>
							<div className="h-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-cyber-green/30 hover:shadow-lg hover:shadow-cyber-green/5">
								{/* Accent Circle */}
								<div className="absolute -right-8 -bottom-8 w-24 h-24 bg-cyber-green/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

								{/* Number Typography */}
								<div className="relative z-10 mb-0">
									<div className="font-display text-6xl font-black text-cyber-green leading-none">03</div>
								</div>

								{/* Content */}
								<h3 className="text-3xl font-bold text-cyber-green mb-2">Scale As You Grow</h3>
								<p className="text-moon-rock text-base mb-0">
									Our pricing scales with your business. Start targeted, expand thoughtfully.
								</p>
							</div>
						</motion.div>
					</div>

					{/* Pricing Plans */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="mt-16 md:mt-20 text-center"
					>
						<div className="inline-block relative">
							<div className="relative mb-2">
								<Button href="/pricing" size="xl" className="font-serif text-xl tracking-wide">
									See detailed pricing &rarr;
								</Button>
							</div>
						</div>

						{/* Additional Note */}
						<div className="mt-8 space-y-3">
							<p className="text-wolf-gray text-base">
								<span className="font-medium text-white">Enterprise & Custom Solutions:</span> We work with
								organizations of all sizes, from pre-seed startups to Fortune 500 companies.
							</p>
							<p className="text-cyber-green text-sm">
								Multi-year agreements • Volume pricing • Dedicated support • Security & compliance
							</p>
						</div>
					</motion.div>
				</div>
			</Container>
		</Section>
	);
};
