import { Section, SectionHeader } from '@/components/templates';
import { getFeaturedCaseStudies } from '@/lib/data/case-studies';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/atoms/gradient-text';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { CaseStudyCard } from '@/components/molecules/case-study-card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function FeaturedWork() {
	const featuredStudies = getFeaturedCaseStudies();

	return (
		<Section className="overflow-hidden" maskBottom="angle">
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="bg-muted/10 absolute inset-0" />
				<div className="gradient-section-glow absolute inset-0" />
				<NoiseOverlay opacity={0.2} className="mix-blend-overlay" />
				<div className="bg-primary/10 absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />
			</div>

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
						<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</Button>
				</Link>
			</div>
		</Section>
	);
}
