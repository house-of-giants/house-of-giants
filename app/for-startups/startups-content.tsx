'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Rocket, TrendingUp, Users, Clock, Code, AlertTriangle, Zap, ArrowUpRight } from 'lucide-react';
import { Header, Footer } from '@/components/organisms';
import { Section, SectionHeader } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { StatusIndicator } from '@/components/atoms/status-indicator';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/lib/data/case-studies';

const startupCaseStudies = caseStudies.filter(
	(study) => study.industry === 'SaaS' || study.slug === 'cybernest' || study.slug === 'hyperlocology'
);

const problems = [
	{
		title: 'Templates Hit a Wall',
		description:
			'Squarespace was fine for your landing page. Now you need custom features, integrations, and performance. Rebuilding from scratch costs more than doing it right the first time.',
		icon: AlertTriangle,
	},
	{
		title: 'Big Agencies Move Slow',
		description:
			"You're burning runway waiting for approvals. Traditional agencies have layers of account managers, endless meetings, and timelines that don't match startup speed.",
		icon: Clock,
	},
	{
		title: 'DIY Looks Amateur',
		description:
			"Investors notice. Customers notice. A cobbled-together site signals you're not ready for growth. First impressions are expensive to fix.",
		icon: AlertTriangle,
	},
];

const solutions = [
	{
		title: 'Ship Fast, Ship Right',
		description:
			"We move at startup pace because we're small by design. No layers, no approvals—just direct access to the people writing your code.",
		icon: Zap,
	},
	{
		title: 'Built to Survive Growth',
		description:
			'That MVP you need now? We build it to survive your Series A, your pivot, and your 10x traffic spike. No rebuilding in 18 months.',
		icon: TrendingUp,
	},
	{
		title: 'Founders Who Get It',
		description:
			"We've worked with pre-seed to Series B. We understand burn rate, investor demos, and the difference between 'good enough' and 'investor-ready.'",
		icon: Users,
	},
];

const startupScopes = [
	{
		name: 'MVP / Landing',
		price: '$15-20k',
		timeline: '4-6 weeks',
		description:
			'Launch fast with a polished marketing site or MVP. Perfect for validating ideas and raising pre-seed.',
		icon: Rocket,
	},
	{
		name: 'Product Site',
		price: '$25-35k',
		timeline: '6-8 weeks',
		description: 'Full marketing site with custom features, integrations, and a CMS your team can actually use.',
		icon: TrendingUp,
		popular: true,
	},
	{
		name: 'Platform / App',
		price: '$40k+',
		timeline: '10-14 weeks',
		description: 'Web applications with auth, dashboards, APIs, and the architecture to scale post-funding.',
		icon: Code,
	},
];

const gradientByIndex = ['from-primary/30 via-primary/10 to-accent/20', 'from-accent/30 via-accent/10 to-primary/20'];

