'use client';

import Image from 'next/image';
import { ShowcaseItem } from '@/lib/data/case-studies';
import { Section } from '@/components/templates/section';
import { SectionHeader } from '@/components/templates/section-header';
import { Reveal } from './reveal';

interface CaseStudyDualShowcaseProps {
	title?: string;
	left: ShowcaseItem;
	right: ShowcaseItem;
}

export function CaseStudyDualShowcase({ title, left, right }: CaseStudyDualShowcaseProps) {
	return (
		<Section padding="default" container="wide">
			{title && <SectionHeader title={title} align="center" className="mb-16" />}

			<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
				<Reveal className="h-full">
					<div className="group border-border bg-card hover:border-primary/50 relative flex h-full flex-col overflow-hidden border transition-colors">
						<div className="border-border relative aspect-video w-full overflow-hidden border-b">
							<Image
								src={left.image}
								alt={left.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
							<div className="bg-primary/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
						</div>

						<div className="flex flex-1 flex-col p-8 lg:p-10">
							<h3 className="heading-3 mb-4">{left.title}</h3>
							<p className="body-base text-muted-foreground mb-6 flex-1">{left.description}</p>

							{left.bullets && (
								<div className="border-border mt-auto border-t pt-6">
									<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
										{left.bullets.map((bullet, idx) => (
											<li key={idx} className="text-muted-foreground flex items-center gap-2 text-sm">
												<span className="bg-primary size-1.5 shrink-0 rounded-full" />
												<span>{bullet}</span>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>
				</Reveal>

				<Reveal delay={0.2} className="h-full">
					<div className="group border-border bg-card hover:border-primary/50 relative flex h-full flex-col overflow-hidden border transition-colors">
						<div className="border-border relative aspect-video w-full overflow-hidden border-b">
							<Image
								src={right.image}
								alt={right.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
							<div className="bg-primary/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
						</div>

						<div className="flex flex-1 flex-col p-8 lg:p-10">
							<h3 className="heading-3 mb-4">{right.title}</h3>
							<p className="body-base text-muted-foreground mb-6 flex-1">{right.description}</p>

							{right.bullets && (
								<div className="border-border mt-auto border-t pt-6">
									<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
										{right.bullets.map((bullet, idx) => (
											<li key={idx} className="text-muted-foreground flex items-center gap-2 text-sm">
												<span className="bg-primary size-1.5 shrink-0 rounded-full" />
												<span>{bullet}</span>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>
				</Reveal>
			</div>
		</Section>
	);
}
