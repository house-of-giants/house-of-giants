'use client';

import { motion } from 'framer-motion';
import { ArrowLink } from '../UI/ArrowLink';
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
				{/* Top Small Text */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-8 "
				>
					<div className="inline-block font-serif italic text-moon-rock text-xl">
						<div className="inline-block w-12 h-[1px] bg-gradient-to-r from-[#00ffe0] to-[#c1ff1d] mr-4 align-middle" />
						Denver's Premier
					</div>
				</motion.div>

				{/* Main Title Stack */}
				<div className="space-y-4 mb-12 max-w-[1440px] mx-auto">
					<motion.h1
						className="text-[clamp(3rem,12vw,12rem)] font-black leading-[0.85] tracking-tight relative"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<span className="block -grad-header relative max-w-[90vw] md:max-w-[95vw]">
							Web
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
						Dreaming of innovation. <span className="text-white">Experimenting with passion.</span> Creating with
						purpose.
					</div>

					<div className="space-y-6">
						<div className="text-xl text-moon-rock/80 leading-relaxed">
							We craft award-winning interactive websites and web applications that transform brands into digital
							powerhouses through{' '}
							<motion.span
								className="relative inline-block"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.2 }}
							>
								<span className="relative z-10 text-cyber-green">beautiful</span>
								<motion.div
									className="absolute inset-0 bg-cyber-green/10 -z-10 rounded-lg"
									initial={{ scale: 0.8, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.3 }}
								/>
							</motion.span>
							, bold, thoughtful experiences.
						</div>

						<div className="text-xl text-moon-rock/80 leading-relaxed">
							Based in Denver, Colorado, we're a web development studio that pushes boundaries and breaks rules. From
							enterprise WordPress development to reactive web applications, to 3D experiences, we build digital
							solutions that make your competition irrelevant and your users say "holy shit."
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
