'use client';

import * as React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Hero() {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-x-clip">
			{/* Background Effects - orbs extend and blur naturally into next section */}
			<div className="bg-background absolute inset-0 overflow-visible">
				{/* Animated gradient orbs */}
				<div
					className="bg-primary/20 absolute top-1/4 -left-1/4 h-[600px] w-[600px] animate-[glow-pulse_8s_ease-in-out_infinite] rounded-full blur-[120px]"
					style={{ animationDelay: '0s' }}
				/>
				<div
					className="bg-accent/15 absolute -right-1/4 bottom-[10%] h-[500px] w-[500px] animate-[glow-pulse_8s_ease-in-out_infinite] rounded-full blur-[100px]"
					style={{ animationDelay: '4s' }}
				/>
				<div className="bg-primary/5 absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

				{/* Noise overlay */}
				<div className="noise absolute inset-0 opacity-30" />
			</div>

			{/* Content */}
			<div className="container-wide relative z-10 pt-32 pb-24">
				<div className="max-w-6xl">
					{/* Eyebrow */}
					<div
						className={cn(
							'mb-8 flex items-center gap-3 opacity-0',
							mounted && 'animate-[slide-up_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]'
						)}
						style={{ animationDelay: '0.1s' }}
					>
						<div className="flex items-center gap-2">
							<span className="relative flex h-2 w-2">
								<span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
								<span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
							</span>
							<span className="eyebrow text-primary">Available for Q1 2025</span>
						</div>
						<div className="from-border h-px max-w-32 flex-1 bg-gradient-to-r to-transparent" />
					</div>

					{/* Main Headline */}
					<h1
						className={cn(
							'heading-display mb-8 opacity-0',
							mounted && 'animate-[slide-up_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]'
						)}
						style={{ animationDelay: '0.2s' }}
					>
						<span className="block">We build websites</span>
						<span className="block">that get startups</span>
						<span className="text-gradient block">funded.</span>
					</h1>

					{/* Subheadline */}
					<p
						className={cn(
							'body-large text-muted-foreground mb-12 max-w-2xl opacity-0',
							mounted && 'animate-[slide-up_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]'
						)}
						style={{ animationDelay: '0.35s' }}
					>
						Custom web development for startups that refuse to look like everyone else. No templates, no page
						builders—just code that scales and design that converts.
					</p>

					{/* CTAs */}
					<div
						className={cn(
							'mb-20 flex flex-col gap-4 opacity-0 sm:flex-row',
							mounted && 'animate-[slide-up_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]'
						)}
						style={{ animationDelay: '0.5s' }}
					>
						<Button href="/work" size="cta" className="group">
							See Our Work
							<ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</Button>
						<Button href="/contact" variant="outline" size="cta">
							Start Your Project
						</Button>
					</div>

					{/* Stats Row */}
					<div
						className={cn(
							'border-border grid grid-cols-2 gap-8 border-t pt-12 opacity-0 md:grid-cols-4 md:gap-12',
							mounted && 'animate-[slide-up_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]'
						)}
						style={{ animationDelay: '0.65s' }}
					>
						{[
							{ value: '2017', label: 'Founded' },
							{ value: '100+', label: 'Projects Shipped' },
							{ value: '10+', label: 'Industries' },
							{ value: '98%', label: 'Client Retention' },
						].map((stat) => (
							<div key={stat.label}>
								<p className="font-display text-foreground mb-1 text-3xl font-bold md:text-4xl">{stat.value}</p>
								<p className="text-muted-foreground text-sm">{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div
				className={cn(
					'absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-0',
					mounted && 'animate-[fade-in_1s_ease_forwards]'
				)}
				style={{ animationDelay: '1.2s' }}
			>
				<span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
				<ArrowDown className="text-muted-foreground size-4 animate-bounce" />
			</div>

			{/* Side Text */}
			<div
				className={cn(
					'absolute top-1/2 right-8 hidden -translate-y-1/2 flex-col items-center gap-4 opacity-0 xl:flex',
					mounted && 'animate-[fade-in_1s_ease_forwards]'
				)}
				style={{ animationDelay: '1s' }}
			>
				<div className="via-border h-20 w-px bg-gradient-to-b from-transparent to-transparent" />
				<span className="text-muted-foreground rotate-180 text-xs tracking-widest uppercase [writing-mode:vertical-rl]">
					Denver + Remote
				</span>
				<div className="via-border h-20 w-px bg-gradient-to-b from-transparent to-transparent" />
			</div>
		</section>
	);
}
