import Link from 'next/link';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const tiers = [
	{
		name: 'Foundation',
		price: '$15k',
		description: 'For startups ready to graduate from templates',
		features: ['Custom design & development', 'Mobile-responsive', 'CMS integration', '4-6 week timeline'],
		popular: false,
	},
	{
		name: 'Growth',
		price: '$30k',
		description: 'For scale-ups building their growth engine',
		features: [
			'Everything in Foundation',
			'Custom functionality',
			'Performance optimization',
			'Analytics integration',
			'6-10 week timeline',
		],
		popular: true,
	},
	{
		name: 'Enterprise',
		price: '$50k+',
		description: 'For complex platforms and applications',
		features: [
			'Everything in Growth',
			'Custom architecture',
			'API development',
			'Advanced integrations',
			'Ongoing support options',
		],
		popular: false,
	},
];

export function PricingTeaser() {
	return (
		<Section background="muted" className="relative overflow-hidden">
			{/* Background pattern */}
			<div className="dot-pattern absolute inset-0 opacity-50" />

			<div className="relative">
				<div className="mb-16 text-center">
					<p className="eyebrow mb-4">Transparent Pricing</p>
					<h2 className="heading-2 mb-4">
						No surprises. <span className="text-gradient">No games.</span>
					</h2>
					<p className="body-large text-muted-foreground mx-auto max-w-2xl">
						We believe in honest pricing from the start. Here&apos;s what you can expect when you work with us.
					</p>
				</div>

				<div className="bg-border mx-auto grid max-w-5xl grid-cols-1 gap-px md:grid-cols-3">
					{tiers.map((tier) => (
						<div key={tier.name} className="bg-background relative flex flex-col p-8">
							{tier.popular && <div className="gradient-bar-accent absolute -top-px right-0 left-0 h-1" />}

							{tier.popular && (
								<div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-1 self-start px-3 py-1 text-xs font-medium">
									<Sparkles className="size-3" />
									Most Popular
								</div>
							)}

							<h3 className="font-display mb-2 text-lg font-semibold">{tier.name}</h3>

							<p className="text-muted-foreground mb-6 text-sm">{tier.description}</p>

							<p className="mb-8">
								<span className="font-display text-4xl font-bold">{tier.price}</span>
								{tier.name !== 'Enterprise' && <span className="text-muted-foreground ml-1 text-sm">starting</span>}
							</p>

							<ul className="mb-8 flex-1 space-y-3">
								{tier.features.map((feature) => (
									<li key={feature} className="text-muted-foreground flex items-start gap-2 text-sm">
										<Check className="text-primary mt-0.5 size-4 flex-shrink-0" />
										{feature}
									</li>
								))}
							</ul>

							<Button
								href="/pricing"
								variant={tier.popular ? 'default' : 'outline'}
								className={cn('mt-auto w-full', !tier.popular && 'group')}
							>
								Learn More
								<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</Button>
						</div>
					))}
				</div>

				<p className="text-muted-foreground mt-8 text-center text-sm">
					Every project is unique. These are starting points—
					<Link href="/contact" className="text-primary underline-offset-4 hover:underline">
						let&apos;s talk
					</Link>{' '}
					about yours.
				</p>
			</div>
		</Section>
	);
}
