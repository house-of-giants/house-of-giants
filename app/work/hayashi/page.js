'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/Button/Button';
import { Container } from '@/components/Container/Container';
import ContactForm from '@/components/Contact/ContactForm';
import { CircleGrad } from '@/components/Cursor/StyledCursor';
import Mark from '@/components/SVG/Mark';
import Love from '@/components/SVG/Love';

export default function Hayashi() {
	return (
		<>
			<Container as="article">
				<header className="flex flex-col items-center justify-center">
					<h1 className="text-center mb-0">Hayashi Whisky</h1>
					<h4 className="font-bold text-center mb-4">Design + Development</h4>
					<Button href="https://hayashiwhisky.com/" target="_blank" rel="noopener" className="-link">
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
					<Image src="/images/hayashicase1.jpg" fill loading="lazy" alt="" />
				</motion.div>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					Hayashi is a fresh addition to the world of Japanese whisky, offering a luxury spirit with a distinct
					commitment to evolving the generations-old awamori rice spirit process. Hailing from the Ryukyu Islands,
					Hayashi embodies the serene charm of Okinawan island life while honoring the time-honored Japanese traditions
					of patience and perfection.
				</p>
				<motion.figure
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, ease: 'easeInOut', duration: 1 }}
					viewport={{ once: true, margin: '200px' }}
				>
					<div className="aspect-[27/13] relative my-12">
						<video muted autoPlay loop controls controlsList="nofullscreen nodownload" className="w-full">
							<source src="/images/hayashicase2.webm" type="video/webm" />
							<source src="/images/hayashicase2.mp4" type="video/mp4" />
						</video>
					</div>
					<figcaption className="text-lg font-serif leading-10 italic">01 - Hayashi - intro</figcaption>
				</motion.figure>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					Hayashi sought a launch that would exude the brand's cool and premium qualities while enlightening users about
					its luxury status. We set out to narrate the tale of a high-end whisky, celebrated for its radiant and refined
					character, embodying the serene allure of Pacific island life. Our mission was to convey the three core brand
					pillars: Japanese Artistry, Aged to Perfection, and Okinawan Lifestyle.
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
							src="/images/hayashicase2.jpg"
							loading="lazy"
							className="aspect-square"
							height={652}
							width={659}
							alt=""
						/>
					</div>
					<div className="aspect-square relative">
						<Image
							src="/images/hayashicase3.jpg"
							loading="lazy"
							className="aspect-square"
							height={652}
							width={659}
							alt=""
						/>
					</div>
					<figcaption className="text-lg font-serif leading-10 italic">02 - Hayashi - intro</figcaption>
				</motion.figure>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					Our creative concept revolved around compelling visual storytelling, utilizing the product as a central
					character throughout the narrative to reinforce the identity of Hayashi. We wanted to ensure that the brand
					and the new product would be instantly recognizable on the shelf.
				</p>
				<motion.figure
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, ease: 'easeInOut', duration: 1 }}
					viewport={{ once: true, margin: '200px' }}
				>
					<div className="aspect-[27/13] relative">
						<Image src="/images/hayashicase4.jpg" loading="lazy" fill alt="" />
					</div>
					<figcaption className="text-lg font-serif leading-10 italic">03 - Hayashi - about</figcaption>
				</motion.figure>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]">
					The design direction we took was characterized by cleanliness and elegance, adorned with elements such as gold
					foil and intricate forest illustrations, invoking a sense of mystery. These elements were thoughtfully paired
					with images to convey the story of Hayashi visually.
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
							src="/images/hayashicase5.jpg"
							loading="lazy"
							className="aspect-square"
							height={652}
							width={659}
							alt=""
						/>
					</div>
					<div className="aspect-square relative">
						<Image
							src="/images/hayashicase6.jpg"
							loading="lazy"
							className="aspect-square"
							height={652}
							width={659}
							alt=""
						/>
					</div>
					<figcaption className="text-lg font-serif leading-10 italic">04 - Hayashi - product</figcaption>
				</motion.figure>
				<p className="my-32 max-w-5xl mx-auto text-3xl lh-3 leading-[3rem]"></p>
			</Container>
			<ContactForm />
		</>
	);
}
