'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import { SectionSeparator } from '@/components/SectionSeparator/SectionSeparator';
import ContactForm from '@/components/Contact/ContactForm';
import { Button } from '@/components/Button/Button';
import Link from 'next/link';
import WorkPortfolioSchema from '@/components/Schema/WorkPortfolioSchema';
import {
	getFeaturedCaseStudies,
	getNonFeaturedCaseStudies,
	getAllCategories,
	getCaseStudiesByCategory,
} from '@/utils/caseStudyUtils';
import { Star } from 'lucide-react';
import LazyImage from '@/components/Image/LazyImage';

export default function WorkPage() {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [filteredWork, setFilteredWork] = useState(null);

	const featuredWork = getFeaturedCaseStudies();
	const otherWork = getNonFeaturedCaseStudies();
	const categories = ['All', ...getAllCategories()];

	const handleCategoryFilter = (category) => {
		setSelectedCategory(category);
		if (category === 'All') {
			setFilteredWork(null);
		} else {
			const filtered = getCaseStudiesByCategory(category);
			setFilteredWork(filtered);
		}
	};

	const displayWork = filteredWork || otherWork;

	return (
		<>
			<WorkPortfolioSchema />
			<main className="relative text-gray-100" id="work">
				<FloatingGradients variant="green" intensity="low" />

				{/* Hero Section */}
				<Section count="1.0" title="Work Portfolio">
					<div className="relative min-h-screen flex items-center justify-center -mt-18 lg:-mt-24 2xl:-mt-36">
						<video
							src="/video/reel2022.webm"
							autoPlay
							muted
							loop
							className="w-full h-full object-cover absolute inset-0 brightness-50 opacity-10 blur-md"
						/>
						<Container className="relative z-10">
							<motion.div
								className="text-center"
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
							>
								<div className="px-4 py-2 border border-cyber-green/20 rounded-lg mb-8 inline-block">
									<span className="text-cyber-green">Portfolio</span>
									<span className="text-white ml-2">Showcase</span>
								</div>

								<h1 className="text-[clamp(3rem,12vw,12rem)] font-display font-black -grad-header text-center leading-[0.85] tracking-tight mb-8">
									Our Work
								</h1>

								<motion.p
									className="text-[clamp(1.5rem,4vw,2.5rem)] text-moon-rock text-center max-w-4xl mx-auto leading-[1.2] mb-12"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.2 }}
								>
									Digital experiences that push creative boundaries while delivering
									<span className="text-cyber-green"> real business results</span>
								</motion.p>

								<motion.div
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.4 }}
								>
									<Button href="#portfolio" variant="primary" size="xl">
										Explore Our Work
										<span className="text-cyber-green ml-2">↓</span>
									</Button>
								</motion.div>
							</motion.div>
						</Container>
					</div>
				</Section>

				<SectionSeparator />

				{/* Portfolio Section */}
				<Section count="2.0" title="Portfolio" id="portfolio">
					<Container pt="var(--section-spacing-top)" pb="var(--section-spacing-bottom)">
						{/* Featured Work Header */}
						<motion.div
							className="text-center mb-12"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<div className="inline-flex items-center gap-2 px-4 py-2 border border-cyber-green/20 rounded-lg mb-4">
								<Star className="w-4 h-4 text-cyber-green" />
								<span className="text-cyber-green font-mono">FEATURED</span>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Showcase Projects</h2>
							<p className="text-moon-rock text-lg max-w-2xl mx-auto">
								Our latest and most innovative work, showcasing the breadth of our expertise
							</p>
						</motion.div>

						{/* Featured Work - Hero Grid */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
							{featuredWork.map((item, index) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="group relative"
								>
									<Link href={item.url} className="block">
										{/* Card Container */}
										<div className="relative bg-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-green/30 transition-all duration-500 hover:bg-gray-900/70 group-hover:shadow-2xl group-hover:shadow-cyber-green/10 group-hover:-translate-y-1">
											{/* Image */}
											<div className="relative aspect-[4/3] overflow-hidden">
												<LazyImage
													src={item.image}
													alt={item.title}
													fill
													className="object-cover transition-transform duration-700 group-hover:scale-110"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
											</div>

											{/* Content */}
											<div className="p-6">
												{/* Category Badge */}
												<div className="inline-flex items-center px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded-full mb-4 group-hover:bg-cyber-green/20 group-hover:border-cyber-green/50 transition-all duration-300">
													<span className="text-cyber-green text-xs font-mono uppercase tracking-wider">
														{item.category}
													</span>
												</div>

												{/* Title */}
												<h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-green transition-colors duration-300">
													{item.title}
												</h3>

												{/* Description */}
												<p className="text-moon-rock/80 text-sm leading-relaxed mb-4 line-clamp-3">
													{item.description}
												</p>

												{/* Meta Info */}
												<div className="flex items-center justify-between text-xs text-moon-rock/60 mb-4">
													<span>{item.year}</span>
													<span>{item.industry}</span>
												</div>

												{/* CTA */}
												<div className="flex items-center text-cyber-green group-hover:text-white transition-colors duration-300">
													<span className="text-sm font-medium">View Case Study</span>
													<span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
														→
													</span>
												</div>
											</div>

											{/* Hover Effects */}
											<div className="absolute inset-0 border border-cyber-green/0 transition-all duration-500 group-hover:border-cyber-green/20 rounded-xl" />
										</div>
									</Link>
								</motion.div>
							))}
						</div>

						{/* Category Filter */}
						<motion.div
							className="mb-16"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<div className="text-center mb-8">
								<h3 className="text-2xl font-bold text-white mb-3">Filter by Service Type</h3>
								<p className="text-moon-rock text-base">Find the perfect example for your project</p>
							</div>
							<div className="flex flex-wrap gap-3 justify-center">
								{categories.map((category) => (
									<button
										key={category}
										onClick={() => handleCategoryFilter(category)}
										className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
											selectedCategory === category
												? 'border-cyber-green bg-cyber-green/10 text-cyber-green shadow-lg shadow-cyber-green/20'
												: 'border-gray-600 text-moon-rock hover:border-cyber-green/50 hover:text-cyber-green/70 hover:bg-gray-800/30'
										}`}
									>
										{category}
									</button>
								))}
							</div>
						</motion.div>

						{/* Other Work Header */}
						<motion.div
							className="text-center mb-12"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<h3 className="text-2xl font-bold text-white mb-3">More of Our Work</h3>
							<p className="text-moon-rock text-base max-w-2xl mx-auto">
								Additional projects showcasing our diverse expertise and creative approach
							</p>
						</motion.div>

						{/* Other Work */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--content-spacing)]">
							{displayWork.map((item, index) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: index * 0.1 }}
								>
									<Link href={item.url} className="group block relative rounded-lg overflow-hidden">
										<div className="relative aspect-video">
											<LazyImage
												src={item.image}
												alt={item.title}
												fill
												className="object-cover transition-transform duration-700 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
										</div>
										<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
											<div className="flex items-center gap-4 mb-3">
												<span className="text-sm uppercase tracking-wider text-cyber-green">
													{item.tags.join(' • ')}
												</span>
												<span className="text-moon-rock/60 text-sm">{item.year}</span>
											</div>
											<h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
											<p className="text-moon-rock/90 text-base max-w-md mb-3">{item.description}</p>
											<div className="flex items-center text-cyber-green group-hover:text-white transition-colors">
												<span>View Details</span>
												<span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
											</div>
										</div>
									</Link>
								</motion.div>
							))}
						</div>

						{/* Call to Action */}
						<motion.div
							className="mt-24 text-center"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
								Ready to create something <span className="text-cyber-green">extraordinary</span>?
							</h3>
							<p className="text-xl text-moon-rock max-w-2xl mx-auto mb-8">
								Let's discuss how we can bring your vision to life with innovative design and development.
							</p>
							<Button href="/contact" variant="primary" size="xl">
								Start Your Project
								<span className="text-cyber-green ml-2">→</span>
							</Button>
						</motion.div>
					</Container>
				</Section>

				<SectionSeparator />

				{/* Contact Form */}
				<ContactForm formSource="Work Portfolio" />
			</main>
		</>
	);
}
