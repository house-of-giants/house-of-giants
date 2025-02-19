'use client';

import { motion } from 'framer-motion';

export const FloatingGradients = ({ variant }) => {
	const gradientVariants = {
		green: 'from-[#c1ff1d] to-[#00ffe0]',
		purple: 'from-[#9b4dff] to-[#ff2a6d]',
	};

	return (
		<div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.07, 0.09, 0.07],
					x: [0, 25, 0],
					y: [0, -15, 0],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className={`absolute top-20 right-20 w-[20vw] h-[20vw] rounded-full bg-gradient-to-r ${gradientVariants[variant]} blur-[100px]`}
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					scale: [1, 1.4, 1],
					opacity: [0.04, 0.09, 0.04],
					x: [0, -20, 0],
					y: [0, 20, 0],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 1,
				}}
				className={`absolute bottom-40 left-20 w-[25vw] h-[25vw] rounded-full bg-gradient-to-r ${gradientVariants[variant]} blur-[120px]`}
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.04, 0.09, 0.04],
					x: [0, 15, 0],
					y: [0, -10, 0],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 2,
				}}
				className={`absolute top-[40vh] left-[30vw] w-[30vw] h-[30vw] rounded-full bg-gradient-to-r ${gradientVariants[variant]} blur-[140px]`}
			/>
		</div>
	);
};
