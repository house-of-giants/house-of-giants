'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
	Code,
	Palette,
	Users,
	Compass,
	Rocket,
	Target,
	Package,
	ArrowUpRight,
	TrendingUp,
} from 'lucide-react';
import { Header, Footer } from '@/components/organisms';
import { Section, SectionHeader } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { StatusIndicator } from '@/components/atoms/status-indicator';
import { services } from '@/lib/data/services';
import { Button } from '@/components/ui/button';

const serviceIcons = {
	development: Code,
	ux: Users,
	innovation: Compass,
	immersive: Palette,
	qsr: Package,
};

const processPhases = [
	{
		label: 'Plan',
		description: "We dig into your goals, map out what we're building, and define success metrics before we start.",
		substeps: ['Understand your business and users', 'Map out features and requirements'],
		deliverables: ['User research', 'Site structure', 'Requirements doc', 'Success metrics'],
		icon: Compass,
	},
	{
		label: 'Create',
		description: 'We design the experience and build it with clean, fast code your team can actually use.',
		substeps: ['Design the user experience', 'Build with clean, maintainable code'],
		deliverables: ['UX designs', 'Component library', 'Production code', 'CMS setup'],
		icon: Code,
	},
	{
		label: 'Launch',
		description: 'We test everything thoroughly, then go live with analytics and a safety net.',
		substeps: ['Test speed, accessibility, and devices', 'Go live with a safety net'],
		deliverables: ['Speed & accessibility audit', 'Cross-device testing', 'Analytics setup', 'Launch checklist'],
		icon: Rocket,
	},
	{
		label: 'Scale',
		description: 'We train your team, hand everything over, then help you optimize and grow.',
		substeps: ['Train your team to own it', 'Improve based on real data'],
		deliverables: ['Team training', 'Documentation', 'Performance tuning', 'Growth plan'],
		icon: TrendingUp,
	},
];

const approachItems = [
	{
		title: 'Tech-Agnostic',
		description:
			"We don't force a single stack. We pick the right tools for your specific goals, ensuring performance and scalability from day one.",
		icon: Compass,
	},
	{
		title: 'Small by Design',
		description:
			'The principals do the work. You get direct access to senior experts, faster decisions, and total accountability throughout the build.',
		icon: Users,
	},
	{
		title: 'Outcomes > Artifacts',
		description:
			"We ship measurable impact, not just pretty pixels. Our sites are designed to drive revenue, scale with your growth, and stay fast.",
		icon: Target,
	},
];

