'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CaseStudy } from '@/lib/data/case-studies';

interface CaseStudyCardProps {
	study: CaseStudy;
	variant?: 'default' | 'minimal' | 'featured';
	className?: string;
	index?: number;
}

function hasQuantitativeStat(study: CaseStudy): boolean {
	const value = study.results[0]?.value || '';
	return /[\d%+]/.test(value);
}

function truncateQuote(quote: string, maxLength: number = 80): string {
	if (quote.length <= maxLength) return quote;
	return quote.slice(0, maxLength).trim() + '...';
}

export function CaseStudyCard({
	study,
	variant = 'default',
	className,
	index = 0,
}: CaseStudyCardProps) {
	const isMinimal = variant === 'minimal';
	const isFeatured = variant === 'featured';

	if (isFeatured) {
		const gradientByIndex = [
			'from-primary/30 via-primary/10 to-accent/20',
			'from-accent/30 via-accent/10 to-primary/20',
			'from-pink/30 via-pink/10 to-primary/20',
		];

		return (
			<Link href={`/work/${study.slug}`} className={cn('group block', className)}>
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
										<span key={service} className="border-border text-muted-foreground border px-3 py-1 text-xs">
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
		);
	}

	return (
		<Link
			href={`/work/${study.slug}`}
			className={cn(
				'group relative block h-full overflow-hidden border transition-all duration-500',
				'bg-background border-border hover:border-primary/50 hover:shadow-2xl',
				className
			)}
		>
			<article className="flex h-full flex-col">
				{/* Image Section */}
				<div className="bg-muted relative aspect-video w-full overflow-hidden">
					<Image
						src={study.images.thumbnail}
						alt={study.title}
						fill
						className="object-cover transition-transform duration-700 group-hover:scale-105"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
					<div
						className={cn(
							'absolute inset-0 bg-linear-to-t via-transparent to-transparent',
							isMinimal ? 'from-black/80 via-black/20' : 'from-background/60'
						)}
					/>

				<div className="bg-background/90 absolute top-4 left-4 inline-flex px-3 py-1 text-xs font-medium backdrop-blur-sm">
					{study.industry}
				</div>
				</div>

				{/* Content Section */}
				<div className={cn('flex flex-1 flex-col', isMinimal ? 'p-8' : 'p-6 sm:p-8')}>
					<div className="mb-6">
						<div className="mb-3 flex items-start justify-between gap-4">
							<div>
								<h3 className={cn('heading-3 group-hover:text-primary transition-colors', isMinimal ? 'mb-3' : 'mb-1')}>
									{study.title}
								</h3>
								{!isMinimal && <p className="text-muted-foreground text-sm font-medium">{study.client.name}</p>}
							</div>
							{!isMinimal && (
								<ArrowUpRight className="text-muted-foreground group-hover:text-primary size-5 shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
							)}
						</div>
						<p className={cn('text-muted-foreground line-clamp-2 leading-relaxed', isMinimal ? 'mb-6 text-sm' : '')}>
							{study.hook}
						</p>
					</div>

					{/* Footer / Results Section */}
					<div className="mt-auto">
						{isMinimal ? (
							<div className="flex items-center justify-between">
								<div className="flex gap-4">
									{study.results.slice(0, 2).map((res) => (
										<div key={res.metric}>
											<p className="text-foreground text-sm font-bold">{res.value}</p>
											<p className="text-muted-foreground text-[10px] tracking-wider uppercase">{res.metric}</p>
										</div>
									))}
								</div>
								<div className="text-primary flex items-center gap-1 text-sm font-bold">
									View Case Study
									<ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
								</div>
							</div>
						) : (
							<div className="space-y-6">
								<div className="flex flex-wrap gap-2">
									{study.services.slice(0, 3).map((service) => (
									<span
										key={service}
										className="border-border text-muted-foreground bg-background/50 group-hover:border-primary/30 inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors"
									>
										{service}
									</span>
									))}
								</div>

								<div className="border-border border-t pt-4">
									{hasQuantitativeStat(study) ? (
										<div className="bg-primary/10 group-hover:bg-primary/20 p-4 transition-colors duration-300">
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
											<div className="bg-primary/20 group-hover:bg-primary absolute top-0 bottom-0 left-0 w-1 transition-colors duration-300" />
											<p className="text-muted-foreground text-sm leading-relaxed italic">
												&quot;{truncateQuote(study.testimonial.quote)}&quot;
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
						)}
					</div>
				</div>

				{/* Border Overlay */}
				<div className="border-primary pointer-events-none absolute inset-0 border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			</article>
		</Link>
	);
}
