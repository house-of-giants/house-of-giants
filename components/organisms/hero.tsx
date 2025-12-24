'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Eyebrow } from '@/components/atoms/eyebrow';
import { StatusIndicator } from '@/components/atoms/status-indicator';
import { GradientText } from '@/components/atoms/gradient-text';
import { AnimatedArrow } from '@/components/atoms/animated-arrow';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { StatsRow } from '@/components/molecules/stats-row';
import { ScrollIndicator } from '@/components/molecules/scroll-indicator';

export function Hero() {
	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-x-clip">
			{/* Background Effects */}
			<div className="bg-background absolute inset-0 overflow-visible">
				<GradientOrbs />
				<NoiseOverlay />
			</div>

			{/* Content */}
			<div className="container-wide relative z-10 pt-32 pb-24">
				<div className="max-w-6xl">
					{/* Eyebrow */}
					<div className="mb-8 flex items-center gap-3">
						<div className="flex items-center gap-2">
							<StatusIndicator />
							<Eyebrow className="text-primary">Denver Web Development Studio • Founded 2017</Eyebrow>
						</div>
						<div className="from-border h-px max-w-32 flex-1 bg-linear-to-r to-transparent" />
					</div>

					{/* Main Headline */}
					<h1 className="heading-display mb-8">
						<span className="block">Not an agency.</span>
						<span className="block">Not a factory.</span>
						<GradientText as="span" className="block">
							A studio that ships.
						</GradientText>
					</h1>

					{/* Subheadline */}
					<p className="body-large text-muted-foreground mb-12 max-w-2xl">
						Custom web development from a founder-led Denver studio. We build web applications for people obsessed with
						their craft. No bullshit, no templates, no "account managers" who've never shipped code.
					</p>

					{/* CTAs */}
					<div className="mb-20 grid grid-cols-1 gap-4 sm:w-fit sm:grid-cols-2">
					<Button href="/work" size="cta" className="group">
						See Our Work
						<AnimatedArrow size="lg" />
					</Button>
						<Button href="/contact" variant="outline" size="cta">
							Start Your Project
						</Button>
					</div>

					{/* Stats Row */}
					<StatsRow
						stats={[
							{ value: '2017', label: 'Building Custom Web Apps' },
							{ value: '100+', label: 'Web Applications Shipped' },
							{ value: '10+', label: 'Industries Served' },
							{ value: '98%', label: 'Client Retention Rate' },
						]}
					/>
				</div>
			</div>

			{/* Scroll indicator */}
			<ScrollIndicator />

			{/* Side Text */}
			<div className="absolute top-1/2 right-8 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
				<div className="via-border h-20 w-px bg-linear-to-b from-transparent to-transparent" />
				<span className="text-muted-foreground rotate-180 text-xs tracking-widest uppercase [writing-mode:vertical-rl]">
					Denver + Remote
				</span>
				<div className="via-border h-20 w-px bg-linear-to-b from-transparent to-transparent" />
			</div>
		</section>
	);
}
