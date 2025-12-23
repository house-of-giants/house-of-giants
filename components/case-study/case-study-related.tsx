'use client';

import { CaseStudy } from '@/lib/data/case-studies';
import { Section } from '@/components/templates/section';
import { SectionHeader } from '@/components/templates/section-header';
import { CaseStudyCard } from '@/components/molecules';

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
					<CaseStudyCard key={study.slug} study={study} index={index} className="h-full" />
				))}
			</div>
		</Section>
	);
}
