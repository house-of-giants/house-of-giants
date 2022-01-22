import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useTransform, useViewportScroll } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import { useForm } from 'react-hook-form';

import { Container } from '@/components/Container/Container';
import { Cursor } from '@/components/Cursor/Cursor';
import { Dots } from '@/components/Dots/Dots';
import { Video } from '@/components/Video/Video';	
import { SectionBar } from '@/components/SectionBar/SectionBar';
import { Grid } from '@/components/Grid/Grid';
import { StyledGridItem } from '@/components/Grid/StyledGridItem';
import { Button } from '@/components/Button/Button';
import { Contact } from '@/components/Contact/Contact';
import { CircleGrad } from '@/components/Cursor/StyledCursor';

import Arrow from '@/components/SVG/Arrow';
import Explore from '@/components/SVG/Explore';

import fetchJson from '@/utils/fetchJson';
import { useMedia } from '@/utils/useMedia';

export default function Home() {
	const [cursor, setCursor] = useState(false);
	const [isPlaying, setPlaying] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [contactError, setContactError] = useState(null);
	const [contactSuccess, setContactSuccess] = useState(null);

	const formEl = useRef(null);
	const mouseEl = useRef(null);
	const videoEl = useRef(null);

  const isBig = useMedia(["(min-width: 1024px)"], [1], 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

	const handlePlayPause = () => {
		setPlaying(!isPlaying);

		if(isPlaying) {
			videoEl.current.pause();
		} else {
			videoEl.current.play();
		}
	}

  const onSubmit = async (data) => {
    const { name, email, project, desc } = data;

		const emailBody = {
			email,
			subject: 'Lead from houseofgiants.com',
			name,
			project,
			desc
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
				setContactSuccess('We\'re pumped to work with you! We\'ll reach back out as soon as possible.');
			} else {
				const { message } = data;
				setContactError(message);
			}
		});
  };

  const { scrollYProgress } = useViewportScroll();
	const scaleAnim = useTransform(scrollYProgress, [0.01, 0.1], [1, 0.75]);
	const kellyAnim = useTransform(scrollYProgress, [0.75, 0.85], [isBig ? 400 : 0, 0 ]);
	const domAnim = useTransform(scrollYProgress, [0.7, 0.85], [isBig ? 550 : 0, 0 ]);
	const danielAnim = useTransform(scrollYProgress, [0.7, 0.85], [isBig ? 250 : 0, 0 ]);
	const teamOpacityAnim = useTransform(scrollYProgress, [0.75, 0.8], [isBig ? 0 : 1, 1 ]);

	return (
		<>
			<Container ref={mouseEl} onMouseEnter={() => setCursor(true)} onMouseLeave={() => setCursor(false)} stick={true}>
				<AnimatePresence>
					{cursor && <Cursor el={mouseEl} video={videoEl} setPlaying={setPlaying} isPlaying={isPlaying} />}
				</AnimatePresence>
				<motion.div style={{ scale: scaleAnim }}>
					<Video poster="/images/poster.jpg" controls ref={videoEl} onClick={() => handlePlayPause()} loop>
						<source src="/video/reel2022.mp4" type="video/webm" />
						<source src="/video/reel2022.mp4" type="video/mp4" />
					</Video>
				</motion.div>
			</Container>

			<motion.div>
				<Container className="-has-background" background="var(--c-primary-dark)" pTop="calc(var(--sp-2xl) * 2)">
						<Dots>
							<h3>Our values &amp; ethos</h3>
							<p className="h2">Dreaming of <span className="-green">innovation</span>. Experimenting with <span className="-green">passion</span>. Creating with <span className="-green">purpose</span>. We believe creativity &amp; technology can change the world right after <span className="-green">punk</span> does.</p>
							<p className="h1 -uppercase">We create Digital experiences that<br />people love to use.</p>
						</Dots>
				</Container>
			</motion.div>

			<Container className="-has-background" background="var(--c-primary-dark)">
				<SectionBar count="1.0" title="Services" />
				<Grid cols="1.75fr 1fr" gap="var(--sp-2xl)" pBottom="var(--sp-2xl)">
					<h2 className="-lh-1 -m0 -fs-2xl -dots"><span className="-grad-header">This is how we help you build amazing experiences</span></h2>
					<p className="-c-wolf-gray -m0">Do we need this? maybe, who cares. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.</p>
				</Grid>
				<Grid cols="repeat(2, 1fr)" gap="var(--sp-2xl)" pBottom="var(--sp-xl)" align="start">
					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">01</p>
						<div>
							<h4>Digital design for services,<br />products and platforms</h4>
							<p className="-m0">Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.</p>
						</div>
					</Grid>

					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">02</p>
						<div>
							<h4>Development,<br />Accessability and scale.</h4>
							<p className="-m0">Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.</p>
						</div>
					</Grid>
				</Grid>

				<Grid cols="repeat(2, 1fr)" gap="var(--sp-2xl)" pTop="var(--sp-2xl)" pBottom="var(--sp-2xl)" align="start">
					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">03</p>
						<div>
							<h4>Visiual identities and<br />logos for cool people</h4>
							<p className="-m0">Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.</p>
						</div>
					</Grid>

					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">04</p>
						<div>
							<h4>Consultation and<br />strategy planning</h4>
							<p className="-m0">Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.</p>
						</div>
					</Grid>
				</Grid>
			</Container>

			<Container className="-has-background" background="var(--c-primary-dark)">
				<SectionBar count="2.0" title="Clients" />
				<Grid cols="1.75fr 1fr" gap="var(--sp-2xl)" pBottom="var(--sp-2xl)">
					<h2 className="-lh-1 -m0 -fs-2xl -dots -dots-l"><span className="-grad-header">We know what we are doing. Here is a list.</span></h2>
					<p className="-c-wolf-gray -m0">Do we need this? maybe, who cares. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.</p>
				</Grid>
				<Image
					src="/images/trustbar.png"
					layout="responsive"
					width="1372"
					height="342"
				/>
				<Carousel
					infiniteLoop
					showIndicators={false}
					showStatus={false}
					showThumbs={false}
					renderArrowNext={(onClickHandler, hasNext, label) =>
						hasNext && (
							<button className="arrow -next" type="button" onClick={onClickHandler} title={label}>
								<Arrow fill="var(--c-white)" />
							</button>
						)
					}
					renderArrowPrev={(onClickHandler, hasPrev, label) =>
						hasPrev && (
							<button className="arrow -prev" type="button" onClick={onClickHandler} title={label}>
								<Arrow fill="var(--c-white)" />
							</button>
						)
					}
				>
					<div>
						<blockquote>
							They even took the time for in-depth research before calls which proved to me they understood the history and path.
						</blockquote>
						<figcaption>Body Johnson<br />CEO &amp; Owner, BackForty Management</figcaption>
					</div>
					<div>
						<blockquote>
							They even took the time for in-depth research before calls which proved to me they understood the history and path.
						</blockquote>
						<figcaption>Body Johnson<br />CEO &amp; Owner, BackForty Management</figcaption>
					</div>
				</Carousel>
			</Container>


			<Container className="-has-background" background="var(--c-primary-dark)">
				<SectionBar count="3.0" title="Team" />
				<Grid cols="1.75fr 1fr" gap="var(--sp-2xl)" pBottom="var(--sp-2xl)">
					<h2 className="-lh-1 -m0 -fs-2xl -grad-header">We are a three person team kicking ass</h2>
					<p className="-c-wolf-gray -m0">Do we need this? maybe, who cares. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.</p>
				</Grid>

				<Grid cols="repeat(3, 1fr)" gap="var(--sp-m)" pBottom="var(--sp-2xl)">
					<motion.div style={{ y: danielAnim, opacity: teamOpacityAnim }} className="-stagger">
						<StyledGridItem>
							<div className="team-img">
								<Image
									src="/images/daniel.jpeg"
									layout="responsive"
									width="396"
									height="547"
								/>
							</div>
							<h2 className="-m0 -lh-1 -fw-700">Daniel Luke</h2>
							<h5 className="-m0 -serif">Partner, Creative Director</h5>
						</StyledGridItem>
					</motion.div>
					<motion.div style={{ y: kellyAnim, opacity: teamOpacityAnim }} className="-stagger">
						<StyledGridItem>
							<div className="team-img">
								<Image
									src="/images/kelly.jpeg"
									layout="responsive"
									width="396"
									height="547"
								/>
							</div>
							<h2 className="-m0 -lh-1 -fw-700">Kelly Bleck</h2>
							<h5 className="-m0 -serif">Partner, Developer</h5>
						</StyledGridItem>
					</motion.div>
					<motion.div style={{ y: domAnim, opacity: teamOpacityAnim }} className="-stagger">
						<StyledGridItem>
							<div className="team-img">
								<Image
									src="/images/dom.jpeg"
									layout="responsive"
									width="396"
									height="547"
								/>
							</div>
							<h2 className="-m0 -lh-1 -fw-700">Dominic Magnifico</h2>
							<h5 className="-m0 -serif">Partner, Developer</h5>
						</StyledGridItem>
					</motion.div>
				</Grid>
			</Container>

			<Contact
				className={showForm ? '-active' : ''}
				background="linear-gradient(-270deg, var(--c-neon-sky) 0%, var(--c-cyber-green) 80%, var(--c-white) 80% 100%)"
				pTop="calc(var(--sp-2xl) * 2)"
				pBottom="calc(var(--sp-2xl) * 2)"
			>
				<Grid cols="2fr 1fr" gap="var(--sp-m)" pBottom="var(--sp-2xl)" onClick={() => showForm ? setShowForm(false) : null}>
					<Dots opacity="0.1">
						<h2 className="-lh-1 -fw-700">Let's Build something amazing and become BFF's</h2>
						<p>Do we need this? Maybe, who cares. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue.</p>
						<Button href="#contact" onClick={() => setShowForm(true)}>Let me fill out a form <Arrow width="13" height="13" /></Button>
					</Dots>
				</Grid>

				<CircleGrad solid onClick={() => setShowForm(!showForm)}>
					<Explore fill="var(--c-white)" />
					<Arrow fill="var(--c-white)" />
				</CircleGrad>

				<div id="contact" className="form" onClick={() => setShowForm(true)}>
					{!contactSuccess ? (
						<AnimatePresence>
							<motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit(onSubmit)} ref={formEl}>
								<div className="form-group">
									<label htmlFor="name">Your Name</label>
									<input
										id="name"
										{...register('name')}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="email">Email Address</label>
									<input
										id="email"
										type="email"
										{...register('email')}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="project-type">Project type</label>
									<select id="project-type" {...register('project')}>
										<option>Web Design &amp; Development - starting at $10k</option>
										<option>Product Branding - starting at $5k</option>
										<option>Product Development - starting at $15k</option>
										<option>Unsure - I just have a great idea!</option>
									</select>
								</div>

								<div className="form-group">
									<label htmlFor="desc">Tell us a little about how we can help</label>
									<textarea id="desc" {...register('desc')} rows="6"></textarea>
								</div>

								<div style={{ color: 'red' }}>
									{Object.keys(errors).length > 0 &&
										'There are errors, check your console.'}
								</div>

								<Button type="submit">Submit</Button>
							</motion.form>
						</AnimatePresence>
					): (
						<AnimatePresence>
							<motion.h2 initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} className="-serif -lh-1">🤘 Thanks for reaching out! We'll get in touch with you as quickly as possible.</motion.h2>
						</AnimatePresence>
					)}
				</div>
			</Contact>
		</>
	)
}