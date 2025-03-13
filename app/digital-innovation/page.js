'use client';

import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { Button } from '@/components/Button/Button';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import { SectionSeparator } from '@/components/SectionSeparator/SectionSeparator';
import { ThreeJsIcon, AIIcon } from '@/components/Icons/TechIcons';
import { motion } from 'framer-motion';
import { TechCard } from '@/components/Services/TechCard';
import Image from 'next/image';
import StatCard from '@/components/Impact/StatCard';
import { ServiceSchema } from '@/components/Schema/ServiceSchema';

// Process Step Component
const ProcessStep = ({ number, title, description, features }) => (
	<motion.div
		className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 items-start"
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5 }}
	>
		<div className="bg-black bg-opacity-50 p-6 rounded-xl text-center">
			<div className="text-5xl font-bold text-[var(--c-accent)]">{number}</div>
			<div className="mt-2 text-xl font-bold">{title}</div>
		</div>
		<div>
			<h3 className="text-2xl font-bold mb-4">{description}</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
				{features.map((feature, index) => (
					<div
						key={index}
						className="bg-black bg-opacity-30 p-5 rounded-lg border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300"
					>
						<h4 className="font-bold mb-2">{feature.title}</h4>
						<p className="text-sm text-moon-rock leading-relaxed">{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	</motion.div>
);

export default function DigitalInnovation() {
	// Innovation services data
	const innovationServices = [
		{
			title: 'Three.js Development',
			category: '3D Web Experiences',
			icon: <ThreeJsIcon />,
			description:
				"Turn your 2D website into a mind-bending digital playground. We craft WebGL-powered 3D experiences that make your users forget they're on a browser.",
			features: [
				'Performance-Optimized 3D Scenes',
				'Interactive Product Experiences',
				'Real-time Data Visualization',
				'Custom Animation Systems',
				'Cross-browser Compatibility',
			],
		},
		{
			title: 'AI Integration',
			category: 'Machine Intelligence',
			icon: <AIIcon />,
			description:
				"Skip the AI buzzwords – we're here to make machines work for you. We integrate cutting-edge machine learning models that transform your data into business intelligence.",
			features: [
				'Custom ML Model Development',
				'Intelligent Content Analysis',
				'Predictive User Experience',
				'Natural Language Processing',
				'Computer Vision Applications',
			],
		},
		{
			title: 'AR/VR Experiences',
			category: 'Immersive Technology',
			icon: <div className="text-4xl font-bold text-white">🥽</div>,
			description:
				'Blur the line between digital and physical. Our augmented and virtual reality solutions create memorable brand experiences that engage users in entirely new ways.',
			features: [
				'WebXR Implementations',
				'Virtual Product Showcases',
				'Location-based AR Experiences',
				'360° Virtual Tours',
				'Interactive Training Simulations',
			],
		},
		{
			title: 'Data Visualization',
			category: 'Information Design',
			icon: <div className="text-4xl font-bold text-white">📊</div>,
			description:
				'Transform complex data into clear, actionable insights. We create beautiful, interactive visualizations that make your data accessible and meaningful to any audience.',
			features: [
				'Real-time Data Dashboards',
				'Interactive Charts & Graphs',
				'Geospatial Mapping',
				'Custom Visualization Tools',
				'Data Storytelling',
			],
		},
	];

	// Innovation process steps
	const processSteps = [
		{
			number: '01',
			title: 'Discover',
			description: 'Defining the problem worth solving',
			features: [
				{
					title: 'Problem Analysis',
					description: 'Identifying the core challenge and business opportunity',
				},
				{
					title: 'Technology Assessment',
					description: 'Evaluating potential tech solutions and approaches',
				},
				{
					title: 'Viability Research',
					description: 'Determining technical and business feasibility',
				},
			],
		},
		{
			number: '02',
			title: 'Explore',
			description: 'Prototyping potential solutions',
			features: [
				{
					title: 'Rapid Prototyping',
					description: 'Building quick functional models to test concepts',
				},
				{
					title: 'Technical Spikes',
					description: 'Investigating challenging technical aspects',
				},
				{
					title: 'Proof of Concept',
					description: 'Validating core technical assumptions',
				},
			],
		},
		{
			number: '03',
			title: 'Build',
			description: 'Turning validated concepts into reality',
			features: [
				{
					title: 'Agile Development',
					description: 'Building in small, iterative cycles',
				},
				{
					title: 'Technical Optimization',
					description: 'Ensuring performance across all devices',
				},
				{
					title: 'Integration Strategy',
					description: 'Connecting with existing systems and workflows',
				},
			],
		},
		{
			number: '04',
			title: 'Scale',
			description: 'Growing and evolving the solution',
			features: [
				{
					title: 'Performance Monitoring',
					description: 'Tracking usage and identifying bottlenecks',
				},
				{
					title: 'Continuous Improvement',
					description: 'Ongoing refinement based on real data',
				},
				{
					title: 'Feature Expansion',
					description: 'Adding capabilities based on success metrics',
				},
			],
		},
	];

	// Innovation stats
	const innovationStats = [
		{
			value: '47%',
			description: 'Average increase in user engagement with immersive experiences',
		},
		{
			value: '35%',
			description: 'Improved conversion rates with AI-powered experiences',
		},
		{
			value: '60+',
			description: 'Innovation projects delivered for Denver businesses',
		},
		{
			value: '8+',
			description: 'Years pushing the boundaries of digital innovation',
		},
	];

	return (
		<main className="relative bg-[#1a1f24] text-gray-100">
			<ServiceSchema service="digital-innovation" />
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
								<span className="block text-[var(--c-accent)]">Digital Innovation</span>
								<span className="block">With Purpose</span>
							</h1>
							<p className="text-lg md:text-xl text-moon-rock leading-relaxed mb-8">
								We're problem solvers first, coders second. Breaking through boundaries with strategic thinking and
								innovative technology that drives real business results.
							</p>
							<div className="flex flex-wrap gap-4">
								<Button
									href="/contact"
									className="grad-border bg-[var(--c-primary-dark)] text-white font-mono hover:scale-105 transition-transform duration-300 text-base md:text-lg px-6 py-3 rounded-lg"
								>
									Start Your Project
									<span className="text-[var(--c-accent)] ml-2">→</span>
								</Button>
								<Button
									href="#services"
									className="bg-black bg-opacity-30 text-white hover:bg-opacity-50 font-mono transition-all duration-300 text-base md:text-lg px-6 py-3 rounded-lg"
								>
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
							<div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-800 opacity-80"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<motion.div className="relative w-full h-full">
									<motion.div
										className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
										initial={{ scale: 0.8, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ duration: 0.7, delay: 0.3 }}
									>
										<div className="absolute inset-0 bg-[var(--c-accent)] rounded-full opacity-20 animate-ping"></div>
										<div className="absolute inset-0 bg-[var(--c-accent)] rounded-full opacity-40 animate-pulse"></div>
										<div className="absolute inset-[20%] bg-black bg-opacity-50 rounded-full flex items-center justify-center">
											<span className="text-3xl md:text-4xl font-bold text-[var(--c-accent)]">AI</span>
										</div>
									</motion.div>

									{/* Floating elements */}
									<motion.div
										className="absolute top-[20%] left-[15%] bg-black bg-opacity-40 p-3 rounded-lg border border-indigo-500"
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.4 }}
										whileHover={{ scale: 1.05, borderColor: 'var(--c-accent)' }}
									>
										<p className="text-sm">ThreeJS</p>
									</motion.div>
									<motion.div
										className="absolute top-[30%] right-[20%] bg-black bg-opacity-40 p-3 rounded-lg border border-purple-500"
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.5 }}
										whileHover={{ scale: 1.05, borderColor: 'var(--c-accent)' }}
									>
										<p className="text-sm">Machine Learning</p>
									</motion.div>
									<motion.div
										className="absolute bottom-[25%] left-[25%] bg-black bg-opacity-40 p-3 rounded-lg border border-indigo-500"
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.6 }}
										whileHover={{ scale: 1.05, borderColor: 'var(--c-accent)' }}
									>
										<p className="text-sm">Data Visualization</p>
									</motion.div>
									<motion.div
										className="absolute bottom-[35%] right-[15%] bg-black bg-opacity-40 p-3 rounded-lg border border-purple-500"
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.7 }}
										whileHover={{ scale: 1.05, borderColor: 'var(--c-accent)' }}
									>
										<p className="text-sm">AR/VR</p>
									</motion.div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* Digital Innovation Services */}
			<Section count="1.0" title="Innovation Services" id="services">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="Digital Innovation"
						subtitle="that solves real problems."
						accent="Not just shiny new toys."
						description="We leverage cutting-edge technology to solve complex business problems and create meaningful experiences for Denver businesses."
					/>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
						{innovationServices.map((service, index) => (
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

					<div className="mt-16">
						<motion.div
							className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl border border-indigo-800 relative overflow-hidden"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							{/* Background elements */}
							<div className="absolute top-0 right-0 w-64 h-64 bg-[var(--c-accent)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
							<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

							{/* Header */}
							<div className="p-10 pb-6 relative z-10">
								<h3 className="text-3xl font-bold mb-4 relative z-10">Our Innovation Approach</h3>
								<div className="w-24 h-1 bg-[var(--c-accent)] mb-6"></div>
								<p className="mb-8 text-lg text-moon-rock leading-relaxed max-w-4xl">
									We don't chase technology for its own sake. Our strategic approach ensures we're solving real business
									challenges with the right tools, not just implementing the latest shiny tech.
								</p>
							</div>

							{/* Two columns */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 pt-0 relative z-10">
								{/* Left column */}
								<div className="bg-black bg-opacity-20 p-6 rounded-xl border border-gray-800">
									<h4 className="text-2xl font-bold mb-4 text-[var(--c-accent)]">Problem-First Thinking</h4>
									<p className="text-base text-moon-rock leading-relaxed mb-6">
										We don't start with technology – we start with your business problem. Our strategic approach ensures
										we're solving real challenges, not just implementing the latest shiny tech.
									</p>

									<div className="space-y-4">
										<motion.div
											className="bg-black bg-opacity-30 p-4 rounded-lg border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300"
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: 0.1 }}
										>
											<h5 className="font-bold text-lg mb-2">Strategic Problem Analysis</h5>
											<p className="text-sm text-moon-rock leading-relaxed">
												Deep-diving into your business challenge to identify core issues
											</p>
										</motion.div>

										<motion.div
											className="bg-black bg-opacity-30 p-4 rounded-lg border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300"
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: 0.2 }}
										>
											<h5 className="font-bold text-lg mb-2">Multi-Solution Exploration</h5>
											<p className="text-sm text-moon-rock leading-relaxed">
												Considering all possible approaches before committing to a path
											</p>
										</motion.div>

										<motion.div
											className="bg-black bg-opacity-30 p-4 rounded-lg border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300"
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: 0.3 }}
										>
											<h5 className="font-bold text-lg mb-2">ROI-Driven Selection</h5>
											<p className="text-sm text-moon-rock leading-relaxed">
												Choosing solutions with measurable business impact
											</p>
										</motion.div>
									</div>
								</div>

								{/* Right column */}
								<div className="bg-black bg-opacity-20 p-6 rounded-xl border border-gray-800">
									<h4 className="text-2xl font-bold mb-4 text-[var(--c-accent)]">Future-Proof Implementation</h4>
									<p className="text-base text-moon-rock leading-relaxed mb-6">
										We build with tomorrow in mind. Our innovative solutions are designed to evolve with your business,
										preventing the need for complete rebuilds when technology changes.
									</p>

									<div className="space-y-4">
										<motion.div
											className="bg-black bg-opacity-30 p-4 rounded-lg border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300"
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: 0.1 }}
										>
											<h5 className="font-bold text-lg mb-2">Modular Architecture</h5>
											<p className="text-sm text-moon-rock leading-relaxed">
												Components that can be updated independently to adapt to changing needs
											</p>
										</motion.div>

										<motion.div
											className="bg-black bg-opacity-30 p-4 rounded-lg border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300"
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: 0.2 }}
										>
											<h5 className="font-bold text-lg mb-2">API-First Approach</h5>
											<p className="text-sm text-moon-rock leading-relaxed">
												Flexible interfaces designed for future integration and expansion
											</p>
										</motion.div>

										<motion.div
											className="bg-black bg-opacity-30 p-4 rounded-lg border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300"
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: 0.3 }}
										>
											<h5 className="font-bold text-lg mb-2">Continuous Innovation Pipeline</h5>
											<p className="text-sm text-moon-rock leading-relaxed">
												Ongoing improvement and iteration based on real-world usage
											</p>
										</motion.div>
									</div>
								</div>
							</div>

							{/* Stats section */}
							<div className="p-10 pt-6 pb-10 relative z-10">
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
									{innovationStats.map((stat, index) => (
										<StatCard key={index} value={stat.value} description={stat.description} />
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* Process Section */}
			<Section count="1.5" title="Our Process">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="Our Innovation Process"
						subtitle="is strategic not spontaneous."
						accent="Methodical problem solving."
						description="We follow a structured approach to innovation that ensures we're solving the right problems with the right technology."
					/>

					<div className="mt-16 space-y-24">
						{processSteps.map((step) => (
							<ProcessStep
								key={step.number}
								number={step.number}
								title={step.title}
								description={step.description}
								features={step.features}
							/>
						))}
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* Denver Innovation */}
			<Section count="2.0" title="Denver Innovation">
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
									Denver's Digital <span className="text-[var(--c-accent)]">Innovation Leader</span>
								</h3>
								<p className="text-lg text-moon-rock leading-relaxed mb-0">
									Denver is a hub of innovation and entrepreneurship, with a rapidly growing tech ecosystem that demands
									cutting-edge solutions. At House of Giants, we're proud to be part of Denver's innovation community.
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
										<h4 className="font-bold -grad-header font-serif mb-0">Local Innovation Network</h4>
										<p className="text-lg text-moon-rock leading-relaxed mb-0">
											We're deeply connected to Denver's tech ecosystem and talent pool, giving us access to the latest
											innovations and specialized expertise.
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
										<h4 className="font-bold -grad-header font-serif mb-0">Industry Knowledge</h4>
										<p className="text-lg text-moon-rock leading-relaxed mb-0">
											We have a deep understanding of Denver's key industries and their challenges, allowing us to
											create tailored innovation solutions for local businesses.
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
										<h4 className="font-bold -grad-header font-serif mb-0">Local Impact</h4>
										<p className="text-lg text-moon-rock leading-relaxed mb-0">
											We're committed to strengthening Denver's digital presence and competitiveness on the global stage
											through innovative technology solutions.
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
								src="/images/innovate.jpg"
								alt="Dom and Mel Innovating"
								className="object-cover h-full w-full"
								width={800}
								height={600}
							/>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* CTA Section */}
			<Section count="3.0" title="Ready to build something extraordinary?">
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
							Ready to <span className="text-[var(--c-accent)]">innovate</span>?
						</h2>
						<p className="text-lg text-moon-rock leading-relaxed mb-8">
							Let's explore how cutting-edge technology can solve your business challenges and create new opportunities
							for growth and engagement.
						</p>
						<div className="mt-8">
							<Button
								href="/contact"
								className="grad-border bg-[var(--c-primary-dark)] text-white font-mono hover:scale-105 transition-transform duration-300 text-lg px-10 py-4 rounded-lg"
							>
								Start the Conversation
								<span className="text-[var(--c-accent)] ml-2">→</span>
							</Button>
						</div>
					</motion.div>
				</Container>
			</Section>
		</main>
	);
}
