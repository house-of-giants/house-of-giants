'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { PageHeader, GradientTitle, Section } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CaseStudyCard } from '@/components/molecules';
import { caseStudies, CaseStudy } from '@/lib/data/case-studies';

const filterCategories = [
	{ id: 'all', label: 'everything', filter: () => true },
	{
		id: 'apps',
		label: 'platforms & web apps',
		filter: (study: CaseStudy) => study.industry === 'SaaS' || study.type === 'Platform',
	},
	{
		id: 'creative',
		label: 'creative work',
		filter: (study: CaseStudy) => study.industry === 'Entertainment',
	},
	{
		id: 'brand',
		label: 'custom brand websites',
		filter: (study: CaseStudy) =>
			study.industry === 'Luxury' ||
			(study.type === 'Website' && study.industry !== 'SaaS' && study.industry !== 'Entertainment'),
	},
] as const;

export default function WorkContent() {
	const [activeFilter, setActiveFilter] = React.useState<string>('all');

	const filteredStudies = React.useMemo(() => {
		const category = filterCategories.find((cat) => cat.id === activeFilter);
		if (!category) return caseStudies;
		return caseStudies.filter(category.filter);
	}, [activeFilter]);

	return (
		<main>
			<PageHeader
				eyebrow="Custom Web Development • Case Studies"
				title={
					<>
						Work that shipped.
						<GradientTitle>With proof.</GradientTitle>
					</>
				}
				description="We love what we do. And so do our partners. Check out what we've built together."
				minHeight="min-h-[50vh]"
			/>

			<Section className="min-h-screen">
				<div className="mb-16 flex justify-center">
					<h2 className="heading-2 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 text-center">
						<span className="text-muted-foreground">I want to see</span>
						<Select value={activeFilter} onValueChange={(value) => value && setActiveFilter(value)}>
							<SelectTrigger className="border-primary text-primary hover:bg-primary/5 [&_svg]:text-primary font-display inline-flex h-auto w-auto cursor-pointer gap-2 border-0 border-b-2 bg-transparent px-0 py-0 text-3xl leading-[1.15] font-semibold tracking-tight transition-colors md:text-4xl lg:text-5xl [&_svg]:size-5 md:[&_svg]:size-6 lg:[&_svg]:size-7">
								<SelectValue className="font-display">
									{filterCategories.find((cat) => cat.id === activeFilter)?.label}
								</SelectValue>
							</SelectTrigger>
							<SelectContent align="center" className="border-border bg-background w-auto! min-w-50 border">
								{filterCategories.map((category) => (
									<SelectItem key={category.id} value={category.id} className="px-4 py-3">
										{category.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</h2>
				</div>

				<div key={activeFilter} className="grid grid-cols-1 gap-8 md:grid-cols-2">
					{filteredStudies.map((study) => (
						<CaseStudyCard key={study.slug} study={study} />
					))}
				</div>

				{filteredStudies.length === 0 && (
					<div className="py-20 text-center">
						<p className="text-muted-foreground text-lg">No case studies found for this filter.</p>
						<Button variant="outline" className="mt-4" onClick={() => setActiveFilter('all')}>
							Show everything
						</Button>
					</div>
				)}

				<div className="border-border mt-32 border-t pt-20">
					<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
						<div>
							<h2 className="heading-2 mb-6">
								Looking for something <br />
								<GradientText>more permanent?</GradientText>
							</h2>
							<p className="body-large text-muted-foreground mb-8">
								Beyond individual projects, we provide dedicated engineering pods to help you scale your internal
								capacity without the hiring headache.
							</p>
							<div className="flex flex-wrap gap-4">
								<Button href="/dedicated-teams" variant="default" size="lg">
									Explore Dedicated Pods
								</Button>
								<Button href="/services" variant="outline" size="lg">
									View Our Services
								</Button>
							</div>
						</div>
						<div className="bg-card/50 border-border border p-8 backdrop-blur-sm">
							<h3 className="heading-4 text-primary mb-4">Why partner with us?</h3>
							<ul className="space-y-4">
								{[
									'Senior-led architecture on every build',
									'No junior-only teams or learning on your dime',
									'Direct access to principals and architects',
									'Battle-tested workflows and proven velocity',
								].map((benefit) => (
									<li key={benefit} className="text-muted-foreground flex items-start gap-3 text-sm">
										<div className="bg-primary mt-1 size-1.5 shrink-0 rounded-full" />
										{benefit}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Section>
		</main>
	);
}
