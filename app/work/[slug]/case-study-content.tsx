'use client';

import { CaseStudy, getRelatedCaseStudies } from '@/lib/data/case-studies';
import { Header, Footer } from '@/components/organisms';
import {
	CaseStudyHero,
	CaseStudyOverview,
	CaseStudyTestimonial,
	CaseStudyRelated,
	CaseStudyCTA,
	ModuleRenderer,
} from '@/components/case-study';

interface CaseStudyContentProps {
	study: CaseStudy;
}

export default function CaseStudyContent({ study }: CaseStudyContentProps) {
	const relatedStudies = getRelatedCaseStudies(study.slug, 3);

	return (
		<>
			<Header />
			<main>
				<CaseStudyHero study={study} />

				<CaseStudyOverview study={study} />

				{study.modules && study.modules.length > 0 && <ModuleRenderer modules={study.modules} />}

				{study.testimonial && (
					<CaseStudyTestimonial
						quote={study.testimonial.quote}
						author={study.testimonial.author}
						title={study.testimonial.title}
						company={study.testimonial.company}
					/>
				)}

				<CaseStudyRelated studies={relatedStudies} />

				<CaseStudyCTA />
			</main>
			<Footer />
		</>
	);
}
