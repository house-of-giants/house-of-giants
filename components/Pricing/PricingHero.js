import { Container } from '@/components/Container/Container';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button/Button';
import { CubeTransparentIcon, RocketLaunchIcon, ServerStackIcon } from '@heroicons/react/24/solid';

// Pricing Hero section
export const PricingHero = ({ title, subtitle, description }) => {
	return (
		<Container
			className="-has-background relative overflow-hidden min-h-[calc(100vh+var(--header-height))] flex flex-col justify-center px-4 md:px-8"
			background="var(--c-primary-dark)"
			pt="clamp(var(--sp-xl), 15vh, 4rem)"
			pb="clamp(var(--sp-xl), 15vh, 4rem)"
		>
			<div className="relative z-10 max-w-screen-2xl mx-auto w-full">
				{/* Title Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h1 className="mb-8">
						<span className="inline-block text-xs md:text-sm font-mono tracking-widest text-cyber-pink uppercase mb-4">
							Pricing
						</span>
						<span className="block text-6xl md:text-7xl font-black tracking-tight leading-none mb-2 font-sans uppercase text-white">
							<span className="block border-b border-cyber-pink/20 pb-6 mb-6">{title || 'HOUSE OF'}</span>
						</span>
					</h1>

					<p className="text-xl md:text-2xl text-moon-rock leading-relaxed mb-6 max-w-3xl mx-auto">
						{subtitle ||
							'Radically simple, tech-agnostic websites built to convert, scale, and look like you actually give a s**t.'}
					</p>

					<p className="text-lg text-moon-rock/70 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
						{description || 'Select the package that best fits your business needs and growth ambitions.'}
					</p>
				</motion.div>

				{/* Pricing Tables */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
					<motion.div
						className="bg-black/40 border-2 border-cyber-pink/40 rounded-lg backdrop-blur-sm overflow-hidden flex flex-col"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						whileHover={{ y: -5 }}
					>
						<div className="p-6 text-center border-b border-cyber-pink/20">
							<div className="w-16 h-16 mx-auto mb-4 bg-cyber-pink/10 rounded-full flex items-center justify-center">
								{/* Baseline Brawler - Foundation */}
								<CubeTransparentIcon className="w-8 h-8 text-cyber-pink/40" />
							</div>
							<h3 className="text-lg uppercase font-mono tracking-wider text-cyber-pink mb-2">BASELINE BRAWLER</h3>
							<div className="mt-4 mb-2">
								<span className="text-6xl font-black text-white">$15K</span>
							</div>
							<p className="text-moon-rock/70 text-sm">Best for small businesses</p>
						</div>

						<div className="p-6 flex-grow">
							<ul className="space-y-4">
								{[
									'Discovery & UX Planning Sprint',
									'3-4 custom layouts',
									'Clean, strategic content hierarchy',
									'Mobile first, performance optimized',
									'Light CMS setup',
									'Basic integrations',
									'1 round of design revisions + QA',
								].map((feature, idx) => (
									<li key={idx} className="flex items-center">
										<div className="w-5 h-5 mr-3 bg-cyber-pink/20 border border-cyber-pink/40 flex items-center justify-center">
											<div className="w-2 h-2 bg-cyber-pink"></div>
										</div>
										<span className="text-moon-rock">{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="p-6 flex flex-col gap-4 justify-center mt-auto">
							<Button href="#quick-contact" variant="cyberPink" className="w-full">
								Get Started
							</Button>
							<Button href="#baseline-brawler" variant="link" className="text-center text-cyber-pink ">
								What's included?
							</Button>
						</div>
					</motion.div>

					{/* Tier 2 - Growth Engine */}
					<motion.div
						className="bg-black/40 border-2 border-cyber-green/50 rounded-lg backdrop-blur-sm  flex flex-col relative z-10 md:scale-105 md:-mt-4 md:mb-4 md:shadow-2xl"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						whileHover={{ y: -5 }}
					>
						<div className="absolute -top-3 left-0 right-0 text-center">
							<span className="inline-block bg-cyber-green text-primary-dark px-4 py-1 text-xs uppercase font-mono tracking-wider">
								Most Popular
							</span>
						</div>
						<div className="p-6 text-center border-b border-cyber-green/20">
							<div className="w-16 h-16 mx-auto mb-4 bg-cyber-green/10 rounded-full flex items-center justify-center">
								{/* Growth Engine - Rocket */}
								<RocketLaunchIcon className="w-8 h-8 text-cyber-green/40" />
							</div>
							<h3 className="text-lg uppercase font-mono tracking-wider text-cyber-green mb-2">GROWTH ENGINE</h3>
							<div className="mt-4 mb-2">
								<span className="text-6xl font-black text-white">$25K</span>
							</div>
							<p className="text-moon-rock/70 text-sm">Perfect for growing businesses</p>
						</div>

						<div className="p-6 flex-grow">
							<ul className="space-y-4">
								{[
									'Full UX & conversion strategy',
									'6-8 custom layouts',
									'Modular component system',
									'Support for catalogs & directories',
									'Form flows & interactive tools',
									'Admin friendly backend',
									'SEO + metadata system',
									'Post-launch training',
								].map((feature, idx) => (
									<li key={idx} className="flex items-center">
										<div className="w-5 h-5 mr-3 bg-cyber-green/20 border border-cyber-green/40 flex items-center justify-center">
											<div className="w-2 h-2 bg-cyber-green"></div>
										</div>
										<span className="text-moon-rock">{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="p-6 flex flex-col gap-4 justify-center mt-auto">
							<Button href="#quick-contact" variant="cyberGreen" className="w-full">
								Get Started
							</Button>
							<Button href="#growth-engine" variant="link" className="text-center text-cyber-green ">
								What's included?
							</Button>
						</div>
					</motion.div>

					{/* Tier 3 - Flagship Flex */}
					<motion.div
						className="bg-black/40 border-2 border-cyber-purple/40 rounded-lg backdrop-blur-sm overflow-hidden flex flex-col"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						whileHover={{ y: -5 }}
					>
						<div className="p-6 text-center border-b border-cyber-purple/20">
							<div className="w-16 h-16 mx-auto mb-4 bg-cyber-purple/10 rounded-full flex items-center justify-center">
								{/* Flagship Flex - Server/Enterprise */}
								<ServerStackIcon className="w-8 h-8 text-cyber-purple/40" />
							</div>
							<h3 className="text-lg uppercase font-mono tracking-wider text-cyber-purple mb-2">FLAGSHIP FLEX</h3>
							<div className="mt-4 mb-2">
								<span className="text-6xl font-black text-white">$40K</span>
							</div>
							<p className="text-moon-rock/70 text-sm">For enterprise & complex projects</p>
						</div>

						<div className="p-6 flex-grow">
							<ul className="space-y-4">
								{[
									'Deep-dive workshops + planning',
									'Unlimited custom layouts',
									'Authenticated user flows',
									'API integration & real-time features',
									'Custom content types & portals',
									'Admin dashboard & CMS',
									'QA & staging pipeline',
									'Post-launch support window',
								].map((feature, idx) => (
									<li key={idx} className="flex items-center">
										<div className="w-5 h-5 mr-3 bg-cyber-purple/20 border border-cyber-purple/40 flex items-center justify-center">
											<div className="w-2 h-2 bg-cyber-purple"></div>
										</div>
										<span className="text-moon-rock">{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="p-6 flex flex-col gap-4 justify-center mt-auto">
							<Button href="#quick-contact" variant="cyberPurple" className="w-full">
								Get Started
							</Button>
							<Button href="#flagship-flex" variant="link" className="text-center text-cyber-purple">
								What's included?
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
		</Container>
	);
};
