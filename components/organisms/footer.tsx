import Link from 'next/link';
import { ArrowUpRight, Calendar, MessageSquare, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Eyebrow } from '@/components/atoms/eyebrow';
import { GradientText } from '@/components/atoms/gradient-text';
import { StatusIndicator } from '@/components/atoms/status-indicator';
import { DecorativeCorner } from '@/components/atoms/decorative-corner';
import { Logo } from '@/components/atoms/logo';

const navigation = {
	main: [
		{ name: 'Work', href: '/work' },
		{ name: 'Services', href: '/services' },
		{ name: 'About', href: '/about' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Pricing', href: '/pricing' },
		{ name: 'Contact', href: '/contact' },
	],
	audiences: [
		{ name: 'For Startups', href: '/for-startups' },
		{ name: 'For Restaurants', href: '/for-restaurants' },
	],
	social: [
		{ name: 'Twitter / X', href: 'https://x.com/haborhouse', external: true },
		{ name: 'LinkedIn', href: 'https://linkedin.com/company/houseofgiants', external: true },
		{ name: 'GitHub', href: 'https://github.com/houseofgiants', external: true },
		{ name: 'Dribbble', href: 'https://dribbble.com/houseofgiants', external: true },
	],
};

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

export function Footer() {
	return (
		<footer className="border-border bg-background relative border-t">
			{/* CTA Section */}
			<div className="container-wide section-padding border-border border-b">
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
									<StatusIndicator size="md" />
									<span className="text-sm">
										<span className="text-foreground font-medium">2 slots available</span>
										<span className="text-muted-foreground"> for Q1 2025</span>
									</span>
								</div>
							</div>
						</div>

						{/* Decorative corner accents */}
						<DecorativeCorner position="top-left" />
						<DecorativeCorner position="bottom-right" />
					</div>
				</div>
			</div>

			{/* Footer Navigation */}
			<div className="relative overflow-hidden py-16 lg:py-24">
				{/* Large watermark */}
				<Logo variant="giants" className="text-background/10 pointer-events-none absolute inset-0 h-full w-full" />

				<div className="container-wide relative">
					<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
						{/* Brand Column */}
						<div className="lg:col-span-1">
							<Link href="/" className="mb-6 inline-block">
								<Logo width={160} className="text-foreground transition-opacity hover:opacity-80" />
							</Link>
							<p className="text-muted-foreground max-w-xs text-sm">
								Custom web development studio building digital experiences that scale. Denver-based, remote-friendly.
							</p>
							<div className="text-muted-foreground mt-6 space-y-2 text-sm">
								<p>Denver, Colorado</p>
								<a href="mailto:hello@houseofgiants.com" className="hover:text-foreground block transition-colors">
									hello@houseofgiants.com
								</a>
							</div>
						</div>

						{/* Pages Column */}
						<div>
							<Eyebrow className="mb-6">Navigation</Eyebrow>
							<ul className="space-y-3">
								{navigation.main.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="text-muted-foreground hover:text-foreground link-underline transition-colors"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Audiences Column */}
						<div>
							<Eyebrow className="mb-6">Industries</Eyebrow>
							<ul className="space-y-3">
								{navigation.audiences.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="text-muted-foreground hover:text-foreground link-underline transition-colors"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Social Column */}
						<div>
							<Eyebrow className="mb-6">Connect</Eyebrow>
							<ul className="space-y-3">
								{navigation.social.map((item) => (
									<li key={item.name}>
										<a
											href={item.href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-muted-foreground hover:text-foreground link-underline inline-flex items-center gap-1 transition-colors"
										>
											{item.name}
											<ArrowUpRight className="size-3 opacity-50" />
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="border-border mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
						<p className="text-muted-foreground text-sm">
							© {new Date().getFullYear()} House of Giants. All rights reserved.
						</p>
						<div className="text-muted-foreground flex items-center gap-6 text-sm">
							<Link href="/privacy" className="hover:text-foreground transition-colors">
								Privacy
							</Link>
							<Link href="/terms" className="hover:text-foreground transition-colors">
								Terms
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
