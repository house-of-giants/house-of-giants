'use client';

import { motion } from 'framer-motion';

export const ScrollProgress = ({ progress }) => {
	return (
		<motion.div
			className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ffe0] to-[#c1ff1d] z-50 origin-left"
			style={{ scaleX: progress }}
		/>
	);
};
