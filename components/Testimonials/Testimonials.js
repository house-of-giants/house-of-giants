'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Testimonials = ({ noHeader = false }) => {
	const isMobile = useMediaQuery('(max-width: 1024px)');
	const [activeIndex, setActiveIndex] = useState(1);
	const [isAutoplay, setIsAutoplay] = useState(true);

	const testimonials = [
		{
			quote:
				'They even took the time for in-depth research before calls which proved to me they understood the history and path.',
			author: 'Bodie Johnson',
			title: 'CEO & Owner, BackForty Management',
			color: 'from-teal-400 to-emerald-300',
		},
		{
			quote:
				'Our website looks fantastic and we are getting more business off of it than we previously were. HoG did a great job listening to our needs and designing a website that looks and runs fantastic.',
			author: 'Kathleen Lannes',
			title: 'Sales Manager, Longero',
			color: 'from-violet-400 to-purple-500',
		},
		{
			quote:
				'I was most impressed with how seriously they took my ideas and incorporated them into their awesome design ability.',
			author: 'Sheryl Glubok',
			title: 'Independent Filmmaker',
			color: 'from-cyan-300 to-blue-400',
		},
		{
			quote:
				"The outcome has been fantastic, as we're successfully generating new people who want to get involved in our program.",
			author: 'Ann Marie Beresford',
			title: 'Executive Director, Adaptive Sports Association',
			color: 'from-lime-300 to-green-400',
		},
		{
			quote: 'House of Giants was really forward-thinking in their design.',
			author: 'Devan Crean',
			title: 'Former Marketing & Communications Manager, Air Methods',
			color: 'from-amber-300 to-orange-400',
		},
		{
			quote: 'They do a great job at getting to know the brand and investing in our collaboration.',
			author: 'Katie Zak',
			title: 'Marketing Director, Untapped Learning',
			color: 'from-rose-400 to-pink-500',
		},
	];

	useEffect(() => {
		let interval;
		if (isAutoplay) {
			interval = setInterval(() => {
				setActiveIndex((prev) => (prev + 1) % testimonials.length);
			}, 8000);
		}
		return () => clearInterval(interval);
	}, [isAutoplay, testimonials.length]);

	const handleNext = () => {
		setIsAutoplay(false);
		setActiveIndex((prev) => (prev + 1) % testimonials.length);
	};

	const handlePrev = () => {
		setIsAutoplay(false);
		setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	const handleDotClick = (index) => {
		setIsAutoplay(false);
		setActiveIndex(index);
	};

	return (
		<div className="py-24 relative overflow-hidden">
			{!noHeader && (
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16 md:mb-24"
				>
					<h2 className="relative inline-block">
						<span className="block text-[clamp(3rem,8vw,6rem)] font-black leading-[0.85] -grad-header">Don't take</span>
						<span className="block text-[clamp(3rem,8vw,6rem)] text-white leading-[0.85] font-bold mt-4">
							our word for it.
						</span>
					</h2>
				</motion.div>
			)}

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="relative">
					{/* Main testimonial */}
					<div className="relative h-auto md:h-[400px] mb-10">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeIndex}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5 }}
								className="relative z-10"
							>
								<div className="bg-white/[0.06] backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10 overflow-hidden">
									<div className="absolute -z-10 inset-0 bg-gradient-to-br opacity-5 from-white/5 to-transparent"></div>

									{/* Quotation mark */}
									<div className="absolute top-4 left-6 text-8xl font-serif text-white/5">"</div>

									<div className="max-w-4xl mx-auto">
										<blockquote className="relative">
											<div
												className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial ${testimonials[activeIndex].color} opacity-10 blur-3xl rounded-full`}
											></div>
											<p className="text-xl md:text-3xl lg:text-4xl font-serif font-light leading-relaxed text-white italic">
												{testimonials[activeIndex].quote}
											</p>

											<div className="mt-8 flex items-center">
												<div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
												<div className="px-4">
													<div
														className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonials[activeIndex].color} flex items-center justify-center`}
													>
														<span className="text-lg font-bold text-black">
															{testimonials[activeIndex].author.charAt(0)}
														</span>
													</div>
												</div>
												<div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
											</div>

											<footer className="mt-4 text-center">
												<p className="font-medium text-white/90">{testimonials[activeIndex].author}</p>
												<p className="text-sm text-white/60">{testimonials[activeIndex].title}</p>
											</footer>
										</blockquote>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Navigation controls */}
					<div className="flex justify-between items-center">
						<button
							className="group relative h-12 w-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/20"
							onClick={handlePrev}
							aria-label="Previous testimonial"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="group-hover:text-[var(--c-cyber-green)] transition-colors text-white"
							>
								<path
									d="M12.5 16.25L5.25 9L12.5 1.75"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<div className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 opacity-0 group-hover:opacity-30 blur-sm transition-opacity"></div>
						</button>

						<div className="flex items-center space-x-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => handleDotClick(index)}
									className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
										activeIndex === index
											? `w-10 bg-gradient-to-r ${testimonials[index].color}`
											: 'bg-white/20 hover:bg-white/40'
									}`}
									aria-label={`Go to testimonial ${index + 1}`}
								/>
							))}
						</div>

						<button
							className="group relative h-12 w-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/20"
							onClick={handleNext}
							aria-label="Next testimonial"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="group-hover:text-[var(--c-cyber-green)] transition-colors text-white"
							>
								<path
									d="M7.5 16.25L14.75 9L7.5 1.75"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<div className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 opacity-0 group-hover:opacity-30 blur-sm transition-opacity"></div>
						</button>
					</div>
				</div>

				{/* Preview of other testimonials (desktop only) */}
				{!isMobile && (
					<div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: index === activeIndex ? 0.5 : 1,
									y: 0,
									scale: 1,
								}}
								transition={{ duration: 0.4 }}
								className={index === activeIndex ? 'pointer-events-none' : ''}
							>
								<button
									onClick={() => handleDotClick(index)}
									disabled={index === activeIndex}
									className={`w-full h-full text-left bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08] border ${
										index === activeIndex ? `border-[var(--c-cyber-green)]/30` : 'border-white/5 hover:border-white/20'
									} rounded-xl p-4 transition-all duration-300 ${
										index === activeIndex ? 'opacity-50' : 'hover:scale-[1.02] hover:shadow-lg hover:shadow-black/20'
									}`}
								>
									<p className="text-sm text-white/70 line-clamp-3 group-hover:text-white/90 transition-colors">
										"{testimonial.quote}"
									</p>
									<div className="mt-2 flex items-center gap-2">
										<div
											className={`w-6 h-6 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center flex-shrink-0`}
										>
											<span className="text-xs font-bold text-black">{testimonial.author.charAt(0)}</span>
										</div>
										<p className="text-xs text-white/50 group-hover:text-white/80 transition-colors font-medium mb-0">
											{testimonial.author}
										</p>
									</div>
								</button>
							</motion.div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Testimonials;
