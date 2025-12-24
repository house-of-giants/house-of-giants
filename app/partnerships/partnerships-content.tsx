'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Shield, Handshake, Rocket, ArrowUpRight, CheckCircle2, Zap, Users, Globe } from 'lucide-react';
import { Section, SectionHeader } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { StatusIndicator } from '@/components/atoms/status-indicator';
import { Button } from '@/components/ui/button';
import { getPartnershipCaseStudies } from '@/lib/data/case-studies';
import { CaseStudyRelated } from '@/components/case-study/case-study-related';

const partnershipTypes = [
	{
		title: 'White-Label',
		subtitle: 'The Invisible Engine',
		description:
			'A fully managed engineering team that lives under your brand. We handle the code, you own the client.',
		icon: Shield,
		href: '/partnerships/white-label',
		cta: 'Scale Your Agency',
		features: ['Plug-and-play Pods', 'Agency-branded delivery', 'Predictable margins', 'Zero hiring overhead'],
	},
	{
		title: 'Strategic',
		subtitle: 'Referral & Expert Network',
		description:
			'Mutually beneficial referral loops for consultants, CTOs, and strategists. We build what you architect.',
		icon: Handshake,
		href: '/contact?source=partnership-strategic',
		cta: 'Join the Network',
		features: [
			'Vetted referral fees',
			'Technical feasibility audits',
			'Joint pitch support',
			'Long-term collaboration',
		],
	},
	{
		title: 'Venture',
		subtitle: 'Equity & Growth',
		description:
			'Deep technical partnerships for venture studios and early-stage accelerators. We build the foundation.',
		icon: Rocket,
		href: '/contact?source=partnership-venture',
		cta: 'Build for Equity',
		features: ['Reduced-rate development', 'Fractional CTO support', 'Investor-ready architecture', 'Skin in the game'],
	},
];

