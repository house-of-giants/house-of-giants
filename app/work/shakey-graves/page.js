'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/Button/Button';
import { Container } from '@/components/Container/Container';
import ContactForm from '@/components/Contact/ContactForm';
import { CircleGrad } from '@/components/Cursor/StyledCursor';
import Mark from '@/components/SVG/Mark';
import Love from '@/components/SVG/Love';

export default function ShakeyGraves() {
	return (
		<>
			<Container as="article">
				<header className="flex flex-col items-center justify-center">
					<h1 className="text-center mb-0">
						Shakey Graves
						<br />
						Movie of the week
					</h1>
					<h4 className="font-bold text-center mb-4">Design + Development</h4>
					<Button href="https://shakeygraves.com" target="_blank" rel="noopener" className="-link">
						Visit live site
					</Button>
				</header>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, ease: 'easeInOut', duration: 1 }}
					viewport={{ once: true, margin: '200px' }}
					className="aspect-[27/13] relative my-12"
				>
					<Image
						src="/images/shakeycase1.jpg"
						fill
						loading="lazy"
						alt="Wide shot of Shakey Graves Movie of The Week album cover."
					/>
				</motion.div>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					Shakey Graves, the globally acclaimed artist, embarked on a remarkable musical journey with his latest album,
					"Movie of the Week." The album's unique concept was to create a film score for a fictional movie, resulting in
					a multifaceted collection of song versions that explore various dimensions of the same tracks. This audacious
					endeavor presented an opportunity to engage fans in an interactive and innovative way.
				</p>
				<motion.figure
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, ease: 'easeInOut', duration: 1 }}
					viewport={{ once: true, margin: '200px' }}
				>
					<div className="aspect-[27/13] relative my-12">
						<Image src="/images/shakeycase2.jpg" fill alt="" />
					</div>
					<figcaption className="text-lg font-serif leading-10 italic">01 - Shakey Graves - homepage</figcaption>
				</motion.figure>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					The challenge was to introduce a diverse array of song versions within the album and allow fans to interact
					with them, ultimately crafting their own "Movie of the Week" soundtrack. Fans' input would generate a unique
					album title, artwork, and a movie synopsis, all powered by A.I.
				</p>
				<motion.figure
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, ease: 'easeInOut', duration: 1 }}
					viewport={{ once: true, margin: '200px' }}
				>
					<div className="aspect-[27/13] relative">
						<Image src="/images/shakeycase3.jpg" loading="lazy" fill alt="" />
					</div>
					<figcaption className="text-lg font-serif leading-10 italic">
						02 - Shakey Graves - homepage - mobile
					</figcaption>
				</motion.figure>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					Drawing inspiration from the album artwork, which featured a wall of TV screens, our creative concept centered
					on recreating this visual motif within an interactive web experience. Users could navigate the site by
					exploring a wall of TVs playing Shakey Graves' retro-style videos. This immersive journey led users to the
					heart of the experience: the "Movie of the Week" generator page.
				</p>
				<motion.figure
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, ease: 'easeInOut', duration: 1 }}
					viewport={{ once: true, margin: '200px' }}
				>
					<div className="aspect-[27/13] relative">
						<Image src="/images/shakeycase4.jpg" loading="lazy" fill alt="" />
					</div>
					<figcaption className="text-lg font-serif leading-10 italic">
						03 - Shakey Graves - soundtrack generator
					</figcaption>
				</motion.figure>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					On this page, users were prompted to input their preferred movie genre. Their input triggered the generation
					of a unique tailored page that consisted of artwork, movie title, movie synopsis and a film score to match.
					This personalized experience empowered users to create, listen to, and even purchase their unique album.
				</p>
				<motion.figure
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, ease: 'easeInOut', duration: 1 }}
					viewport={{ once: true, margin: '200px' }}
					className="grid lg:grid-cols-2 gap-4 lg:gap-y-0 gap-x-6"
				>
					<div className="aspect-square relative">
						<Image
							src="/images/shakeycase5.jpg"
							loading="lazy"
							className="aspect-square"
							height={652}
							width={659}
							alt=""
						/>
					</div>
					<div className="aspect-square relative">
						<Image
							src="/images/shakeycase6.jpg"
							loading="lazy"
							className="aspect-square"
							height={652}
							width={659}
							alt=""
						/>
					</div>
					<figcaption className="text-lg font-serif leading-10 italic">
						04 - Shakey Graves - generated soundtrack - mobile
					</figcaption>
				</motion.figure>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					This innovative tool not only captivated users with its uniqueness but also had a substantial impact on his
					website's performance. In the first week after the site's launch, we witnessed an impressive 91% surge in new
					user visits and a remarkable 285% increase in page views. As a result, his new album experienced a steady rise
					in sales.
				</p>
				<div className="text-3xl lg:text-4xl text-white leading-tight bg-gray-950 p-12 lg:py-24 lg:px-48 relative">
					<blockquote className="font-semibold max-w-[39ch]">
						<svg
							className="mb-8"
							xmlns="http://www.w3.org/2000/svg"
							width="73"
							height="65"
							viewBox="0 0 73 65"
							fill="none"
						>
							<path
								d="M0 40.4268C0 28.4485 1.67512 19.8171 5.02536 14.5325C8.3756 9.07182 14.4589 4.22764 23.2754 0L33.3261 15.061C26.8019 18.7602 23.0109 21.8428 21.9529 24.3089C21.0713 26.5989 20.6304 28.7127 20.6304 30.6504H33.0616V65H0V40.4268ZM39.6739 40.4268C39.6739 28.4485 41.2609 19.8171 44.4348 14.5325C47.785 9.07182 53.9565 4.22764 62.9493 0L73 15.061C66.4758 18.7602 62.6848 21.8428 61.6268 24.3089C60.5688 26.5989 60.0399 28.7127 60.0399 30.6504H72.7355V65H39.6739V40.4268Z"
								fill="url(#paint0_linear_45_105)"
							/>
							<defs>
								<linearGradient id="paint0_linear_45_105" x1="73" y1="65" x2="0" y2="65" gradientUnits="userSpaceOnUse">
									<stop stopColor="#C1FF1D" />
									<stop offset="1" stopColor="#00FFE0" />
								</linearGradient>
							</defs>
						</svg>
						I can&apos;t thank you enough for never halting, diminishing or deflecting our vision. Instead, you threw
						gas on the fire and guided us to make it OUR collective reality. You led us professionally to a site I
						can&apos;t imagine anyone has envisioned before.
						<svg
							className="rotate-180 inline h-4 w-auto -mt-5"
							xmlns="http://www.w3.org/2000/svg"
							width="73"
							height="65"
							viewBox="0 0 73 65"
							fill="none"
						>
							<path
								d="M0 40.4268C0 28.4485 1.67512 19.8171 5.02536 14.5325C8.3756 9.07182 14.4589 4.22764 23.2754 0L33.3261 15.061C26.8019 18.7602 23.0109 21.8428 21.9529 24.3089C21.0713 26.5989 20.6304 28.7127 20.6304 30.6504H33.0616V65H0V40.4268ZM39.6739 40.4268C39.6739 28.4485 41.2609 19.8171 44.4348 14.5325C47.785 9.07182 53.9565 4.22764 62.9493 0L73 15.061C66.4758 18.7602 62.6848 21.8428 61.6268 24.3089C60.5688 26.5989 60.0399 28.7127 60.0399 30.6504H72.7355V65H39.6739V40.4268Z"
								fill="url(#paint0_linear_45_105)"
							/>
							<defs>
								<linearGradient id="paint0_linear_45_105" x1="73" y1="65" x2="0" y2="65" gradientUnits="userSpaceOnUse">
									<stop stopColor="#C1FF1D" />
									<stop offset="1" stopColor="#00FFE0" />
								</linearGradient>
							</defs>
						</svg>
					</blockquote>
					<figcaption className="pt-8">
						Bodie Johnson
						<br />
						<span className="text-gray-600">Shakey Graves Manager, BackForty Management</span>
					</figcaption>

					<div className="absolute hidden lg:block lg:right-0 lg:bottom-0 opacity-40">
						<CircleGrad className="contact-circ cursor-auto absolute flex" $transparent>
							<Love className="spin" fill="var(--c-wolf-gray)" />
							<Mark fill="var(--c-wolf-gray)" width={72} className="absolute" />
						</CircleGrad>
					</div>
				</div>
			</Container>
			<ContactForm />
		</>
	);
}
