import { Section, SectionHeader } from '@/components/templates';
import { getFeaturedCaseStudies } from '@/lib/data/case-studies';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/atoms/gradient-text';
import { SectionBackground } from '@/components/backgrounds/section-background';
import { AnimatedArrow } from '@/components/atoms/animated-arrow';
import { CaseStudyCard } from '@/components/molecules/case-study-card';
import Link from 'next/link';

export function FeaturedWork() {
	const featuredStudies = getFeaturedCaseStudies();

	return (
		<Section className="overflow-hidden" maskBottom="angle">
			<SectionBackground variant="glow" glowPosition="top" />

			<SectionHeader
				eyebrow="Selected Work"
				title={
					<>
						Custom web development projects that shipped. <GradientText>With results.</GradientText>
					</>
				}
				description="Real metrics from real projects. No vague 'increased engagement' bullshit."
			/>

			<div className="space-y-px">
				{featuredStudies.map((study, index) => (
					<CaseStudyCard key={study.slug} study={study} variant="featured" index={index} />
				))}
			</div>

			<div className="mt-12 flex justify-center">
				<Link href="/work">
					<Button variant="outline" size="lg" className="group gap-2">
						View All Projects
						<AnimatedArrow />
					</Button>
				</Link>
			</div>
		</Section>
	);
}
