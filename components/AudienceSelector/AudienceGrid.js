'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { AudienceCard } from './AudienceCard';

export const AudienceGrid = ({ audiences, selectedAudience, onAudienceSelect, showContact }) => {
	// Refined animation variants for elegant transitions
	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 30,
		},
		visible: (index) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
				delay: index * 0.2 + 0.3,
			},
		}),
		exit: {
			opacity: 0,
			transition: {
				duration: 0.5,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
		hover: {
			y: -3,
			transition: {
				duration: 0.3,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
		selected: {
			y: -5,
			transition: {
				duration: 0.4,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	return (
		<AnimatePresence mode="wait">
			{!showContact && (
				<motion.div
					key="audience-grid"
					className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
				>
					{audiences.map((audience, index) => (
						<motion.div
							key={audience.audience}
							custom={index}
							variants={cardVariants}
							initial="hidden"
							animate="visible"
							whileHover="hover"
							className="relative"
						>
							{/* Subtle glow effect for selected card */}
							{selectedAudience === audience.audience && (
								<motion.div
									className="absolute inset-0 bg-gradient-to-br from-[var(--c-neon-sky)]/10 to-[var(--c-cyber-green)]/10 rounded-2xl blur-lg"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
								/>
							)}

							<div className="relative z-10">
								<AudienceCard
									{...audience}
									onSelect={onAudienceSelect}
									index={index}
									isSelected={selectedAudience === audience.audience}
								/>
							</div>
						</motion.div>
					))}
				</motion.div>
			)}
		</AnimatePresence>
	);
};
