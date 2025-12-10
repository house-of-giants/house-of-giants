'use client';

import { motion } from 'framer-motion';

export const HeroContent = () => {
	return (
		<div className="relative z-10 flex flex-col justify-center w-full">
			{/* Main Content */}
			<div className="relative z-10 px-4 md:px-8">
				{/* Connected Scale Typography Layout */}
				<div className="relative mb-20 md:mb-32">
					<div className="mx-auto">
						{/* Tightened Typography Treatment */}
						<div className="relative">
							{/* HOUSE OF - Refined, Human Scale */}
							<motion.div
								className="text-[clamp(2rem,5vw,4rem)] text-moon-rock font-black tracking-tight mb-1 relative z-20 text-center leading-none"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
							>
								HOUSE OF
							</motion.div>

							{/* GIANTS - Fluid Full-Width Scale */}
							<motion.div
								className="relative overflow-visible w-full giants-fluid-text-container"
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
							>
								<div className="giants-fluid-text text-moon-rock font-black leading-[0.75] text-left">GIANTS</div>
							</motion.div>
						</div>

						{/* Content Grid */}
						<div className="grid grid-cols-12 gap-8 mt-16">
							{/* Left Column - Tagline */}
							<div className="col-span-12 lg:col-span-7">
								<motion.div
									className="space-y-6 max-w-2xl"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.8, delay: 0.8 }}
								>
									<div className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight text-moon-rock/90 tracking-tight text-left">
										We craft digital experiences
										<br />
										that command attention
									</div>

									<div className="w-12 h-[2px] bg-cyber-green"></div>

									<p className="text-[clamp(1rem,2vw,1.2rem)] text-moon-rock/70 leading-relaxed font-medium max-w-lg">
										High-performance websites and web applications for ambitious startups, QSR brands, and creative
										teams.
									</p>

									<p className="text-[clamp(0.9rem,1.5vw,1rem)] text-cyber-green leagin font-black uppercase tracking-wider">
										No templates&hellip;<span className="text-cyber-pink leading-1">No mercy</span>
									</p>
								</motion.div>
							</div>

							{/* Right Column - Supporting Elements */}
							<div className="col-span-12 lg:col-span-5 flex flex-col justify-start space-y-8 lg:pt-8">
								<motion.div
									className="space-y-4 text-left lg:text-right"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.8, delay: 1.2 }}
								>
									<div className="text-moon-rock/50 text-sm uppercase tracking-wider font-medium">Est. 2017</div>
									<div className="text-moon-rock/60 text-sm leading-relaxed max-w-xs lg:ml-auto">
										Building digital experiences that exceed expectations for over a decade
									</div>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
