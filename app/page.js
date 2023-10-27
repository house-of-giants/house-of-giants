'use client';

import Image from 'next/image';

import { Container } from '@/components/Container/Container';
import ContactForm from '@/components/Contact/ContactForm';
import { Dots } from '@/components/Dots/Dots';
import { Grid } from '@/components/Grid/Grid';
import Reel from '@/components/Reel/Reel';
import { SectionBar } from '@/components/SectionBar/SectionBar';
import Team from '@/components/Team/Team';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Page() {
	return (
		<div className="space-y-4">
			<Reel />
			<Container
				className="-has-background -m-nop"
				background="var(--c-primary-dark)"
				pt="calc(var(--sp-2xl) * 2)"
				pb="calc(var(--sp-2xl) * 2)"
			>
				<Dots>
					<h3>Our values &amp; ethos</h3>
					<p className="h2 -uppercase -lh-2 -m-sm">
						Dreaming of innovation. Experimenting with passion. Creating with purpose. We are a Digital Interactive
						Studio Focused on creating <span className="-cross">fucking</span> beautiful, bold, thoughtfully crafted
						websites.
					</p>
					<p className="h1">We help you become impossible to ignore.</p>
				</Dots>
			</Container>

			<Container className="-has-background" background="var(--c-primary-dark)" pb="calc(var(--sp-2xl) * 4)">
				<SectionBar count="1.0" title="Services" />
				<Grid cols="1.75fr 1fr" gap="var(--sp-2xl)" pb="var(--sp-2xl)">
					<h2 className="-lh-1 -m0 -fs-2xl -dots">
						<span className="-grad-header">
							We&apos;ll handle the black magic so you don&apos;t have to dabble in the dark arts.
						</span>
					</h2>
					<p className="-c-wolf-gray -m0">
						Denver based and Colorado raised, we have been honing our craft for over a decade. From strategy to user
						experience, to design and development, we know how to creatively solve complex problems on the web.
					</p>
				</Grid>
				<Grid cols="repeat(2, 1fr)" gap="var(--sp-2xl)" pb="var(--sp-xl)" align="start">
					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">01</p>
						<div>
							<h4>Digital strategy </h4>
							<p className="-m0">
								It's important to have a strategy as solid as
								<br />
								Dwayne "The Rock" Johnson. Each project we are a part of deserves a thoughtful and detail oriented
								approach. We'll work with you as a strategic partner to establish the best path forward for your
								specific needs.
							</p>
						</div>
					</Grid>

					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">02</p>
						<div>
							<h4>User experience</h4>
							<p className="-m0">
								User experience strategy and design is unique to your project. We&apos;re not going to throw trashy
								buzzwords your way unless they'll provide true benefit to you and your users.
							</p>
						</div>
					</Grid>
				</Grid>

				<Grid cols="repeat(2, 1fr)" gap="var(--sp-2xl)" pt="var(--sp-2xl)" pb="var(--sp-2xl)" align="start">
					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">03</p>
						<div>
							<h4>User interfaces</h4>
							<p className="-m0">
								We&apos;ve worked our asses off to be able flex our creative muscles at will, and we are{' '}
								<strong>
									<em>ripped</em>
								</strong>
								. We get pumped up like Arnold to be able to show you the unique visual designs we come up with for your
								brand.
							</p>
						</div>
					</Grid>

					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">04</p>
						<div>
							<h4>Development</h4>
							<p className="-m0">
								We take an absurd amount of pride in the code we write. Performace, accessibility, and scalability are
								built into everything we do from the start. Your socks won't grow with your feet. On the other foot, our
								code will grow with you as your business scales.
							</p>
						</div>
					</Grid>
				</Grid>
			</Container>
			<Container className="-has-background" background="var(--c-primary-dark)" pb="calc(var(--sp-2xl) * 2)">
				<SectionBar count="2.0" title="Clients" />
				<Grid cols="1.75fr 1fr" gap="var(--sp-2xl)" pb="var(--sp-2xl)">
					<h2 className="-lh-1 -m0 -fs-2xl -dots -dots-l">
						<span className="-grad-header">We know what we&apos;re doing. They can attest.</span>
					</h2>
					<p className="-c-wolf-gray -m0">
						This is just a short list of the kick ass partners we&apos;ve worked with. A tiny logo in a trust bar will
						never express the true gratitude for every partner we&apos;ve engaged with over the years.
					</p>
				</Grid>
				<Grid cols="repeat(auto-fit, minmax(114px, 220px))" pt="var(--sp-2xl)" gap="var(--sp-xl)" justify="center">
					<div className="logo">
						<Image alt="Microsoft" src="/images/microsoft.png" width="157" height="96" />
					</div>
					<div className="logo">
						<Image alt="Purdue" src="/images/purdue.png" width="169" height="48" />
					</div>
					<div className="logo">
						<Image alt="Uber" src="/images/uber.png" width="163" height="99" />
					</div>
					<div className="logo">
						<Image alt="Denver Botanic Gardens" src="/images/botanic-gardens.png" width="182" height="51" />
					</div>
					<div className="logo">
						<Image alt="Comcast" src="/images/comcast.png" width="210" height="46" />
					</div>
					<div className="logo">
						<Image alt="Electronic Arts" src="/images/ea.png" width="114" height="114" />
					</div>
					<div className="logo">
						<Image alt="Shakey Graves" src="/images/shakey.png" width="151" height="151" />
					</div>
					<div className="logo">
						<Image alt="Indiana Pacers" src="/images/pacers.png" width="114" height="114" />
					</div>
					<div className="logo">
						<Image alt="The Nobel Prize" src="/images/nobel.png" width="114" height="89" />
					</div>
					<div className="logo">
						<Image alt="Salesforce" src="/images/salesforce.png" width="163" height="114" />
					</div>
				</Grid>
				<Testimonials />
			</Container>

			<Container className="-has-background" background="var(--c-primary-dark)" pb="calc(var(--sp-2xl) * 2)">
				<SectionBar count="3.0" title="Team" />
				<Grid cols="1.75fr 1fr" gap="var(--sp-2xl)" pb="var(--sp-2xl)">
					<h2 className="-lh-1 -m0 -fs-2xl -grad-header">We are a three person team kicking ass</h2>
					<p className="-c-wolf-gray -m0">
						Ten years of dreaming, aspiring, and pushing each other to be creative in the pursuit of lifelong web design
						and development mastery.
					</p>
				</Grid>

				<Team />
			</Container>

			<ContactForm />
		</div>
	);
}
