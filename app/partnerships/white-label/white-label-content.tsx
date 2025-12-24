'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
	Shield,
	EyeOff,
	Zap,
	Users,
	CheckCircle2,
	ArrowUpRight,
	MessageSquare,
	Code2,
	Layers,
	Cpu,
	Search,
	Terminal,
	ShieldCheck,
	Clock,
	TrendingUp,
	Sparkles,
	Box,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { StatusIndicator } from '@/components/atoms/status-indicator';
import { Button } from '@/components/ui/button';
import { podTiers } from '@/lib/data/pods';
import { getPartnershipCaseStudies } from '@/lib/data/case-studies';
import { CaseStudyRelated } from '@/components/case-study/case-study-related';

const benefits = [
	{
		title: 'Senior-Led Architecture',
		description: 'Every build gets senior technical direction. No juniors learning on your client’s dime.',
		icon: Cpu,
	},
	{
		title: 'Predictable Margins',
		description: 'Fixed monthly pricing means you can bake dev costs into your agency’s retainer structure.',
		icon: TrendingUp,
	},
	{
		title: 'Zero Management Debt',
		description: 'We handle HR, performance, and sprints. You focus on the client and the strategy.',
		icon: Users,
	},
	{
		title: 'Scale on Demand',
		description: 'Add capacity when you land big contracts. Scale back during slower months.',
		icon: Zap,
	},
];

const onboardingSteps = [
	{
		title: 'Pod Deployment',
		day: 'Day 1-3',
		description: 'We provision the Pod OS and audit any legacy repos or technical debt.',
		icon: Search,
	},
	{
		title: 'Agency Integration',
		day: 'Day 4-7',
		description: 'We bridge our Slack and Linear channels into your agency’s workflow.',
		icon: Terminal,
	},
	{
		title: 'Kickoff Sprint',
		day: 'Day 8-10',
		description: 'CI/CD is live, environments are provisioned, and the team starts shipping.',
		icon: Code2,
	},
	{
		title: 'Full Velocity',
		day: 'Day 14+',
		description: 'The pod reaches operational speed, delivering consistent updates every sprint.',
		icon: ShieldCheck,
	},
];

