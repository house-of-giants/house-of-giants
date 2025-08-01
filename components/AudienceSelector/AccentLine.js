'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { BackButton } from './BackButton';

export const AccentLine = ({ className = 'mb-6', delay = 0, onBack, showBackButton = false }) => {
	// Refined animation variants for elegant transitions
	const lineVariants = {
		hidden: {
			opacity: 0,
			x: -15,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				delay: delay,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const segmentVariants = {
		hidden: {
			opacity: 0,
			scaleX: 0,
			originX: 0,
		},
		visible: {
			opacity: 1,
			scaleX: 1,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const backButtonVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	return (
		<>
			<AnimatePresence presenceAffectsLayout={true} mode="wait">
				{showBackButton && (
					<motion.div variants={backButtonVariants} initial="hidden" animate="visible" className="flex justify-center">
						<BackButton onBack={onBack} />
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				className={`flex items-center gap-2 justify-center w-full ${className}`}
				variants={lineVariants}
				initial="hidden"
				animate="visible"
			>
				<div className="flex items-center justify-center gap-2">
					<motion.div
						className="w-8 h-[2px] bg-[var(--c-cyber-green)]"
						variants={segmentVariants}
						initial="hidden"
						animate="visible"
						transition={{ delay: delay + 0.1 }}
					/>
					<motion.div
						className="w-16 h-[2px] bg-gradient-to-r from-[var(--c-neon-sky)] to-[var(--c-cyber-green)]"
						variants={segmentVariants}
						initial="hidden"
						animate="visible"
						transition={{ delay: delay + 0.2 }}
					/>
					<motion.div
						className="w-8 h-[2px] bg-[var(--c-neon-sky)]"
						variants={segmentVariants}
						initial="hidden"
						animate="visible"
						transition={{ delay: delay + 0.3 }}
					/>
				</div>
			</motion.div>
		</>
	);
};