export default function PartnershipsContent() {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
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
								Scalable Capacity • Trusted Partnerships
							</span>
						</div>
					</div>

					<h1
						className={cn('heading-display mb-6 opacity-0', mounted && 'animate-slide-up')}
						style={{ animationDelay: '0.2s' }}
					>
						Good code makes <br className="hidden sm:block" />
						<GradientText>good partners.</GradientText>
					</h1>

					<p
						className={cn(
							'body-large text-muted-foreground mx-auto mb-10 max-w-2xl opacity-0',
							mounted && 'animate-slide-up'
						)}
						style={{ animationDelay: '0.3s' }}
					>
						We don&apos;t just build websites. We build technical infrastructure that helps agencies scale, consultants
						look like heroes, and startups get funded. No bullshit, just results.
					</p>
				</div>
			</Section>

			<Section className="relative">
				<div className="grid gap-8 lg:grid-cols-3">
					{partnershipTypes.map((type, index) => {
						const Icon = type.icon;
						return (
							<div
								key={type.title}
								className={cn(
									'bg-background group border-border hover:border-primary/50 relative flex flex-col overflow-hidden rounded-2xl border p-8 opacity-0 transition-all hover:shadow-lg lg:p-10',
									mounted && 'animate-slide-up'
								)}
								style={{ animationDelay: `${0.4 + index * 0.1}s` }}
							>
								<div className="mb-8 flex items-start justify-between">
									<div className="border-border bg-card text-primary group-hover:border-primary/50 group-hover:bg-primary/10 inline-flex size-14 items-center justify-center rounded-xl border transition-colors">
										<Icon className="size-7" />
									</div>
								</div>

								<div className="mb-2">
									<span className="text-primary text-xs font-bold tracking-widest uppercase">{type.subtitle}</span>
									<h3 className="heading-3 mt-1">{type.title}</h3>
								</div>

								<p className="text-muted-foreground mb-8 text-base leading-relaxed">{type.description}</p>

								<ul className="mb-10 space-y-3">
									{type.features.map((feature) => (
										<li key={feature} className="text-muted-foreground flex items-center gap-2 text-sm">
											<CheckCircle2 className="text-primary size-4 shrink-0" />
											{feature}
										</li>
									))}
								</ul>

								<div className="mt-auto">
									<Button href={type.href} variant={index === 0 ? 'default' : 'outline'} className="group w-full gap-2">
										{type.cta}
										<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
									</Button>
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

				<div className="grid gap-16 lg:grid-cols-2 lg:items-center">
					<div>
						<SectionHeader
							eyebrow="Why House of Giants"
							title="Small team. Huge impact."
							description="Most partners scale by hiring juniors and hiding them behind account managers. We scale by remaining small and working with the best principals in the industry."
							className="mb-8"
						/>
						<div className="grid gap-6 sm:grid-cols-2">
							<div className="space-y-2">
								<h4 className="text-foreground font-bold">Senior Talent Only</h4>
								<p className="text-muted-foreground text-sm">
									No learning on your dime. You work directly with architects who ship.
								</p>
							</div>
							<div className="space-y-2">
								<h4 className="text-foreground font-bold">Principal-Led</h4>
								<p className="text-muted-foreground text-sm">
									Direct lines of communication. Fast decisions. Zero bureaucracy.
								</p>
							</div>
							<div className="space-y-2">
								<h4 className="text-foreground font-bold">Battle-Tested Stack</h4>
								<p className="text-muted-foreground text-sm">
									We bring our Pod OS—a proven toolchain for high-velocity delivery.
								</p>
							</div>
							<div className="space-y-2">
								<h4 className="text-foreground font-bold">Reliable Velocity</h4>
								<p className="text-muted-foreground text-sm">
									Predictable monthly capacity that scales with your pipeline.
								</p>
							</div>
						</div>
					</div>

					<div className="bg-card/50 border-border relative overflow-hidden rounded-2xl border p-8 md:p-12">
						<div className="bg-primary/5 absolute inset-0" />
						<blockquote className="relative z-10">
							<p className="text-foreground mb-6 text-xl leading-relaxed font-medium italic">
								&quot;Partnering with House of Giants allowed us to say &apos;yes&apos; to high-value technical builds
								we used to turn away. They aren&apos;t just a vendor; they&apos;re an invisible engine for our
								growth.&quot;
							</p>
							<footer className="flex items-center gap-4">
								<div className="bg-primary/20 size-12 rounded-full" />
								<div>
									<p className="text-foreground font-bold">Creative Director</p>
									<p className="text-muted-foreground text-sm">Luxury Branding Agency</p>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
			</Section>

			<CaseStudyRelated
				studies={getPartnershipCaseStudies()}
				eyebrow="Partnership Results"
				title="Work we've shipped with partners."
				description="From white-label builds to strategic collaborations—here's what good partnerships look like."
				showCta
				ctaText="See All Projects"
			/>

			<Section className="text-center">
				<div className="mx-auto max-w-3xl">
					<h2 className="heading-2 mb-6">
						Let&apos;s build something <br />
						<GradientText>remarkable together.</GradientText>
					</h2>
					<p className="body-large text-muted-foreground mb-10">
						Whether you need an invisible dev team or a strategic technical partner, we&apos;re here to make you (and
						your clients) look like heroes.
					</p>

					<div className="flex flex-col items-center gap-6">
						<Button href="/contact?source=partnerships" size="cta" className="gap-2">
							Start the Conversation
							<ArrowUpRight className="size-4" />
						</Button>
						<div className="flex flex-wrap justify-center gap-8 pt-8">
							<div className="text-muted-foreground flex items-center gap-2 text-sm">
								<Zap className="text-primary size-4" />
								Fast Onboarding
							</div>
							<div className="text-muted-foreground flex items-center gap-2 text-sm">
								<Users className="text-primary size-4" />
								Dedicated Pods
							</div>
							<div className="text-muted-foreground flex items-center gap-2 text-sm">
								<Globe className="text-primary size-4" />
								Remote-Friendly
							</div>
						</div>
					</div>
				</div>
			</Section>
		</main>
	);
}
