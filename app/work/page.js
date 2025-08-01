'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import { SectionSeparator } from '@/components/SectionSeparator/SectionSeparator';
import ContactForm from '@/components/Contact/ContactForm';
import LazyImage from '@/components/Image/LazyImage';
import { Button } from '@/components/Button/Button';
import Link from 'next/link';

const workData = [
	{
		title: 'BackForty Management',
		description:
			'A digital experience that breaks the conventional mold for a 20+ year artist management and music supervision firm.',
		image: '/images/backfortytransitions.gif',
		tags: ['Web Design', 'Web Development', 'Brand Evolution'],
		url: '/work/backforty',
		featured: true,
		year: '2023',
		client: 'BackForty Management',
	},
	{
		title: 'Shakey Graves',
		description:
			'An innovative interactive experience for the "Movie of the Week" album featuring AI-powered movie generation.',
		image: '/images/shakeycard.jpg',
		tags: ['Web Design', 'AI Integration', 'Interactive Experience'],
		url: '/work/shakey-graves',
		year: '2021',
		client: 'Shakey Graves',
	},
	{
		title: 'Hayashi Whisky',
		description:
			'A luxury web experience that captures the artistry and tranquility of Okinawan island life in premium whisky.',
		image: '/images/hayashicard.jpg',
		tags: ['Web Design', 'Luxury Branding', 'Visual Storytelling'],
		url: '/work/hayashi',
		year: '2022',
		client: 'Hayashi Whisky',
	},
];

export default function WorkPage() {
	return (
		<main className="relative text-gray-100" id="work">
			<FloatingGradients variant="green" intensity="low" />

			{/* Hero Section */}
			<Section count="1.0" title="Work Portfolio">
				<div className="relative min-h-screen flex items-center justify-center -mt-18 lg:-mt-24 2xl:-mt-36">
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
				<Container
					className="-has-background relative z-10"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="Featured Work"
						subtitle="that speaks for itself."
						accent="Pushing pixels and breaking boundaries since day one."
						description="Each project tells a unique story of innovation, creativity, and strategic thinking. Explore the case studies that showcase our approach to digital experiences."
					/>

					{/* Featured Work */}
					{workData
						.filter((item) => item.featured)
						.map((item, index) => (
							<motion.div
								key={item.title}
								className="mb-[var(--content-spacing)]"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
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
									<div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
										<div className="flex items-center gap-4 mb-4">
											<span className="text-sm uppercase tracking-wider text-cyber-green">{item.tags.join(' • ')}</span>
											<span className="text-moon-rock/60 text-sm">{item.year}</span>
										</div>
										<h3 className="text-2xl md:text-4xl font-bold text-white mb-3">{item.title}</h3>
										<p className="text-moon-rock/90 text-base md:text-lg max-w-2xl mb-4">{item.description}</p>
										<div className="flex items-center text-cyber-green group-hover:text-white transition-colors">
											<span className="text-lg">View Case Study</span>
											<span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
										</div>
									</div>
								</Link>
							</motion.div>
						))}

					{/* Other Work */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--content-spacing)]">
						{workData
							.filter((item) => !item.featured)
							.map((item, index) => (
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
	);
}
