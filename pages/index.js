import { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';

import { Container } from '@/components/Container/Container';
import { Cursor } from '@/components/Cursor/Cursor';
import { Dots } from '@/components/Dots/Dots';
import { Video } from '@/components/Video/Video';	
import { SectionBar } from '@/components/SectionBar/SectionBar';
import { Grid } from '@/components/Grid/Grid';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Arrow from '@/components/SVG/Arrow';
import { StyledGridItem } from '@/components/Grid/StyledGridItem';
import { Button } from '@/components/Button/Button';
import { Contact } from '@/components/Contact/Contact';
import { CircleGrad } from '@/components/Cursor/StyledCursor';
import Explore from '@/components/SVG/Explore';

export default function Home() {
	const [cursor, setCursor] = useState(false);
	const [isPlaying, setPlaying] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const mouseEl = useRef(null);
	const videoEl = useRef(null);

	const handlePlayPause = () => {
		setPlaying(!isPlaying);

		if(isPlaying) {
			videoEl.current.pause();
		} else {
			videoEl.current.play();
		}
	}

	return (
		<>
			<Container ref={mouseEl} onMouseEnter={() => setCursor(true)} onMouseLeave={() => setCursor(false)}>
				<AnimatePresence>
					{cursor && <Cursor el={mouseEl} video={videoEl} setPlaying={setPlaying} isPlaying={isPlaying} />}
				</AnimatePresence>
				<Video poster="/images/poster.jpg" controls ref={videoEl} onClick={() => handlePlayPause()}>
					<source src="/video/reel2022.mp4" type="video/webm" />
					<source src="/video/reel2022.mp4" type="video/mp4" />
				</Video>
			</Container>

			<Container className="-has-background" background="var(--c-primary-dark)" pTop="calc(var(--sp-2xl) * 2)">
				<Dots>
					<h3>Our values &amp; ethos</h3>
					<p className="h2 -uppercase">Dreaming of innovation. Experimenting with passion. Creating with purpose. We believe creativity &amp; Technology can change the world right after punk does.</p>
					<p className="h1 -uppercase">We create Digital experiences that<br />people love to use.</p>
				</Dots>
			</Container>

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
					<StyledGridItem className="-stagger">
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
					<StyledGridItem className="-stagger">
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
					<StyledGridItem className="-stagger">
						<div className="team-img">
							<Image
								src="/images/daniel.jpeg"
								layout="responsive"
								width="396"
								height="547"
							/>
						</div>
						<h2 className="-m0 -lh-1 -fw-700">Dominic Magnifico</h2>
						<h5 className="-m0 -serif">Partner, Developer</h5>
					</StyledGridItem>
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
						<Button onClick={() => setShowForm(true)}>Let me fill out a form <Arrow width="13" height="13" /></Button>
					</Dots>
				</Grid>

				<CircleGrad onClick={() => setShowForm(true)}>
					<Explore />
					<Arrow />
				</CircleGrad>

				<div className="form" onClick={() => setShowForm(true)}>
					<h1>Form</h1>
				</div>
			</Contact>
		</>
	)
}