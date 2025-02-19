'use client';

import { motion } from 'framer-motion';

export const SectionHeader = ({ title, subtitle, accent, description }) => (
	<div className="relative mb-[var(--header-spacing)] md:pl-[4rem] pl-[2rem]">
		<motion.h2
			className="relative"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<span className="block text-[clamp(3rem,12vw,16rem)] font-black leading-[0.85] tracking-tight -grad-header">
				{title}
			</span>
			<span className="block text-[clamp(2rem,6vw,6rem)] text-white leading-[0.85] font-bold mt-4">{subtitle}</span>
		</motion.h2>

		<motion.div
			className="mt-[var(--title-spacing)] max-w-3xl relative"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<span className="block font-serif text-[clamp(1.25rem,2.5vw,2.5rem)] text-moon-rock italic mb-4 md:mb-6">
				{accent}
			</span>

			{description && (
				<div className="text-[clamp(1rem,1.5vw,1.5rem)] leading-relaxed text-moon-rock/80 max-w-[90vw] md:max-w-none">
					{description}
				</div>
			)}
		</motion.div>

		{/* Vertical Gradient Line */}
		<motion.div
			className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[#00ffe0] to-[#c1ff1d]"
			initial={{ height: 0 }}
			whileInView={{ height: '100%' }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		/>
	</div>
);
