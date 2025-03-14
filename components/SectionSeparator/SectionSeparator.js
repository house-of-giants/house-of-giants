'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const SectionSeparator = () => {
	const [binaryCount, setBinaryCount] = useState(48);
	const [binaryValues, setBinaryValues] = useState([]);

	useEffect(() => {
		// Calculate how many binary digits we need based on window width
		const calculateBinaryCount = () => {
			// Each binary digit takes up roughly 10px (8px + 2px gap)
			const count = Math.ceil(window.innerWidth / 10);
			setBinaryCount(count);
			// Generate initial binary values
			setBinaryValues(
				Array(count)
					.fill(0)
					.map(() => Math.round(Math.random()))
			);
		};

		// Initial calculation
		calculateBinaryCount();

		// Recalculate on window resize
		window.addEventListener('resize', calculateBinaryCount);

		// Cleanup
		return () => window.removeEventListener('resize', calculateBinaryCount);
	}, []);

	return (
		<div className="relative w-full h-8 py-8 bg-[--c-primary-dark] overflow-hidden font-mono">
			{/* Binary pattern container */}
			<div className="absolute inset-0 flex items-center justify-center gap-[2px] opacity-30">
				{binaryValues.map((value, i) => (
					<motion.div
						key={i}
						className={`w-2 h-2 text-[8px] ${i < binaryCount / 2 ? 'text-[#ff2a6d]' : 'text-[#9b4dff]'}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: [0.3, 1, 0.3] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							delay: i * 0.1,
							ease: 'easeInOut',
						}}
					>
						{value}
					</motion.div>
				))}
			</div>

			{/* Gradient underlay */}
		</div>
	);
};
