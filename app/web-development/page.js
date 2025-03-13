'use client';

import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { Button } from '@/components/Button/Button';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import { SectionSeparator } from '@/components/SectionSeparator/SectionSeparator';
import { motion } from 'framer-motion';
import { TechCard } from '@/components/Services/TechCard';
import Image from 'next/image';
import StatCard from '@/components/Impact/StatCard';

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

// Main Page Component
export default function WebDevelopment() {
	// Services data
	const techServices = [
		{
			id: '01',
			title: 'CMS Development',
			category: 'Content Management',
			icon: <div className="text-4xl font-bold text-white">📝</div>,
			description:
				'We build powerful, scalable content management systems that give you complete control over your digital presence without sacrificing performance or user experience.',
			features: [
				'Custom Admin Interfaces',
				'Content Modeling & Architecture',
				'Multi-user Workflows',
				'Headless CMS Integration',
				'Enterprise-grade Security',
			],
		},
		{
			id: '02',
			title: 'Web App Development',
			category: 'Full-Stack Solutions',
			icon: <div className="text-4xl font-bold text-white">💻</div>,
			description:
				'From simple dashboards to complex interactive platforms, we build web applications that solve real business problems with blazing-fast performance and intuitive user experiences.',
			features: [
				'Modern Front-end Frameworks',
				'Server-side Rendering & Static Generation',
				'API Development & Integration',
				'Real-time Data Processing',
				'Scalable Cloud Architecture',
			],
		},
		{
			id: '03',
			title: 'HTML & CSS',
			category: 'Frontend Fundamentals',
			icon: <div className="text-4xl font-bold text-white">🎨</div>,
			description:
				'Rock-solid fundamentals are at the core of every successful project. Our semantic HTML and modern CSS approaches create accessible, maintainable, and visually stunning websites.',
			features: [
				'Semantic HTML5 Structure',
				'CSS Grid & Flexbox Layouts',
				'Modern CSS Variables & Functions',
				'Responsive Design & Mobile-first',
				'Optimized Performance & Load Times',
			],
		},
		{
			id: '04',
			title: 'JavaScript',
			category: 'Interactive Development',
			icon: <div className="text-4xl font-bold text-white">🔍</div>,
			description:
				'From lightweight enhancements to complex interactive applications, our JavaScript expertise brings your digital experiences to life with smooth animations and intuitive interfaces.',
			features: [
				'Modern ES6+ Development',
				'Interactive UI Components',
				'Progressive Web Apps (PWAs)',
				'Performance Optimization',
				'Advanced DOM Manipulation',
			],
		},
		{
			id: '05',
			title: 'Accessibility',
			category: 'Inclusive Design',
			icon: <div className="text-4xl font-bold text-white">🦾</div>,
			description:
				'We build for everyone. Our accessibility first approach ensures your website is usable by all visitors, regardless of abilities or disabilities, while meeting WCAG standards.',
			features: [
				'WCAG 2.1 AA Compliance',
				'Screen Reader Optimization',
				'Keyboard Navigation Support',
				'Color Contrast & Readability',
				'Semantic HTML Structure',
			],
		},
		{
			id: '06',
			title: 'E-commerce Development',
			category: 'Digital Commerce',
			icon: <div className="text-4xl font-bold text-white">🛒</div>,
			description:
				'Convert browsers to buyers with our tailored e-commerce solutions. We build shopping experiences that drive sales, streamline operations, and scale with your growing business.',
			features: [
				'Custom Shopping Experiences',
				'Secure Payment Integration',
				'Inventory Management',
				'Order Fulfillment Automation',
				'Customer Retention Strategies',
			],
		},
	];

	// Process data
	const processSteps = [
		{
			number: '01',
			title: 'Discovery',
			description: 'We get to know your business inside and out',
			features: [
				{
					title: 'Business Analysis',
					description: 'Understanding revenue models, goals, and key metrics',
				},
				{
					title: 'User Research',
					description: 'Identifying your audience and their needs',
				},
				{
					title: 'Technical Audit',
					description: 'Evaluating existing systems and integration points',
				},
			],
		},
		{
			number: '02',
			title: 'Strategy',
			description: 'Planning the architecture and approach',
			features: [
				{
					title: 'Tech Stack Selection',
					description: 'Choosing the right tools for your specific needs',
				},
				{
					title: 'Information Architecture',
					description: 'Mapping content structure and user flows',
				},
				{
					title: 'Development Roadmap',
					description: 'Creating a clear timeline with milestones',
				},
			],
		},
		{
			number: '03',
			title: 'Execution',
			description: 'Building with precision and purpose',
			features: [
				{
					title: 'Iterative Development',
					description: 'Building in stages with regular feedback loops',
				},
				{
					title: 'Quality Assurance',
					description: 'Rigorous testing across devices and browsers',
				},
				{
					title: 'Performance Optimization',
					description: 'Ensuring lightning-fast load times',
				},
			],
		},
	];

	// Stats data
	const stats = [
		{
			value: '98%',
			description: 'Performance scores on our web projects',
		},
		{
			value: '25%',
			description: 'Average conversion increase after launch',
		},
		{
			value: '12+',
			description: 'Years crafting digital experiences in Denver',
		},
		{
			value: '100+',
			description: 'Successful web projects delivered',
		},
	];

	return (
		<main className="relative">
			<FloatingGradients intensity="medium" />

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
								<span className="block text-[var(--c-accent)]">Web Development</span>
								<span className="block">That Drives Growth</span>
							</h1>
							<p className="text-lg md:text-xl text-moon-rock leading-relaxed mb-8">
								We build high performing websites & web applications that scale with your business. No bloated plugins.
								No unnecessary fluff. Just fast, scalable, and strategic digital solutions.
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
							<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-80"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<motion.code
									className="text-lg md:text-xl font-mono text-white p-6 bg-black bg-opacity-50 rounded"
									initial={{ y: 20 }}
									animate={{ y: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
								>
									<span className="block">
										<span className="text-[var(--c-accent)]">function</span>{' '}
										<span className="text-green-400">buildCoolShit</span>() &#123;
									</span>
									<span className="block ml-4">
										<span className="text-purple-300">return</span> &#123;
									</span>
									<span className="block ml-8">
										scalable: <span className="text-yellow-300">true</span>,
									</span>
									<span className="block ml-8">
										performance: <span className="text-yellow-300">'exceptional'</span>,
									</span>
									<span className="block ml-8">
										location: <span className="text-yellow-300">'Denver'</span>
									</span>
									<span className="block ml-4">&#125;</span>
									<span className="block">&#125;</span>
								</motion.code>
							</div>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* Web Development Services */}
			<Section count="1.0" title="Development Services" id="services">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="Our Services"
						subtitle="crafted for results."
						accent="From Denver to the digital world."
						description="We don't just make websites, we craft powerful digital platforms that solve real business challenges."
					/>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
						{techServices.map((service, index) => (
							<TechCard
								key={index}
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
							className="bg-gradient-to-r from-purple-900 to-indigo-900 p-8 rounded-xl border border-indigo-800 relative overflow-hidden"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<div className="absolute top-0 right-0 w-64 h-64 bg-[var(--c-accent)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

							<h3 className="text-3xl font-bold mb-6 relative z-10">Why Denver Businesses Choose House of Giants</h3>
							<p className="mb-8 text-lg text-moon-rock leading-relaxed max-w-4xl relative z-10">
								We're not just another web development agency. We're problem solvers, code architects, and digital
								strategists who build websites that work as hard as you do. Our team blends technical firepower with
								strategic insight to craft high performance web solutions that don't just look good — they drive real
								business results.
							</p>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 relative z-10">
								{stats.map((stat, index) => (
									<StatCard key={index} value={stat.value} description={stat.description} />
								))}
							</div>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			<Section count="1.5" title="Development Expertise">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="Denver's Coolest"
						subtitle="Web Development Agency"
						accent="Technology meets strategy."
						description="We combine cutting-edge technology with strategic thinking to create web experiences that stand out in Denver's competitive market."
					/>

					<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
						<div className="flex flex-col space-y-8">
							<motion.div
								className="bg-black bg-opacity-20 p-8 rounded-xl border border-gray-800"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<h3 className="text-4xl font-bold -grad-header mb-4 text-white">Our Development Philosophy</h3>
								<p className="text-lg text-moon-rock leading-relaxed mb-0">
									Our development approach focuses on three key pillars: performance, scalability, and user experience.
									We believe that a great website should not only look good but also perform exceptionally well and
									drive business results.
								</p>
							</motion.div>

							{/* Three pillars */}
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
										<h4 className="font-bold -grad-header font-serif mb-0">Performance</h4>
										<p className="text-lg text-moon-rock leading-relaxed mb-0">
											We build lightning-fast websites that keep users engaged and improve SEO rankings. Every
											millisecond counts when it comes to keeping visitors on your site.
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
										<h4 className="font-bold -grad-header font-serif mb-0">Scalability</h4>
										<p className="text-lg text-moon-rock leading-relaxed mb-0">
											Our solutions scale with your business, adapting to new requirements without complete rebuilds. We
											architect systems that grow as your company evolves.
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
										<h4 className="font-bold -grad-header font-serif mb-0">User Experience</h4>
										<p className="text-lg text-moon-rock leading-relaxed mb-0">
											We design intuitive interfaces that guide users toward meaningful actions. The best technology is
											invisible, enabling frictionless interactions with your brand.
										</p>
									</div>
								</div>
							</motion.div>
						</div>

						<motion.div
							className="relative rounded-xl overflow-hidden h-full md:min-h-[600px]"
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
							<Image
								src="/images/domcodes.jpg"
								alt="House of Giants Denver office"
								className="object-cover h-full w-full"
								width={1000}
								height={1000}
							/>
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
						title="Our Process"
						subtitle="is methodical not magical."
						accent="No smoke and mirrors here."
						description="We follow a transparent process that keeps you in the loop from concept to launch."
					/>

					<div className="mt-16 space-y-24">
						{processSteps.map((step, index) => (
							<ProcessStep
								key={step.number}
								number={step.number}
								title={step.title}
								description={step.description}
								features={step.features}
							/>
						))}

						{/* Launch Step */}
						<motion.div
							className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 items-start"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<div className="bg-black bg-opacity-50 p-6 rounded-xl text-center">
								<div className="text-5xl font-bold text-[var(--c-accent)]">04</div>
								<div className="mt-2 text-xl font-bold">
									Launch
									<motion.div
										className="text-3xl"
										initial={{ y: 10 }}
										animate={{
											y: [10, -10, 10],
										}}
										transition={{
											duration: 2.5,
											repeat: Infinity,
											repeatType: 'loop',
											ease: 'easeInOut',
										}}
									>
										🚀
									</motion.div>
								</div>
							</div>
							<div>
								<p className="text-xl text-moon-rock mt-6 max-w-3xl">
									The big moment when your new website or application goes live. We handle all the technical details,
									ensuring a smooth transition with zero downtime. Then we celebrate your success together.
								</p>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
									<div className="bg-black bg-opacity-30 p-5 rounded-lg border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300">
										<h4 className="font-bold mb-2">Deployment</h4>
										<p className="text-sm text-moon-rock leading-relaxed">
											Carefully orchestrated deployments with monitoring and rollback capabilities
										</p>
									</div>
									<div className="bg-black bg-opacity-30 p-5 rounded-lg border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300">
										<h4 className="font-bold mb-2">Training</h4>
										<p className="text-sm text-moon-rock leading-relaxed">
											Comprehensive training sessions for your team to manage the new system
										</p>
									</div>
									<div className="bg-black bg-opacity-30 p-5 rounded-lg border border-gray-800 hover:border-[var(--c-accent)] transition-all duration-300">
										<h4 className="font-bold mb-2">Post-Launch Support</h4>
										<p className="text-sm text-moon-rock leading-relaxed">
											Dedicated support period to ensure everything runs smoothly after launch
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* Technologies Section */}
			<Section count="3.0" title="Technologies">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="Technologies"
						subtitle="we've mastered."
						accent="The right tool for the right job."
						description="We're not tied to any specific technology. Instead, we choose the best tools for your specific needs."
					/>

					<motion.div
						className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						{['React', 'Next.js', 'WordPress', 'Node.js', 'TypeScript', 'PHP', 'GraphQL', 'REST API'].map(
							(tech, index) => (
								<div
									key={index}
									className="bg-black bg-opacity-30 p-4 rounded-lg border border-gray-800 text-center hover:border-[var(--c-accent)] transition-all duration-300"
								>
									<span className="text-lg font-bold">{tech}</span>
								</div>
							)
						)}
					</motion.div>

					<div className="mt-16 bg-black bg-opacity-20 rounded-xl p-8 border border-gray-800">
						<h3 className="text-2xl font-bold mb-4">Our Development Standards</h3>
						<p className="text-lg text-moon-rock leading-relaxed mb-6">
							We adhere to the highest development standards to ensure your website is fast, secure, and accessible:
						</p>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="p-4 bg-black bg-opacity-20 rounded-lg">
								<h4 className="font-bold text-lg mb-2">Performance Optimization</h4>
								<ul className="space-y-2">
									<li className="flex items-center">
										<span className="text-[var(--c-accent)] mr-2">→</span>
										Core Web Vitals optimization
									</li>
									<li className="flex items-center">
										<span className="text-[var(--c-accent)] mr-2">→</span>
										Advanced caching strategies
									</li>
									<li className="flex items-center">
										<span className="text-[var(--c-accent)] mr-2">→</span>
										Image and asset optimization
									</li>
								</ul>
							</div>

							<div className="p-4 bg-black bg-opacity-20 rounded-lg">
								<h4 className="font-bold text-lg mb-2">Accessibility</h4>
								<ul className="space-y-2">
									<li className="flex items-center">
										<span className="text-[var(--c-accent)] mr-2">→</span>
										WCAG 2.1 AA compliance
									</li>
									<li className="flex items-center">
										<span className="text-[var(--c-accent)] mr-2">→</span>
										Keyboard navigation
									</li>
									<li className="flex items-center">
										<span className="text-[var(--c-accent)] mr-2">→</span>
										Screen reader optimization
									</li>
								</ul>
							</div>

							<div className="p-4 bg-black bg-opacity-20 rounded-lg">
								<h4 className="font-bold text-lg mb-2">Security</h4>
								<ul className="space-y-2">
									<li className="flex items-center">
										<span className="text-[var(--c-accent)] mr-2">→</span>
										OWASP best practices
									</li>
									<li className="flex items-center">
										<span className="text-[var(--c-accent)] mr-2">→</span>
										Regular security audits
									</li>
									<li className="flex items-center">
										<span className="text-[var(--c-accent)] mr-2">→</span>
										Data protection compliance
									</li>
								</ul>
							</div>
						</div>
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
							Ready to build something <span className="text-[var(--c-accent)]">extraordinary</span>?
						</h2>
						<p className="text-lg text-moon-rock leading-relaxed mb-8">
							Let's create a website that works as hard as you do. Our Denver web development team is ready to bring
							your vision to life.
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
