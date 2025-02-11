'use client';

import { motion } from 'framer-motion';

export const FloatingGradients = () => {
	return (
		<div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
			<motion.div
				className="absolute top-20 right-20 w-[20vw] h-[20vw] rounded-full bg-gradient-to-r from-[#ff2a6d] to-[#9b4dff] blur-[100px]"
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
			/>
			<motion.div
				className="absolute bottom-40 left-20 w-[25vw] h-[25vw] rounded-full bg-gradient-to-r from-[#9b4dff] to-[#ff2a6d] blur-[120px]"
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
			/>
			<motion.div
				className="absolute top-[40vh] left-[30vw] w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-[#ff2a6d] via-[#c431ff] to-[#9b4dff] blur-[140px]"
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
			/>
		</div>
	);
};
