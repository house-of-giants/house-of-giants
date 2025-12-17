'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { MapPin, Code, Users, Mountain, Globe, Terminal, Shield } from 'lucide-react';
import { Header, Footer } from '@/components/organisms';
import { Section, SectionHeader } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { StatusIndicator } from '@/components/atoms/status-indicator';
import Image from 'next/image';

export default function AboutPage() {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			<Header />
			<main>
				<Section
					padding="none"
					container="none"
					className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-32 pb-20"
				>
					<div className="bg-background absolute inset-0 overflow-visible">
						<GradientOrbs />
						<NoiseOverlay />
					</div>

					<div className="container-wide relative z-10 text-center">
						<div
							className={cn('flex justify-center opacity-0', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.1s' }}
						>
							<div className="bg-background/50 border-border mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 backdrop-blur-sm">
								<StatusIndicator />
								<span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">About Us</span>
							</div>
						</div>

						<h1
							className={cn('heading-display mb-6 opacity-0', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.2s' }}
						>
							No suits. No scripts. <br className="hidden sm:block" />
							<GradientText>Just the work.</GradientText>
						</h1>

						<p
							className={cn(
								'body-large text-muted-foreground mx-auto mb-10 max-w-2xl opacity-0',
								mounted && 'animate-slide-up'
							)}
							style={{ animationDelay: '0.3s' }}
						>
							We&apos;re a founder-led custom web development partner for startups and scale-ups who care about craft. No bloat, no templates—just high-performance code that drives revenue.
						</p>
					</div>
				</Section>

				<Section className="relative">
					<div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
						<div className="lg:col-span-5">
							<SectionHeader
								eyebrow="Our Story"
								title={
									<>
										From side hustle to <GradientText>main event.</GradientText>
									</>
								}
								className="mb-8"
							/>
							<div className="relative">
								<blockquote className="border-primary text-foreground border-l-2 pl-6 text-xl leading-relaxed font-medium italic">
									&quot;Most agencies drink the Kool-Aid and call it strategy. We&apos;d rather figure out what actually
									works.&quot;
								</blockquote>
								<div className="text-muted-foreground mt-4 pl-6 text-sm">— Dominic Magnifico, Founder</div>
							</div>
						</div>

						<div className="prose prose-invert prose-lg text-muted-foreground lg:col-span-7">
							<p className="mb-6">
								House of Giants was founded in 2017 by Colorado native Dominic Magnifico and two colleagues. It started
								the way many great things do...as a side gig. We were working at a large web development agency by day,
								but we were frustrated.
							</p>
							<p className="mb-6">
								Frustrated by outdated industry standards. Frustrated by corporate red tape. Frustrated by &quot;best
								practices&quot; that were actually just &quot;safe practices.&quot;
							</p>
							<p className="mb-6">
								We eventually outgrew our corporate overlords. We realized we could ship better code, faster, if we cut
								out the layers of management and just focused on the work. In 2019, Dominic Magnifico went full-time as
								the sole owner.
							</p>
							<p>
								Since then, we&apos;ve shipped over 150 projects for 75+ clients. From local boutiques to Fortune 500
								companies, we&apos;ve kept that original spirit alive: small team, big impact, no bullshit.
							</p>
						</div>
					</div>
				</Section>

				<Section className="overflow-hidden">
					<div className="pointer-events-none absolute inset-0 -z-10">
						<div className="bg-muted/10 absolute inset-0" />
						<div className="gradient-section-glow absolute inset-0" />
						<NoiseOverlay opacity={0.2} className="mix-blend-overlay" />
						<div className="bg-primary/10 absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />
					</div>
					<SectionHeader align="center" eyebrow="Philosophy" title="How we operate" />

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div className="bg-background group border-border hover:border-primary/50 relative overflow-hidden rounded-lg border p-8 transition-colors">
							<div className="border-border bg-card text-primary group-hover:border-primary/50 group-hover:bg-primary/10 mb-6 inline-flex size-12 items-center justify-center rounded-lg border transition-colors">
								<Users className="size-6" />
							</div>
							<h3 className="heading-3 mb-4">Small by Design</h3>
							<p className="text-muted-foreground leading-relaxed">
								The people you meet are the people who build. No account managers, no layers of bureaucracy—just direct 
								accountability and fast decisions from principals who actually ship code.
							</p>
						</div>

						<div className="bg-background group border-border hover:border-primary/50 relative overflow-hidden rounded-lg border p-8 transition-colors">
							<div className="border-border bg-card text-primary group-hover:border-primary/50 group-hover:bg-primary/10 mb-6 inline-flex size-12 items-center justify-center rounded-lg border transition-colors">
								<Code className="size-6" />
							</div>
							<h3 className="heading-3 mb-4">Tech Agnostic</h3>
							<p className="text-muted-foreground leading-relaxed">
								We pick the right stack for the job, not the one we know best. Whether it&apos;s a headless CMS, a 
								complex React app, or a performance-first marketing site, we solve for outcomes, not frameworks.
							</p>
						</div>

						<div className="bg-background group border-border hover:border-primary/50 relative overflow-hidden rounded-lg border p-8 transition-colors">
							<div className="border-border bg-card text-primary group-hover:border-primary/50 group-hover:bg-primary/10 mb-6 inline-flex size-12 items-center justify-center rounded-lg border transition-colors">
								<Shield className="size-6" />
							</div>
							<h3 className="heading-3 mb-4">Transparent Pricing</h3>
							<p className="text-muted-foreground leading-relaxed">
								No black-box games. We offer flat monthly billing and clear pod-based tiers so you always know 
								your velocity and your costs. We work as an extension of your team, not a vendor hidden behind an invoice.
							</p>
						</div>

						<div className="bg-background group border-border hover:border-primary/50 relative overflow-hidden rounded-lg border p-8 transition-colors">
							<div className="border-border bg-card text-primary group-hover:border-primary/50 group-hover:bg-primary/10 mb-6 inline-flex size-12 items-center justify-center rounded-lg border transition-colors">
								<Mountain className="size-6" />
							</div>
							<h3 className="heading-3 mb-4">Colorado Punk Ethos</h3>
							<p className="text-muted-foreground leading-relaxed">
								Born in Denver with a &quot;punk-rock&quot; approach to digital: small, fast, and fiercely independent. 
								We bring Colorado&apos;s grounded, no-bullshit culture to everything we build for our national partners.
							</p>
						</div>
					</div>
				</Section>

				<Section>
					<div className="pointer-events-none absolute inset-0 -z-10">
						<div className="bg-muted/10 absolute inset-0" />
						<NoiseOverlay opacity={0.2} className="mix-blend-overlay" />
					</div>
					<SectionHeader
						eyebrow="Who We Are"
						title="Founder-led. Network-backed."
						description="A senior developer at the helm with a curated bench of specialists trusted for years."
					/>

					<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
						<div className="bg-muted/30 border-border relative aspect-square overflow-hidden rounded-2xl border">
							<Image src="/domo.gif" alt="Dominic Magnifico" fill className="object-cover" />
						</div>

						<div>
							<div className="mb-6">
								<h3 className="heading-2 mb-2">Dominic Magnifico</h3>
								<p className="text-primary text-lg font-medium">Founder & Lead Developer</p>
							</div>

							<div className="bg-border mb-8 h-px w-16" />

							<div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
								<p>
									A Colorado native with over a decade of experience building custom web applications. House of Giants
									was founded in 2017 with a simple idea: great work happens when you cut the bureaucracy and focus on
									the craft.
								</p>
								<p>
									Dom is a developer first—still writing code every day, architecting systems, and staying hands-on with
									every project. When a project needs more firepower, he brings in specialists from a network built over
									years of collaboration. Developers, designers, and strategists who meet his standards. No random
									contractors. No offshore surprises.
								</p>
								<p>
									The pod model allows House of Giants to scale the right team for each project without the overhead of
									a traditional agency. It provides dedicated development teams for founders who need senior talent 
									integrated directly into their product roadmap.
								</p>
							</div>

							<div className="mt-8 flex flex-wrap gap-3">
								<span className="border-border bg-card/50 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
									<Code className="text-primary size-4" />
									Full-Stack Development
								</span>
								<span className="border-border bg-card/50 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
									<Terminal className="text-primary size-4" />
									Technical Architecture
								</span>
								<span className="border-border bg-card/50 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
									<Mountain className="text-primary size-4" />
									Denver, CO
								</span>
							</div>
						</div>
					</div>
				</Section>

				<Section padding="bottom">
					<div className="pointer-events-none absolute inset-0 -z-10">
						<div className="bg-muted/10 absolute inset-0" />
						<NoiseOverlay opacity={0.2} className="mix-blend-overlay" />
					</div>
					<div className="border-border bg-background relative overflow-hidden rounded-2xl border p-8 md:p-12 lg:p-16">
						<div className="bg-[radial-gradient(circle_at_top_right,theme(colors.primary.900/0.1),transparent_50%)] absolute inset-0" />

						<div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
							<div>
								<div className="text-primary mb-6 inline-flex items-center gap-2">
									<MapPin className="size-5" />
									<span className="font-display font-bold tracking-wider uppercase">Denver, CO</span>
								</div>
								<h2 className="heading-2 mb-6">
									Deep roots in the <br />
									<GradientText>Mile High City.</GradientText>
								</h2>
								<div className="text-muted-foreground space-y-2 text-lg">
									<p>3839 Jackson Street</p>
									<p>Denver, CO 80205</p>
								</div>
								<div className="text-muted-foreground mt-8 inline-flex items-center gap-2 text-sm">
									<Globe className="size-4" />
									<span>Denver-based. Remote-friendly. Wherever good work happens.</span>
								</div>
							</div>

							<div className="bg-card/50 border-primary/20 relative w-full max-w-xs overflow-visible border filter transition-all hover:grayscale-0 lg:w-1/2">
								{/* Colorado-shaped rectangle - nearly rectangular with subtle variations */}
								<div
									className="relative aspect-4/3 w-full"
									style={{
										clipPath: `polygon(
                    0% 50%, 10% 40%, 20% 50%, 30% 40%, 40% 50%, 50% 40%,
                    50% 0%, 80% 0%, 80% 20%, 90% 20%, 90% 0%, 100% 0%,
                    100% 100%, 80% 100%, 80% 80%, 70% 80%, 70% 100%, 60% 100%,
                    60% 80%, 40% 80%, 40% 100%, 20% 100%, 20% 80%, 0% 80%,
                    0% 50%
                  )`,
									}}
								>
									{/* Border using box-shadow technique */}
									<div
										className="absolute inset-0"
										style={{
											clipPath: `polygon(
												0% 50%, 10% 40%, 20% 50%, 30% 40%, 40% 50%, 50% 40%,
												50% 0%, 80% 0%, 80% 20%, 90% 20%, 90% 0%, 100% 0%,
												100% 100%, 80% 100%, 80% 80%, 70% 80%, 70% 100%, 60% 100%,
												60% 80%, 40% 80%, 40% 100%, 20% 100%, 20% 80%, 0% 80%,
												0% 50%
											)`,
										}}
									/>
									{/* Content with inset to show border */}
									<div
										className="bg-muted/20 absolute overflow-hidden"
										style={{
											left: '2px',
											top: '2px',
											right: '2px',
											bottom: '2px',
											clipPath: `polygon(
												0% 50%, 10% 40%, 20% 50%, 30% 40%, 40% 50%, 50% 40%,
												50% 0%, 80% 0%, 80% 20%, 90% 20%, 90% 0%, 100% 0%,
												100% 100%, 80% 100%, 80% 80%, 70% 80%, 70% 100%, 60% 100%,
												60% 80%, 40% 80%, 40% 100%, 20% 100%, 20% 80%, 0% 80%,
												0% 50%
											)`,
										}}
									>
										{/* Denver location marker */}
										<div className="absolute" style={{ left: '65%', top: '42%', transform: 'translate(-50%, -50%)' }}>
											<div className="bg-primary/20 absolute -inset-4 animate-ping rounded-full" />
											<div className="bg-primary shadow-[0_0_20px_var(--color-primary)] relative size-3 rounded-full" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Section>
			</main>
			<Footer />
		</>
	);
}
