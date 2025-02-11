'use client';

import { motion } from 'framer-motion';

export const MetricCard = ({ number, symbol, title, description }) => {
	return (
		<motion.div
			className="group relative p-8 rounded-lg border border-wolf-gray/10 transition-all duration-500 hover:-translate-y-2 bg-white/[0.03] backdrop-blur-lg"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			{/* Content */}
			<div className="relative">
				<div className="flex items-baseline gap-4">
					<span className="text-[clamp(5rem,10vw,8rem)] font-black leading-none -grad-header">{number}</span>
					<span className="text-[clamp(3rem,6vw,5rem)] font-black leading-none -grad-header">{symbol}</span>
				</div>
				<h3 className="font-serif text-[1.75rem] text-white mt-8">{title}</h3>
				<p className="text-wolf-gray/80 text-lg mt-4 leading-relaxed">{description}</p>
			</div>
		</motion.div>
	);
};
