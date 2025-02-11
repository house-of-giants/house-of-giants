'use client';

import { motion } from 'framer-motion';

export const ContactFooter = () => (
	<motion.footer
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ delay: 0.2 }}
		className="font-mono pt-16 relative bg-[var(--c-primary-dark)]"
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

				{/* Social Links */}
				<div className="flex items-center gap-12 pb-16">
					<a
						href="https://twitter.com/_houseofgiants"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300"
					>
						<span className="text-[rgba(0,255,224,0.8)] group-hover:text-[rgba(0,255,224,1)]">Twitter</span>
						<span className="text-[rgba(0,255,224,0.2)] text-sm">[01]</span>
					</a>
					<a
						href="https://instagram.com/_houseofgiants"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300"
					>
						<span className="text-[rgba(0,255,224,0.8)] group-hover:text-[rgba(0,255,224,1)]">Instagram</span>
						<span className="text-[rgba(0,255,224,0.2)] text-sm">[02]</span>
					</a>
					<a
						href="https://linkedin.com/company/houseofgiants"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300"
					>
						<span className="text-[rgba(0,255,224,0.8)] group-hover:text-[rgba(0,255,224,1)]">LinkedIn</span>
						<span className="text-[rgba(0,255,224,0.2)] text-sm">[03]</span>
					</a>
				</div>
			</div>
		</div>
	</motion.footer>
);
