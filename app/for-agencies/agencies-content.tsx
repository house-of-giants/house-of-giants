'use client';

import * as React from 'react';
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
} from 'lucide-react';
import { Header, Footer } from '@/components/organisms';
import { Section, SectionHeader } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { StatusIndicator } from '@/components/atoms/status-indicator';
import { Button } from '@/components/ui/button';
import { podTiers, podBenefits, hogResponsibilities, partnerResponsibilities, podFaqs } from '@/lib/data/pods';

const problems = [
	{
		title: 'Hiring Is a Nightmare',
		description: "Recruiting devs takes months. Turnover kills momentum. You're an agency, not an HR department.",
		icon: Users,
	},
	{
		title: 'Freelancers Are Unreliable',
		description:
			"Missed deadlines, inconsistent quality, constant contractor churn. You can't build a business on that.",
		icon: Clock,
	},
	{
		title: "You're Stuck in the Middle",
		description: 'Too small to build a dev team, too ambitious to stay small. Growth is bottlenecked by capacity.',
		icon: AlertTriangle,
	},
];

const benefitIcons: Record<string, React.ComponentType<{ className?: string }>> = {
	Crown,
	DollarSign,
	UserX,
	Eye: EyeOff,
	Zap,
	TrendingUp,
};

export default function AgenciesContent() {
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
									For Agencies & Studios
								</span>
							</div>
						</div>

						<h1
							className={cn('heading-display mb-6 opacity-0', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.2s' }}
						>
							Your agency, plus our <br className="hidden sm:block" />
							<GradientText>engineering pod.</GradientText>
						</h1>

						<p
							className={cn(
								'body-large text-muted-foreground mx-auto mb-10 max-w-2xl opacity-0',
								mounted && 'animate-slide-up'
							)}
							style={{ animationDelay: '0.3s' }}
						>
							A fully managed development team that extends your capacity. Senior-led architecture, predictable monthly
							cost. White-label available if you need it.
						</p>

						<div
							className={cn('flex flex-wrap justify-center gap-4 opacity-0', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.4s' }}
						>
							<Button href="/contact?source=agencies" size="cta" className="gap-2">
								<MessageSquare className="size-4" />
								Start a Partnership
							</Button>
							<Button
								variant="outline"
								size="cta"
								className="gap-2"
								onClick={() => {
									document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
								}}
							>
								See How It Works
								<ArrowUpRight className="size-4" />
							</Button>
						</div>
					</div>
				</Section>

				<Section>
					<SectionHeader
						eyebrow="The Problem"
						title="Building a dev team is painful. Running without one is worse."
						className="mb-16"
					/>

					<div className="grid gap-6 md:grid-cols-3">
						{problems.map((problem, index) => {
							const Icon = problem.icon;
							return (
								<div
									key={problem.title}
									className={cn(
										'bg-background border-border hover:border-primary/50 group rounded-xl border p-8 opacity-0 transition-all hover:shadow-lg',
										mounted && 'animate-slide-up'
									)}
									style={{ animationDelay: `${0.1 + index * 0.1}s` }}
								>
									<div className="border-border bg-card text-primary group-hover:border-primary/50 group-hover:bg-primary/10 mb-6 inline-flex size-12 items-center justify-center rounded-xl border transition-colors">
										<Icon className="size-6" />
									</div>
									<h3 className="heading-4 mb-3">{problem.title}</h3>
									<p className="text-muted-foreground leading-relaxed">{problem.description}</p>
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
						eyebrow="The Solution"
						title="A dev team without the dev team problems."
						align="center"
						className="mb-16"
					/>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{podBenefits.map((benefit, index) => {
							const Icon = benefitIcons[benefit.icon] || Zap;
							return (
								<div
									key={benefit.title}
									className={cn(
										'bg-background/50 border-border hover:border-primary/50 group rounded-xl border p-8 opacity-0 backdrop-blur-sm transition-all hover:shadow-lg',
										mounted && 'animate-slide-up'
									)}
									style={{ animationDelay: `${0.1 + index * 0.05}s` }}
								>
									<div className="text-primary mb-6">
										<Icon className="size-8" />
									</div>
									<h3 className="heading-4 mb-3">{benefit.title}</h3>
									<p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
								</div>
							);
						})}
					</div>
				</Section>

				<Section id="pod-tiers" className="scroll-mt-24">
					<SectionHeader
						eyebrow="Pod Configurations"
						title="Choose your capacity."
						description="Scale up when you land big contracts. Scale back during slower months. No long-term headcount risk."
						align="center"
						className="mb-16"
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
									href="/contact?source=agencies"
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
						description="We own technical execution. You own client relationships. Everyone stays in their lane."
						align="center"
						className="mb-16"
					/>

					<div className="grid gap-8 lg:grid-cols-2">
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
						description="Straight answers for agency owners evaluating a pod partnership."
						align="center"
						className="mb-12"
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
							Ready to scale <GradientText>your agency?</GradientText>
						</h2>
						<p className="body-large text-muted-foreground mb-10">
							Let&apos;s talk about your capacity needs, your project pipeline, and how a pod can help you grow without
							the growing pains.
						</p>

						<div className="flex flex-col items-center gap-6">
							<Button href="/contact?source=agencies" size="cta" className="gap-2">
								<MessageSquare className="size-4" />
								Start a Partnership
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
