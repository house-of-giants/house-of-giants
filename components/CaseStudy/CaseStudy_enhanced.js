'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LazyImage from '@/components/Image/LazyImage';
import { Button } from '@/components/Button/Button';
import ContactForm from '@/components/Contact/ContactForm';
import { CircleGrad } from '@/components/Cursor/Cursor';
import Mark from '@/components/SVG/Mark';
import Love from '@/components/SVG/Love';
import { ScrollProgress } from '@/components/ScrollProgress/ScrollProgress';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import { SectionSeparator } from '../SectionSeparator/SectionSeparator';
import { Section } from '../Section/Section';
import { NextCaseStudies } from './NextCaseStudies';

export const CaseStudy = ({
	title,
	subtitle,
	liveUrl,
	heroImage,
	heroVideo,
	intro,
	challenge,
	solution,
	process,
	additionalSections,
	impact,
	testimonial,
	images,
	variant = 'default',
}) => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	const headerY = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
	const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

	return (
		<div ref={containerRef} className="min-h-screen">
			<ScrollProgress progress={scrollYProgress} />
			<FloatingGradients variant={variant} intensity="low" />

			{/* Hero Section */}
			<Section count="1.0" title="Project Overview">
				<motion.div
					className="fixed aspect-video inset-0 w-full h-full z-1 pointer-events-none"
					style={{
						opacity: headerOpacity,
						scale: headerScale,
						filter: `blur(3px)`,
					}}
				>
					{heroVideo ? (
						<video src={heroVideo} poster={heroImage} autoPlay muted loop className="w-full h-full object-cover" />
					) : (
						<LazyImage
							src={heroImage}
							fill
							priority
							className="object-cover brightness-50"
							alt={`${title} background`}
						/>
					)}
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
				</motion.div>

				{/* Hero Header */}
				<motion.header
					className="h-screen flex flex-col max-w-[var(--container-width)] mx-auto px-4 md:px-8 items-center justify-center relative"
					style={{ y: headerY }}
				>
					<motion.div
						className="px-4 py-2 border border-cyber-green/20 rounded-lg cursor-default"
						whileHover={{
							scale: 1.05,
							boxShadow: '0 0 20px rgba(0, 255, 224, 0.3)',
							borderColor: 'rgba(0, 255, 224, 0.6)',
						}}
						transition={{ duration: 0.3, ease: 'easeOut' }}
					>
						<span className="text-cyber-green">01</span>
						<span className="text-white ml-2">Case Study</span>
					</motion.div>
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-[clamp(3rem,8vw,8rem)] font-display font-black grad-header text-center leading-[0.8] tracking-[-0.02em] mb-0"
					>
						{title}
					</motion.h1>
					<motion.div
						className="relative z-10 flex flex-col items-center gap-8"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-[clamp(1.5rem,4vw,3rem)] text-white text-center font-serif font-light leading-[1.1] tracking-[-0.01em]">
							{subtitle}
						</h2>
						{liveUrl && (
							<div className="flex gap-4">
								<Button href={liveUrl} target="_blank" size="xl" variant="primary">
									Visit live site
									<span className="text-cyber-green ml-2">→</span>
								</Button>
							</div>
						)}
					</motion.div>
				</motion.header>
			</Section>

			{/* Content */}
			<div className="relative">
				{intro && (
					<Section count="2.0" title="Introduction">
						<div className="relative z-10 max-w-[var(--container-width)] mx-auto px-4 md:px-8 py-20">
							<motion.div
								className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
							>
								<div className="relative">
									<motion.div
										className="absolute -left-4 top-0 w-[2px] h-full bg-gradient-to-b from-[#00ffe0] to-[#c1ff1d]"
										initial={{ height: 0 }}
										whileInView={{ height: '100%' }}
										viewport={{ once: true }}
										transition={{ duration: 0.8 }}
									/>
									<p className="text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.6] text-moon-rock pl-8 font-normal tracking-[-0.005em]">
										{intro}
									</p>
								</div>
								{images?.intro && (
									<motion.figure
										className="relative aspect-[4/3]"
										initial={{ clipPath: 'inset(100% 0 0 0)' }}
										whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
										viewport={{ once: true }}
										transition={{ duration: 0.8 }}
									>
										<LazyImage src={images.intro} alt={`${title} intro`} fill className="w-full h-full object-cover" />
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
									</motion.figure>
								)}
							</motion.div>
						</div>
					</Section>
				)}

				{/* Challenge & Solution */}
				{(challenge || solution) && (
					<Section count="3.0" title="Challenge & Solution">
						<div className="relative z-10 max-w-[var(--container-width)] mx-auto px-4 md:px-8 py-20">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
								{challenge && (
									<motion.div
										className="space-y-8"
										initial={{ opacity: 0, x: -50 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true, margin: '-20%' }}
										transition={{ duration: 0.6 }}
									>
										<motion.h3
											className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-cyber-green leading-[1.2] tracking-[-0.01em] cursor-default"
											whileHover={{
												scale: 1.02,
												textShadow: '0 0 8px rgba(0, 255, 224, 0.6)',
												letterSpacing: '-0.02em',
											}}
											transition={{ duration: 0.3, ease: 'easeOut' }}
										>
											The Challenge
										</motion.h3>
										<p className="text-[clamp(1.125rem,2vw,1.5rem)] text-moon-rock leading-[1.6] font-light tracking-[-0.005em]">
											{challenge}
										</p>
									</motion.div>
								)}
								{solution && (
									<motion.div
										className="space-y-8"
										initial={{ opacity: 0, x: 50 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true, margin: '-20%' }}
										transition={{ duration: 0.6, delay: 0.2 }}
									>
										<motion.h3
											className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-cyber-green leading-[1.2] tracking-[-0.01em] cursor-default"
											whileHover={{
												scale: 1.02,
												textShadow: '0 0 8px rgba(0, 255, 224, 0.6)',
												letterSpacing: '-0.02em',
											}}
											transition={{ duration: 0.3, ease: 'easeOut' }}
										>
											The Solution
										</motion.h3>
										<p className="text-[clamp(1.125rem,2vw,1.5rem)] text-moon-rock leading-[1.6] font-light tracking-[-0.005em]">
											{solution}
										</p>
									</motion.div>
								)}
							</div>
						</div>
					</Section>
				)}

				<SectionSeparator />

				{/* Process Section */}
				{process?.steps && (
					<Section count="4.0" title="The Process">
						<div className="relative py-28 max-w-[var(--container-width)] mx-auto px-4 md:px-8">
							<div className=" flex items-center overflow-hidden">
								<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-start">
									{/* Left Timeline */}
									<motion.div
										className="col-span-1  h-full w-0.5 bg-gradient-to-b from-[#00ffe0] to-[#c1ff1d]"
										initial={{ height: 0 }}
										whileInView={{ height: '100%' }}
										viewport={{ once: true }}
										transition={{ duration: 1.2 }}
									/>

									{/* Main Content Area */}
									<div className="col-span-10">
										<motion.span
											className="text-cyber-green text-lg tracking-wider uppercase block mb-4"
											initial={{ opacity: 0 }}
											whileInView={{ opacity: 1 }}
											viewport={{ once: true }}
										>
											{process.title || '04 - The Process'}
										</motion.span>

										<motion.h2
											className="text-[clamp(2rem,4vw,3rem)] font-light text-moon-rock leading-[1.1] tracking-[-0.01em] mb-16"
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: 0.2 }}
										>
											{process.subtitle}
										</motion.h2>

										<div className="space-y-24">
											{process.steps.map((step, index) => (
												<motion.div
													key={index}
													className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
													initial={{ opacity: 0, y: 50 }}
													whileInView={{ opacity: 1, y: 0 }}
													viewport={{ once: true, margin: '-10%' }}
													transition={{ duration: 0.8, delay: index * 0.2 }}
												>
													{/* Phase Info */}
													<div className="col-span-5 space-y-8">
														<motion.div
															initial={{ opacity: 0, x: -20 }}
															whileInView={{ opacity: 1, x: 0 }}
															viewport={{ once: true }}
															transition={{ delay: 0.3 }}
														>
															<motion.span
																className="text-lg tracking-wider uppercase cursor-default inline-block"
																style={{ color: step.color }}
																whileHover={{
																	scale: 1.05,
																	textShadow: `0 0 12px ${step.color}80`,
																	letterSpacing: '0.15em',
																}}
																transition={{ duration: 0.3, ease: 'easeOut' }}
															>
																{step.phase}
															</motion.span>

															<motion.h3
																className="text-[clamp(1.5rem,2.5vw,2rem)] font-medium text-moon-rock mt-2 leading-[1.2] tracking-[-0.01em] cursor-default"
																whileHover={{
																	scale: 1.02,
																	opacity: 0.9,
																	letterSpacing: '-0.02em',
																}}
																transition={{ duration: 0.3, ease: 'easeOut' }}
															>
																{step.title}
															</motion.h3>
														</motion.div>

														<p
															className="text-[clamp(1rem,1.75vw,1.25rem)] text-moon-rock/70 leading-[1.6] font-light tracking-[-0.005em]"
															dangerouslySetInnerHTML={{ __html: step.description }}
														/>

														<ul className="space-y-4">
															{step.details.map((detail, i) => (
																<motion.li
																	key={i}
																	className="flex items-center space-x-4 text-moon-rock/50 text-[clamp(0.875rem,1.5vw,1rem)] font-light cursor-default group"
																	initial={{ opacity: 0, x: -20 }}
																	whileInView={{ opacity: 1, x: 0 }}
																	whileHover={{
																		x: 8,
																		color: 'rgba(255, 255, 255, 0.8)',
																	}}
																	viewport={{ once: true }}
																	transition={{ delay: 0.4 + i * 0.1, duration: 0.3, ease: 'easeOut' }}
																>
																	<motion.span
																		className="h-px w-8"
																		style={{ backgroundColor: step.color }}
																		whileHover={{
																			width: '3rem',
																			boxShadow: `0 0 8px ${step.color}80`,
																		}}
																		transition={{ duration: 0.3, ease: 'easeOut' }}
																	/>
																	<span>{detail}</span>
																</motion.li>
															))}
														</ul>
													</div>

													{/* Phase Visual */}
													<div className="col-span-7">
														<motion.div
															className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
															initial={{ clipPath: 'inset(0 100% 0 0)' }}
															whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
															whileHover={{
																scale: 1.02,
																boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
															}}
															viewport={{ once: true }}
															transition={{ duration: 1.2, delay: 0.4 }}
														>
															<LazyImage
																src={step.image}
																alt={`${step.phase} phase visualization`}
																fill
																className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
															/>
															<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
														</motion.div>
													</div>
												</motion.div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</Section>
				)}

				<SectionSeparator />

				{/* Additional Dynamic Sections */}
				{additionalSections?.map((section, index) => (
					<div
						key={index}
						className={`relative z-10 max-w-[var(--container-width)] mx-auto px-4 md:px-8 ${
							section.type === 'full-width-image' ? 'pb-0' : 'py-20'
						}`}
					>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-20%' }}
							transition={{ duration: 0.8 }}
						>
							{section.title && (
								<motion.h3
									className="text-3xl font-bold text-cyber-green mb-8 cursor-default"
									whileHover={{
										scale: 1.02,
										textShadow: '0 0 8px rgba(0, 255, 224, 0.6)',
									}}
									transition={{ duration: 0.3, ease: 'easeOut' }}
								>
									{section.title}
								</motion.h3>
							)}
							<div className={section.className}>{section.content}</div>
						</motion.div>
					</div>
				))}

				{/* Impact */}
				{impact && (
					<Section count="5.0" title="The Impact">
						<div className="relative z-10 max-w-[var(--container-width)] mx-auto px-4 md:px-8 py-20">
							{impact?.blurb && (
								<motion.p
									className={`max-w-4xl mx-auto text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.4] text-center text-moon-rock font-light tracking-[-0.01em] ${
										impact.stats?.length > 0 ? 'mb-32' : 'mb-0'
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: '-20%' }}
									transition={{ duration: 0.8 }}
								>
									{impact.blurb}
								</motion.p>
							)}
							{impact?.stats?.length > 0 && (
								<motion.div
									className="p-16 border border-cyber-green/20 rounded-lg bg-black/20 backdrop-blur-sm"
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									whileHover={{
										borderColor: 'rgba(0, 255, 224, 0.4)',
										boxShadow: '0 0 30px rgba(0, 255, 224, 0.1)',
									}}
									viewport={{ once: true, margin: '-20%' }}
									transition={{ duration: 0.8 }}
								>
									<motion.h3
										className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-cyber-green mb-8 leading-[1.2] tracking-[-0.01em] cursor-default"
										whileHover={{
											scale: 1.02,
											textShadow: '0 0 8px rgba(0, 255, 224, 0.6)',
										}}
										transition={{ duration: 0.3, ease: 'easeOut' }}
									>
										The Impact
									</motion.h3>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
										{impact?.stats?.map((stat, index) => (
											<motion.div
												key={stat.value}
												className="space-y-4 flex flex-col cursor-default group"
												whileHover={{
													scale: 1.05,
													y: -4,
												}}
												initial={{ opacity: 0, y: 20 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeOut' }}
											>
												<motion.p
													className="text-[clamp(3rem,6vw,4rem)] font-black text-moon-rock mb-0 leading-[0.9] tracking-[-0.02em]"
													whileHover={{
														textShadow: '0 0 12px rgba(255, 255, 255, 0.3)',
													}}
												>
													{stat.value}
													<motion.span
														className="text-cyber-green"
														whileHover={{
															textShadow: '0 0 8px rgba(0, 255, 224, 0.8)',
														}}
													>
														{stat.unit}
													</motion.span>
												</motion.p>
												<p className="text-moon-rock text-[clamp(0.875rem,1.5vw,1rem)] font-light leading-[1.4] group-hover:text-moon-rock/80 transition-colors duration-300">
													{stat.description}
												</p>
											</motion.div>
										))}
									</div>
								</motion.div>
							)}
						</div>
					</Section>
				)}

				{testimonial && (
					<Section count="6.0" title="What do they think?">
						<div className="text-[clamp(1.5rem,3vw,2.25rem)] text-moon-rock leading-[1.3] p-8 lg:py-20 lg:px-32 relative mb-20">
							<blockquote className="font-semibold max-w-[39ch]">
								<motion.svg
									className="mb-8 cursor-default"
									xmlns="http://www.w3.org/2000/svg"
									width="73"
									height="65"
									viewBox="0 0 73 65"
									fill="none"
									whileHover={{
										scale: 1.1,
										filter: 'drop-shadow(0 0 8px rgba(0, 255, 224, 0.6))',
									}}
									transition={{ duration: 0.3, ease: 'easeOut' }}
								>
									<path
										d="M0 40.4268C0 28.4485 1.67512 19.8171 5.02536 14.5325C8.3756 9.07182 14.4589 4.22764 23.2754 0L33.3261 15.061C26.8019 18.7602 23.0109 21.8428 21.9529 24.3089C21.0713 26.5989 20.6304 28.7127 20.6304 30.6504H33.0616V65H0V40.4268ZM39.6739 40.4268C39.6739 28.4485 41.2609 19.8171 44.4348 14.5325C47.785 9.07182 53.9565 4.22764 62.9493 0L73 15.061C66.4758 18.7602 62.6848 21.8428 61.6268 24.3089C60.5688 26.5989 60.0399 28.7127 60.0399 30.6504H72.7355V65H39.6739V40.4268Z"
										fill="url(#paint0_linear_45_105)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_45_105"
											x1="73"
											y1="65"
											x2="0"
											y2="65"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#C1FF1D" />
											<stop offset="1" stopColor="#00FFE0" />
										</linearGradient>
									</defs>
								</motion.svg>
								<span dangerouslySetInnerHTML={{ __html: testimonial.quote }} />
								<motion.svg
									className="rotate-180 inline h-4 w-auto -mt-5 cursor-default"
									xmlns="http://www.w3.org/2000/svg"
									width="73"
									height="65"
									viewBox="0 0 73 65"
									fill="none"
									whileHover={{
										scale: 1.1,
										filter: 'drop-shadow(0 0 8px rgba(0, 255, 224, 0.6))',
									}}
									transition={{ duration: 0.3, ease: 'easeOut' }}
								>
									<path
										d="M0 40.4268C0 28.4485 1.67512 19.8171 5.02536 14.5325C8.3756 9.07182 14.4589 4.22764 23.2754 0L33.3261 15.061C26.8019 18.7602 23.0109 21.8428 21.9529 24.3089C21.0713 26.5989 20.6304 28.7127 20.6304 30.6504H33.0616V65H0V40.4268ZM39.6739 40.4268C39.6739 28.4485 41.2609 19.8171 44.4348 14.5325C47.785 9.07182 53.9565 4.22764 62.9493 0L73 15.061C66.4758 18.7602 62.6848 21.8428 61.6268 24.3089C60.5688 26.5989 60.0399 28.7127 60.0399 30.6504H72.7355V65H39.6739V40.4268Z"
										fill="url(#paint0_linear_45_105)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_45_105"
											x1="73"
											y1="65"
											x2="0"
											y2="65"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#C1FF1D" />
											<stop offset="1" stopColor="#00FFE0" />
										</linearGradient>
									</defs>
								</motion.svg>
							</blockquote>
							<figcaption className="pt-8">
								{testimonial.author}
								<br />
								<span className="text-gray-600">{testimonial.role}</span>
							</figcaption>

							<div className="absolute hidden lg:block lg:right-0 lg:bottom-0 opacity-40">
								<CircleGrad className="contact-circ cursor-auto absolute flex" transparent>
									<Love className="spin" fill="var(--c-wolf-gray)" />
									<Mark fill="var(--c-wolf-gray)" width={72} className="absolute" />
								</CircleGrad>
							</div>
						</div>
					</Section>
				)}
			</div>
			<SectionSeparator />
			<NextCaseStudies
				currentCase={title}
				nextCases={[
					{
						title: 'Shakey Graves',
						description:
							'A case study for Shakey Graves "Movie of the Week" project. Featuring a custom web design and development, AI integration, and a unique user experience.',
						image: '/images/shakeycard.jpg',
						tags: ['Web Design', 'Web Development', 'AI'],
						url: '/work/shakey-graves',
					},
					{
						title: 'Hayashi Whisky',
						description:
							'A case study for Hayashi Whisky web design and development. Featuring a luxurious web design, immersive UI, and unique product storytelling.',
						image: '/images/hayashicard.jpg',
						tags: ['Web Design', 'Web Development', 'Luxury'],
						url: '/work/hayashi',
					},
					{
						title: 'BackForty Management',
						description:
							'A case study for BackForty Management. Featuring a custom web development, brand evolution, and unique page transitions.',
						image: '/images/backfortycard.jpg',
						tags: ['Web Design', 'Web Development', 'Brand Evolution'],
						url: '/work/backforty',
					},
				]}
			/>
			<ContactForm formSource={`Case Study - ${title}`} />
		</div>
	);
};
