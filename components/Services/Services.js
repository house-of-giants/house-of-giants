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
				'We&apos;re here to make users say &ldquo;holy shit&rdquo; when they land on your site, no matter if you&apos;re a startup or a national brand. Our scalable approach means you get a platform that evolves with your growth—so you&apos;re never stuck rebuilding from scratch when the next big opportunity (or challenge) hits.',
			features: ['WordPress Development', 'Full-Stack Application Architecture', 'API & System Integration'],
		},
		{
			id: '02',
			title: 'Immersive Web Experiences',
			description:
				'Most &ldquo;interactive design&rdquo; talk ends at fancy visuals, but we go deeper—building true web applications designed for speed, engagement, and next-level user flows. Whether it&apos;s a sleek dashboard, a real-time data platform, or a highly interactive marketing funnel, we fuse our web development wizardry with user-centered design to deliver experiences people want to use.',
			features: [
				'Advanced Front-End Engineering',
				'Responsive & Intuitive UI/UX',
				'Real-Time Data & Dynamic Interfaces',
			],
		},
		{
			id: '03',
			title: 'UX Architecture',
			description:
				'We don&apos;t just build interfaces – we architect digital experiences that users actually want to use. Our deep-dive research and user-centered approach ensures every pixel serves a purpose. From user flows to interaction patterns, we create experiences that feel like magic.',
			features: ['User Research & Personas', 'Information Architecture', 'Interaction Design Systems'],
		},
		{
			id: '04',
			title: 'Digital Innovation',
			description:
				'We&apos;re problem solvers first, coders second. Our superpower? Asking better questions that lead to breakthrough solutions. We dive deep into your challenges, emerging with innovative approaches that transform complex problems into elegant solutions. No buzzwords, just results.',
			features: ['Strategic Problem Solving', 'Technical Discovery', 'Solution Architecture'],
		},
	];

	const techStack = [
		{
			title: 'WordPress',
			category: 'Content Management',
			description:
				'WordPress solutions built the right way. Yeah, we said it. While others slap together plugins like a kid with LEGOs, we leverage native WordPress features and the Gutenberg editor to create powerful, maintainable digital platforms that scale with your business.',
			features: ['Custom Gutenberg Blocks & Patterns', 'Block Theme Development', 'Core-Focused Architecture'],
			icon: <WordPressIcon />,
		},
		{
			title: 'Next.js',
			category: 'Full-Stack Platform',
			description:
				'Blazing-fast full-stack applications that make dial-up look like a joke. We harness Next.js&apos;s server-side rendering and edge computing to build enterprise-grade platforms that outpace your old setup. Smooth, scalable, and downright unstoppable. Just how we like it.',
			features: ['React Server Components & Streaming', 'Edge & Lambda Architecture', 'Advanced SEO & Meta Generation'],
			icon: <NextJsIcon />,
		},
		{
			title: 'Three.js',
			category: '3D Graphics Engine',
			description:
				'Turn your 2D website into a mind-bending digital playground. We craft WebGL-powered 3D experiences that make your users forget they&apos;re on a browser. From product configurators to data visualizations, we&apos;re pushing pixels until your metrics go vertical.',
			features: ['Performance-Optimized 3D Scenes', 'Interactive Product Experiences', 'Real-time Data Visualization'],
			icon: <ThreeJsIcon />,
		},
		{
			title: 'AI Integration',
			category: 'Machine Learning',
			description:
				'Skip the AI buzzwords – we&apos;re here to make machines work for you. We integrate cutting-edge machine learning models that transform your data into business intelligence. From NLP to computer vision, we&apos;re building AI solutions that actually solve problems, not just create them.',
			features: ['Custom ML Model Development', 'Intelligent Content Analysis', 'Predictive User Experience'],
			icon: <AIIcon />,
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
						subtitle="that deliver results."
						accent="We don't just make it pretty."
						description="We build digital solutions that solve real business problems and drive measurable results."
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
						title="Sacred Tools"
						subtitle="We don't worship at the digital altar."
						accent="Technology changes faster than we change our socks."
						description="That's why we're tech agnostic. We choose technologies that grow with your business."
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
