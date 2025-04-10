'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section/Section';
import { Container } from '@/components/Container/Container';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { Button } from '@/components/Button/Button';
import { ServiceCard } from '@/components/Services/ServiceCard';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import { SectionSeparator } from '@/components/SectionSeparator/SectionSeparator';
import ContactForm from '@/components/Contact/ContactForm';
import CanonicalLink from '@/components/SEO/CanonicalLink';
import Image from 'next/image';
import BlurGifImage from '@/components/Image/BlurGifImage';

// Hero section template
export const IndustryHero = ({ industry, headline, subheadline, description, heroImage, blurDataUrl }) => {
	const isGif = heroImage?.toLowerCase().endsWith('.gif');

	return (
		<Section count="1.0" title={`${industry} Web Solutions`}>
			<Container
				className="-has-background relative overflow-hidden min-h-[calc(60vh+var(--header-height))] flex flex-col justify-center px-4 md:px-8"
				background="var(--c-primary-dark)"
				pt="clamp(var(--sp-xl), 15vh, 9rem)"
				pb="clamp(var(--sp-xl), 15vh, 9rem)"
			>
				<div className="relative z-10">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
						<motion.div
							className="md:col-span-2"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<h1 className="mb-8">
								<span
									className={`block text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-4 -grad-header`}
								>
									{headline}
								</span>
								<span className={`block normal-case text-2xl md:text-3xl font-bold text-white  mt-4 tracking-tight`}>
									{subheadline}
								</span>
							</h1>
							<p className="text-lg md:text-xl text-moon-rock leading-relaxed mb-8 max-w-xl">{description}</p>
							<div className="flex flex-wrap gap-4">
								<Button
									href="/contact"
									className="grad-border bg-[var(--c-primary-dark)] text-white font-mono hover:scale-105 transition-transform duration-300 text-base md:text-lg px-6 py-3 rounded-lg"
								>
									Start Your Project
									<span className={`ml-2`}>→</span>
								</Button>
								<Button
									href="#services"
									className="bg-black bg-opacity-30 text-white hover:bg-opacity-50 font-mono transition-all duration-300 text-base md:text-lg px-6 py-3 rounded-lg"
								>
									Explore Services
								</Button>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7, delay: 0.2 }}
							className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
						>
							{isGif ? (
								<BlurGifImage
									src={heroImage || '/images/default-hero.jpg'}
									alt={`${industry} website showcase`}
									className="h-full w-full"
									priority
									blurDataURL={blurDataUrl}
								/>
							) : (
								<Image
									src={heroImage || '/images/default-hero.jpg'}
									alt={`${industry} website showcase`}
									fill
									className="object-contain"
									priority
								/>
							)}
						</motion.div>
					</div>
				</div>
			</Container>
		</Section>
	);
};

// Services section template
export const IndustryServices = ({ industry, title, subtitle, description, services }) => {
	return (
		<Section count="2.0" title={`${industry} Services`} id="services">
			<Container
				className="-has-background"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
			>
				<SectionHeader
					title={title || 'Digital Services'}
					subtitle={subtitle || `for modern ${industry.toLowerCase()}.`}
					description={
						description ||
						`We create digital solutions tailored specifically for the ${industry.toLowerCase()} industry.`
					}
				/>

				<div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[var(--content-spacing)]">
					{services.map((service) => (
						<ServiceCard key={service.id} {...service} />
					))}
				</div>
			</Container>
		</Section>
	);
};

// Case studies section template
export const IndustryCaseStudies = ({ industry, title, subtitle, accent, caseStudies, variant = 'green' }) => {
	// Determine accent color based on variant
	const accentColorClass = variant === 'purple' ? 'text-cyber-purple' : 'text-cyber-green';

	return (
		<Section count="3.0" title={`${industry} Case Studies`}>
			<Container
				className="-has-background relative z-10"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
			>
				<SectionHeader
					title={title || `${industry} Success`}
					subtitle={subtitle || 'stories that inspire.'}
					accent={accent || `Digital Solutions That Drive Results`}
				/>

				{/* Featured Case Study */}
				{caseStudies && caseStudies.length > 0 && (
					<>
						<div className="mb-[var(--content-spacing)]">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="relative rounded-lg overflow-hidden group"
							>
								<div className="relative aspect-video">
									<Image
										src={caseStudies[0].imageUrl}
										alt={caseStudies[0].title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
								</div>
								<div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
									<span className={`text-sm uppercase tracking-wider ${accentColorClass}`}>
										{caseStudies[0].categories.join(' • ')}
									</span>
									<h3 className="text-2xl md:text-4xl font-bold mt-2 mb-3">{caseStudies[0].title}</h3>
									<p className="text-moon-rock/90 text-base md:text-lg max-w-2xl mb-4">{caseStudies[0].description}</p>
									<Button
										href={caseStudies[0].slug}
										className="grad-border bg-[var(--c-primary-dark)] text-white font-mono hover:scale-105 transition-transform duration-300 text-base px-6 py-3 rounded-lg mt-4"
									>
										View Case Study
									</Button>
								</div>
							</motion.div>
						</div>

						{/* Additional Case Studies */}
						{caseStudies.length > 1 && (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--content-spacing)]">
								{caseStudies.slice(1).map((item) => (
									<motion.div
										key={item.id}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5 }}
										className="relative rounded-lg overflow-hidden group"
									>
										<div className="relative aspect-video">
											<Image
												src={item.imageUrl}
												alt={item.title}
												fill
												className="object-cover transition-transform duration-700 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
										</div>
										<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
											<span className={`text-sm uppercase tracking-wider ${accentColorClass}`}>
												{item.categories.join(' • ')}
											</span>
											<h3 className="text-xl md:text-2xl font-bold mt-2 mb-2">{item.title}</h3>
											<p className="text-moon-rock/90 text-base max-w-md mb-3">{item.description}</p>
											<Button href={item.slug} className={`${accentColorClass} hover:underline text-sm font-mono`}>
												View Details →
											</Button>
										</div>
									</motion.div>
								))}
							</div>
						)}
					</>
				)}
			</Container>
		</Section>
	);
};

