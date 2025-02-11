'use client';

import { motion } from 'framer-motion';

export const MetricCard = ({ number, symbol, title, description }) => {
	return (
		<motion.div
			className="metric-card"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<div className="flex items-baseline">
				<span className="text-[clamp(5rem,10vw,8rem)] font-black leading-none -grad-header">{number}</span>
				<span className="text-[clamp(3rem,6vw,5rem)] font-black leading-none -grad-header ml-4">{symbol}</span>
			</div>
			<p className="font-serif text-[1.75rem] mt-8">{title}</p>
			<p className="text-wolf-gray text-lg mt-4">{description}</p>
		</motion.div>
	);
};
