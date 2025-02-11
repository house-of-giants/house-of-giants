import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { ContactHeader } from './ContactHeader';
import { ContactFormFields } from './ContactFormFields';
import { SuccessMessage } from './SuccessMessage';
import fetchJson from '@/utils/fetchJson';

const ContactForm = () => {
	const [contactSuccess, setContactSuccess] = useState(null);
	const formEl = useRef(null);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = async (data) => {
		const { name, email, project, timeline, budget, inspiration, goals, desc } = data;
		const emailBody = {
			email,
			subject: 'New Project Inquiry - House of Giants',
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
				formEl.current.reset();
				setContactSuccess(true);
			}
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	return (
		<Section count="7.0" title="Contact">
			<Container
				className="-has-background"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
				id="contact"
			>
				<ContactHeader />

				<div className="max-w-3xl mx-auto">
					<AnimatePresence mode="wait">
						{!contactSuccess ? (
							<ContactFormFields
								formEl={formEl}
								register={register}
								handleSubmit={handleSubmit}
								onSubmit={onSubmit}
								errors={errors}
								isSubmitting={isSubmitting}
							/>
						) : (
							<SuccessMessage />
						)}
					</AnimatePresence>
				</div>
			</Container>
		</Section>
	);
};

export default ContactForm;
