import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section, SectionHeader } from '@/components/templates';
import { getFeaturedCaseStudies } from '@/lib/data/case-studies';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/atoms/gradient-text';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';

const gradientByIndex = [
	'from-primary/30 via-primary/10 to-accent/20',
	'from-accent/30 via-accent/10 to-primary/20',
	'from-pink/30 via-pink/10 to-primary/20',
];

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
					<Link key={study.slug} href={`/work/${study.slug}`} className="group block">
						<article className="bg-background border-border group-hover:border-primary/50 relative border transition-all duration-500">
							<div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
								<div className="bg-muted relative aspect-16/10 overflow-hidden lg:col-span-5 lg:aspect-auto">
									<div
										className={cn(
											'absolute inset-0 bg-linear-to-br transition-transform duration-700 group-hover:scale-105',
											gradientByIndex[index % gradientByIndex.length]
										)}
									/>

									<div className="font-display text-foreground/50 absolute top-6 left-6 text-sm font-medium">
										{String(index + 1).padStart(2, '0')}
									</div>

									<div className="bg-background/90 absolute bottom-6 left-6 inline-flex px-3 py-1 text-xs font-medium backdrop-blur-sm">
										{study.industry}
									</div>
								</div>

								<div className="flex flex-col justify-between p-8 lg:col-span-7 lg:p-12">
									<div>
										<div className="mb-6 flex items-start justify-between gap-4">
											<div>
												<h3 className="heading-3 group-hover:text-primary mb-2 transition-colors">{study.title}</h3>
												<p className="text-muted-foreground">{study.hook}</p>
											</div>
											<ArrowUpRight className="text-muted-foreground group-hover:text-primary size-6 shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
										</div>

										<div className="mb-8 flex flex-wrap gap-2">
											{study.services.map((service) => (
												<span key={service} className="border-border text-muted-foreground border px-3 py-1 text-xs">
													{service}
												</span>
											))}
										</div>
									</div>

									<div className="border-border grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 border-t pt-6">
										{study.results.slice(0, 3).map((result) => (
											<div key={result.metric}>
												<p className="font-display text-foreground group-hover:text-primary text-2xl font-bold transition-colors duration-300 lg:text-3xl">
													{result.value}
												</p>
												<p className="text-muted-foreground mt-1 text-xs">{result.metric}</p>
											</div>
										))}
									</div>
								</div>
							</div>

							<div className="border-primary pointer-events-none absolute inset-0 border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
						</article>
					</Link>
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
