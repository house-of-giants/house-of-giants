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
import { usePlausible } from '@/hooks/usePlausible';

// Simple Contact Form Component for homepage
const SimpleContactForm = ({
	formEl,
	register,
	handleSubmit,
	onSubmit,
	errors,
	isSubmitting,
	formSource,
	buttonText = "Let's Talk About Your Project",
}) => {
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
			<Button type="submit" disabled={isSubmitting} size="lg" variant="primary" className="w-full">
				{isSubmitting ? (
					<span className="animate-pulse">Sending...</span>
				) : (
					<>
						{buttonText}
						<span className="text-[var(--c-accent)] ml-2">→</span>
					</>
				)}
			</Button>
		</form>
	);
};

// Simplified Contact Form for inline use (without Section/Container wrappers)
export const ContactForm = ({ selectedAudience, audienceData }) => {
	const [contactSuccess, setContactSuccess] = useState(null);
	const formEl = useRef(null);
	const { trackContactFormSubmission } = usePlausible();

	// Audience-specific messaging - matching the full ContactForm exactly
	const getAudienceContent = () => {
		switch (selectedAudience) {
			case 'startup':
				return {
					title: 'Ready to Scale Your Startup?',
					subtitle: "Let's build your growth engine",
					description:
						'From MVP to Series A-ready platforms—we help startups build fast, scale smart, and get to market quickly.',
					buttonText: 'Get Your Startup Quote',
				};
			case 'qsr':
				return {
					title: 'Ready to Drive More Orders?',
					subtitle: 'Restaurant websites that deliver results',
					description: 'Custom QSR websites and ordering systems that cut platform fees and boost direct revenue.',
					buttonText: 'Calculate Revenue Impact',
				};
			case 'enterprise':
				return {
					title: 'Ready for Enterprise-Grade Digital?',
					subtitle: 'Strategic solutions that scale',
					description:
						'Custom enterprise platforms and marketing websites built for security, compliance, and performance.',
					buttonText: 'Schedule Strategic Consultation',
				};
			default:
				return {
					title: 'Ready to Transform Your Digital Presence?',
					subtitle: "Let's build something amazing together",
					description: "Tell us about your project, and we'll show you how we can help drive real business results.",
					buttonText: "Let's Talk About Your Project",
				};
		}
	};

	const audienceContent = getAudienceContent();

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
			audience: selectedAudience, // Include audience data
		};

		try {
			const response = await fetchJson('/api/send-email', {
				body: JSON.stringify(emailBody),
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
			});

			const { status } = JSON.parse(response);
			if (status === 200) {
				// Track successful form submission with Plausible
				trackContactFormSubmission('audience_selector', selectedAudience);

				formEl.current.reset();
				setContactSuccess(true);
			}
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	return (
		<AnimatePresence mode="wait">
			{!contactSuccess ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="bg-black/20 backdrop-blur-md p-8 rounded-xl border border-gray-800 relative overflow-hidden"
				>
					<div className="relative z-10">
						<h2 className="text-2xl font-bold mb-6 text-moon-rock">Let's Start a Conversation</h2>
						<SimpleContactForm
							formEl={formEl}
							register={register}
							handleSubmit={handleSubmit}
							onSubmit={onSubmit}
							errors={errors}
							isSubmitting={isSubmitting}
							formSource="audience_selector"
							buttonText={audienceContent.buttonText}
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
						<Button href="/contact" size="lg" variant="primary">
							View All Contact Options
							<span className="text-[var(--c-accent)] ml-2">→</span>
						</Button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

// Full Contact Form Component (existing functionality)
const FullContactForm = ({ title, subtitle, accent, description, selectedAudience }) => {
	const [contactSuccess, setContactSuccess] = useState(null);
	const formEl = useRef(null);
	const { trackContactFormSubmission } = usePlausible();

	// Audience-specific messaging
	const getAudienceContent = () => {
		switch (selectedAudience) {
			case 'startup':
				return {
					title: 'Ready to Scale Your Startup?',
					subtitle: "Let's build your growth engine",
					description:
						'From MVP to Series A-ready platforms—we help startups build fast, scale smart, and get to market quickly.',
					buttonText: 'Get Your Startup Quote',
				};
			case 'qsr':
				return {
					title: 'Ready to Drive More Orders?',
					subtitle: 'Restaurant websites that deliver results',
					description: 'Custom QSR websites and ordering systems that cut platform fees and boost direct revenue.',
					buttonText: 'Calculate Revenue Impact',
				};
			case 'enterprise':
				return {
					title: 'Ready for Enterprise-Grade Digital?',
					subtitle: 'Strategic solutions that scale',
					description:
						'Custom enterprise platforms and marketing websites built for security, compliance, and performance.',
					buttonText: 'Schedule Strategic Consultation',
				};
			default:
				return {
					title: title || 'Ready to Transform Your Digital Presence?',
					subtitle: subtitle || "Let's build something amazing together",
					description:
						description ||
						"Tell us about your project, and we'll show you how we can help drive real business results.",
					buttonText: "Let's Talk About Your Project",
				};
		}
	};

	const audienceContent = getAudienceContent();

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
				// Track successful form submission with Plausible
				trackContactFormSubmission('homepage', selectedAudience);

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
				<ContactHeader
					title={audienceContent.title}
					subtitle={audienceContent.subtitle}
					accent={accent}
					description={audienceContent.description}
				/>

				<div className="max-w-3xl mx-auto">
					<AnimatePresence mode="wait">
						{!contactSuccess ? (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="bg-black/20 backdrop-blur-md p-8 rounded-xl border border-gray-800 relative overflow-hidden"
							>
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
										buttonText={audienceContent.buttonText}
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
									<Button href="/contact" size="lg" variant="primary">
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

export default FullContactForm;
