'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header, Footer } from '@/components/organisms';
import { Section } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { StatusIndicator } from '@/components/atoms/status-indicator';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CaseStudyCard } from '@/components/molecules';
import { caseStudies, CaseStudy } from '@/lib/data/case-studies';

const filterCategories = [
	{ id: 'all', label: 'everything', filter: () => true },
	{
		id: 'apps',
		label: 'platforms & web apps',
		filter: (study: CaseStudy) => study.industry === 'SaaS' || study.type === 'Platform',
	},
	{
		id: 'creative',
		label: 'creative work',
		filter: (study: CaseStudy) => study.industry === 'Entertainment',
	},
	{
		id: 'brand',
		label: 'custom brand websites',
		filter: (study: CaseStudy) =>
			study.industry === 'Luxury' ||
			(study.type === 'Website' && study.industry !== 'SaaS' && study.industry !== 'Entertainment'),
	},
] as const;

export default function WorkContent() {
	const [mounted, setMounted] = React.useState(false);
	const [activeFilter, setActiveFilter] = React.useState<string>('all');

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const filteredStudies = React.useMemo(() => {
		const category = filterCategories.find((cat) => cat.id === activeFilter);
		if (!category) return caseStudies;
		return caseStudies.filter(category.filter);
	}, [activeFilter]);

	return (
		<>
			<Header />
			<main>
				<Section
					padding="none"
					container="none"
					className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-32 pb-20"
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
									Custom Web Development • Case Studies
								</span>
							</div>
						</div>

						<h1
							className={cn('heading-display mb-6 opacity-0', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.2s' }}
						>
							Work that shipped.
							<br />
							<GradientText>With proof.</GradientText>
						</h1>

						<p
							className={cn(
								'body-large text-muted-foreground mx-auto mb-10 max-w-2xl opacity-0',
								mounted && 'animate-slide-up'
							)}
							style={{ animationDelay: '0.3s' }}
						>
							We love what we do. And so do our partners. Check out what we&apos;ve built together.
						</p>
					</div>
				</Section>

				<Section className="min-h-screen">
					<div
						className={cn('mb-16 flex justify-center opacity-0', mounted && 'animate-slide-up')}
						style={{ animationDelay: '0.4s' }}
					>
						<h2 className="heading-2 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 text-center">
							<span className="text-muted-foreground">I want to see</span>
							<Select value={activeFilter} onValueChange={(value) => value && setActiveFilter(value)}>
								<SelectTrigger className="border-primary text-primary hover:bg-primary/5 [&_svg]:text-primary font-display inline-flex h-auto w-auto cursor-pointer gap-2 border-0 border-b-2 bg-transparent px-0 py-0 text-3xl leading-[1.15] font-semibold tracking-tight transition-colors md:text-4xl lg:text-5xl [&_svg]:size-5 md:[&_svg]:size-6 lg:[&_svg]:size-7">
									<SelectValue className="font-display">
										{filterCategories.find((cat) => cat.id === activeFilter)?.label}
									</SelectValue>
								</SelectTrigger>
								<SelectContent align="center" className="border-border bg-background w-auto! min-w-50 border">
									{filterCategories.map((category) => (
										<SelectItem key={category.id} value={category.id} className="px-4 py-3">
											{category.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</h2>
					</div>

					<div key={activeFilter} className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{filteredStudies.map((study, index) => (
							<CaseStudyCard
								key={study.slug}
								study={study}
								index={index}
								mounted={mounted}
							/>
						))}
					</div>

					{filteredStudies.length === 0 && (
						<div className="py-20 text-center">
							<p className="text-muted-foreground text-lg">No case studies found for this filter.</p>
							<Button variant="outline" className="mt-4" onClick={() => setActiveFilter('all')}>
								Show everything
							</Button>
						</div>
					)}

					<div className="mt-32 border-t border-border pt-20">
						<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
							<div>
								<h2 className="heading-2 mb-6">
									Looking for something <br />
									<GradientText>more permanent?</GradientText>
								</h2>
								<p className="body-large text-muted-foreground mb-8">
									Beyond individual projects, we provide dedicated engineering pods to help you scale
									your internal capacity without the hiring headache.
								</p>
								<div className="flex flex-wrap gap-4">
									<Button href="/dedicated-teams" variant="default" size="lg">
										Explore Dedicated Pods
									</Button>
									<Button href="/services" variant="outline" size="lg">
										View Our Services
									</Button>
								</div>
							</div>
							<div className="bg-card/50 border border-border rounded-2xl p-8 backdrop-blur-sm">
								<h3 className="heading-4 mb-4 text-primary">Why partner with us?</h3>
								<ul className="space-y-4">
									{[
										'Senior-led architecture on every build',
										'No junior-only teams or learning on your dime',
										'Direct access to principals and architects',
										'Battle-tested workflows and proven velocity',
									].map((benefit) => (
										<li key={benefit} className="flex items-start gap-3 text-sm text-muted-foreground">
											<div className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
											{benefit}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</Section>
			</main>
			<Footer />
		</>
	);
}
