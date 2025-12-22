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
import { caseStudies, CaseStudy } from '@/lib/data/case-studies';

function hasQuantitativeStat(study: CaseStudy): boolean {
	const value = study.results[0]?.value || '';
	return /[\d%+]/.test(value);
}

function truncateQuote(quote: string, maxLength: number = 80): string {
	if (quote.length <= maxLength) return quote;
	return quote.slice(0, maxLength).trim() + '...';
}

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
							We love what we do. And so do our partners. Check out what we've built together.
						</p>
					</div>
				</Section>

				<Section className="min-h-screen">
					<div
						className={cn('mb-16 flex justify-center opacity-0', mounted && 'animate-slide-up')}
						style={{ animationDelay: '0.4s' }}
					>
						<h2 className="heading-2 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 text-center">
							<span className="text-muted-foreground">Show me</span>
							<Select value={activeFilter} onValueChange={(value) => value && setActiveFilter(value)}>
								<SelectTrigger className="border-primary text-primary hover:bg-primary/5 [&_svg]:text-primary inline-flex h-auto w-auto gap-2 border-0 border-b-2 bg-transparent px-1 py-0 text-2xl font-bold transition-colors md:text-3xl lg:text-4xl [&_svg]:size-5 md:[&_svg]:size-6">
									<SelectValue>{filterCategories.find((cat) => cat.id === activeFilter)?.label}</SelectValue>
								</SelectTrigger>
								<SelectContent align="center" className="border-border bg-background w-auto! min-w-50 border">
									{filterCategories.map((category) => (
										<SelectItem key={category.id} value={category.id} className="px-4 py-3">
											{category.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<span className="text-muted-foreground">you&apos;ve built.</span>
						</h2>
					</div>

					<div key={activeFilter} className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{filteredStudies.map((study, index) => (
							<Link
								key={study.slug}
								href={`/work/${study.slug}`}
								className={cn('group block opacity-0', mounted && 'animate-slide-up')}
								style={{ animationDelay: `${index * 0.08}s` }}
							>
								<article className="bg-background border-border hover:border-primary/50 group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl">
									<div className="bg-muted relative aspect-video w-full overflow-hidden">
										<Image
											src={study.images.thumbnail}
											alt={study.title}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-105"
											sizes="(max-width: 768px) 100vw, 50vw"
										/>
										<div className="from-background/60 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />

										<div className="bg-background/90 absolute top-4 left-4 inline-flex rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
											{study.industry}
										</div>
									</div>

									<div className="flex flex-1 flex-col p-6 sm:p-8">
										<div className="mb-6">
											<div className="mb-3 flex items-start justify-between gap-4">
												<div>
													<h2 className="heading-3 group-hover:text-primary mb-1 transition-colors">{study.title}</h2>
													<p className="text-muted-foreground text-sm font-medium">{study.client.name}</p>
												</div>
												<ArrowUpRight className="text-muted-foreground group-hover:text-primary size-5 shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
											</div>
											<p className="text-muted-foreground line-clamp-2 leading-relaxed">{study.hook}</p>
										</div>

										<div className="mt-auto space-y-6">
											<div className="flex flex-wrap gap-2">
												{study.services.slice(0, 3).map((service) => (
													<span
														key={service}
														className="border-border text-muted-foreground bg-background/50 group-hover:border-primary/30 inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors"
													>
														{service}
													</span>
												))}
											</div>

											<div className="border-border border-t pt-4">
												{hasQuantitativeStat(study) ? (
													<div className="bg-primary/10 group-hover:bg-primary/20 rounded-xl p-4 transition-colors duration-300">
														<div className="flex items-baseline gap-2">
															<span className="font-display text-primary text-3xl font-bold tracking-tight">
																{study.results[0].value}
															</span>
														</div>
														<div className="mt-1 flex items-center gap-2">
															<div className="bg-primary/50 h-px w-3" />
															<span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
																{study.results[0].metric}
															</span>
														</div>
														{study.results[0].description && (
															<p className="text-muted-foreground mt-2 truncate text-xs opacity-80">
																{study.results[0].description}
															</p>
														)}
													</div>
												) : study.testimonial ? (
													<div className="relative pl-4">
														<div className="bg-primary/20 group-hover:bg-primary absolute top-0 bottom-0 left-0 w-1 rounded-full transition-colors duration-300" />
														<p className="text-muted-foreground text-sm leading-relaxed italic">
															"{truncateQuote(study.testimonial.quote)}"
														</p>
														<div className="mt-3 flex items-center gap-2">
															<p className="text-foreground text-xs font-medium">
																{study.testimonial.author}
																<span className="text-muted-foreground/80 font-normal">
																	, {study.testimonial.title.split(',')[0]}
																</span>
															</p>
														</div>
													</div>
												) : (
													<div className="flex items-center justify-between py-2">
														<span className="text-muted-foreground text-sm font-medium">Shipped</span>
														<span className="font-display text-foreground group-hover:text-primary text-lg font-bold transition-colors duration-300">
															{study.timeline}
														</span>
													</div>
												)}
											</div>
										</div>
									</div>

									<div className="border-primary pointer-events-none absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
								</article>
							</Link>
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
				</Section>
			</main>
			<Footer />
		</>
	);
}
