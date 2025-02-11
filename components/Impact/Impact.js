'use client';

import { motion } from 'framer-motion';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { MetricCard } from './MetricCard';

export const Impact = () => {
	return (
		<Section count="6.0" title="Impact">
			<Container
				className="-has-background"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
			>
				<SectionHeader
					title="Real results"
					subtitle="for real businesses."
					accent="Not just pretty pixels."
					description={
						<>
							<motion.div
								className="inline-block relative"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.5 }}
							>
								<span className="text-white font-bold relative">We don't just create beautiful websites —</span>
							</motion.div>
							<motion.div
								className="inline-block relative"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.7 }}
							>
								<span className="text-white font-bold relative">
									we build digital experiences that transform businesses.
								</span>
							</motion.div>
						</>
					}
				/>

				{/* Metrics Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--content-spacing)] mt-[var(--header-spacing)]">
					<MetricCard
						number="285"
						symbol="%"
						title="Average increase in page views after launch"
						description="More eyes on your brand means more opportunities for conversion"
					/>
					<MetricCard
						number="91"
						symbol="%"
						title="Boost in new user engagement"
						description="Fresh audiences discovering and interacting with your brand"
					/>
					<MetricCard
						number="10"
						symbol="+"
						title="Years of digital excellence"
						description="A decade of pushing boundaries and delivering results"
					/>
				</div>
			</Container>
		</Section>
	);
};
