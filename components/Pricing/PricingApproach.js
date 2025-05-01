import { Container } from '@/components/Container/Container';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { Section } from '@/components/Section/Section';

export const PricingApproach = () => {
	return (
		<Section count="2.0" title="Our Billing Approach">
			<Container
				className="-has-background"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
			>
				<SectionHeader
					title="How We Bill"
					subtitle="So Nobody Gets Burned"
					accent="Transparent and predictable pricing"
				/>

				<div className="mt-[var(--header-spacing)] max-w-screen-lg mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="mb-10"
					>
						<p className="text-lg text-moon-rock mb-8">
							Each project is billed at a flat monthly rate until completion. No hourly tedium. No endless change
							orders. Just focused momentum and clean collaboration.
						</p>

						<h3 className="text-2xl font-bold mb-6 text-white">Here's how it works:</h3>

						<ul className="space-y-4">
							<li className="flex items-center">
								<span className="text-cyber-green mr-3 text-xl">•</span>
								<span className="text-moon-rock">
									Projects are scoped with a clear timeline and budget estimate based on the package and any add-ons.
								</span>
							</li>
							<li className="flex items-center">
								<span className="text-cyber-green mr-3 text-xl">•</span>
								<span className="text-moon-rock">
									We bill monthly, up front. A consistent amount that keeps everyone aligned and the work flowing.
								</span>
							</li>
							<li className="flex items-center">
								<span className="text-cyber-green mr-3 text-xl">•</span>
								<span className="text-moon-rock">
									If we wrap early, the final invoice is prorated based on what's left.
								</span>
							</li>
							<li className="flex items-center">
								<span className="text-cyber-green mr-3 text-xl">•</span>
								<span className="text-moon-rock">
									If delays or extra complexity push the timeline out, billing continues monthly until we ship.
								</span>
							</li>
						</ul>

						<div className="mt-8 mb-10">
							<p className="text-lg text-moon-rock mb-8">
								This model keeps the pressure off of both sides. No nickel and dime, no scope creep spirals, no rushing
								to hit artificial deadlines. Just high quality work at a predictable pace.
							</p>
						</div>

						<div className="bg-black/20 p-8 rounded-lg border border-moon-rock/10">
							<h4 className="text-xl font-bold mb-4 text-white">Bottom line?</h4>
							<ul className="space-y-2">
								<li className="flex items-start">
									<span className="text-cyber-green mr-3">✓</span>
									<span className="text-moon-rock">You'll know what you're paying.</span>
								</li>
								<li className="flex items-start">
									<span className="text-cyber-green mr-3">✓</span>
									<span className="text-moon-rock">We'll know what we're delivering.</span>
								</li>
								<li className="flex items-start">
									<span className="text-cyber-green mr-3">✓</span>
									<span className="text-moon-rock">And nobody's guessing what happens next.</span>
								</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</Container>
		</Section>
	);
};
