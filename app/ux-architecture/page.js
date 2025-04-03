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
			<h2 className="text-2xl font-bold mb-4">{description}</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
				{features.map((feature, index) => (
					<div
						key={index}
						className="bg-black bg-opacity-30 p-5 rounded-lg border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300"
					>
						<h3 className="text-2xl not-italic font-bold mb-2">{feature.title}</h3>
						<p className="text-sm text-moon-rock leading-relaxed">{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	</motion.div>
);

export default function UXArchitecture() {
	// UX Architecture services data
	const uxServices = [
		{
			title: 'User Research',
			category: 'Understanding People',
			icon: <div className="text-4xl font-bold text-white">🔍</div>,
			description:
				'We dig deep to understand your users – their needs, behaviors, and pain points – creating detailed personas that guide every design decision.',
			features: [
				'User Interviews & Testing',
				'Behavior Analysis',
				'Persona Development',
				'Usability Audits',
				'Journey Mapping',
			],
		},
		{
			title: 'Information Architecture',
			category: 'Content Structure',
			icon: <div className="text-4xl font-bold text-white">🏗️</div>,
			description:
				'We organize content and functionality in a way that feels intuitive and natural, creating seamless user journeys that convert visitors into customers.',
			features: [
				'Content Mapping & Hierarchies',
				'User Flow Design',
				'Navigation Systems',
				'Information Hierarchy',
				'Content Strategy',
			],
		},
		{
			title: 'Interaction Design',
			category: 'Experience Flow',
			icon: <div className="text-4xl font-bold text-white">👆</div>,
			description:
				'We craft purposeful interactions that guide users toward their goals, creating memorable experiences that feel both intuitive and delightful.',
			features: [
				'Micro-Interaction Design',
				'Interface Prototyping',
				'Accessibility Implementation',
				'Animation Strategy',
				'Feedback Systems',
			],
		},
		{
			title: 'Usability Testing',
			category: 'Validation & Iteration',
			icon: <div className="text-4xl font-bold text-white">🧪</div>,
			description:
				'We validate design decisions with real users, gathering actionable insights that help us refine and perfect the experience before full implementation.',
			features: [
				'Task-Based Testing',
				'A/B Testing',
				'Heat Map Analysis',
				'User Feedback Sessions',
				'Iterative Improvements',
			],
		},
	];

	// Process steps data
	const processSteps = [
		{
			number: '01',
			title: 'Discover',
			description: 'Understanding business goals, user needs, and technical constraints',
			features: [
				{
					title: 'Stakeholder Interviews',
					description: 'Getting aligned on business goals and success metrics',
				},
				{
					title: 'User Research',
					description: 'Understanding your audience and their needs',
				},
				{
					title: 'Competitive Analysis',
					description: 'Evaluating market context and opportunities',
				},
			],
		},
		{
			number: '02',
			title: 'Define',
			description: 'Creating personas, user stories, and information architecture',
			features: [
				{
					title: 'User Personas',
					description: 'Detailed profiles of your target audience segments',
				},
				{
					title: 'User Flows',
					description: 'Mapping the journey users take through your product',
				},
				{
					title: 'Content Architecture',
					description: 'Organizing information for intuitive navigation',
				},
			],
		},
		{
			number: '03',
			title: 'Design',
			description: 'Crafting wireframes, prototypes, and visual design systems',
			features: [
				{
					title: 'Wireframing',
					description: 'Creating the blueprint for your digital experience',
				},
				{
					title: 'Interactive Prototypes',
					description: 'Building testable versions of key user flows',
				},
				{
					title: 'UI Design',
					description: 'Adding visual elements that enhance usability',
				},
			],
		},
		{
			number: '04',
			title: 'Test',
			description: 'Validating designs through user testing and iterative refinement',
			features: [
				{
					title: 'Usability Testing',
					description: 'Observing real users interact with your product',
				},
				{
					title: 'Iterative Refinement',
					description: 'Making data-driven improvements based on feedback',
				},
				{
					title: 'Accessibility Validation',
					description: 'Ensuring your product works for everyone',
				},
			],
		},
		{
			number: '05',
			title: 'Implement',
			description: 'Bringing designs to life with developer handoff and QA',
			features: [
				{
					title: 'Developer Handoff',
					description: 'Providing specs and assets for implementation',
				},
				{
					title: 'QA Testing',
					description: 'Verifying implementation matches design intent',
				},
				{
					title: 'Launch Support',
					description: 'Assistance during launch and post-launch refinements',
				},
			],
		},
	];

	// UX Philosophy items
	const philosophyItems = [
		{
			title: 'Research-Driven',
			description:
				"We never assume we know what users want. Every decision is backed by research, testing, and validation to ensure we're solving real problems.",
		},
		{
			title: 'Business-Aligned',
			description:
				'Great UX balances user needs with business goals. We create experiences that delight users while driving the metrics that matter to you.',
		},
		{
			title: 'Accessibility-First',
			description:
				'We design for everyone. Inclusive design principles are baked into our process, ensuring your digital products work for all users.',
		},
	];

	// UX Stats
	const uxStats = [
		{
			value: '73%',
			description: 'Average conversion increase after UX improvements',
		},
		{
			value: '89%',
			description: 'User satisfaction in post-implementation testing',
		},
	];

	return (
		<main className="relative bg-[#1a1f24] text-gray-100">
			<ServiceSchema service="ux-architecture" />
			<FloatingGradients variant="gold" intensity="low" />

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
								<span className="block text-[var(--c-accent)]">UX Architecture</span>
								<span className="block">With Purpose</span>
							</h1>
							<p className="text-lg md:text-xl text-moon-rock leading-relaxed mb-8">
								We don&apos;t just build interfaces—we craft digital experiences that feel effortless. Rooted in
								strategy, driven by intuition, and backed by deep research into how people interact with technology.
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
							<div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-800 opacity-70"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<motion.div
									className="w-4/5 max-w-md"
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.3 }}
								>
									<motion.div
										className="relative"
										initial={{ scale: 0.95 }}
										animate={{ scale: 1 }}
										transition={{ duration: 0.5, delay: 0.4 }}
									>
										<div className="absolute top-0 left-0 w-full h-16 bg-black bg-opacity-40 rounded-t-xl flex items-center px-6">
											<div className="flex space-x-2">
												<div className="w-3 h-3 rounded-full bg-red-500"></div>
												<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
												<div className="w-3 h-3 rounded-full bg-green-500"></div>
											</div>
											<div className="ml-6 bg-white bg-opacity-10 rounded-full px-4 py-1 text-xs">
												https://example.com
											</div>
										</div>
										<div className="pt-16 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-20 rounded-xl p-6">
											<div className="flex justify-between mb-6">
												<motion.div
													className="w-1/2 h-8 bg-white bg-opacity-10 rounded-lg"
													animate={{
														opacity: [0.5, 0.8, 0.5],
													}}
													transition={{
														duration: 3,
														repeat: Infinity,
														repeatType: 'reverse',
													}}
												></motion.div>
												<div className="flex space-x-3">
													<motion.div
														className="w-8 h-8 bg-[var(--c-accent)] rounded-lg"
														whileHover={{ scale: 1.1 }}
														transition={{ duration: 0.2 }}
													></motion.div>
													<motion.div
														className="w-8 h-8 bg-white bg-opacity-10 rounded-lg"
														whileHover={{ scale: 1.1 }}
														transition={{ duration: 0.2 }}
													></motion.div>
												</div>
											</div>
											<div className="mb-6">
												<motion.div
													className="h-12 bg-white bg-opacity-10 rounded-lg mb-3"
													animate={{
														opacity: [0.5, 0.7, 0.5],
													}}
													transition={{
														duration: 4,
														repeat: Infinity,
														repeatType: 'reverse',
														delay: 0.5,
													}}
												></motion.div>
												<motion.div
													className="h-4 bg-white bg-opacity-10 rounded w-2/3 mb-2"
													animate={{
														opacity: [0.5, 0.7, 0.5],
														width: ['60%', '65%', '60%'],
													}}
													transition={{
														duration: 5,
														repeat: Infinity,
														repeatType: 'reverse',
													}}
												></motion.div>
												<motion.div
													className="h-4 bg-white bg-opacity-10 rounded mb-2"
													animate={{
														opacity: [0.5, 0.7, 0.5],
													}}
													transition={{
														duration: 4.5,
														repeat: Infinity,
														repeatType: 'reverse',
														delay: 0.3,
													}}
												></motion.div>
												<motion.div
													className="h-4 bg-white bg-opacity-10 rounded w-4/5"
													animate={{
														opacity: [0.5, 0.7, 0.5],
														width: ['80%', '85%', '80%'],
													}}
													transition={{
														duration: 4.2,
														repeat: Infinity,
														repeatType: 'reverse',
														delay: 0.1,
													}}
												></motion.div>
											</div>
											<div className="grid grid-cols-2 gap-4 mb-6">
												<motion.div
													className="h-32 bg-white bg-opacity-10 rounded-lg"
													animate={{
														opacity: [0.5, 0.7, 0.5],
													}}
													transition={{
														duration: 3,
														repeat: Infinity,
														repeatType: 'reverse',
														delay: 0.2,
													}}
												></motion.div>
												<motion.div
													className="h-32 bg-white bg-opacity-10 rounded-lg"
													animate={{
														opacity: [0.5, 0.7, 0.5],
													}}
													transition={{
														duration: 3.5,
														repeat: Infinity,
														repeatType: 'reverse',
														delay: 0.4,
													}}
												></motion.div>
											</div>
											<div className="flex justify-center">
												<motion.div
													className="w-1/2 h-10 bg-[var(--c-accent)] rounded-lg"
													whileHover={{ scale: 1.05 }}
													animate={{
														y: [0, -3, 0],
													}}
													transition={{
														y: {
															duration: 2,
															repeat: Infinity,
															repeatType: 'reverse',
														},
														scale: { duration: 0.2 },
													}}
												></motion.div>
											</div>
										</div>
									</motion.div>
									<div className="mt-6 flex justify-center space-x-2">
										<div className="w-16 h-1 bg-white bg-opacity-30 rounded-full"></div>
										<div className="w-8 h-1 bg-[var(--c-accent)] rounded-full"></div>
										<div className="w-8 h-1 bg-white bg-opacity-30 rounded-full"></div>
									</div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* UX Architecture Services */}
			<Section count="1.0" title="UX Architecture Services" id="services">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="UX Architecture"
						subtitle="that puts users first."
						accent="We build for humans, not algorithms."
						description="Our deep-dive research and user-centered approach ensures every pixel serves a purpose in Denver's competitive digital landscape."
					/>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
						{uxServices.map((service, index) => (
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

					{/* UX Philosophy */}
					<div className="mt-16">
						<motion.div
							className="bg-gradient-to-r from-purple-900 to-indigo-900 p-8 rounded-xl border border-indigo-800 relative overflow-hidden"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<div className="absolute top-0 right-0 w-64 h-64 bg-[var(--c-accent)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

							<h3 className="text-3xl font-bold mb-6 relative z-10">Our UX Philosophy</h3>
							<p className="mb-8 text-lg text-moon-rock leading-relaxed max-w-4xl relative z-10">
								"Great UX isn't just about making things look good—it's about making things work so well that users
								don't even notice the design. They just accomplish their goals with ease and satisfaction."
							</p>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 relative z-10">
								{philosophyItems.map((item, index) => (
									<PhilosophyCard key={index} title={item.title} description={item.description} delay={index * 0.1} />
								))}
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 relative z-10">
								{uxStats.map((stat, index) => (
									<StatCard key={index} value={stat.value} description={stat.description} />
								))}
							</div>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* Process Section */}
			<Section count="2.0" title="Our Process">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="Our UX Process"
						subtitle="is methodical not magical."
						accent="No smoke and mirrors here."
						description="We follow a transparent process that keeps you in the loop from research to implementation."
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

					<div className="mt-24">
						<motion.div
							className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-xl border border-indigo-800 relative overflow-hidden"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<div className="absolute top-0 right-0 w-64 h-64 bg-[var(--c-accent)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

							<h3 className="text-3xl font-bold mb-6 relative z-10">The Impact of Good UX</h3>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 relative z-10">
								<div className="bg-black bg-opacity-40 rounded-lg p-6 border border-gray-800">
									<h4 className="font-bold mb-4 text-xl">Before UX Architecture</h4>
									<ul className="space-y-3 text-lg text-moon-rock leading-relaxed">
										<li className="flex items-start">
											<span className="text-red-500 mr-3 mt-1">✕</span>
											<span>Confused users abandoning the site</span>
										</li>
										<li className="flex items-start">
											<span className="text-red-500 mr-3 mt-1">✕</span>
											<span>High bounce rates and low conversions</span>
										</li>
										<li className="flex items-start">
											<span className="text-red-500 mr-3 mt-1">✕</span>
											<span>Frustrated customer service team</span>
										</li>
										<li className="flex items-start">
											<span className="text-red-500 mr-3 mt-1">✕</span>
											<span>Disconnected business goals and user needs</span>
										</li>
										<li className="flex items-start">
											<span className="text-red-500 mr-3 mt-1">✕</span>
											<span>Poor digital brand perception</span>
										</li>
									</ul>
								</div>
								<div className="bg-black bg-opacity-40 rounded-lg p-6 border border-indigo-800">
									<h4 className="font-bold mb-4 text-xl">After UX Architecture</h4>
									<ul className="space-y-3 text-lg text-moon-rock leading-relaxed">
										<li className="flex items-start">
											<span className="text-green-500 mr-3 mt-1">✓</span>
											<span>Intuitive experience users love to use</span>
										</li>
										<li className="flex items-start">
											<span className="text-green-500 mr-3 mt-1">✓</span>
											<span>Increased engagement and conversions</span>
										</li>
										<li className="flex items-start">
											<span className="text-green-500 mr-3 mt-1">✓</span>
											<span>Reduced support inquiries and costs</span>
										</li>
										<li className="flex items-start">
											<span className="text-green-500 mr-3 mt-1">✓</span>
											<span>Aligned business goals and user experiences</span>
										</li>
										<li className="flex items-start">
											<span className="text-green-500 mr-3 mt-1">✓</span>
											<span>Stronger brand loyalty and perception</span>
										</li>
									</ul>
								</div>
							</div>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* Denver Focus */}
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
									Denver UX Architecture <span className="text-[var(--c-accent)]">with Local Expertise</span>
								</h3>
								<p className="text-lg text-moon-rock leading-relaxed mb-0">
									Denver's tech-savvy audience has high expectations for digital experiences. In this competitive
									market, user experience is often the deciding factor between you and your competitors.
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
										<h4 className="font-bold -grad-header font-serif mb-0">Technology Focus</h4>
										<p className="text-lg text-moon-rock leading-relaxed mb-0">
											Denver's tech-savvy users expect intuitive, innovative interfaces that work effortlessly on all
											devices. Our UX architecture meets these high expectations.
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
										<h4 className="font-bold -grad-header font-serif mb-0">Active Lifestyle</h4>
										<p className="text-lg text-moon-rock leading-relaxed mb-0">
											We create mobile-first experiences for Denver's on-the-go audience who access digital products
											while hiking, skiing, or enjoying Colorado's outdoor lifestyle.
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
										<h4 className="font-bold -grad-header font-serif mb-0">Competitive Market</h4>
										<p className="text-lg text-moon-rock leading-relaxed mb-0">
											Our UX architecture helps your business stand out in Denver's crowded digital landscape by
											creating memorable, distinctive experiences that drive conversions.
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
								src="/images/domux.jpg"
								alt="UX Architecture planning session"
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
							Ready for UX that <span className="text-[var(--c-accent)]">actually works</span>?
						</h2>
						<p className="text-lg text-moon-rock leading-relaxed mb-8">
							Let's create digital experiences that your users love and that drive real business results.
						</p>
						<div className="mt-8">
							<Button
								href="/contact"
								className="grad-border bg-[var(--c-primary-dark)] text-white font-mono hover:scale-105 transition-transform duration-300 text-lg px-10 py-4 rounded-lg"
							>
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
