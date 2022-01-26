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
import { StyledSocial } from '@/components/Social/StyledSocial';
import Twerk from '@/components/SVG/Twerk';

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
	const kellyAnim = useTransform(scrollYProgress, [0.75, 0.8], [isBig ? 400 : 0, 0 ]);
	const domAnim = useTransform(scrollYProgress, [0.7, 0.8], [isBig ? 550 : 0, 0 ]);
	const danielAnim = useTransform(scrollYProgress, [0.7, 0.8], [isBig ? 250 : 0, 0 ]);
	const teamOpacityAnim = useTransform(scrollYProgress, [0.7, 0.8], [isBig ? 0 : 1, 1 ]);
	const opacityAnim = useTransform(scrollYProgress, [0.1, 0.15], [1, 0]);

	return (
		<>
			<Container ref={mouseEl} onMouseEnter={() => setCursor(true)} onMouseLeave={() => setCursor(false)} stick={true}>
				<AnimatePresence>
					{cursor && <Cursor el={mouseEl} video={videoEl} setPlaying={setPlaying} isPlaying={isPlaying} />}
				</AnimatePresence>
				<motion.div style={{ scale: scaleAnim, opacity: opacityAnim }}>
					<Video poster="/images/poster.jpg" controls ref={videoEl} onClick={() => handlePlayPause()} loop>
						<source src="/video/reel2022.mp4" type="video/webm" />
						<source src="/video/reel2022.mp4" type="video/mp4" />
					</Video>
				</motion.div>
			</Container>

			<Container className="-has-background" background="var(--c-primary-dark)" pTop="calc(var(--sp-2xl) * 2)" pBottom="calc(var(--sp-2xl) * 2)">
				<Dots>
					<h3>Our values &amp; ethos</h3>
					<p className="h2 -uppercase -lh-2">Dreaming of innovation.<br />Experimenting with passion.<br />Creating with purpose.<br />We are a Digital Interactive Studio Focused on creating <span className="-cross">fucking</span> beautiful, bold, thoughtfully crafted websites.</p>
					<p className="h1">We help you become impossible to ignore.</p>
				</Dots>
			</Container>

			<Container className="-has-background" background="var(--c-primary-dark)" pBottom="calc(var(--sp-2xl) * 4)">
				<SectionBar count="1.0" title="Services" />
				<Grid cols="1.75fr 1fr" gap="var(--sp-2xl)" pBottom="var(--sp-2xl)">
					<h2 className="-lh-1 -m0 -fs-2xl -dots"><span className="-grad-header">We&apos;ll handle the black magic so you don&apos;t have to dabble in the dark arts.</span></h2>
					<p className="-c-wolf-gray -m0">Denver based and Colorado raised, we have been honing our craft for over a decade. From strategy to user experience, to design and development, we know how to creatively solve complex problems on the web.</p>
				</Grid>
				<Grid cols="repeat(2, 1fr)" gap="var(--sp-2xl)" pBottom="var(--sp-xl)" align="start">
					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">01</p>
						<div>
							<h4>Digital strategy </h4>
							<p className="-m0">It's important to have a strategy as solid as<br />Dwayne "The Rock" Johnson. Each project we are a part of deserves a thoughtful and detail oriented approach. We'll work with you as a strategic partner to establish the best path forward for your specific needs.</p>
						</div>
					</Grid>

					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">02</p>
						<div>
							<h4>User experience</h4>
							<p className="-m0">User experience strategy and desgin is unique to your project. We&apos;re not going to throw trashy buzzwords your way unless they'll provide true benefit to you and your users.</p>
						</div>
					</Grid>
				</Grid>

				<Grid cols="repeat(2, 1fr)" gap="var(--sp-2xl)" pTop="var(--sp-2xl)" pBottom="var(--sp-2xl)" align="start">
					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">03</p>
						<div>
							<h4>User interfaces</h4>
							<p className="-m0">We&apos;ve worked our asses off to be able flex our creative muscles at will, and we are <strong><em>ripped</em></strong>. We get pumped up like Arnold to be able to show you the unique visual designs we come up with for your brand.</p>
						</div>
					</Grid>

					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">04</p>
						<div>
							<h4>Development</h4>
							<p className="-m0">We take an absurd amount of pride in the code we write. Performace, accessibility, and scalability are built into everything we do from the start. Your socks won't grow with your feet. On the other foot, our code will grow with you as your business scales.</p>
						</div>
					</Grid>
				</Grid>
			</Container>

			<Container className="-has-background" background="var(--c-primary-dark)" pBottom="calc(var(--sp-2xl) * 2)">
				<SectionBar count="2.0" title="Clients" />
				<Grid cols="1.75fr 1fr" gap="var(--sp-2xl)" pBottom="var(--sp-2xl)">
					<h2 className="-lh-1 -m0 -fs-2xl -dots -dots-l"><span className="-grad-header">We know what we&apos;re doing. They can attest.</span></h2>
					<p className="-c-wolf-gray -m0">This is just a short list of the kick ass partners we&apos;ve worked with. A tiny logo in a trust bar will never express the true gratitude for every partner we&apos;ve engaged with over the years.</p>
				</Grid>
				<Grid cols="repeat(auto-fit, minmax(114px, 220px))" pTop="var(--sp-2xl)" gap="var(--sp-xl)" justify="center">
					<div className="logo">
						<Image
							src="/images/microsoft.png"
							layout="fixed"
							width="157"
							height="96"
						/>
					</div>
					<div className="logo">
						<Image
							src="/images/purdue.png"
							layout="fixed"
							width="169"
							height="48"
						/>
					</div>
					<div className="logo">
						<Image
							src="/images/uber.png"
							layout="fixed"
							width="163"
							height="99"
						/>
					</div>
					<div className="logo">
						<Image
							src="/images/botanic-gardens.png"
							layout="fixed"
							width="182"
							height="51"
						/>
					</div>
					<div className="logo">
						<Image
							src="/images/comcast.png"
							layout="fixed"
							width="210"
							height="46"
						/>
					</div>
					<div className="logo">
						<Image
							src="/images/ea.png"
							layout="fixed"
							width="114"
							height="114"
						/>
					</div>
					<div className="logo">
						<Image
							src="/images/shakey.png"
							layout="fixed"
							width="151"
							height="151"
						/>
					</div>
					<div className="logo">
						<Image
							src="/images/pacers.png"
							layout="fixed"
							width="114"
							height="114"
						/>
					</div>
					<div className="logo">
						<Image
							src="/images/nobel.png"
							layout="fixed"
							width="114"
							height="89"
						/>
					</div>
					<div className="logo">
						<Image
							src="/images/salesforce.png"
							layout="fixed"
							width="163"
							height="114"
						/>
					</div>
				</Grid>
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
						<figcaption>Bodie Johnson<br />CEO &amp; Owner, BackForty Management</figcaption>
					</div>
					<div>
						<blockquote>
							I was most impressed with how seriously they took my ideas and incorporated them into their awesome design ability.
						</blockquote>
						<figcaption>Sheryl Glubok<br />Independent Filmmaker</figcaption>
					</div>
					<div>
						<blockquote>
							The outcome has been fantastic, as we&apos;re successfully generating new people who want to get involved in our program.
						</blockquote>
						<figcaption>Ann Marie Beresford<br />Executive Director, Adaptive Sports Association</figcaption>
					</div>
					<div>
						<blockquote>
							House of Giants was really forward-thinking in their design.
						</blockquote>
						<figcaption>Devan Crean<br />Former Marketing &amp; Communications Manager, Air Methods</figcaption>
					</div>
					<div>
						<blockquote>
							They do a great job at getting to know the brand and investing in our collaboration.
						</blockquote>
						<figcaption>Katie Zak<br />Marketing Director, Untapped Learning</figcaption>
					</div>
				</Carousel>
			</Container>


			<Container className="-has-background" background="var(--c-primary-dark)" pBottom="calc(var(--sp-2xl) * 2)">
				<SectionBar count="3.0" title="Team" />
				<Grid cols="1.75fr 1fr" gap="var(--sp-2xl)" pBottom="var(--sp-2xl)">
					<h2 className="-lh-1 -m0 -fs-2xl -grad-header">We are a three person team kicking ass</h2>
					<p className="-c-wolf-gray -m0">Ten years of dreaming, aspiring, and pushing each other to be creative in the pursuit of lifelong web design and development mastery.</p>
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
							<h4 className="-m0 -lh-1 -fw-700">Daniel Luke</h4>
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
							<h4 className="-m0 -lh-1 -fw-700">Kelly Bleck</h4>
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
							<h4 className="-m0 -lh-1 -fw-700">Dominic Magnifico</h4>
							<h5 className="-m0 -serif">Partner, Developer</h5>
						</StyledGridItem>
					</motion.div>
				</Grid>
			</Container>

			<Contact
				id="contact"
				className={showForm ? '-active' : ''}
				background="linear-gradient(-270deg, var(--c-neon-sky) 0%, var(--c-cyber-green) 80%, var(--c-white) 80% 100%)"
				pTop="var(--sp-2xl)"
				pBottom="var(--sp-2xl)"
			>
				<Grid cols="2fr 1fr" gap="var(--sp-m)" pBottom="var(--sp-2xl)" onClick={() => showForm ? setShowForm(false) : null}>
					<Dots opacity="0.1">
						<h2 className="-lh-1 -fw-700">Let&apos;s build something amazing together</h2>
						<p>Whether you have a fully fleshed out idea, or just want to talk through options, we'd love to chat with you. Give us some quick information that will help us better understand your needs, and we'll let you know the options.</p>
						<Button href="#contact" onClick={() => setShowForm(true)}>Let me fill out a form <Arrow width="13" height="13" /></Button>
					</Dots>
				</Grid>

				<CircleGrad solid onClick={() => setShowForm(!showForm)}>
					<Twerk fill="var(--c-white)" />
					<Arrow fill="var(--c-white)" />
				</CircleGrad>

				<div className="form" onClick={() => setShowForm(true)}>
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

			<StyledSocial className={showForm ? '-active' : ''}>
				<Container pBottom="var(--sp-s)">
					<ul>
						<li><a href="https://twitter.com/_houseofgiants" target="_blank">Twitter <Arrow width="10" height="10" /></a></li>
						<li><a href="https://www.instagram.com/_houseofgiants/" target="_blank">Instagram <Arrow width="10" height="10" /></a></li>
						<li><a href="https://www.linkedin.com/company/house-of-giants" target="_blank">LinkedIn <Arrow width="10" height="10" /></a></li>
					</ul>

					<p className="-fw-500 -m0">&copy;{new Date().getFullYear()} House of Giants</p>
				</Container>
			</StyledSocial>
		</>
	)
}