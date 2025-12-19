'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/templates/section';
import { Button } from '@/components/ui/button';
import { Reveal } from './reveal';
import { GradientText } from '@/components/atoms/gradient-text';

export function CaseStudyCTA() {
	return (
		<Section padding="default" maskBottom="none">
			<Reveal>
				<div className="border-border bg-card relative overflow-hidden rounded-3xl border p-12 text-center lg:p-24">
					<div className="from-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent" />
					<div className="bg-primary/10 pointer-events-none absolute -top-24 -right-24 size-64 rounded-full blur-[100px]" />
					<div className="bg-accent/10 pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full blur-[100px]" />

					<div className="relative z-10 mx-auto max-w-3xl space-y-8">
						<h2 className="heading-2 md:text-5xl lg:text-6xl">
							Ready to build something <GradientText>legendary?</GradientText>
						</h2>
						<p className="body-large text-muted-foreground">
							Let&apos;s turn your vision into a digital reality that stands out from the crowd.
						</p>

						<div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
							<Link href="/contact">
								<Button size="lg" className="group h-14 px-8 text-lg">
									Start a Project
									<ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
								</Button>
							</Link>
							<Link href="/work">
								<Button variant="outline" size="lg" className="h-14 px-8 text-lg">
									View More Work
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</Reveal>
		</Section>
	);
}
