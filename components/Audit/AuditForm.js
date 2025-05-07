'use client';

import { useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { sendGTMEvent } from '@next/third-parties/google';

export const AuditForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const formEl = useRef(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		setIsSubmitting(true);
		const emailBody = {
			...data,
			subject: 'New Website Audit Request - House of Giants',
		};

		try {
			const response = await fetch('/api/send-email', {
				body: JSON.stringify(emailBody),
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
			});

			const { status } = await response.json();
			if (status === 200) {
				formEl.current.reset();
				// Track successful submission
				sendGTMEvent('event', 'audit_form_submission', {
					form_type: 'website_audit',
					form_source: 'audit_page',
				});
				setIsSuccess(true);
			}
		} catch (error) {
			console.error('Error submitting form:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isSuccess) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[340px]">
				<div className="bg-black/20 backdrop-blur-lg border border-gray-800 rounded-xl shadow-lg px-8 py-12 max-w-2xl w-full flex flex-col items-center">
					<div className="mb-6 flex flex-col items-center">
						<div className="flex flex-col items-center justify-center mb-4">
							<div className="flex justify-center gap-2 mt-2">
								<div
									className="w-2 h-2 bg-cyber-green rounded-full animate-bounce"
									style={{ animationDelay: '0ms' }}
								></div>
								<div
									className="w-2 h-2 bg-cyber-green rounded-full animate-bounce"
									style={{ animationDelay: '150ms' }}
								></div>
								<div
									className="w-2 h-2 bg-cyber-green rounded-full animate-bounce"
									style={{ animationDelay: '300ms' }}
								></div>
							</div>
						</div>
						<h3 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Audit Request Received!</h3>
					</div>
					<p className="text-moon-rock/90 text-lg mb-6">
						Thanks for reaching out. We&apos;ve got your site in the queue. We’ll be digging in and putting together a
						thoughtful, honest audit with ideas you can actually use.{' '}
					</p>
					<p className="text-moon-rock/90 text-lg mb-6">
						We appreciate the chance to learn more about what you’re building. You’ll hear from us soon!
					</p>
					<p className="text-cyber-green text-lg mb-6">Sit tight. We&apos;ll be in touch soon.</p>
				</div>
			</div>
		);
	}

	return (
		<form ref={formEl} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
							message: 'Please enter a valid email address',
						},
					})}
				/>
				{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
			</div>

			<div>
				<input
					type="text"
					id="company"
					placeholder="Company Name"
					className={`w-full p-4 bg-black bg-opacity-50 border ${
						errors.company ? 'border-red-500' : 'border-gray-800'
					} rounded-lg focus:border-[var(--c-accent)] transition-all`}
					{...register('company', { required: 'Company name is required' })}
				/>
				{errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
			</div>

			<div>
				<input
					type="url"
					id="website"
					placeholder="Website URL"
					className={`w-full p-4 bg-black bg-opacity-50 border ${
						errors.website ? 'border-red-500' : 'border-gray-800'
					} rounded-lg focus:border-[var(--c-accent)] transition-all`}
					{...register('website', {
						required: 'Website URL is required',
						pattern: {
							value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
							message: 'Please enter a valid URL',
						},
					})}
				/>
				{errors.website && <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>}
			</div>

			<div>
				<select
					id="feedback"
					className={`w-full p-4 bg-black bg-opacity-50 border ${
						errors.feedback ? 'border-red-500' : 'border-gray-800'
					} rounded-lg focus:border-[var(--c-accent)] transition-all`}
					{...register('feedback', { required: 'Please select a focus area' })}
				>
					<option value="">What's the biggest thing you want feedback on?</option>
					<option value="positioning">Brand Positioning & Messaging</option>
					<option value="conversions">Conversion Rate Optimization</option>
					<option value="design">User Experience & Design</option>
					<option value="speed">Page Speed & Performance</option>
					<option value="seo">SEO & Content Strategy</option>
					<option value="other">Other</option>
				</select>
				{errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback.message}</p>}
			</div>

			<div className="flex items-center gap-3">
				<input type="checkbox" id="followup" className="mt-1.5" {...register('followup')} />
				<label htmlFor="followup" className="text-moon-rock/80 text-sm mb-0">
					I'm open to a follow-up conversation about implementing the recommendations
				</label>
			</div>

			<Button type="submit" disabled={isSubmitting} variant="primary" size="xl" className="w-full">
				{isSubmitting ? (
					<span className="animate-pulse">Sending...</span>
				) : (
					<>
						Get Your Free Website Audit
						<span className="text-[var(--c-accent)] ml-2">→</span>
					</>
				)}
			</Button>
		</form>
	);
};
