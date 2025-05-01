import { Container } from '@/components/Container/Container';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { Section } from '@/components/Section/Section';
import { useForm } from 'react-hook-form';
import { useRef, useState, useEffect } from 'react';

import Link from 'next/link';
import { Button } from '@/components/Button/Button';

// Inline Quick Contact Form section
export const QuickContactForm = ({ selectedPackage }) => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const formEl = useRef(null);
	const packageRef = useRef(null);

	// Update the select value when selectedPackage changes
	useEffect(() => {
		if (selectedPackage && packageRef.current) {
			packageRef.current.value = selectedPackage;
		}
	}, [selectedPackage]);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		const { name, email, desc, package: selectedPackage } = data;
		const emailBody = {
			email,
			subject: 'New Pricing Page Inquiry - House of Giants',
			name,
			desc: `${desc}\n\nSelected Package: ${selectedPackage}`,
		};

		try {
			const response = await fetchJson('/api/send-email', {
				body: JSON.stringify(emailBody),
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
			});

			const { status } = JSON.parse(response);
			if (status === 200) {
				reset();
				setFormSubmitted(true);
				if (typeof window !== 'undefined' && window.gtag) {
					window.gtag('event', 'form_submission', {
						event_category: 'Contact',
						event_label: 'Pricing Page Quick Contact',
					});
				}
			}
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	return (
		<Section count="6.0" title="Quick Contact" id="quick-contact">
			<Container
				className="-has-background"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
			>
				<SectionHeader
					title="Ready to Start Your Project?"
					subtitle="Let's talk about your needs"
					accent="Get a quick response within 24 hours"
				/>

				<div className="max-w-3xl mx-auto mt-[var(--header-spacing)]">
					<AnimatePresence mode="wait">
						{!formSubmitted ? (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
								className="bg-black/20 p-8 rounded-xl border border-moon-rock/10 relative overflow-hidden"
							>
								{/* Decorative gradient elements */}
								<div className="absolute top-0 right-0 w-64 h-64 bg-cyber-green opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
								<div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-purple opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

								<div className="relative z-10">
									<form ref={formEl} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div>
												<label htmlFor="name" className="block text-sm font-medium mb-2 text-moon-rock">
													Name
												</label>
												<input
													type="text"
													id="name"
													placeholder="Your name"
													className={`w-full p-4 bg-black/50 border ${
														errors.name ? 'border-red-500' : 'border-moon-rock/20'
													} rounded-lg focus:border-cyber-green transition-all text-white`}
													{...register('name', { required: 'Name is required' })}
												/>
												{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
											</div>

											<div>
												<label htmlFor="email" className="block text-sm font-medium mb-2 text-moon-rock">
													Email
												</label>
												<input
													type="email"
													id="email"
													placeholder="Your email"
													className={`w-full p-4 bg-black/50 border ${
														errors.email ? 'border-red-500' : 'border-moon-rock/20'
													} rounded-lg focus:border-cyber-green transition-all text-white`}
													{...register('email', {
														required: 'Email is required',
														pattern: {
															value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
															message: 'Invalid email address',
														},
													})}
												/>
												{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
											</div>
										</div>

										<div>
											<label htmlFor="package" className="block text-sm font-medium mb-2 text-moon-rock">
												Which package are you interested in?
											</label>
											<select
												id="package"
												className={`w-full p-4 bg-black/50 border border-moon-rock/20 rounded-lg focus:border-cyber-green transition-all text-white ${
													selectedPackage ? 'border-cyber-green' : ''
												}`}
												{...register('package')}
												ref={packageRef}
												defaultValue={selectedPackage || ''}
											>
												<option value="" disabled={selectedPackage !== null}>
													Select a package
												</option>
												<option value="Baseline Brawler">The Baseline Brawler ($15K+)</option>
												<option value="Growth Engine">The Growth Engine ($25K+)</option>
												<option value="Flagship Flex">The Flagship Flex ($40K+)</option>
												<option value="Not Sure">Not Sure Yet (Need Guidance)</option>
											</select>
										</div>

										<div>
											<label htmlFor="desc" className="block text-sm font-medium mb-2 text-moon-rock">
												Tell us about your project
											</label>
											<textarea
												id="desc"
												placeholder="Brief description of what you're looking to build..."
												rows="4"
												className={`w-full p-4 bg-black/50 border ${
													errors.desc ? 'border-red-500' : 'border-moon-rock/20'
												} rounded-lg focus:border-cyber-green transition-all text-white`}
												{...register('desc', { required: 'Project description is required' })}
											></textarea>
											{errors.desc && <p className="text-red-500 text-sm mt-1">{errors.desc.message}</p>}
										</div>

										<Button type="submit" disabled={isSubmitting} variant="primary" className="w-full">
											{isSubmitting ? (
												<span className="animate-pulse">Sending...</span>
											) : (
												<>
													Get My Project Started
													<span className="text-cyber-green ml-2">→</span>
												</>
											)}
										</Button>
									</form>

									<div className="mt-6 pt-6 border-t border-moon-rock/10 text-center">
										<p className="text-moon-rock mb-4">Need to share more detailed requirements?</p>
										<Link href="/contact#contact-detailed" passHref>
											<Button variant="secondary" className="inline-block">
												Go to Detailed Contact Form
												<span className="text-cyber-green ml-2">→</span>
											</Button>
										</Link>
									</div>
								</div>
							</motion.div>
						) : (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="bg-black/20 p-8 rounded-xl border border-cyber-green/30 relative overflow-hidden"
							>
								<div className="text-center">
									<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-green/20 mb-6">
										<span className="text-3xl">✓</span>
									</div>
									<h3 className="text-2xl font-bold mb-3">Message Received!</h3>
									<p className="text-moon-rock mb-6">
										Thanks for reaching out. We'll review your project details and get back to you within 24 hours.
									</p>
									<Button href="/work" variant="primary">
										View Our Work
										<span className="text-cyber-green ml-2">→</span>
									</Button>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</Container>
		</Section>
	);
};