export default function WhiteLabelContent() {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
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
								The Invisible Engineering Engine
							</span>
						</div>
					</div>

					<h1
						className={cn('heading-display mb-6 opacity-0', mounted && 'animate-slide-up')}
						style={{ animationDelay: '0.2s' }}
					>
						Your brand. <br className="hidden sm:block" />
						<GradientText>Our dedicated pod.</GradientText>
					</h1>

					<p
						className={cn(
							'body-large text-muted-foreground mx-auto mb-10 max-w-2xl opacity-0',
							mounted && 'animate-slide-up'
						)}
						style={{ animationDelay: '0.3s' }}
					>
						Scale your agency&apos;s technical delivery without the hiring headache. Fully managed, senior-led
						engineering pods that operate as an invisible extension of your team.
					</p>

					<div
						className={cn('flex flex-wrap justify-center gap-4 opacity-0', mounted && 'animate-slide-up')}
						style={{ animationDelay: '0.4s' }}
					>
						<Button href="/contact?source=white-label" size="cta" className="gap-2">
							<MessageSquare className="size-4" />
							Deploy a Pod
						</Button>
						<Link
							href="#pricing"
							className="bg-card/50 border-border hover:border-primary/50 flex h-14 items-center gap-2 rounded-lg border px-8 text-sm font-semibold transition-all hover:shadow-lg"
						>
							View Pod Tiers
							<ArrowUpRight className="size-4" />
						</Link>
					</div>
				</div>
			</Section>

			<Section>
				<div className="grid gap-16 lg:grid-cols-2 lg:items-center">
					<div>
						<SectionHeader
							eyebrow="The Proposition"
							title="The agency secret weapon."
							description="Most agencies lose margin on development because they juggle unreliable contractors or overpriced juniors. We provide a stable, managed alternative."
							className="mb-8"
						/>
						<div className="grid gap-8 sm:grid-cols-2">
							{benefits.map((benefit) => (
								<div key={benefit.title} className="group">
									<benefit.icon className="text-primary mb-4 size-6" />
									<h4 className="text-foreground mb-2 font-bold">{benefit.title}</h4>
									<p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
								</div>
							))}
						</div>
					</div>

					<div className="bg-card/30 border-border relative overflow-hidden rounded-2xl border p-8 md:p-12 lg:p-16">
						<div className="bg-primary/5 absolute inset-0" />
						<div className="relative z-10">
							<div className="mb-8 flex items-center gap-3">
								<EyeOff className="text-primary size-6" />
								<h3 className="heading-3">100% Invisible</h3>
							</div>
							<p className="text-muted-foreground mb-6 text-lg leading-relaxed">
								We operate under your flag. Your clients never see &quot;House of Giants.&quot; We use your brand
								handles, your communication channels, and your project management tools.
							</p>
							<ul className="space-y-4">
								{[
									'Branded Slack/Discord handles',
									'Project delivery via your GitHub org',
									'Communication through your PM tools',
									'HoG leadership remains behind the scenes',
								].map((item) => (
									<li key={item} className="text-muted-foreground flex items-center gap-3 text-sm">
										<CheckCircle2 className="text-primary size-4 shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Section>

			<Section id="pricing" className="scroll-mt-24">
				<SectionHeader
					eyebrow="Pod Configurations"
					title="Choose your capacity."
					description="Predictable monthly cost. Zero recruitment overhead. High-velocity output."
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
									Recommended
								</div>
							)}
							<h3 className="font-display mb-1 text-lg font-semibold">{tier.name}</h3>
							<p className="text-muted-foreground mb-4 text-xs">per month</p>
							<p className="mb-6">
								<span className="font-display text-4xl font-bold">{tier.price}</span>
							</p>
							<div className="mb-6">
								<p className="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase">Composition</p>
								<ul className="space-y-2">
									{tier.teamComposition.map((member) => (
										<li key={member} className="text-foreground flex items-start gap-2 text-sm">
											<CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" />
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
								href="/contact?source=white-label"
								variant={tier.popular ? 'default' : 'outline'}
								className="group w-full gap-2"
							>
								Deploy Now
								<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</Button>
						</div>
					))}
				</div>
			</Section>

			<Section className="overflow-hidden">
				<div className="pointer-events-none absolute inset-0 -z-10">
					<div className="bg-muted/10 absolute inset-0" />
					<div className="gradient-section-glow absolute inset-0" />
					<NoiseOverlay opacity={0.2} className="mix-blend-overlay" />
				</div>
				<SectionHeader
					eyebrow="Onboarding"
					title="Live in 14 days."
					description="We don't wait for your setup. We bring the Pod OS—a battle-tested technical stack that lets us start shipping on Day 1."
					align="center"
					className="mb-16 md:mb-24"
				/>
				<div className="relative">
					<div className="via-primary/20 absolute top-12 bottom-0 left-6 w-px bg-linear-to-r from-transparent to-transparent lg:top-12 lg:right-0 lg:left-0 lg:h-px lg:w-full" />
					<div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
						{onboardingSteps.map((step, index) => (
							<div
								key={step.title}
								className={cn('relative pl-16 opacity-0 lg:pt-20 lg:pl-0', mounted && 'animate-slide-up')}
								style={{ animationDelay: `${0.1 + index * 0.1}s` }}
							>
								<div className="bg-background border-primary absolute top-0 left-0 z-10 flex size-12 items-center justify-center rounded-full border-2 shadow-[0_0_20px_rgba(134,239,172,0.15)] lg:top-[-24px] lg:left-1/2 lg:-translate-x-1/2">
									<step.icon className="text-primary size-5" />
								</div>
								<div className="lg:text-center">
									<span className="bg-primary/10 text-primary font-display mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
										{step.day}
									</span>
									<h3 className="text-foreground mb-3 text-xl font-bold">{step.title}</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Section>

			<CaseStudyRelated
				studies={getPartnershipCaseStudies()}
				eyebrow="Pod Output"
				title="What pods ship."
				description="Real projects delivered through our partnerships."
				showCta
				ctaText="Explore Our Work"
			/>

			<Section className="text-center">
				<div className="mx-auto max-w-3xl">
					<h2 className="heading-2 mb-6">
						Stop managing devs. <br />
						<GradientText>Start shipping results.</GradientText>
					</h2>
					<p className="body-large text-muted-foreground mb-10">
						Give your agency the technical backbone it deserves. Let&apos;s discuss which pod configuration fits your
						current pipeline.
					</p>

					<div className="flex flex-col items-center gap-6">
						<Button href="/contact?source=white-label" size="cta" className="gap-2">
							<MessageSquare className="size-4" />
							Talk to an Architect
						</Button>
						<p className="text-muted-foreground text-sm">No sales reps. Direct access to technical principals.</p>
					</div>
				</div>
			</Section>
		</main>
	);
}
