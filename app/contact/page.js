'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { FloatingGradients } from '@/components/FloatingGradients/FloatingGradients';
import { SectionSeparator } from '@/components/SectionSeparator/SectionSeparator';
import { ContactFormFields } from '@/components/Contact/ContactFormFields';
import { SuccessMessage } from '@/components/Contact/SuccessMessage';
import { Socials } from '@/components/Social/Socials';
import Link from 'next/link';
import fetchJson from '@/utils/fetchJson';
import Testimonials from '@/components/Testimonials/Testimonials';
import { ContactSchema } from '@/components/Schema/ContactSchema';
import { Button } from '@/components/Button/Button';
import { sendGTMEvent } from '@next/third-parties/google';

const SimpleContactForm = ({ formEl, register, handleSubmit, onSubmit, errors, isSubmitting, formSource }) => {
	const handleFormSubmit = (formData) => {
		sendGTMEvent('event', 'contact_form_submission', {
			form_type: 'quick_contact',
			form_source: formSource,
		});

		return onSubmit(formData);
	};

	return (
		<form ref={formEl} onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
			<div>
				<input
					type="text"
					id="name"
					placeholder="Your Name"
					className={`w-full p-4 bg-black bg-opacity-50 border ${
						errors.name ? 'border-red-500' : 'border-gray-800'
					} rounded-lg focus:border-[var(--c-accent)] transition-all`}
					{...register('name', { required: 'Name is required' })}
				/>
				{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
			</div>
			<div>
				<input
					type="email"
					id="email"
					placeholder="Your Email"
					className={`w-full p-4 bg-black bg-opacity-50 border ${
						errors.email ? 'border-red-500' : 'border-gray-800'
					} rounded-lg focus:border-[var(--c-accent)] transition-all`}
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
			<div>
				<textarea
					id="desc"
					placeholder="Tell us about your project..."
					rows="3"
					className={`w-full p-4 bg-black bg-opacity-50 border ${
						errors.desc ? 'border-red-500' : 'border-gray-800'
					} rounded-lg focus:border-[var(--c-accent)] transition-all`}
					{...register('desc', { required: 'Project description is required' })}
				></textarea>
				{errors.desc && <p className="text-red-500 text-sm mt-1">{errors.desc.message}</p>}
			</div>
			<Button type="submit" disabled={isSubmitting} variant="primary" size="lg" className="w-full">
				{isSubmitting ? (
					<span className="animate-pulse">Sending...</span>
				) : (
					<>
						Let's Talk About Your Project
						<span className="text-[var(--c-accent)] ml-2">→</span>
					</>
				)}
			</Button>
		</form>
	);
};

// FAQ Item Component
const FaqItem = ({ question, answer, index }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div
			className="border-b border-gray-800"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.3, delay: index * 0.1 }}
		>
			<Button
				variant="text"
				className="w-full py-5 flex justify-between items-center text-left"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h3 className="text-xl font-bold">{question}</h3>
				<div className={`text-[var(--c-accent)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
					↓
				</div>
			</Button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className="overflow-hidden"
					>
						<div className="pb-5 text-moon-rock leading-relaxed">{answer}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

// Contact Info Item Component
const ContactInfoItem = ({ icon, label, value, link, newTab = false }) => (
	<motion.div
		className="flex items-center gap-4"
		initial={{ opacity: 0, x: -10 }}
		animate={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.3 }}
	>
		<div className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-[var(--c-accent)] text-2xl">
			{icon}
		</div>
		<div className="flex flex-col justify-center">
			<p className="text-sm text-moon-rock mb-0">{label}</p>
			{link ? (
				<a
					href={link}
					className="font-bold hover:text-[var(--c-accent)] transition-colors"
					target={newTab ? '_blank' : '_self'}
					rel={newTab ? 'noopener noreferrer' : ''}
				>
					{value}
				</a>
			) : (
				<p className="font-bold text-base mb-0">{value}</p>
			)}
		</div>
	</motion.div>
);

export default function ContactPage() {
	const [contactSuccess, setContactSuccess] = useState(null);
	const formEl = useRef(null);
	const detailedFormEl = useRef(null);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const {
		register: registerDetailed,
		handleSubmit: handleSubmitDetailed,
		formState: { errors: errorsDetailed, isSubmitting: isSubmittingDetailed },
	} = useForm();

	const onSubmit = async (data) => {
		const { name, email, desc } = data;
		const emailBody = {
			email,
			subject: 'New Quick Contact Form Inquiry - House of Giants',
			name,
			desc,
		};

		try {
			const response = await fetchJson('/api/send-email', {
				body: JSON.stringify(emailBody),
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
			});

			const { status } = JSON.parse(response);
			if (status === 200) {
				formEl.current.reset();
				setContactSuccess(true);
			}
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	const onSubmitDetailed = async (data) => {
		const { name, email, project, timeline, budget, inspiration, goals, desc } = data;
		const emailBody = {
			email,
			subject: 'New Detailed Project Inquiry - House of Giants',
			name,
			project,
			timeline,
			budget,
			inspiration,
			goals,
			desc,
		};

		try {
			const response = await fetchJson('/api/send-email', {
				body: JSON.stringify(emailBody),
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
			});

			const { status } = JSON.parse(response);
			if (status === 200) {
				detailedFormEl.current.reset();
				setContactSuccess(true);
			}
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	// Stats data
	const stats = [
		{
			value: '94%',
			description: 'Client satisfaction',
		},
		{
			value: '100+',
			description: 'Projects delivered',
		},
		{
			value: '+300%',
			description: 'Average ROI',
		},
		{
			value: '12+',
			description: 'Years of excellence',
		},
	];

	// FAQ data
	const faqs = [
		{
			question: 'What makes House of Giants different from other agencies?',
			answer:
				"We combine strategic thinking with cutting-edge technology to create digital experiences that don't just look good—they drive real business results. Our approach is collaborative, transparent, and focused on your long-term success, not just quick wins.",
		},
		{
			question: 'How long does a typical project take?',
			answer:
				"Project timelines vary based on scope and complexity. A typical website might take 8-12 weeks, while more complex digital platforms can take 3-6 months. We'll provide a detailed timeline during our initial consultation based on your specific needs.",
		},
		{
			question: "What's your pricing structure?",
			answer:
				"We provide custom quotes based on project scope, complexity, and timeline. Our projects typically start at $25,000, and we offer flexible payment schedules to align with project milestones. We're happy to provide a detailed estimate after understanding your specific requirements.",
		},
		{
			question: 'Do you offer ongoing support after launch?',
			answer:
				"Absolutely! We offer comprehensive support and maintenance packages to ensure your digital product continues to perform at its best. From regular updates and performance optimizations to content changes and feature additions, we're here to support your digital growth.",
		},
	];

	// Benefits data
	const benefits = [
		{
			icon: '🚀',
			title: 'Strategic Partnership',
			description:
				"We're not just vendors, we're partners in your digital success. We align our expertise with your business goals to create solutions that drive real results.",
		},
		{
			icon: '🎯',
			title: 'Business-Focused Approach',
			description:
				'Every pixel has a purpose. We build digital products that solve real business challenges and contribute to your bottom line.',
		},
		{
			icon: '⚡',
			title: 'Technical Excellence',
			description:
				'Our solutions are built on solid technical foundations, ensuring scalability, security, and performance that stand the test of time.',
		},
		{
			icon: '🔍',
			title: 'Data-Driven Decisions',
			description:
				'We use analytics and user insights to inform our strategies, ensuring that every decision is backed by real-world data.',
		},
		{
			icon: '🌈',
			title: 'Creative Innovation',
			description:
				'We push creative boundaries while maintaining usability, creating memorable digital experiences that set you apart.',
		},
		{
			icon: '🤝',
			title: 'Transparent Process',
			description:
				"No black boxes here. We maintain clear communication throughout the project, ensuring you're informed every step of the way.",
		},
	];

	return (
		<main className="relative">
			<ContactSchema />
			<FloatingGradients variant="green" intensity="low" />

			{/* Hero Section with Split Layout and Form */}
			<Section count="0.0" title="Contact">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
							<h1 className="text-4xl md:text-6xl font-900 mb-4 -grad-header">
								<span className="block">Ready to</span>
								<span className="block text-[var(--c-accent)]">Transform Your</span>
								<span className="block">Digital Presence?</span>
							</h1>
							<p className="text-lg text-moon-rock leading-relaxed mb-6">
								Tell us about your project, and we'll show you how we can help drive real business results through
								strategic digital experiences.
							</p>

							{/* Contact Info Items - Visible on mobile, hidden on desktop */}
							<div className="flex flex-col space-y-4 mb-8 lg:hidden">
								<ContactInfoItem
									icon="📧"
									label="Email us at"
									value="hello@houseofgiants.com"
									link="mailto:hello@houseofgiants.com"
								/>
								<ContactInfoItem icon="📞" label="Call us at" value="+1 (303) 219-0697" link="tel:+13032190697" />
								<ContactInfoItem icon="📍" label="Based in" value="Denver, Colorado" />
							</div>

							{/* Social Proof Counters - Visible only on mobile */}
							<div className="lg:hidden mt-6 grid grid-cols-2 gap-4">
								<div className="bg-black bg-opacity-20 p-4 rounded-lg border border-gray-800">
									<div className="text-2xl font-bold text-[var(--c-accent)]">94%</div>
									<p className="text-sm text-moon-rock mb-0">Client satisfaction rate</p>
								</div>
								<div className="bg-black bg-opacity-20 p-4 rounded-lg border border-gray-800">
									<div className="text-2xl font-bold text-[var(--c-accent)]">100+</div>
									<p className="text-sm text-moon-rock mb-0">Projects delivered</p>
								</div>
							</div>

							{/* Contact Info Items - Desktop Only */}
							<div className="hidden lg:flex lg:flex-col lg:space-y-4 mt-8">
								<ContactInfoItem
									icon="📧"
									label="Email us at"
									value="hello@houseofgiants.com"
									link="mailto:hello@houseofgiants.com"
								/>
								<ContactInfoItem icon="📞" label="Call us at" value="+1 (303) 219-0697" link="tel:+13032190697" />
								<ContactInfoItem icon="📍" label="Based in" value="Denver, Colorado" />
							</div>
						</motion.div>

						<motion.div
							className="relative"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<div className="bg-black bg-opacity-40 p-8 rounded-xl border border-gray-800 relative overflow-hidden">
								{/* Decorative gradient blob */}
								<div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
								<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

								<div className="relative z-10">
									<AnimatePresence mode="wait">
										{!contactSuccess ? (
											<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
												<h2 className="text-2xl font-bold mb-6">Let's Start a Conversation</h2>
												<SimpleContactForm
													formEl={formEl}
													register={register}
													handleSubmit={handleSubmit}
													onSubmit={onSubmit}
													errors={errors}
													isSubmitting={isSubmitting}
													formSource="Contact Page"
												/>
												<p className="text-center text-sm text-moon-rock mt-4">We'll respond within 24 hours</p>
												<p className="text-center text-moon-rock leading-relaxed mb-4 text-sm">
													Have a simple question? Use the form above.
													<br />
													Need to share project details?{' '}
													<Link href="#contact-detailed" className="-grad-link">
														Use our detailed project form
														<span className="ml-1">↓</span>
													</Link>
												</p>
											</motion.div>
										) : (
											<SuccessMessage />
										)}
									</AnimatePresence>
								</div>
							</div>
						</motion.div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* FAQ Section with Sidebar Contact Options */}
			<Section count="1.0" title="FAQ">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
						<div>
							<SectionHeader
								title="Common Questions"
								subtitle="answered."
								accent="We're here to help."
								description="Still have questions? Feel free to reach out directly and we'll get back to you quickly."
								size="small"
							/>

							<div className="mt-8">
								{faqs.map((faq, index) => (
									<FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
								))}
							</div>
						</div>

						<div className="space-y-6">
							<motion.div
								className="bg-black bg-opacity-30 p-6 rounded-xl border border-gray-800 "
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<h3 className="font-serif text-2xl font-bold mb-4 relative">
									<span className="-grad-header">Need Immediate Help?</span>
								</h3>
								<div className="space-y-4 mb-6">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 grad-border rounded-lg flex items-center justify-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 text-[var(--c-neon-sky)]"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<span className="font-serif text-[var(--c-moon-rock)]">Mon-Fri: 9am-6pm MT</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 grad-border rounded-lg flex items-center justify-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 text-[var(--c-neon-sky)]"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<span className="font-serif text-[var(--c-moon-rock)]">Average response time: 4 hours</span>
									</div>
								</div>

								<Link href="#contact-detailed">
									<Button variant="secondary" size="lg" className="w-full mb-4">
										Schedule a Consultation
									</Button>
								</Link>

								<div className="text-center">
									<p className="font-serif text-sm text-[var(--c-moon-rock)] mb-0">or</p>
								</div>

								<Button
									href="tel:+13032190697"
									variant="text"
									size="lg"
									className="block w-full text-center border border-[var(--c-neon-sky)] text-[var(--c-white)] hover:text-[var(--c-neon-sky)] py-3 mt-4 font-mono"
								>
									Call +1 (303) 219-0697
								</Button>
							</motion.div>

							<motion.div
								className="grad-border p-8 rounded-xl relative overflow-hidden"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<div className="relative z-10">
									<h3 className="font-serif text-2xl font-bold mb-6 relative">
										<span className="-grad-header">Follow Us</span>
									</h3>
									<Socials theme="dark" />
								</div>
							</motion.div>
						</div>
					</div>
				</Container>
			</Section>

			<SectionSeparator />

			{/* Testimonials */}
			<Section count="2.0" title="Success Stories">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="Client Success Stories"
						subtitle="in their own words."
						accent="Real results, real feedback."
						description="We're proud to have helped these companies achieve their digital goals. Here's what they have to say:"
					/>

					<Testimonials noHeader />
				</Container>
			</Section>

			<SectionSeparator />

			{/* Detailed Contact Form Section */}
			<Section count="3.0" title="Detailed Contact Form" id="contact-detailed">
				<Container
					className="-has-background"
					background="var(--c-primary-dark)"
					pt="var(--section-spacing-top)"
					pb="var(--section-spacing-bottom)"
				>
					<SectionHeader
						title="Tell Us More"
						subtitle="About Your Project"
						accent="Let's get into the details."
						description="Want to provide more details about your project? Fill out this comprehensive form and we'll prepare a tailored response."
					/>

					<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 mt-12">
						<div className="bg-black bg-opacity-30 p-8 rounded-xl border border-gray-800">
							<h3 className="text-2xl font-bold mb-6">Project Details</h3>
							<div className="max-w-3xl">
								<AnimatePresence mode="wait">
									{!contactSuccess ? (
										<ContactFormFields
											formEl={detailedFormEl}
											register={registerDetailed}
											handleSubmit={handleSubmitDetailed}
											onSubmit={onSubmitDetailed}
											errors={errorsDetailed}
											isSubmitting={isSubmittingDetailed}
											formSource="Contact Page"
										/>
									) : (
										<SuccessMessage />
									)}
								</AnimatePresence>
							</div>
						</div>

						<div className="flex flex-col space-y-8">
							<motion.div
								className="bg-black bg-opacity-30 p-8 rounded-xl border border-gray-800"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<h3 className="font-serif text-2xl font-bold mb-6 relative">
									<span className="-grad-header">Our Process</span>
								</h3>
								<div className="space-y-5">
									<div className="flex items-start pb-4">
										<div className="flex-shrink-0 w-12 h-12 grad-border rounded-lg flex items-center justify-center mr-4 font-mono text-lg font-bold text-[var(--c-white)]">
											01
										</div>
										<div>
											<p className="font-serif text-base text-[var(--c-white)] mb-0">
												Initial consultation & discovery
											</p>
										</div>
									</div>
									<div className="flex items-start pb-4">
										<div className="flex-shrink-0 w-12 h-12 grad-border rounded-lg flex items-center justify-center mr-4 font-mono text-lg font-bold text-[var(--c-white)]">
											02
										</div>
										<div>
											<p className="font-serif text-base text-[var(--c-white)] mb-0">Strategic planning & proposal</p>
										</div>
									</div>
									<div className="flex items-start pb-4">
										<div className="flex-shrink-0 w-12 h-12 grad-border rounded-lg flex items-center justify-center mr-4 font-mono text-lg font-bold text-[var(--c-white)]">
											03
										</div>
										<div>
											<p className="font-serif text-base text-[var(--c-white)] mb-0">Collaborative development</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 w-12 h-12 grad-border rounded-lg flex items-center justify-center mr-4 font-mono text-lg font-bold text-[var(--c-white)]">
											04
										</div>
										<div>
											<p className="font-serif text-base text-[var(--c-white)] mb-0">Launch & ongoing support</p>
										</div>
									</div>
								</div>
							</motion.div>

							<motion.div
								className="grad-border p-8 rounded-xl relative overflow-hidden"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<div className="absolute top-0 right-0 w-40 h-40 bg-[var(--c-neon-sky)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

								<div className="relative z-10">
									<h3 className="font-serif text-2xl font-bold mb-6 relative">
										<span className="-grad-header">Why Work With Us</span>
									</h3>
									<div className="space-y-6">
										{benefits.slice(0, 3).map((benefit, index) => (
											<div key={index} className="relative pl-6 border-l-2 border-[var(--c-neon-sky)]">
												<h4 className="font-mono text-lg font-bold text-[var(--c-white)] mb-1">{benefit.title}</h4>
												<p className="font-serif text-sm text-[var(--c-moon-rock)] leading-relaxed">
													{benefit.description}
												</p>
											</div>
										))}
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</Container>
			</Section>
		</main>
	);
}
