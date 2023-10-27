import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import { Button } from '../Button/Button';
import { CircleGrad } from '../Cursor/StyledCursor';
import { Dots } from '../Dots/Dots';
import { Grid } from '../Grid/Grid';
import Arrow from '../SVG/Arrow';
import Twerk from '../SVG/Twerk';
import { ContactSection } from './ContactSection';
import fetchJson from '@/utils/fetchJson';
import { StyledSocial } from '../Social/StyledSocial';
import { Container } from '../Container/Container';

const ContactForm = () => {
	const [showForm, setShowForm] = useState(false);
	const [contactError, setContactError] = useState(null);
	const [contactSuccess, setContactSuccess] = useState(null);
	const formEl = useRef(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const { name, email, project, desc } = data;

		const emailBody = {
			email,
			subject: 'Lead from houseofgiants.com',
			name,
			project,
			desc,
		};

		fetchJson('/api/send-email', {
			body: JSON.stringify(emailBody),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		}).then((res) => {
			const { data, status } = JSON.parse(res);
			if (status === 200) {
				formEl.current.reset();
				setContactSuccess("We're pumped to work with you! We'll reach back out as soon as possible.");
			} else {
				const { message } = data;
				setContactError(message);
			}
		});
	};

	return (
		<>
			<ContactSection
				id="contact"
				className={showForm ? '-active' : ''}
				background="linear-gradient(-270deg, var(--c-neon-sky) 0%, var(--c-cyber-green) 80%, var(--c-white) 80% 100%)"
				pt="var(--sp-2xl)"
				pb="var(--sp-2xl)"
			>
				<Grid
					cols="2fr 1fr"
					gap="var(--sp-m)"
					pBottom="var(--sp-2xl)"
					onClick={() => (showForm ? setShowForm(false) : null)}
				>
					<Dots opacity="0.1">
						<h2 className="-lh-1 -fw-700">Let&apos;s build something amazing together</h2>
						<p>
							Whether you have a fully fleshed out idea, or just want to talk through options, we'd love to chat with
							you. Give us some quick information that will help us better understand your needs, and we'll let you know
							the options.
						</p>
						<Button href="#contact" onClick={() => setShowForm(true)}>
							Let me fill out a form <Arrow width="13" height="13" />
						</Button>
					</Dots>
				</Grid>

				<CircleGrad className="contact-circ" $solid onClick={() => setShowForm(!showForm)}>
					<Twerk fill="var(--c-white)" />
					<Arrow fill="var(--c-white)" />
				</CircleGrad>

				<div className="form" onClick={() => setShowForm(true)}>
					{!contactSuccess ? (
						<AnimatePresence>
							<motion.form
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onSubmit={handleSubmit(onSubmit)}
								ref={formEl}
							>
								<div className="form-group">
									<label htmlFor="name">Your Name</label>
									<input id="name" {...register('name')} />
								</div>

								<div className="form-group">
									<label htmlFor="email">Email Address</label>
									<input id="email" type="email" {...register('email')} />
								</div>

								<div className="form-group">
									<label htmlFor="project-type">Project type</label>
									<select id="project-type" {...register('project')}>
										<option>Web Design &amp; Development</option>
										<option>Product Branding</option>
										<option>Product Development</option>
										<option>Unsure - I just have a great idea!</option>
									</select>
								</div>

								<div className="form-group">
									<label htmlFor="desc">Tell us a little about how we can help</label>
									<textarea id="desc" {...register('desc')} rows="6"></textarea>
								</div>

								<div style={{ color: 'red' }}>
									{Object.keys(errors).length > 0 && 'There are errors, check your console.'}
								</div>

								<Button type="submit">Submit</Button>
							</motion.form>
						</AnimatePresence>
					) : (
						<AnimatePresence>
							<motion.h2
								initial={{ opacity: 0, y: -100 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -100 }}
								className="-serif -lh-1"
							>
								🤘 Thanks for reaching out! We'll get in touch with you as quickly as possible.
							</motion.h2>
						</AnimatePresence>
					)}
				</div>
			</ContactSection>
			<StyledSocial className={showForm ? '-active' : ''}>
				<Container pb="var(--sp-s)">
					<ul>
						<li>
							<a href="https://twitter.com/_houseofgiants" target="_blank" rel="noopener">
								Twitter <Arrow width="10" height="10" />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/_houseofgiants/" target="_blank" rel="noopener">
								Instagram <Arrow width="10" height="10" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/company/house-of-giants" target="_blank" rel="noopener">
								LinkedIn <Arrow width="10" height="10" />
							</a>
						</li>
					</ul>

					<p className="-fw-500 -m0">&copy;{new Date().getFullYear()} House of Giants</p>
				</Container>
			</StyledSocial>
		</>
	);
};

export default ContactForm;
