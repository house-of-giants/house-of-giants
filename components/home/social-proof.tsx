'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Section } from '@/components/layout/section';
import { clients, testimonials } from '@/lib/data/clients';
import { Quote } from 'lucide-react';

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
				<p className="eyebrow mb-12 text-center">Trusted by Industry Leaders</p>

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
			<div className="mx-auto max-w-4xl">
				<div className="relative">
					{/* Quote icon */}
					<Quote className="text-primary/10 absolute -top-6 -left-4 size-16" />

					{/* Testimonial content */}
					<div className="relative min-h-[200px]">
						{testimonials.map((testimonial, index) => (
							<div
								key={testimonial.author}
								className={cn(
									'absolute inset-0 transition-all duration-700',
									activeTestimonial === index
										? 'translate-y-0 opacity-100'
										: 'pointer-events-none translate-y-8 opacity-0'
								)}
							>
								<blockquote className="font-display mb-8 text-2xl leading-tight font-medium md:text-3xl lg:text-4xl">
									&ldquo;{testimonial.quote}&rdquo;
								</blockquote>
								<div className="flex items-center gap-4">
									{/* Avatar placeholder */}
									<div className="from-primary/30 to-accent/30 flex size-12 items-center justify-center bg-gradient-to-br text-sm font-medium">
										{testimonial.author
											.split(' ')
											.map((n) => n[0])
											.join('')}
									</div>
									<div>
										<p className="font-medium">{testimonial.author}</p>
										<p className="text-muted-foreground text-sm">
											{testimonial.title}, {testimonial.company}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Navigation dots */}
					<div className="mt-12 flex items-center justify-center gap-2">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveTestimonial(index)}
								className={cn(
									'h-1 transition-all duration-300',
									activeTestimonial === index ? 'bg-primary w-8' : 'bg-border hover:bg-muted-foreground w-2'
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
