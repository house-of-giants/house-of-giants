'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Users, Layers, Rocket, Code } from 'lucide-react';
import { Section, SectionHeader } from '@/components/layout/section';

const pillars = [
	{
		icon: Users,
		title: 'Small on Purpose',
		description:
			'While other agencies scale to maximize profit, we stay lean to maximize quality. Founders in production, not just sales. Direct access to the people building your project.',
		highlight: 'No account manager shuffle',
	},
	{
		icon: Layers,
		title: 'Tech-Agnostic',
		description:
			"We don't push our favorite stack. WordPress when it makes sense, React when it doesn't. You own everything we build—no platform lock-in, no recurring fees you don't need.",
		highlight: 'Outcome-obsessed',
	},
	{
		icon: Rocket,
		title: 'Built to Scale',
		description:
			"No rebuilding in 18 months. We architect for where you're going, not just where you are. Modular systems that grow with you, performance as a feature.",
		highlight: 'From day one',
	},
	{
		icon: Code,
		title: 'We Understand Code',
		description:
			'Not AI-dependent. Not design-only. Senior developers on every project who can explain every line we ship. Real debugging at 2 AM if needed.',
		highlight: 'No vibe coding',
	},
];

export function Differentiation() {
	const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

	return (
		<Section className="relative">
			<SectionHeader
				eyebrow="Why House of Giants"
				title={
					<>
						Not just another agency. <span className="text-muted-foreground">A partner that ships.</span>
					</>
				}
				description="Four principles that define how we work and why clients come back."
			/>

			<div className="bg-border grid grid-cols-1 gap-px md:grid-cols-2">
				{pillars.map((pillar, index) => {
					const Icon = pillar.icon;
					const isHovered = hoveredIndex === index;

					return (
						<div
							key={pillar.title}
							className="bg-background group relative"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							{/* Hover glow effect */}
							<div
								className={cn(
									'from-primary/10 to-accent/5 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-500',
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
