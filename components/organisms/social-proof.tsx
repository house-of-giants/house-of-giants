'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Section } from '@/components/templates/section';
import { Eyebrow } from '@/components/atoms/eyebrow';
import { GridPattern } from '@/components/backgrounds/grid-pattern';
import { TestimonialCard } from '@/components/molecules/testimonial-card';
import { clients, testimonials } from '@/lib/data/clients';

export function SocialProof() {
	const [activeTestimonial, setActiveTestimonial] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 6000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Section className="overflow-hidden" maskBottom="angle">
			{/* Client Logos Marquee */}
			<div className="relative mb-24">
				<Eyebrow className="mb-12 text-center">Trusted by Industry Leaders</Eyebrow>

				{/* Marquee wrapper */}
				<div className="relative">
					{/* Fade edges */}
					<div className="from-background absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r to-transparent" />
					<div className="from-background absolute top-0 right-0 bottom-0 z-10 w-32 bg-gradient-to-l to-transparent" />

					{/* Scrolling logos */}
					<div className="flex overflow-hidden">
						<div className="flex animate-[marquee_40s_linear_infinite]">
							{[...clients, ...clients].map((client, index) => (
								<div key={`${client.name}-${index}`} className="flex items-center justify-center px-12 py-8">
									<span className="font-display text-muted-foreground/50 hover:text-muted-foreground text-2xl font-semibold whitespace-nowrap transition-colors md:text-3xl">
										{client.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Testimonials */}
			<div className="relative mx-auto max-w-5xl px-6 pt-12 md:px-12">
				<GridPattern />

				<div className="relative">
					<div className="relative min-h-[350px] md:min-h-[300px]">
						{testimonials.map((testimonial, index) => (
							<TestimonialCard
								key={testimonial.author}
								quote={testimonial.quote}
								author={testimonial.author}
								title={testimonial.title}
								company={testimonial.company}
								isActive={activeTestimonial === index}
							/>
						))}
					</div>

					<div className="mt-8 flex items-center justify-center gap-1.5 md:mt-12">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveTestimonial(index)}
								className={cn(
									'h-1 transition-all duration-500 ease-out',
									activeTestimonial === index
										? 'bg-accent w-12 shadow-[0_0_15px_rgba(var(--accent),0.5)]'
										: 'w-3 bg-white/10 hover:w-6 hover:bg-white/30'
								)}
								aria-label={`Go to testimonial ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
