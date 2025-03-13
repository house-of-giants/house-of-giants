import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { ContactHeader } from './ContactHeader';
import { ContactFormFields } from './ContactFormFields';
import { SuccessMessage } from './SuccessMessage';
import fetchJson from '@/utils/fetchJson';
import Link from 'next/link';
import { Button } from '../Button/Button';

// Simple Contact Form Component for homepage
const SimpleContactForm = ({ formEl, register, handleSubmit, onSubmit, errors, isSubmitting }) => (
	<form ref={formEl} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

		<button
			type="submit"
			disabled={isSubmitting}
			className="w-full grad-border bg-[var(--c-primary-dark)] text-white font-mono hover:scale-105 transition-transform duration-300 text-base px-6 py-4 rounded-lg flex items-center justify-center"
		>
			{isSubmitting ? (
				<span className="animate-pulse">Sending...</span>
			) : (
				<>
					Let's Talk About Your Project
					<span className="text-[var(--c-accent)] ml-2">→</span>
				</>
			)}
		</button>
	</form>
);

const ContactForm = () => {
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
				<ContactHeader />

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
									/>
									<div className="mt-6 pt-6 border-t border-gray-800 text-center">
										<p className="text-moon-rock mb-4">Need to share more details about your project?</p>
										<Link href="/contact#contact-detailed" passHref>
											<Button className="inline-block bg-black bg-opacity-40 text-white hover:bg-opacity-60 font-mono transition-all duration-300 text-base px-6 py-3 rounded-lg">
												Go to Detailed Project Form
												<span className="text-[var(--c-accent)] ml-2">→</span>
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
								className="bg-black bg-opacity-30 p-8 rounded-xl border border-gray-800 relative overflow-hidden"
							>
								<SuccessMessage />
								<div className="mt-8 text-center">
									<Link href="/contact" passHref>
										<Button className="inline-block grad-border bg-[var(--c-primary-dark)] text-white font-mono hover:scale-105 transition-transform duration-300 text-base px-6 py-3 rounded-lg">
											View All Contact Options
											<span className="text-[var(--c-accent)] ml-2">→</span>
										</Button>
									</Link>
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
