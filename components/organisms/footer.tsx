import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '@/components/atoms/eyebrow';
import { Logo } from '@/components/atoms/logo';
import { CTABlock } from './cta-block';
import { footerNavigation, audienceNavigation, socialLinks, contactInfo } from '@/lib/data/navigation';

export function Footer() {
	return (
		<footer className="border-border bg-background relative border-t">
			{/* CTA Section */}
			<CTABlock />

			{/* Footer Navigation */}
			<div className="relative overflow-hidden py-16 lg:py-24">
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
								<p>{contactInfo.location}</p>
								<a href={`mailto:${contactInfo.email}`} className="hover:text-foreground block transition-colors">
									{contactInfo.email}
								</a>
							</div>
						</div>

						{/* Pages Column */}
						<div>
							<Eyebrow className="mb-6">Navigation</Eyebrow>
							<ul className="space-y-3">
								{footerNavigation.map((item) => (
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
								{audienceNavigation.map((item) => (
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
								{socialLinks.map((item) => (
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
