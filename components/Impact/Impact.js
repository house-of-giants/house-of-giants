'use client';

import { motion } from 'framer-motion';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const metrics = [
	{
		number: 285,
		symbol: '%',
		title: 'Increase in page views',
		description: 'More eyes on your brand means more conversion opportunities',
		icon: (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
				/>
			</svg>
		),
	},
	{
		number: 91,
		symbol: '%',
		title: 'Boost in user engagement',
		description: 'Fresh audiences discovering and interacting with your brand',
		icon: (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
				/>
			</svg>
		),
	},
	{
		number: 10,
		symbol: '+',
		title: 'Years of excellence',
		description: 'A decade of pushing boundaries and delivering results',
		icon: (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
];

const AnimatedCounter = ({ target, duration = 2, symbol }) => {
	const [count, setCount] = useState(0);
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	useEffect(() => {
		let start = 0;
		const end = parseInt(target);

		if (!inView) return;

		// Calculate the increment based on animation duration and target value
		const incrementTime = (duration * 1000) / end;

		// For smaller numbers, we want smoother animation
		const timer = setInterval(() => {
			start += 1;
			setCount(start);
			if (start >= end) clearInterval(timer);
		}, incrementTime);

		return () => {
			clearInterval(timer);
		};
	}, [inView, target, duration]);

	return (
		<span ref={ref} className="font-black text-white">
			{count}
			{symbol}
		</span>
	);
};

export const Impact = () => {
	return (
		<Section count="6.0" title="Impact">
			<Container pt="var(--section-spacing-top)" pb="var(--section-spacing-bottom)">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="text-center max-w-4xl mx-auto mb-20"
				>
					<div className="mb-4">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--c-neon-sky)] to-[var(--c-cyber-green)] font-semibold tracking-wider uppercase text-sm">
							Real Impact. Real Results.
						</span>
					</div>

					<h2 className="text-5xl md:text-6xl font-black mb-8 text-white">Not just pretty pixels</h2>

					<div className="relative">
						<p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
							We don't just create beautiful websites — we build digital experiences that transform businesses with
							measurable results.
						</p>

						<div className="h-px w-24 bg-gradient-to-r from-[var(--c-neon-sky)] to-[var(--c-cyber-green)] mx-auto"></div>
					</div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
					{metrics.map((metric, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
							className="relative group"
						>
							<div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/5 p-6 md:p-8 h-full overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:shadow-black/20 hover:translate-y-[-8px]">
								{/* Metric Number */}
								<div className="flex items-center space-x-4 mb-6">
									<div>
										<h3 className="text-5xl mb-0 font-black tracking-tight">
											<AnimatedCounter target={metric.number} symbol={metric.symbol} />
										</h3>
									</div>
								</div>

								{/* Line separator */}
								<div className="h-px w-16 bg-gradient-to-r from-[var(--c-neon-sky)] to-[var(--c-cyber-green)] mb-6 opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-500"></div>

								{/* Title and Description */}
								<h4 className="text-xl font-bold text-white mb-3">{metric.title}</h4>
								<p className="text-base text-white/60 group-hover:text-white/80 transition-colors">
									{metric.description}
								</p>

								{/* Decorative element */}
								<div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[var(--c-neon-sky)]/5 to-transparent rounded-tl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							</div>
						</motion.div>
					))}
				</div>
			</Container>
		</Section>
	);
};
