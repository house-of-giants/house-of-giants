import Link from 'next/link';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { Section } from '@/components/templates';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Eyebrow } from '@/components/atoms/eyebrow';
import { GradientText } from '@/components/atoms/gradient-text';

const pods = [
	{
		name: 'Solo Developer Pod',
		tagline: 'Dedicated development capacity',
		price: '$14k',
		interval: '/month',
		description: 'For ongoing feature development or steady maintenance.',
		team: ['Shared Pod Lead', '1 Full-Time Developer', 'QA via Pod Lead'],
		bestFor: ['MVPs', 'Small product teams', 'Ongoing maintenance'],
		popular: false,
	},
	{
		name: 'Core Team Pod',
		tagline: 'Your dedicated development team',
		price: '$24k',
		interval: '/month',
		description: 'For growing products that need consistent velocity.',
		team: ['Dedicated Pod Lead', '2 Full-Time Developers', 'Fractional QA'],
		bestFor: ['Startups scaling', 'Active roadmaps', 'Multiple projects'],
		popular: true,
	},
	{
		name: 'Full Build Pod',
		tagline: 'Complete development capacity',
		price: '$38k',
		interval: '/month',
		description: 'For complex platforms or replacing a full dev team.',
		team: ['Senior Pod Lead', '3 Full-Time Developers', 'Dedicated QA'],
		bestFor: ['Enterprise builds', 'Large platforms', 'Full product teams'],
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
					<Eyebrow className="mb-4">Transparent Pricing</Eyebrow>
					<h2 className="heading-2 mb-4">
						Dedicated development teams. <br />
						<GradientText>Fixed monthly pricing.</GradientText>
					</h2>
					<p className="body-large text-muted-foreground mx-auto max-w-2xl">
						Tired of project-based pricing? We offer dedicated development pods. Self-sustaining teams that work as an
						extension of yours. Predictable cost, consistent velocity.
					</p>
				</div>

				<div className="bg-border mx-auto grid max-w-5xl grid-cols-1 gap-px md:grid-cols-3">
					{pods.map((pod) => (
						<div key={pod.name} className="bg-background relative flex flex-col p-8">
							{pod.popular && <div className="gradient-bar-accent absolute -top-px right-0 left-0 h-1" />}

							{pod.popular && (
								<div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-1 self-start px-3 py-1 text-xs font-medium">
									<Sparkles className="size-3" />
									Most Popular
								</div>
							)}

							<h3 className="font-display mb-1 text-lg font-semibold">{pod.name}</h3>
							<p className="text-muted-foreground mb-6 text-xs">{pod.tagline}</p>

							<p className="text-muted-foreground mb-6 text-sm">{pod.description}</p>

							<p className="mb-8">
								<span className="font-display text-4xl font-bold">{pod.price}</span>
								<span className="text-muted-foreground ml-1 text-sm">{pod.interval}</span>
							</p>

							{/* Team Composition */}
							<div className="mb-6">
								<h4 className="mb-3 text-xs font-medium tracking-wider uppercase">Your Team</h4>
								<ul className="space-y-2">
									{pod.team.map((member) => (
										<li key={member} className="text-muted-foreground flex items-start gap-2 text-sm">
											<Check className="text-primary mt-0.5 size-4 shrink-0" />
											{member}
										</li>
									))}
								</ul>
							</div>

							{/* Best For */}
							<div className="border-border mb-8 flex-1 border-t pt-6">
								<h4 className="mb-3 text-xs font-medium tracking-wider uppercase">Best For</h4>
								<div className="flex flex-wrap gap-2">
									{pod.bestFor.map((item) => (
										<span key={item} className="border-primary/30 text-primary border px-2 py-1 text-xs">
											{item}
										</span>
									))}
								</div>
							</div>

							<Button
								href="/pricing"
								variant={pod.popular ? 'default' : 'outline'}
								className={cn('mt-auto w-full', 'group')}
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
