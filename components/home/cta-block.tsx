import { ArrowUpRight, Calendar, MessageSquare, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const nextSteps = [
	{
		icon: MessageSquare,
		label: 'Quick chat',
		description: "15 min to see if we're a fit",
	},
	{
		icon: FileText,
		label: 'Scope & quote',
		description: 'Clear deliverables, honest pricing',
	},
	{
		icon: Calendar,
		label: 'Kick off',
		description: 'Start building within 2 weeks',
	},
];

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
						<p className="eyebrow text-primary mb-6">Your Move</p>

						<h2 className="font-display mb-6 leading-[1.1] font-bold tracking-tight">
							<span className="text-foreground block text-[clamp(2rem,5vw,3.5rem)]">Seen enough?</span>
							<span className="text-muted-foreground block text-[clamp(2rem,5vw,3.5rem)]">
								Let&apos;s talk numbers.
							</span>
						</h2>

						<p className="text-muted-foreground mb-8 max-w-md text-lg leading-relaxed">
							You&apos;ve seen the work. You know the pricing ballpark. The only question left is whether we&apos;re the
							right fit for your project.
						</p>

						<div className="flex flex-col items-start gap-4 sm:flex-row">
							<Button href="/contact" size="cta" className="group gap-3">
								Book a Discovery Call
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
								{nextSteps.map((step, index) => {
									const Icon = step.icon;
									return (
										<div key={step.label} className="flex items-start gap-4">
											<div className="flex items-center gap-4">
												<span className="border-border bg-background font-display text-muted-foreground flex size-10 items-center justify-center border text-sm font-semibold">
													{index + 1}
												</span>
												<Icon className="text-primary size-5" />
											</div>
											<div className="pt-1.5">
												<p className="text-foreground font-medium">{step.label}</p>
												<p className="text-muted-foreground text-sm">{step.description}</p>
											</div>
										</div>
									);
								})}
							</div>

							{/* Availability indicator */}
							<div className="border-border mt-8 border-t pt-6">
								<div className="flex items-center gap-3">
									<span className="relative flex h-2.5 w-2.5">
										<span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
										<span className="bg-primary relative inline-flex h-2.5 w-2.5 rounded-full"></span>
									</span>
									<span className="text-sm">
										<span className="text-foreground font-medium">2 slots available</span>
										<span className="text-muted-foreground"> for Q1 2025</span>
									</span>
								</div>
							</div>
						</div>

						{/* Decorative corner accents */}
						<div className="border-primary absolute -top-px -left-px h-8 w-8 border-t-2 border-l-2" />
						<div className="border-accent absolute -right-px -bottom-px h-8 w-8 border-r-2 border-b-2" />
					</div>
				</div>
			</div>
		</section>
	);
}
