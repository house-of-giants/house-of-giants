'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/Button/Button';
import { Container } from '@/components/Container/Container';
import ContactForm from '@/components/Contact/ContactForm';
import { CircleGrad } from '@/components/Cursor/StyledCursor';
import Mark from '@/components/SVG/Mark';
import Love from '@/components/SVG/Love';

export default function B40() {
	return (
		<>
			<Container as="article">
				<header className="flex flex-col items-center justify-center">
					<h1 className="text-center mb-0">
						BackForty
						<br />
						Management
					</h1>
					<h4 className="font-bold text-center mb-4">Design + Development</h4>
					<Button href="https://backfortymgmt.com" target="_blank" rel="noopener" className="-link">
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
						src="/images/backfortycase1.jpg"
						fill
						loading="lazy"
						alt="Wide shot of BackForty Movie of The Week album cover."
					/>
				</motion.div>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					BackForty is a pioneering artist management and music supervision firm with a profound commitment to placing
					art at the forefront of their endeavors. With two distinct facets - artist management and music supervision -
					the company boasts over two decades of experience in the music industry and creative supervision landscape.
				</p>
				<motion.figure
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, ease: 'easeInOut', duration: 1 }}
					viewport={{ once: true, margin: '200px' }}
				>
					<div className="aspect-[27/13] relative my-12">
						<Image src="/images/backfortycase2.jpg" fill alt="" />
					</div>
					<figcaption className="text-lg font-serif leading-10 italic">01 - BackForty - homepage</figcaption>
				</motion.figure>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					The challenge was to unveil the dual identities of BackForty - artist management and music supervision - in a
					manner that exuded coolness and allure. The aim was to define what artist management means and highlight the
					diversity of projects undertaken in the realm of music supervision. These two facets, while distinct, were to
					be portrayed as integral parts of one remarkable company.
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
							src="/images/backfortycase3.jpg"
							loading="lazy"
							className="aspect-square"
							height={652}
							width={659}
							alt=""
						/>
					</div>
					<div className="aspect-square relative">
						<Image
							src="/images/backfortycase4.jpg"
							loading="lazy"
							className="aspect-square"
							height={652}
							width={659}
							alt=""
						/>
					</div>
					<figcaption className="text-lg font-serif leading-10 italic">02 - BackForty - services</figcaption>
				</motion.figure>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					Our creative concept aimed to craft an engaging and enjoyable experience that seamlessly merged both worlds
					within BackForty.
				</p>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					Music Supervision: To entice those seeking music supervision services, the approach was to appeal to outdoor
					clients, showcase videos with music, exhibit the client list, and drive individuals to connect with Bodie,
					ensuring they worked on the coolest projects imaginable.
				</p>
				<motion.figure
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, ease: 'easeInOut', duration: 1 }}
					viewport={{ once: true, margin: '200px' }}
				>
					<div className="aspect-[27/13] relative">
						<Image src="/images/backfortycase5.jpg" loading="lazy" fill alt="" />
					</div>
					<figcaption className="text-lg font-serif leading-10 italic">03 - BackForty - artist management</figcaption>
				</motion.figure>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					Artist Management: The artist management side needed to establish a strong presence and credibility. It
					provided an opportunity for established artists to conduct reference checks, greet the team, and peruse a list
					of artists they had previously worked with.
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
							src="/images/backfortycase6.jpg"
							loading="lazy"
							className="aspect-square"
							height={652}
							width={659}
							alt=""
						/>
					</div>
					<div className="aspect-square relative">
						<Image
							src="/images/backfortycase7.jpg"
							loading="lazy"
							className="aspect-square"
							height={652}
							width={659}
							alt=""
						/>
					</div>
					<figcaption className="text-lg font-serif leading-10 italic">04 - BackForty - about</figcaption>
				</motion.figure>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					To showcase both sides of the company, we harnessed the wealth of captivating content inherent to each
					division. Photos and videos took center stage, infusing excitement and credibility into each service.
					Micro-interactions within the site injected distinct creative personalities into each page, making the user
					experience not only informative but also a playful and engaging journey.
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
						<span className="text-gray-600">BackForty Manager, BackForty Management</span>
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
