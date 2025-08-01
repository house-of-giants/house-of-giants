'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { AudienceGrid } from './AudienceGrid';

export const AudienceSelection = ({ audiences, selectedAudience, onAudienceSelect, showContact }) => {
	// Refined animation variants for elegant transitions
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const headerVariants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const gridVariants = {
		hidden: {
			opacity: 0,
			y: 30,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.9,
				ease: [0.25, 0.46, 0.45, 0.94],
				staggerChildren: 0.15,
			},
		},
	};

	return (
		<motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative">
			{/* Refined header section with elegant animations */}
			<motion.div className="text-center mb-16" variants={headerVariants}>
				<SectionHeader
					title={
						<>
							What best describes{' '}
							<span className="bg-gradient-to-r from-[var(--c-neon-sky)] to-[var(--c-cyber-green)] bg-clip-text text-transparent">
								your project?
							</span>
						</>
					}
					subtitle="Select the option that resonates with your vision, and we'll tailor our approach to your specific needs and goals."
				/>
			</motion.div>

			{/* Grid with refined animations */}
			<motion.div variants={gridVariants}>
				<AudienceGrid
					audiences={audiences}
					selectedAudience={selectedAudience}
					onAudienceSelect={onAudienceSelect}
					showContact={showContact}
				/>
			</motion.div>
		</motion.div>
	);
};
