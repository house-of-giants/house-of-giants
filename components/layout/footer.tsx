import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

export function Footer() {
	return (
		<footer className="border-border bg-background relative border-t">
			{/* Large CTA Section */}
			<div className="container-wide section-padding border-border border-b">
				<div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-3xl">
						<p className="eyebrow mb-4">Ready to start?</p>
						<h2 className="heading-1 mb-6">
							Let&apos;s build something <span className="text-gradient">extraordinary</span>
						</h2>
						<p className="body-large text-muted-foreground max-w-xl">
							Whether you&apos;re launching a startup, scaling your platform, or reimagining your digital
							presence—we&apos;re ready when you are.
						</p>
					</div>
					<Button href="/contact" size="cta" className="group gap-3">
						Start Your Project
						<ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</Button>
				</div>
			</div>

			{/* Footer Navigation */}
			<div className="container-wide py-16 lg:py-24">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
					{/* Brand Column */}
					<div className="lg:col-span-1">
						<Link href="/" className="mb-6 inline-flex items-center gap-2">
							<div className="bg-primary text-primary-foreground font-display flex size-10 items-center justify-center text-lg font-bold">
								HG
							</div>
							<span className="font-display text-lg font-semibold tracking-tight">House of Giants</span>
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
						<h3 className="eyebrow mb-6">Navigation</h3>
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
						<h3 className="eyebrow mb-6">Industries</h3>
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
						<h3 className="eyebrow mb-6">Connect</h3>
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

			{/* Large watermark */}
			<div className="pointer-events-none absolute right-0 bottom-0 left-0 overflow-hidden select-none">
				<div className="container-wide">
					<p className="font-display text-foreground/[0.02] translate-y-[30%] text-[12vw] leading-none font-bold tracking-tight">
						GIANTS
					</p>
				</div>
			</div>
		</footer>
	);
}
