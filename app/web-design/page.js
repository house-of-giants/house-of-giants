'use client';

import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { Button } from '@/components/Button/Button';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import { SectionSeparator } from '@/components/SectionSeparator/SectionSeparator';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TechCard } from '@/components/Services/TechCard';
import PhilosophyCard from '@/components/Philosophy/PhilosophyCard';
import { WorkCard } from '@/components/Work/WorkCard';
import { work } from '@/data/work';
import { ServiceSchema } from '@/components/Schema/ServiceSchema';
import Link from 'next/link';

// Main Page Component
export default function WebDesign() {
	// Design services data
	const designServices = [
		{
			title: 'Immersive Web Experiences',
			category: 'User Experience Design',
			icon: <div className="text-4xl font-bold text-white">👁👁️️</div>,
			description:
				'We go beyond fancy visuals to build true web applications designed for speed, engagement, and next-level user flows that keep visitors coming back for more.',
			features: [
				'Advanced Front-End Engineering',
				'Responsive & Intuitive UI/UX',
				'Real-Time Data & Dynamic Interfaces',
			],
		},
		{
			title: 'UX Architecture',
			category: 'Information Design',
			icon: <div className="text-4xl font-bold text-white">🏗️</div>,
			description:
				"We don't just build interfaces – we architect digital experiences that users actually want to use. Our deep-dive research ensures every pixel serves a purpose.",
			features: ['User Research & Personas', 'Information Architecture', 'Interaction Design Systems'],
		},
		{
			title: 'Visual Design',
			category: 'Brand Experience',
			icon: <div className="text-4xl font-bold text-white">🎨</div>,
			description:
				"We create visually stunning designs that communicate your brand's personality and values while guiding users toward meaningful interactions and conversions.",
			features: ['Brand Identity Integration', 'Visual Hierarchy Systems', 'Animation & Microinteractions'],
		},
		{
			title: 'Design Systems',
			category: 'Scalable Foundations',
			icon: <div className="text-4xl font-bold text-white">🧱</div>,
			description:
				'We build comprehensive design systems that maintain consistency across your digital presence while enabling scale and flexibility as your brand evolves.',
			features: ['Component Libraries', 'Style Guidelines', 'Design Tokens & Variables'],
		},
	];

	// Philosophy data
	const philosophyItems = [
		{
			title: 'Purpose Over Pretty',
			description:
				'Every design decision is intentional. We prioritize user goals and business outcomes over fleeting design trends.',
		},
		{
			title: 'Function & Form',
			description:
				"Beautiful doesn't mean effective. We blend aesthetics with functionality to create designs that work as good as they look.",
		},
		{
			title: 'User Centered',
			description:
				'We obsess over user behavior. By understanding your audience, we create experiences that feel intuitive and engaging.',
		},
	];

	return (
		<main className="relative bg-[#1a1f24] text-gray-100">
			<ServiceSchema service="web-design" />
			<FloatingGradients variant="purple" intensity="low" />

			{/* Hero Section */}
			<Section count="0.0" title="Digital Experiences">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
							<h1 className="text-5xl md:text-7xl font-900 mb-6 -grad-header">
								<span className="block text-[var(--c-accent)]">Designed for Impact.</span>
								<span className="block">Built to Perform.</span>
							</h1>
							<p className="text-lg md:text-xl text-moon-rock leading-relaxed mb-8">
								We create digital experiences that cut through the clutter and deliver real results. Thoughtfully
								designed, strategically built, and engineered for businesses that refuse to blend in.
							</p>
							<div className="flex flex-wrap gap-4">
								<Button href="/contact" variant="primary">
									Start Your Project
									<span className="text-[var(--c-accent)] ml-2">→</span>
								</Button>
								<Button href="#services" variant="secondary">
									Explore Services
								</Button>
							</div>
						</motion.div>
						<motion.div
							className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-80"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<motion.div
									className="grid grid-cols-3 grid-rows-3 gap-4 p-8 transform rotate-3"
									initial={{ rotate: 0 }}
									animate={{ rotate: 3 }}
									transition={{ duration: 0.5, delay: 0.4 }}
								>
									{[...Array(9)].map((_, index) => (
										<motion.div
											key={index}
											className={`bg-black bg-opacity-40 rounded-lg h-24 w-24 flex items-center justify-center border-2 ${
												index === 4 ? 'border-white bg-[var(--c-accent)] bg-opacity-70 scale-110' : 'border-indigo-400'
											}`}
											initial={{ y: 20, opacity: 0 }}
											animate={{
												y: index % 3 === 1 ? 8 : index % 3 === 0 ? -8 : 0,
												opacity: 1,
											}}
											transition={{
												duration: 0.5,
												delay: 0.6 + index * 0.1,
												y: {
													duration: 2,
													repeat: Infinity,
													repeatType: 'reverse',
													ease: 'easeInOut',
												},
											}}
										/>
									))}
								</motion.div>
							</div>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* Web Design Services - Updated to match Web Development Services */}
			<Section count="1.0" title="Design Services" id="services">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="Web Design"
						subtitle="that breaks the mold."
						accent="Denver's digital landscape is competitive."
						description="We create immersive web experiences that help you stand out and connect with your audience in meaningful ways."
					/>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
						{designServices.map((service, index) => (
							<TechCard
								key={`${service.title}-${index}`}
								title={service.title}
								category={service.category}
								icon={service.icon}
								description={service.description}
								features={service.features}
								index={index}
							/>
						))}
					</div>

					{/* Web Design Philosophy - Updated to match web development philosophy layout */}
					<div className="mt-16">
						<motion.div
							className="relative py-14 px-10 rounded-2xl bg-gradient-to-br from-deep-plum/60 to-primary-dark overflow-hidden"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<h3 className="text-3xl font-bold mb-6 relative z-10">Our Design Philosophy</h3>
							<p className="mb-8 text-lg text-moon-rock leading-relaxed max-w-4xl relative z-10">
								At House of Giants, we believe design is more than aesthetics—it's a strategic tool that solves real
								business problems. Our approach balances visual impact with functional excellence, creating experiences
								that engage users and drive meaningful actions.
							</p>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 relative z-10">
								{philosophyItems.map((item, index) => (
									<PhilosophyCard key={index} title={item.title} description={item.description} delay={index * 0.1} />
								))}
							</div>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* Portfolio Teaser */}
			<Section count="2.0" title="Portfolio">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="Our Work"
						subtitle="speaks for itself."
						accent="See the results of our approach."
						description="Check out some of our recent Denver web design projects that showcase our capabilities."
					/>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
						{work.map((item, index) => (
							<WorkCard
								key={index}
								title={item.title}
								type={item.type}
								img={item.img}
								url={item.url}
								featured={item.featured}
							/>
						))}
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* Denver Focus - Updated to match web-development page style */}
			<Section count="3.0" title="Denver Focus">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
						<div className="flex flex-col space-y-8">
							<motion.div
								className="bg-black bg-opacity-20 p-8 rounded-xl border border-gray-800"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<h3 className="text-4xl font-bold -grad-header mb-4 text-white">
									Denver Web Design <span className="text-[var(--c-accent)]">That Stands Out</span>
								</h3>
								<p className="text-lg text-moon-rock leading-relaxed">
									The Denver market is unique, with its blend of outdoor lifestyle, tech innovation, and creative
									energy. At House of Giants, we live and breathe the Denver ethos, creating designs that resonate with
									the local market.
								</p>

								<p className="text-lg text-moon-rock leading-relaxed mb-0">
									From sleek startup platforms to{' '}
									<Link href="/restaurant-websites" className="text-[var(--c-accent)] hover:underline">
										restaurant websites
									</Link>{' '}
									that move burgers and boost brand love—we build digital experiences that convert.
								</p>
							</motion.div>

							{/* Three Features */}
							<motion.div
								className="bg-black bg-opacity-30 p-6 rounded-xl border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<div className="flex items-start">
									<div className="text-[var(--c-accent)] text-3xl mr-4 mt-1">✅</div>
									<div>
										<h4 className="font-bold -grad-header font-serif mb-0">Local Business Understanding</h4>
										<p className="text-lg text-moon-rock leading-relaxed mb-0">
											We know what Denver customers respond to and how to position your brand in the local market for
											maximum impact and engagement.
										</p>
									</div>
								</div>
							</motion.div>

							<motion.div
								className="bg-black bg-opacity-30 p-6 rounded-xl border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<div className="flex items-start">
									<div className="text-[var(--c-accent)] text-3xl mr-4 mt-1">✅</div>
									<div>
										<h4 className="font-bold -grad-header font-serif mb-0">Industry-Specific Design</h4>
										<p className="text-lg text-moon-rock leading-relaxed mb-0">
											Our designs are tailored for Denver's tech, outdoor, healthcare, and hospitality sectors, with an
											understanding of each industry's unique needs and audience expectations.
										</p>
									</div>
								</div>
							</motion.div>

							<motion.div
								className="bg-black bg-opacity-30 p-6 rounded-xl border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3 }}
							>
								<div className="flex items-start">
									<div className="text-[var(--c-accent)] text-3xl mr-4 mt-1">✅</div>
									<div>
										<h4 className="font-bold -grad-header font-serif mb-0">Denver-Focused SEO</h4>
										<p className="text-lg text-moon-rock leading-relaxed mb-0">
											We optimize every design to improve local search rankings, ensuring your business appears in front
											of Denver customers actively looking for your products or services.
										</p>
									</div>
								</div>
							</motion.div>
						</div>

						<motion.div
							className="relative rounded-xl overflow-hidden h-full md:min-h-[600px] border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300"
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
							<Image
								src="/images/domdesign.jpg"
								alt="Dominic designing a website"
								className="object-cover h-full w-full"
								width={1035}
								height={800}
							/>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* CTA Section */}
			<Section count="4.0" title="Ready to build something extraordinary?">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<motion.div
						className="text-center max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Ready for a website that <span className="text-[var(--c-accent)]">works as hard</span> as you do?
						</h2>
						<p className="text-lg text-moon-rock leading-relaxed mb-8">
							Let's create a digital experience that sets you apart in Denver's competitive market.
						</p>
						<div className="mt-8">
							<Button href="/contact" variant="primary">
								Get in Touch
								<span className="text-[var(--c-accent)] ml-2">→</span>
							</Button>
						</div>
					</motion.div>
				</Container>
			</Section>
		</main>
	);
}
