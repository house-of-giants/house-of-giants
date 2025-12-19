'use client';

import * as React from 'react';
import { CaseStudy } from '@/lib/data/case-studies';
import { Section } from '@/components/templates/section';
import { SectionHeader } from '@/components/templates/section-header';
import { Separator } from '@/components/ui/separator';
import { Reveal } from './reveal';

interface CaseStudyOverviewProps {
	study: CaseStudy;
}

export function CaseStudyOverview({ study }: CaseStudyOverviewProps) {
	return (
		<Section padding="default">
			<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
				<div className="space-y-16 lg:col-span-8">
					<Reveal>
						<SectionHeader eyebrow="The Challenge" title="Defining the Problem" description={study.challenge} />
					</Reveal>

					<Reveal delay={0.2}>
						<div className="border-primary/30 relative border-l-2 pl-8">
							<h3 className="heading-3 mb-4">Our Approach</h3>
							<p className="body-large text-muted-foreground">{study.approach}</p>
						</div>
					</Reveal>

					<Reveal delay={0.3}>
						<div className="space-y-4">
							<h3 className="heading-3">The Solution</h3>
							<p className="body-large text-muted-foreground">{study.solution}</p>
						</div>
					</Reveal>
				</div>

				<div className="lg:col-span-4">
					<Reveal delay={0.4}>
						<div className="bg-card/50 border-border sticky top-24 border p-8 backdrop-blur-sm">
							<h4 className="heading-3 mb-6">Project Info</h4>

							<div className="space-y-6">
								<div>
									<p className="eyebrow mb-2">Client</p>
									<p className="body-base">{study.client.name}</p>
									<p className="text-muted-foreground text-sm">{study.client.description}</p>
								</div>

								<Separator />

								<div>
									<p className="eyebrow mb-2">Role</p>
									<div className="flex flex-wrap gap-2">
										{study.services.map((service) => (
											<span key={service} className="text-muted-foreground bg-muted/50 px-2 py-1 text-sm">
												{service}
											</span>
										))}
									</div>
								</div>

								<Separator />

								<div>
									<p className="eyebrow mb-2">Tech Stack</p>
									<div className="flex flex-wrap gap-2">
										{study.techStack.map((tech) => (
											<span
												key={tech}
												className="border-border hover:border-primary/50 cursor-default border px-2 py-1 text-sm transition-colors"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{study.partnerCredit && (
									<>
										<Separator />
										<div>
											<p className="eyebrow mb-2">{study.partnerCredit.role}</p>
											<a
												href={study.partnerCredit.url}
												target="_blank"
												rel="noopener noreferrer"
												className="body-base hover:text-primary hover:border-primary border-b border-transparent transition-colors"
											>
												{study.partnerCredit.name}
											</a>
										</div>
									</>
								)}
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</Section>
	);
}
