'use client';

import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { ServiceCard } from './ServiceCard';
import { TechCard } from './TechCard';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { WordPressIcon, NextJsIcon, ThreeJsIcon, AIIcon } from '../Icons/TechIcons';

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
						subtitle="We don’t care what’s trending."
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
