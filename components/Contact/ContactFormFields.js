import { useState } from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '../UI/GradientButton';
import { FormField } from './FormField';

export const ContactFormFields = ({ formEl, register, handleSubmit, onSubmit, errors, isSubmitting }) => {
	const [focusedField, setFocusedField] = useState(null);

	return (
		<motion.form
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			className="space-y-8"
			onSubmit={handleSubmit(onSubmit)}
			ref={formEl}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<FormField
					name="name"
					label="Full Name"
					placeholder="Your name, your legacy"
					required
					register={register}
					focusedField={focusedField}
					setFocusedField={setFocusedField}
				/>

				<FormField
					name="email"
					type="email"
					label="Contact Email"
					placeholder="you@example.com"
					required
					register={register}
					focusedField={focusedField}
					setFocusedField={setFocusedField}
				/>
			</div>

			<FormField
				name="project"
				type="select"
				label="Project Type"
				options={[
					'🌐 Custom Website Development',
					'⚡ Interactive Web Application',
					'🎮 3D Digital Experience',
					'🔧 Enterprise WordPress Solution',
					"💭 Not Sure Yet (Let's Talk)",
				]}
				register={register}
				focusedField={focusedField}
				setFocusedField={setFocusedField}
			/>

			<FormField
				name="timeline"
				type="select"
				label="Timeline"
				options={['🚀 Within 30 days', '📅 2-3 months', '📋 3+ months', '💭 Flexible timeline']}
				register={register}
				focusedField={focusedField}
				setFocusedField={setFocusedField}
			/>

			<FormField
				name="budget"
				type="select"
				label="Budget Range"
				options={['💫 $10k - $25k', '🌟 $25k - $50k', '✨ $50k - $100k', '🌌 $100k+', '📊 Still determining budget']}
				register={register}
				focusedField={focusedField}
				setFocusedField={setFocusedField}
			/>

			<FormField
				name="inspiration"
				type="textarea"
				label="Share your digital dreams"
				placeholder="Seen something that sparked your imagination? Websites you love? Experiences that blew your mind? Drop the links here..."
				register={register}
				focusedField={focusedField}
				setFocusedField={setFocusedField}
				rows={4}
			/>

			<FormField
				name="goals"
				type="textarea"
				label="What does victory look like?"
				placeholder="Tell us about your goals, KPIs, or the change you want to see in your digital presence..."
				register={register}
				focusedField={focusedField}
				setFocusedField={setFocusedField}
				rows={4}
			/>

			<FormField
				name="desc"
				type="textarea"
				label="What are we building?"
				placeholder="Tell us your vision for digital chaos..."
				register={register}
				focusedField={focusedField}
				setFocusedField={setFocusedField}
				rows={6}
			/>

			{Object.keys(errors).length > 0 && (
				<motion.div
					className="font-mono text-sm border border-[#ff2a6d] bg-[rgba(255,42,109,0.1)] p-4"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<span className="text-[#ff2a6d]">[ERROR]</span> Make sure you fill out all required fields to proceed with the
					mission.
				</motion.div>
			)}

			<motion.div className="pt-4 font-mono">
				<GradientButton type="submit" disabled={isSubmitting}>
					{isSubmitting ? (
						<span className="tracking-wider">EXECUTING_MISSION()...</span>
					) : (
						<span className="tracking-wider">EXECUTE_MISSION()</span>
					)}{' '}
					🚀
				</GradientButton>
			</motion.div>
		</motion.form>
	);
};