// Process methodology section template
export const IndustryProcess = ({
	industry,
	title,
	subtitle,
	accent,
	description,
	processSteps,
	variant = 'green',
}) => {
	// Determine accent color based on variant
	const accentColorClass = variant === 'purple' ? 'text-cyber-purple' : 'text-cyber-green';

	return (
		<Section count="3.0" title={`${industry} Process`}>
			<Container
				className="-has-background"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
			>
				<SectionHeader
					title={title || `Our ${industry} Approach`}
					subtitle={subtitle || 'A proven methodology.'}
					accent={accent || `How we design for ${industry.toLowerCase()}`}
					description={description}
				/>

				<div className="mt-[var(--header-spacing)] space-y-16">
					{processSteps.map((step, index) => {
						const isGif = step.imageUrl?.toLowerCase().endsWith('.gif');

						return (
							<motion.div
								key={step.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
							>
								<div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
									<div className="relative aspect-video rounded-lg overflow-hidden">
										{isGif ? (
											<BlurGifImage
												src={step.imageUrl}
												alt={step.title}
												className="h-full w-full"
												blurDataURL={step.blurDataUrl}
											/>
										) : (
											<Image src={step.imageUrl} alt={step.title} fill className="object-contain" />
										)}
									</div>
								</div>

								<div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
									<div className="mb-2">
										<span className={`text-sm uppercase font-mono ${accentColorClass}`}>{`Step ${step.id}`}</span>
									</div>
									<h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
									<p className="text-moon-rock/90 text-base md:text-lg mb-6">{step.description}</p>

									{step.features && (
										<ul className="space-y-3">
											{step.features.map((feature, idx) => (
												<li key={idx} className="flex items-start">
													<span className={`${accentColorClass} mr-2`}>✓</span>
													<span className="text-moon-rock/80">{feature}</span>
												</li>
											))}
										</ul>
									)}
								</div>
							</motion.div>
						);
					})}
				</div>
			</Container>
		</Section>
	);
};

// Impact metrics section template
export const IndustryImpact = ({ industry, title, subtitle, accent, description, metrics, variant = 'green' }) => {
	// Determine accent color based on variant
	const accentColorClass = variant === 'purple' ? 'text-cyber-purple' : 'text-cyber-green';

	return (
		<Section count="4.0" title={`${industry} Impact`}>
			<Container
				className="-has-background"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
			>
				<SectionHeader
					title={title || 'Real Results'}
					subtitle={subtitle || `for ${industry.toLowerCase()} clients.`}
					accent={accent || 'Impact that matters to your bottom line'}
					description={
						description ||
						`Our ${industry.toLowerCase()} clients see measurable improvements in their digital presence and business outcomes.`
					}
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--content-spacing)] mt-[var(--header-spacing)]">
					{metrics.map((metric, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-black/20 p-8 rounded-lg border border-moon-rock/10 hover:border-cyber-green/30 transition-all duration-300"
						>
							<div className={`text-5xl md:text-6xl font-black mb-4 ${accentColorClass}`}>{metric.value}</div>
							<h3 className="text-xl font-bold mb-3">{metric.title}</h3>
							<p className="text-moon-rock/80">{metric.description}</p>
						</motion.div>
					))}
				</div>
			</Container>
		</Section>
	);
};

// Complete industry page template
export const IndustryPage = ({
	industry,
	heroProps,
	servicesProps,
	caseStudiesProps,
	processProps,
	impactProps,
	contactProps,
	gradientVariant = 'green',
	intensityLevel = 'medium',
}) => {
	return (
		<main className="relative">
			<FloatingGradients variant={gradientVariant} intensity={intensityLevel} />
			<div className="-mt-18 lg:-mt-24 2xl:-mt-36">
				<IndustryHero {...heroProps} industry={industry} variant={gradientVariant} />
			</div>
			<SectionSeparator />
			<IndustryServices {...servicesProps} industry={industry} />
			<SectionSeparator />
			{processProps ? (
				<>
					<IndustryProcess {...processProps} industry={industry} variant={gradientVariant} />
					<SectionSeparator />
				</>
			) : caseStudiesProps ? (
				<>
					<IndustryCaseStudies {...caseStudiesProps} industry={industry} variant={gradientVariant} />
					<SectionSeparator />
				</>
			) : null}
			<IndustryImpact {...impactProps} industry={industry} variant={gradientVariant} />
			<SectionSeparator />
			<ContactForm {...contactProps} />
		</main>
	);
};
