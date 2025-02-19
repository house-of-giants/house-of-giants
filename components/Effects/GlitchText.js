'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const GlitchText = ({ text, className }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.h1
			className={`relative text-center ${className}`}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			<span className="block -grad-header relative z-10">{text}</span>

			{isHovered && (
				<>
					<span className="absolute inset-0 text-[#00ffe0] opacity-50 translate-x-[2px]">{text}</span>
					<span className="absolute inset-0 text-[#c1ff1d] opacity-50 -translate-x-[2px]">{text}</span>
				</>
			)}
		</motion.h1>
	);
};
