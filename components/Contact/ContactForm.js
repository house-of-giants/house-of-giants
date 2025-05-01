import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { ContactHeader } from './ContactHeader';
import { SuccessMessage } from './SuccessMessage';
import fetchJson from '@/utils/fetchJson';
import Link from 'next/link';
import { Button } from '../Button/Button';
import { sendGTMEvent } from '@next/third-parties/google';

// Simple Contact Form Component for homepage
const SimpleContactForm = ({ formEl, register, handleSubmit, onSubmit, errors, isSubmitting, formSource }) => {
	// Create a wrapper for the onSubmit function that handles form tracking
	const handleFormSubmit = (formData) => {
		// Track the event with sendGTMEvent
		sendGTMEvent('event', 'contact_form_submission', {
			form_type: 'quick_contact',
			form_source: formSource || 'homepage',
		});

		// Call the original onSubmit function
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

			<Button type="submit" disabled={isSubmitting} variant="primary" className="w-full">
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

const ContactForm = ({ title, subtitle, accent, description }) => {
	const [contactSuccess, setContactSuccess] = useState(null);
	const formEl = useRef(null);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
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

	return (
		<Section count="7.0" title="Contact" id="contact">
			<Container
				className="-has-background"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
			>
				<ContactHeader title={title} subtitle={subtitle} accent={accent} description={description} />

				<div className="max-w-3xl mx-auto">
					<AnimatePresence mode="wait">
						{!contactSuccess ? (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="bg-black bg-opacity-30 p-8 rounded-xl border border-gray-800 relative overflow-hidden"
							>
								{/* Decorative gradient blob */}
								<div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
								<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

								<div className="relative z-10">
									<h2 className="text-2xl font-bold mb-6">Let's Start a Conversation</h2>
									<SimpleContactForm
										formEl={formEl}
										register={register}
										handleSubmit={handleSubmit}
										onSubmit={onSubmit}
										errors={errors}
										isSubmitting={isSubmitting}
										formSource="homepage"
									/>
									<div className="mt-6 pt-6 border-t border-gray-800 text-center">
										<p className="text-moon-rock mb-4">Need to share more details about your project?</p>
										<Button href="/contact#contact-detailed" variant="secondary" className="w-full">
											Go to Detailed Project Form
											<span className="text-[var(--c-accent)] ml-2">→</span>
										</Button>
									</div>
								</div>
							</motion.div>
						) : (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="bg-black bg-opacity-30 p-8 rounded-xl border border-gray-800 relative overflow-hidden"
							>
								<SuccessMessage />
								<div className="mt-8 text-center">
									<Button href="/contact" variant="primary">
										View All Contact Options
										<span className="text-[var(--c-accent)] ml-2">→</span>
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

export default ContactForm;
