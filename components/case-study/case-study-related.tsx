'use client';

import { CaseStudy } from '@/lib/data/case-studies';
import { Section } from '@/components/templates/section';
import { SectionHeader } from '@/components/templates/section-header';
import { CaseStudyCard } from '@/components/molecules';
import { Button } from '@/components/ui/button';
import { AnimatedArrow } from '@/components/atoms/animated-arrow';
import Link from 'next/link';

interface CaseStudyRelatedProps {
	studies: CaseStudy[];
	eyebrow?: string;
	title?: string;
	description?: string;
	showCta?: boolean;
	ctaText?: string;
	ctaHref?: string;
	variant?: 'default' | 'minimal';
	columns?: 2 | 3;
}

export function CaseStudyRelated({
	studies,
	eyebrow,
	title = 'Keep Exploring',
	description,
	showCta = false,
	ctaText = 'View All Work',
	ctaHref = '/work',
	variant = 'default',
	columns = 3,
}: CaseStudyRelatedProps) {
	if (studies.length === 0) return null;

	const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';

	return (
		<Section padding="default" background="muted">
			<SectionHeader eyebrow={eyebrow} title={title} description={description} align="center" className="mb-12" />

			<div className={`grid grid-cols-1 gap-8 ${gridCols}`}>
				{studies.slice(0, columns).map((study, index) => (
					<CaseStudyCard key={study.slug} study={study} variant={variant} index={index} className="h-full" />
				))}
			</div>

			{showCta && (
				<div className="mt-12 flex justify-center">
					<Link href={ctaHref}>
						<Button variant="outline" size="lg" className="group gap-2">
							{ctaText}
							<AnimatedArrow />
						</Button>
					</Link>
				</div>
			)}
		</Section>
	);
}