export default function StartupsContent() {
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
									For Startups & Scale-ups
								</span>
							</div>
						</div>

						<h1
							className={cn('heading-display mb-6 opacity-0', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.2s' }}
						>
							Websites that help startups <br className="hidden sm:block" />
							<GradientText>get funded.</GradientText>
						</h1>

						<p
							className={cn(
								'body-large text-muted-foreground mx-auto mb-10 max-w-2xl opacity-0',
								mounted && 'animate-slide-up'
							)}
							style={{ animationDelay: '0.3s' }}
						>
							You&apos;ve outgrown Squarespace. You need more than a template. You need a web presence that earns
							investor confidence, converts users, and scales with your growth.
						</p>

						<div
							className={cn('flex flex-wrap justify-center gap-4 opacity-0', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.4s' }}
						>
							<Button href="/contact?source=startups" size="cta" className="gap-2">
								<Rocket className="size-4" />
								Start Your Project
							</Button>
							<Button href="/work" variant="outline" size="cta" className="gap-2">
								See Startup Work
								<ArrowUpRight className="size-4" />
							</Button>
						</div>
					</div>
				</Section>

				<Section>
					<SectionHeader
						eyebrow="The Problem"
						title="Templates don't scale."
            subtitle="Agencies don't move fast."
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
						title="Built for startup speed."
            subtitle="Without the startup shortcuts."
						align="center"
						className="mb-16"
					/>

					<div className="grid gap-6 md:grid-cols-3">
						{solutions.map((solution, index) => {
							const Icon = solution.icon;
							return (
								<div
									key={solution.title}
									className={cn(
										'bg-background/50 border-border hover:border-primary/50 group rounded-xl border p-8 opacity-0 backdrop-blur-sm transition-all hover:shadow-lg',
										mounted && 'animate-slide-up'
									)}
									style={{ animationDelay: `${0.1 + index * 0.1}s` }}
								>
									<div className="text-primary mb-6">
										<Icon className="size-8" />
									</div>
									<h3 className="heading-4 mb-3">{solution.title}</h3>
									<p className="text-muted-foreground leading-relaxed">{solution.description}</p>
								</div>
							);
						})}
					</div>
				</Section>

				<Section>
					<SectionHeader eyebrow="Proof" title="Real startups." subtitle="Real results." className="mb-16" />

					<div className="space-y-px">
						{startupCaseStudies.slice(0, 2).map((study, index) => (
							<Link key={study.slug} href={`/work/${study.slug}`} className="group block">
								<article className="bg-background border-border group-hover:border-primary/50 relative border transition-all duration-500">
									<div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
										<div className="bg-muted relative aspect-16/10 overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[300px]">
											<Image
												src={study.images.thumbnail}
												alt={study.title}
												fill
												className="object-cover transition-transform duration-700 group-hover:scale-105"
												sizes="(max-width: 1024px) 100vw, 40vw"
											/>
											<div
												className={cn(
													'absolute inset-0 bg-linear-to-br opacity-60 mix-blend-overlay',
													gradientByIndex[index % gradientByIndex.length]
												)}
											/>

											<div className="font-display text-foreground/50 absolute top-6 left-6 text-sm font-medium">
												{String(index + 1).padStart(2, '0')}
											</div>

											<div className="bg-background/90 absolute bottom-6 left-6 inline-flex px-3 py-1 text-xs font-medium backdrop-blur-sm">
												{study.industry}
											</div>
										</div>

										<div className="flex flex-col justify-between p-8 lg:col-span-7 lg:p-12">
											<div>
												<div className="mb-6 flex items-start justify-between gap-4">
													<div>
														<h3 className="heading-3 group-hover:text-primary mb-2 transition-colors">{study.title}</h3>
														<p className="text-muted-foreground">{study.hook}</p>
													</div>
													<ArrowUpRight className="text-muted-foreground group-hover:text-primary size-6 shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
												</div>

												<div className="mb-8 flex flex-wrap gap-2">
													{study.services.map((service) => (
														<span
															key={service}
															className="border-border text-muted-foreground border px-3 py-1 text-xs"
														>
															{service}
														</span>
													))}
												</div>
											</div>

											<div className="border-border grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 border-t pt-6">
												{study.results.slice(0, 3).map((result) => (
													<div key={result.metric}>
														<p className="font-display text-foreground group-hover:text-primary text-2xl font-bold transition-colors duration-300 lg:text-3xl">
															{result.value}
														</p>
														<p className="text-muted-foreground mt-1 text-xs">{result.metric}</p>
													</div>
												))}
											</div>
										</div>
									</div>

									<div className="border-primary pointer-events-none absolute inset-0 border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
								</article>
							</Link>
						))}
					</div>

					<div className="mt-12 flex justify-center">
						<Link href="/work">
							<Button variant="outline" size="lg" className="group gap-2">
								View All Projects
								<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</Button>
						</Link>
					</div>
				</Section>

				<Section className="overflow-hidden">
					<div className="pointer-events-none absolute inset-0 -z-10">
						<div className="bg-muted/10 absolute inset-0" />
						<div className="gradient-section-glow absolute inset-0" />
						<NoiseOverlay opacity={0.2} className="mix-blend-overlay" />
					</div>

					<SectionHeader
						eyebrow="Investment"
						title="Transparent pricing for startups."
						description="No hourly billing, no surprise invoices. You know the investment before we write a line of code."
						align="center"
						className="mb-16"
					/>

					<div className="grid gap-6 md:grid-cols-3">
						{startupScopes.map((scope, index) => {
							const Icon = scope.icon;
							return (
								<div
									key={scope.name}
									className={cn(
										'bg-background/50 border-border hover:border-primary/50 group relative rounded-xl border p-8 opacity-0 backdrop-blur-sm transition-all hover:shadow-lg',
										scope.popular && 'border-primary/30',
										mounted && 'animate-slide-up'
									)}
									style={{ animationDelay: `${0.1 + index * 0.1}s` }}
								>
									{scope.popular && (
										<div className="bg-primary/10 text-primary absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium">
											Most Common
										</div>
									)}
									<div className="text-primary mb-4">
										<Icon className="size-8" />
									</div>
									<h3 className="font-display text-foreground mb-1 text-lg font-semibold">{scope.name}</h3>
									<div className="mb-4 flex items-baseline gap-2">
										<span className="font-display text-foreground group-hover:text-primary text-2xl font-bold transition-colors">
											{scope.price}
										</span>
										<span className="text-muted-foreground text-sm">· {scope.timeline}</span>
									</div>
									<p className="text-muted-foreground text-sm leading-relaxed">{scope.description}</p>
								</div>
							);
						})}
					</div>

					<div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
						<Button href="/contact?source=startups" size="lg" className="gap-2">
							Get a Quote
							<ArrowUpRight className="size-4" />
						</Button>
						<Link href="/pricing" className="text-primary group inline-flex items-center gap-2 font-medium">
							<span className="link-underline">See Full Pricing Breakdown</span>
							<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</Link>
					</div>
				</Section>

				<Section className="text-center">
					<div className="mx-auto max-w-3xl">
						<h2 className="heading-2 mb-6">
							Ready to build something <GradientText>investors notice?</GradientText>
						</h2>
						<p className="body-large text-muted-foreground mb-10">
							Let&apos;s talk about your launch, your timeline, and what success looks like for your startup.
						</p>

						<div className="flex flex-col items-center gap-6">
							<Button href="/contact?source=startups" size="cta" className="gap-2">
								<Rocket className="size-4" />
								Start Your Project
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
