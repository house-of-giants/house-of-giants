'use client';

import { CaseStudy } from '@/components/CaseStudy/CaseStudy';
import CaseStudySchema from '@/components/Schema/CaseStudySchema';
import { motion } from 'framer-motion';

export default function Hayashi() {
	const caseStudyData = {
		title: 'Hayashi Whisky',
		description:
			"Hayashi enters the world of Japanese whisky with a mission: evolve the time-honored awamori rice spirit process, blending the tranquil aura of Okinawan island life with the meticulous artistry that defines Japan's premium beverages.",
		coverImage: '/images/hayashicase4.jpg',
		date: '2022-09-01',
		lastmod: '2022-09-01',
		client: 'Hayashi Whisky',
		slug: 'hayashi',
	};

	return (
		<>
			<CaseStudySchema caseStudy={caseStudyData} />
			<CaseStudy
				title="Hayashi Whisky"
				subtitle="Web Design + Development"
				heroImage="/images/hayashicase4.jpg"
				heroVideo="/images/hayashicase2.webm"
				variant="gold"
				projectType="Luxury Brand Website + Immersive Visual Storytelling"
				year="2022"
				intro="Hayashi enters the world of Japanese whisky with a mission: evolve the time-honored awamori rice spirit process, blending the tranquil aura of Okinawan island life with the meticulous artistry that defines Japan's premium beverages."
				challenge="Hayashi needed more than just a pretty label—they wanted a digital launch that exuded upscale cool while educating consumers about their luxury status. The brand’s three core pillars—Japanese Artistry, Aged to Perfection, and Okinawan Lifestyle—had to shine through every aspect of the site. We had to capture the spirit’s radiant character, grounded in island serenity, while making sure Hayashi would be instantly recognizable on the shelf (and online)."
				solution="We leaned into immersive visual storytelling to introduce Hayashi as the star of its own narrative. From gold-foil accents and intricate forest motifs to subtle nods at Ryukyu Islands culture, we built a clean, elegant website that weaves mystery, modernity, and tradition into each scroll. By showcasing the bottle as a central figure, we reinforced the brand identity at every turn—ensuring Hayashi's prestige and uniqueness resonated with whisky aficionados and novices alike."
				images={{
					intro: '/images/hayashicase2.jpg',
					process: [
						'/images/hayashicase3.jpg',
						'/images/hayashicase4.jpg',
						'/images/hayashicase5.jpg',
						'/images/hayashicase6.jpg',
					],
				}}
				impact={{
					blurb: (
						<>
							By blending subtle mystique, premium visuals, and a user-centric approach, House of Giants created a
							digital experience that embodies Hayashi's ethos: part traditional Japanese heritage, part{' '}
							<span className="text-cyber-green">innovative frontier</span>. The final result? A captivating online
							presence that stands as proudly on the web as Hayashi does on the top shelf of any discerning whisky
							connoisseur's collection.
						</>
					),
				}}
				process={{
					title: '04 - The Process',
					subtitle: 'The Process',
					description:
						'We dove into the Ryukyu Island heritage, and what truly makes Japanese whisky so revered. Our team pinpointed the traits that set Hayashi apart—luxury, artistry, and island serenity—and brainstormed how best to convey them online without losing the sense of tradition.',
					steps: [
						{
							phase: 'Discovery & Planning',
							title: 'Understanding the Vision',
							description:
								"We began by deeply understanding Hayashi's unique position in the market and their vision for the future. Through collaborative sessions, we identified the need for a website that would not just showcase their products, but tell their story and connect with their audience on a deeper level.",
							details: [
								'Brand analysis & positioning',
								'User research & personas',
								'Content strategy planning',
								'Technical requirements',
							],
							image: '/images/hayashicase1.jpg',
							color: '#00ffe0',
						},
						{
							phase: 'Design & Development',
							title: 'Crafting the Experience',
							description:
								"We designed a website that captures the essence of Hayashi's innovative spirit. The development focused on creating smooth animations, intuitive navigation, and a responsive design that works seamlessly across all devices.",
							details: [
								'UI/UX design',
								'Responsive development',
								'Animation implementation',
								'Performance optimization',
							],
							image: '/images/hayashicase2.jpg',
							color: '#8e3dfd',
						},
						{
							phase: 'Content & Branding',
							title: 'Storytelling & Identity',
							description:
								'We worked closely with Hayashi to develop compelling content that tells their story authentically. The website showcases their products while highlighting the innovation and craftsmanship that sets them apart in the market.',
							details: ['Content creation', 'Brand storytelling', 'Product showcase', 'Visual identity'],
							image: '/images/hayashicase3.jpg',
							color: '#d4ff35',
						},
						{
							phase: 'Launch & Optimization',
							title: 'Going Live & Growing',
							description:
								'After a successful launch, we continue to work with Hayashi to optimize their website based on user feedback and analytics. The platform is designed to evolve with their business needs and market changes.',
							details: [
								'Launch preparation',
								'Performance monitoring',
								'User feedback integration',
								'Ongoing optimization',
							],
							image: '/images/hayashicase4.jpg',
							color: '#e61e5e',
						},
					],
				}}
				additionalSections={[
					{
						type: 'centered-text',
						content: (
							<motion.p className="max-w-5xl mx-auto text-3xl leading-[3rem] text-center text-moon-rock">
								By blending subtle mystique, premium visuals, and a user-centric approach, House of Giants created a
								digital experience that embodies Hayashi’s ethos: part traditional Japanese heritage, part innovative
								frontier. The final result? A captivating online presence that stands as proudly on the web as Hayashi
								does on the top shelf of any discerning whisky connoisseur’s collection
							</motion.p>
						),
					},
					{
						type: 'full-width-image',
						content: (
							<motion.div
								className="aspect-video relative"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true, margin: '-20%' }}
								transition={{ duration: 0.8 }}
							>
								<video src="/images/hayashicase2.webm" autoPlay muted loop className="w-full h-full object-cover" />
							</motion.div>
						),
					},
				]}
			/>
		</>
	);
}