export default function ServicesContent() {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			<Header />
			<main>
				<Section
					padding="none"
					container="none"
					className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-32 pb-20"
				>
					<div className="bg-background absolute inset-0 overflow-visible">
						<GradientOrbs />
						<NoiseOverlay />
					</div>

					<div className="container-wide relative z-10 text-center">
						<div
							className={cn('flex justify-center opacity-0', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.1s' }}
						>
							<div className="bg-background/50 border-border mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 backdrop-blur-sm">
								<StatusIndicator />
								<span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
									Denver Web Development Studio
								</span>
							</div>
						</div>

						<h1
							className={cn('heading-display mb-6 opacity-0', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.2s' }}
						>
							Custom code. <br className="hidden sm:block" />
							<GradientText>Built for those who ship.</GradientText>
						</h1>

						<p
							className={cn(
								'body-large text-muted-foreground mx-auto mb-10 max-w-2xl opacity-0',
								mounted && 'animate-slide-up'
							)}
							style={{ animationDelay: '0.3s' }}
						>
							No templates. No bloat. High-performance web apps built to scale with your ambitions.
						</p>
					</div>
				</Section>

				<Section className="relative">
					<SectionHeader
						eyebrow="What We Build"
						title="Full-stack web development."
						subtitle="From strategy to deployment."
						description="Everything you need to launch a custom web application that actually works. Strategy, design, development, and ongoing support. All under one roof."
						className="mb-16"
					/>

					<div className="grid gap-8 lg:grid-cols-2">
						{services.map((service) => {
							const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Code;
							return (
								<div
									key={service.id}
									id={service.id}
									className="bg-background group border-border hover:border-primary/50 relative flex scroll-mt-32 flex-col overflow-hidden rounded-2xl border p-8 transition-all hover:shadow-lg lg:p-10"
								>
									<div className="mb-8 flex items-start justify-between">
										<div className="border-border bg-card text-primary group-hover:border-primary/50 group-hover:bg-primary/10 inline-flex size-14 items-center justify-center rounded-xl border transition-colors">
											<Icon className="size-7" />
										</div>
									</div>

									<h3 className="heading-3 mb-3">{service.title}</h3>
									<p className="text-muted-foreground mb-6 text-lg leading-relaxed">{service.description}</p>

									<div className="mb-8">
										<h4 className="text-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
											Deliverables
										</h4>
										<ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-2">
											{service.deliverables.map((item) => (
												<li key={item} className="text-muted-foreground flex items-center gap-2 text-sm">
													<span className="bg-primary/50 size-1.5 rounded-full" />
													{item}
												</li>
											))}
										</ul>
									</div>

									<div className="bg-muted/30 -mx-8 mt-auto -mb-10 border-t p-8 lg:-mx-10 lg:-mb-10 lg:p-10">
										<h4 className="text-foreground mb-3 text-sm font-semibold tracking-wider uppercase">Best For</h4>
										<div className="mb-6 flex flex-wrap gap-2">
											{service.goodFor.map((item) => (
												<span
													key={item}
													className="bg-background border-border text-muted-foreground inline-flex rounded-full border px-3 py-1 text-xs font-medium"
												>
													{item}
												</span>
											))}
										</div>
										<Link
											href="/work"
											className="text-primary group mt-6 inline-flex items-center gap-2 text-sm font-medium"
										>
											<span className="link-underline">See {service.title.toLowerCase()} projects</span>
											<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</Section>

				<Section className="overflow-hidden">
					<div className="pointer-events-none absolute inset-0 -z-10">
						<div className="bg-muted/10 absolute inset-0" />
						<div className="gradient-section-glow absolute inset-0" />
						<NoiseOverlay opacity={0.2} className="mix-blend-overlay" />
					</div>

					<SectionHeader
						eyebrow="Delivery Lifecycle"
						title="How we ship."
						description="No black boxes. No hidden fees. Transparent phases with clear deliverables at every step. Definition of Done before we move on."
						align="center"
						className="mb-16"
					/>

					<div className="grid gap-6 sm:grid-cols-2">
						{processPhases.map((phase, index) => {
							const Icon = phase.icon;
							return (
								<div
									key={phase.label}
									className="bg-background/50 border-border hover:border-primary/50 group relative flex flex-col rounded-xl border p-8 backdrop-blur-sm transition-all hover:shadow-lg"
								>
									<div className="mb-6 flex items-center justify-between">
										<span className="bg-primary/10 text-primary font-display flex size-10 items-center justify-center rounded-lg text-base font-bold">
											{index + 1}
										</span>
										<Icon className="text-muted-foreground group-hover:text-primary size-6 transition-colors" />
									</div>

									<h3 className="text-foreground mb-3 text-xl font-semibold">{phase.label}</h3>
									<p className="text-muted-foreground mb-4 text-base leading-relaxed">{phase.description}</p>

									<div className="border-border mb-4 border-t pt-4">
										<p className="text-muted-foreground mb-2 text-xs font-medium tracking-wider uppercase">
											Our job
										</p>
										<ul className="space-y-1.5">
											{phase.substeps.map((item) => (
												<li
													key={item}
													className="text-muted-foreground flex items-center gap-2 text-sm"
												>
													<span className="bg-primary/50 size-1.5 rounded-full" />
													{item}
												</li>
											))}
										</ul>
									</div>

									<div className="border-border mt-auto border-t pt-4">
										<p className="text-muted-foreground mb-2 text-xs font-medium tracking-wider uppercase">
											Deliverables
										</p>
										<ul className="space-y-1">
											{phase.deliverables.map((item) => (
												<li
													key={item}
													className="text-muted-foreground flex items-center gap-2 text-xs"
												>
													<span className="bg-primary/50 size-1 rounded-full" />
													{item}
												</li>
											))}
										</ul>
									</div>
								</div>
							);
						})}
					</div>

					<div className="border-border mt-12 border-t pt-8">
						<div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
							<div className="text-center sm:text-left">
								<p className="text-foreground mb-1 font-medium">Ready to see our process in action?</p>
								<p className="text-muted-foreground text-sm">
									Real projects. Real timelines. Real outcomes.
								</p>
							</div>
							<Button
								href="/work"
								variant="default"
								size="cta"
							>
								View case studies
								<ArrowUpRight className="size-4 transition-transform" />
							</Button>
						</div>
					</div>
				</Section>

				<Section>
					<SectionHeader
						eyebrow="Philosophy"
						title="We choose tools. They don't choose us."
						description="Most agencies are married to one stack. We're not. Whatever technology makes sense for your business, your timeline, and your team—that's what we use."
						align="center"
					/>

					<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6">
						{approachItems.map((item) => (
							<div
								key={item.title}
								className="bg-background border-border hover:border-primary/50 group rounded-xl border p-6 transition-colors"
							>
								<div className="text-primary mb-4">
									<item.icon className="size-8" />
								</div>
								<h3 className="heading-4 mb-2">{item.title}</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
							</div>
						))}
					</div>
					<div className="mt-12 text-center">
						<p className="text-muted-foreground mb-4">Curious about pricing?</p>
						<Link href="/pricing" className="text-primary group inline-flex items-center gap-2 font-medium">
							<span className="link-underline">See transparent pricing for dedicated development teams</span>
							<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</Link>
					</div>
				</Section>
			</main>
			<Footer />
		</>
	);
}
