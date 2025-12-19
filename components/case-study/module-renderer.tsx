'use client';

import Image from 'next/image';
import { CaseStudyModule } from '@/lib/data/case-studies';
import { CaseStudyProcess } from './case-study-process';
import { CaseStudyMetrics } from './case-study-metrics';
import { CaseStudyGallery } from './case-study-gallery';
import { CaseStudyFeatureGrid } from './case-study-feature-grid';
import { CaseStudyDualShowcase } from './case-study-dual-showcase';
import { CaseStudyTestimonial } from './case-study-testimonial';
import { Section } from '@/components/templates/section';
import { SectionHeader } from '@/components/templates/section-header';
import { Reveal } from './reveal';

interface ModuleRendererProps {
	modules: CaseStudyModule[];
}

export function ModuleRenderer({ modules }: ModuleRendererProps) {
	if (!modules || modules.length === 0) return null;

	return (
		<div className="flex flex-col gap-0">
			{modules.map((module, index) => {
				switch (module.type) {
					case 'process':
						return (
							<CaseStudyProcess
								key={`process-${index}`}
								title={module.title}
								description={module.description}
								steps={module.steps}
							/>
						);

					case 'metrics':
						return <CaseStudyMetrics key={`metrics-${index}`} title={module.title} metrics={module.items} />;

					case 'gallery':
						return <CaseStudyGallery key={`gallery-${index}`} images={module.images} caption={module.caption} />;

					case 'featureGrid':
						return (
							<CaseStudyFeatureGrid
								key={`feature-grid-${index}`}
								title={module.title}
								description={module.description}
								features={module.features}
								layout={module.layout}
							/>
						);

					case 'dualShowcase':
						return (
							<CaseStudyDualShowcase
								key={`dual-showcase-${index}`}
								title={module.title}
								left={module.left}
								right={module.right}
							/>
						);

					case 'quote':
						return (
							<CaseStudyTestimonial
								key={`quote-${index}`}
								quote={module.quote}
								author={module.author}
								title={module.title}
								company={module.company}
							/>
						);

					case 'prose':
						return (
							<Section key={`prose-${index}`} padding="default" container="narrow">
								<Reveal>
									<div className="space-y-8">
										<SectionHeader eyebrow={module.eyebrow} title={module.title} align="left" />
										<div className="prose prose-invert prose-lg text-muted-foreground max-w-none">
											<p className="leading-relaxed whitespace-pre-line">{module.body}</p>
										</div>

										{module.image && (
											<div className="border-border relative mt-12 aspect-video w-full overflow-hidden border">
												<Image
													src={module.image}
													alt={module.title}
													fill
													className="object-cover"
													sizes="(max-width: 1024px) 100vw, 800px"
												/>
											</div>
										)}
									</div>
								</Reveal>
							</Section>
						);

					default:
						return null;
				}
			})}
		</div>
	);
}
