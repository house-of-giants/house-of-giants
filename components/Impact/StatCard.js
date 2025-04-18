'use client';

import { motion } from 'framer-motion';

// Stat Card Component
const StatCard = ({ value, description }) => (
	<motion.div
		className="relative p-6 bg-gradient-to-br from-[rgba(22,22,22,0.5)] to-[rgba(58,41,86,0.7)] rounded-xl border border-gray-800 hover:border-[var(--c-accent)] overflow-hidden group transition-all duration-300"
		initial={{ opacity: 0, scale: 0.9 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5 }}
		whileHover={{ y: -5 }}
	>
		{/* Content with staggered animation */}
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.3, delay: 0.2 }}
		>
			<div className="flex flex-col items-center">
				<motion.div
					className="text-5xl font-bold text-white mb-3"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.3 }}
				>
					<span className="text-[var(--c-accent)]">{value}</span>
				</motion.div>
				<p className="text-lg text-moon-rock leading-relaxed text-center relative z-10 mb-0">{description}</p>
			</div>
		</motion.div>

		{/* Interactive shine effect on hover */}
		<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
	</motion.div>
);

export default StatCard;
