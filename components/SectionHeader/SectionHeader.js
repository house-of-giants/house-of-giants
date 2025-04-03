'use client';

import { motion } from 'framer-motion';

export const SectionHeader = ({ title, subtitle, accent, description, size }) => {
	const isSmallFont = size === 'small' ? 'text-[clamp(2.5rem,6vw,5rem)]' : 'text-[clamp(2.5rem,8vw,7rem)]';

	return (
		<div className="relative mb-16 md:mb-24 md:pl-16 pl-8">
			<motion.div
				className="relative space-y-4"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				{/* Category/Accent text */}
				<span className="block text-sm uppercase tracking-widest text-moon-rock/70 mb-2">{accent}</span>

				{/* Main Title */}
				<h2 className={`${isSmallFont} font-black leading-[1.1] tracking-tight text-moon-rock`}>{title}</h2>

				{/* Subtitle */}
				{subtitle && (
					<span className="block text-[clamp(1.5rem,4vw,3rem)] text-moon-rock leading-tight font-normal mt-4">
						{subtitle}
					</span>
				)}
			</motion.div>

			{/* Description */}
			{description && (
				<motion.div
					className="mt-8 md:mt-12 max-w-3xl"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="text-[clamp(1rem,1.25vw,1.25rem)] leading-relaxed text-moon-rock/80">{description}</div>
				</motion.div>
			)}

			{/* Vertical Gradient Line */}
			<motion.div
				className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-[#00ffe0] via-[#9b4dff] to-[#ff2a6d] opacity-50"
				initial={{ height: 0 }}
				whileInView={{ height: '100%' }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<div className="absolute inset-0 blur-[1px] bg-gradient-to-b from-[#00ffe0] via-[#9b4dff] to-[#ff2a6d] opacity-50" />
			</motion.div>
		</div>
	);
};
