'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export const BackButton = ({ onBack }) => (
	<motion.button
		onClick={onBack}
		className="flex items-center gap-3 text-[var(--c-moon-rock)]/70 hover:text-[var(--c-neon-sky)] transition-colors duration-300 group"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.5 }}
	>
		<ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
		<span className="text-sm uppercase tracking-wider font-mono">Back to selection</span>
	</motion.button>
);
