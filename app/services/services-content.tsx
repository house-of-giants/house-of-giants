'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
	Code,
	Palette,
	Users,
	Compass,
	Search,
	Map,
	Rocket,
	Layers,
	Target,
	Package,
	ArrowUpRight,
} from 'lucide-react';
import { Header, Footer } from '@/components/organisms';
import { CTABlock } from '@/components/organisms/cta-block';
import { Section, SectionHeader } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { StatusIndicator } from '@/components/atoms/status-indicator';
import { ProcessStep } from '@/components/molecules/process-step';
import { services } from '@/lib/data/services';

const serviceIcons = {
	development: Code,
	design: Palette,
	ux: Users,
	strategy: Compass,
};

const processSteps = [
	{
		label: 'Discovery',
		description: 'We dig into your business, users, and goals',
		icon: Search,
	},
	{
		label: 'Strategy',
		description: 'Technical roadmap and architectural decisions',
		icon: Map,
	},
	{
		label: 'Build',
		description: 'Iterative development with regular check-ins',
		icon: Layers,
	},
	{
		label: 'Launch',
		description: 'Deployment, training, and ongoing support',
		icon: Rocket,
	},
];

const approachItems = [
	{
		title: 'Tech-Agnostic',
		description:
			"We don't push a favorite stack. We choose what's right for your problem—whether that's a headless CMS, a monolithic framework, or something in between.",
		icon: Compass,
	},
	{
		title: 'Outcome-Obsessed',
		description:
			"We measure success by your metrics, not ours. Faster load times, higher conversions, less maintenance headaches—that's what matters.",
		icon: Target,
	},
	{
		title: 'Built to Hand Off',
		description:
			"Your team will actually understand the code we write. Documentation, clean architecture, no proprietary lock-in. It's yours.",
		icon: Package,
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
							Custom web development services. <br className="hidden sm:block" />
							<GradientText>Built for founders who ship.</GradientText>
						</h1>

						<p
							className={cn(
								'body-large text-muted-foreground mx-auto mb-10 max-w-2xl opacity-0',
								mounted && 'animate-slide-up'
							)}
							style={{ animationDelay: '0.3s' }}
						>
							We build custom web applications for startups and scale-ups who&apos;ve outgrown templates. No page
							builders, no shortcuts—just clean code that scales with your ambitions.
						</p>
					</div>
				</Section>

				<Section className="relative">
					<SectionHeader
						eyebrow="What We Build"
						title="Full-stack web development. Design to deployment."
						description="Everything you need to launch a custom web application that actually works. Strategy, design, development, and ongoing support—all under one roof."
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

					<div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
						<div className="lg:col-span-5">
							<SectionHeader
								eyebrow="Process"
								title="How we work."
								description="No black boxes. No hidden fees. Just a transparent, iterative process designed to get you from idea to launch."
							/>
						</div>

						<div className="lg:col-span-7">
							<div className="space-y-8">
								{processSteps.map((step, index) => (
									<ProcessStep
										key={step.label}
										index={index}
										icon={step.icon}
										label={step.label}
										description={step.description}
										className="bg-background/50 border-border hover:border-primary/50 rounded-xl border p-6 backdrop-blur-sm transition-colors"
									/>
								))}
							</div>
							<div className="border-border mt-8 border-t pt-8">
								<p className="text-muted-foreground mb-4 text-sm">Ready to see our process in action?</p>
								<Link href="/work" className="text-primary group inline-flex items-center gap-2 font-medium">
									<span className="link-underline">View case studies with real results</span>
									<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</Link>
							</div>
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
