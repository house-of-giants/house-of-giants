'use client';

import { motion } from 'framer-motion';

// Philosophy Card Component
const PhilosophyCard = ({ title, description, delay = 0 }) => (
	<motion.div
		className="relative p-6 bg-gradient-to-br from-[rgba(22,22,22,0.5)] to-[rgba(58,41,86,0.7)] rounded-xl border border-gray-800 hover:border-[var(--c-accent)] overflow-hidden group transition-all duration-300"
		initial={{ opacity: 0, scale: 0.95 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5, delay }}
		whileHover={{ y: -5 }}
	>
		{/* Content with staggered animation */}
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.3, delay: delay + 0.2 }}
		>
			<div className="flex flex-col">
				<motion.h4
					className="text-2xl md:text-3xl font-bold text-white mb-3"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: delay + 0.3 }}
				>
					{title}
				</motion.h4>
				<p className="text-lg text-moon-rock leading-relaxed relative z-10 mb-0">{description}</p>
			</div>
		</motion.div>

		{/* Interactive shine effect on hover */}
		<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
	</motion.div>
);

export default PhilosophyCard;
