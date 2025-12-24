'use client';

import { Quote } from 'lucide-react';
import { Section } from '@/components/templates/section';
import { Reveal } from './reveal';

interface CaseStudyTestimonialProps {
	quote: string;
	author: string;
	title: string;
	company?: string;
}

export function CaseStudyTestimonial({ quote, author, title, company }: CaseStudyTestimonialProps) {
	return (
		<Section padding="default" container="narrow" className="relative overflow-hidden">
			<div className="bg-primary/5 absolute top-0 right-0 -mt-20 -mr-20 size-64 rounded-full blur-3xl" />
			<div className="bg-accent/5 absolute bottom-0 left-0 -mb-20 -ml-20 size-64 rounded-full blur-3xl" />

			<Reveal>
				<div className="border-primary relative border-l-4 py-4 pl-8 md:pl-12">
					<Quote className="text-primary/20 absolute top-0 left-8 size-12 -translate-y-8 rotate-180 md:left-12" />

					<blockquote className="heading-2 relative z-10 mb-8 leading-tight font-medium md:text-5xl lg:text-6xl">
						&ldquo;{quote}&rdquo;
					</blockquote>

					<div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
						<p className="text-lg font-bold">{author}</p>
						<span className="text-muted-foreground hidden md:block">&bull;</span>
						<p className="text-muted-foreground">
							{title}
							{company ? `, ${company}` : ''}
						</p>
					</div>
				</div>
			</Reveal>
		</Section>
	);
}
