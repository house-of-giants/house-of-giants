'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section, SectionHeader } from '@/components/layout/section';
import { getFeaturedCaseStudies } from '@/lib/data/case-studies';
import { Button } from '@/components/ui/button';

export function FeaturedWork() {
	const featuredStudies = getFeaturedCaseStudies();
	const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

	return (
		<Section background="muted" className="overflow-hidden" maskBottom="angle" >
			<SectionHeader
				eyebrow="Selected Work"
				title={
					<>
						Results that speak <span className="text-gradient">louder than pitches</span>
					</>
				}
				description="Real projects, real metrics, real impact. Here's what happens when you build with intention."
			/>

			<div className="space-y-px">
				{featuredStudies.map((study, index) => (
					<Link
						key={study.slug}
						href={`/work/${study.slug}`}
						className="group block"
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<article
							className={cn(
								'bg-background border-border relative border transition-all duration-500',
								hoveredIndex === index && 'border-primary/50'
							)}
						>
							<div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
								{/* Image Column */}
								<div className="bg-muted relative aspect-[16/10] overflow-hidden lg:col-span-5 lg:aspect-auto">
									{/* Placeholder gradient - replace with actual images */}
									<div
										className={cn(
											'absolute inset-0 bg-gradient-to-br transition-transform duration-700',
											index === 0 && 'from-primary/30 via-primary/10 to-accent/20',
											index === 1 && 'from-accent/30 via-accent/10 to-primary/20',
											index === 2 && 'from-pink/30 via-pink/10 to-primary/20',
											hoveredIndex === index && 'scale-105'
										)}
									/>

									{/* Grid overlay */}
									<div className="grid-pattern absolute inset-0 opacity-30" />

									{/* Project number */}
									<div className="font-display text-foreground/50 absolute top-6 left-6 text-sm font-medium">
										{String(index + 1).padStart(2, '0')}
									</div>

									{/* Industry tag */}
									<div className="bg-background/90 absolute bottom-6 left-6 inline-flex px-3 py-1 text-xs font-medium backdrop-blur-sm">
										{study.industry}
									</div>
								</div>

								{/* Content Column */}
								<div className="flex flex-col justify-between p-8 lg:col-span-7 lg:p-12">
									<div>
										{/* Title & Hook */}
										<div className="mb-6 flex items-start justify-between gap-4">
											<div>
												<h3 className="heading-3 group-hover:text-primary mb-2 transition-colors">{study.title}</h3>
												<p className="text-muted-foreground">{study.hook}</p>
											</div>
											<ArrowUpRight
												className={cn(
													'text-muted-foreground size-6 flex-shrink-0 transition-all duration-300',
													hoveredIndex === index && 'text-primary translate-x-1 -translate-y-1'
												)}
											/>
										</div>

										{/* Services */}
										<div className="mb-8 flex flex-wrap gap-2">
											{study.services.map((service) => (
												<span key={service} className="border-border text-muted-foreground border px-3 py-1 text-xs">
													{service}
												</span>
											))}
										</div>
									</div>

									{/* Results Grid */}
									<div className="border-border grid grid-cols-3 gap-4 border-t pt-6">
										{study.results.slice(0, 3).map((result) => (
											<div key={result.metric}>
												<p
													className={cn(
														'font-display text-2xl font-bold transition-colors duration-300 lg:text-3xl',
														hoveredIndex === index ? 'text-primary' : 'text-foreground'
													)}
												>
													{result.value}
												</p>
												<p className="text-muted-foreground mt-1 text-xs">{result.metric}</p>
											</div>
										))}
									</div>
								</div>
							</div>

							{/* Hover border effect */}
							<div
								className={cn(
									'border-primary pointer-events-none absolute inset-0 border-2 opacity-0 transition-opacity duration-300',
									hoveredIndex === index && 'opacity-100'
								)}
							/>
						</article>
					</Link>
				))}
			</div>

			{/* View All Link */}
			<div className="mt-12 flex justify-center">
				<Link href="/work">
					<Button variant="outline" size="lg" className="group gap-2">
						View All Projects
						<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</Button>
				</Link>
			</div>
		</Section>
	);
}
