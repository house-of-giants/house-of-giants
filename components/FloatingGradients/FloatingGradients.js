'use client';

import { motion } from 'framer-motion';

export const FloatingGradients = ({ variant, intensity = 'medium' }) => {
	const gradientVariants = {
		green: 'from-[#c1ff1d] to-[#00ffe0]',
		purple: 'from-[#9b4dff] to-[#ff2a6d]',
		gold: 'from-[#ffd700] to-[#ffa500]',
	};

	// Intensity levels for the gradients
	const intensityLevels = {
		low: {
			opacity: [0.07, 0.09, 0.07],
			blur: '100px',
		},
		medium: {
			opacity: [0.15, 0.2, 0.15],
			blur: '120px',
		},
		high: {
			opacity: [0.25, 0.3, 0.25],
			blur: '140px',
		},
	};

	const selectedIntensity = intensityLevels[intensity] || intensityLevels.medium;

	return (
		<div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					scale: [1, 1.3, 1],
					opacity: selectedIntensity.opacity,
					x: [0, 25, 0],
					y: [0, -15, 0],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className={`absolute top-20 right-20 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r ${gradientVariants[variant]} blur-[${selectedIntensity.blur}]`}
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					scale: [1, 1.4, 1],
					opacity: selectedIntensity.opacity,
					x: [0, -20, 0],
					y: [0, 20, 0],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 1,
				}}
				className={`absolute bottom-40 left-20 w-[35vw] h-[35vw] rounded-full bg-gradient-to-r ${gradientVariants[variant]} blur-[${selectedIntensity.blur}]`}
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					scale: [1, 1.2, 1],
					opacity: selectedIntensity.opacity,
					x: [0, 15, 0],
					y: [0, -10, 0],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 2,
				}}
				className={`absolute top-[40vh] left-[30vw] w-[40vw] h-[40vw] rounded-full bg-gradient-to-r ${gradientVariants[variant]} blur-[${selectedIntensity.blur}]`}
			/>
		</div>
	);
};
