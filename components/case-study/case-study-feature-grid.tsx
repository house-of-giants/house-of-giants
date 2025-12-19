'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { FeatureBlock } from '@/lib/data/case-studies';
import { Section } from '@/components/templates/section';
import { SectionHeader } from '@/components/templates/section-header';
import { Reveal } from './reveal';

interface CaseStudyFeatureGridProps {
	title?: string;
	description?: string;
	features: FeatureBlock[];
	layout?: 'twoCol' | 'stacked';
}

export function CaseStudyFeatureGrid({ title, description, features, layout = 'twoCol' }: CaseStudyFeatureGridProps) {
	return (
		<Section padding="default">
			{(title || description) && (
				<SectionHeader title={title} description={description} align="left" className="mb-16" />
			)}

			<div className={cn('grid gap-12', layout === 'twoCol' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1')}>
				{features.map((feature, index) => (
					<Reveal key={index} delay={index * 0.1}>
						<div
							className={cn(
								'group border-border bg-card/50 hover:border-primary/50 relative overflow-hidden border transition-colors',
								layout === 'stacked'
									? 'flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:gap-16 lg:p-12'
									: 'flex h-full flex-col'
							)}
						>
							{feature.image && (
								<div
									className={cn(
										'bg-muted relative overflow-hidden',
										layout === 'stacked' ? 'aspect-video w-full lg:w-1/2' : 'border-border aspect-video w-full border-b'
									)}
								>
									<Image
										src={feature.image}
										alt={feature.title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
										sizes={layout === 'stacked' ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 100vw, 50vw'}
									/>
								</div>
							)}

							<div className={cn('flex flex-col', layout === 'stacked' ? 'w-full lg:w-1/2' : 'flex-1 p-8')}>
								<h3 className="heading-3 mb-4">{feature.title}</h3>
								<p className="body-base text-muted-foreground mb-6">{feature.description}</p>

								{feature.bullets && (
									<ul className="mt-auto space-y-2">
										{feature.bullets.map((bullet, idx) => (
											<li key={idx} className="text-muted-foreground flex items-start gap-2 text-sm">
												<span className="bg-primary mt-1.5 size-1.5 shrink-0 rounded-full" />
												<span>{bullet}</span>
											</li>
										))}
									</ul>
								)}
							</div>
						</div>
					</Reveal>
				))}
			</div>
		</Section>
	);
}
