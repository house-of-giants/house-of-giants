'use client';

import * as React from 'react';
import { useActionState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Clock, ArrowRight, Mail, MapPin, CheckCircle, Plus, Minus, Calendar } from 'lucide-react';
import { Header, Footer } from '@/components/organisms';
import { Section } from '@/components/templates';
import { GradientText } from '@/components/atoms/gradient-text';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Field, FieldLabel, FieldDescription } from '@/components/ui/field';
import { clients } from '@/lib/data/clients';
import { submitContactForm } from '@/app/actions/contact';

const projectTypes = [
	{ value: 'website', label: 'Website / Marketing Site' },
	{ value: 'webapp', label: 'Web Application / SaaS' },
	{ value: 'ecommerce', label: 'E-commerce Platform' },
	{ value: 'redesign', label: 'Existing Site Redesign' },
	{ value: 'agency-partnership', label: 'Agency Partnership / Dev Pod' },
	{ value: 'other', label: 'Something Else' },
];

const budgetRanges = [
	{ value: 'under-15k', label: 'Under $15k' },
	{ value: '15k-25k', label: '$15k - $25k' },
	{ value: '25k-50k', label: '$25k - $50k' },
	{ value: '50k-100k', label: '$50k - $100k' },
	{ value: '100k-plus', label: '$100k+' },
	{ value: 'not-sure', label: 'Not sure yet' },
];

const timelines = [
	{ value: 'asap', label: 'ASAP (within 1 month)' },
	{ value: '1-3-months', label: '1-3 months' },
	{ value: '3-6-months', label: '3-6 months' },
	{ value: 'flexible', label: 'Flexible / Just exploring' },
];

const featuredClients = clients.slice(0, 6);

const sourceDefaults: Record<string, { projectType: string; headline: string; subhead: string }> = {
	agencies: {
		projectType: 'agency-partnership',
		headline: 'Start a partnership.',
		subhead: "Tell us about your agency and dev capacity needs. We'll get back to you within 24 hours.",
	},
	startups: {
		projectType: 'webapp',
		headline: 'Build something investors notice.',
		subhead: "Tell us about your startup and what you're building. We'll get back to you within 24 hours.",
	},
};

const defaultContent = {
	headline: 'Let\u2019s build something worth talking about.',
	subhead: "Tell us about your project. We'll get back to you within 24 hours with ideas and next steps.",
};

