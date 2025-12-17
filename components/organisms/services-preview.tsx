'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Code, Palette, Users, Compass } from 'lucide-react';
import { Section, SectionHeader } from '@/components/templates';
import { Eyebrow } from '@/components/atoms/eyebrow';
import { GradientText } from '@/components/atoms/gradient-text';
import { ServiceCard } from '@/components/molecules/service-card';
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
							Custom web development. <GradientText className="block">Not the templated kind.</GradientText>
						</>
					}
					description="We build web applications and websites that don't break when you scale. That's it. That's what we do."
				/>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					{/* Service List */}
					<div className="space-y-2">
						{services.map((service, index) => {
							const Icon = iconMap[service.icon as keyof typeof iconMap];
							return (
								<ServiceCard
									key={service.id}
									icon={Icon}
									title={service.title}
									description={service.shortDescription}
									isActive={activeService === index}
									onClick={() => setActiveService(index)}
								/>
							);
						})}
					</div>

					{/* Service Detail */}
					<div className="relative">
						<div className="sticky top-32">
							<div className="border-border bg-card border p-8 lg:p-12">
								{/* Active indicator */}
								<div className="mb-6 flex items-center gap-3">
									<Eyebrow className="text-primary">0{activeService + 1}</Eyebrow>
									<div className="from-primary/50 h-px flex-1 bg-linear-to-r to-transparent" />
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
