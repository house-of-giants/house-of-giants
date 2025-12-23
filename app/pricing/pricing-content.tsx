'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
	Globe,
	Layers,
	Code,
	Check,
	Sparkles,
	ArrowUpRight,
	Clock,
	Puzzle,
	FileText,
	Headphones,
	MessageSquare,
} from 'lucide-react';
import { Header, Footer } from '@/components/organisms';
import { PageHeader, GradientTitle, Section, SectionHeader } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { Button } from '@/components/ui/button';
import {
	projectTypes,
	pricingTiers,
	pricingFactors,
	pricingFaqs,
	getTierById,
	type ProjectType,
} from '@/lib/data/pricing';

const iconMap = {
	Globe,
	Layers,
	Code,
};

const factorIcons = [Puzzle, Puzzle, FileText, Clock, Headphones];

export default function PricingContent() {
	const [mounted, setMounted] = React.useState(false);
	const [selectedType, setSelectedType] = React.useState<ProjectType['id'] | null>(null);
	const [focusedIndex, setFocusedIndex] = React.useState(0);
	const cardRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
		switch (e.key) {
			case 'ArrowRight':
			case 'ArrowDown':
				e.preventDefault();
				const nextIndex = (index + 1) % projectTypes.length;
				setFocusedIndex(nextIndex);
				cardRefs.current[nextIndex]?.focus();
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				e.preventDefault();
				const prevIndex = (index - 1 + projectTypes.length) % projectTypes.length;
				setFocusedIndex(prevIndex);
				cardRefs.current[prevIndex]?.focus();
				break;
			case 'Enter':
			case ' ':
				e.preventDefault();
				setSelectedType(projectTypes[index].id);
				break;
		}
	};

	const recommendedTier = selectedType
		? getTierById(projectTypes.find((t) => t.id === selectedType)?.recommendedTier || '')
		: null;

	return (
		<>
			<Header />
			<main>
				<PageHeader
					eyebrow="Transparent Pricing"
					title={
						<>
							No black boxes. <GradientTitle>No hourly surprises.</GradientTitle>
						</>
					}
					description="We price by project scope, not hours. You know the investment before we write a line of code."
					minHeight="min-h-[50vh]"
				/>

				{/* Decision Tree Section */}
				<Section>
					<SectionHeader
						eyebrow="Scope Your Project"
						title="What are you building?"
						description="Select your project type to see our recommended tier and pricing."
						align="center"
						className="mb-12"
					/>

					<div
						role="radiogroup"
						aria-label="Select your project type"
						className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3"
					>
						{projectTypes.map((type, index) => {
							const Icon = iconMap[type.icon as keyof typeof iconMap];
							const isSelected = selectedType === type.id;

							return (
								<button
									key={type.id}
									ref={(el) => {
										cardRefs.current[index] = el;
									}}
									role="radio"
									aria-checked={isSelected}
									tabIndex={focusedIndex === index ? 0 : -1}
									onClick={() => setSelectedType(type.id)}
									onKeyDown={(e) => handleKeyDown(e, index)}
									className={cn(
										'bg-background border-border group relative flex flex-col items-center rounded-xl border p-8 text-center transition-all duration-300',
										'hover:border-primary/50 hover:-translate-y-1',
										'focus-visible:ring-primary focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
										isSelected && 'border-primary bg-primary/5',
										mounted && 'animate-slide-up opacity-0'
									)}
									style={{ animationDelay: `${0.1 + index * 0.1}s` }}
								>
									{/* Glow effect */}
									<div
										className={cn(
											'pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300',
											isSelected && 'opacity-100'
										)}
										style={{
											background:
												'radial-gradient(600px circle at 50% 0%, oklch(0.85 0.22 170 / 15%), transparent 60%)',
										}}
									/>

									<div
										className={cn(
											'border-border bg-card mb-6 inline-flex size-14 items-center justify-center rounded-xl border transition-colors',
											'group-hover:border-primary/50 group-hover:bg-primary/10',
											isSelected && 'border-primary/50 bg-primary/10'
										)}
									>
										<Icon
											className={cn(
												'text-muted-foreground size-7 transition-colors',
												'group-hover:text-primary',
												isSelected && 'text-primary'
											)}
										/>
									</div>

									<h3 className="heading-4 mb-2">{type.title}</h3>
									<p className="text-muted-foreground text-sm">{type.description}</p>

									{isSelected && (
										<div className="bg-primary text-primary-foreground mt-4 inline-flex items-center gap-1 px-3 py-1 text-xs font-medium">
											<Check className="size-3" />
											Selected
										</div>
									)}
								</button>
							);
						})}
					</div>

					{/* Tier Reveal */}
					<div
						className={cn(
							'mt-12 grid overflow-hidden transition-[grid-template-rows] duration-500',
							selectedType ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
						)}
						style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
					>
						<div className="min-h-0 overflow-hidden">
							<div
								className={cn(
									'transition-all duration-300',
									selectedType ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
								)}
								style={{ transitionDelay: selectedType ? '100ms' : '0ms' }}
							>
								{recommendedTier && (
									<div className="border-primary/30 bg-primary/5 mx-auto max-w-2xl rounded-xl border p-8">
										<div className="mb-4 flex items-center justify-center gap-2">
											<Sparkles className="text-primary size-5" />
											<span className="text-primary text-sm font-medium">Recommended for you</span>
										</div>

										<h3 className="heading-3 mb-2 text-center">{recommendedTier.name}</h3>

										<div className="mb-4 flex items-baseline justify-center gap-2">
											<span className="font-display text-4xl font-bold">{recommendedTier.price}</span>
											<span className="text-muted-foreground text-sm">starting</span>
										</div>

										<div className="text-muted-foreground mb-6 flex flex-wrap justify-center gap-4 text-sm">
											<span className="flex items-center gap-1">
												<Clock className="size-4" />
												{recommendedTier.timeline}
											</span>
											<span>{recommendedTier.scope}</span>
										</div>

										<p className="text-muted-foreground mb-6 text-center">Best for: {recommendedTier.bestFor}</p>

										<div className="flex flex-col justify-center gap-4 sm:flex-row">
											<Button href="/contact" size="cta" className="gap-2">
												<MessageSquare className="size-4" />
												Discuss Your Project
											</Button>
											<Button
												variant="outline"
												size="cta"
												onClick={() => {
													document.getElementById('all-tiers')?.scrollIntoView({ behavior: 'smooth' });
												}}
											>
												See All Tiers
											</Button>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</Section>

				{/* All Tiers Section */}
				<Section id="all-tiers" className="scroll-mt-24">
					<div className="pointer-events-none absolute inset-0 -z-10">
						<div className="bg-muted/10 absolute inset-0" />
						<div className="gradient-section-glow absolute inset-0" />
						<NoiseOverlay opacity={0.2} className="mix-blend-overlay" />
					</div>

					<SectionHeader
						eyebrow="Project Tiers"
						title="Full pricing breakdown."
						description="Every project is unique, but these tiers give you a clear starting point."
						align="center"
						className="mb-16"
					/>

					<div className="bg-border mx-auto grid max-w-5xl grid-cols-1 gap-px md:grid-cols-3">
						{pricingTiers.map((tier, index) => (
							<div
								key={tier.id}
								className={cn('bg-background relative flex flex-col p-8 opacity-0', mounted && 'animate-slide-up')}
								style={{ animationDelay: `${0.1 + index * 0.1}s` }}
							>
								{tier.popular && <div className="gradient-bar-accent absolute -top-px right-0 left-0 h-1" />}

								{tier.popular && (
									<div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-1 self-start px-3 py-1 text-xs font-medium">
										<Sparkles className="size-3" />
										Most Popular
									</div>
								)}

								<h3 className="font-display mb-1 text-lg font-semibold">{tier.name}</h3>
								<p className="text-muted-foreground mb-4 text-xs">{tier.bestFor}</p>

								<p className="mb-2">
									<span className="font-display text-4xl font-bold">{tier.price}</span>
								</p>
								<p className="text-muted-foreground mb-6 text-sm">{tier.timeline}</p>

								<div className="mb-6">
									<p className="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase">Scope</p>
									<p className="text-foreground text-sm">{tier.scope}</p>
								</div>

								<div className="border-border mb-8 flex-1 border-t pt-6">
									<p className="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase">Includes</p>
									<ul className="space-y-2">
										{tier.features.map((feature) => (
											<li key={feature} className="text-muted-foreground flex items-start gap-2 text-sm">
												<Check className="text-primary mt-0.5 size-4 shrink-0" />
												{feature}
											</li>
										))}
									</ul>
								</div>

								<Button
									href="/contact"
									variant={tier.popular ? 'default' : 'outline'}
									className={cn('mt-auto w-full', 'group')}
								>
									Get Started
									<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</Button>
							</div>
						))}
					</div>
				</Section>

				{/* What Affects Price Section */}
				<Section>
					<SectionHeader
						eyebrow="Pricing Factors"
						title="What affects your price."
						description="Every project is different. Here's what influences the final investment."
						className="mb-12"
					/>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{pricingFactors.map((factor, index) => {
							const Icon = factorIcons[index % factorIcons.length];
							return (
								<div
									key={factor}
									className={cn(
										'bg-background border-border hover:border-primary/50 flex items-center gap-4 rounded-xl border p-6 opacity-0 transition-colors',
										mounted && 'animate-slide-up'
									)}
									style={{ animationDelay: `${0.1 + index * 0.05}s` }}
								>
									<div className="text-primary">
										<Icon className="size-5" />
									</div>
									<span className="text-foreground font-medium">{factor}</span>
								</div>
							);
						})}
					</div>
				</Section>

				{/* FAQ Section */}
				<Section>
					<div className="pointer-events-none absolute inset-0 -z-10">
						<div className="bg-muted/10 absolute inset-0" />
						<div className="gradient-section-glow absolute inset-0" />
						<NoiseOverlay opacity={0.2} className="mix-blend-overlay" />
					</div>

					<SectionHeader
						eyebrow="FAQ"
						title="Common questions."
						description="Straight answers to the questions we hear most."
						align="center"
						className="mb-12"
					/>

					<div className="mx-auto max-w-3xl space-y-6">
						{pricingFaqs.map((faq, index) => (
							<div
								key={faq.question}
								className={cn(
									'bg-background/50 border-border rounded-xl border p-6 opacity-0 backdrop-blur-sm',
									mounted && 'animate-slide-up'
								)}
								style={{ animationDelay: `${0.1 + index * 0.1}s` }}
							>
								<h3 className="text-foreground mb-3 font-semibold">{faq.question}</h3>
								<p className="text-muted-foreground leading-relaxed">
									{faq.answer}
									{faq.question.includes('ongoing') && (
										<>
											{' '}
											<Link href="/contact" className="text-primary group inline-flex items-center gap-1 font-medium">
												<span className="link-underline">Learn more</span>
												<ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
											</Link>
										</>
									)}
								</p>
							</div>
						))}
					</div>
				</Section>

				{/* CTA Section */}
				<Section className="text-center">
					<div className="mx-auto max-w-3xl">
						<h2 className="heading-2 mb-6">
							Ready to scope <GradientText>your project?</GradientText>
						</h2>
						<p className="body-large text-muted-foreground mb-10">
							Tell us what you&apos;re building. We&apos;ll give you an honest assessment and a clear path forward.
						</p>

						<div className="flex flex-col items-center gap-6">
							<Button href="/contact" size="cta" className="gap-2">
								<MessageSquare className="size-4" />
								Start the Conversation
							</Button>
							<p className="text-muted-foreground text-sm">
								Or email us directly:{' '}
								<a href="mailto:hello@houseofgiants.com" className="text-primary hover:underline">
									hello@houseofgiants.com
								</a>
							</p>
						</div>
					</div>
				</Section>
			</main>
			<Footer />
		</>
	);
}
