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
							phase: 'Discovery',
							title: 'Exploring the brand',
							description:
								"BackForty's story is part grit, part innovation—two qualities we wanted front and center. We kicked off by digging deep into their dual business model, identifying how best to convey the excitement of artist management while highlighting the strategic nature of music supervision. We hammered out core objectives, user paths, and brand essence long before any code was written.",
							details: ['Brand Discovery', 'Luxury Market Positioning', 'Strategic Workshops'],
							image: '/images/hayashicase3.jpg',
							color: '#00FFE0',
						},
						{
							phase: 'Design & User Experience',
							title: 'Crafting the experience',
							description:
								'Emphasizing minimalism, gold foil accents, and forest illustrations, we built a story-first UI that immerses users in Hayashi’s refined world. Large-format imagery shows off the bottle’s design, while subtle transitions evoke a sense of timeless ritual—mirroring the care that goes into aging each drop. Every slide or section underlines the calm yet premium vibe the brand stands for.',
							details: ['Minimalist Web Design', 'Immersive UI', 'Visual Storytelling', 'Interactive Elements'],
							image: '/images/hayashicase4.jpg',
							color: '#8FFF5D',
						},
						{
							phase: 'Development',
							title: 'Building the site',
							description:
								'Behind the elegance lies a robust framework ensuring the site loads fast and adapts seamlessly on mobile. We infused interactive elements—like hover states and micro-animations—to keep users engaged, all while respecting the brand’s quiet sophistication. Scalability was key: as Hayashi releases new products or limited-edition batches, updates can be made effortlessly.',
							details: [
								'Responsive Web Development',
								'Performance Optimization',
								'Interactive Elements',
								'Scroll Animations',
							],
							image: '/images/hayashicase5.jpg',
							color: '#C1FF1D',
						},
						{
							phase: 'Launch',
							title: 'The final touch',
							description:
								'When the site went live, whisky enthusiasts and curious newcomers alike found a platform that evokes the soul of Okinawa’s island life: serene, yet brimming with potential. The golden accents, story-centric design, and frictionless UX helped elevate Hayashi beyond “just another whisky”—positioning it as a luxurious spirit in a league of its own.',
							details: [
								'Quality Assurance & Testing',
								'Analytics Implementation',
								'Performance Monitoring',
								'Team Training & Handoff',
							],
							image: '/images/hayashicase6.jpg',
							color: '#E2FF1D',
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
