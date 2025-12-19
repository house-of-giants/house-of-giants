import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Eyebrow } from '@/components/atoms/eyebrow';
import { GradientText } from '@/components/atoms/gradient-text';
import { DecorativeCorner } from '@/components/atoms/decorative-corner';
import { ProcessStep } from '@/components/molecules/process-step';
import { AvailabilityBadge } from '@/components/molecules/availability-badge';
import { nextSteps } from '@/lib/data/navigation';

export function CTABlock() {
	return (
		<section className="relative overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32 lg:pt-24">
			{/* Subtle gradient background */}
			<div className="gradient-section-glow absolute inset-0" />

			{/* Content */}
			<div className="container-wide relative">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
					{/* Left: The Ask */}
					<div>
						<Eyebrow className="text-primary mb-6">Your Move</Eyebrow>

						<h2 className="font-display mb-6 leading-[1.1] font-bold tracking-tight">
							<span className="text-foreground text-[clamp(2rem,5vw,3.5rem)]">
								Building something that matters? We&apos;ll treat it like&nbsp;
								<GradientText>our own</GradientText>
							</span>
						</h2>

						<p className="text-muted-foreground mb-8 max-w-md text-lg leading-relaxed">
							You&apos;re building something that matters. You need a development team that treats your product like
							their own. Let&apos;s see if we&apos;re a fit.
						</p>

						<div className="flex flex-col items-start gap-4 sm:flex-row">
							<Button href="/contact" size="cta" className="group gap-3">
								Get Started
								<ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</Button>
							<Button href="/pricing" variant="outline" size="cta">
								See Full Pricing
							</Button>
						</div>
					</div>

					{/* Right: What Happens Next */}
					<div className="relative">
						<div className="border-border bg-card/50 border p-8 backdrop-blur-sm lg:p-10">
							<h3 className="text-muted-foreground mb-8 text-sm font-medium tracking-wider uppercase">
								What happens next
							</h3>

							<div className="space-y-6">
								{nextSteps.map((step, index) => (
									<ProcessStep
										key={step.label}
										index={index}
										icon={step.icon}
										label={step.label}
										description={step.description}
									/>
								))}
							</div>

							{/* Availability indicator */}
							<AvailabilityBadge slots={2} period="Q1 2026" />
						</div>

						{/* Decorative corner accents */}
						<DecorativeCorner position="top-left" />
						<DecorativeCorner position="bottom-right" />
					</div>
				</div>
			</div>
		</section>
	);
}
