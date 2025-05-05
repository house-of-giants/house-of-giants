'use client';

import { motion } from 'framer-motion';

export const SectionSeparator = () => {
	return (
		<div className="relative w-full h-8 py-8 bg-[--c-primary-dark] overflow-hidden">
			<div className="absolute inset-0 flex items-center justify-center">
				<motion.div
					className="w-full h-[1px] bg-gradient-to-r  from-cyber-pink via-cyber-purple to-cyber-blue opacity-20"
					animate={{
						backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{
						backgroundSize: '200% 100%',
					}}
				/>
			</div>
		</div>
	);
};
