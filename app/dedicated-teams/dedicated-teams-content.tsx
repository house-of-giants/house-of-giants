'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
	Crown,
	DollarSign,
	UserX,
	EyeOff,
	Zap,
	TrendingUp,
	AlertTriangle,
	Users,
	Clock,
	ArrowUpRight,
	MessageSquare,
	Check,
	Sparkles,
	Box,
	Layers,
	Cpu,
	Rocket,
	Terminal,
	Search,
	ShieldCheck,
	Code2,
} from 'lucide-react';
import { Header, Footer } from '@/components/organisms';
import { Section, SectionHeader } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { StatusIndicator } from '@/components/atoms/status-indicator';
import { Button } from '@/components/ui/button';
import { CaseStudyCard } from '@/components/molecules';
import { podTiers, podBenefits, hogResponsibilities, partnerResponsibilities, podFaqs } from '@/lib/data/pods';
import { caseStudies } from '@/lib/data/case-studies';

const problems = [
	{
		title: 'Hiring Is a Nightmare',
		description:
			"Recruiting senior devs takes months. Turnover kills momentum. You're building a product, not an HR department.",
		icon: Users,
	},
	{
		title: 'Freelancers Are Unreliable',
		description:
			"Missed deadlines, inconsistent quality, constant contractor churn. You can't build a scalable business on that.",
		icon: Clock,
	},
	{
		title: "You're Stuck in the Middle",
		description:
			'Too small to justify a full internal dev team, too ambitious to stay small. Growth is bottlenecked by capacity.',
		icon: AlertTriangle,
	},
];

const podExplainer = [
	{
		title: 'Self-Sustaining Unit',
		description:
			'A pod is a complete engineering team in a box. It includes leadership, execution, and quality assurance.',
		icon: Box,
	},
	{
		title: 'The Delivery Engine',
		description: 'We bring the process, the tools, and the talent. You get senior output without the management debt.',
		icon: Layers,
	},
	{
		title: 'Principal-Led',
		description: 'Every pod is led by a senior architect who owns the technical roadmap so you don’t have to.',
		icon: Cpu,
	},
	{
		title: 'High Velocity',
		description:
			'Because the team has worked together for years, they bypass the "storming" phase and start shipping on day one.',
		icon: Rocket,
	},
];

const onboardingSteps = [
	{
		title: 'Pod OS Deployment',
		day: 'Day 1-3',
		description:
			'We deploy our technical foundation, audit any existing infrastructure, and bring you into our delivery channels.',
		icon: Search,
	},
	{
		title: 'Technical Roadmap',
		day: 'Day 4-7',
		description:
			'Your Pod Lead defines the architecture, identifies bottlenecks, and maps out the first three sprints.',
		icon: Terminal,
	},
	{
		title: 'First Sprint Kickoff',
		day: 'Day 8-10',
		description: 'Environments are live, CI/CD is configured, and the team begins shipping production-ready code.',
		icon: Code2,
	},
	{
		title: 'Steady Velocity',
		day: 'Day 14+',
		description:
			'The pod reaches full velocity, delivering consistent updates every sprint with zero management on your end.',
		icon: ShieldCheck,
	},
];

const podTechStack = [
	{ name: 'Slack', category: 'Communication' },
	{ name: 'Linear', category: 'Project Management' },
	{ name: 'GitHub', category: 'Version Control' },
	{ name: 'Vercel', category: 'Deployment' },
	{ name: 'Notion', category: 'Documentation' },
	{ name: 'Figma', category: 'Design Handoff' },
];

const benefitIcons: Record<string, React.ComponentType<{ className?: string }>> = {
	Crown,
	DollarSign,
	UserX,
	Eye: EyeOff,
	Zap,
	TrendingUp,
};

