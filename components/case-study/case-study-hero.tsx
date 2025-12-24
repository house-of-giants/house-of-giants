'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '@/lib/data/case-studies';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs, BreadcrumbItem } from '@/components/molecules';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { Reveal } from './reveal';

interface CaseStudyHeroProps {
	study: CaseStudy;
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
	// Custom breadcrumbs for case studies with keyword-rich labels
	const breadcrumbs: BreadcrumbItem[] = [
		{ label: 'Home', href: '/' },
		{ label: 'Our Work', href: '/work' },
		{ label: study.title, href: `/work/${study.slug}` },
	];

	return (
		<section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
			<div className="absolute inset-0 z-0">
				<Image src={study.images.hero} alt={study.title} fill priority className="object-cover" sizes="100vw" />
				<div className="bg-background/60 absolute inset-0" />
				<div className="from-background via-background/40 absolute inset-0 bg-gradient-to-t to-transparent" />
				<NoiseOverlay opacity={0.1} />
			</div>

			<div className="container-wide relative z-10 flex h-full flex-col justify-between pt-28 pb-12 md:pb-20 lg:pb-24">
				<Breadcrumbs items={breadcrumbs} variant="overlay" align="left" />
				<Reveal>
					<div className="space-y-6 md:space-y-8">
						<div className="flex flex-wrap gap-3">
							<Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 backdrop-blur-md">
								{study.client.name}
							</Badge>
							<Badge variant="outline" className="border-white/20 text-white/80 backdrop-blur-md">
								{study.timeline}
							</Badge>
							<Badge variant="outline" className="border-white/20 text-white/80 backdrop-blur-md">
								{study.industry}
							</Badge>
						</div>

						<div className="max-w-4xl space-y-4">
							<h1 className="heading-display text-white">
								{study.title}{' '}
								<span className="text-muted-foreground block text-4xl md:text-6xl lg:text-7xl">{study.subtitle}</span>
							</h1>
						</div>

						<div className="flex flex-col gap-6 pt-4 md:flex-row md:items-end md:justify-between">
							<div className="flex max-w-xl flex-wrap gap-2">
								{study.services.map((service) => (
									<span
										key={service}
										className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/70"
									>
										{service}
									</span>
								))}
							</div>

							{study.liveUrl && (
								<Link href={study.liveUrl} target="_blank" rel="noopener noreferrer">
									<Button
										size="lg"
										className="group border-primary bg-primary/10 hover:bg-primary/20 text-primary gap-2 rounded-none border backdrop-blur-sm"
									>
										Visit Live Site
										<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
									</Button>
								</Link>
							)}
						</div>
					</div>
				</Reveal>
				</div>

			<div className="via-border absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent" />
		</section>
	);
}
