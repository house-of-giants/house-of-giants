'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Code, Palette, Users, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section, SectionHeader } from '@/components/layout/section';
import { services } from '@/lib/data/services';

const iconMap = {
	code: Code,
	palette: Palette,
	users: Users,
	compass: Compass,
};

export function ServicesPreview() {
	const [activeService, setActiveService] = React.useState(0);

	return (
		<Section className="relative">
			<div className="relative">
				<SectionHeader
					eyebrow="What We Do"
					title={
						<>
							Full-stack capabilities. <span className="text-muted-foreground">Singular focus.</span>
						</>
					}
					description="We don't do everything. We do web—and we do it exceptionally well."
				/>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					{/* Service List */}
					<div className="space-y-2">
						{services.map((service, index) => {
							const Icon = iconMap[service.icon as keyof typeof iconMap];
							const isActive = activeService === index;

							return (
								<button
									key={service.id}
									onClick={() => setActiveService(index)}
									className={cn(
										'group w-full border p-6 text-left transition-all duration-300',
										isActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 bg-background'
									)}
								>
									<div className="flex items-start gap-4">
										<div
											className={cn(
												'flex size-10 items-center justify-center border transition-all duration-300',
												isActive
													? 'border-primary bg-primary text-primary-foreground'
													: 'border-border text-muted-foreground group-hover:border-primary/50'
											)}
										>
											<Icon className="size-5" />
										</div>
										<div className="min-w-0 flex-1">
											<div className="flex items-center justify-between gap-4">
												<h3
													className={cn(
														'font-display text-lg font-semibold transition-colors',
														isActive ? 'text-primary' : 'text-foreground'
													)}
												>
													{service.title}
												</h3>
												<ArrowUpRight
													className={cn(
														'size-5 flex-shrink-0 transition-all duration-300',
														isActive
															? 'text-primary translate-x-0 opacity-100'
															: 'text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
													)}
												/>
											</div>
											<p className="text-muted-foreground mt-1 text-sm">{service.shortDescription}</p>
										</div>
									</div>
								</button>
							);
						})}
					</div>

					{/* Service Detail */}
					<div className="relative">
						<div className="sticky top-32">
							<div className="border-border bg-card border p-8 lg:p-12">
								{/* Active indicator */}
								<div className="mb-6 flex items-center gap-3">
									<span className="eyebrow text-primary">0{activeService + 1}</span>
									<div className="from-primary/50 h-px flex-1 bg-gradient-to-r to-transparent" />
								</div>

								<h3 className="heading-3 mb-4">{services[activeService].title}</h3>

								<p className="text-muted-foreground mb-8 leading-relaxed">{services[activeService].description}</p>

								{/* Deliverables */}
								<div className="mb-8">
									<h4 className="mb-4 text-sm font-medium">Key Deliverables</h4>
									<ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
										{services[activeService].deliverables.map((item) => (
											<li key={item} className="text-muted-foreground flex items-center gap-2 text-sm">
												<span className="bg-primary size-1 rounded-full" />
												{item}
											</li>
										))}
									</ul>
								</div>

								{/* Good For */}
								<div className="border-border border-t pt-6">
									<h4 className="mb-4 text-sm font-medium">Best For</h4>
									<div className="flex flex-wrap gap-2">
										{services[activeService].goodFor.map((item) => (
											<span key={item} className="border-primary/30 text-primary border px-3 py-1 text-xs">
												{item}
											</span>
										))}
									</div>
								</div>

								{/* CTA */}
								<Link href="/services" className="text-primary group mt-8 inline-flex items-center gap-2 font-medium">
									<span className="link-underline">Learn more about our services</span>
									<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
