'use client';

import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { ServiceCard } from './ServiceCard';
import { TechCard } from './TechCard';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { motion } from 'framer-motion';
import { Button } from '../Button/Button';
import Link from 'next/link';

export const Services = () => {
	const services = [
		{
			id: '01',
			title: 'Scalable Web Development',
			description:
				'We build digital infrastructure that grows with you. Whether you&apos;re launching your first MVP or modernizing a legacy site, we deliver scalable web development solutions that support your next stage of growth.',
			features: [
				'Custom WordPress Development',
				'Full-Stack Web Application Architecture',
				'API & Platform Integration',
			],
		},
		{
			id: '02',
			title: 'Immersive Web Experiences',
			description:
				'Your website should work as hard as your team does. From lightning-fast dashboards to highly interactive digital tools, we build web applications that feel intuitive, powerful, and built just for you.',
			features: ['Advanced Front-End Engineering', 'UI/UX Design for Web Applications', 'Real-Time Data Interfaces'],
		},
		{
			id: '03',
			title: 'UX Architecture & Strategy',
			description:
				'Great design isn&apost just about looks—it&apos;s about how users feel. We create architecture systems that reduce friction, improve navigation, and drive clarity across every user journey.',
			features: ['UX Research & Behavioral Insights', 'Information Architecture', 'Interaction Design Systems'],
		},
		{
			id: '04',
			title: 'Digital Innovation & Problem Solving',
			description:
				'You don&apos;t need more tech—just the right solution. We help brands simplify complexity with technical discovery, lean architecture, and thoughtful experimentation that actually moves the needle.',
			features: ['Technical Discovery', 'Custom Solution Architecture', 'End-to-End Strategy & Execution'],
		},
	];

	const techStack = [
		{
			title: 'Custom Content Platforms',
			category: 'Built for teams who want control without complexity.',
			description:
				'We craft scalable content systems that are easy to manage and quick to update. No bloated plugins, no fragile page builders—just fast, flexible tools your team can actually use.',
			features: [
				'Modular, maintainable components',
				'Built-in performance optimization',
				'Easy editing without developer hand-holding',
			],
		},
		{
			title: 'Dynamic Web Experiences',
			category: 'Everything your site needs to scale with your business.',
			description:
				'From online ordering flows to internal dashboards, we build fast, responsive experiences that solve real problems. Custom-built to fit your operations—not the other way around.',
			features: [
				'Mobile-first, responsive layouts',
				'User flows that drive action',
				'Built to grow as your needs shift',
			],
		},
		{
			title: 'Interactive Experiences',
			category: 'Bring your brand to life with scroll, movement, and story.',
			description:
				'Need to stand out? We design immersive digital experiences that keep users engaged. From scroll-driven storytelling to clickable 3D visuals, we blend performance with visual impact.',
			features: [
				'Custom 3D and interactive moments',
				'Story-driven product showcases',
				"Optimized animations that don't kill speed",
			],
		},
		{
			title: 'Smarter Systems & Automation',
			category: 'Workflows that save time and reduce chaos.',
			description:
				'We don&apos;t slap AI on a landing page and call it innovation. We build intelligent tools that streamline how your team works—from better search to auto-tagging to predictive content. It&apos;s the kind of smart that actually matters.',
			features: [
				'Search that finds what users need. Fast.',
				'Content tagging & personalization',
				'Custom automation to reduce manual work',
			],
		},
	];

	return (
		<>
			{/* Services Section */}
			<Section count="2.0" title="Services">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="Services"
						subtitle="Built to perform. Designed to scale."
						description="We help ambitious brands solve real business problems with custom web development, scalable applications, and UX strategies built to drive results."
					/>

					<div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[var(--content-spacing)]">
						{services.map((service) => (
							<ServiceCard key={service.id} {...service} />
						))}
					</div>
				</Container>
			</Section>

			{/* Restaurant Websites CTA */}
			<Section count="4.0" title="Restaurant Solutions">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<motion.div
						className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						{/* Background accent elements */}
						<div className="absolute top-0 right-0 w-64 h-64 bg-cyber-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
						<div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
						<div className="p-8 md:p-12">
							<div className="md:col-span-3 relative z-10 flex flex-col md:pl-8">
								<div className="mb-2">
									<span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/80 text-xs font-medium">
										SPECIALTY SOLUTION
									</span>
								</div>

								<h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
									Restaurant websites that actually
									<span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyber-green to-neon-sky">
										deliver results
									</span>
								</h2>

								<p className="text-lg text-white/70 mb-6">
									Fast, scalable, and designed specifically for food service businesses. No generic templates — just
									websites that drive reservations and orders.
								</p>

								<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
									<div className="flex items-center gap-2">
										<svg
											className="w-5 h-5 text-cyber-green"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20 6L9 17L4 12"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span className="text-white/80">Mobile ordering</span>
									</div>
									<div className="flex items-center gap-2">
										<svg
											className="w-5 h-5 text-cyber-green"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20 6L9 17L4 12"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span className="text-white/80">Menu management</span>
									</div>
									<div className="flex items-center gap-2">
										<svg
											className="w-5 h-5 text-cyber-green"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20 6L9 17L4 12"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span className="text-white/80">Reservation systems</span>
									</div>
									<div className="flex items-center gap-2">
										<svg
											className="w-5 h-5 text-cyber-green"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20 6L9 17L4 12"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span className="text-white/80">Multi-location ready</span>
									</div>
								</div>
							</div>
							<div className="flex pl-8">
								<Button href="/restaurant-websites" size="lg" className=" text-center">
									See restaurant solutions &rarr;
								</Button>
							</div>
						</div>
					</motion.div>
				</Container>
			</Section>

			{/* Sacred Tools Section */}
			<Section count="3.0" title="Sacred Tools">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="No tool is sacred"
						subtitle="We don't care what's trending."
						description="We care what works. Everything we use is chosen to scale, flex, and stay out of your way."
					/>

					<div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-[var(--content-spacing)]">
						{techStack.map((tech, index) => (
							<TechCard key={tech.title} {...tech} index={index} />
						))}
					</div>
				</Container>
			</Section>
		</>
	);
};
