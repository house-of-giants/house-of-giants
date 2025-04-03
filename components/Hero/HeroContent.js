'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button/Button';

export const HeroContent = () => {
	return (
		<div className="relative z-10">
			{/* Interface Elements */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Right Side Interface Elements */}
				<motion.div
					className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4"
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 1.1 }}
				>
					{[...Array(3)].map((_, i) => (
						<motion.div
							key={i}
							className="flex items-center gap-2"
							animate={{ x: [0, 4, 0] }}
							transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
						>
							<motion.div
								className="w-1 h-1 bg-cyber-green/50"
								animate={{ opacity: [0.3, 0.7, 0.3] }}
								transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
							/>
							<motion.div
								className="w-12 h-[1px] bg-cyber-green/50"
								animate={{ scaleX: [1, 1.2, 1] }}
								transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Main Content */}
			<div className="relative z-10">
				{/* Main Title Stack */}
				<div className="space-y-4 mb-12 max-w-[1440px] mx-auto">
					<motion.h1
						className="text-[clamp(3rem,12vw,12rem)] font-black leading-[0.85] tracking-tight relative"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<span className="block -grad-header relative max-w-[90vw] md:max-w-[95vw]">
							Custom Web
							<div className="absolute -right-4 top-1/2 w-8 h-[1px] bg-cyber-green/30" />
						</span>
						<motion.span
							className="block text-white relative max-w-[90vw] md:max-w-[95vw]"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Development
						</motion.span>
						<motion.span
							className="block -grad-header relative max-w-[90vw] md:max-w-[95vw]"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							Studio
						</motion.span>
					</motion.h1>
				</div>

				{/* Description Text */}
				<motion.div
					className="max-w-4xl space-y-8"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<div className="text-[clamp(1.5rem,3vw,2.5rem)] text-moon-rock leading-tight">
						Dreaming big. <span className="text-cyber-green">Engineering bold.</span> Always built with purpose.
					</div>

					<div className="space-y-6">
						<div className="text-xl text-moon-rock/80 leading-relaxed">
							We design and build custom websites and web applications that drive business results—fast, scalable, and
							uniquely yours.{' '}
						</div>

						<div className="text-xl text-moon-rock/80 leading-relaxed">
							Based in Denver, we’re a digital studio that thinks like strategists, codes like engineers, and designs
							like we mean it. From enterprise WordPress builds to reactive app experiences, we don&apos;t do
							cookie-cutter &mdash; we build what works.
						</div>
					</div>
				</motion.div>

				{/* CTA Section */}
				<motion.div
					className="mt-12 flex flex-col md:flex-row items-center gap-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1 }}
				>
					<Button
						href="#contact"
						className="grad-border bg-[var(--c-primary-dark)] text-white font-mono hover:scale-105 transition-transform duration-300 text-base md:text-lg px-6 py-3 rounded-lg"
					>
						Start Your Project
					</Button>
					<Button
						href="#work"
						className="bg-black bg-opacity-30 text-white hover:bg-opacity-50 font-mono transition-all duration-300 text-base md:text-lg px-6 py-3 rounded-lg"
					>
						View Our Work &rarr;
					</Button>
				</motion.div>
			</div>
		</div>
	);
};
