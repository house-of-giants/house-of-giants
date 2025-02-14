'use client';

import { motion } from 'framer-motion';
import { Socials } from '../Social/Socials';

export const ContactFooter = () => (
	<motion.footer
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ delay: 0.2 }}
		className="font-mono py-16 relative bg-[var(--c-primary-dark)]"
	>
		{/* Gradient Border Top */}
		<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgba(0,255,224,0.3)] to-transparent" />

		<div className="max-w-3xl mx-auto px-6">
			<div className="flex flex-col items-center gap-12">
				{/* Cult Symbol */}
				<motion.div
					className="text-[rgba(0,255,224,0.6)] text-6xl"
					initial={{ rotate: 0 }}
					animate={{ rotate: 360 }}
					transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
				>
					👁️
				</motion.div>

				{/* Cult Message */}
				<div className="text-center space-y-2">
					<div className="text-white text-lg tracking-widest uppercase">
						<span className="text-[rgba(0,255,224,0.6)]">// </span>
						Join us.
					</div>
					<div className="text-white/60 text-sm">Follow the path to enlightenment</div>
				</div>

				<Socials theme="light" />
			</div>
		</div>
	</motion.footer>
);
