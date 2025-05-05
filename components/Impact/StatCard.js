'use client';

import { motion } from 'framer-motion';

// Stat Card Component
const StatCard = ({ value, description }) => (
	<motion.div
		className="relative rounded-xl px-6 py-8 bg-[#1a1f24]/70  backdrop-blur-sm hover:translate-y-[-3px] transition-all duration-300 group"
		initial={{ opacity: 0, y: 10 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5, ease: 'easeOut' }}
	>
		<div className="flex flex-col items-start text-left">
			<div className="text-5xl font-bold tracking-tight mb-3 relative inline-block gradient-text-anim">{value}</div>
			<p className="text-sm uppercase tracking-wider font-medium text-[var(--c-moon-rock)] mt-4 leading-relaxed">
				{description}
			</p>
		</div>
	</motion.div>
);

export default StatCard;
