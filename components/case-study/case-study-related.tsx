'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '@/lib/data/case-studies';
import { Section } from '@/components/templates/section';
import { SectionHeader } from '@/components/templates/section-header';
import { Reveal } from './reveal';

interface CaseStudyRelatedProps {
	studies: CaseStudy[];
}

export function CaseStudyRelated({ studies }: CaseStudyRelatedProps) {
	if (studies.length === 0) return null;

	return (
		<Section padding="default" background="muted">
			<SectionHeader title="Keep Exploring" align="center" className="mb-12" />

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{studies.slice(0, 3).map((study, index) => (
					<Reveal key={study.slug} delay={index * 0.1} className="h-full">
						<Link href={`/work/${study.slug}`} className="group block h-full">
							<article className="border-border bg-background hover:border-primary/50 relative flex h-full flex-col overflow-hidden border transition-colors">
								<div className="bg-muted relative aspect-video w-full overflow-hidden">
									<Image
										src={study.images.thumbnail}
										alt={study.title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
									<div className="from-background/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60" />

									<div className="absolute bottom-4 left-4">
										<span className="bg-background/90 border-border inline-block rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md">
											{study.industry}
										</span>
									</div>
								</div>

								<div className="flex flex-1 flex-col p-6">
									<div className="mb-3 flex items-start justify-between gap-4">
										<h3 className="heading-3 group-hover:text-primary text-xl transition-colors">{study.title}</h3>
										<ArrowUpRight className="text-muted-foreground group-hover:text-primary size-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
									</div>

									<p className="text-muted-foreground mb-6 line-clamp-2 text-sm">{study.hook}</p>

									<div className="border-border mt-auto flex flex-wrap gap-2 border-t pt-4">
										{study.services.slice(0, 3).map((service) => (
											<span key={service} className="text-muted-foreground bg-muted rounded-sm px-2 py-1 text-xs">
												{service}
											</span>
										))}
									</div>
								</div>

								<div className="border-primary pointer-events-none absolute inset-0 border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</article>
						</Link>
					</Reveal>
				))}
			</div>
		</Section>
	);
}