export default function ContactContent() {
	const searchParams = useSearchParams();
	const source = searchParams.get('source');
	const sourceConfig = source && sourceDefaults[source] ? sourceDefaults[source] : null;

	const [state, formAction, isPending] = useActionState(submitContactForm, { success: false, error: null });

	const [mounted, setMounted] = React.useState(false);
	const [showOptionalFields, setShowOptionalFields] = React.useState(false);
	const [projectType, setProjectType] = React.useState<string | null>(sourceConfig?.projectType ?? null);
	const [budget, setBudget] = React.useState<string | null>(null);
	const [timeline, setTimeline] = React.useState<string | null>(null);
	const [formKey, setFormKey] = React.useState(0);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const getProjectTypeLabel = () => {
		const found = projectTypes.find((t) => t.value === projectType);
		return found?.label ?? 'Select project type';
	};

	const getBudgetLabel = () => {
		const found = budgetRanges.find((b) => b.value === budget);
		return found?.label ?? 'Select a range';
	};

	const getTimelineLabel = () => {
		const found = timelines.find((t) => t.value === timeline);
		return found?.label ?? 'When do you need this?';
	};

	return (
		<>
			<Header />
			<main>
				<Section
					padding="none"
					container="none"
					className="relative flex min-h-[40vh] items-center justify-center overflow-hidden pt-32 pb-16"
				>
					<div className="bg-background absolute inset-0 overflow-visible">
						<GradientOrbs />
						<NoiseOverlay />
					</div>

					<div className="container-wide relative z-10 text-center">
						<h1
							className={cn('heading-display mb-6 opacity-0', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.1s' }}
						>
							{sourceConfig ? (
								<GradientText>{sourceConfig.headline}</GradientText>
							) : (
								<>
									Let&apos;s build something <br className="hidden sm:block" />
									<GradientText>worth talking about.</GradientText>
								</>
							)}
						</h1>

						<p
							className={cn(
								'body-large text-muted-foreground mx-auto max-w-2xl opacity-0',
								mounted && 'animate-slide-up'
							)}
							style={{ animationDelay: '0.2s' }}
						>
							{sourceConfig?.subhead ?? defaultContent.subhead}
						</p>
					</div>
				</Section>

				<Section>
					<div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
						<div className={cn('opacity-0', mounted && 'animate-slide-up')} style={{ animationDelay: '0.3s' }}>
							{state.success ? (
								<div className="bg-background/50 border-border flex flex-col items-center justify-center rounded-xl border p-12 text-center backdrop-blur-sm">
									<CheckCircle className="text-primary mb-4 size-12" />
									<h2 className="heading-3 mb-2">Message sent!</h2>
									<p className="text-muted-foreground mb-6">We&apos;ll be in touch within 24 hours.</p>
									<Button
										variant="outline"
										onClick={() => {
											setProjectType(null);
											setBudget(null);
											setTimeline(null);
											setShowOptionalFields(false);
											setFormKey((k) => k + 1);
										}}
									>
										Send another message
									</Button>
								</div>
							) : (
								<form key={formKey} action={formAction} aria-label="Contact form" className="space-y-6">
									<input type="hidden" name="projectType" value={projectType ?? ''} />
									<input type="hidden" name="budget" value={budget ?? ''} />
									<input type="hidden" name="timeline" value={timeline ?? ''} />

									<Field>
										<FieldLabel htmlFor="name">Your name</FieldLabel>
										<Input
											id="name"
											name="name"
											required
											aria-required="true"
											autoComplete="name"
											placeholder="Jane Smith"
											className="text-base"
										/>
									</Field>

									<Field>
										<FieldLabel htmlFor="email">Work email</FieldLabel>
										<Input
											id="email"
											name="email"
											type="email"
											required
											aria-required="true"
											autoComplete="email"
											placeholder="jane@company.com"
											className="text-base"
										/>
									</Field>

									<Field>
										<FieldLabel>What are you building?</FieldLabel>
										<Select value={projectType} onValueChange={(val) => setProjectType(val)}>
											<SelectTrigger className="w-full text-base">
												<SelectValue>
													<span className={projectType ? '' : 'text-muted-foreground'}>{getProjectTypeLabel()}</span>
												</SelectValue>
											</SelectTrigger>
											<SelectContent>
												{projectTypes.map((type) => (
													<SelectItem key={type.value} value={type.value}>
														{type.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</Field>

									<Field>
										<FieldLabel htmlFor="message">Tell us about your project</FieldLabel>
										<Textarea
											id="message"
											name="message"
											rows={5}
											required
											aria-required="true"
											placeholder="What are you building? What's the timeline? Any specific challenges?"
											className="text-base"
										/>
									</Field>

									<button
										type="button"
										onClick={() => setShowOptionalFields(!showOptionalFields)}
										className="text-primary hover:text-primary/80 flex items-center gap-2 text-sm font-medium transition-colors"
									>
										{showOptionalFields ? <Minus className="size-4" /> : <Plus className="size-4" />}
										{showOptionalFields ? 'Hide project details' : 'Add project details'}
									</button>

									{showOptionalFields && (
										<div className="border-border space-y-6 border-l-2 pl-6">
											<Field>
												<FieldLabel htmlFor="company">
													Company name <span className="text-muted-foreground font-normal">(optional)</span>
												</FieldLabel>
												<Input
													id="company"
													name="company"
													autoComplete="organization"
													placeholder="Acme Inc."
													className="text-base"
												/>
											</Field>

											<Field>
												<FieldLabel>
													Budget range <span className="text-muted-foreground font-normal">(optional)</span>
												</FieldLabel>
												<Select value={budget} onValueChange={(val) => setBudget(val)}>
													<SelectTrigger className="w-full text-base">
														<SelectValue>
															<span className={budget ? '' : 'text-muted-foreground'}>{getBudgetLabel()}</span>
														</SelectValue>
													</SelectTrigger>
													<SelectContent>
														{budgetRanges.map((range) => (
															<SelectItem key={range.value} value={range.value}>
																{range.label}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</Field>

											<Field>
												<FieldLabel>
													Timeline <span className="text-muted-foreground font-normal">(optional)</span>
												</FieldLabel>
												<Select value={timeline} onValueChange={(val) => setTimeline(val)}>
													<SelectTrigger className="w-full text-base">
														<SelectValue>
															<span className={timeline ? '' : 'text-muted-foreground'}>{getTimelineLabel()}</span>
														</SelectValue>
													</SelectTrigger>
													<SelectContent>
														{timelines.map((t) => (
															<SelectItem key={t.value} value={t.value}>
																{t.label}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</Field>

											<Field>
												<FieldLabel htmlFor="phone">
													Phone <span className="text-muted-foreground font-normal">(optional)</span>
												</FieldLabel>
												<Input
													id="phone"
													name="phone"
													type="tel"
													autoComplete="tel"
													placeholder="+1 (555) 000-0000"
													className="text-base"
												/>
												<FieldDescription>We&apos;ll call to discuss your project if provided</FieldDescription>
											</Field>
										</div>
									)}

									<div className="pt-4">
										{state.error && (
											<div role="alert" className="bg-destructive/10 text-destructive mb-4 rounded-lg p-4 text-sm">
												{state.error}
											</div>
										)}
										<Button type="submit" size="cta" className="w-full cursor-pointer gap-2" disabled={isPending}>
											{isPending ? 'Sending...' : 'Send Message'}
											{!isPending && <ArrowRight className="size-4" />}
										</Button>
										<p className="text-muted-foreground mt-4 text-center text-xs">
											We never share your information. Read our{' '}
											<Link href="/privacy" className="underline hover:no-underline">
												privacy policy
											</Link>
											.
										</p>
									</div>
								</form>
							)}
						</div>

						<div
							className={cn('order-first space-y-8 opacity-0 lg:order-last', mounted && 'animate-slide-up')}
							style={{ animationDelay: '0.4s' }}
						>
							<div className="bg-primary/10 border-primary/20 rounded-lg border p-6 text-center">
								<Clock className="text-primary mx-auto mb-3 size-8" />
								<p className="text-foreground text-lg font-medium">We respond within 24 hours</p>
								<p className="text-muted-foreground text-sm">Usually much faster</p>
							</div>

							<div className="bg-background/50 border-border rounded-lg border p-6">
								<div className="flex items-center gap-3">
									<Calendar className="text-primary size-5" />
									<span className="text-sm">
										<span className="text-foreground font-medium">2 slots available</span>
										<span className="text-muted-foreground"> for Q1 2026</span>
									</span>
								</div>
								<p className="text-muted-foreground mt-2 text-xs">We take on limited projects to ensure quality.</p>
							</div>

							<div>
								<p className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">Trusted by</p>
								<div className="grid grid-cols-3 gap-4">
									{featuredClients.map((client) => (
										<div
											key={client.name}
											className="bg-background/50 border-border hover:border-primary/30 flex aspect-[3/2] items-center justify-center rounded-lg border p-3 transition-colors"
										>
											<Image
												src={client.logo}
												alt={client.name}
												width={80}
												height={40}
												className="max-h-8 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
											/>
										</div>
									))}
								</div>
							</div>

							<blockquote className="border-primary border-l-2 pl-4">
								<p className="text-foreground italic">
									&ldquo;They are the best team I&apos;ve ever worked with regarding application development.&rdquo;
								</p>
								<footer className="text-muted-foreground mt-2 text-sm">— Ben Siegel, CEO, The CyberNest</footer>
							</blockquote>

							<div className="border-border space-y-4 border-t pt-6">
								<p className="text-muted-foreground text-sm">Prefer email?</p>
								<a
									href="mailto:hello@houseofgiants.com"
									className="text-primary hover:text-primary/80 flex items-center gap-2 font-medium transition-colors"
								>
									<Mail className="size-4" />
									hello@houseofgiants.com
								</a>
								<div className="text-muted-foreground flex items-center gap-2 text-sm">
									<MapPin className="size-4" />
									<span>Denver, CO · Working with teams worldwide</span>
								</div>
							</div>
						</div>
					</div>
				</Section>
			</main>
			<Footer hideCTA />
		</>
	);
}
