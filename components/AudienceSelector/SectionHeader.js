'use client';

import { motion } from 'framer-motion';

export const SectionHeader = ({ title, subtitle, emphasizedText, delay = 0 }) => (
	<>
		<motion.h2
			className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-moon-rock leading-tight"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay }}
		>
			{title}{' '}
			<span className="bg-gradient-to-r from-[var(--c-neon-sky)] to-[var(--c-cyber-green)] bg-clip-text text-transparent">
				{emphasizedText}
			</span>
		</motion.h2>
		<motion.p
			className="text-xl text-[var(--c-moon-rock)]/80 max-w-3xl mx-auto leading-relaxed"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay: delay + 0.1 }}
		>
			{subtitle}
		</motion.p>
	</>
);