export default function DedicatedTeamsContent() {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	// Featured case studies that fit the "Pod" model
	const podCaseStudies = caseStudies.filter((study) => ['cybernest', 'shakey-graves'].includes(study.slug));

	return (
		<>
			<Header />
			<main>
				<Section
					padding="none"
					container="none"
					className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-32 pb-24 md:pb-32"
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
									Scalable Engineering Capacity
								</span>
							</div>
						</div>

						<h1
							className={cn('heading-display mb-6 opacity-0', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.2s' }}
						>
							Your vision, plus our <br className="hidden sm:block" />
							<GradientText>dedicated engineering pod.</GradientText>
						</h1>

						<p
							className={cn(
								'body-large text-muted-foreground mx-auto mb-10 max-w-2xl opacity-0',
								mounted && 'animate-slide-up'
							)}
							style={{ animationDelay: '0.3s' }}
						>
							Scale your product with a fully managed, dedicated development team. Senior-led architecture, predictable
							monthly cost, and zero hiring overhead.
						</p>

						<div
							className={cn('flex flex-wrap justify-center gap-4 opacity-0', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.4s' }}
						>
							<Button href="/contact?source=dedicated-teams" size="cta" className="gap-2">
								<MessageSquare className="size-4" />
								Build Your Pod
							</Button>
							<Button
								variant="outline"
								size="cta"
								className="gap-2"
								onClick={() => {
									document.getElementById('what-is-a-pod')?.scrollIntoView({ behavior: 'smooth' });
								}}
							>
								What is a Pod?
								<ArrowUpRight className="size-4" />
							</Button>
						</div>
					</div>
				</Section>

				<Section>
					<div className="mx-auto max-w-4xl">
						<SectionHeader
							eyebrow="The Problem"
							title="Building a dev team is painful."
							subtitle="Running without one is worse."
							description="Scaling engineering capacity is the #1 bottleneck for ambitious products. We've identified the three core points of failure in the traditional model."
							className="mb-16 md:mb-24"
						/>
					</div>

					<div className="mx-auto max-w-4xl divide-y divide-white/5 border-y border-white/5">
						{problems.map((problem, index) => {
							const Icon = problem.icon;
							return (
								<div
									key={problem.title}
									className={cn(
										'group flex flex-col gap-8 py-12 opacity-0 transition-all md:flex-row',
										mounted && 'animate-slide-up'
									)}
									style={{ animationDelay: `${0.1 + index * 0.1}s` }}
								>
									<div className="flex shrink-0 items-start gap-4">
										<span className="text-primary pt-1.5 font-mono text-xs opacity-50">
											0{index + 1} {'//'}
										</span>
										<div className="border-border bg-card/50 text-primary group-hover:border-primary/50 group-hover:bg-primary/10 flex size-12 items-center justify-center rounded-xl border transition-colors">
											<Icon className="size-6" />
										</div>
									</div>

									<div className="flex-1">
										<h3 className="font-display group-hover:text-primary mb-3 text-2xl font-bold tracking-tight transition-colors">
											{problem.title}
										</h3>
										<p className="text-muted-foreground text-lg leading-relaxed">{problem.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</Section>

				<Section id="what-is-a-pod" className="scroll-mt-24">
					<div className="bg-card/30 border-border rounded-3xl border p-8 md:p-12 lg:p-16">
						<SectionHeader
							eyebrow="The Model"
							title="What the heck is an engineering pod?"
							description={
								<>
									Think of it as a &apos;plug-and-play&apos; dev team. Most agencies sell you hours or projects; we sell
									you a self-sustaining unit of senior talent capable of executing our full range of{' '}
									<Link href="/services" className="text-primary hover:underline">
										development services
									</Link>
									.
								</>
							}
							className="mb-12 md:mb-16"
						/>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{podExplainer.map((item, index) => {
								const Icon = item.icon;
								return (
									<div
										key={item.title}
										className={cn(
											'bg-background/40 border-border/50 hover:border-primary/30 group hover:shadow-primary/5 relative rounded-2xl border p-8 opacity-0 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-2xl',
											mounted && 'animate-slide-up'
										)}
										style={{ animationDelay: `${0.1 + index * 0.1}s` }}
									>
										<div className="border-border bg-card/50 text-primary group-hover:border-primary/50 group-hover:bg-primary/10 mb-6 inline-flex size-12 items-center justify-center rounded-xl border transition-colors">
											<Icon className="size-6" />
										</div>
										<h3 className="text-foreground font-display mb-2 text-lg font-bold">{item.title}</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</Section>

				<Section className="overflow-hidden">
					<div className="pointer-events-none absolute inset-0 -z-10">
						<div className="bg-muted/10 absolute inset-0" />
						<div className="gradient-section-glow absolute inset-0" />
						<NoiseOverlay opacity={0.2} className="mix-blend-overlay" />
					</div>

					<SectionHeader
						eyebrow="The Solution"
						title="A dev team without the dev team problems."
						align="center"
						className="mb-16 md:mb-24"
					/>

					<div className="mx-auto grid max-w-5xl gap-x-16 gap-y-12 md:grid-cols-2">
						{podBenefits.map((benefit, index) => {
							const Icon = benefitIcons[benefit.icon] || Zap;
							return (
								<div
									key={benefit.title}
									className={cn('group flex gap-6 opacity-0', mounted && 'animate-slide-up')}
									style={{ animationDelay: `${0.1 + index * 0.05}s` }}
								>
									<div className="text-primary mt-1 shrink-0">
										<Icon className="size-6" />
									</div>
									<div>
										<h3 className="text-foreground font-display mb-2 text-xl font-bold">{benefit.title}</h3>
										<p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</Section>

				{/* NEW: Process / Onboarding Section */}
				<Section id="process" className="overflow-hidden">
					<SectionHeader
						eyebrow="Onboarding"
						title="Operational in 14 days."
						description="We don't wait for your setup. We bring our own battle-tested stack, provision or audit your infrastructure, and start shipping code on day one."
						align="center"
						className="mb-16 md:mb-24"
					/>

					<div className="relative">
						{/* Progress Line */}
						<div className="via-primary/20 absolute top-12 bottom-0 left-6 w-px bg-linear-to-r from-transparent to-transparent lg:top-12 lg:right-0 lg:left-0 lg:h-px lg:w-full" />

						<div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
							{onboardingSteps.map((step, index) => {
								const Icon = step.icon;
								return (
									<div
										key={step.title}
										className={cn('relative pl-16 opacity-0 lg:pt-20 lg:pl-0', mounted && 'animate-slide-up')}
										style={{ animationDelay: `${0.1 + index * 0.1}s` }}
									>
										{/* Step Indicator */}
										<div className="bg-background border-primary absolute top-0 left-0 z-10 flex size-12 items-center justify-center rounded-full border-2 shadow-[0_0_20px_rgba(134,239,172,0.15)] lg:top-[-24px] lg:left-1/2 lg:-translate-x-1/2">
											<Icon className="text-primary size-5" />
										</div>

										<div className="lg:text-center">
											<span className="bg-primary/10 text-primary font-display mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
												{step.day}
											</span>
											<h3 className="text-foreground mb-3 text-xl font-bold">{step.title}</h3>
											<p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* Stack section - Redesigned as an Integration Panel */}
					<div className="bg-card/30 border-border mt-24 overflow-hidden rounded-3xl border md:mt-32">
						<div className="border-border bg-background/50 border-b p-6 px-8">
							<div className="flex items-center gap-3">
								<div className="bg-primary/20 size-2 animate-pulse rounded-full" />
								<h4 className="font-display text-sm font-bold tracking-widest uppercase">The Pod Operating System</h4>
							</div>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
							{podTechStack.map((tool) => (
								<div
									key={tool.name}
									className="border-border group hover:bg-primary/5 flex flex-col items-center border-r border-b p-6 text-center transition-colors last:border-r-0"
								>
									<span className="text-muted-foreground mb-2 text-[10px] font-bold tracking-tighter uppercase">
										{tool.category}
									</span>
									<span className="text-foreground font-display group-hover:text-primary text-sm font-bold transition-colors">
										{tool.name}
									</span>
								</div>
							))}
						</div>

						<div className="bg-muted/10 p-4 px-8">
							<p className="text-muted-foreground text-[11px] leading-relaxed">
								* We provide the full infrastructure and toolchain by default. If you have legacy systems, we bridge
								them into our process for maximum velocity.
							</p>
						</div>
					</div>
				</Section>

				{/* NEW: Case Studies / Evidence Section */}
				<Section className="bg-muted/20">
					<SectionHeader
						eyebrow="Proof"
						title="Pod success stories."
						description="See how our dedicated teams have helped founders build and scale their products."
						className="mb-16"
					/>

					<div className="grid gap-8 lg:grid-cols-2">
						{podCaseStudies.map((study, index) => (
							<CaseStudyCard key={study.slug} study={study} variant="minimal" index={index} mounted={mounted} />
						))}
					</div>
				</Section>

				<Section id="pod-tiers" className="scroll-mt-24">
					<SectionHeader
						eyebrow="Pod Configurations"
						title="Choose your capacity."
						description="Scale up for big launches. Scale back during maintenance. No long-term headcount risk or severance packages."
						align="center"
						className="mb-16 md:mb-24"
					/>

					<div className="bg-border mx-auto grid max-w-5xl grid-cols-1 gap-px md:grid-cols-3">
						{podTiers.map((tier, index) => (
							<div
								key={tier.id}
								className={cn('bg-background relative flex flex-col p-8 opacity-0', mounted && 'animate-slide-up')}
								style={{ animationDelay: `${0.1 + index * 0.1}s` }}
							>
								{tier.popular && <div className="gradient-bar-accent absolute -top-px right-0 left-0 h-1" />}

								{tier.popular && (
									<div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-1 self-start px-3 py-1 text-xs font-medium">
										<Sparkles className="size-3" />
										Most Popular
									</div>
								)}

								<h3 className="font-display mb-1 text-lg font-semibold">{tier.name}</h3>
								<p className="text-muted-foreground mb-4 text-xs">per month</p>

								<p className="mb-6">
									<span className="font-display text-4xl font-bold">{tier.price}</span>
								</p>

								<div className="mb-6">
									<p className="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase">
										Team Composition
									</p>
									<ul className="space-y-2">
										{tier.teamComposition.map((member) => (
											<li key={member} className="text-foreground flex items-start gap-2 text-sm">
												<Check className="text-primary mt-0.5 size-4 shrink-0" />
												{member}
											</li>
										))}
									</ul>
								</div>

								<div className="border-border mb-8 flex-1 border-t pt-6">
									<p className="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase">Best For</p>
									<p className="text-muted-foreground text-sm leading-relaxed">{tier.bestFor}</p>
								</div>

								<Button
									href="/contact?source=dedicated-teams"
									variant={tier.popular ? 'default' : 'outline'}
									className={cn('mt-auto w-full', 'group')}
								>
									Get Started
									<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</Button>
							</div>
						))}
					</div>
				</Section>

				<Section id="how-it-works" className="scroll-mt-24 overflow-hidden">
					<div className="pointer-events-none absolute inset-0 -z-10">
						<div className="bg-muted/10 absolute inset-0" />
						<div className="gradient-section-glow absolute inset-0" />
						<NoiseOverlay opacity={0.2} className="mix-blend-overlay" />
					</div>

					<SectionHeader
						eyebrow="How It Works"
						title="Clear division of responsibility."
						description="We own the technical execution. You own the product vision. Everyone stays in their lane."
						align="center"
						className="mb-16 md:mb-24"
					/>

					<div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
						<div
							className={cn(
								'bg-background/50 border-border rounded-xl border p-8 opacity-0 backdrop-blur-sm',
								mounted && 'animate-slide-up'
							)}
							style={{ animationDelay: '0.1s' }}
						>
							<div className="border-primary/50 bg-primary/10 mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1">
								<div className="bg-primary size-2 rounded-full" />
								<span className="text-primary text-xs font-medium">What We Handle</span>
							</div>

							<div className="space-y-6">
								{hogResponsibilities.map((responsibility) => (
									<div key={responsibility.category}>
										<h4 className="text-foreground mb-3 font-semibold">{responsibility.category}</h4>
										<ul className="space-y-2">
											{responsibility.items.map((item) => (
												<li key={item} className="text-muted-foreground flex items-start gap-2 text-sm">
													<Check className="text-primary mt-0.5 size-4 shrink-0" />
													{item}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>

						<div
							className={cn(
								'bg-background/50 border-border rounded-xl border p-8 opacity-0 backdrop-blur-sm',
								mounted && 'animate-slide-up'
							)}
							style={{ animationDelay: '0.2s' }}
						>
							<div className="border-border bg-muted/50 mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1">
								<div className="bg-muted-foreground size-2 rounded-full" />
								<span className="text-muted-foreground text-xs font-medium">What You Provide</span>
							</div>

							<div className="space-y-6">
								{partnerResponsibilities.map((responsibility) => (
									<div key={responsibility.category}>
										<h4 className="text-foreground mb-3 font-semibold">{responsibility.category}</h4>
										<ul className="space-y-2">
											{responsibility.items.map((item) => (
												<li key={item} className="text-muted-foreground flex items-start gap-2 text-sm">
													<Check className="text-muted-foreground mt-0.5 size-4 shrink-0" />
													{item}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
					</div>
				</Section>

				<Section>
					<SectionHeader
						eyebrow="FAQ"
						title="Common questions."
						description="Straight answers about how dedicated pods work in practice."
						align="center"
						className="mb-16 md:mb-24"
					/>

					<div className="mx-auto max-w-3xl space-y-6">
						{podFaqs.map((faq, index) => (
							<div
								key={faq.question}
								className={cn(
									'bg-background/50 border-border rounded-xl border p-6 opacity-0 backdrop-blur-sm',
									mounted && 'animate-slide-up'
								)}
								style={{ animationDelay: `${0.1 + index * 0.1}s` }}
							>
								<h3 className="text-foreground mb-3 font-semibold">{faq.question}</h3>
								<p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
							</div>
						))}
					</div>
				</Section>

				<Section className="text-center">
					<div className="mx-auto max-w-3xl">
						<h2 className="heading-2 mb-6">
							Ready to scale <GradientText>your capacity?</GradientText>
						</h2>
						<p className="body-large text-muted-foreground mb-10">
							Let&apos;s talk about your roadmap, your current bottlenecks, and how a dedicated pod can help you ship
							faster without the hiring headache.
						</p>

						<div className="flex flex-col items-center gap-6">
							<Button href="/contact?source=dedicated-teams" size="cta" className="gap-2">
								<MessageSquare className="size-4" />
								Build Your Pod
							</Button>
							<p className="text-muted-foreground text-sm">
								Or email us directly:{' '}
								<a href="mailto:hello@houseofgiants.com" className="text-primary hover:underline">
									hello@houseofgiants.com
								</a>
							</p>
						</div>
					</div>
				</Section>
			</main>
			<Footer />
		</>
	);
}
