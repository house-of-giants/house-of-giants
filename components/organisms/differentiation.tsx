'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Users, Layers, Rocket, Code } from 'lucide-react';
import { Section, SectionHeader } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';

const pillars = [
	{
		icon: Users,
		title: 'Small on Purpose',
		description:
			'Most web development companies scale to squeeze margins. We stay small because quality matters more than growth. You work directly with the founders writing your code, not account managers reading scripts.',
		highlight: 'No account manager shuffle',
	},
	{
		icon: Code,
		title: 'We Actually Understand Code',
		description:
			"We're not designers who learned to code last year or AI prompt engineers calling ourselves developers. We've been building custom web applications since before it was trendy. Whatever tech makes sense for your business, we know it.",
		highlight: 'No proprietary lock-in',
	},
	{
		icon: Rocket,
		title: "Built for Where You're Going",
		description:
			"That MVP you need now? We build it to survive your growth. Architecture that doesn't fall apart when you actually get traction. We've seen enough startups die from technical debt to know better.",
		highlight: 'From day one',
	},
	{
		icon: Layers,
		title: 'We Own Every Line',
		description:
			"AI speeds us up. Doesn't do our thinking. Every architectural decision, every line shipped—that's us. Real developers who can explain exactly why your code works the way it does.",
		highlight: 'No guessing. Just knowing.',
	},
];

export function Differentiation() {
	const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

	return (
		<Section className="relative">
			<SectionHeader
				eyebrow="Why Work With Us"
				title={
					<>
						Not your typical web development agency. <GradientText>An actual partner.</GradientText>
					</>
				}
				description="Four principles that define how we work and why founders come back."
			/>

			<div className="bg-border grid grid-cols-1 gap-px md:grid-cols-2">
				{pillars.map((pillar, index) => {
					const Icon = pillar.icon;
					const isHovered = hoveredIndex === index;

					return (
						<div
							key={pillar.title}
							className="bg-background group hover:border-primary/50 relative border border-transparent transition-colors"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							{/* Hover glow effect */}
							<div
								className={cn(
									'from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500',
									isHovered && 'opacity-100'
								)}
							/>

							<div className="relative p-8 md:p-12 lg:p-16">
								{/* Number */}
								<span className="font-display text-foreground/5 absolute top-8 right-8 text-6xl font-bold select-none md:top-12 md:right-12 md:text-7xl lg:top-16 lg:right-16">
									0{index + 1}
								</span>

								{/* Icon */}
								<div
									className={cn(
										'border-border mb-6 inline-flex size-12 items-center justify-center border transition-all duration-300',
										isHovered && 'border-primary bg-primary/10'
									)}
								>
									<Icon
										className={cn(
											'text-muted-foreground size-6 transition-colors duration-300',
											isHovered && 'text-primary'
										)}
									/>
								</div>

								{/* Content */}
								<h3 className="heading-3 mb-4">{pillar.title}</h3>
								<p className="text-muted-foreground mb-4 leading-relaxed">{pillar.description}</p>

								{/* Highlight tag */}
								<span
									className={cn(
										'border-border inline-flex border px-3 py-1 text-xs font-medium transition-all duration-300',
										isHovered && 'border-primary text-primary'
									)}
								>
									{pillar.highlight}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</Section>
	);
}
