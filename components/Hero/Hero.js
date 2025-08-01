'use client';

import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { HeroContent } from './HeroContent';
import { AudienceSelector } from '../AudienceSelector/AudienceSelector';
import { motion } from 'framer-motion';
import { Button } from '../Button/Button';

export const Hero = ({ onAudienceSelect }) => {
	return (
		<Section count="1.0" title="House of Giants">
			<Container
				fullWidth
				className="-has-background relative overflow-hidden flex flex-col justify-center px-4 md:px-8"
				background="var(--c-primary-dark)"
				pt="clamp(var(--sp-xl), 20vh, 12rem)"
			>
				<HeroContent />
			</Container>

			{/* Standalone Audience Selector Component */}
			<AudienceSelector onAudienceSelect={onAudienceSelect} />

			{/* CTAs - professional button treatment */}
			<motion.div
				className="text-center"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 4.4 }}
			>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
					<Button href="#work" variant="primary" size="xl">
						See Our Work
					</Button>
					<Button href="#contact" variant="secondary" size="xl">
						Start Your Project
					</Button>
				</div>

				{/* Scroll indicator - clean and professional */}
				<motion.div
					className="inline-flex flex-col items-center text-moon-rock/60"
					animate={{
						y: [0, 8, 0],
						opacity: [0.6, 1, 0.6],
					}}
					transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
				>
					<span className="text-sm mb-3 tracking-wider uppercase">Explore More</span>
					<motion.div
						className="w-[1px] h-12 bg-gradient-to-b from-moon-rock/50 to-transparent"
						animate={{ scaleY: [1, 0.5, 1] }}
						transition={{ duration: 2, repeat: Infinity }}
					/>
				</motion.div>
			</motion.div>
		</Section>
	);
};
