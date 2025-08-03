'use client';

import Link from 'next/link';
import { CaseStudy } from '@/components/CaseStudy/CaseStudy';
import { motion } from 'framer-motion';
import CaseStudySchema from '@/components/Schema/CaseStudySchema';
import LazyImage from '@/components/Image/LazyImage';

export default function BackForty() {
	const caseStudyData = {
		title: 'BackForty Management',
		description:
			"BackForty isn't your typical artist management firm, and they're sure as hell not a run-of-the-mill music supervision crew either. They've broken the mold for 20+ years, so naturally, they needed a digital presence that does the same—pushing creative limits while staying rooted in a professional edge.",
		coverImage: '/images/backfortytransitions.gif',
		date: '2022-10-15',
		lastmod: '2025-04-03',
		client: 'BackForty Management',
		slug: 'backforty',
	};

	return (
		<>
			<CaseStudySchema caseStudy={caseStudyData} />
			<CaseStudy
				title="BackForty Management"
				subtitle="Digital Experience + Web Development"
				liveUrl="https://backfortymgmt.com"
				heroImage="/images/backfortytransitions.gif"
				variant="default"
				projectType="Dual-Business Web Platform + Music Industry Branding"
				year="2022"
				intro="BackForty isn't your typical artist management firm, and they're sure as hell not a run-of-the-mill music supervision crew either. They've broken the mold for 20+ years, so naturally, they needed a digital presence that does the same—pushing creative limits while staying rooted in a professional edge."
				challenge="How do you show off two distinct sides—artist management and music supervision—without watering down either? BackForty needed a custom web solution that could highlight both ventures in a cohesive, powerful way. They wanted the energy and authenticity that's fueled their success from day one, but also a seamless user journey for potential partners, artists, and corporate clients."
				solution="We built a responsive web application that merges modern frontend development with immersive UI, speaking directly to two different audiences—creative professionals and corporate brands. With custom animations and an innovative design, their digital presence captures the electricity of the music world and the credibility of a seasoned industry leader."
				images={{
					intro: '/images/backfortycard.jpg',
					process: [
						'/images/backfortycase3.jpg',
						'/images/backfortycase4.jpg',
						'/images/backfortycase5.jpg',
						'/images/backfortycase6.jpg',
						'/images/backfortycase7.jpg',
					],
				}}
				impact={{
					blurb: (
						<>
							Through innovative web development and user-centric design, we transformed BackForty's digital presence
							into a powerful platform that <span className="text-cyber-green">drives engagement</span> and converts
							visitors into partners.
						</>
					),
				}}
				testimonial={{
					quote:
						"I can't thank you enough for never halting, diminishing or deflecting our vision. Instead, you threw gas on the fire and guided us to make it OUR collective reality. You led us professionally to a site I can't imagine anyone has envisioned before.",
					author: 'Bodie Johnson',
					role: 'BackForty Manager, BackForty Management',
				}}
				process={{
					title: '04 - The Process',
					subtitle: 'Crafting Digital Harmony',
					description: "An exploration of how we transformed BackForty's vision into a reality.",
					steps: [
						{
							phase: 'Discovery',
							title: 'Understanding the Duality',
							description:
								"BackForty's story is part grit, part innovation—two qualities we wanted front and center. We kicked off by digging deep into their dual business model, identifying how best to convey the excitement of artist management while highlighting the strategic nature of music supervision. We hammered out core objectives, user paths, and brand essence long before any code was written.",
							details: [
								'Stakeholder interviews & vision alignment',
								'Industry & competitor analysis',
								'User journey mapping',
								'Information architecture',
							],
							image: '/images/backfortycase3.jpg',
							color: '#00FFE0',
						},
						{
							phase: 'Design & User Experience',
							title: 'Visual Symphony',
							description:
								'Our design team mapped out a dynamic layout that shapes itself around two primary user journeys—one for artist management, one for music supervision. The big challenge: keep them separate enough for clarity, yet cohesive enough so the brand still feels like one unstoppable force.',
							details: [
								'Brand evolution & design system',
								'Interactive prototyping',
								'Design concepts',
								'Iterative collaboration',
							],
							image: '/images/backfortycase4.jpg',
							color: '#8FFF5D',
						},
						{
							phase: 'Development',
							title: 'Technical Orchestration',
							description:
								"The real magic happens in the frontend development. By leveraging modern frameworks like barba.js, and GSAP, we built out fully customizable 'divisions' within the same website, and paired it with unique and engaging page transitions, ensuring each branch of the business could evolve without stepping on the other's toes.",
							details: [
								'Frontend architecture & optimization',
								'Animation & page transitions',
								'Performance optimization',
							],
							image: '/images/backfortycase5.jpg',
							color: '#C1FF1D',
						},
						{
							phase: 'Launch',
							title: 'Harmonious Deployment',
							description:
								"Finally, we tied everything together with a nod to BackForty's real-world music vibes—featuring a sweet track by Shakey Graves, <em>&ldquo;Family and Genus,&rdquo;</em> woven right into the user experience. It's the perfect testament to how music supervision and artist management can fuse into one seamless digital brand presence.",
							details: [
								'Quality assurance & testing',
								'Analytics implementation',
								'Performance monitoring',
								'Team training & handoff',
							],
							image: '/images/backfortycase6.jpg',
							color: '#E2FF1D',
						},
					],
				}}
				additionalSections={[
					{
						type: 'split-content',
						content: (
							<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
								<div className="lg:col-span-5 space-y-8">
									<h4 className="text-2xl text-cyber-green mb-4">Music Supervision</h4>
									<p className="text-moon-rock leading-relaxed">
										Through innovative web development and UX design, we created an engaging platform that showcases
										BackForty's music supervision portfolio. The interface appeals to outdoor and adventure brands while
										highlighting their impressive client roster, driving meaningful connections with potential partners.
									</p>
								</div>
								<div className="lg:col-span-7">
									<motion.div className="relative aspect-[4/3] overflow-hidden">
										<LazyImage
											src="/images/backfortycase4.jpg"
											alt="BackForty music supervision showcase"
											fill
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
										/>
									</motion.div>
								</div>
							</div>
						),
					},
					{
						type: 'split-content-reverse',
						content: (
							<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
								<div className="lg:col-span-7">
									<motion.div className="relative aspect-[4/3] overflow-hidden">
										<LazyImage
											src="/images/backfortycase3.jpg"
											alt="BackForty artist management showcase"
											fill
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
										/>
									</motion.div>
								</div>
								<div className="lg:col-span-5 space-y-8">
									<h4 className="text-2xl text-cyber-green mb-4">Artist Management</h4>
									<p className="text-moon-rock leading-relaxed">
										The artist management portal leverages cutting-edge frontend development to create an authentic
										digital space where established artists can connect with the team. Our custom web application
										seamlessly presents BackForty's track record while maintaining the cool factor that artists expect.
									</p>
								</div>
							</div>
						),
					},
					{
						type: 'centered-text',
						content: (
							<motion.p className="max-w-5xl mx-auto text-3xl leading-[3rem] text-center text-moon-rock">
								By pushing the boundaries of modern web development, we created a digital experience that breaks the
								conventional mold. The site features some musical love from our good buddy{' '}
								<Link href="/work/shakey-graves" className="text-cyber-green hover:opacity-80 transition-opacity">
									Shakey Graves
								</Link>{' '}
								and his phenomenal song "Family and Genus" — seamlessly integrated into the user experience, showcasing
								the synergy between BackForty's artist management and digital presence.
							</motion.p>
						),
					},
					{
						type: 'full-width-image',
						content: (
							<motion.div
								className="aspect-[4/3] relative"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true, margin: '-20%' }}
								transition={{ duration: 0.8 }}
							>
								<LazyImage
									src="/images/backfortycase7.jpg"
									alt="BackForty final showcase"
									fill
									className="w-full h-full object-cover"
								/>
							</motion.div>
						),
					},
				]}
			/>
		</>
	);
}
