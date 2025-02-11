'use client';

import { motion } from 'framer-motion';

export const GradientButton = ({ href, children, disabled, onClick }) => {
	return (
		<>
			{href ? (
				<motion.a
					href={href}
					className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#00ffe0] to-[#c1ff1d] 
                 text-black font-bold py-4 px-8 rounded-full overflow-hidden"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					disabled={disabled}
				>
					<div className="relative z-10">{children}</div>
					<motion.div
						className="absolute inset-0 bg-white"
						initial={{ x: '100%' }}
						whileHover={{ x: 0 }}
						transition={{ duration: 0.3 }}
					/>
				</motion.a>
			) : (
				<motion.button
					className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#00ffe0] to-[#c1ff1d] 
                 text-black font-bold py-4 px-8 rounded-full overflow-hidden"
					onClick={onClick}
				>
					{children}
				</motion.button>
			)}
		</>
	);
};
