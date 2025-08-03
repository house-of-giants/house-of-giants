'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import LazyImage from '@/components/Image/LazyImage';

export const NextCaseStudies = ({ nextCases, currentCase }) => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end end'],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

	return (
		<motion.div ref={containerRef} style={{ opacity, scale }} className="relative py-32">
			<div className="max-w-[var(--container-width)] mx-auto px-4 md:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-2 px-4 py-2 border border-cyber-green/20 rounded-lg mb-4"
					>
						<span className="text-cyber-green font-mono">DON&apos;T STOP NOW</span>
						<span className="text-cyber-green">⚡</span>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-4xl md:text-6xl font-black -grad-header mb-4"
					>
						Continue Exploring
					</motion.h2>
				</div>

				{/* Case Studies Grid */}
				<div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-8">
					{nextCases
						.filter((caseStudy) => caseStudy.title !== currentCase)
						.map((caseStudy, index) => (
							<Link key={caseStudy.title} href={caseStudy.url} className="group relative block">
								<motion.div
									initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 }}
									className="relative aspect-[16/9] overflow-hidden"
								>
									{/* Background Image */}
									<div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
										<LazyImage
											src={caseStudy.image}
											fill
											className="object-cover brightness-50 transition-all duration-700 group-hover:brightness-75"
											alt={caseStudy.title}
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
									</div>

									{/* Content Overlay */}
									<div className="relative h-full flex flex-col justify-end p-8">
										<div className="transform transition-transform duration-500 group-hover:-translate-y-4">
											<div className="flex items-center gap-2 mb-4">
												{caseStudy.tags.map((tag) => (
													<span
														key={tag}
														className="text-cyber-green text-sm font-mono px-2 py-1 border border-cyber-green/30 rounded"
													>
														{tag}
													</span>
												))}
											</div>

											<h3 className="text-3xl font-bold text-white mb-2">{caseStudy.title}</h3>

											<p className="text-moon-rock text-sm mb-4">{caseStudy.description}</p>

											<div className="flex items-center gap-2 text-cyber-green font-mono">
												<span>EXPLORE</span>
												<span className="transform transition-transform duration-500 group-hover:translate-x-2">→</span>
											</div>
										</div>
									</div>

									{/* Hover Effects */}
									<div className="absolute inset-0 border border-cyber-green/0 transition-all duration-500 group-hover:border-cyber-green/50" />
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										<div className="absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-cyber-green to-transparent group-hover:h-full transition-all duration-700" />
										<div className="absolute bottom-0 right-0 w-[2px] h-0 bg-gradient-to-t from-cyber-green to-transparent group-hover:h-full transition-all duration-700" />
									</div>
								</motion.div>
							</Link>
						))}
				</div>
			</div>
		</motion.div>
	);
};
