'use client';

import * as React from 'react';
import { MetricItem } from '@/lib/data/case-studies';
import { Section } from '@/components/templates/section';
import { GradientText } from '@/components/atoms/gradient-text';
import { Reveal } from './reveal';

interface CaseStudyMetricsProps {
	metrics: MetricItem[];
	title?: string;
}

export function CaseStudyMetrics({ metrics, title = 'Impact & Results' }: CaseStudyMetricsProps) {
	return (
		<Section padding="default" background="default">
			{title && (
				<Reveal>
					<div className="mb-12 text-center md:mb-16">
						<h2 className="heading-2">{title}</h2>
					</div>
				</Reveal>
			)}

			<div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
				{metrics.map((metric, index) => (
					<Reveal key={index} delay={index * 0.1}>
						<div className="border-primary/50 hover:border-primary border-l-2 py-2 pl-6 transition-colors">
							<GradientText as="div" className="font-display text-4xl font-bold tracking-tight md:text-5xl">
								{metric.value}
							</GradientText>

							<p className="text-foreground mt-2 text-sm font-medium md:text-base">{metric.metric}</p>

							{metric.description && <p className="text-muted-foreground mt-1 text-sm">{metric.description}</p>}

							{metric.context && (
								<p className="text-muted-foreground/60 mt-2 font-mono text-xs tracking-wider uppercase">
									{metric.context}
								</p>
							)}
						</div>
					</Reveal>
				))}
			</div>
		</Section>
	);
}
