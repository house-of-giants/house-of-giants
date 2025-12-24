'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ProcessStep } from '@/lib/data/case-studies';
import { Section } from '@/components/templates/section';
import { SectionHeader } from '@/components/templates/section-header';
import { Reveal } from './reveal';

interface CaseStudyProcessProps {
	title?: string;
	description?: string;
	steps: ProcessStep[];
}

export function CaseStudyProcess({ title = 'The Process', description, steps }: CaseStudyProcessProps) {
	return (
		<Section padding="default" background="muted">
			<SectionHeader eyebrow="How We Did It" title={title} description={description} align="center" />

			<div className="relative mt-16 space-y-12 md:mt-24 lg:space-y-24">
				<div className="via-primary/30 absolute top-0 bottom-0 left-[50%] hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-transparent lg:block" />

				{steps.map((step, index) => {
					const isEven = index % 2 === 0;

					return (
						<div key={index} className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-24">
							<div className="absolute top-0 left-1/2 hidden -translate-x-1/2 items-center justify-center lg:flex">
								<div className="bg-background border-primary z-10 size-4 rounded-full border-2" />
							</div>

							<Reveal
								delay={0.2}
								className={cn(
									'border-border bg-background group relative aspect-video overflow-hidden border lg:aspect-square',
									isEven ? 'lg:order-1' : 'lg:order-2'
								)}
							>
								{step.image ? (
									<>
										<Image
											src={step.image}
											alt={step.title}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-105"
											sizes="(max-width: 768px) 100vw, 50vw"
										/>
										<div className="bg-primary/10 absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100" />
									</>
								) : (
									<div className="bg-muted/50 flex h-full items-center justify-center">
										<p className="text-muted-foreground">No image available</p>
									</div>
								)}
							</Reveal>

							<div
								className={cn(
									'flex flex-col justify-center',
									isEven ? 'lg:order-2' : 'lg:order-1 lg:items-end lg:text-right'
								)}
							>
								<Reveal>
									<div className="mb-4 inline-flex items-center gap-2">
										<span className="text-primary font-mono text-sm tracking-wider">0{index + 1}</span>
										<span className="bg-primary/50 h-px w-8" />
										<span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
											{step.phase}
										</span>
									</div>

									<h3 className="heading-3 mb-4">{step.title}</h3>
									<p className="body-large text-muted-foreground mb-6 max-w-lg">{step.description}</p>

									{step.bullets && step.bullets.length > 0 && (
										<ul className={cn('space-y-2', isEven ? '' : 'lg:flex lg:flex-col lg:items-end')}>
											{step.bullets.map((bullet, idx) => (
												<li key={idx} className="text-muted-foreground flex items-center gap-2 text-sm">
													<span className="bg-primary size-1.5 shrink-0 rounded-full" />
													<span>{bullet}</span>
												</li>
											))}
										</ul>
									)}
								</Reveal>
							</div>
						</div>
					);
				})}
			</div>
		</Section>
	);
}
