'use client';

import Image from 'next/image';

import { Container } from '@/components/Container/Container';
import ContactForm from '@/components/Contact/ContactForm';
import { Dots } from '@/components/Dots/Dots';
import { Grid } from '@/components/Grid/Grid';
import Reel from '@/components/Reel/Reel';
import { SectionBar } from '@/components/SectionBar/SectionBar';
import Testimonials from '@/components/Testimonials/Testimonials';
import CaseCard from '@/components/Cards/CaseCard';

const work = [
	{
		title: 'Shakey Graves',
		type: ['Design', 'Development'],
		img: '/images/shakeycard.jpg',
		url: '/work/shakey-graves',
	},
	{
		title: 'Hayashi',
		type: ['Design', 'Development'],
		img: '/images/hayashicard.jpg',
		url: '/work/hayashi',
	},
	{
		title: 'BackForty',
		type: ['Design', 'Development'],
		img: '/images/backfortycard.jpg',
		url: '/work/backforty',
	},
];

export default function Page() {
	return (
		<main>
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
					<h2 className="-lh-1 -m0 -fs-2xl -dots font-bold">
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
								We take an absurd amount of pride in the code we write. Performance, accessibility, and scalability are
								built into everything we do from the start. Your socks won't grow with your feet. On the other foot, our
								code will grow with you as your business scales.
							</p>
						</div>
					</Grid>
				</Grid>
				<Grid cols="1.75fr" gap="var(--sp-2xl)" pb="var(--sp-2xl)" pt="var(--sp-2xl)">
					<h2 className="-lh-1 -m0 -fs-2xl -dots font-bold">
						<span className="-grad-header">We don't worship at the digital altar.</span>
					</h2>
					<p className="-m0">
						In our industry, technology changes faster than we change our socks (which is often, I promise). That's why
						we consider ourselves tech agnostic. We'll never prescribe to you a set of technology just because it's the
						new hotness, or because it's what we're most comfortable with. We make suggestions based on your needs, and
						choose technologies that will grow with your business. Here are a few that we like right now:
					</p>
				</Grid>
				<Grid cols="repeat(2, 1fr)" gap="var(--sp-2xl)" pt="var(--sp-2xl)" pb="var(--sp-2xl)" align="start">
					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">01</p>
						<div>
							<h4>WordPress 😱</h4>
							<p className="-m0">
								I know, I know, WordPress has a bad rap. But once you experience a finely crafted, custom WordPress
								theme from us, you'll never want to go back. Our experience building lean, efficient, and performant
								WordPress websites comes from years of experience with the platform. We don't load you up with plugins,
								or pre-built themes that are more bloated than we are after a seven course Italian meal. We build{' '}
								<em>using core technology within WordPress</em> to give you ultimate flexibility and control over your
								content.
							</p>
						</div>
					</Grid>

					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">02</p>
						<div>
							<h4>NextJS 😎</h4>
							<p className="-m0">
								We love React and NextJS right now. Dynamic applications, self contained and scalable technology all
								wrapped up into a fantastic developer experience. When it comes to building web apps NextJS is a
								phenomenal option. The community is robust, and the future is bright for a framework as flexible as
								Next. You can even pair it <em>with WordPress</em> as a headless CMS to combine the superpowers of both
								worlds. ✨ Magic ✨
							</p>
						</div>
					</Grid>
				</Grid>
				<Grid cols="repeat(2, 1fr)" gap="var(--sp-2xl)" pt="var(--sp-2xl)" pb="var(--sp-2xl)" align="start">
					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">03</p>
						<div>
							<h4>ThreeJS 🤯</h4>
							<p className="-m0">
								The sheer amount of incredible 3d rendering capabilities within ThreeJS is mind blowing. If you can
								dream it in 3d space, ThreeJS can build it. From a{' '}
								<a
									href="https://shakeygraves.com"
									target="_blank"
									rel="noopener"
									style={{ textDecoration: 'underline' }}
								>
									wall of old TVs
								</a>{' '}
								to a fully immersive 3d world, ThreeJS, using WebGL and some other voodoo to render this stuff on the
								screen, is an incredible option for your loftiest and most ambitious website fever dreams.
							</p>
						</div>
					</Grid>

					<Grid cols="1fr 10fr" gap="var(--sp-m)" align="start">
						<p className="-m0 -serif">02</p>
						<div>
							<h4>AI in general 🤖</h4>
							<p className="-m0">
								It goes without saying but AI is fascinating. There are so many practical applications for AI in web
								applications and websites. Analyzing large swathes of content and making suggestions, summarizing,
								researching, creative storytelling, the list goes on and on. If you have a solid data set, you can
								benefit from AI. The things we can do with it are both terrifying and exciting. But it's okay, we'll
								have each other to ensure that things don't run wild. I know I don't want to end up like John Connor
								running away from Arnold Schwarzenegger.
							</p>
						</div>
					</Grid>
				</Grid>
			</Container>
			<Container className="-has-background" background="var(--c-primary-dark)" pb="calc(var(--sp-2xl) * 2)">
				<SectionBar count="2.0" title="Work" />
				<div className="grid md:grid-flow-col gap-10 grid-cols-1 md:auto-cols-fr">
					{work.map(({ title, type, img, url }) => (
						<CaseCard key={url} title={title} img={img} url={url} type={type} />
					))}
				</div>
			</Container>
			<Container className="-has-background" background="var(--c-primary-dark)" pb="calc(var(--sp-2xl) * 2)">
				<SectionBar count="3.0" title="Clients" />
				<Grid cols="1.75fr 1fr" gap="var(--sp-2xl)" pb="var(--sp-2xl)">
					<h2 className="-lh-1 -m0 -fs-2xl -dots -dots-l font-bold">
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

			<ContactForm />
			<Container className="-has-background" background="var(--c-primary-dark)" pb="calc(var(--sp-2xl) * 2)">
				<SectionBar count="4.0" title="Team" />
				<Grid cols="1.75fr 1fr" gap="var(--sp-2xl)" pb="var(--sp-2xl)">
					<h2 className="-lh-1 -m0 -fs-2xl -grad-header font-bold">Nothing short of GIANT.</h2>
					<p className="-c-wolf-gray -m0">
						10+ years of dreaming, aspiring, and honing our craft in the pursuit of lifelong web design and development
						mastery.
					</p>
				</Grid>
			</Container>
		</main>
	);
}
